# CodeKids — Agent Context

A fully static, browser-based coding learning platform for kids ages 5–14. No backend, no server, no login, no ads. Everything runs in the browser; progress is stored in localStorage.

## Quick commands

```bash
npm run dev    # dev server at localhost:5173
npm run build  # tsc + vite build → dist/
```

Build must pass `tsc -b` (strict TypeScript) before Vite bundles. Always run `npm run build` to verify before committing.

---

## User personas

### Primary — The Kid (ages 5–14)
The actual player. Never reads instructions — learns by clicking and experimenting. Attention span is short; frustration tolerance is low. Success feedback (stars, XP, animations, sounds) must be immediate and enthusiastic. Failure messages must be encouraging, never shaming. The UI must be obvious without a tutorial: big buttons, clear colors, no jargon.

Sub-groups by age:
- **5–7** (Jungle): Pre-reader or early reader. Needs the biggest targets, simplest grids, zero typing, maximum emoji. One or two blocks per solution.
- **8–10** (Space, Ocean): Can read short sentences. Enjoys mild challenge. Starting to grasp that code has structure.
- **11–14** (Caves, Factory, Portal): Wants to feel clever. Responds well to "3 stars = efficient code" pressure. Can handle multi-step logic.

### Secondary — The Parent
Discovers the app and decides whether to let their child use it. Cares about: free, no ads, no account, no personal data collected, age-appropriate content, educational value. The landing page (`/`) is written for them. They are not the player.

### Tertiary — The Teacher / Educator
May share the link with a class. Same trust concerns as parents, plus: wants curriculum alignment (sequences → loops → variables → conditions → functions → arrays mirrors CS education standards). Does not need an LMS integration for v1.

### Non-user (explicit exclusion)
No adult learner flow. No parent dashboard. No classroom management. No account system. These are out of scope for v1 and should not be designed around.

---

## Store decisions

**Why localStorage only (no backend):**
- Zero infrastructure cost — the app is a static file bundle
- No privacy risk — nothing leaves the device
- No friction — no account creation, no email verification, no GDPR consent flow
- Offline-capable by default

**Accepted tradeoffs:**
- Progress is lost if the user clears browser storage or switches device/browser
- No cross-device sync
- No teacher/parent visibility into progress

**Why not IndexedDB:**
- Progress data is tiny (< 5 KB even with all 31 lessons completed)
- Synchronous `localStorage` reads are fine at this scale; no async complexity needed

**Why not cookies:**
- Cookies require a server round-trip or CORS config — incompatible with pure static hosting

**Key naming:**
- Keys are versioned (`_v1` suffix) so a future breaking schema change can migrate cleanly without corrupting old data
- If a future version needs migration: read `_v1`, transform, write `_v2`, delete `_v1`

---

## Store specs

All data lives in `window.localStorage`. Two keys are used:

### `codekids_progress_v1`

JSON-serialised `PlayerProgress` object.

```ts
interface PlayerProgress {
  xp: number           // total XP earned, never decrements
  level: number        // 1–15, derived from xp but stored for quick reads
  totalStars: number   // sum of best stars across all completed lessons
  badges: string[]     // badge IDs earned, e.g. ['first_lesson', 'star_collector']
  lastPlayed: string   // ISO-8601 date string, updated on every completeLesson()
  lessons: Record<string, LessonProgress>  // keyed by lesson.id
}

interface LessonProgress {
  completed: boolean
  stars: number    // best stars achieved (1–3); only updated if new attempt is better
  xpEarned: number // XP from best attempt
  attempts: number // total attempts, always increments
}
```

**Badge IDs (v1):**
| ID | Awarded when |
|----|-------------|
| `first_lesson` | First lesson completed |
| `star_collector` | Any lesson completed with 3 stars |
| `level_5` | Reached level 5 |
| `level_10` | Reached level 10 |

**Default value** (new user, no stored data):
```json
{ "xp": 0, "level": 1, "totalStars": 0, "badges": [], "lastPlayed": "", "lessons": {} }
```

**Write rules:**
- `completeLesson(id, stars, xp)` in `src/store/useProgress.ts` is the only writer
- Stars only update if the new attempt beats the stored best
- XP only adds the delta between old best and new best (prevents farming)
- `level` and `totalStars` are recomputed from scratch on every write to stay consistent

### `codekids_language`

Plain string — `'en'` or `'id'`. Written by `setLanguage()` in `LanguageProvider`. Read on app init; falls back to `navigator.language` detection if absent.

---

## Routes

