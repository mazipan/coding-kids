# Agent context

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
│   └── useProgress.ts       # localStorage — see .ai/specs/store.md
├── types/
│   └── index.ts             # All shared TypeScript types
└── utils/
    └── sounds.ts            # Web Audio API synth sounds (no library)
```

## Known gotchas

- `emptyGrid(rows, cols)` return type must be `CellType[][]` (not inferred), otherwise TypeScript rejects `= 'obstacle'` assignments on cells.
- Blockly toolbox is passed as `toolbox as any` to bypass a type mismatch between `ToolboxConfig` and `ToolboxDefinition`.
- `getLevelInfo` takes an XP value, not a level number. After `completeLesson`, use `XP_LEVELS[result.newLevel - 1]?.minXP` to get the XP for that level, then pass to `getLevelInfo`.
- `Math.random()` in the star background (App.tsx ambient stars) is stable because those divs only render once — the component never re-renders the star array.
- React Router v7 (not v6) is installed. The declarative `BrowserRouter` + `Routes` + `Route` API still works as in v6.

## Deployment

Netlify: `npm run build` → `dist/`. The `netlify.toml` sets the build command, publish dir, and a `/* → /index.html` SPA redirect so `/app` works on direct visit. No environment variables needed.
