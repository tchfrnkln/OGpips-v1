# OGpipsBot

A free Telegram bot built for **Naija Forex mentors & students** to easily calculate lot sizes and manage risk properly.

---

## 🚀 Features
- Quick risk-based lot size calculation
- Simple `/risk` command for students
- Easy to set up and use for mentors

---

## 📦 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/ogpipsbot.git
   cd ogpipsbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in the root folder:
   ```env
   BotToken=your-telegram-bot-token
   ```

4. **Run the bot**
   ```bash
   node index.js
   ```

---

## 🔑 Example Usage
- Type `/start` → Get welcome message
- Type `/risk` → See input format
- Send: `100 2 50`
  - Balance: $100
  - Risk: 2%
  - Stop Loss: 50 pips

Bot responds with:
```
✅ OGpips Risk Result
💰 Balance: $100
🎯 Risk: 2% ($2.00)
📉 Stop Loss: 50 pips
👉 Recommended Lot Size: 0.04
```

---

## ⚠️ Note
- This is a **simplified formula** for micro lot size estimation.
- Mentors should adjust calculations for different brokers/pairs.

---

👨🏾‍💻 Built with ❤️ for Naija forex traders.
