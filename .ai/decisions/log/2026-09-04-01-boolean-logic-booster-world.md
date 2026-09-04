# 2026-09-04 — Add Boolean Logic Booster as a bonus blocks-path world

**Context:** Issue #87 asked for compound boolean conditions (AND / OR / NOT) — a CS concept
missing from the 14-world blocks path. Crystal Caves (`caves`) only teaches single-condition
`if`/`else`; nothing exercises `logic_operation` (AND/OR) or `logic_negate` (NOT), even though
Blockly ships both as built-ins. The issue asked the planner to check whether these blocks were
already reachable in an existing toolbox category before deciding scope.

**Decision:** Investigated `src/blockly/toolboxes.ts` first — `LOGIC_CONTENTS` already lists
`logic_operation` and `logic_negate` alongside `controls_if`/`logic_compare`/`logic_boolean`, all
under the existing `'logic'` toolbox category. No toolbox or `customBlocks.ts` change was needed;
this shipped as a content-only change. Added a new bonus world, `boolean` ("Logic Lighthouse",
🦉 Ollie, 8–14), with 20 lessons split into two tiers: lessons 1–10 build up AND → OR → NOT →
AND-loop → OR-loop → NOT-loop → nested AND-in-OR → nested OR-in-AND → an introductory NOT(A AND
B) puzzle → a buggy AND-loop fix; lessons 11–20 repeat the same ten mechanics with real sensor
comparisons, bigger grids, and nested/two-forbidden-combo conditions, ending on a harder
NOT(A AND B) capstone (lesson 20) that is the closest this codebase gets to De Morgan's law,
deliberately never named as such — just experienced through two forbidden row/column
combinations that are each false on a different axis.

Placed as a bonus world (no lesson 0, numbering starts at 1, INV-L2 applies) rather than inserted
into the 7 main worlds, per the issue's recommendation — it avoids renumbering any existing main
world route and matches the precedent of `jurassic`/`parking`/`sorting`/`debugging`.

Two loop-mechanic lessons (`boolean-10`, `boolean-19`) ship `isBuggy: true` with a hand-written
Blockly `buggyState` (mirroring `cove-9`'s off-by-one bug), each with one wrong number inside a
`logic_operation`-wrapped loop test instead of a bare `logic_compare`.

**A real bug caught during authoring, not shipped:** `requiredCategories: ['logic']` is satisfied
only by a `controls_if`/`controls_ifelse` block (`CATEGORY_BLOCK_TYPES` in `src/data/xpSystem.ts`),
not by `logic_operation`/`logic_negate` on their own. The eight loop-mechanic lessons (AND/OR/NOT
inside a `controls_whileUntil` test, no `controls_if` anywhere) originally required `'logic'` and
would have silently capped every correct solution at 1 star. Caught by a new
`tests/booleanLogicLessons.test.ts` (modeled on `tests/coordinateCoveLessons.test.ts`) that runs
each lesson's canonical JS solution through the real engine and checks `calculateStars` — fixed by
requiring `'loops'` instead, exactly like Coordinate Cove's sensor-loop lessons. Documented as a
gotcha in `.ai/agents/context.md` and `.ai/specs/worlds.md` so the next world doesn't repeat it.

**Alternatives rejected:**
- *Insert into the main 7-world path (e.g. between Crystal Caves and Robot Factory)* — rejected
  per the issue: would renumber every route from `factory` onward and reshuffle the established
  sequences → loops → variables → conditions → functions → arrays progression.
- *Add a new toolbox category for AND/OR/NOT* — rejected once the toolbox investigation showed
  `logic_operation`/`logic_negate` already ship in the existing `'logic'` category; a new category
  would have been unnecessary surface area against no gap.
- *Only use literal `true`/`false` conditions throughout (matching Crystal Caves' shallow "if true"
  teaching style)* — rejected for lessons 4 onward. Real `currentRow()`/`currentCol()` sensor
  comparisons (the pattern Coordinate Cove established) let AND/OR/NOT produce genuinely different,
  reasoned-about stopping points (AND = stricter bound wins, OR = nearer bound wins, NOT = same
  test flipped) rather than being purely decorative wrappers.

**Consequences:** The blocks path now has 15 worlds / 148 lessons (was 14 / 128). `landing.worlds.title`
(33, was 32), `.ai/agents/context.md`, `.ai/specs/worlds.md`, and `README.md`'s block-coding counts
and tables were updated to match. Any future world that combines boolean operators with loop tests
should consult the `requiredCategories` gotcha above before assuming `'logic'` covers it.
