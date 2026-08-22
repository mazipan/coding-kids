# Worlds & lessons spec

## Block coding worlds

| ID | Emoji | Concept | Ages | unlockAtXP | Lessons |
|----|-------|---------|------|------------|---------|
| jungle | 🌿 | Sequences | 5–7 | 0 | 6 |
| space | 🚀 | Loops | 7–9 | 100 | 6 |
| ocean | 🌊 | Variables | 9–10 | 350 | 5 |
| caves | 💎 | Conditions | 10–11 | 700 | 6 |
| factory | 🤖 | Functions | 11–13 | 1250 | 6 |
| portal | ⏰ | Arrays & Lists | 12–14 | 1650 | 10 |
| jurassic | 🦕 | Real-World Pathfinding | 10–14 | bonus gate | 10 |
| parking | 🚗 | Sorting & Routing | 10–14 | bonus gate | 10 |
| sorting | 📦 | Algorithms & Data | 11–14 | bonus gate | 10 |
| debugging | 🐛 | Debugging | 11–14 | bonus gate | 10 |
| orchestra | 🎵 | Loops & Functions | 8–12 | bonus gate | 10 |
| cove | 🧭 | Coordinates & Position | 10–13 | bonus gate | 10 |
| eco | 🌱 | Decomposition & Reuse | 10–14 | bonus gate | 10 |

Bonus worlds unlock after the final main-world lesson is complete. Within every bonus world, lessons still unlock sequentially: lesson 1 is initially open and lesson N requires lesson N−1. Three bonus worlds ship their own tutorial (`orchestra-0`, `cove-0`, `eco-0`) and gate lesson 1 behind it — see `TUTORIAL_GATED_BONUS_WORLDS` in `src/store/useProgress.ts`.

`eco` (Eco City) is a capstone: it uses all six existing Blockly categories and introduces no new block, no new engine behaviour, and no new goal type. Every one of its canonical routes is simulated in `tests/ecoCityLessons.test.ts`; any change to an Eco City grid must keep that test green.

Source: `src/data/worlds.ts` — `WORLDS` array. Each world has `theme` (bgGradient, accentColor, textColor, cellBorder, cellBg), `emoji`, `character` (emoji for mascot), `characterName`, `itemEmoji`, `obstacleEmoji`, `goalEmoji`.

## Lesson unlock rules

- Lesson 0 in any world: always unlocked once the world itself is unlocked (lesson numbering is 0-indexed)
- Lesson N: requires lesson N-1 to be completed (`completed: true` in `useProgress`)

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

Source: `src/data/thinkingWorlds.ts` — `THINKING_WORLDS` array.

| ID | Emoji | Concept | Ages | Colour | unlockAtXP | Lessons |
|----|-------|---------|------|--------|------------|---------|
| patterns | 🔮 | Pattern recognition | 5–8 | purple | 0 | 10 |
| logic | 🧠 | If-then reasoning | 7–10 | blue | 0 | 10 |
| counting | ✨ | Number & math | 8–12 | emerald | 0 | 10 |
| memory | 🧩 | Sequence memory | 6–10 | rose | 0 | 10 |
| nature | 🌿 | Science thinking | 8–11 | green | 0 | 10 |
| numbers | ⚡ | Number sequences | 9–13 | indigo | 0 | 10 |
| decomposition | 🧩 | Decomposition | 6–10 | orange | 0 | 10 |
| abstraction | 🔍 | Abstraction | 7–11 | teal | 0 | 10 |
| math_reasoning | 🔢 | Mathematical reasoning | 8–12 | amber | 0 | 10 |
| induction | 🔬 | Inductive reasoning | 8–12 | cyan | 0 | 10 |
| deduction | 🕵️ | Deductive reasoning | 9–13 | violet | 0 | 10 |
| planning | 🗺️ | Constraint planning | 8–12 | sky | 0 | 10 |
| probability | 🎲 | Probability | 9–13 | lime | 0 | 10 |
| spatial | 🧭 | Spatial reasoning | 7–11 | fuchsia | 0 | 10 |

All fourteen worlds are unlocked from the start (`unlockAtXP: 0`). World-level XP gates are intentionally removed to let kids explore freely — see INV-L3, which binds any future thinking world too.

