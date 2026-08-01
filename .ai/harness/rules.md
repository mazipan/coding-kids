# Agent rules

**Every change follows the workflow in `.ai/harness/workflow.md`.**  
Plan → Plan review → Build → Dual review (code + kid). No exceptions except doc typos and patch version bumps.

---

## Before starting any task

1. Read `agents.md` (root index) and your agent definition in `.ai/agents/`
2. Read the relevant spec(s) in `.ai/specs/`
3. Run `bun run build` — confirm the repo is clean before touching anything
4. Read the source file(s) relevant to the task — never guess at signatures or types

## After every change

1. `bun run build` — must pass with zero TypeScript errors
2. Apply any spec changes drafted in the plan
3. Update the plan status and add implementation notes
4. Commit with a descriptive message referencing the plan slug
5. Push to the feature branch — never directly to master

## Invariant gate

Before committing, run through `.ai/specs/invariants.md`. Every invariant marked "yes / affected" in the plan must be explicitly verified. If any is broken, the commit must not happen.

## Persona check

Before adding any UI copy, feature, or UX flow, ask: **does this serve Rafi (age 8, impatient)?**

- Adds friction → reconsider
- Makes feedback slower or quieter → reconsider
- Collects or transmits data → reject

## Hard constraints — any agent must NEVER

- Add a backend, database, or API call of any kind
- Add user authentication or accounts
- Add analytics, tracking scripts, or telemetry
- Collect or transmit any personal data
- Add features that require a server (including serverless functions)
- Break `bun run build` (INV-C3)
- Hardcode user-visible strings — all copy through `t()` (INV-C2)
- Change a localStorage key name without a migration plan (INV-C4)
- Add a new dependency without it appearing in the plan
- Merge to master without both reviewer-code and reviewer-kid passing
