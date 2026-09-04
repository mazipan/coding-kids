# Plan: Boolean Logic Booster — new blocks-path world (AND/OR/NOT)

**Slug:** `feat-boolean-logic-world`
**Date:** 2026-09-04
**Status:** done

---

## Request

> ## Summary
>
> Add a new blocks-path bonus world teaching combined boolean conditions (AND / OR / NOT), bridging the gap between Crystal Caves (single conditions) and Robot Factory (functions).
>
> ## Why
>
> Crystal Caves (`concept: Conditions`) only covers single-condition branching. Real conditional logic — "move right AND the path is clear," "collect the gem OR avoid the obstacle" — isn't taught anywhere in the current 14-world blocks path. This is a natural, missing rung on the CS ladder described in `.ai/agents/personas.md` (sequences → loops → variables → conditions → functions → arrays).
>
> ## Placement
>
> Recommend a **bonus world** (like `jurassic`, `parking`, `sorting`, `debugging` — numbering starts at 1, no tutorial gate, INV-L2 applies) rather than inserting into the 7 main worlds, to avoid reshuffling the existing concept progression order or renumbering any main-world routes.
>
> ## Open question for the planner (investigate before scoping, don't assume)
>
> Blockly ships built-in `logic_operation` (AND/OR) and `logic_negate` (NOT) blocks. Check `src/blockly/customBlocks.ts` and `toolboxes.ts` to determine:
> 1. Are these built-in blocks already reachable in any existing toolbox category, just unused in lesson content?
> 2. Or does this world need a toolbox category added exposing them for the first time?
>
> This changes the scope significantly — (1) is content-only, (2) needs a small toolbox/config change reviewed against INV-C1/INV-C3.
>
> ## Proposed lesson outline
>
> **Ages 8–10 (easier):** Single AND, single OR.
> **Ages 11–14 (harder):** Nested conditions (AND inside OR), NOT, a puzzle framed entirely in game
> terms whose easiest solution is recognizing a NOT(A AND B) vs (NOT A) OR (NOT B) equivalence —
> never taught as formal De Morgan's law, just experienced.
>
> ## Invariants to watch
>
> INV-G1–G4, INV-L1, INV-L2, INV-Q1–Q5, INV-C1/INV-C3.
>
> (See issue #87 for the full text.)

---

## Decision

Investigated the toolbox question first: `src/blockly/toolboxes.ts`'s `LOGIC_CONTENTS` already lists
`logic_operation` and `logic_negate` in the existing `'logic'` toolbox category, alongside
`controls_if`, `controls_ifelse`, `logic_compare`, `logic_boolean` — reachable today, just never used
by any lesson. This is a **content-only** change: no `toolboxes.ts` or `customBlocks.ts` edits.

Added a new bonus world `boolean` ("Logic Lighthouse", 🦉 Ollie) with 20 lessons in two tiers.
Lessons 1–10 build the concept with literal booleans and simple sensor comparisons (AND, OR, NOT,
AND-in-a-loop, OR-in-a-loop, NOT-in-a-loop, nested AND-in-OR, nested OR-in-AND, an introductory
NOT(A AND B) puzzle, a buggy AND-loop fix). Lessons 11–20 repeat the same ten mechanics with real
`currentRow()`/`currentCol()` sensor comparisons, bigger grids, and two-forbidden-combo nesting,
ending on a harder NOT(A AND B) capstone (lesson 20) — the De Morgan-flavoured puzzle the issue
asked for, framed entirely in game terms.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Insert into the 7 main worlds (e.g. between Crystal Caves and Robot Factory) | Renumbers every route from `factory` onward; the issue explicitly asked to avoid this. |
| Add a new toolbox category for AND/OR/NOT | Unnecessary — `logic_operation`/`logic_negate` are already in the `'logic'` category. |
| Literal `true`/`false` conditions throughout (Crystal Caves' shallow "if true" style) | Used for the easiest lessons (1–3, 7–9), but real sensor comparisons (Coordinate Cove's pattern) give AND/OR/NOT genuinely different, reasoned-about behaviour from lesson 4 onward — AND takes the stricter bound, OR takes the nearer one, NOT flips the test. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | Reuses existing `completeLesson`/star/XP machinery unchanged. |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | yes | `boolean` has no lesson 0 — falls under the bonus-world-with-no-tutorial exception (`jurassic`/`parking`/`sorting`/`debugging`), so lesson 1 is always open and lesson N still needs N-1 completed. Verified in `tests/booleanLogicLessons.test.ts`. |
| INV-L2 world unlock by XP | yes | `boolean` carries `isBonus: true` and no `unlockAtXP` field (blocks-path worlds never have one) — accessible from the start like every other world. |
| INV-G1 bounded grid | yes | Every canonical solution replayed through `parseCodeToActions`/`applyAction` in the new test; none crash. |
| INV-G2 obstacle collision | yes | Decorative obstacles in lessons 11–13, 17–18, 20 are placed off the canonical path; verified by the same replay test. |
| INV-G3 action cap | yes | All solutions stay well under `MAX_ACTIONS`; loop conditions are all provably terminating (bounded sensor comparisons), no `stopped` reason in any canonical run. |
| INV-G4 sandbox | no | No new exposed names — reuses `currentRow`/`currentCol`/move verbs. |
| INV-C1 TypeScript strict | yes | `bun run type-check` passes with zero errors. |
| INV-C2 no hardcoded strings | yes | Every lesson string is `LocalizedString` with EN + ID; no arrow/symbol characters embedded in copy. |
| INV-C3 build passes | yes | `bun run build` passes. |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | yes | All new lesson/world strings have both `en` and `id`. |
| INV-I2 no layout assumptions | no | |
| INV-Q1 lesson uniqueness | yes | 10 distinct mechanics × 2 scenarios each (differing grid, numbers, and — from tier 2 — nesting depth); see decision log. |
| INV-Q2 cross-world scenario freshness | yes | New "lighthouse/gate/vault/beacon" scenario family, not reused from another world. |
| INV-Q3 true-false balance | n/a | Blocks-path lessons have no true/false puzzle type. |
| INV-Q4 plausible distractors | n/a | No multiple-choice options in the blocks path. |
| INV-Q5 real difficulty curve | yes | Tier 2 (11–20) adds real sensor comparisons, bigger grids, and nested/two-clause conditions on top of tier 1's literal/single-sensor mechanics — not just bigger numbers. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/worlds/boolean.ts` | add | New world definition. |
| `src/data/worlds/index.ts` | edit | Import + register `booleanWorld` at the end of `WORLDS`. |
| `src/types/index.ts` | edit | Add `'boolean'` to the `WorldId` union. |
| `src/data/lessons.ts` | edit | Append 20 `boolean-*` lessons. |
| `tests/booleanLogicLessons.test.ts` | add | Canonical-solution + star-math + unlock-order coverage, modeled on `tests/coordinateCoveLessons.test.ts`. |
| `.ai/specs/worlds.md` | edit | New world catalog row; documented the `requiredCategories: ['logic']` vs `['loops']` gotcha. |
| `.ai/agents/context.md` | edit | Lesson/world count comment; same gotcha noted under "Known gotchas". |
| `README.md` | edit | Bonus-world table row, world/lesson counts. |
| `src/i18n/translations.ts` | edit | `landing.worlds.title` 32 → 33 (EN + ID). |
| `.ai/decisions/log/2026-09-04-01-boolean-logic-booster-world.md` | add | Decision record. |

---

## Spec changes

Applied directly to `.ai/specs/worlds.md` (new catalog row under "Block coding worlds", plus a new
paragraph under "Star threshold logic" documenting the `requiredCategories` block-type gotcha) and to
`.ai/agents/context.md` ("Known gotchas" and the file-structure lesson-count comment). See the diffs
in those files rather than duplicating them here.

---

## Implementation steps

1. Confirm `logic_operation`/`logic_negate` are already in the `'logic'` toolbox category (`src/blockly/toolboxes.ts`) — content-only scope confirmed.
2. Add `booleanWorld` (`src/data/worlds/boolean.ts`), register it in `src/data/worlds/index.ts`, add `'boolean'` to `WorldId`.
3. Design 20 lessons across 10 mechanics (AND/OR/NOT as `if`-wraps and as loop tests, nested AND-in-OR and OR-in-AND, an intro and a capstone NOT(A AND B) puzzle, two buggy fixes) × 2 tiers, hand-verifying grid/position math for each before writing lesson data.
4. Write `tests/booleanLogicLessons.test.ts` with each lesson's canonical JS solution and run it against the real engine (`parseCodeToActions`/`checkWin`/`calculateStars`) to catch math errors before trusting the design.
5. Append the 20 lessons to `src/data/lessons.ts`.
6. Run the test — fix any failures. (Caught and fixed the `requiredCategories: ['logic']` vs `['loops']` bug this way — see decision log.)
7. Run `bun test`, `bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons` — all must pass.
8. Update `.ai/specs/worlds.md`, `.ai/agents/context.md`, `README.md`, `src/i18n/translations.ts` counts.
9. Add the decision log entry.
10. Commit and push to `claude/boolean-logic-booster-31d4fj`.

---

## Rollback

Revert the commit. No localStorage migration needed — a player who had completed `boolean-*`
lessons would simply lose that world's entries from `progress.lessons` on next load (harmless key
absence, not a schema change) if the world were removed later.

