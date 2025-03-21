# Contributing to Trade & Tap
---

Welcome, and thanks for your interest in contributing to Trade & Tap! Whether it's fixing a bug, improving documentation, or suggesting a new feature — your help is appreciated.

---

## 🧰 Development Setup

1. **Clone the repo**  
   ```bash
   git clone https://github.com/CaLe-s-Villain/trade-tap
   cd trade-tap
   ```

2. **Checkout the latest working branch**  
   ```bash
   git checkout dev
   ```

3. **Install dependencies**  
   ```bash
   cd client && npm install && cd ../server && npm install
   ```

4. **Set up environment variables**  
   Copy the example files and fill in missing values:
   ```bash
   cp client/.env.example client/.env
   cp server/.env.example server/.env
   ```

5. **Run the app locally**
   ```bash
   cd client && npm run dev
   cd server && npm run dev
   ```

---

## 🔄 General Project Workflow

1. All work starts with a GitHub issue. If none exists, create one using the **issue template**.
2. Assign the correct **Realm** and one or more **Labels** (see below).
3. A linked branch will be auto-created from the issue (if configured). If not, create one manually using the naming conventions below.
4. All pull requests should target the `dev` branch.
5. PRs must link to their issue using `Closes #<issue-number>` or similar phrasing.

---

## 🪧 Creating New Issues

To create an issue:

1. Go to the [Issues](https://github.com/CaLe-s-Villain/trade-tap/issues) tab.
2. Click **New Issue** and select the appropriate template.
3. Clearly describe:
   - What the issue is
   - Steps to reproduce (if applicable)
   - Suggested solution
4. Add the appropriate **Realm** and **Label(s)**
5. Assign the issue to a milestone if relevant.

---

## 🗂️ Realms & Labels

We use **Realms** to define what area of the codebase an issue affects, and **Labels** to describe the type of work.

### 🧭 Realms
Apply one Realm per issue or PR:
- `Backend`
- `Frontend`
- `DevOps`

### 🏷️ Labels

| Label           | Alias   | Description                                                   |
|----------------|---------|---------------------------------------------------------------|
| `bugfix`        | `fix`   | Fixes something that is broken                                |
| `CI/CD`         | `ci-cd` | GitHub Actions, workflows, or deployment-related changes       |
| `documentation` | `docs`  | Internal or user-facing documentation updates                 |
| `feature`       | `feat`  | New user-facing functionality or internal features            |
| `performance`   | `perf`  | Optimizations or performance improvements                     |
| `security`      | `sec`   | Security fixes, permission changes, or vulnerability patches  |
| `test`          | `test`  | Unit, integration, or end-to-end test additions/updates       |

> ℹ️ `wontfix` is internal-use only and should not be applied by contributors.

---

## 📦 Branching Strategy

All branches should start from the `dev` branch and follow this format:

```
<alias>/<short-description>
```

| Label           | Alias   | Example Branch Name           |
|----------------|---------|-------------------------------|
| bugfix          | `fix`   | `fix/login-redirect`          |
| CI/CD           | `ci-cd` | `ci-cd/update-dockerfile`     |
| documentation   | `docs`  | `docs/setup-guide-update`     |
| feature         | `feat`  | `feat/product-search-filter`  |
| performance     | `perf`  | `perf/db-index-optimizations` |
| security        | `sec`   | `sec/auth-token-hardening`    |
| test            | `test`  | `test/api-auth-tests`         |

> Note: If the issue didn’t auto-generate a branch, manually create one and link it in the GitHub issue’s "Development" section.

---

## ✅ Commit Messages

Use clear, descriptive commit messages following the format:
```
<alias>: short description
```

Examples:
```
fix: correct login redirect behavior
docs: update API authentication guide
feat: add search filters to product listing
```

---

## 🤝 Pull Request Guidelines

1. Sync with the latest `dev` branch:
   ```bash
   git pull origin dev
   ```

2. Push your branch:
   ```bash
   git push origin <your-branch-name>
   ```

3. Open a pull request **into `dev`** with a clear title and description.
4. Link the associated issue using `Closes #<issue-number>`.

---

## 🧪 Testing

Before submitting your PR:

- ✅ Lint your code with `npm run lint`
- ✅ Run unit tests with `npm test`
- ✅ Update or add tests where applicable (Jest, Cypress, etc.)

---

## 🎨 Code Style & Formatting

We use **ESLint** and **Prettier** to enforce code consistency:

- Use `npm run lint` to check for style issues.
- Use `npm run format` (if available) to auto-format your code.
- Prefer clear, maintainable code over clever one-liners.
- Keep functions small, purposeful, and well-named.

---

## 🤗 Community Guidelines

We’re building something awesome — together. Please help keep our space welcoming and productive:

- Be respectful in discussions, reviews, and comments.
- Stay on topic and keep conversations constructive.
- Assume positive intent and ask questions when in doubt.
- Help others when you can, and don’t hesitate to ask for help.

See `CODE_OF_CONDUCT.md` (if available) for more.

---

Thanks again for contributing to Trade & Tap! 💜

---
