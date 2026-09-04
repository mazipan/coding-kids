# Worlds & lessons spec

## Block coding worlds

| ID | Emoji | Concept | Ages | Lessons |
|----|-------|---------|------|---------|
| jungle | 🌿 | Sequences | 5–7 | 20 |
| space | 🚀 | Loops | 7–9 | 20 |
| loops | 🔄 | Loop Efficiency | 8–10 | 20 |
| ocean | 🌊 | Variables | 9–11 | 20 |
| caves | 💎 | Conditions | 10–12 | 20 |
| factory | 🤖 | Functions | 11–13 | 20 |
| portal | ⏰ | Arrays & Lists | 12–14 | 20 |
| jurassic | 🦕 | Real-World Pathfinding | 10–14 | 20 |
| parking | 🚗 | Sorting & Routing | 10–14 | 20 |
| sorting | 📦 | Algorithms & Data | 11–14 | 20 |
| debugging | 🐛 | Debugging | 11–14 | 20 |
| orchestra | 🎵 | Loops & Functions | 8–12 | 20 |
| cove | 🧭 | Coordinates & Position | 10–13 | 20 |
| eco | 🌱 | Decomposition & Reuse | 10–14 | 20 |
| boolean | 💡 | Boolean Logic (AND / OR / NOT) | 8–14 | 20 |

Every block-coding world now carries `lessonCount: 20` — see "Keeping lesson counts in sync" below for the
rule that keeps it that way. `loops` (Loop Land) sits between `space` and `ocean` in `WORLDS`/`src/data/
worlds/index.ts`; it was missing from this table before this rule existed even though the world itself
predates it.

The blocks path has no world-level lock (INV-L2): every world — main and bonus alike — is playable from the start, regardless of XP or any lesson's completion state elsewhere in the app. `World` has no `unlockAtXP` field. `isBonus` still marks the seven bonus worlds for display purposes (the "BONUS" badge and the separate section on the world map) but no longer gates access to the world itself. Lessons *within* a world still unlock one at a time — see "Lesson unlock rules" below.

`eco` (Eco City) is a capstone: it uses all six existing Blockly categories and introduces no new block, no new engine behaviour, and no new goal type. Every one of its canonical routes is simulated in `tests/ecoCityLessons.test.ts`; any change to an Eco City grid must keep that test green.

Source: `src/data/worlds/` — one file per world (e.g. `jungle.ts` exports `jungleWorld`), assembled into the `WORLDS` array by `index.ts` in the order main worlds then bonus worlds. Each world has `theme` (bgGradient, accentColor, textColor, cellBorder, cellBg), `emoji`, `character` (emoji for mascot), `characterName`, `itemEmoji`, `obstacleEmoji`, `goalEmoji`.

`character` may also set `facingDefault: 'left'` when the emoji's standard glyph design has a real inherent left/right facing (a vehicle, boat, or human pictograph drawn facing one way) — `GameGrid` mirrors the character horizontally so it visually faces the direction it's currently travelling, since gameplay defaults to moving rightward. Omit the field for any character that is drawn front-on or pose-neutral (people, animals in a standing/sitting pose, robots) — flipping those has no correctness benefit and the field should not be added "just in case." Currently set on `loops` (🏎️), `cove` (⛵), and `ocean` (🏊).

## Lesson unlock rules (INV-L1 — both paths)

- Lesson 0 in any world: always unlocked once the world itself is unlocked (lesson numbering is 0-indexed) — every blocks world is always unlocked (INV-L2)
- Lesson N: requires lesson N-1 to be completed (`completed: true` in `useProgress`)
- **Blocks-path exception:** where lesson 0 is a tutorial (`isTutorial: true` — the seven main worlds plus the bonus worlds `orchestra`, `cove`, `eco`), it is optional rather than a gate: lesson 1 is always open, whether or not the tutorial has been completed. Sequencing resumes normally from lesson 2 onward. The remaining bonus worlds (`jurassic`, `parking`, `sorting`, `debugging`) have no lesson 0 at all and open straight into an always-available lesson 1, for the same reason. The thinking path has no tutorial concept and follows the plain rule above with no exception — its lesson 1 always requires lesson 0.

## Lesson fields

Defined in `src/data/lessons.ts`. Each lesson:

