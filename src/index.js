// OGpipsBot - Forex Risk Calculator for Mentors & Students
// Robust pip-value conversion for ANY quote currency (returns USD per 1 lot)
// + Membership gate: only group members can use the bot
// Built with ❤️ for Naija forex traders

const { Telegraf } = require("telegraf");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// ====== CONFIG: group membership ======
const GROUP_ID = process.env.GROUP_ID;
const JOIN_LINK = `https://t.me/${process.env.GROUP_ID}`;

// File to store cached pip values (USD per 1 lot)
const pipFilePath = path.join(__dirname, "pipValues.json");

// Helpers: load/save cache
function loadPipValues() {
  if (!fs.existsSync(pipFilePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(pipFilePath, "utf8"));
  } catch (e) {
    return {};
  }
}
function savePipValues(data) {
  try {
    fs.writeFileSync(pipFilePath, JSON.stringify(data, null, 2));
    console.log("💾 pipValues.json updated");
  } catch (e) {
    console.error("Failed to save pipValues.json", e);
  }
}

// Fetch a single price from Twelve Data (symbol format like "EUR/USD" or "USD/JPY")
async function fetchPrice(symbol) {
  const apiKey = process.env.FOREX_API_KEY;
  if (!apiKey) throw new Error("Missing FOREX_API_KEY in .env");
  const url = `https://api.twelvedata.com/price?symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${symbol}`);
  const data = await res.json();
  if (!data || data.price === undefined || data.price === null) {
    throw new Error(`No price for ${symbol}`);
  }
  const p = Number(data.price);
  if (!isFinite(p)) throw new Error(`Bad price for ${symbol}`);
  return p;
}

/**
 * Return USD per 1 unit of <quote>.
 * Tries in order:
 *  1) QUOTE/USD  (direct)
 *  2) USD/QUOTE  (invert)
 *  3) triangulate via a list of intermediaries (QUOTE/<m> * <m>/USD or inverse)
 */
async function getQuoteToUSD(quote) {
  quote = quote.toUpperCase();
  if (quote === "USD") return 1;

  // Try direct QUOTE/USD
  try {
    const direct = await fetchPrice(`${quote}/USD`);
    return direct; // 1 QUOTE = direct USD
  } catch (_) {}

  // Try USD/QUOTE and invert
  try {
    const inv = await fetchPrice(`USD/${quote}`);
    if (inv === 0) throw new Error("zero rate");
    return 1 / inv; // 1 QUOTE = 1/(USD/QUOTE) USD
  } catch (_) {}

  // Triangulation: try common intermediaries
  const inters = ["EUR", "GBP", "AUD", "CAD", "CHF", "JPY", "NZD", "SGD"];
  for (const m of inters) {
    if (m === quote || m === "USD") continue;

    // Try QUOTE / m  and m / USD
    try {
      const q_m = await fetchPrice(`${quote}/${m}`);
      const m_usd = await (async () => {
        try {
          return await fetchPrice(`${m}/USD`);
        } catch {
          const inv2 = await fetchPrice(`USD/${m}`);
          return 1 / inv2;
        }
      })();
      return q_m * m_usd;
    } catch (_) {
      // try m/QUOTE and m/USD
      try {
        const m_q = await fetchPrice(`${m}/${quote}`);
        const m_usd = await (async () => {
          try {
            return await fetchPrice(`${m}/USD`);
          } catch {
            const inv2 = await fetchPrice(`USD/${m}`);
            return 1 / inv2;
          }
        })();
        if (m_q === 0) continue;
        return (1 / m_q) * m_usd;
      } catch (_) {
        // keep trying others
      }
    }
  }

  throw new Error(`Unable to derive ${quote}→USD rate`);
}

/**
 * Main: get pip value per 1 lot (100,000 units) in USD for any pair.
 * - For non-JPY pairs: pip size = 0.0001 ⇒ pipInQuote = 10 (quote units)
 * - For JPY pairs: pip size = 0.01   ⇒ pipInQuote = 1000 (JPY units)
 * - Metal overrides (adjust if broker differs)
 */
