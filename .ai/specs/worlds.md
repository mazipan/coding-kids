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

- Lesson 1 in any world: always unlocked once the world itself is unlocked
- Lesson N: requires lesson N-1 to be completed

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

All three worlds are unlocked from the start (`unlockAtXP: 0`). World-level XP gates are intentionally removed to let kids explore freely.

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

## Adding a new lesson

1. Add an entry to the relevant world array in `src/data/lessons.ts`
2. Use `emptyGrid(rows, cols)` for `cells`, then mutate for obstacles using an IIFE:
   ```ts
   cells: (() => { const g = emptyGrid(6, 6); g[2][3] = 'obstacle'; return g })()
   ```
3. Run `bun run build` — TypeScript will catch any missing required fields
