---
description: Ship brandonvtaylor.com — build check, spec reconcile, commit, push to main (Amplify auto-deploys). Instance of the dev-utils /ship template.
---

You are running the `/ship` playbook for brandonvtaylor-com — an instance of the shared ship template ([`rufbulldog/dev-utils`](https://github.com/rufbulldog/dev-utils) `skills/ship/TEMPLATE.md`). An **Astro** site on **AWS Amplify**: single `main` branch, and **deploy = push to `main`** → Amplify builds and serves brandonvtaylor.com.

# Pre-flight
1. Confirm working dir is `/Users/brandontaylor/Coding/brandonvtaylor-com` and branch is `main`.
2. `git status`; `git fetch origin && git log HEAD..origin/main --oneline` — stop if behind.
3. Categorize the diff: **content/code** (`src/**`, `*.astro`, `public/**`) vs **docs/config** (`*.md`, `.claude/**`, `spec.config.json`). Print the plan; wait for acknowledgement.

# Step 1: Build check
Run the same build Amplify will run — it must pass before you push, or the deploy fails the same way:
```bash
npm run build
```
If it errors, fix the cause before proceeding. Skip only for a pure docs/config diff that can't affect the build.

# Step 1.5: Run tests
```bash
npm test
```
If any test fails, fix the cause before proceeding.

# Step 1.6: Reconcile spec
Reconcile the auto-generated spec so it commits with the change:
```bash
spec extract
```
Stage the changed `docs/spec/**/*.md`. (The `spec` binary is the `@rufbulldog/spec` package from the `dev-utils` monorepo, on PATH via a global `npm link` → `dev-utils/packages/spec/dist/cli.js`. Not on PATH? `cd ../dev-utils/packages/spec && npm run build && npm link`. No CI spec gate here, so this is the only thing keeping the spec current.)

# Step 2: Local preview (optional, user-gated)
If the change is visual, offer a local look and wait for confirmation:
```bash
npm run preview
```

# Step 3: Commit + push (user-gated)
Ask explicitly: "Build's green — commit and push to `main`?" If yes, delegate to `git-pusher` (push `origin/main`). **The push is the deploy** — it triggers the Amplify build. Surface the SHA. If no, stop.

# Step 4: Post-deploy
Remind the user: Amplify takes a few minutes to build + deploy; check the Amplify console (app `d2ogtzfa2v7un`, us-west-2) or brandonvtaylor.com once it goes green.

# Never
- Push to `main` without `npm run build` passing — Amplify would fail identically.
- `git push --force` or `git reset --hard`.