```ts
{
  id: string                    // e.g. 'jungle-1'
  worldId: WorldId
  number: number                // display number (1-indexed)
  title: string
  story: string                 // short flavour text shown below the grid
  mascotMessage: string         // initial message from the world's character
  gridRows: number
  gridCols: number
  cells: CellType[][]           // use emptyGrid(rows, cols) then mutate for obstacles
  startPos: [row, col]
  items: { id: string, pos: [row, col] }[]
  goalType: 'collect_all' | 'reach_goal' | 'collect_any'
  goalPos?: [row, col]          // required when goalType = 'reach_goal'
  goalCount?: number            // required when goalType = 'collect_any'
  availableCategories: string[] // controls which Blockly categories appear
  requiredCategories?: string[] // categories the kid MUST use to earn 3 stars
  optimalBlockCount: number     // fewest blocks needed for a perfect solution
  xpReward: number              // base XP for 1 star
  hints: string[]               // cycled through when the Hint button is pressed
  starThresholds: [number, number]  // [bronze, silver] block counts
  isTutorial?: true             // tutorial lessons skip the reward modal
  isBuggy?: true                // debug challenge: workspace starts pre-broken
  buggyState?: object           // Blockly JSON serialisation of the broken workspace
                                // generated via Blockly.serialization.workspaces.save()
                                // optimalBlockCount = block count of the CORRECT solution
  showCoords?: true             // draw 1-based row/column labels around the grid plus a
                                // live "Row n · Column n" readout (Coordinate Cove)
}
```

### Position sensors (Coordinate Cove)

`sensor_row` and `sensor_col` are value blocks that return the character's **1-based** row and column — the same numbers the `showCoords` gutter draws, so a child never has to translate between what they read and what they type. They generate `currentRow()` / `currentCol()`, which the engine answers from a headless simulation that replays the child's moves through `applyAction`. Authoring rules:

- Any lesson using sensors must set `showCoords: true`. A sensor without a labelled chart forces the child to count cells, which is the thing the world is meant to remove.
- Sensors are ordinary blocks and are counted by `workspace.getAllBlocks()`. Author `optimalBlockCount` and `starThresholds` from the **full** count of the canonical solution, comparison and number blocks included.
- Set `requiredCategories: ['sensors', ...]`. A hardcoded route always uses fewer blocks than a sensor loop, so without this the star system would reward skipping the concept.
- Never write a condition that can only resolve one way — that is a fixed sequence in a costume. A sensor test must be able to be false at some point in the run.
- The loop guard (INV-G3) means a non-terminating loop stops cleanly, but a lesson must still be solvable within `MAX_ACTIONS = 200` moves.

### Star threshold logic

`starThresholds: [bronze, silver]`

| Blocks used | Stars |
|-------------|-------|
| ≤ silver | 3 ⭐⭐⭐ |
| ≤ bronze | 2 ⭐⭐ |
| > bronze | 1 ⭐ |

If `requiredCategories` is set, the kid must use at least one block from each listed category or the result is capped at 1 ⭐ regardless of block count. The RewardModal shows a category-specific hint when this happens. Set `requiredCategories` to the concept the world is teaching — e.g. `['loops']` for Space, `['variables']` for Ocean.

**A category is detected by specific block types, not by the toolbox category it lives in** — `CATEGORY_BLOCK_TYPES` in `src/data/xpSystem.ts` maps `'logic'` to `controls_if`/`controls_ifelse` only. A lesson that combines `logic_operation`/`logic_negate`/`logic_compare` inside a `controls_whileUntil` loop (no `controls_if` anywhere) does **not** satisfy `requiredCategories: ['logic']` — it needs `'loops'` instead, exactly like any other sensor-loop lesson (see Coordinate Cove). Boolean Logic Booster (`boolean`) is the clearest example: its `if`-mechanic lessons require `['logic']` (or `['logic', 'sensors']`), while its loop-mechanic lessons — which teach the same AND/OR/NOT blocks, just as a `repeat while`/`repeat until` test — require `['loops', 'sensors']`. Get this backwards and a correct solution silently caps at 1 star.

### goalType options

| goalType | Behaviour |
|----------|-----------|
| `collect_all` | All items must be collected |
| `reach_goal` | Character must reach `goalPos` (items optional) |
| `collect_any` | At least `goalCount` items must be collected |

## Blockly toolbox categories

Set per lesson via `availableCategories`. Introduce categories gradually as concepts build:

