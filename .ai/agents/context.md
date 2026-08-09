# Agent context

## Quick commands

```bash
bun run dev    # dev server at localhost:5173
bun run build  # tsc + vite build → dist/
```

Build must pass `tsc -b` (strict TypeScript) before Vite bundles. Always run `bun run build` to verify before committing.

## Routes

| URL | Component | Notes |
|-----|-----------|-------|
| `/` | `LandingScreen` | Marketing page, scrollable |
| `/app` | `PathSelector` | Hub — choose Blocks or Brain Training |
| `/app/blocks` | `BlocksHome` | Block coding world map |
| `/app/blocks/world/:worldId` | `BlocksHome` | Lesson list for a world |
| `/app/blocks/world/:worldId/:lessonNumber` | `LessonScreen` | Blockly editor + game grid |
| `/app/thinking` | `ThinkingHome` | Brain training world map |
| `/app/thinking/world/:worldId` | `ThinkingHome` | Lesson list for a thinking world |
| `/app/thinking/world/:worldId/:lessonNumber` | `ThinkingLessonScreen` | Puzzle screen |
| `/*` | `<Navigate to="/" />` | Catch-all redirect |

All routes under `/app` share `GameLayout` (dark bg, Header, ambient star field).  
React Router v7 (`BrowserRouter` in `main.tsx`). Netlify `[[redirects]]` in `netlify.toml` makes `/app` work on hard refresh.

## Project structure

```
src/
├── blockly/
│   ├── customBlocks.ts         # Defines move_right/left/up/down, collect_item blocks + JS generators
│   └── toolboxes.ts            # buildToolbox(categories[]) → Blockly toolbox JSON
├── components/
│   ├── BlocklyWalkthrough.tsx  # First-time tour overlay (4 steps) for each block coding world
│   ├── BlocklyWorkspace.tsx    # forwardRef — exposes resize() via useImperativeHandle
│   ├── Confetti.tsx            # Canvas-based confetti (120 particles, no library)
│   ├── GameGrid.tsx            # Absolute-positioned cells, Framer Motion character animation
│   ├── Header.tsx              # Sticky nav: logo/back (path-aware), XP bar, stars, EN/ID toggle
│   ├── Mascot.tsx              # Character + speech bubble
│   ├── RewardModal.tsx         # Post-lesson modal: stars, XP, level-up banner
│   ├── StarRating.tsx          # 1–3 stars display
│   └── XPBar.tsx               # XP progress bar; hideLabel prop hides coding-themed level name
├── data/
│   ├── lessons.ts              # 31 block coding lessons across 6 worlds
│   ├── thinkingLessons.ts      # 30 brain training lessons (10 per world × 3 worlds)
│   ├── thinkingWorlds.ts       # 3 thinking worlds: patterns, logic, counting
│   ├── worlds.ts               # WORLDS array — theme colors, emoji, character, unlockAtXP
│   └── xpSystem.ts             # 15 XP levels, calculateStars(), calculateXPReward(), getLevelInfo()
├── engine/
│   └── gameEngine.ts           # parseCodeToActions(), applyAction(), checkWin()
├── i18n/
│   ├── LanguageProvider.tsx    # React context: useLanguage() → { t, language, setLanguage }
│   ├── localize.ts             # localize(field: LocalizedString, language) → string
│   └── translations.ts         # Flat-key EN + ID strings, exported as TRANSLATIONS
├── screens/
│   ├── BlocksHome.tsx          # Block coding: world map + lesson list
│   ├── LandingScreen.tsx       # Marketing landing page (hero, features, worlds, CTA, footer)
│   ├── LessonScreen.tsx        # Blockly editor + game grid + controls
│   ├── PathSelector.tsx        # Hub at /app — pick Blocks or Brain Training
│   ├── ThinkingHome.tsx        # Brain training: world map + lesson list + next-world banner
│   └── ThinkingLesson.tsx      # Brain training puzzle screen (pattern / if-then / math)
├── store/
│   └── useProgress.ts          # localStorage — see .ai/specs/store.md
├── types/
│   └── index.ts                # All shared TypeScript types
└── utils/
    └── sounds.ts               # Web Audio API synth sounds (no library)
```

## Known gotchas

