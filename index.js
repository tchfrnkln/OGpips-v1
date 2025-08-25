// OGpipsBot - Forex Risk Calculator for Mentors & Students
// Built with ❤️ for Naija forex traders

const { Telegraf } = require("telegraf");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

// File to store cached pip values
const pipFilePath = path.join(__dirname, "pipValues.json");

// Load pip values
function loadPipValues() {
  if (!fs.existsSync(pipFilePath)) return {};
  return JSON.parse(fs.readFileSync(pipFilePath, "utf8"));
}

// Save pip values
function savePipValues(data) {
  console.log("Pip values cached:", data);
  fs.writeFileSync(pipFilePath, JSON.stringify(data, null, 2));
}

// Get pip value (from cache first, else fetch + save)
async function getPipValue(pair, base, quote) {
  pair = pair.toUpperCase();
  let pipValues = loadPipValues();

  if (pipValues[pair]) {
    return pipValues[pair];
  }

  console.log(`🌍 Fetching pip value for ${pair} from API...`);

  const url = `https://api.twelvedata.com/price?symbol=${base}/${quote}&apikey=${process.env.FOREX_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!data.price) throw new Error("Invalid pair or API error");

  const quoteToUsd = Number(data.price);

  // Pip value per 0.01 lot (micro lot)
  let pipValuePerLot;
  if (quote === "JPY") {
    pipValuePerLot = (1000 / quoteToUsd);
  } else {
    pipValuePerLot = (10 / quoteToUsd);
  }

  // Cache it
  pipValues[pair] = pipValuePerLot;
  savePipValues(pipValues);

  return pipValuePerLot;
}

// Start command
bot.start((ctx) => {
  ctx.reply(
    "👋 Welcome to OGpipsBot!\n\n" +
      "I’ll help you calculate lot sizes so you can manage risk properly.\n\n" +
      "Just send me your details in this format:\n\n" +
      "`balance riskPercent stopLossPoints pair`\n\n" +
      "Example: `100 2 500 EURUSD`\n" +
      "➡️ Balance = $100\n➡️ Risk = 2%\n➡️ Stop Loss = 500 points (50 pips)\n➡️ Pair = EURUSD",
    { parse_mode: "Markdown" }
  );
});

// Handle risk input with pair
bot.on("text", async (ctx) => {
  const input = ctx.message.text.trim().split(/\s+/);

  // Expect 4 values: balance, riskPercent, stopLossPoints, pair
  if (input.length !== 4)
    return ctx.reply(
      "⚠️ Wrong format.\n\n" +
        "Send me details in this format:\n" +
        "`balance riskPercent stopLossPoints pair`\n\n" +
        "Example: `100 2 500 EURUSD`\n" +
        "➡️ Balance = $100\n➡️ Risk = 2%\n➡️ Stop Loss = 500 points (50 pips)\n➡️ Pair = EURUSD",
      { parse_mode: "Markdown" }
    );

  const [balanceStr, riskStr, slPointsStr, pairRaw] = input;
  const balance = Number(balanceStr);
  const riskPercent = Number(riskStr);
  const stopLossPoints = Number(slPointsStr);
  const pair = pairRaw.toUpperCase();

  if (isNaN(balance) || isNaN(riskPercent) || isNaN(stopLossPoints)) {
    return ctx.reply("⚠️ Please enter valid numbers like: `100 2 500 EURUSD`", {
      parse_mode: "Markdown",
    });
  }

  try {
    // Validate pair
    const base = pair.slice(0, 3);
    const quote = pair.slice(3, 6);
    if (pair.length !== 6 || !/^[A-Z]{6}$/.test(pair)) {
      return ctx.reply(
        "⚠️ Please enter a valid currency pair like EURUSD or USDJPY."
      );
    }

    // Get pip value (from cache or API)
    const pipValuePerLot = await getPipValue(pair, base, quote); 
    console.log(`Pip value for ${pair}: $${pipValuePerLot} per 1 lot`);
    

    // Convert points -> pips
    const stopLossPips = stopLossPoints / 10;

    // Risk amount
    const riskAmount = (balance * riskPercent) / 100;

    // Lot size calculation
    const lotSize = riskAmount / (stopLossPips * pipValuePerLot);
    

    ctx.reply(
      `✅ *OGpips Risk Result*\n\n` +
        `💰 Balance: $${balance}\n` +
        `🎯 Risk: ${riskPercent}% ($${riskAmount.toFixed(2)})\n` +
        `📉 Stop Loss: ${stopLossPoints} points (${stopLossPips} pips)\n` +
        `💱 Pair: ${pair}\n` +
        `📊 Pip Value: $${pipValuePerLot.toFixed(2)} per 1 lot\n\n` +
        `👉 Recommended Lot Size: *${lotSize.toFixed(2)}*`,
      { parse_mode: "Markdown" }
    );
  } catch (err) {
    console.error(err);
    ctx.reply(
      "⚠️ Error fetching pip value. Please check the pair or try again later."
    );
  }
});

// Launch the bot
bot.launch();
console.log("🚀 OGpipsBot is running...");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