| Category | Blocks included |
|----------|----------------|
| `move` | move_right, move_left, move_up, move_down, collect_item |
| `loops` | controls_repeat_ext, controls_whileUntil |
| `variables` | VARIABLE (Blockly built-in) |
| `logic` | controls_if, controls_ifelse, logic_compare |
| `functions` | PROCEDURE (Blockly built-in) |
| `lists` | lists_create_with, lists_getIndex, lists_setIndex, etc. |
| `sensors` | sensor_row, sensor_col — read-only 1-based position getters |

Selecting `variables`, `logic`, `lists`, **or** `sensors` also adds the Math category, because each needs a number to compare or compute against.

---

## Thinking worlds (Brain Training path)

Source: `src/data/thinkingWorlds/` — one file per world (e.g. `patterns.ts` exports `patternsWorld`), assembled into the `THINKING_WORLDS` array by `index.ts`.

| ID | Emoji | Concept | Ages | Colour | unlockAtXP | Lessons |
|----|-------|---------|------|--------|------------|---------|
| patterns | 🔮 | Pattern recognition | 5–8 | purple | 0 | 20 |
| logic | 🧠 | If-then reasoning | 7–10 | blue | 0 | 20 |
| counting | ✨ | Number & math | 8–12 | emerald | 0 | 20 |
| memory | 🧩 | Sequence memory | 6–10 | rose | 0 | 20 |
| nature | 🌿 | Science thinking | 8–11 | green | 0 | 20 |
| numbers | ⚡ | Number sequences | 9–13 | indigo | 0 | 20 |
| decomposition | 🧩 | Decomposition | 6–10 | orange | 0 | 20 |
| abstraction | 🔍 | Abstraction | 7–11 | teal | 0 | 20 |
| math_reasoning | 🔢 | Mathematical reasoning | 8–12 | amber | 0 | 20 |
| induction | 🔬 | Inductive reasoning | 8–12 | cyan | 0 | 20 |
| deduction | 🕵️ | Deductive reasoning | 9–13 | violet | 0 | 20 |
| planning | 🗺️ | Constraint planning | 8–12 | sky | 0 | 20 |
| probability | 🎲 | Probability | 9–13 | lime | 0 | 20 |
| spatial | 🧭 | Spatial reasoning | 7–11 | fuchsia | 0 | 20 |

All fourteen worlds are unlocked from the start (`unlockAtXP: 0`). World-level XP gates are intentionally removed to let kids explore freely — see INV-L3, which binds any future thinking world too.

### World boundaries

Two pairs sit close enough that new lessons must respect the boundary:

- `decomposition` (Step by Step) vs `planning` (Planning Peaks) — both use `sequence`. In `decomposition` the answer is the familiar real-world routine and comes from the child's own knowledge. In `planning` the answer comes from written clues in `mascotMessage`, and the clues may deliberately contradict the habitual order.
- `logic` (Logic Land) vs `probability` (Chance Camp) — both use `if-then`. `logic` asks what *must* follow from a rule; `probability` asks what is *likely*, *possible*, *certain*, or *fair*. Never phrase a Chance Camp answer as a certainty unless the puzzle is specifically about certainty.

### Thinking lesson fields

Split by tier, each tier further split into one file per world. `src/data/thinkingLessons/` holds
lessons 0–9 (e.g. `patterns.ts` exports `patternsLessons`), assembled into `THINKING_LESSONS` by its own
`index.ts`, which also spreads in `src/data/thinkingLessonsAdvanced/` — lessons 10–19, same one-file-per-
world shape (e.g. `patterns.ts` exports `patternsLessonsAdvanced`), assembled by its own `index.ts` into
`THINKING_LESSONS_ADVANCED`. The split is only for reviewability — `THINKING_LESSONS` is the single list everything
reads, and array order never matters because every lookup filters by `worldId` and sorts by `number`.

Each lesson:

```ts
{
  id: string           // '{worldId}-{number}', e.g. 'patterns-0'
  worldId: ThinkingWorldId
  number: number       // 0-indexed
  title: LocalizedString
  mascotMessage: LocalizedString
  xpReward: number
  puzzle: ThinkingPuzzle       // see the puzzle-type table below
  tutorial?: { title, body, example? }  // a card shown before the puzzle, dismissed by the child
}
```

### Puzzle types

