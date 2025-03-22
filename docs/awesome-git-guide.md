# 🚀 Awesome Git Commands

## 📚 Git Glossary (WTF Does That Mean?)

### Branch

A parallel version of your codebase. You create branches to work on features, fixes, or experiments without touching `main` or `dev`.

### Merge

Combines changes from one branch into another. Keeps full history and creates a "merge commit."

### Rebase

Reapplies your branch's commits on top of another branch (like `dev`). This creates a linear history, which looks cleaner but rewrites commit hashes.

> TL;DR: Use `merge` to preserve history, use `rebase` to make it look like you started fresh from the latest `dev`.

### Commit

A snapshot of your changes with a message describing what you did.

### Staging

The area where you prepare files before committing them. Think of it like a cart before checkout.

### Upstream

The default remote branch your local branch tracks. Usually set with `git push -u origin your-branch`.

### Prune

Removes references to branches that have been deleted from the remote.

### Remote

A reference to a version of the repository hosted elsewhere (like GitHub). `origin` is the default remote name.

### HEAD

A pointer to your current location in the Git history. Usually points to the latest commit on your current branch.

## 🔍 Inspection

### Show all local branches

```bash
git branch
```

### Show all remote branches

```bash
git branch -r
```

### Show local branches merged into current

```bash
git branch --merged
```

### See last commit per branch

```bash
git branch -v
```

### View commit log (graph)

```bash
git log --oneline --graph --all --decorate
```

## 🔀 Branching

### Create and switch to a new branch

```bash
git checkout -b feat/123-new-feature
```

### Rename current branch

```bash
git branch -m new-name
```

### Delete local branch (safe)

```bash
git branch -d old-branch
```

### Delete local branch (force)

```bash
git branch -D old-branch
```

### Delete remote branch

```bash
git push origin --delete old-branch
```

### Push new branch and set upstream

```bash
git push -u origin new-branch
```

## 🧹 Cleanup

### Delete all local branches already merged into dev, except dev/main/stage

```bash
git branch --merged dev | grep -vE '^(\*| *(dev|main|stage))' | xargs -n 1 git branch -d
```

### Prune deleted remote branches from local

```bash
git remote prune origin
```

## 📦 Staging & Commits

### Add all changes

```bash
git add .
```

### Add specific file

```bash
git add path/to/file.js
```

### Reset staged file (undo git add)

```bash
git reset path/to/file.js
```

### Commit with message

```bash
git commit -m "feat: add user login logic"
```

### Amend last commit (without changing message)

```bash
git commit --amend --no-edit
```

### Change last commit message

```bash
git commit --amend -m "fix: correct login bug"
```

## 🔄 Syncing

### Pull latest from dev

```bash
git pull origin dev
```

### Rebase feature branch onto dev

```bash
git fetch origin && git rebase origin/dev
```

### Merge dev into current branch

```bash
git merge origin/dev
```

### Resolve rebase conflicts and continue

```bash
git rebase --continue
```

## 🚑 Fixes & Recovery

### See uncommitted changes

```bash
git status
```

### See diff of unstaged changes

```bash
git diff
```

### See diff of staged changes

```bash
git diff --cached
```

### Discard unstaged changes

```bash
git checkout -- path/to/file.js
```

### Revert a commit by hash

```bash
git revert <commit-hash>
```

## 🔒 Remote & Auth

### Add remote

```bash
git remote add origin https://github.com/user/repo.git
```

### Change remote URL

```bash
git remote set-url origin git@github.com:user/repo.git
```

### Show remotes

```bash
git remote -v
```

## 🔁 Common Workflows for Trade & Tap

### Start new feature from issue

```bash
git checkout dev
git pull origin dev
git checkout -b feat/22-login-auth
```

### Sync feature branch with latest dev

```bash
git fetch origin
git rebase origin/dev
```

### Commit and push work

```bash
git commit -a -m "feat: add login auth logic"
git push
```

### Open a PR to `dev` and link the issue

Use `Closes #22` in the PR description.

### Finalize and delete old branch after merge

```bash
git checkout dev
git pull origin dev
git branch -d feat/22-login-auth
git push origin --delete feat/22-login-auth
```
