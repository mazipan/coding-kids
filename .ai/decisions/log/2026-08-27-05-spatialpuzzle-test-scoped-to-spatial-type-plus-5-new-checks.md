# Decision: `spatialPuzzle.test.ts` scopes its structural checks to `type: 'spatial'` lessons and adds 5 hand-derived geometry checks for the other tier-two types

**Date:** 2026-08-27

## Context

Tier two (`.ai/plans/2026-08-27-content-thinking-lessons-tier-two.md`, #68) added `grid-select`
(`spatial-11`, `spatial-17`), `multi-step` (`spatial-13`, `spatial-18`), and `if-then`
(`spatial-15`) puzzles to the `spatial` world by design, per that plan's own per-world mechanic
table. `tests/spatialPuzzle.test.ts` predates that change and asserted every lesson in the world
has `puzzle.type === 'spatial'`, so it broke on those 5 lessons (issue #70): 130 pass / 1 fail /
5 errors on `main`.

## Decision

Scoped the file's `SpatialPuzzle`-shaped checks (the per-lesson `describe.each` structural block,
and the letter-slot positional-bias test) to `lessons.filter(l => l.puzzle.type === 'spatial')`,
since those checks read fields (`figure`, `options`, `answerId`) that only `SpatialPuzzle` has.
`GridSelectPuzzle`, `MultiStepPuzzle`, and `IfThenPuzzle` are structurally different shapes, not
degenerate `SpatialPuzzle`s — narrowing the existing checks is correct, not generalizing them.

Did not re-implement structural/bilingual-copy checks for the 5 lessons here: those are already
covered generically, across all 14 thinking worlds, by `scripts/audit-thinking-lessons.mjs`'s
per-type `switch` cases and by `tests/thinkingWorldsContent.test.ts`'s localized-copy and
forbidden-symbol walk. Duplicating them in this file would be pure maintenance surface with no new
coverage.

What genuinely had zero coverage — per the issue's own acceptance criteria — was puzzle-specific
geometry/logic correctness: does the mirror image, the treasure's coordinates, the turn chain, the
perspective swap, and the paper-fold layer count actually match what each lesson's own text claims.
Added 5 new tests, one per lesson, in the same hand-simulation style the file already uses for
lessons 0-9 (`'authored answers match their declared transformation'`), looked up by lesson id
(not array index, since these 5 are not contiguous with the `spatial`-typed lessons once filtered).
Hand-verified all 5 correct before writing the tests: `spatial-11`'s tapped cells complete the
mirror exactly; `spatial-13`'s turn chain lands N→E→W→S as claimed; `spatial-15`'s mirroring rule
(her right hand is on your left when facing each other) is correctly answered; `spatial-17`'s
marked cell is exactly 2 east + 1 south of the palm tree; `spatial-18`'s layer count doubles per
fold (1→2→4) and the punch answer matches. No lesson-data changes were needed.

The "answer never sits in the same slot three lessons running" test was also reworked, not just
re-scoped: checking adjacency only within the filtered `spatial`-typed subsequence was tried first
and produced a false failure (`spatial-14`/`-16`/`-19` all answer `'a'`, adjacent only once
`spatial-13`/`-15`/`-17`/`-18` are filtered out) that a child never actually experiences, because in
real lesson-number play order those three are separated by other-typed lessons. Fixed by iterating
the full 20-lesson play-order sequence and resetting the run counter whenever a non-`spatial`-typed
lesson intervenes — a different puzzle type has a different UI (tap cells, chain of semantic
choices, single condition) that a "keep tapping letter A" strategy doesn't touch anyway. The
letter-usage-frequency half of the same test (no letter used in over half the multiple-choice
lessons) stays scoped to the filtered `spatial`-typed list, since it's a global frequency count,
not an adjacency check, and unaffected by interleaving.

## Alternatives considered

- **Generalize the structural block to branch on `puzzle.type`.** Rejected — duplicates
  `scripts/audit-thinking-lessons.mjs` and `thinkingWorldsContent.test.ts` with no new coverage.
- **Skip the 5 lessons with a comment only.** Rejected — the issue explicitly requires the
  geometry/answer content of those 5 lessons be verified, not just structurally excluded.
- **Rewrite the 5 lessons to be `type: 'spatial'`.** Rejected — tier two's diversification of
  `spatial`'s mechanics was a deliberate, already-reviewed design decision from #68, not a defect.