| Type | Shape |
|------|-------|
| `pattern` | `items[]` with a `blankIndex` and 4 `options[]`; kid picks the missing item |
| `if-then` | `condition` (LocalizedString) + `options[]` with emoji labels; kid picks the correct outcome |
| `math` | `question` (LocalizedString) + optional `visual` emoji + 4 `options[]` of string numbers |
| `sequence` | `steps[]` (id, emoji, LocalizedString label); kid taps them into order. The **array order is the answer** |
| `true-false` | `statement` (LocalizedString) + boolean `answer` |
| `sort` | `items[]` + `answer[]`; kid taps the items into order |
| `fill-in` | `question` (LocalizedString) + typed `answer` + optional `inputType` |
| `match` | `pairs[]` of left/right items; kid links each pair |
| `abstraction` | `subtype: 'odd-one-out' \| 'category-match'` + `items[]` + `correctIds[]` |
| `spatial` | `question` (LocalizedString) + a `figure` grid + optional `note` (LocalizedString) + 4 `options[]`, each an `id`, a `grid`, and a `label: LocalizedString`; kid picks the frame that shows the transformed figure |
| `multi-step` | `intro` (LocalizedString) + optional `visual` emoji + `steps[]`, each a `prompt`, `options[]` with `LocalizedString` labels, and an `answerId`; kid answers the steps in order and the whole chain is graded as one answer |
| `grid-select` | `question` (LocalizedString) + optional `note` + `cells[][]` (emoji or `''` per cell) + `answer[]` of `'row-col'` keys; kid taps every square that fits and presses Check |

### Puzzle authoring constraints

These are properties of the renderer, not style preferences. Breaking them ships a broken lesson:

| Constraint | Why |
|------------|-----|
| `sort` defaults to **numeric ascending order** | Without a `prompt`, the on-screen line is the fixed string `thinking.sort.prompt` — "Tap numbers from smallest to largest!" — so an answer that is not ascending contradicts its own instruction. To order something else (clock faces, powers), supply `prompt: LocalizedString` saying what "in order" means here. `sort.items` are plain strings, so they must still be numbers or emoji, never words. |
| `pattern.options` and `math.options` must be **numbers or emoji** | They are typed `string[]`, not `LocalizedString[]`, so their text cannot be translated. A word answer there breaks INV-C2/INV-I1. When the answer needs words, use `if-then`, whose options carry `label: LocalizedString`. |
| `sequence` has no question field | The constraints or clues must live in the lesson's `mascotMessage`, which renders directly above the puzzle. |
| `abstraction` `correctIds` must be a **strict subset** of `items` | A multi-select where every item is correct teaches nothing and always passes. |
| `spatial` grids use only `'#'`, `'o'` and `'.'`, and every row in one grid is the same length | The renderer maps one character to one cell and derives the column count from the longest row, so a stray character draws an empty cell and a short row silently shifts the shape. |
| A `spatial` figure carries **at most one** `'o'` marker | The dot is the orientation anchor. Two dots give the child two conflicting anchors and make a mirror indistinguishable from a rotation. |
| All `spatial` option grids share the **prompt figure's dimensions** | Options render side by side at one size. A differently sized grid changes the cell scale, which reads as a difference in the shape rather than in its orientation. |
| A `spatial` option `label` must **never name its transformation** | "Quarter turn right" as a label answers the puzzle. Labels name the frame ("Shape A"), or carry real words only where the words are part of the question (a viewpoint name, for example). |
| `spatial` distractors must be **believable spatial errors** | Wrong turn direction, mirrored instead of rotated, wrong mirror axis, turned too far, one cell short. An unrelated shape is filler and breaks INV-Q4. |
| A `multi-step` chain is graded **all or nothing** | There is no partial credit and no per-step retry: one wrong link resets the chain to step 1 and costs an attempt (so a star). Keep chains to 2–3 steps, and make every step answerable from the intro plus the earlier steps — never from outside knowledge the puzzle has not supplied. |
| A `multi-step` step's options carry `LocalizedString` labels | Unlike `pattern`/`math`, the options here are translated, so this is the type to reach for when the answer needs words. |
| `grid-select` rows must all be the **same length** | The renderer derives the column count from the widest row and pads the rest, so a short row silently shifts every cell after it. |
| A `grid-select` `answer` key must be **inside the grid** | Keys are `'row-col'`, 0-based. An out-of-range key makes the puzzle unsolvable; `bun run audit-lessons` catches it. |
| `grid-select` cells may be pre-filled or blank | A blank (`''`) cell is one the child fills in (completing a pattern, mirroring a drawing); a pre-filled cell is one they mark (choosing seats, choosing map squares). Say which the puzzle wants in `question` or `note` — the generic prompt only says "tap every square that fits". |
| A `spatial` puzzle whose dot is **not** a shape corner must supply `note` | The default line under the figure reads "The dot marks one corner of the shape". On a route, fold or map lesson the dot means the start, a pencil mark, or a door, and `note` replaces that line so the hint never contradicts the puzzle. |