- `emptyGrid(rows, cols)` return type must be `CellType[][]` (not inferred), otherwise TypeScript rejects `= 'obstacle'` assignments on cells.
- Blockly toolbox is passed as `toolbox as any` to bypass a type mismatch between `ToolboxConfig` and `ToolboxDefinition`.
- `getLevelInfo` takes an XP value, not a level number. After `completeLesson`, use `XP_LEVELS[result.newLevel - 1]?.minXP` to get the XP for that level, then pass to `getLevelInfo`.
- `Math.random()` in the star background (App.tsx ambient stars) is stable because those divs only render once — the component never re-renders the star array.
- React Router v7 (not v6) is installed. The declarative `BrowserRouter` + `Routes` + `Route` API still works as in v6.
- Vite 8 uses **rolldown** (Rust bundler) for `RollupOptions` types, not JS Rollup. `manualChunks` in `vite.config.ts` must be the function form `(id) => 'chunkName' | undefined` — the `Record<string, string[]>` object form Rollup accepted no longer type-checks.
- Tailwind v4: `postcss.config.js` uses `@tailwindcss/postcss` (autoprefixer is built in, not a separate dep). `src/index.css` uses `@import 'tailwindcss'` + `@config '../tailwind.config.js'` — the JS config file is still the source of truth for theme colors/fonts/keyframes, bridged in rather than rewritten as CSS-first `@theme`.
- `src/vite-env.d.ts` (`/// <reference types="vite/client" />`) is required for TypeScript 7's stricter side-effect import checking (e.g. `import './index.css'`) — don't remove it.
- `XPBar` has a `hideLabel` prop — pass it on the thinking path to suppress the coding-themed level name ("Code Cub" etc.) which is irrelevant to brain training.
- Thinking lesson IDs follow `{worldId}-{number}` starting at `0` (e.g. `patterns-0`). Lesson 0 is always accessible; sequential unlock uses the same `isLessonUnlocked` logic as block coding.
- All icons in the app use `lucide-react`. Never add a second icon library. Emoji is acceptable for decorative mascots and world/puzzle flavour; avoid emoji in interactive controls (buttons, badges, status indicators).
- Translation strings must never embed arrow/symbol characters (`←`, `→`, `▶`, `✓`). Place icons in JSX alongside `t()` calls.

## OG image (`public/og-image.svg` + `public/og-image.png`)

`og-image.svg` is the **source of truth** — edit it, then re-export to `og-image.png`.  
`index.html` `og:image` and `twitter:image` both point to the `.png` (SVG is not rendered by most social crawlers).

### Re-generating the PNG after any SVG edit

Chromium is pre-installed in the remote environment at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Use it to render an exact 1200×630 screenshot:

```bash
CHROME="/opt/pw-browsers/chromium-1194/chrome-linux/chrome"
OUT="public/og-image.png"

# Inline the SVG into a minimal HTML page (avoids file:// cross-origin issues with <img>)
{ echo '<!DOCTYPE html><html><head><meta charset="UTF-8"><style>* { margin:0;padding:0; } html,body { width:1200px;height:630px;overflow:hidden;background:#0A0618; } svg { display:block; }</style></head><body>'
  cat public/og-image.svg
  echo '</body></html>'
} > /tmp/render-og.html

$CHROME --headless=new --no-sandbox --disable-gpu \
  --window-size=1200,630 --hide-scrollbars \
  --screenshot="$OUT" \
  "file:///tmp/render-og.html" 2>/dev/null

echo "$(ls -lh $OUT)"
```

Commit both files together — they must always be in sync.

### SVG authoring pitfalls

- **`fill="none"` on every `<path>`** — SVG paths default to `fill="black"`. Any open path (brackets, slashes, arrows) will render a filled black shape over the background unless `fill="none"` is explicit.
- **Gradient `gradientUnits`** — use the default `objectBoundingBox` with `x1/y1/x2/y2` in the `0→1` range. If `gradientUnits="userSpaceOnUse"` is used, coordinates must match the element's actual position in the SVG canvas; a gradient defined at `(0,0)→(80,80)` applied to a rect at `(80,140)` will collapse to the end-stop colour.
- **Text overflow in pills** — always measure pill `width` against the rendered text. A single pill with long text (e.g. "For Ages 5–14 · No Login Needed") will overflow its `rx` rounded container invisibly; split into two pills instead.
- **Safe render zone** — the Chromium headless screenshot clips content below approximately `y=560` even with a `630px` window. Keep all visible content above `y=555` (baseline for 24px text). Leave the `viewBox` at `0 0 1200 630` — the dark background still fills the full frame.
- **Content sync** — after adding a new world, path, or feature to the app, update the OG image pills/tagline to match. Stale copy ("6 Epic Worlds", "Where Kids Become Coders") misleads social previews.

## Deployment

Netlify: `bun run build` → `dist/`. The `netlify.toml` sets the build command, publish dir, and a `/* → /index.html` SPA redirect so `/app` works on direct visit. No environment variables needed.
