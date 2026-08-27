# 2026-08-27 — Widen `thinkingWorldsContent.test.ts` to all 14 thinking worlds

**Context:** #57's third acceptance item asked to widen `NEW_WORLDS` (then `['planning',
'probability', 'spatial']`) to every thinking world once the `nature`/`deduction` INV-Q3 data was
fixed. That data fix landed via `.ai/plans/2026-08-27-content-thinking-lessons-tier-two.md` (#68),
which also expanded every world from 10 to 20 lessons — but never touched this test file, which
still hardcoded the 10-lesson shape. Widening `NEW_WORLDS` as literally written would have taken
the suite from 6 failures to many more, by applying stale 10-lesson/fixed-XP-bound assumptions to
all 14 worlds instead of 3.

**Decision:** Drop the `NEW_WORLDS` scoping constant entirely and run every per-world test against
all 14 worlds via `THINKING_WORLDS.map(w => w.id)`, and fix each test that assumed the old 10-lesson
shape to describe what the data actually is now:

- `'has 10 sequentially numbered lessons'` → `'has 20 …'`, `toHaveLength(10)` → `toHaveLength(20)`.
- The XP-curve test's fixed bounds (`number <= 4` → 10-15 XP, else → 15-25 XP) don't hold once
  lessons run 0-19. Measured the actual shipped data instead of inventing new bounds: every world's
  `xpReward` is non-decreasing within each 5-lesson block (0-4, 5-9, 10-14, 15-19), and every
  world's tier-two average exceeds its tier-one average — but XP is *not* globally non-decreasing
  end to end (e.g. `logic` lesson 4 costs 20, lesson 5 costs 18). Asserting a global monotonic
  order or a fixed numeric ceiling would fail on real, already-shipped content for no reason INV-Q5
  actually requires. The new test checks the two properties that are true and mirrors
  `scripts/audit-thinking-lessons.mjs`'s own tier-average INV-Q5 check, rather than re-deriving
  different, stricter numbers from scratch.
- `'lesson 0 opens the world with a tutorial card'` assumed every world has one. Checking the data
  showed this was never a general rule — only the 6 worlds designed after the tutorial-card pattern
  existed (`math_reasoning`, `induction`, `deduction`, `planning`, `probability`, `spatial`) have
  one; the original 8 never did, by design (`.ai/specs/worlds.md`'s `tutorial?` field is explicitly
  optional). Made the test `test.skipIf(!lessons[0]?.tutorial)` instead of forcing a requirement
  that was never a real invariant for 8 of the 14 worlds.
- The `sort` branch of `'every puzzle has a reachable, unambiguous answer'` required every sort
  item to parse as a plain `Number()`. Tier two added sorts over fractions (`1/2`, `3/4`), exponent
  notation (`2³`), and clock emoji — genuinely non-numeric-string but still correctly ordered.
  Gated the ascending-order assertion on `p.items.every(item => !Number.isNaN(Number(item)))`
  instead of applying it unconditionally.

Widening also caught 9 real, previously-unchecked INV-C5 violations (`→`/`✓` embedded in tutorial
copy in `math_reasoning`, `induction`, and `deduction` lessons) — those are content bugs, fixed by
rewording, not a test problem. See the plan's implementation notes for the full list.

**Alternatives rejected:**
- Close #57 and file separate issues for everything the widening would break — offered first;
  user asked for the full fix instead.
- Delete this test file and rely on `scripts/audit-thinking-lessons.mjs` alone — the script doesn't
  check INV-C5 (forbidden symbols), doesn't run as part of `bun test` (so failures wouldn't show in
  the same place as everything else), and doesn't check the world colour-theme regression guard
  this file also owns. Keeping both means content gets checked twice, in two different failure
  modes, which is more coverage, not redundant coverage.
- Hardcode new fixed XP bounds per lesson-number bucket instead of the block-monotonic + tier-average
  check — rejected because the actual shipped data doesn't satisfy any single set of fixed numeric
  bounds cleanly (see the XP-curve bullet above); inventing one would either fail on real content or
  be so loose it checks nothing.

**Consequences:** `tests/thinkingWorldsContent.test.ts` now covers all 14 thinking worlds
(119 pass, 8 skip — the 8 worlds with no lesson-0 tutorial — 0 fail, up from 3 of 14 worlds
covered). 9 lesson strings were reworded (no lesson id, puzzle answer, or XP value changed, so no
stored progress is affected — INV-PR1). `tests/spatialPuzzle.test.ts` has its own, separate,
pre-existing failure from the same #68 lesson expansion (assumes every `spatial`-world lesson is
puzzle type `spatial`, which tier two broke); left alone and filed as its own issue rather than
folded into this fix, for the same reason #57 itself was filed separately from the plan that found
it.