### Star & XP logic (thinking path)

- 3 stars — correct on first attempt
- 2 stars — correct on second attempt
- 1 star — correct on third attempt or later
- XP is awarded once per lesson (delta on improvement, same `completeLesson` invariants as blocks)

### Difficulty curve (20 lessons per world, in two tiers)

**Tier one — lessons 0–9** (`thinkingLessons/`, one file per world). Teaches the world's core idea.

- Lessons 0–4: gentle introduction — simple 4-item sequences, basic if-then, small arithmetic.
- Lessons 5–9: longer sequences (8–9 items), ABCD cycles, a blank in the middle, number sequences (+2, doubling), negation, reverse operations, order of operations.

**Tier two — lessons 10–19** (`thinkingLessonsAdvanced/`, one file per world). Raises cognitive load, not reading load
(INV-Q5). Every tier-two lesson must be harder than tier one for a *reason a child could name*, and the
reason must be a mechanic the world has not used before — compound conditions, a chain whose second step
needs the first, tracking a list that changes under you, satisfying several constraints at once, composing
two transformations, working backwards from an end state. Bigger numbers and longer sentences are not
difficulty.

Two rules keep the tier honest:

- **XP rises with the tier.** Tier two pays roughly 25–40 XP against tier one's 10–25. `bun run audit-lessons` fails if a world's tier-two average is not above its tier-one average.
- **Every world's tier two opens a mechanic its tier one never used.** Where a world's tier one was ten puzzles of one type — `decomposition` was ten `sequence` puzzles — tier two must break out of it rather than adding an eleventh.

### Next-world navigation

`ThinkingHome` renders a tappable banner below the lesson list pointing to the next world in the array. The last world in `THINKING_WORLDS` shows no banner — appending a world moves the banner onto what used to be the last one.

### Adding a new thinking lesson

1. Append an entry to the matching world's file — under `thinkingLessons/` for a tier-one lesson (0–9), under `thinkingLessonsAdvanced/` for tier two (10–19), e.g. `thinkingLessonsAdvanced/patterns.ts` for a new tier-two `patterns` lesson
2. Increment `lessonCount` in the world's file under `src/data/thinkingWorlds/`
3. Lesson number follows 0-based sequential order; the next number is `lessonCount - 1` after the update
4. Run `bun run build` — TypeScript catches missing required fields
5. Run `bun run audit-lessons` — it checks contiguous numbering, both languages on every string, answers that exist among their options, true/false balance (INV-Q3), grid keys in range, and the tier-two XP rule. INV-Q1, INV-Q2 and the *feel* of INV-Q5 still need a human to read the lessons.

---

## XP levels (15 total)

Code Cub → Junior Coder → ... → Master Coder (6650+ XP). Full table in `src/data/xpSystem.ts`.

`xpReward` per star: base × 1 (1 star), base × 1.5 (2 stars), base × 2 (3 stars). Rounded.

## Adding a new block coding lesson

1. Append an entry to the relevant world section in `src/data/lessons.ts`. Keep lessons ordered by `number`.
2. Lesson ID format: `'{worldId}-{number}'` (0-indexed). The tutorial is always `number: 0` with `isTutorial: true` and `xpReward: 0`.
3. All `title`, `story`, `mascotMessage`, and `hints` strings are `LocalizedString` — always provide both `en` and `id`.
4. Build the grid with `emptyGrid(rows, cols)` and mutate with an IIFE for obstacles:
   ```ts
   cells: (() => { const g = emptyGrid(6, 6); g[2][3] = 'obstacle'; return g })()
   ```
