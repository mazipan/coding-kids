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
│   ├── StatsModal.tsx          # Achievement summary — level, per-path stars, per-world breakdown
│   └── XPBar.tsx               # XP progress bar; hideLabel prop hides coding-themed level name
├── data/
│   ├── lessons.ts              # 148 block coding lessons across 15 worlds
│   ├── thinkingLessons/        # One file per world (patterns.ts, logic.ts, ...) + index.ts
│   │                            #   assembling THINKING_LESSONS — tier one, lessons 0–9
│   ├── thinkingLessonsAdvanced/ # One file per world (patterns.ts, logic.ts, ...) + index.ts
│   │                            #   assembling THINKING_LESSONS_ADVANCED — tier two, lessons 10–19
│   ├── thinkingWorlds/         # One file per thinking world (patterns.ts, logic.ts, ...) + index.ts
│   │                           #   assembling THINKING_WORLDS — 14 worlds, 20 lessons each
│   ├── worlds/                 # One file per world (jungle.ts, space.ts, ...) + index.ts
│   │                           #   assembling WORLDS — theme colors, emoji, character (no world-level lock, INV-L2)
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
    ├── progressStats.ts        # Derives per-path / per-world star + completion stats from progress
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
- Thinking lessons are split by tier — `thinkingLessons/` (0–9, one file per world) spreads in `thinkingLessonsAdvanced/` (10–19, one file per world) to build `THINKING_LESSONS`. The split is for reviewable diffs only; array order never matters because every lookup filters by `worldId` and sorts by `number`. Add a tier-one lesson to the matching world's file under `thinkingLessons/`; add a tier-two lesson to the matching world's file under `thinkingLessonsAdvanced/`.
- `bun run audit-lessons` is the fourth check to run after any thinking-content change. It catches the mechanical content invariants (numbering, missing translations, an answer that is not among its options, true/false runs, grid keys out of range) that `tsc` cannot see.
- The header star pill shows the **current path's** stars (blocks under `/app/blocks`, thinking under `/app/thinking`, combined on `/app`), derived by `src/utils/progressStats.ts`. `progress.totalStars` is a single cross-path counter that also includes tutorial stars — never render it as a star total.
- All icons in the app use `lucide-react`. Never add a second icon library. Emoji is acceptable for decorative mascots and world/puzzle flavour; avoid emoji in interactive controls (buttons, badges, status indicators).
- Translation strings must never embed arrow/symbol characters (`←`, `→`, `▶`, `✓`). Place icons in JSX alongside `t()` calls.
- A `DEMO_STATES` entry in `BlocklyWalkthrough.tsx` is what turns the last teach-step button into "Show me an example!" — a world without one ends its walkthrough on a bare "Let's go!". Every world that ships an `isTutorial` lesson needs an entry; `tests/walkthroughDemos.test.ts` enforces that.
- Entries in `DEMO_STATES` are `(lang) => object` builders, not plain objects: variable and procedure names inside a demo are block text the child reads, and must match the names the teach diagram just printed (`langkah`/`steps`, `gerak3Kanan`/`move3Right`).
- A functions demo is two top-level stacks — Blockly gives a procedure definition its own root, it cannot be nested. Serialize `procedures_defnoreturn` with `fields: { NAME }` + `inputs: { STACK }`, and `procedures_callnoreturn` with `extraState: { name }` carrying the same string. **The definition must come first in the `blocks` array** — a call deserialized before its definition resolves to nothing. Keep the second stack's `y` close to the first: `loadState` anchors the viewport at the origin, and on a phone the walkthrough card covers the bottom of the workspace.
- The landing page (`/`) is prerendered at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`) via `renderToString` — no framework, no new dependency. Anything reachable from `LandingScreen`'s render tree must stay safe to render in Node: no `window`/`document`/`localStorage` read synchronously during render. `main.tsx` picks `hydrateRoot` vs `createRoot` based on whether `#root` already has markup, and threads that same signal into `App`'s `isHydrating` prop — `LanguageProvider` only forces a fixed initial language (and self-corrects via `useEffect`) when hydrating; every normal `createRoot` load (all of `/app/*`, `bun run dev`) keeps the original synchronous, no-flash `getInitialLanguage()` behavior. Don't widen a prerender-only workaround into the provider's default path. `Footer`'s `__BUILD_DATE__`/`__COMMIT_SHA__` are `vite.config.ts` `define` values baked in at build time — `__BUILD_DATE__` is read from a `BUILD_DATE` env var set once and shared across both the client and SSR `vite build` invocations (see the `build` script) specifically so the prerendered and client-hydrated trees agree; if a future change adds another `define` value reachable from the landing tree, it needs the same treatment or it'll intermittently fail hydration.
- `requiredCategories: ['logic']` on a lesson is satisfied only by a `controls_if`/`controls_ifelse` block in the solution (`CATEGORY_BLOCK_TYPES` in `src/data/xpSystem.ts`) — not by `logic_operation`/`logic_negate`/`logic_compare` on their own. A lesson that puts AND/OR/NOT inside a `controls_whileUntil` loop's test (no `controls_if` anywhere) must require `'loops'`, not `'logic'`, or a correct solution silently caps at 1 star. See the Boolean Logic Booster world (`boolean`) for both shapes side by side.
- `bun run preview` and `bun run dev` don't know about `netlify.toml`'s redirects — visiting a deep `/app/...` URL directly under `bun run preview` will briefly show the prerendered landing markup before React replaces it with the real route (Vite's generic SPA fallback always serves `dist/index.html`, never `dist/app.html`). This only resolves correctly on Netlify itself; it isn't a regression to chase locally.

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

Netlify: `bun run build` → `dist/`. The build runs in three stages: (1) `tsc -b && vite build` produces the normal SPA client bundle, (2) `vite build --ssr src/entry-server.tsx --outDir dist-ssr` renders the landing page's component tree to a small Node-runnable bundle, (3) `scripts/prerender.mjs` calls that bundle's `renderLandingPage()`, copies the plain built shell to `dist/app.html` (used for every `/app/*` route), injects the rendered landing HTML into `dist/index.html`'s `#root`, and deletes the temporary `dist-ssr/` folder. `netlify.toml` routes `/app*` to `app.html` and everything else to `index.html`, so `/` gets real markup on first paint while `/app/*` stays a plain SPA shell. There is deliberately no `public/_redirects` file — `netlify.toml` is the single source of truth for redirects; adding one back would risk Netlify evaluating it ahead of (or instead of) the `netlify.toml` rules, silently breaking the `/app*` split. No environment variables needed.
