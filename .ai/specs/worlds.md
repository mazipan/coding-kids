# Worlds & lessons spec

## Block coding worlds

| ID | Emoji | Concept | Ages | unlockAtXP | Lessons |
|----|-------|---------|------|------------|---------|
| jungle | 🌿 | Sequences | 5–7 | 0 | 6 |
| space | 🚀 | Loops | 7–9 | 100 | 6 |
| ocean | 🌊 | Variables | 9–10 | 350 | 5 |
| caves | 💎 | Conditions | 10–11 | 700 | 5 |
| factory | 🤖 | Functions | 11–13 | 1250 | 5 |
| portal | ⏰ | Arrays & Lists | 12–14 | 1650 | 4 |

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
}
```

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

---

## Thinking worlds (Brain Training path)

Source: `src/data/thinkingWorlds.ts` — `THINKING_WORLDS` array.

| ID | Emoji | Concept | Ages | unlockAtXP | Lessons |
|----|-------|---------|------|------------|---------|
| patterns | 🔮 | Pattern recognition | 5–8 | 0 | 10 |
| logic | 🧠 | If-then reasoning | 7–10 | 0 | 10 |
| counting | ✨ | Number & math | 8–12 | 0 | 10 |
| memory | 🧩 | Sequence memory | 6–10 | 0 | 10 |
| nature | 🌿 | Science thinking | 8–11 | 0 | 10 |
| numbers | ⚡ | Number sequences | 9–13 | 0 | 10 |

All six worlds are unlocked from the start (`unlockAtXP: 0`). World-level XP gates are intentionally removed to let kids explore freely.

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

### Star & XP logic (thinking path)

- 3 stars — correct on first attempt
- 2 stars — correct on second attempt
- 1 star — correct on third attempt or later
- XP is awarded once per lesson (delta on improvement, same `completeLesson` invariants as blocks)

### Difficulty curve (10 lessons per world)

Lessons 0–4: gentle introduction, simple 4-item sequences / basic if-then / small arithmetic.  
Lessons 5–9: progressive difficulty — longer sequences (8–9 items), ABCD cycles, blank in middle, number sequences (+2, doubling), negation logic, multi-step chains, reverse operations, order of operations.

### Next-world navigation

`ThinkingHome` renders a tappable banner below the lesson list pointing to the next world in the array. The last world (counting) shows no banner.

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
6. Pick the right puzzle type based on the world:
   - `patterns` world → `PatternPuzzle` (`type: 'pattern'`)
   - `logic` world → `IfThenPuzzle` (`type: 'if-then'`)
   - `counting` world → `MathPuzzle` (`type: 'math'`)
   Mixed types are technically allowed but avoid them — they break the world's thematic consistency.
7. Always provide exactly 4 `options`. For `PatternPuzzle` and `MathPuzzle`, include the correct answer plus 3 plausible distractors. For `IfThenPuzzle`, each option needs `id`, `emoji`, and `label: LocalizedString`.
8. Set `xpReward` consistent with the lesson's position in the difficulty curve: lessons 0–4 use 10–15 XP; lessons 5–9 use 15–25 XP.
9. Run `bun run build` — TypeScript catches missing required fields.

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
3. Choose a `color` not already used by the existing worlds (purple, blue, emerald). Pick a Tailwind color that has 900-shade availability.
4. The `bgGradient` uses `from-{color}-900/50 to-{secondaryColor}-900/30` — keep opacity low so the star field behind shows through.
5. Add the puzzle type (if it's new) to `src/types/index.ts` and implement it in `src/screens/ThinkingLesson.tsx`.
6. Add the lessons to `src/data/thinkingLessons.ts` following the "Adding a new thinking lesson" steps above.
7. `ThinkingHome` renders a next-world banner automatically by reading the next item in `THINKING_WORLDS` — no code change needed for navigation between worlds.
8. Run `bun run build`.
9. Add a decision log entry in `.ai/decisions/log.md` explaining the new concept and age range.