5. `starThresholds: [bronze, silver]` — `bronze` is the upper limit for 2 stars, `silver` for 3 stars. Bronze must be ≥ silver. Example: `[6, 4]` means ≤4 blocks → 3 stars, ≤6 blocks → 2 stars, >6 → 1 star. Use `[999, 999]` for tutorial lessons where stars don't matter. A 4-tuple `[t1, t2, t3, t4]` (descending) instead unlocks a 5-star scale — `blockCount <= t4` → 5★, `<= t3` → 4★, `<= t2` → 3★, `<= t1` → 2★, else 1★. `caves`, `factory`, `portal`, and every world after them use the 4-tuple; match whichever shape the rest of that world's lessons already use (see `calculateStars`/`maxStarsForThresholds` in `src/data/xpSystem.ts`).
6. Set `requiredCategories` to the concept the world teaches (e.g. `['loops']` for Space). Omit it for worlds/lessons that don't gate on a specific category.
7. Provide at least 2 hints. Make hint 1 tell the kid what to do next; hint 2 give the answer more directly.
8. Increment `lessonCount` in the world's file under `src/data/worlds/` (e.g. `src/data/worlds/jungle.ts`).
9. Run `bun run build` — TypeScript catches missing required fields.

### Keeping lesson counts in sync

Every block-coding world should carry the same `lessonCount` as the others unless there is a documented
reason for a shorter world (record that reason in `.ai/decisions/log/`). Before adding a lesson to *one*
world, check `lessonCount` across every world in `src/data/worlds/` — if the target world is already at the
shared maximum, adding a lesson there without adding matching lessons elsewhere makes it deeper than its
siblings again, which is exactly the inconsistency the 2026-08-29 lesson-count-uniformity change fixed (see
`.ai/decisions/log/2026-08-29-04-uniform-block-world-lesson-counts.md`). When you lengthen or shorten one
world, either bring the others to the same depth in the same change, or record why not.

---

## Adding a new block coding world

1. Add a `WorldId` literal to the union in `src/types/index.ts`:
   ```ts
   export type WorldId = 'jungle' | 'space' | ... | 'yourNewWorld'
   ```
2. Add a new file exporting the world object under `src/data/worlds/` (e.g. `src/data/worlds/yourNewWorld.ts`), then import and register it in `src/data/worlds/index.ts`'s `WORLDS` array. Required fields:
   ```ts
   {
     id: WorldId,
     name: LocalizedString,
     emoji: string,           // single emoji shown on the world card
     tagline: LocalizedString, // one-line flavour text
     ageRange: string,        // e.g. '10–12'
     concept: LocalizedString, // the CS concept (e.g. 'Recursion')
     character: string,       // emoji for the mascot
     characterName: string,   // mascot name used in mascotMessage
     itemEmoji: string,       // what the character collects
     obstacleEmoji: string,   // what the obstacles look like
     goalEmoji: string,       // what the goal cell looks like
     theme: {
       bgGradient: string,    // CSS linear-gradient for the game background
       cellBg: string,        // rgba for grid cell background
       cellBorder: string,    // rgba for grid cell border
       accentColor: string,   // hex for buttons/highlights
       textColor: string,     // hex for readable text on the dark bg
     },
     lessonCount: number,     // set to the number of lessons you're adding
     isBonus?: true,          // only set for bonus worlds — display grouping only, does not gate access (INV-L2)
   }
   ```
3. Append the lessons to `src/data/lessons.ts` following the "Adding a new block coding lesson" steps above.
4. If the new world introduces a new Blockly category (beyond `move`, `loops`, `variables`, `logic`, `functions`, `lists`), add it to `src/blockly/toolboxes.ts` and document it in the Blockly toolbox categories table above.
5. Run `bun run build`.
6. Add a decision log entry in `.ai/decisions/log/` explaining the new concept and, if it's a bonus world, why.

---

## Adding a new thinking lesson

