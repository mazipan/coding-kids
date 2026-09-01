# Agent rules

**Every change follows the workflow in `.ai/harness/workflow.md`.**  
Plan → Plan review → Build → Dual review (code + kid). No exceptions except doc typos and patch version bumps.

---

## Verification commands

These three commands are the quality gate. Run them in order — all three must pass before any commit, push, or PR:

```bash
bunx biome ci          # format + lint
bun run type-check     # TypeScript 7 strict check
bun run build          # tsc -b + Vite bundle
```

Never use `bunx tsc` directly — it may pull a stale version from bun's global cache instead of the local TypeScript 7.

## Before starting any task

1. Read `agents.md` (root index) and your agent definition in `.ai/agents/`
2. Read the relevant spec(s) in `.ai/specs/`
3. Run all three verification commands — confirm the repo is clean before touching anything
4. Read the source file(s) relevant to the task — never guess at signatures or types

## After every change

1. Run all three verification commands — all must pass with zero errors
2. Apply any spec changes drafted in the plan
3. Update the plan status and add implementation notes
4. Commit with a descriptive message referencing the plan slug
5. Push to the feature branch — never directly to master

## File naming — plans and decisions

Both `.ai/plans/` and `.ai/decisions/log/` are timestamp-prefixed so a plain directory listing sorts
chronologically. Get this right on every new file — don't fall back to the pre-2026-08-27 convention:

- **New plan:** `.ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md` — today's date, then the existing
  `{type}-{short-description}` slug. Never write a plan file without the date prefix.
- **New decision:** one new file per decision in `.ai/decisions/log/`, named
  `{YYYY-MM-DD}-{NN}-{slug}.md`. `NN` is a two-digit sequence — check `.ai/decisions/log/` for other files
  already dated today and use the next number (`01` if there are none). Never append to, or edit the body
  of, an existing decision file — each one is a permanent record of that decision as made at that time. See
  `.ai/decisions/log/README.md` for the full convention.

## Invariant gate

Before committing, run through `.ai/specs/invariants.md`. Every invariant marked "yes / affected" in the plan must be explicitly verified. If any is broken, the commit must not happen.

## Persona check

Before adding any UI copy, feature, or UX flow, ask: **does this serve Rafi (age 8, impatient)?**

- Adds friction → reconsider
- Makes feedback slower or quieter → reconsider
- Collects or transmits data → reject

## PR rules — any agent must ALWAYS

- Title format: `{type}: {description}` — type in the title, never a checklist in the body
- Body must follow `.github/pull_request_template.md` — all sections filled, in order
- Every resolved issue linked with `Closes #N` in the **Issues** section
- **Screenshots** section must be present — write "No visual change." when nothing changed visually
- **Agent attributes** section must name the model and link the plan file used

## Hard constraints — any agent must NEVER

- Add a backend, database, or API call of any kind
- Add user authentication or accounts
- Add analytics, tracking scripts, or telemetry beyond the single named Google Analytics exception in INV-P1/INV-P2 — any further tracking requires a new decision record
- Collect or transmit any personal data (the Google Analytics exception in INV-P2 covers anonymous usage events only, never progress data, localStorage contents, or anything personally identifying)
- Add features that require a server (including serverless functions)
- Let any of the three verification commands fail before pushing (INV-C1, INV-C3)
- Hardcode user-visible strings — all copy through `t()` (INV-C2)
- Change a localStorage key name without a migration plan (INV-C4)
- Add a new dependency without it appearing in the plan
- Write a plan file or decision record without the `{YYYY-MM-DD}-` filename prefix, or append a new decision to an existing file instead of creating a new one (see "File naming" above)
- Merge to master without both reviewer-code and reviewer-kid passing
- Add a lesson whose core mechanic AND scenario duplicate an existing lesson in the same world (INV-Q1)
- Add true-false puzzles that create a run of 3+ same-answer questions in one world (INV-Q3)
- Add a puzzle with nonsensical filler distractors — all options must be plausible (INV-Q4)
- Skip the content audit when a plan adds or modifies lessons (see planner.md step 5)
