# Ship profile — brandonvtaylor-com

Read by the global `/ship` skill (`dev-utils/claude-global/skills/ship`). Shared steps live there;
this file holds only what's specific to brandonvtaylor.com.

## Repo
- Path: `/Users/brandontaylor/Coding/brandonvtaylor-com`
- Kind: Astro static site on AWS Amplify
- Ship branch: `main` (single branch). **The push is the deploy** — Amplify builds and serves
  brandonvtaylor.com on every push to `main`.
- Remote: `rufbulldog/brandonvtaylor-com`

## Lanes
- **Site** — `src/**`, `*.astro`, `public/**`, `astro.config.*`, `package.json` → push-to-deploy.
- **Docs / config** — `*.md`, `.claude/**`, `spec.config.json`, `docs/**` → still deploys on push
  (every push builds), but no build-affecting change.

## Checks
- `npm run build` — the same build Amplify runs; it must pass before pushing or the deploy fails the
  same way.
- `npm test` — Playwright (`playwright test`) against the built site.

## Verify
- For visual changes: preview locally (Browser pane, `launch.json` config `dev` at
  `http://localhost:4321`, or `npm run preview` after a build) and screenshot the changed pages.
  Otherwise the green build is the check.

## Deploy
- Push to `main` (Step 6) **is** the deploy. Then verify with `amplify-deployer` (verify only — don't
  trigger builds): app `d2ogtzfa2v7un`, us-west-2, branch `main` → job succeeded, then check
  https://brandonvtaylor.com.

## Versioning
- None.
