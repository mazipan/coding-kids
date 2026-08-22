# Plan: Spatial Studio — spatial-choice puzzle prototype

**Slug:** `feat-spatial-puzzle-prototype`  
**Date:** 2026-08-22  
**Status:** in-review

---

## Request

> feat: Spatial Studio — prototype the spatial-choice puzzle type (blocks the world's content)
>
> Roadmap priority 2 from `.ai/plans/content-more-world-ideas.md`. **This issue is the prototype, not the lessons.**
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

Ship the world `spatial` (🧭 Spatial Studio / Studio Spasial, ages 7–11, colour `fuchsia`, `unlockAtXP: 0`) with **3 prototype lessons** covering the three primitive transformations the full arc is built from: translate, reflect, rotate. `lessonCount` is `3` and rises to `10` in the follow-up content issue.

### Why a text-row grid rather than SVG or emoji

| Representation | Verdict |
|---|---|
| Text rows rendered into a CSS grid | **Chosen.** One line of source per figure row, so an author and a reviewer literally see the shape in the diff. Rotation and mirroring are checkable by eye and by test. Renders as real geometry, scales responsively, no asset pipeline. |
| Inline SVG paths per option | Rejected. Path data is unreadable in review, and an authoring mistake in a `d` attribute is invisible until the lesson renders. |
| Emoji arranged in a row (as `pattern` does) | Rejected. Emoji glyphs are font-dependent and most have no rotated variants, so "the same shape turned" cannot be expressed at all. |

### Option labels

Every option carries a required `label: LocalizedString`. In the prototype the labels are the neutral frame names (Shape A/B/C/D — Bentuk A/B/C/D): a label must **never name its transformation**, because "Quarter turn right" as a label answers the puzzle. The field is required rather than optional so the later viewpoint lessons ("from above", "from the left side") have somewhere translatable to put real words, which `pattern`/`math` `string[]` options could not.

### Prototype lesson content

| # | Mechanic | Scenario | Answer | Distractors (all believable errors) | XP |
|---|---|---|---|---|---|
| 0 | Translate — same shape, new position | Orbit slides a corner piece to a new spot in the frame | same shape moved | mirrored, quarter-turned, one cell missing | 12 |
| 1 | Reflect — flip left/right across a mirror line | Orbit holds a flag up to a mirror | left-right flip | flipped top-to-bottom (wrong axis), the stem flipped but the bar and its dot left where they were, slid across without flipping at all | 14 |
| 2 | Rotate — quarter turn clockwise | Orbit turns a signpost a quarter turn to the right | 90° clockwise | mirrored instead of rotated, 180° (turned too far), 90° anticlockwise (wrong direction) | 15 |

Lesson 2's four options are the *same* shape in four states, so the child cannot shortcut by shape recognition — only by tracking the turn. Every distractor in the table is a named error from the issue's list; none is an unrelated shape (INV-Q4).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Author all 10 lessons now | The roadmap makes a reviewed prototype a precondition precisely so content is not written against an interaction that may fail kid review. |
| Reuse `if-then` with emoji options | Emoji cannot express a shape at four orientations, which is the entire cognitive task. |
| Encode figures as `number[][]` | Equivalent information, but a nested numeric array in the diff shows nothing a reviewer can check by eye. Text rows are the same data drawn as the shape. |
| Colour one cell to mark orientation | Fails colourblind players, which the issue calls out explicitly. A dot is a shape cue and survives greyscale. |
| Make `label` optional and auto-generate A/B/C/D from a translation key | Less data, but leaves the localizable-label path untested in the prototype, which is one of the things this prototype exists to validate. |
| Give `spatial` `lessonCount: 10` now and backfill | Every progress bar and the landing-page lesson total read `lessonCount`; claiming 10 with 3 authored would render a permanently stuck world. |

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
| INV-L1 sequential lesson unlock | yes | Lessons are `spatial-0..2`, 0-indexed and contiguous, so the shared `isLessonUnlocked` chain applies unchanged. Asserted in test. |
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
| INV-Q1 lesson uniqueness | yes | Three distinct mechanics (translate / reflect / rotate) on three distinct scenarios (corner piece, flag, signpost). |
| INV-Q2 scenario freshness | yes | No other world uses shape transformation; flag/signpost/corner piece appear nowhere else. |
| INV-Q3 true-false balance | no | No true-false puzzle added. |
| INV-Q4 plausible distractors | yes | Every distractor is a named spatial error (wrong axis, wrong direction, mirror-not-rotate, one step short, dot left behind). Asserted in test that no option repeats another. |
| INV-Q5 real difficulty curve | yes | Translate (no mental transformation) → reflect (one transformation, wrong-axis trap) → rotate (four states of one shape, so shape recognition cannot substitute for reasoning). Not larger numbers. |

### Content audit — target world `spatial`

The world is new, so there are no existing lessons to collide with. Cross-world check: no existing thinking lesson in any of the thirteen shipped worlds uses shape transformation, a figure grid, or the flag / signpost / corner-piece scenarios. `memory` (Memory Maze) is the nearest neighbour and is about recalling a sequence, not transforming a figure.

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `'spatial'` to `ThinkingWorldId`; add `SpatialGrid`, `SpatialPuzzle`; add to the `ThinkingPuzzle` union. |
| `src/screens/ThinkingLesson.tsx` | edit | Add `SpatialFigureView` + `SpatialPuzzleView`; wire into the render chain and `isAnswerCorrect`. |
| `src/data/thinkingWorlds.ts` | edit | Append the `spatial` world, `unlockAtXP: 0`, `lessonCount: 3`, colour `fuchsia`. |
| `src/data/thinkingLessons.ts` | edit | Append `spatial-0`, `spatial-1`, `spatial-2`. |
| `src/i18n/translations.ts` | edit | Add `thinking.spatial.prompt` and `thinking.spatial.marker` in EN and ID. |
| `src/screens/ThinkingHome.tsx` | edit | Register `fuchsia` in `getWorldTheme`. |
| `src/screens/LandingScreen.tsx` | edit | Register `fuchsia` in `THINKING_COLOR_MAP`. |
| `tests/spatialPuzzle.test.ts` | add | Validate grids, options, localization, and that each authored answer really is the declared transformation. |
| `.ai/specs/worlds.md` | edit | Add the world row, the `spatial` puzzle-type row, and its authoring constraints. |
| `.ai/decisions/log.md` | edit | Record the representation decision and the 3-lesson prototype scope. |
| `.ai/plans/feat-spatial-puzzle-prototype.md` | add | This plan. |

---

## Spec changes

### `.ai/specs/worlds.md`

- Thinking worlds table: append `| spatial | 🧭 | Spatial reasoning | 7–11 | fuchsia | 0 | 3 |`, and change "All thirteen worlds" to fourteen.
- Puzzle types table: append `| spatial | question (LocalizedString) + figure grid + 4 options, each a figure grid with an id and a LocalizedString label |`.
- Puzzle authoring constraints table: add the three `spatial` rules (character alphabet, all option grids share one size, labels must not name the transformation).
- Note that `spatial` is a prototype at 3 lessons and the follow-up issue takes it to 10.

---

## Implementation steps

1. Add `SpatialGrid`, `SpatialPuzzle`, the `'spatial'` world id, and the union member in `src/types/index.ts`.
2. Add `SpatialFigureView` (text rows to CSS grid; `'#'` filled, `'o'` filled with a centred dot, `'.'` empty with a dashed outline) and `SpatialPuzzleView` (question card + prompt figure + marker hint + 2×2 option grid) to `src/screens/ThinkingLesson.tsx`.
3. Wire `puzzle.type === 'spatial'` into the render chain and add `if (p.type === 'spatial') return value === p.answerId` to `isAnswerCorrect`.
4. Add the two translation keys to both language tables.
5. Append the `spatial` world and register `fuchsia` in both colour maps.
6. Append the three lessons, with the lesson-0 tutorial card.
7. Add `tests/spatialPuzzle.test.ts`, including transformation checks that recompute each answer from the prompt figure.
8. Apply the spec and decision-log changes.
9. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.

---

## Rollback

Revert the commit. The change is additive: a new puzzle type, a new world, three new lesson ids, two new translation keys, one new colour entry per map. No existing lesson, key, route, dependency, or localStorage field changes, so a stored save written while the world existed simply carries three lesson records the app no longer looks up.

---

## Review notes

Plan reviewed against `.ai/specs/invariants.md` before implementation. Scope is bounded to the interaction plus three lessons; the remaining seven lessons of the arc are explicitly out of scope and belong to the follow-up content issue.

---

## Implementation notes

- `lessonCount: 3` is deliberate and temporary. `tests/thinkingWorldsContent.test.ts` asserts a 10-lesson shape for the worlds it covers, so `spatial` is validated by its own suite instead and moves into the shared list when the arc is completed.
- Appending `spatial` moves `ThinkingHome`'s next-world banner from `probability` onto `spatial`; `probability` now points at Spatial Studio, and `spatial`, being last, shows no banner. Expected per `.ai/specs/worlds.md`.
- The marker hint line renders only when the prompt figure actually contains a `'o'` cell, so a future markerless figure (an overhead map, for instance) does not display an instruction about a dot that is not there.
- The correct answer sits in a different slot in each of the three lessons (A, B, C), so a child cannot pass the prototype by tapping the same position. Asserted in the test suite.
- Verified in a real browser at 430px: both languages, the tutorial card, a wrong answer's shake, and the correct-answer/stars/XP state all render as intended. Screenshots are attached to the PR.
- Known limitation, carried to the follow-up issue: the figure grid is `aria-hidden`, so a screen-reader user hears only the option label. This matches the existing emoji-based puzzle types, which are equally opaque to a screen reader; fixing it is a path-wide change, not a spatial-only one.
- `SpatialFigureView` derives its column count from the longest row and treats a short row as trailing empties, so a ragged grid degrades to an obviously wrong picture rather than a crash. The test suite rejects ragged grids at author time.
