# Decision: Raise the uniform block-coding lesson count from 10 to 20

**Date:** 2026-08-29

## Context

Decision `2026-08-29-04` brought every block-coding world to a uniform `lessonCount: 10`. A same-day
follow-up request asked to double that depth to 20 per world, continuing each world's existing concept and
difficulty curve rather than introducing new mechanics wholesale.

## Decision

Every block-coding world now has `lessonCount: 20` — 140 new lessons (numbers 11–20) added across the 14
worlds, none of them changing any existing lesson's `id`, `number`, or fields.

Authoring was split by risk:

- `jungle`, `space`, `loops`, `ocean`, `caves`, `factory`, `portal`, `jurassic`, `parking`, `sorting` — drafted
  by 10 parallel background agents (draft-only, returned as text; a single session integrated everything
  into `src/data/lessons.ts` to avoid concurrent-write corruption on the shared file).
- `debugging`, `orchestra`, `cove`, `eco` — authored directly in-session. These four either carry a
  hand-built Blockly `buggyState` JSON tree per lesson (`debugging`) or a dedicated per-lesson exact-solution
  test file (`tests/orchestraLessons.test.ts`, `tests/coordinateCoveLessons.test.ts`,
  `tests/ecoCityLessons.test.ts`) that asserts an exact canonical action sequence or block count — both are
  easy to get subtly wrong without close engine verification, so they were kept out of delegation.

Every canonical solution for `orchestra`, `cove`, and `eco`'s new lessons was replayed through the real
`parseCodeToActions` / `applyAction` / `buildInitialState` engine (not just a generator script's own
simulation) before being committed to the lesson file, and the three dedicated test files were updated to
cover lessons 11–20.

While auditing which lessons could still claim to be a world's "final" or "ultimate" challenge now that ten
more lessons follow, found and fixed three lessons (`portal-9`, `caves-10`, `space-10`) where an earlier
softening pass had reworded `mascotMessage` but left the `story` field's finality claim untouched, plus
`eco-10` (title "Eco City Finale"), which predates any softening pass for this expansion.

## Alternatives considered

- Stop at 10 and treat 20 as a future increment — rejected; the user explicitly asked to expand to 20 in the
  same session, and splitting it across sessions would leave the "keep lesson counts in sync" rule violated
  in the interim.
- Have the delegated agents also draft `orchestra`/`cove`/`eco`/`debugging` — rejected for the same reason as
  the original 10-lesson decision: these need engine-exact solutions or hand-built Blockly JSON that are
  higher-risk to get right without the context already built up in-session.

## Consequences

- `src/data/lessons.ts` grows by 140 lesson objects (290 total lessons across 14 worlds, including 10
  tutorials).
- `tests/orchestraLessons.test.ts`, `tests/coordinateCoveLessons.test.ts`, `tests/ecoCityLessons.test.ts` all
  carry 20-lesson solution arrays now; any future lesson added to these three worlds must also extend the
  matching test file's `SOLUTIONS`/`solutions` array and length assertion.
- The "keep lesson counts in sync" rule in `.ai/specs/worlds.md` now targets 20 as the shared depth for any
  future lesson addition, unless a later decision records a different shared target.
