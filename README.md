# Trade & Tap

![Build Status](https://img.shields.io/github/actions/workflow/status/CaLe-s-Villain/trade-tap/test.yml?branch=dev)
![License](https://img.shields.io/github/license/CaLe-s-Villain/trade-tap)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

Welcome to **Trade & Tap** — a full-stack monorepo built with React (Vite), Express, Sequelize, and Vitest. This app is structured with npm workspaces for clean dependency management and streamlined dev workflows.

---

## 📚 Table of Contents

- [Project Overview](#-project-overview)
- [Quickstart](#-quickstart)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Testing](#-testing)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [Additional Resources](#-additional-resources)
- [Thanks](#-thanks)

---

## 🚀 Project Overview

Trade & Tap is a monorepo-based e-commerce platform built for small business use cases. It includes:

- **Frontend** (`client/`) — React 19 + Vite + Vitest
- **Backend** (`server/`) — Express + Sequelize + PostgreSQL + Vitest
- **Testing** — Vitest for unit tests, Cypress for E2E
- **CI/CD** — GitHub Actions
- **DevOps** — Workspace-aware scripts, Docker support (in progress)

---

## 🧰 Quickstart

```bash
# 1. Clone the repo
git clone https://github.com/CaLe-s-Villain/trade-tap
cd trade-tap

# 2. Install all workspace dependencies
npm install

# 3. Copy environment variables
cp client/.env.example client/.env
cp server/.env.example server/.env

# 4. Run the app
npm run dev
```

---

## 📦 Project Structure

```
trade-tap/
├── client/       # React frontend
├── server/       # Express backend
├── .github/      # GitHub Actions workflows
├── .husky/       # Git hooks
├── package.json  # Root with workspaces
└── README.md     # This file
```

---

## 📜 Scripts

All root-level scripts are **workspace-aware**:

| Command                | Description                                |
| ---------------------- | ------------------------------------------ |
| `npm run dev`          | Start client and server concurrently       |
| `npm test`             | Run unit tests in both workspaces (Vitest) |
| `npm run lint`         | Lint both workspaces                       |
| `npm run lint:fix`     | Auto-fix lint issues in both workspaces    |
| `npm run format`       | Format the codebase using Prettier         |
| `npm run format:check` | Check formatting without writing changes   |
| `npm run cypress:run`  | Run Cypress E2E tests                      |
| `npm run scripts:help` | Show all available root-level scripts      |

---

## 🧪 Testing

| Type | Tool    | Location                                |
| ---- | ------- | --------------------------------------- |
| Unit | Vitest  | `client/`, `server/`                    |
| E2E  | Cypress | Root scripts, tests in `client/cypress` |

To run all tests:

```bash
npm test               # unit tests
npm run cypress:run    # E2E tests
```

---

## 🔐 Environment Variables

Environment variables are required in both `client/` and `server/`. Use the provided example files:

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Required keys for `server/.env`:

- `DATABASE_URL`
- `JWT_SECRET`
- `NODE_ENV`

For CI/CD, secrets should be stored in **GitHub Secrets**, not committed.

---

## 🤝 Contributing

We follow a strict branching, labeling, and PR workflow. Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) for full guidelines.

Highlights:

- Branch from `dev`
- Use issue-linked branches (e.g. `feat/67-new-feature`)
- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Auto-merge available for low-risk PRs

---

## 📘 Additional Resources

- [CONTRIBUTING.md](./CONTRIBUTING.md) — full contribution guidelines
- `.env.example` files — base configuration
- GitHub Issues — use templates for new bugs/features
- Husky + Commitlint — for commit formatting & quality

---

## 🫶 Thanks

Thanks for checking out **Trade & Tap** — we welcome feedback, contributors, and collaborators!

If you have questions, ideas, or bugs to report, open an issue or join the discussion.

---

## 🧪 Built With

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge)
![Sequelize](https://img.shields.io/badge/-Sequelize-52B0E7?logo=sequelize&logoColor=white&style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?logo=postgresql&logoColor=white&style=for-the-badge)
![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?logo=vitest&logoColor=white&style=for-the-badge)
![Cypress](https://img.shields.io/badge/-Cypress-17202C?logo=cypress&logoColor=white&style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=for-the-badge)
