# env-check 🔍

A fast, zero-config **Node.js CLI tool** to validate `.env` files against `.env.example`.

Built with **TypeScript**, designed for **developers, teams, and CI pipelines** to avoid broken deployments caused by missing or misconfigured environment variables.

---

## ✨ Features

- ✅ Detect **missing environment variables**
- ⚠️ Detect **unused variables**
- 🔐 Warn about **potential hardcoded secrets**
- 📦 Works as a **global CLI**
- 🤖 **CI-friendly** (exit codes)
- ⚡ Auto-detects `.env.example`
- 🧠 Sensible defaults, explicit overrides

---

## 📦 Installation (from GitHub)

> No npm publish required.

### Global install

```bash
npm install -g github:faizcasm/env-validator


🚀 Usage
Basic check
env-check .env


Automatically compares with .env.example if present.

Custom example file
env-check .env --example .env.prod.example

Strict mode (fail on unused vars)
env-check .env --strict

📤 Example Output
✖ Missing variables:
  - DATABASE_URL

⚠ Unused variables:
  - DEBUG

🔐 Possible hardcoded secrets:
  - JWT_SECRET



🔧 Development
git clone https://github.com/<your-username>/env-validator.git
cd env-validator
npm install
npm run build
npm link
env-check .env


🛠 Tech Stack

Node.js

TypeScript

Commander

Chalk

dotenv





🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repo and submit a PR.