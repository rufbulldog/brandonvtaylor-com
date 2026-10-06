# CLAUDE.md

Guidance for Claude Code when working in brandonvtaylor-com.

## Project Overview

Personal site for Brandon V. Taylor — a static **Astro** site hosted on **AWS Amplify** (app `d2ogtzfa2v7un`, us-west-2), served at brandonvtaylor.com. Single `main` branch; **deploy = push to `main`** (Amplify builds + deploys automatically). No app; Playwright tests (`npm test`) run against the built site.

## Development Commands

```bash
npm run dev       # astro dev (local dev server)
npm run build     # astro build → dist/ (exactly what Amplify runs)
npm run preview   # astro preview (serve the built site)
```

## Repository Layout

- `src/pages/` — routes (`index.astro`).
- `src/layouts/` — page shells (`Base.astro`).
- `src/components/` — Astro components (`Experience.astro`, `Projects.astro`).
- `src/data/` — content data (`resume.ts`).
- `public/` — static assets served as-is.
- `astro.config.mjs` — Astro config. `amplify.yml` — Amplify build (`npm run build`, artifacts in `dist/`).

## Deploy

There is no separate deploy step — **pushing to `main` is the deploy**: Amplify rebuilds and serves the new `dist/`. Use the global `/ship` skill (shared [`rufbulldog/dev-utils`](https://github.com/rufbulldog/dev-utils) `claude-global/skills/ship`), driven by this repo's profile [`.claude/ship.md`](.claude/ship.md): build check (`npm run build` must pass, or Amplify fails the same way) → spec reconcile → commit → push.

## Shared tooling (from rufbulldog/dev-utils)

- **Specs** — `docs/spec/` (config in `spec.config.json`). The spec engine lives in the `dev-utils` monorepo at `packages/spec` (package `@rufbulldog/spec`); it's on PATH as the `spec` binary via a global `npm link` (symlink → `dev-utils/packages/spec/dist/cli.js`, so the package must be built). It parses `.astro` frontmatter, so pages + components are covered. Subcommands: `spec extract` (regenerate specs), `spec audit` (check L4 docs like this file for drift), `spec context` (bundle relevant specs for a topic). Run `spec extract` after changes (`/ship` does this); `/spec-context <topic>` for planning, `/spec-audit` to check drift.
  - Not on PATH? `cd ../dev-utils/packages/spec && npm run build && npm link`.

## Conventions

- Astro components are TypeScript frontmatter between `---` fences + an HTML-ish template below.
- No ESLint/Jest here — those shared presets are Expo / React Native flavored and don't apply to Astro.
- Keep it simple; it's a content site.
