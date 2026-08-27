# Plan: Fix `spatialPuzzle.test.ts` for tier-two `spatial` puzzle types (#70)

**Slug:** `fix-spatialpuzzle-test-tier-two-types`
**Date:** 2026-08-27
**Status:** done

---

## Request

> Issue #70: `tests/spatialPuzzle.test.ts` has a `spatialPuzzle()` helper that asserts every lesson
> in the `spatial` world has `puzzle.type === 'spatial'`. That was true for tier one (10 lessons),
> but tier two (`.ai/plans/2026-08-27-content-thinking-lessons-tier-two.md`, #68) added
> `grid-select` (`spatial-11`, `spatial-17`), `multi-step` (`spatial-13`, `spatial-18`), and
> `if-then` (`spatial-15`) lessons to the same world by design. The helper now throws on those 5
> lessons: `bun test tests/spatialPuzzle.test.ts` is 130 pass / 1 fail / 5 errors on `main`, and was
> already failing identically before #69's commit (confirmed pre-existing by the issue reporter).
> Acceptance: the suite is green again covering all 20 lessons appropriately for their actual
> puzzle type, no coverage is silently dropped for the 5 non-`spatial`-type lessons, the geometry/
> answer content of those 5 lessons is verified (by hand or script) since this file's gap means
> they currently have zero automated geometry verification, and the full `bun test` suite is green.

---

## Decision

Scope the file's `SpatialPuzzle`-shaped checks (the `describe.each` structural block, and the
per-lesson `answerId` positional-balance test) to `lessons.filter(l => l.puzzle.type ===
'spatial')` — those checks read `puzzle.figure`/`puzzle.options`/`puzzle.answerId`, which only
`SpatialPuzzle` has; `GridSelectPuzzle`, `MultiStepPuzzle`, and `IfThenPuzzle` are structurally
different shapes, not degenerate cases of `SpatialPuzzle`, so narrowing rather than generalizing
the checks is correct.

That scoping alone would silently drop coverage for the 5 lessons, which the issue explicitly
forbids. Two things close the gap without duplicating existing coverage:

1. **Structural/localization checks** (rectangular grids, in-range answer cells, unique option
   ids, `answerId`/`answer` membership, non-empty bilingual copy, INV-C5 symbol ban) for
   `grid-select`/`multi-step`/`if-then` are already asserted generically, across all 14 worlds,
   by `scripts/audit-thinking-lessons.mjs` (per-type `switch` cases already exist there) and
   `tests/thinkingWorldsContent.test.ts` (localized-copy walk + forbidden-symbols check runs over
   every lesson regardless of puzzle type). Re-asserting them here would be pure duplication —
   the file's own header comment already says the world-shape/copy checks live elsewhere.
2. **What's genuinely uncovered** is puzzle-specific geometry/logic correctness — does the mirror
   image, the treasure's map coordinates, the turn chain, the perspective swap, and the paper-fold
   layer count actually match what each lesson's own text claims. That is exactly what the
   existing `describe('authored answers match their declared transformation', ...)` block does for
   lessons 0-9, hand-simulating each lesson's instructions and comparing to the authored answer.
   Add 5 sibling tests in the same style — one per affected lesson, looked up by id (not array
   index, since these 5 are no longer contiguous with the `spatial`-typed lessons) — each
   re-deriving the correct answer from the puzzle's own stated rule and asserting it against the
   authored `answerId`/`answer`.

Hand-verified all 5 by the same method the new tests encode, before writing them, per the issue's
"verify... by hand or script" instruction: `spatial-11`'s tapped cells exactly complete the mirror
(mirror axis between columns 1 and 2, 0-indexed); `spatial-13`'s three turns chain correctly
(N →right→ E →right,right→ W →left→ S); `spatial-15`'s answer is the mirror-side hand ("her right"
is on "your left" when facing each other); `spatial-17`'s marked cell is 2 east + 1 south of the
palm tree; `spatial-18`'s layer count doubles per fold (1→2→4) and the punch produces one hole per
layer once unfolded. All 5 are correct as authored — no lesson-data changes needed, only the test.