1. Append an entry to the world's file under `src/data/thinkingLessons/`. Keep lessons ordered by `number`.
2. Lesson ID format: `'{worldId}-{number}'` (0-indexed). E.g. the 11th lesson in `patterns` is `patterns-10`.
3. All `title` and `mascotMessage` strings are `LocalizedString` — always provide both `en` and `id`.
4. Increment `lessonCount` in the world's file under `src/data/thinkingWorlds/`.
5. Lesson number follows 0-based sequential order: the new lesson's `number` is the old `lessonCount` value (before incrementing).
6. Pick the puzzle type that fits the reasoning the lesson is testing, then check it against the **Puzzle authoring constraints** table above. Early single-concept worlds stay on one type (`patterns` uses `pattern`, `decomposition` uses `sequence`); later worlds deliberately mix types so a child cannot pass by recognising the interaction instead of the idea. Mix only when each type is doing distinct cognitive work — never for variety alone.
7. Always provide exactly 4 `options`. For `PatternPuzzle` and `MathPuzzle`, include the correct answer plus 3 plausible distractors. For `IfThenPuzzle`, each option needs `id`, `emoji`, and `label: LocalizedString`.
8. Set `xpReward` consistent with the lesson's position in the difficulty curve: lessons 0–4 use 10–15 XP; lessons 5–9 use 15–25 XP.
9. Run `bun run build` — TypeScript catches missing required fields.

---

## Lesson content quality rules

Apply these rules every time a lesson is added or changed, for both the blocks path and the thinking path. They enforce the invariants in `invariants.md` (INV-Q1 through INV-Q5) at the authoring stage.

### Before writing a new lesson

Run this audit against all existing lessons in the target world:

| Check | What to look for |
|-------|-----------------|
| Mechanic + scenario uniqueness | Does any existing lesson use the same operation/structure **and** the same topic/theme? If yes, change one or both. |
| Scenario reuse | Does the same scenario appear in another lesson in this world? Use it only if the cognitive angle is genuinely different. |
| True-false balance | Will adding this puzzle create a run of 3+ identical answers? If so, flip the new lesson's answer or swap it for a different puzzle type. |
| Distractor quality | Are all 4 options something a child might genuinely believe? Remove any obviously wrong filler. |
| Difficulty fit | Does the lesson's cognitive load match its position (0–4 easy, 5–9 harder)? |

### Common failure patterns to avoid

- **Number-swap duplicates** — same operation (e.g. reverse subtraction) with only the numbers changed
- **Emoji-swap duplicates** — same sequence structure (e.g. ABAB) with only the emoji changed
- **All-true / all-false runs** — 3+ consecutive true-false puzzles with the same answer in one world
- **Overused scenarios** — rain→wet, apples in baskets, and cats vs dogs appear across too many worlds already; use only if genuinely distinct
- **Trivially obvious true-false** — statements so obvious ("ice melts when heated") that no child of the target age would hesitate; replace with content that requires actual reasoning
- **Cosmetic difficulty increase** — larger numbers or longer text that doesn't add cognitive load; use compound conditions, inverse operations, or multi-step chains instead

---

## Adding a new thinking world

1. Add a `ThinkingWorldId` literal to the union in `src/types/index.ts`:
   ```ts
   export type ThinkingWorldId = 'patterns' | 'logic' | 'counting' | 'yourNewWorld'
   ```
2. Add a new file exporting the world object under `src/data/thinkingWorlds/`, then import and register it in `src/data/thinkingWorlds/index.ts`'s `THINKING_WORLDS` array. Required fields:
   ```ts
   {
     id: ThinkingWorldId,
     name: LocalizedString,
     emoji: string,
     tagline: LocalizedString,
     ageRange: string,
     concept: LocalizedString,
     color: string,           // Tailwind color name used for accents, e.g. 'rose', 'amber'
     bgGradient: string,      // Tailwind gradient classes, e.g. 'from-rose-900/50 to-pink-900/30'
     unlockAtXP: 0,           // MUST be 0 — INV-L3 forbids XP gates on thinking worlds
     lessonCount: number,
   }
   ```
3. Choose a `color` not already used by any world in the catalog table above. Pick a Tailwind color that has 900-shade availability.
4. **Register the new colour in both colour maps, or the world silently renders purple:**
   - `getWorldTheme` in `src/utils/worldColorThemes.ts` — shared by `ThinkingHome.tsx` and `SafetyHome.tsx`; `?? WORLD_COLOR_THEMES.purple` swallows an unregistered colour with no error
   - `THINKING_COLOR_MAP` in `src/screens/LandingScreen.tsx` — same silent purple fallback, kept separate because it uses different (lighter-context) hex values than `worldColorThemes.ts`

   `tests/thinkingWorldsContent.test.ts` asserts every world's colour is present in both files. Do not skip this step; three worlds shipped mis-themed for several releases because the two maps drifted apart.
