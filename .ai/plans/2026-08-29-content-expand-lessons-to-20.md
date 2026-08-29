<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Expand every block-coding world to 20 lessons

**Slug:** `content-expand-lessons-to-20`
**Date:** 2026-08-29
**Status:** done

---

## Request

> can expand it to 20?

Follow-up to the same-day plan `.ai/plans/2026-08-29-content-uniform-lesson-counts.md`, which brought every
block-coding world to a uniform `lessonCount: 10`. This plan raises that uniform target to 20 — every world
gets 10 more lessons (numbers 11–20), continuing its established concept and difficulty curve.

---

## Decision

Add 10 new lessons (numbers 11–20) to all 14 block-coding worlds: `jungle`, `space`, `loops`, `ocean`,
`caves`, `factory`, `portal`, `jurassic`, `parking`, `sorting`, `debugging`, `orchestra`, `cove`, `eco`.
That is 140 new lessons. Given the scale, drafting is split:

- **Delegated to 10 parallel background agents** (draft-only, no file edits — they return TypeScript content
  in their final report so the orchestrating session can integrate everything into the one shared file
  without concurrent-write conflicts): `jungle`, `space`, `loops`, `ocean`, `caves`, `factory`, `portal`,
  `jurassic`, `parking`, `sorting`. These have no per-lesson exact-solution test file, and (for the six
  main worlds) the orchestrating session already has an established continuation style from lessons 7–10
  authored in the previous plan.
- **Authored directly by the orchestrating session**: `orchestra`, `cove`, `eco` (each has a dedicated test
  file — `tests/orchestraLessons.test.ts`, `tests/coordinateCoveLessons.test.ts`,
  `tests/ecoCityLessons.test.ts` — that hardcodes `toHaveLength(10)` and an exact canonical action/code
  sequence per lesson; these need real engine-verified solutions and test-file updates, which is higher risk
  to delegate) and `debugging` (every lesson is `isBuggy: true` with a hand-built Blockly `buggyState` JSON
  tree — higher risk to delegate without an established example to imitate closely).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Author all 140 lessons directly, sequentially | Same quality bar as the previous 25-lesson plan, but 5.6x the volume — impractically slow in a single thread and risks quality/consistency drift over such a long task. |
| Delegate all 14 worlds, including orchestra/cove/eco/debugging | Those four need engine-exact solutions (orchestra/cove/eco) or hand-built Blockly JSON (debugging) that are much easier to get subtly wrong without the context already built up in this session; kept in-session to control risk. |
| Have delegated agents edit `src/data/lessons.ts` directly | 10 agents editing the same file concurrently would race and corrupt it. Agents draft-only; the orchestrating session integrates sequentially. |

---

## Invariants check