The "answer never sits in the same slot" positional-bias test also gets scoped to
`spatial`-typed lessons only: it specifically checks letter-slot bias (`a`/`b`/`c`/`d`) among
`SpatialPuzzle.answerId`s, which only 15 of the 20 `spatial`-world lessons have in that shape — the
5 non-`spatial` lessons use semantic ids (`east`/`right`/etc, or per-step ids inside
`MultiStepPuzzle`, or a cell-set for `GridSelectPuzzle`) that are not comparable slot letters, so
folding them in would compare apples to oranges rather than genuinely widen the check.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Generalize `spatialPuzzle()`/the structural block to branch on `puzzle.type` and assert type-appropriate structural shape inline | Would duplicate `scripts/audit-thinking-lessons.mjs`'s existing per-type structural checks and `thinkingWorldsContent.test.ts`'s existing copy/symbol checks, adding maintenance surface with no new coverage. The issue's own suggested fix offers filtering as the preferred option. |
| Skip the 5 lessons entirely with a comment pointing at the audit script | Rejected by the issue's own acceptance criteria: "No coverage silently dropped... either genuinely checked or explicitly and visibly excluded with a reason," and separately requires verifying the 5 lessons' actual geometry/answer content. A skip-only fix would leave the geometry gap the issue explicitly calls out unaddressed. |
| Rewrite the 5 lessons to be `type: 'spatial'` instead of fixing the test | Out of scope and wrong: tier two's own plan (#68) deliberately diversified `spatial`'s mechanics across `multi-step`/`grid-select`/`if-then`/`spatial` per its per-world mechanic table; that is a design decision from an already-shipped, already-reviewed plan, not a defect. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | Not touched; lesson numbering/ids unchanged. |
| INV-L2 world unlock by XP | no | |
| INV-L3 thinking worlds always unlocked | no | |
| INV-G1..G4 game engine | no | Blocks-path only; this is a thinking-path test file. |
| INV-C1 TypeScript strict | yes | `bun run type-check` run before commit; new code narrows `ThinkingPuzzle` to `SpatialPuzzle`/`GridSelectPuzzle`/`MultiStepPuzzle`/`IfThenPuzzle` via lookups keyed on `puzzle.type`, so no `as`-casts beyond what the file already does. |
| INV-C2 no hardcoded strings | no | Test-only; no new user-visible strings. |
| INV-C3 build passes | yes | `bun run build` run before commit. |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | Already covered by `thinkingWorldsContent.test.ts` for all 20 lessons; not re-asserted here. |
| INV-I2 no layout assumptions | no | |
| INV-Q1..Q5 content quality | no | No lesson content changes — this plan verifies (and confirms correct) existing tier-two content, it does not author new content. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `tests/spatialPuzzle.test.ts` | edit | Scope the `describe.each` structural block and the positional-bias test to `type === 'spatial'` lessons; add a lesson-id lookup helper; add 5 new geometry tests for `spatial-11/13/15/17/18`; update the file's top comment to describe the new scoping. |
| `.ai/decisions/log/2026-08-27-05-spatialpuzzle-test-scoped-to-spatial-type-plus-5-new-checks.md` | add | Decision record for the scoping + new-coverage approach. |

No `src/` changes — this is test-only, matching the sibling `#57` fix in
`.ai/plans/2026-08-27-fix-thinkingworldscontent-test-staleness.md`.

---

## Spec changes

None. No invariant or spec text changes; this makes the test suite match content that already
ships correctly.

---

## Implementation steps