### World boundaries

Two pairs sit close enough that new lessons must respect the boundary:

- `decomposition` (Step by Step) vs `planning` (Planning Peaks) — both use `sequence`. In `decomposition` the answer is the familiar real-world routine and comes from the child's own knowledge. In `planning` the answer comes from written clues in `mascotMessage`, and the clues may deliberately contradict the habitual order.
- `logic` (Logic Land) vs `probability` (Chance Camp) — both use `if-then`. `logic` asks what *must* follow from a rule; `probability` asks what is *likely*, *possible*, *certain*, or *fair*. Never phrase a Chance Camp answer as a certainty unless the puzzle is specifically about certainty.

### Thinking lesson fields

Defined in `src/data/thinkingLessons.ts`. Each lesson:

```ts
{
  id: string           // '{worldId}-{number}', e.g. 'patterns-0'
  worldId: ThinkingWorldId
  number: number       // 0-indexed
  title: LocalizedString
  mascotMessage: LocalizedString
  xpReward: number
  puzzle: PatternPuzzle | IfThenPuzzle | MathPuzzle
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

### Puzzle authoring constraints

These are properties of the renderer, not style preferences. Breaking them ships a broken lesson:

| Constraint | Why |
|------------|-----|
| `sort` is for **numeric ascending order only** | Its prompt is the fixed string `thinking.sort.prompt` — "Tap numbers from smallest to largest!". A `sort` puzzle whose answer is not ascending contradicts its own on-screen instruction. Use `sequence` for any other ordering. |
| `pattern.options` and `math.options` must be **numbers or emoji** | They are typed `string[]`, not `LocalizedString[]`, so their text cannot be translated. A word answer there breaks INV-C2/INV-I1. When the answer needs words, use `if-then`, whose options carry `label: LocalizedString`. |
| `sequence` has no question field | The constraints or clues must live in the lesson's `mascotMessage`, which renders directly above the puzzle. |
| `abstraction` `correctIds` must be a **strict subset** of `items` | A multi-select where every item is correct teaches nothing and always passes. |
| `spatial` grids use only `'#'`, `'o'` and `'.'`, and every row in one grid is the same length | The renderer maps one character to one cell and derives the column count from the longest row, so a stray character draws an empty cell and a short row silently shifts the shape. |
| A `spatial` figure carries **at most one** `'o'` marker | The dot is the orientation anchor. Two dots give the child two conflicting anchors and make a mirror indistinguishable from a rotation. |
| All `spatial` option grids share the **prompt figure's dimensions** | Options render side by side at one size. A differently sized grid changes the cell scale, which reads as a difference in the shape rather than in its orientation. |
| A `spatial` option `label` must **never name its transformation** | "Quarter turn right" as a label answers the puzzle. Labels name the frame ("Shape A"), or carry real words only where the words are part of the question (a viewpoint name, for example). |
| `spatial` distractors must be **believable spatial errors** | Wrong turn direction, mirrored instead of rotated, wrong mirror axis, turned too far, one cell short. An unrelated shape is filler and breaks INV-Q4. |
| A `spatial` puzzle whose dot is **not** a shape corner must supply `note` | The default line under the figure reads "The dot marks one corner of the shape". On a route, fold or map lesson the dot means the start, a pencil mark, or a door, and `note` replaces that line so the hint never contradicts the puzzle. |

### Star & XP logic (thinking path)

- 3 stars — correct on first attempt
- 2 stars — correct on second attempt
- 1 star — correct on third attempt or later
- XP is awarded once per lesson (delta on improvement, same `completeLesson` invariants as blocks)

### Difficulty curve (10 lessons per world)

Lessons 0–4: gentle introduction, simple 4-item sequences / basic if-then / small arithmetic.  
Lessons 5–9: progressive difficulty — longer sequences (8–9 items), ABCD cycles, blank in middle, number sequences (+2, doubling), negation logic, multi-step chains, reverse operations, order of operations.

### Next-world navigation

`ThinkingHome` renders a tappable banner below the lesson list pointing to the next world in the array. The last world in `THINKING_WORLDS` shows no banner — appending a world moves the banner onto what used to be the last one.

### Adding a new thinking lesson

1. Append an entry to the correct world array in `src/data/thinkingLessons.ts`
2. Increment `lessonCount` in `src/data/thinkingWorlds.ts`
3. Lesson number follows 0-based sequential order; the next number is `lessonCount - 1` after the update
4. Run `bun run build` — TypeScript catches missing required fields

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
5. `starThresholds: [bronze, silver]` — `bronze` is the upper limit for 2 stars, `silver` for 3 stars. Bronze must be ≥ silver. Example: `[6, 4]` means ≤4 blocks → 3 stars, ≤6 blocks → 2 stars, >6 → 1 star. Use `[999, 999]` for tutorial lessons where stars don't matter.
6. Set `requiredCategories` to the concept the world teaches (e.g. `['loops']` for Space). Omit it for worlds/lessons that don't gate on a specific category.
7. Provide at least 2 hints. Make hint 1 tell the kid what to do next; hint 2 give the answer more directly.
8. Increment `lessonCount` in `src/data/worlds.ts` for the world that received the new lesson.
9. Run `bun run build` — TypeScript catches missing required fields.

---

## Adding a new block coding world

1. Add a `WorldId` literal to the union in `src/types/index.ts`:
   ```ts
   export type WorldId = 'jungle' | 'space' | ... | 'yourNewWorld'
   ```
2. Add the world object to `WORLDS` in `src/data/worlds.ts`. Required fields:
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
     unlockAtXP: number,      // XP required to access; use 999999 for bonus worlds
     lessonCount: number,     // set to the number of lessons you're adding
     isBonus?: true,          // only set for bonus worlds (unlockAtXP: 999999)
   }
   ```
