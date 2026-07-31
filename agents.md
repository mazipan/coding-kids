# CodeKids — Agent Context

A fully static, browser-based coding learning platform for kids ages 5–14. No backend, no server, no login, no ads. Everything runs in the browser; progress is stored in localStorage.

## Quick commands

```bash
npm run dev    # dev server at localhost:5173
npm run build  # tsc + vite build → dist/
```

Build must pass `tsc -b` (strict TypeScript) before Vite bundles. Always run `npm run build` to verify before committing.

## Routes

| URL | Component | Notes |
|-----|-----------|-------|
| `/` | `LandingScreen` | Marketing page, scrollable |
| `/app` | `GameApp` | World map + lessons (React state machine) |
| `/*` | `<Navigate to="/" />` | Catch-all redirect |

React Router v7 (`BrowserRouter` in `main.tsx`). Netlify `[[redirects]]` in `netlify.toml` makes `/app` work on hard refresh.

## Project structure

```
src/
├── blockly/
│   ├── customBlocks.ts      # Defines move_right/left/up/down, collect_item blocks + JS generators
│   └── toolboxes.ts         # buildToolbox(categories[]) → Blockly toolbox JSON
├── components/
│   ├── BlocklyWorkspace.tsx # forwardRef — exposes resize() via useImperativeHandle
│   ├── Confetti.tsx         # Canvas-based confetti (120 particles, no library)
│   ├── GameGrid.tsx         # Absolute-positioned cells, Framer Motion character animation
│   ├── Header.tsx           # Sticky nav: logo/back, XP bar, stars, EN/ID toggle
│   ├── Mascot.tsx           # Character + speech bubble
│   ├── RewardModal.tsx      # Post-lesson modal: stars, XP, level-up banner
│   ├── StarRating.tsx       # 1–3 stars display
│   └── XPBar.tsx            # XP progress bar with level name
├── data/
│   ├── lessons.ts           # 31 lessons across 6 worlds (the big file)
│   ├── worlds.ts            # WORLDS array — theme colors, emoji, character, unlockAtXP
│   └── xpSystem.ts          # 15 XP levels, calculateStars(), calculateXPReward(), getLevelInfo()
├── engine/
│   └── gameEngine.ts        # parseCodeToActions(), applyAction(), checkWin()
├── i18n/
│   ├── LanguageProvider.tsx # React context: useLanguage() → { t, language, setLanguage }
│   └── translations.ts      # Flat-key EN + ID strings, exported as TRANSLATIONS
├── screens/
│   ├── LandingScreen.tsx    # Marketing landing page (hero, features, worlds, CTA, footer)
│   ├── HomeScreen.tsx       # World map → lesson list (React state, no router)
│   └── LessonScreen.tsx     # Blockly editor + game grid + controls
├── store/
│   └── useProgress.ts       # localStorage key: codekids_progress_v1
├── types/
│   └── index.ts             # All shared TypeScript types
└── utils/
    └── sounds.ts            # Web Audio API synth sounds (no library)
```

## Key architectural decisions

### State machine routing (inside /app)
`HomeScreen` and `LessonScreen` are not separate routes — they share React state in `GameApp` (`appState.screen: 'home' | 'lesson'`). World/lesson selection updates this state in place. Only the landing ↔ game boundary uses the router.

### Blockly resize on mobile
`BlocklyWorkspace` is a `forwardRef` component exposing `resize()` via `useImperativeHandle`. `LessonScreen` calls `blocklyRef.current?.resize()` inside `requestAnimationFrame` when switching back to the Blocks tab on mobile — required because Blockly calculates dimensions from the container's visible size.

### Game engine safety
`parseCodeToActions` uses `new Function(...)` with only the game verbs exposed (`moveRight`, `moveLeft`, `moveUp`, `moveDown`, `collect`). Actions are capped at `MAX_ACTIONS = 200` to prevent infinite loops from freezing the UI.

### i18n
`useLanguage()` returns `t(key, vars?)` where `vars` uses `{varName}` template substitution. Language persists in `localStorage` (`codekids_language`). Auto-detects Indonesian (`navigator.language.startsWith('id')`). All user-visible strings in all components must go through `t()`. Source: `src/i18n/translations.ts`.

### Sound
Web Audio API only — no library. `playSuccess()`, `playCollect()`, `playError()`, `playMove()`, `playLevelUp()` in `src/utils/sounds.ts`. AudioContext is created lazily on first use (required by browsers).

### Progress storage
Single JSON object in `localStorage` under `codekids_progress_v1`. Shape: `PlayerProgress` in `src/types/index.ts`. `completeLesson(id, stars, xp)` returns `{ leveledUp, newLevel, oldLevel }`.

## Worlds & lessons

| ID | Emoji | Concept | unlockAtXP | Lessons |
|----|-------|---------|------------|---------|
| jungle | 🌿 | Sequences | 0 | 6 |
| space | 🚀 | Loops | 100 | 6 |
| ocean | 🌊 | Variables | 350 | 5 |
| caves | 💎 | Conditions | 700 | 5 |
| factory | 🤖 | Functions | 1250 | 5 |
| portal | ⏰ | Arrays & Lists | 1650 | 4 |

Lesson unlock rule: lesson 1 always unlocked; lesson N requires lesson N-1 completed.

## XP levels (15 total)

Code Cub (0) → Junior Coder (50) → … → Master Coder (6650+). See `src/data/xpSystem.ts` for the full table.

## Blockly toolbox categories

Available categories per lesson (set in `lesson.availableCategories`):
- `move` — custom move_right/left/up/down + collect_item blocks
- `loops` — controls_repeat_ext, controls_whileUntil
- `variables` — VARIABLE
- `logic` — controls_if, controls_ifelse, logic_compare
- `functions` — PROCEDURE
- `lists` — lists_create_with, lists_getIndex, etc.

## Adding a new lesson

1. Add an entry to the relevant world array in `src/data/lessons.ts`
2. Fields: `id`, `worldId`, `number`, `title`, `story`, `mascotMessage`, `gridRows`, `gridCols`, `cells` (use `emptyGrid(r,c)`), `startPos`, `items`, `goalType`, `availableCategories`, `optimalBlockCount`, `xpReward`, `hints`, `starThresholds`
3. `goalType` options: `collect_all`, `reach_goal`, `collect_any`
4. `starThresholds: [bronze, silver]` — block counts; ≤silver = 3 stars, ≤bronze = 2 stars, else 1 star

## Adding a new translation key

1. Add the key + English string to the `en` object in `src/i18n/translations.ts`
2. Add the Indonesian translation to the `id` object
3. Use `t('your.key')` in the component

## Known gotchas

- `emptyGrid(rows, cols)` return type must be `CellType[][]` (not inferred), otherwise TypeScript rejects `= 'obstacle'` assignments on cells.
- Blockly toolbox is passed as `toolbox as any` to bypass a type mismatch between `ToolboxConfig` and `ToolboxDefinition`.
- `getLevelInfo` takes an XP value, not a level number. After `completeLesson`, use `XP_LEVELS[result.newLevel - 1]?.minXP` to get the XP for that level, then pass to `getLevelInfo`.
- `Math.random()` in the star background (App.tsx ambient stars) is stable because those divs only render once — the component never re-renders the star array.
- React Router v7 (not v6) is installed. The declarative `BrowserRouter` + `Routes` + `Route` API still works as in v6.

## Deployment

Netlify: `npm run build` → `dist/`. The `netlify.toml` sets the build command, publish dir, and a `/* → /index.html` SPA redirect so `/app` works on direct visit. No environment variables needed.
