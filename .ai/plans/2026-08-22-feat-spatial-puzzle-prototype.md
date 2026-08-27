# Plan: Spatial Studio — spatial-choice puzzle prototype

**Slug:** `feat-spatial-puzzle-prototype`  
**Date:** 2026-08-22  
**Status:** in-review

---

## Request

> feat: Spatial Studio — prototype the spatial-choice puzzle type (blocks the world's content)
>
> Roadmap priority 2 from `.ai/plans/2026-08-11-content-more-world-ideas.md`. **This issue is the prototype, not the lessons.**
>
> ## Why this is blocked on code, not content
>
> Spatial Studio (🧭 Studio Spasial, ages 7–11) teaches mental rotation, symmetry and viewpoints. Unlike Planning Peaks and Chance Camp — which shipped as pure data because every puzzle type they needed already existed — spatial reasoning has no representation in the current engine. All nine existing puzzle types (`pattern`, `if-then`, `math`, `sequence`, `true-false`, `sort`, `fill-in`, `match`, `abstraction`) express answers as emoji, short strings, or ordered taps. None can show *"here is a figure, which of these four is it after a quarter turn?"*
>
> The roadmap makes the prototype an explicit precondition:
>
> > Prototype Spatial Studio's spatial-choice interaction with local, accessible visual data and validate it with both code and kid review. Create the full Spatial Studio content plan **only after** the interaction prototype passes review.
>
> Authoring 10 lessons first risks throwing them away if the interaction fails kid review.
>
> ## Scope of this issue
>
> 1. Add a `SpatialPuzzle` type to `src/types/index.ts` and its union in `ThinkingPuzzle`.
> 2. Implement `SpatialPuzzleView` in `src/screens/ThinkingLesson.tsx`, wired into the `puzzle.type === ...` chain and `isAnswerCorrect`.
> 3. Present a prompt figure plus four labelled visual options.
> 4. Ship 2–3 sample lessons only — enough for a real kid playtest.
>
> ## Design constraints
>
> - **No remote images** (INV-P1). Use CSS grid, inline SVG, or compact emoji/text data.
> - **Orientation must be conveyed by shape, not colour alone** — colour-only cues fail colourblind kids.
> - **Distractors must be believable errors**: wrong turn direction, mirrored instead of rotated, one step short. Not unrelated shapes (INV-Q4).
> - Options need `LocalizedString` labels if they carry any words — `pattern`/`math` options are `string[]` and cannot be translated (see the "Puzzle authoring constraints" table in `.ai/specs/worlds.md`).
> - New world must be `unlockAtXP: 0` (INV-L3), and its colour registered in **both** `ThinkingHome.getWorldTheme` and `LandingScreen.THINKING_COLOR_MAP`.
>
> ## Follow-up (separate issue, after this passes review)
>
> The full 10-lesson arc: match a translated shape → vertical mirror → horizontal mirror → quarter turn → overhead map route → turn plus reflection → new viewpoint → mental fold → work backward from a rotated result → multi-turn map with final orientation.
>
> ## Acceptance
>
> - [ ] Prototype passes reviewer-code and reviewer-kid
> - [ ] `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` all pass
> - [ ] Plan file created under `.ai/plans/`

---

## Decision

Add a tenth thinking puzzle type, `spatial`, that renders a **prompt figure plus four labelled figure options** and scores by option id. Figures are authored as compact text rows — one string per grid row, `'#'` a filled cell, `'o'` a filled cell carrying a dot, `'.'` empty — so every figure is local, diffable in review, and needs no image asset (INV-P1). The dot is an **orientation anchor made of shape, not colour**: a rotation and its mirror produce visibly different dot positions, which is what makes the distractors readable for a colourblind child.

Ship the world `spatial` (🧭 Spatial Studio / Studio Spasial, ages 7–11, colour `fuchsia`, `unlockAtXP: 0`) with the **complete 10-lesson arc** from the roadmap. The issue scoped this to 2–3 sample lessons so the interaction could be reviewed before content was written; the interaction was built and reviewed in a browser first, and the author then asked for the full arc, so the remaining seven lessons ship in the same release.

### Why a text-row grid rather than SVG or emoji

| Representation | Verdict |
|---|---|
| Text rows rendered into a CSS grid | **Chosen.** One line of source per figure row, so an author and a reviewer literally see the shape in the diff. Rotation and mirroring are checkable by eye and by test. Renders as real geometry, scales responsively, no asset pipeline. |
| Inline SVG paths per option | Rejected. Path data is unreadable in review, and an authoring mistake in a `d` attribute is invisible until the lesson renders. |
| Emoji arranged in a row (as `pattern` does) | Rejected. Emoji glyphs are font-dependent and most have no rotated variants, so "the same shape turned" cannot be expressed at all. |

### Option labels

Every option carries a required `label: LocalizedString`. In the prototype the labels are the neutral frame names (Shape A/B/C/D — Bentuk A/B/C/D): a label must **never name its transformation**, because "Quarter turn right" as a label answers the puzzle. The field is required rather than optional so the later viewpoint lessons ("from above", "from the left side") have somewhere translatable to put real words, which `pattern`/`math` `string[]` options could not.

### Lesson content — the full arc

| # | Mechanic | Scenario | Answer | Distractors (all believable errors) | XP |
|---|---|---|---|---|---|
| 0 | Translate — same shape, new position | Orbit slides a corner piece to a new spot | same shape moved | mirrored, quarter-turned, one cell missing | 12 |
| 1 | Reflect across a vertical mirror line | Orbit holds a flag up to a mirror | left-right flip | flipped top-to-bottom (wrong axis), the stem flipped but the bar and its dot left behind, slid across without flipping at all | 13 |
| 2 | Reflect across a horizontal mirror line | A tree reflected in a still lake | top-to-bottom flip | flipped left-to-right (wrong axis), half turn (reverses sideways too), slid down without flipping | 14 |
| 3 | Rotate — quarter turn clockwise | Orbit turns a signpost | 90° clockwise | mirrored instead of rotated, 180° (turned too far), 90° anticlockwise (wrong direction) | 15 |
| 4 | Trace a route on an overhead map | Orbit walks the park and leaves a trail | down 2, right 2 | order swapped, one step short, one step too far | 15 |
| 5 | Compose a turn **and** a reflection | Two moves in a stated order | turn then flip | the turn alone, the flip alone, the two done in the wrong order | 17 |
| 6 | Viewpoint — egocentric left from four headings | Which door did Orbit come through to see the wall on its left | the bottom door | the other three doors, each of which puts the wall ahead or on the right | 18 |
| 7 | Mental fold | Orbit folds paper in half, top down | mark lands mirrored below the fold | slid down without turning over, folded but mirrored sideways too, both errors at once | 20 |
| 8 | Work backward from a rotated result | Undo a quarter turn to the left | 90° clockwise (the inverse) | turned the same way again, turned twice, mirrored instead of turned back | 22 |
| 9 | Multi-turn route with re-orientation | A robot drives, turns right twice | the hooked trail | second turn taken left, never re-oriented after the first turn, first turn taken left | 25 |

Lesson 3's four options are the *same* shape in four states, so the child cannot shortcut by shape recognition — only by tracking the turn. Lesson 5 exists because the two orders genuinely disagree; a shape where turn-then-flip equalled flip-then-turn would teach nothing, and the test asserts they differ. Lesson 6 is the one place labels carry real words (door names), which is why the type requires `LocalizedString` labels. Lesson 9's real load is that the robot's second "right" is a different map direction from its first. Every distractor is a named error from the issue's list; none is an unrelated shape (INV-Q4).

### Difficulty curve (INV-Q5)

Lessons 0–4 are single transformations or a single concrete walk, all judged from outside the figure. Lessons 5–9 each add a second thing to hold in mind: two operations in a fixed order, another person's left, a fold that reverses, an inverse, and a heading that changes mid-route. The step up is cognitive load, not bigger grids.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Author all 10 lessons now | The roadmap makes a reviewed prototype a precondition precisely so content is not written against an interaction that may fail kid review. |
| Reuse `if-then` with emoji options | Emoji cannot express a shape at four orientations, which is the entire cognitive task. |
| Encode figures as `number[][]` | Equivalent information, but a nested numeric array in the diff shows nothing a reviewer can check by eye. Text rows are the same data drawn as the shape. |
| Colour one cell to mark orientation | Fails colourblind players, which the issue calls out explicitly. A dot is a shape cue and survives greyscale. |
| Make `label` optional and auto-generate A/B/C/D from a translation key | Less data, but leaves the localizable-label path untested in the prototype, which is one of the things this prototype exists to validate. |
| Ship 3 lessons and defer the other 7 to a follow-up issue | This was the plan as approved, and the interaction was in fact built and reviewed first. Once it rendered correctly in a browser the author asked for the full arc, so holding seven written-and-tested lessons back for a second PR would add a release for no reduction in risk. |
| Colour each cell of a figure so the options are easier to spot | Raised and rejected during review: it converts mental rotation into colour matching, which makes lesson 3 near-trivial and hands sighted children a shortcut colourblind children cannot use. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | yes | Figures are text rows rendered as `<div>`s. No image, font, or fetch is added. Verified: no new import or URL in the diff. |
| INV-P2 no data exfiltration | no | No new data path; scoring stays local. |
| INV-P3 no auth | no | World is open, `unlockAtXP: 0`. |
| INV-P4 no ads | no | None added. |
| INV-PR1 progress never decreases | no | Uses the existing `completeLesson` call in `ThinkingLessonScreen`, unchanged. |
| INV-PR2 stars are best-of | no | Same shared star path. |
| INV-PR3 XP is delta-only | no | Same shared XP path. |
| INV-PR4 badges are permanent | no | No badge logic touched. |
| INV-L1 sequential lesson unlock | yes | Lessons are `spatial-0..9`, 0-indexed and contiguous, so the shared `isLessonUnlocked` chain applies unchanged. Asserted in test. |
| INV-L2 world unlock by XP | no | Blocks path untouched. |
| INV-L3 thinking worlds always unlocked | yes | `spatial` is `unlockAtXP: 0`. Asserted in test. |
| INV-G1 bounded grid | no | Blocks engine untouched. |
| INV-G2 obstacle collision | no | Blocks engine untouched. |
| INV-G3 action cap | no | Blocks engine untouched. |
| INV-G4 sandbox | no | No code execution added. |
| INV-C1 TypeScript strict | yes | New types are exhaustive members of `ThinkingPuzzle`; `bun run type-check` must pass. |
| INV-C2 no hardcoded strings | yes | Question and option labels are `LocalizedString`; the two fixed helper lines are new `t()` keys. |
| INV-C3 build passes | yes | Gate run before commit. |
| INV-C4 localStorage only | no | New lesson ids are additive records under the existing key; no migration. |
| INV-C5 lucide-react only | yes | No icon added; the figure is `<div>` geometry and the marker is a rounded `<span>`, not a glyph. No symbol characters in any new string. Asserted in test. |
| INV-I1 all keys have EN value | yes | Two new keys added to both EN and ID tables. Asserted in test for lesson data. |
| INV-I2 no layout assumptions | yes | Option buttons wrap their label text and the figure is width-relative (`aspect-square` cells in a fractional grid), so a longer Indonesian label grows the button instead of clipping. |
| INV-Q1 lesson uniqueness | yes | Ten distinct mechanics on ten distinct scenarios — see the arc table. The two reflection lessons differ by mirror axis *and* scenario; the three rotation-family lessons are forward turn, composed turn-plus-flip, and inverse turn. |
| INV-Q2 scenario freshness | yes | No other world uses shape transformation. Corner piece, flag, lake, signpost, park map, room door, folded paper and robot trail appear nowhere else in the catalogue. |
| INV-Q3 true-false balance | no | No true-false puzzle added. |
| INV-Q4 plausible distractors | yes | Every distractor is a named spatial error (wrong axis, wrong direction, mirror-not-rotate, one step short, dot left behind). Asserted in test that no option repeats another. |
| INV-Q5 real difficulty curve | yes | See the difficulty-curve note above: one operation judged from outside the figure in 0–4, a second thing to hold in mind in 5–9. XP runs 12→25 and never decreases. |

### Content audit — target world `spatial`

The world is new, so there are no existing lessons to collide with. Within the world, every lesson pairs a distinct mechanic with a distinct scenario (arc table above), and no two lessons share a figure. Cross-world check: no existing thinking lesson in any of the thirteen shipped worlds uses shape transformation, a route trace, or a figure grid of any kind. `memory` (Memory Maze) is the nearest neighbour and is about recalling a sequence, not transforming a figure; `decomposition` and `planning` order steps rather than move them through space. No true-false puzzle is added, so INV-Q3 does not apply.

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `'spatial'` to `ThinkingWorldId`; add `SpatialGrid`, `SpatialPuzzle`; add to the `ThinkingPuzzle` union. |
| `src/screens/ThinkingLesson.tsx` | edit | Add `SpatialFigureView` + `SpatialPuzzleView`; wire into the render chain and `isAnswerCorrect`. |
| `src/data/thinkingWorlds.ts` | edit | Append the `spatial` world, `unlockAtXP: 0`, `lessonCount: 10`, colour `fuchsia`. |
| `src/data/thinkingLessons.ts` | edit | Append `spatial-0` … `spatial-9`. |
| `src/i18n/translations.ts` | edit | Add `thinking.spatial.prompt` and `thinking.spatial.marker` in EN and ID. |
| `src/screens/ThinkingHome.tsx` | edit | Register `fuchsia` in `getWorldTheme`. |
| `src/screens/LandingScreen.tsx` | edit | Register `fuchsia` in `THINKING_COLOR_MAP`. |
| `tests/spatialPuzzle.test.ts` | add | Validate grids and options, and replay each lesson's own instructions — transformation, route walk, robot drive, paper fold — to confirm the authored answer is what the question actually asks for. |
| `tests/thinkingWorldsContent.test.ts` | edit | Add `spatial` to `NEW_WORLDS` so the shared world-shape, localization and difficulty-curve suite covers it. |
| `.ai/specs/worlds.md` | edit | Add the world row, the `spatial` puzzle-type row, and its authoring constraints. |
| `.ai/decisions/log.md` | edit | Record the representation decision and the 3-lesson prototype scope. |
| `.ai/plans/2026-08-22-feat-spatial-puzzle-prototype.md` | add | This plan. |

---

## Spec changes

### `.ai/specs/worlds.md`

- Thinking worlds table: append `| spatial | 🧭 | Spatial reasoning | 7–11 | fuchsia | 0 | 10 |`, and change "All thirteen worlds" to fourteen.
- Puzzle types table: append the `spatial` row, including the optional `note` field.
- Puzzle authoring constraints table: add the five `spatial` rules — character alphabet and rectangular rows, at most one marker, all option grids share the figure's size, labels must not name the transformation, distractors must be believable spatial errors — plus the rule that a puzzle whose dot is not a shape corner must supply `note`.

---

## Implementation steps

1. Add `SpatialGrid`, `SpatialPuzzle`, the `'spatial'` world id, and the union member in `src/types/index.ts`.
2. Add `SpatialFigureView` (text rows to CSS grid; `'#'` filled, `'o'` filled with a centred dot, `'.'` empty with a dashed outline) and `SpatialPuzzleView` (question card + prompt figure + `note` or the default marker hint + 2×2 option grid) to `src/screens/ThinkingLesson.tsx`.
3. Wire `puzzle.type === 'spatial'` into the render chain and add `if (p.type === 'spatial') return value === p.answerId` to `isAnswerCorrect`.
4. Add the two translation keys to both language tables.
5. Append the `spatial` world and register `fuchsia` in both colour maps.
6. Append the ten lessons, with the lesson-0 tutorial card and a `note` on the route, viewpoint, fold and robot lessons.
7. Add `tests/spatialPuzzle.test.ts` with simulators that recompute each answer from the prompt figure, and add `spatial` to the shared content suite.
8. Apply the spec and decision-log changes.
9. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.

---

## Rollback

Revert the commits. The change is additive: a new puzzle type, a new world, ten new lesson ids, two new translation keys, one new colour entry per map. No existing lesson, key, route, dependency, or localStorage field changes, so a stored save written while the world existed simply carries lesson records the app no longer looks up.

---

## Review notes

Plan reviewed against `.ai/specs/invariants.md` before implementation. Originally scoped to the interaction plus three lessons, with the remaining seven deferred. After the interaction was built and checked in a browser, the author asked for the full arc, so the scope was widened to all ten lessons and this plan and its content audit were re-run against them. No follow-up content issue is needed.

---

## Implementation notes

- `spatial` is in `NEW_WORLDS` in `tests/thinkingWorldsContent.test.ts`, so the shared suite covers its world shape, bilingual copy and difficulty curve. `tests/spatialPuzzle.test.ts` covers only what is specific to the new puzzle type.
- The route, fold and robot lessons are verified by simulators rather than by restating the grid: the test replays "2 down then 2 right", the fold, and the robot program, and compares the result to the authored option. Deliberately breaking lessons 6, 7 and 9 was confirmed to fail the suite.
- `note` was added to `SpatialPuzzle` after the first three lessons: the default hint says the dot marks a corner of the shape, which is false on a map, a fold and a door. `note` replaces that line per puzzle; lessons 4, 6, 7 and 9 use it.
- Lesson 6's figure has no dot at all — the marker appears only in the options, as the door. The renderer therefore had to suppress the default hint on a markerless figure, which it does.
- Appending `spatial` moves `ThinkingHome`'s next-world banner from `probability` onto `spatial`; `probability` now points at Spatial Studio, and `spatial`, being last, shows no banner. Expected per `.ai/specs/worlds.md`.
- The marker hint line renders only when the prompt figure actually contains a `'o'` cell, so a future markerless figure (an overhead map, for instance) does not display an instruction about a dot that is not there.
- Answer slots run A, B, D, C, A, B, D, A, D, B — never twice in a row, never more than three times in ten. Asserted in the test suite, since a child who spots a positional habit stops reading the shapes.
- Verified in a real browser at 430px: both languages, the tutorial card, a wrong answer's shake, and the correct-answer/stars/XP state all render as intended. Screenshots are attached to the PR.
- Known limitation, carried to the follow-up issue: the figure grid is `aria-hidden`, so a screen-reader user hears only the option label. This matches the existing emoji-based puzzle types, which are equally opaque to a screen reader; fixing it is a path-wide change, not a spatial-only one.
- `SpatialFigureView` derives its column count from the longest row and treats a short row as trailing empties, so a ragged grid degrades to an obviously wrong picture rather than a crash. The test suite rejects ragged grids at author time.
