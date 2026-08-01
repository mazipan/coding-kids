# Worlds & lessons spec

## Worlds

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

## XP levels (15 total)

Code Cub → Junior Coder → ... → Master Coder (6650+ XP). Full table in `src/data/xpSystem.ts`.

`xpReward` per star: base × 1 (1 star), base × 1.5 (2 stars), base × 2 (3 stars). Rounded.

## Adding a new lesson

1. Add an entry to the relevant world array in `src/data/lessons.ts`
2. Use `emptyGrid(rows, cols)` for `cells`, then mutate for obstacles using an IIFE:
   ```ts
   cells: (() => { const g = emptyGrid(6, 6); g[2][3] = 'obstacle'; return g })()
   ```
3. Run `npm run build` — TypeScript will catch any missing required fields