| URL | Component | Notes |
|-----|-----------|-------|
| `/` | `LandingScreen` | Marketing page, scrollable |
| `/app` | `GameApp` | World map + lessons (React state machine) |
| `/*` | `<Navigate to="/" />` | Catch-all redirect |

React Router v7 (`BrowserRouter` in `main.tsx`). Netlify `[[redirects]]` in `netlify.toml` makes `/app` work on hard refresh.

---

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

---

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
Single JSON object in `localStorage` under `codekids_progress_v1`. See **Store specs** above for the full schema. `completeLesson(id, stars, xp)` returns `{ leveledUp, newLevel, oldLevel }`.

---

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

---

## How-to guides

### Adding a new lesson

1. Add an entry to the relevant world array in `src/data/lessons.ts`
2. Fields: `id`, `worldId`, `number`, `title`, `story`, `mascotMessage`, `gridRows`, `gridCols`, `cells` (use `emptyGrid(r,c)`), `startPos`, `items`, `goalType`, `availableCategories`, `optimalBlockCount`, `xpReward`, `hints`, `starThresholds`
3. `goalType` options: `collect_all`, `reach_goal`, `collect_any`
4. `starThresholds: [bronze, silver]` — block counts; ≤silver = 3 stars, ≤bronze = 2 stars, else 1 star

### Adding a new translation key

1. Add the key + English string to the `en` object in `src/i18n/translations.ts`
2. Add the Indonesian translation to the `id` object
3. Use `t('your.key')` in the component

---

## Known gotchas

- `emptyGrid(rows, cols)` return type must be `CellType[][]` (not inferred), otherwise TypeScript rejects `= 'obstacle'` assignments on cells.
- Blockly toolbox is passed as `toolbox as any` to bypass a type mismatch between `ToolboxConfig` and `ToolboxDefinition`.
- `getLevelInfo` takes an XP value, not a level number. After `completeLesson`, use `XP_LEVELS[result.newLevel - 1]?.minXP` to get the XP for that level, then pass to `getLevelInfo`.
- `Math.random()` in the star background (App.tsx ambient stars) is stable because those divs only render once — the component never re-renders the star array.
- React Router v7 (not v6) is installed. The declarative `BrowserRouter` + `Routes` + `Route` API still works as in v6.

---

## Deployment

Netlify: `npm run build` → `dist/`. The `netlify.toml` sets the build command, publish dir, and a `/* → /index.html` SPA redirect so `/app` works on direct visit. No environment variables needed.

---

## Agent harness

Standard operating procedure for any agent working on this repo.

### Before starting any task

1. Read this file (`agents.md`) — you are reading it now
2. Run `npm run build` to confirm the repo is in a clean state before touching anything
3. Read the specific file(s) relevant to the task — don't guess at signatures or types

### After every change

1. Run `npm run build` — must pass with zero TypeScript errors
2. Commit with a clear message (what changed and why, not a description of the diff)
3. Push to the feature branch

### Persona check

Before adding any UI copy, feature, or UX flow, ask: **does this serve the Kid persona?**
- If it adds friction (forms, modals, settings) — reconsider
- If it makes feedback slower or quieter — reconsider
- If it collects or transmits data — reject entirely

### Common agent tasks

**Add a lesson**
> "Add lesson 7 to the Jungle world. It should teach nested sequences. Grid 6×6, introduce a small obstacle, goal is collect_all, 3 banana items."
> → Edit `src/data/lessons.ts`. Run build. Done.

**Fix a bug in the game engine**
> "The character walks through obstacles when using loops."
> → Read `src/engine/gameEngine.ts`. Read `src/data/lessons.ts` for a repro case. Fix `applyAction`. Run build.

**Add a translation key**
> "The hint panel has an untranslated label 'Show hint'."
> → Add key to both `en` and `id` in `src/i18n/translations.ts`. Replace hardcoded string with `t('your.key')`. Run build.

**Add a new world**
> "Add a seventh world: Cloud Kingdom, teaching objects/maps, ages 13–15, unlocks at 2200 XP."
> → Add to `src/data/worlds.ts`. Add world translations to `src/i18n/translations.ts`. Add lessons to `src/data/lessons.ts`. Run build.

**Add a badge**
> "Award a badge when a player completes all lessons in a world."
> → Add badge ID and award logic to `src/store/useProgress.ts` (`completeLesson`). Add display handling in `RewardModal.tsx`. Run build.

### What agents must NOT do

- Add a backend, database, or API call of any kind
- Add user authentication or accounts
- Add analytics or tracking scripts
- Collect or transmit any personal data
- Add features that require a server (even a serverless function)
- Break the `npm run build` TypeScript check
- Hardcode user-visible strings without a `t()` call
- Change the localStorage key name without a migration plan