5. The `bgGradient` uses `from-{color}-900/50 to-{secondaryColor}-900/30` — keep opacity low so the star field behind shows through.
6. Add the puzzle type (if it's new) to `src/types/index.ts` and implement it in `src/screens/ThinkingLesson.tsx`.
7. Add the lessons to the new world's file under `src/data/thinkingLessons/` following the "Adding a new thinking lesson" steps above.
8. `ThinkingHome` renders a next-world banner automatically by reading the next item in `THINKING_WORLDS` — no code change needed for navigation between worlds.
9. Update the hardcoded `landing.worlds.title` count in `src/i18n/translations.ts` (EN **and** ID) — it is a literal, not derived from the arrays.
10. Update the catalog table above, the world counts in `README.md`, and add a decision log entry in `.ai/decisions/log/` explaining the new concept and age range.
11. Run `bunx biome ci`, `bun run type-check`, `bun run build`, and `bun test`.

---

## Safety worlds (Digital Citizenship path)

Source: `src/data/safetyWorlds/` — one file per world, assembled into the `SAFETY_WORLDS` array by
`index.ts`. Lessons: `src/data/safetyLessons/` — one file per world, assembled into `SAFETY_LESSONS`
by its own `index.ts`. Same shapes as the thinking path's `ThinkingWorld`/`ThinkingLesson` — see
`SafetyWorld`/`SafetyLesson` in `src/types/index.ts` — and the same `ThinkingPuzzle` union (aliased
as `SafetyPuzzle`, since the twelve puzzle shapes are domain-agnostic), rendered by the shared
`src/components/PuzzlePlayer.tsx` — the same puzzle-view components and `isPuzzleAnswerCorrect`
grading logic the thinking path uses, extracted out of `ThinkingLesson.tsx` so neither path
duplicates them. `SafetyHome.tsx` and `SafetyLesson.tsx` otherwise mirror `ThinkingHome.tsx` and
`ThinkingLesson.tsx`'s chrome (world map, lesson list, tutorial card, completion card), routed
under `/app/safety/...` instead of `/app/thinking/...`. `SafetyLessonScreen` deliberately reuses
the `thinking.*` translation keys for that chrome (attempt counter, "Correct!", etc.) — the
rendered copy is domain-neutral, so a parallel `safety.*` copy of the same ~20 keys wasn't worth
the duplication; see `.ai/decisions/log/2026-08-31-01-third-parallel-path-digital-citizenship.md`.

| ID | Emoji | Concept | Ages | Colour | unlockAtXP | Lessons |
|----|-------|---------|------|--------|------------|---------|
| passwords | 🔑 | Secrets & strong codes | 5–7 | yellow | 0 | 10 |
| privacy | 🏝️ | What's safe to share | 8–10 | slate | 0 | 10 |
| kindness | 💛 | Being kind online | 8–10 | pink | 0 | 10 |
| scams | 🕵️ | Spotting scams & phishing | 11–14 | red | 0 | 10 |

All safety worlds are unlocked from the start (INV-L3), same as thinking worlds. This is an MVP —
tier one only (lessons 0–9). A tier-two `safetyLessonsAdvanced/` directory (lessons 10–19) can be
added later following the same pattern as `thinkingLessonsAdvanced/`; `scripts/audit-thinking-lessons.mjs`'s
tier-two XP check already skips cleanly for a world with no tier-two lessons yet.

### Adding a new safety world / lesson

Follow "Adding a new thinking world" / "Adding a new thinking lesson" above exactly, substituting
`Safety` for `Thinking` and `src/data/safetyWorlds/` / `src/data/safetyLessons/` for the thinking
equivalents. The colour-registration rule is simpler here than the thinking path's: `ThinkingHome`
and `SafetyHome` both read world-map colours from the single shared `getWorldTheme` in
`src/utils/worldColorThemes.ts` — register a new colour there once and both screens pick it up.
`LandingScreen.tsx` still keeps its own separate `THINKING_COLOR_MAP` (different, lighter-context
hex values tuned for that page) — register the same colour name there too, or the world silently
renders with the purple fallback on the landing page only. `tests/safetyWorldsContent.test.ts`
asserts every safety world's colour is present in both `worldColorThemes.ts` and `LandingScreen.tsx`,
mirroring `tests/thinkingWorldsContent.test.ts` for the thinking path. Run `bun run audit-lessons` —
it validates both the thinking and safety datasets in one pass.
