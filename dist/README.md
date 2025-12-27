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


#usage
env-check .env #Automatically compares with .env.example if present.

env-check .env --example .env.prod.example #custom check

env-check .env --strict #strict mode check (fail on unused vars)

📤 Example Output

✖ Missing variables:
  - DATABASE_URL

⚠ Unused variables:
  - DEBUG

🔐 Possible hardcoded secrets:
  - JWT_SECRET


🛠 Development:
git clone https://github.com/faizcasm/env-validator.git
cd env-validator
npm install
npm run build
npm link
env-check .env



🧰 Tech Stack

Node.js

TypeScript

Commander

dotenv

chalk



🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repo and submit a PR.