async function getPipValue(pair) {
  const P = pair.toUpperCase().replace(/[^A-Z]/g, "");
  if (P.length !== 6) throw new Error("Invalid pair format");

  // Load cache
  const cache = loadPipValues();
  if (cache[P]) return cache[P];

  // Special overrides (adjust to your broker’s contract size)
  const OVERRIDES = {
    "XAUUSD": 1.0, // $1 per pip per 1 lot
    "XAGUSD": 0.5, // example value; verify with broker
  };
  if (OVERRIDES[P]) {
    cache[P] = OVERRIDES[P];
    savePipValues(cache);
    return cache[P];
  }

  const base = P.slice(0, 3);
  const quote = P.slice(3, 6);

  // pip in quote currency units per 1 lot
  const pipInQuote = quote === "JPY" ? 1000 : 10; // 1000 JPY or 10 quote units

  // convert quote -> USD
  const quoteToUsd = await getQuoteToUSD(quote); // USD per 1 QUOTE
  const pipUSD = pipInQuote * quoteToUsd; // USD per pip per 1 lot

  // cache and return
  cache[P] = Number(pipUSD);
  savePipValues(cache);
  return cache[P];
}

// ====== Membership gate helper ======
async function requireMembership(ctx) {
  if (!GROUP_ID) {
    // If no GROUP_ID configured, allow all (fail-open)
    return true;
  }
  try {
    console.log("group Id", GROUP_ID);
    
    const userId = ctx.from?.id;
    if (!userId) throw new Error("No user id");

    const member = await ctx.telegram.getChatMember(GROUP_ID, userId);
    const okStatuses = ["creator", "administrator", "member"];
    if (okStatuses.includes(member.status)) {
      return true;
    }
    await ctx.reply(
      `🚫 Access restricted.\n\nJoin our group to use this bot:\n${JOIN_LINK}`
    );
    return false;
  } catch (err) {
    console.error("Membership check failed:", err?.response || err);
    await ctx.reply(
      `⚠️ Could not verify your group membership.\nPlease join here and try again:\n${JOIN_LINK}`
    );
    return false;
  }
}

// ------------------- Bot logic -------------------

bot.start(async (ctx) => {
  const allowed = await requireMembership(ctx);
  if (!allowed) return;

  ctx.reply(
    "👋 Welcome to OGpipsBot!\n\n" +
      "Send: `balance riskPercent stopLossPoints pair` (points, 1 pip = 10 points)\n" +
      "Example: `100 5 500 EURUSD` (500 points = 50 pips)",
    { parse_mode: "Markdown" }
  );
});

bot.on("text", async (ctx) => {
  const allowed = await requireMembership(ctx);
  if (!allowed) return;

  const input = (ctx.message.text || "").trim().split(/\s+/);

  if (input.length !== 4) {
    return ctx.reply(
      "⚠️ Wrong format. Send like: `100 20 500 EURUSD` (balance risk% stopPoints pair)",
      { parse_mode: "Markdown" }
    );
  }

  const [balanceStr, riskStr, slPointsStr, pairRaw] = input;
  const balance = Number(balanceStr);
  const riskPercent = Number(String(riskStr).replace("%", ""));
  const stopLossPoints = Number(slPointsStr);
  const pair = pairRaw.toUpperCase();

  if (![balance, riskPercent, stopLossPoints].every((n) => isFinite(n))) {
    return ctx.reply("⚠️ Please enter valid numbers like: `100 2 500 EURUSD`", {
      parse_mode: "Markdown",
    });
  }

  try {
    if (!/^[A-Z]{6}$/.test(pair))
      return ctx.reply("⚠️ Invalid pair. Use like EURUSD or AUDJPY.");

    // pips and pip value
    const stopLossPips = stopLossPoints / 10;
    const pipValuePerLot = await getPipValue(pair); // USD per pip per 1 lot
    const riskAmount = (balance * riskPercent) / 100;

    // lot size (in standard lots)
    const lotSize = riskAmount / (stopLossPips * pipValuePerLot);

    await ctx.reply(
      `✅ *OGpips Risk Result*\n\n` +
        `💰 Balance: $${balance}\n` +
        `🎯 Risk: ${riskPercent}% ($${riskAmount.toFixed(2)})\n` +
        `📉 Stop Loss: ${stopLossPoints} points (${stopLossPips} pips)\n` +
        `💱 Pair: ${pair}\n` +
        `📊 Pip Value: $${pipValuePerLot.toFixed(4)} per 1 lot (USD)\n\n` +
        `👉 Recommended Lot Size: *${(Math.floor(lotSize * 100) / 100).toFixed(2)}*`,
      { parse_mode: "Markdown" }
    );
  } catch (err) {
    console.error("Bot calculation error:", err);
    return ctx.reply(
      "⚠️ Could not compute pip value. Please check the pair or try again later."
    );
  }
});

// start the bot (long-polling)
bot.launch();
console.log("🚀 OGpipsBot is running...");

// graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