Same invariant set as the previous plan (`.ai/plans/2026-08-29-content-uniform-lesson-counts.md`) — all
affected the same way (content-only addition, no engine/store/type changes). Additionally:

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-Q1/Q5 | yes | Checked per-world during integration; delegated agents were instructed on this explicitly and asked to trace concrete paths by hand. |
| INV-C1/C3 | yes | `bun run type-check` / `bun run build` re-run after integrating all 14 worlds. |
| (test suite) | yes | `orchestraLessons.test.ts`, `coordinateCoveLessons.test.ts`, `ecoCityLessons.test.ts` updated (solutions for lessons 11–20 added, `toHaveLength(10)` → `20`, id-range assertions updated) and re-run; `bun test` must stay green. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/lessons.ts` | edit | Append 10 lessons (11–20) to each of the 14 worlds; apply each world's lesson-10 (or lesson-9 for `portal`) softening patch. |
| `src/data/worlds/*.ts` (all 14) | edit | `lessonCount: 10` → `20`. |
| `tests/orchestraLessons.test.ts` | edit | Add solutions for `orchestra-11..20`, update length/id assertions. |
| `tests/coordinateCoveLessons.test.ts` | edit | Add solutions for `cove-11..20`, update length/id assertions. |
| `tests/ecoCityLessons.test.ts` | edit | Add solutions for `eco-11..20`, update length/id assertions. |
| `.ai/specs/worlds.md` | edit | Lessons column 10 → 20 for all worlds. |
| `.ai/decisions/log/2026-08-29-05-expand-block-worlds-to-20-lessons.md` | add | Decision record. |

---

## Implementation steps

1. Launch 10 parallel drafting agents (done — see "Decision" above).
2. While they run, author `debugging-11..20` (buggyState JSON, modeled closely on the 3 existing patterns
   in the codebase: a broken move chain, a repeat block with a wrong direction/count), `orchestra-11..20`,
   `cove-11..20` (sensor-based, must follow the sensor authoring rules in `.ai/specs/worlds.md`), and
   `eco-11..20` (capstone style — no new mechanic, reuse the six existing categories) directly, each with an
   exact hand-verified engine solution where a test file requires one.
3. Update `tests/orchestraLessons.test.ts`, `tests/coordinateCoveLessons.test.ts`, `tests/ecoCityLessons.test.ts`
   for the 3 worlds with dedicated tests.
4. As each drafting agent completes, integrate its 10 lessons and softening patch into `src/data/lessons.ts`.
5. Bump `lessonCount` to 20 in all 14 `src/data/worlds/*.ts` files.
6. Run the bounds/obstacle/reachability verification script (from the previous plan) against every new
   lesson id (11–20 across all 14 worlds).
7. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.
8. Update `.ai/specs/worlds.md` and add the decision log entry.
9. Commit and push to `claude/uniform-lessons-locked-worlds-npwxo4`.

---

## Rollback

Revert the commit(s). No localStorage migration needed — purely additive lesson content and test-solution
entries; no existing lesson `id`/`number` changed.

---

## Review notes

Self-reviewed against the same checklist as the previous plan; bounded scope (content + matching test
updates only). Approved to proceed to Build.

---

## Implementation notes

All 140 new lessons (11–20 across all 14 block-coding worlds) were written, integrated, and verified.

- **10 delegated worlds** (`jungle`, `space`, `loops`, `ocean`, `caves`, `factory`, `portal`, `jurassic`,
  `parking`, `sorting`): drafted by parallel background agents, integrated sequentially into
  `src/data/lessons.ts`. One agent's report was truncated mid-transcript (missing `space-11..14`); resent via
  a follow-up message to the same agent and integrated the complete set. A copy/paste slip put the jungle-10
  softening patch on `jungle-6` first; caught and re-applied to the correct lesson.
- **`debugging-11..20`**: hand-authored `buggyState` Blockly JSON trees, modeled on the 3 existing bug
  patterns in the file (broken chain, wrong direction/count).
- **`orchestra-11..20`**: hand-authored using a small coordinate-generator script
  (action-sequence → position) to guarantee exact solution/coordinate correctness; `tests/
  orchestraLessons.test.ts` updated with 10 new `solutions[]` entries and `toHaveLength(20)` —
  `bun test tests/orchestraLessons.test.ts` green (3 pass, 48 expect()).
- **`cove-11..20`**: hand-authored using a declarative sensor/variable "leg" generator script, with a
  1-based-vs-0-based sensor off-by-one bug caught and fixed (`currentRow()`/`currentCol()` are 1-based;
  internal `pos` is 0-based) by cross-checking against `cove-10`'s real shipped coordinates. Every candidate
  solution was replayed through the real `parseCodeToActions`/`applyAction`/`buildInitialState` engine
  (not just the generator's own simulation) before being written into the lesson file, including the 3
  lessons that add reef obstacles (`cove-18`, `cove-20`) — replayed a second time with the obstacles present
  to confirm no collision with the traced path. `tests/coordinateCoveLessons.test.ts` updated (10 new
  `SOLUTIONS` entries, `toHaveLength(20)`, sensors-required id list extended) — green (18 pass, 219 expect()).
- **`eco-11..20`**: hand-authored, staying within the capstone's documented constraint (no new block, engine
  behaviour, or goal type — only new combinations of the six existing categories: a two-gate compound IF, a
  variable growing across three legs, a function called a variable-controlled number of times, a 5-stop
  list, and a grand-tour finale combining functions + variables + logic). Every canonical action sequence
  replayed through the real engine before being written. `tests/ecoCityLessons.test.ts` updated (10 new
  `solutions[]` entries, `toHaveLength(20)`, exact id-list assertion extended to 20) — green (7 pass, 565
  expect()).
- **Finality-language audit**: since lesson 10 (or 9, for `portal`) is no longer the last lesson in any
  world, re-checked every world's old "final" lesson for over-claiming copy. Found 3 lessons where an
  earlier pass had softened `mascotMessage` but missed the `story` field, leaving literal "final"/"ultimate"
  claims in place: `portal-9`, `caves-10`, `space-10`. Fixed all three. `eco-10`'s title ("Eco City Finale")
  and story/mascotMessage also still claimed finality (it predates this plan's own softening pass) — retitled
  to "City Hub Run" and reworded; confirmed no test or source file references the old title string.
- **Full verification**: a scratch script checked bounds, obstacle collisions, start/item overlap, duplicate
  lesson ids, `starThresholds` shape (descending, 2- or 4-tuple), hint count (≥2), and world `lessonCount`
  parity against the actual lesson count across all 290 lessons in 14 worlds — all pass. `bunx biome ci`,
  `bun run type-check`, `bun run build` all pass. Full `bun test` — 304 pass, 8 skip, 0 fail, 26,899
  `expect()` calls across 8 files.
- Not run: `bun run audit-lessons` — that script (`scripts/audit-thinking-lessons.mjs`) only covers the
  thinking path, which this plan does not touch.
