# Agent rules

## Before starting any task

1. Read `agents.md` (root) — confirms you have the current index
2. Read the specific `.ai/` doc for the area you're touching
3. Run `npm run build` — confirm the repo is in a clean state before touching anything
4. Read the specific source file(s) relevant to the task — don't guess at signatures or types

## After every change

1. Run `npm run build` — must pass with zero TypeScript errors
2. Commit with a descriptive message (what changed and why, not a re-description of the diff)
3. Push to the feature branch

## Persona check

Before adding any UI copy, feature, or UX flow, ask: **does this serve the Kid persona?**

- If it adds friction (forms, modals, settings) → reconsider
- If it makes feedback slower or quieter → reconsider  
- If it collects or transmits any data → reject

## Hard constraints — agents must NEVER

- Add a backend, database, or API call of any kind
- Add user authentication or accounts
- Add analytics, tracking scripts, or telemetry
- Collect or transmit any personal data
- Add features that require a server (including serverless functions)
- Break the `npm run build` TypeScript check
- Hardcode user-visible strings — all copy must go through `t()`
- Change a localStorage key name without a migration plan (see `.ai/decisions/storage.md`)
- Add new npm dependencies without a clear justification — the bundle is intentionally lean
