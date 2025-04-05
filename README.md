# Trade & Tap

![Build Status](https://img.shields.io/github/actions/workflow/status/CaLe-s-Villain/trade-tap/test.yml?branch=dev)
![License](https://img.shields.io/github/license/CaLe-s-Villain/trade-tap)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)

Welcome to **Trade & Tap** — a full-stack monorepo built with React (Vite), Express, Sequelize, and Vitest. This app is structured with npm workspaces for clean dependency management and streamlined dev workflows.

---

## 📚 Table of Contents

- [Project Overview](#-project-overview)
- [Quickstart](#-quickstart)
- [Requirements](#-requirements)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Docker-Based Development](#-docker-based-development)
- [Testing](#-testing)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [Additional Resources](#-additional-resources)
- [Thanks](#-thanks)
- [Built With](#-built-with)

---

## 🚀 Project Overview

Trade & Tap is a monorepo-based e-commerce platform built for small business use cases. It includes:

- **Frontend** (`client/`) — React 19 + Vite + Vitest
- **Backend** (`server/`) — Express + Sequelize + PostgreSQL + Vitest
- **Testing** — Vitest for unit/integration, Cypress for E2E
- **CI/CD** — GitHub Actions
- **DevOps** — Workspace-aware scripts, Docker support

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

## ✅ Requirements

| Tool           | Version        | Installation Link                                     |
| -------------- | -------------- | ----------------------------------------------------- |
| Node.js        | 20.x           | [Install Node.js](https://nodejs.org/en/download)     |
| npm            | 9.x or later   | Comes with Node.js                                    |
| Git            | Latest stable  | [Install Git](https://git-scm.com/downloads)          |
| Docker         | 24.x or later  | [Install Docker](https://docs.docker.com/get-docker/) |
| Docker Compose | v2+ (built-in) | Included with Docker Desktop                          |

---

## 🔧 Installation

After meeting the above requirements:

```bash
git clone https://github.com/CaLe-s-Villain/trade-tap.git
cd trade-tap
npm run setup
```

This installs all dependencies via `npm workspaces` and initializes Husky hooks.

---

## 📦 Project Structure

```
trade-tap/
├── client/        # React frontend
├── server/        # Express backend
├── .github/       # GitHub Actions workflows
├── .husky/        # Git hooks
├── .scripts/      # Custom script helpers (e.g., help.sh)
├── docs/          # Contribution guides and references
├── package.json   # Root config with workspaces
└── README.md      # This file
```

---

## 🧰 Scripts

All root-level scripts are **workspace-aware**:

| Command                    | Description                                      |
| -------------------------- | ------------------------------------------------ |
| `npm run dev`              | Start client and server concurrently             |
| `npm test`                 | Run unit tests in both workspaces (Vitest)       |
| `npm run lint`             | Lint both workspaces                             |
| `npm run lint:fix`         | Auto-fix lint issues in both workspaces          |
| `npm run format`           | Format the codebase using Prettier               |
| `npm run format:check`     | Check formatting without writing changes         |
| `npm run cypress:run`      | Run Cypress E2E tests                            |
| `npm run cypress:open`     | Open Cypress GUI test runner                     |
| `npm run docker:dev`       | Start containers in detached mode (with rebuild) |
| `npm run docker:dev:debug` | Start containers in foreground (with rebuild)    |
| `npm run docker:down`      | Stop and remove containers and volumes           |
| `npm run docker:reset`     | Full teardown and restart of Docker environment  |
| `npm run scripts:help`     | Show all available root-level scripts            |

---

## 🧱 Docker-Based Development

Trade & Tap supports containerized dev with Docker and Compose v2. Use `.env.docker` for overrides.

```bash
# Start services in background
npm run docker:dev

# Stop and clean up
npm run docker:down
```

See [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md) for more.

---

## 🧪 Testing

### Test Types

| Type          | Location                                                         | Notes                                   |
| ------------- | ---------------------------------------------------------------- | --------------------------------------- |
| Unit Tests    | `client/__tests__/unit/`, `server/__tests__/unit/`               | Run in isolation                        |
| Integration   | `client/__tests__/integration/`, `server/__tests__/integration/` | Requires API/DB                         |
| E2E (Cypress) | `cypress/e2e/`                                                   | Full system test (via Docker preferred) |

---

### Running Tests

```bash
# Unit tests
npm run test:unit

# Integration (requires API/DB)
npm run docker:dev
npm run test:integration

# E2E Tests
npm run docker:dev
npm run test:e2e
```

---

## 🔐 Environment Variables

```bash
cp client/.env.example client/.env
cp server/.env.example server/.env
```

Required keys in `server/.env`:

- `DATABASE_URL`
- `JWT_SECRET`
- `NODE_ENV`

For CI, secrets must be stored in **GitHub Secrets**.

---

## 🤝 Contributing

We follow structured development practices. See [`docs/CONTRIBUTING.md`](./docs/CONTRIBUTING.md) for:

- Branch naming and workflow
- Issue templates
- PR checklist
- Testing before merge
- GitHub auto-merge for docs, CI, chores

---

## 📘 Additional Resources

- [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md)
- `.env.example` files
- GitHub Issues & Labels
- Script reference: `npm run scripts:help`

---

## 🫶 Thanks

Thanks for checking out **Trade & Tap** — contributors are always welcome!

If you have questions, ideas, or feedback, [open an issue](https://github.com/CaLe-s-Villain/trade-tap/issues).

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
