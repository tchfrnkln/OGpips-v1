// OGpipsBot - Forex Risk Calculator for Mentors & Students
// Robust pip-value conversion for ANY quote currency (returns USD per 1 lot)
// + Membership gate: only group members can use the bot
// Built with ❤️ for Naija forex traders

const { Telegraf } = require("telegraf");
const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// ========== BOT INITIALIZATION ==========
const bot = new Telegraf(process.env.BOT_TOKEN);
const GROUP_ID = process.env.GROUP_ID;
const JOIN_LINK = process.env.JOIN_LINK;
const pipFilePath = path.join(__dirname, "pipValues.json");

// ========== CACHE HELPERS ==========
function loadPipValues() {
  if (!fs.existsSync(pipFilePath)) return {};
  try {
    return JSON.parse(fs.readFileSync(pipFilePath, "utf8"));
  } catch {
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

// ========== PRICE FETCHING ==========
async function fetchPrice(symbol) {
  const apiKey = process.env.FOREX_API_KEY;
  if (!apiKey) throw new Error("Missing FOREX_API_KEY in .env");
  const url = `https://api.twelvedata.com/price?symbol=${encodeURIComponent(
    symbol
  )}&apikey=${apiKey}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${symbol}`);
  const data = await res.json();
  if (!data || data.price === undefined || data.price === null)
    throw new Error(`No price for ${symbol}`);
  const p = Number(data.price);
  if (!isFinite(p)) throw new Error(`Bad price for ${symbol}`);
  return p;
}

// ========== QUOTE → USD CONVERSION ==========
async function getQuoteToUSD(quote) {
  quote = quote.toUpperCase();
  if (quote === "USD") return 1;

  try {
    const direct = await fetchPrice(`${quote}/USD`);
    return direct;
  } catch (_) {}

  try {
    const inv = await fetchPrice(`USD/${quote}`);
    if (inv === 0) throw new Error("zero rate");
    return 1 / inv;
  } catch (_) {}

  const inters = ["EUR", "GBP", "AUD", "CAD", "CHF", "JPY", "NZD", "SGD"];
  for (const m of inters) {
    if (m === quote || m === "USD") continue;

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
      } catch (_) {}
    }
  }

  throw new Error(`Unable to derive ${quote}→USD rate`);
}

// ========== PIP VALUE ==========
async function getPipValue(pair) {
  const P = pair.toUpperCase().replace(/[^A-Z]/g, "");
  if (P.length !== 6) throw new Error("Invalid pair format");

  const cache = loadPipValues();
  if (cache[P]) return cache[P];

  const OVERRIDES = {
    XAUUSD: 1.0,
    XAGUSD: 0.5,
  };
  if (OVERRIDES[P]) {
    cache[P] = OVERRIDES[P];
    savePipValues(cache);
    return cache[P];
  }

  const base = P.slice(0, 3);
  const quote = P.slice(3, 6);
  const pipInQuote = quote === "JPY" ? 1000 : 10;
  const quoteToUsd = await getQuoteToUSD(quote);
  const pipUSD = pipInQuote * quoteToUsd;
  cache[P] = Number(pipUSD);
  savePipValues(cache);
  return cache[P];
}

// ========== MEMBERSHIP GATE ==========
async function requireMembership(ctx) {
  if (!GROUP_ID) return true;
  try {
    const userId = ctx.from?.id;
    if (!userId) throw new Error("No user id");
    const member = await ctx.telegram.getChatMember(GROUP_ID, userId);
    const okStatuses = ["creator", "administrator", "member"];
    if (okStatuses.includes(member.status)) return true;

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

// ========== BOT COMMANDS ==========
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

    const stopLossPips = stopLossPoints / 10;
    const pipValuePerLot = await getPipValue(pair);
    const riskAmount = (balance * riskPercent) / 100;
    const lotSize = riskAmount / (stopLossPips * pipValuePerLot);

    await ctx.reply(
      `✅ *OGpips Risk Result*\n\n` +
        `💰 Balance: $${balance}\n` +
        `🎯 Risk: ${riskPercent}% ($${riskAmount.toFixed(2)})\n` +
        `📉 Stop Loss: ${stopLossPoints} points (${stopLossPips} pips)\n` +
        `💱 Pair: ${pair}\n` +
        `📊 Pip Value: $${pipValuePerLot.toFixed(4)} per 1 lot (USD)\n\n` +
        `👉 Recommended Lot Size: *${(
          Math.floor(lotSize * 100) / 100
        ).toFixed(2)}*`,
      { parse_mode: "Markdown" }
    );
  } catch (err) {
    console.error("Bot calculation error:", err);
    return ctx.reply(
      "⚠️ Could not compute pip value. Please check the pair or try again later."
    );
  }
});

// ========== EXPRESS SERVER FOR WEBHOOK ==========
const app = express();
app.use(express.json());
app.use(bot.webhookCallback("/webhook"));

const BOT_URL = process.env.BOT_URL; // e.g. https://ogpipsbot-xxxxx.a.run.app
if (!BOT_URL) {
  console.error("❌ Missing BOT_URL env variable");
  process.exit(1);
}

// Set webhook on startup
(async () => {
  try {
    await bot.telegram.setWebhook(`${BOT_URL}/webhook`);
    console.log(`✅ Webhook set to ${BOT_URL}/webhook`);
  } catch (err) {
    console.error("Failed to set webhook:", err);
  }
})();

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`🚀 OGpipsBot webhook server running on port ${port}`)
);