1. In `tests/spatialPuzzle.test.ts`:
   - Update the top file comment to note the file covers `spatial`-typed lessons in full plus
     hand-verified geometry for the 5 tier-two lessons of other types in this world; structural/
     copy checks for those 5 live in `scripts/audit-thinking-lessons.mjs` and
     `thinkingWorldsContent.test.ts`.
   - Add `const spatialTypeLessons = lessons.filter(l => l.puzzle.type === 'spatial')` and switch
     the `describe.each` block (line ~96) to iterate `spatialTypeLessons` instead of `lessons`.
   - Add a `lessonById(id: string): ThinkingLesson` helper (find + assert found, same
     assertion style as `optionGrid`'s existing "exists" check) for looking up the 5 lessons by id.
   - Change the "answer never sits in the same slot" test to compute `answerIds` from
     `spatialTypeLessons` instead of `lessons`.
   - Add 5 new tests to (or alongside) the `'authored answers match their declared transformation'`
     describe block:
     - `spatial-11`: derive the expected tapped-cell set from `cells` by mirroring each already-
       filled left-half cell across the axis between columns 1 and 2 (0-indexed), assert it equals
       `puzzle.answer` (order-independent).
     - `spatial-13`: replay the 3-step turn chain (right, right+right, left) from a `north` start
       using the same clockwise-heading arithmetic `driveRobot` already uses, asserting each step's
       `answerId` matches the replayed heading.
     - `spatial-15`: assert `answerId === 'right'` with a comment stating the mirroring rule (their
       right hand sits on your left when facing each other).
     - `spatial-17`: locate the `🌴` cell in `cells`, compute 2-east-1-south from it, assert it
       equals `puzzle.answer`.
     - `spatial-18`: compute layers doubling per fold step (1→2→4) and assert each step's
       `answerId` matches the number word for that step's layer count, including the punch step
       equaling the final layer count.
2. Run `bun test tests/spatialPuzzle.test.ts` — confirm 0 fail, all 20 lessons covered.
3. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test`, `bun run audit-lessons`
   — all must pass.
4. Add the decision log entry.
5. Update this plan's status to `done` with implementation notes.
6. Commit, push to `claude/github-issue-70-review-e37ym8`.
7. Comment on and close GitHub issue #70.

---

## Rollback

Revert the commit. Test-only change with no data or production-code edits — nothing to migrate,
no stored progress affected.

---

## Review notes

Single-agent session continuing the same pattern as the sibling `#57` fix plan (see its own
"Review notes"): no separate plan-review pass by a second agent before build. Verification commands
(step 3) plus the hand-derived geometry cross-check documented in "Decision" above are the actual
gate before commit. This is a test-only bug fix restoring a pre-existing (already-shipped, already-
reviewed) content set to green — reviewer-kid's playtest lens has nothing to check here since no
gameplay, copy, or UI changes.

---

## Implementation notes

Built as planned, with one refinement found during implementation: the "answer never sits in the
same slot three lessons running" test could not simply reuse the filtered `spatialTypeLessons`
sequence for its adjacency check — doing so produced a false failure (`spatial-14`/`-16`/`-19` all
answer `'a'`, adjacent only after filtering out the other-typed lessons between them) that a child
never actually experiences in real lesson-number play order. Reworked that half of the test to walk
the full 20-lesson sequence and reset the run counter on any non-`spatial`-typed lesson — see the
decision log entry for the full reasoning. The letter-frequency half of the same test stays scoped
to `spatialTypeLessons` as planned.

Also needed `bun install` first — dependencies were not yet installed in this session's checkout,
which is why `bun run type-check` initially failed with unrelated `Cannot find module 'react'` /
`Cannot find type definition file for 'node'` errors. Unrelated to this change; resolved by
installing.

**Verification.** `bunx biome ci` clean. `bun run type-check` (`tsc -b --noEmit`) 0 errors.
`bun run build` succeeds. `bun test tests/spatialPuzzle.test.ts` → 136 pass, 0 fail (was 130 pass,
1 fail, 5 errors). Full `bun test` → 301 pass, 8 skip, 0 fail across 7 files. `bun run audit-lessons`
→ 280 lessons across 14 worlds, 0 problems. No `src/` or lesson-data changes — all 5 flagged
lessons' geometry was hand-verified correct as authored.
