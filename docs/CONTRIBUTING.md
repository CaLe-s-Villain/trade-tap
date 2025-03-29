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

_See the next section Writing Effective Issues Title for additional details_

---

## 📝 Writing Effective Issue Titles

To keep branch names clean and meaningful, issue titles should be:

- **Short but descriptive** (2–6 essential keywords)
- **Avoid redundant words** like "create", "add", "implement", "for the", "to the"
- **Use lowercase with dashes** for easy conversion to branch names

### ✅ Good Examples

| Purpose                        | Issue Title              | Resulting Branch Name           |

| ------------------------------ | ------------------------ | ------------------------------- |

| Add .env.example files         | `env-example-files`      | `docs/6-env-example-files`      |

| Fix email validation bug       | `email-validation-bug`   | `bugfix/8-email-validation-bug` |

| Add login authentication       | `login-auth`             | `feat/12-login-auth`            |

| Improve homepage layout        | `homepage-layout-update` | `ui/14-homepage-layout-update`  |

| Write tests for auth endpoints | `auth-endpoint-tests`    | `test/21-auth-endpoint-tests`   |

### 🚫 Avoid

| Issue Title                             | Why it's bad                           |

| --------------------------------------- | -------------------------------------- |

| `Create .env.example files for the app` | Too long, includes unnecessary words   |

| `Add login functionality to user auth`  | Redundant with label, overly verbose   |

| `Fix bug where email isn’t validated`   | Could be shortened to just key concept |

> When in doubt, think: "If this title became part of a branch name, would it still be readable and useful?"

---

## 🗂️ Realms & Labels

We use **Realms** to define what area of the codebase an issue affects, and **Labels** to describe the type of work.

### 🧭 Realms

Apply one Realm per issue or PR:

- `Backend`
- `Frontend`
- `DevOps`

### 🏷️ Labels

| Label           | Alias   | Description                                                  |

| --------------- | ------- | ------------------------------------------------------------ |

| `bugfix`        | `fix`   | Fixes something that is broken                               |

| `CI/CD`         | `ci-cd` | GitHub Actions, workflows, or deployment-related changes     |

| `documentation` | `docs`  | Internal or user-facing documentation updates                |

| `feature`       | `feat`  | New user-facing functionality or internal features           |

| `performance`   | `perf`  | Optimizations or performance improvements                    |

| `security`      | `sec`   | Security fixes, permission changes, or vulnerability patches |

| `test`          | `test`  | Unit, integration, or end-to-end test additions/updates      |

> ℹ️ `wontfix` is internal-use only and should not be applied by contributors.

---

## 📦 Branching Strategy

All branches should start from the `dev` branch and follow this format:

```
<alias>/<short-description>
```

| Label         | Alias   | Example Branch Name           |

| ------------- | ------- | ----------------------------- |

| bugfix        | `fix`   | `fix/login-redirect`          |

| CI/CD         | `ci-cd` | `ci-cd/update-dockerfile`     |

| documentation | `docs`  | `docs/setup-guide-update`     |

| feature       | `feat`  | `feat/product-search-filter`  |

| performance   | `perf`  | `perf/db-index-optimizations` |

| security      | `sec`   | `sec/auth-token-hardening`    |

| test          | `test`  | `test/api-auth-tests`         |

> Note: If the issue didn’t auto-generate a branch, manually create one and link it in the GitHub issue’s "Development" section.

---

## ✅ Commit Message Conventions

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

**Structure:**

<type>(optional-scope): <description>

[optional body]

[optional footer(s)]

**Examples:**

- `feat: add new user registration endpoint`
- `fix(server): handle errors on invalid input`
- `docs: update API usage instructions`

### Types:

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Formatting or code style changes (no logic changes)
- **refactor**: Code restructuring without adding new features or fixing bugs
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **ci**: Changes to CI configuration
- **chore**: General maintenance tasks

Commit messages will be automatically validated during the commit process.

---

## Temporary (WIP) Commits & Bypassing Hooks

We use Husky and Commitlint to ensure code quality and commit message consistency.  
However, occasionally during active development, you may need to commit incomplete work:

### Making WIP (Work-in-Progress) Commits

If you're working on a feature, fix, or test and must switch computers or request assistance, your commit may not pass tests or linting checks yet.

In these scenarios, you can bypass commit checks temporarily:

```bash
git commit -m "wip: short description of temporary commit" --no-verify
```

### Guidelines for Using `--no-verify`:

- Clearly mark the commit as `wip` (work-in-progress).
- Use `--no-verify` explicitly to bypass Husky hooks and commit checks.
- Avoid pushing WIP commits directly to primary branches (`main`, `develop`). Instead, use a feature branch.
- Clean up and squash WIP commits later once the issue is resolved, and tests pass again.

### Quick WIP Alias (Optional)

If you often need WIP commits, consider adding a Git alias:

```bash
git config --global alias.wip 'commit --no-verify -m "wip: temporary commit"'
```

Now you can quickly commit using:

```bash
git wip
```

**Always ensure WIP commits are cleaned up before final PR merges.**

````

---

## 🚩 **Commit and Document This Clearly**

Once added, commit the updated documentation clearly:

```bash
git add CONTRIBUTING.md
git commit -m "docs: clarify use of WIP commits and --no-verify for temporary commits"
git push
````

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

## Using GitHub Auto-Merge for Low-Risk Changes

GitHub auto-merge streamlines our workflow by automatically merging low-risk PRs (e.g., documentation, CI/CD config, chores) after all checks pass and reviews are approved.

### How to Enable Auto-Merge:

1. Ensure your PR is labeled with one or more of the following:

   - `documentation`
   - `ci/cd`
   - `chore`

2. After submitting your PR:
   - Once all status checks pass and the required review(s) are approved, click the **"Enable auto-merge"** button in the PR.
   - Select your preferred merge method (usually **Squash and merge**).
   - GitHub will merge automatically once conditions are met.

### Guidelines:

- Use this feature only for PRs that pose minimal risk (no logic or functional changes).
- Always double-check that the PR is correctly labeled and reviewed.

---

## 🧪 Testing

Before submitting your PR:

- ✅ Run unit tests with `npm test`
- ✅ Update or add tests where applicable (Vitest, Cypress, etc.)

---

## 🎨 Code Style & Formatting

We use **ESLint** and **Prettier** to enforce code consistency:

- Use `npm run lint` to check for style issues.
- Use `npm run format` (if available) to auto-format your code.
- Prefer clear, maintainable code over clever one-liners.
- Keep functions small, purposeful, and well-named.

---

### 📘 Git Guide Need a refresher or stuck on a Git command? Check out our Awesome Git Guide for help with: _ Common commands (branching, merging, pushing, etc.) _ Glossary of terms like `rebase`, `HEAD`, and `upstream` \* Project-specific workflows (feature branches, syncing with `dev`, cleanup

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