3. Append the lessons to `src/data/lessons.ts` following the "Adding a new block coding lesson" steps above.
4. If the new world introduces a new Blockly category (beyond `move`, `loops`, `variables`, `logic`, `functions`, `lists`), add it to `src/blockly/toolboxes.ts` and document it in the Blockly toolbox categories table above.
5. Run `bun run build`.
6. Add a decision log entry in `.ai/decisions/log.md` explaining the new concept and XP unlock threshold choice.

---

## Adding a new thinking lesson

1. Append an entry to the correct world array in `src/data/thinkingLessons.ts`. Keep lessons ordered by `number`.
2. Lesson ID format: `'{worldId}-{number}'` (0-indexed). E.g. the 11th lesson in `patterns` is `patterns-10`.
3. All `title` and `mascotMessage` strings are `LocalizedString` — always provide both `en` and `id`.
4. Increment `lessonCount` in `src/data/thinkingWorlds.ts` for the world that received the new lesson.
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
2. Add the world object to `THINKING_WORLDS` in `src/data/thinkingWorlds.ts`. Required fields:
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
   - `getWorldTheme` in `src/screens/ThinkingHome.tsx` — `?? themes.purple` swallows an unregistered colour with no error
   - `THINKING_COLOR_MAP` in `src/screens/LandingScreen.tsx` — same silent purple fallback

   `tests/thinkingWorldsContent.test.ts` asserts every world's colour is present in both files. Do not skip this step; three worlds shipped mis-themed for several releases because the two maps drifted apart.
5. The `bgGradient` uses `from-{color}-900/50 to-{secondaryColor}-900/30` — keep opacity low so the star field behind shows through.
6. Add the puzzle type (if it's new) to `src/types/index.ts` and implement it in `src/screens/ThinkingLesson.tsx`.
7. Add the lessons to `src/data/thinkingLessons.ts` following the "Adding a new thinking lesson" steps above.
8. `ThinkingHome` renders a next-world banner automatically by reading the next item in `THINKING_WORLDS` — no code change needed for navigation between worlds.
9. Update the hardcoded `landing.worlds.title` count in `src/i18n/translations.ts` (EN **and** ID) — it is a literal, not derived from the arrays.
10. Update the catalog table above, the world counts in `README.md`, and add a decision log entry in `.ai/decisions/log.md` explaining the new concept and age range.
11. Run `bunx biome ci`, `bun run type-check`, `bun run build`, and `bun test`.