---

## Review notes

Self-reviewed against every invariant in `.ai/specs/invariants.md` (table above) and against
`.ai/agents/reviewer-code.md`'s concerns (plan compliance, TypeScript, i18n, bundle) — all three
verification commands plus `bun test` and `bun run audit-lessons` pass. Kid-perspective (Rafi, age 8)
check: tier 1 (lessons 1–10) never asks for more than a two-term AND/OR/NOT and gives an immediate,
concrete "why" in the mascot message before every new block shape (matching Crystal Caves' and
Coordinate Cove's established teaching cadence); tier 2 is explicitly scoped for the 11–14 age band
per the issue, consistent with `.ai/agents/personas.md`'s age-tolerance table. No UI/UX surface
changed — this is pure content plus one new world registration, so no new friction was introduced
for existing worlds.

One real bug was caught during self-review, not before it: see "A real bug caught during authoring"
in the decision log. The `tests/booleanLogicLessons.test.ts` added in step 4 exists specifically to
catch this class of mistake before it reaches a child.

---

## Implementation notes

No deviations from the plan above. The toolbox investigation (issue's open question) resolved to
"already reachable" on the first check, which set the scope for everything else. All 20 lessons'
canonical solutions are covered by `tests/booleanLogicLessons.test.ts`, including both buggy
(`boolean-10`, `boolean-19`) lessons' shipped-broken state and its intended fix.
