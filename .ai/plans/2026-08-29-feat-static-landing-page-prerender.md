# Plan: Static-generate the landing page (`/`)

**Slug:** `feat-static-landing-page-prerender`
**Date:** 2026-08-29
**Status:** draft

---

## Request

> we are currently running full spa application, but for landing page, seems better to be statically generated, can remove dynamic feature check if needed.
> do you think we can start for static generated without need to do too much changes

---

## Decision

Add a build-time prerender step that renders `LandingScreen` to static HTML and injects it into `dist/index.html`, so `/` paints real content before any JS runs (better first paint, better for crawlers/no-JS). `/app/*` keeps working exactly as an SPA today — it gets a second, unmodified copy of the shell (`dist/app.html`) via a new Netlify redirect, so the prerendered landing markup never collides with the game routes. No new npm dependency: `react-dom/server`'s `renderToString` and a one-off `vite build --ssr` of a tiny new entry file do the whole job.

The two "dynamic feature checks" blocking a clean prerender are the landing page's initial language (read from `localStorage`/`navigator.language` synchronously at first render) and its `hasProgress` returning-player check (read from the progress store at first render). Both must resolve identically in Node (no `localStorage`) and in the browser's very first paint (before hydration), or React logs a hydration mismatch. Both are changed to start from a fixed default (`en`, `false`) and correct themselves via `useEffect` right after mount — a one-frame flash for a returning/non-English visitor, invisible in practice, and gone by the time the page is interactive.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Add a prerendering plugin (`vite-plugin-ssg`, `vite-plugin-prerender-spa`, etc.) | New dependency for something `react-dom/server` + Vite's own `--ssr` build flag already does; the app only has one route that needs prerendering, not a whole static-site generator. |
| Headless-Chromium snapshot of `/` at build time (Puppeteer/Playwright) | Would require bundling a browser binary in Netlify's build image just to screenshot-to-HTML one page — slow, fragile, and unnecessary when `renderToString` does the same job in milliseconds with the tooling already installed. |
| Full server-side rendering (a Node/edge server rendering every request) | Requires a server or serverless function — violates the "no backend, no server" hard constraint (`.ai/harness/rules.md`) and INV-P1/P4-adjacent static-only architecture (`.ai/decisions/architecture.md`). Rejected outright. |
| Prerender into the *same* `dist/index.html` used for every route (no `app.html` split) | Netlify's catch-all redirect (`/* → /index.html`) already serves that one file for every unmatched path. Baking landing markup into it would mean a direct visit to `/app/blocks` briefly shows the landing page's DOM before React discards and re-renders it — a bigger regression (a wrong-content flash) than today's blank-then-render. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | Build-time only change; no new runtime fetch. |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | `hasProgress` display timing changes; the underlying progress store logic is untouched. |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | no | |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | New `src/entry-server.tsx` must pass `tsc -b` under the existing `tsconfig.app.json` (`include: ["src"]"`) with zero errors. |
| INV-C2 no hardcoded strings | no | No new user-visible copy is introduced. |
| INV-C3 build passes | yes | `bun run build` gains an extra SSR build + prerender step; it must still exit 0. This is the main thing the builder verifies. |
| INV-C4 localStorage only | no | Still the only persistence mechanism; we only change *when* it's read on the landing route, not what stores data. |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/i18n/LanguageProvider.tsx` | edit | Initial state always `'en'`; detect stored/browser language in a mount-only `useEffect` instead of the `useState` initializer. |
| `src/App.tsx` | edit | `LandingRoute`: `hasProgress` starts `false`, corrected in a mount-only `useEffect` once `useProgress()` has loaded. |
| `src/entry-server.tsx` | add | SSR entry: exports `renderLandingPage(): string`, renders `<LanguageProvider><LandingScreen onStart={noop} hasProgress={false} /></LanguageProvider>` via `renderToString`. |
| `scripts/prerender.mjs` | add | Node script run after both builds: copies the built `dist/index.html` to `dist/app.html` (untouched SPA shell for `/app/*`), then injects the SSR output into `dist/index.html`'s `<div id="root">`, then removes the temporary `dist-ssr/` output. |
| `package.json` | edit | `build` script becomes a chain: `tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs`. |
| `src/main.tsx` | edit | Use `hydrateRoot` when `#root` already has prerendered markup (the `/` case), `createRoot` otherwise (every other route, and local `bun run dev`, both land on an empty `#root`). |
| `netlify.toml` | edit | Add a `/app*` → `/app.html` redirect (status 200) before the existing catch-all, so every game route keeps serving the plain, un-prerendered shell. |
| `.gitignore` | edit | Add `dist-ssr` next to the existing `dist` entry — it's a temporary build artifact, never committed. |
| `.ai/agents/context.md` | edit | Document the new build step under "Deployment" and add a "Known gotchas" entry (see Spec changes below). |

---

## Spec changes

### `.ai/agents/context.md`

Under **Deployment**, replace the current single-paragraph description with:

> Netlify: `bun run build` → `dist/`. The build runs in three stages: (1) `tsc -b && vite build` produces the normal SPA client bundle, (2) `vite build --ssr src/entry-server.tsx --outDir dist-ssr` renders the landing page's component tree to a small Node-runnable bundle, (3) `scripts/prerender.mjs` calls that bundle's `renderLandingPage()`, copies the plain built shell to `dist/app.html` (used for every `/app/*` route), injects the rendered landing HTML into `dist/index.html`'s `#root`, and deletes the temporary `dist-ssr/` folder. `netlify.toml` routes `/app*` to `app.html` and everything else to `index.html`, so `/` gets real markup on first paint while `/app/*` stays a plain SPA shell. No environment variables needed.

Add to **Known gotchas**:

> - The landing page (`/`) is prerendered at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`) via `renderToString` — no framework, no new dependency. Anything reachable from `LandingScreen`'s render tree must stay safe to render in Node: no `window`/`document`/`localStorage` read synchronously during render (guard it behind a mount-only `useEffect`, as `LanguageProvider`'s initial-language detection and `LandingRoute`'s `hasProgress` check already do) — a `ReferenceError` there fails the whole `bun run build`. `main.tsx` picks `hydrateRoot` vs `createRoot` based on whether `#root` already has markup, so this only matters for the exact tree rendered by `entry-server.tsx`.
> - `bun run preview` and `bun run dev` don't know about `netlify.toml`'s redirects — visiting a deep `/app/...` URL directly under `bun run preview` will briefly show the prerendered landing markup before React replaces it with the real route (Vite's generic SPA fallback always serves `dist/index.html`, never `dist/app.html`). This only resolves correctly on Netlify itself; it isn't a regression to chase locally.

---

## Implementation steps

1. In `src/i18n/LanguageProvider.tsx`: change `useState<Language>(getInitialLanguage)` to `useState<Language>('en')`. Add a `useEffect(() => { const detected = getInitialLanguage(); setLanguageState(prev => (detected !== prev ? detected : prev)) }, [])` that runs once on mount. Do not call `localStorage.setItem` from this effect — only the existing explicit `setLanguage` (user clicking EN/ID) persists a choice; silently adopting the detected/stored language on load must not itself write anything.
2. In `src/App.tsx`, update `LandingRoute`: replace the inline `const hasProgress = progress.xp > 0 || progress.totalStars > 0` with a `useState(false)` plus a `useEffect(() => { setHasProgress(progress.xp > 0 || progress.totalStars > 0) }, [progress.xp, progress.totalStars])`, and pass that state to `<LandingScreen hasProgress={...} />`.
3. Create `src/entry-server.tsx`:
   ```tsx
   import { renderToString } from 'react-dom/server'
   import { LanguageProvider } from './i18n/LanguageProvider'
   import { LandingScreen } from './screens/LandingScreen'

   export function renderLandingPage(): string {
     return renderToString(
       <LanguageProvider>
         <LandingScreen onStart={() => {}} hasProgress={false} />
       </LanguageProvider>,
     )
   }
   ```
4. Create `scripts/prerender.mjs` (plain Node ESM, mirroring the style of `scripts/audit-thinking-lessons.mjs`):
   - Dynamically `import()` the SSR build's output from `dist-ssr/` (confirm the exact emitted filename after step 6 runs once — Vite names it after the entry by default, e.g. `dist-ssr/entry-server.js`; adjust the import path to whatever is actually emitted rather than assuming).
   - Call `renderLandingPage()` to get the HTML string.
   - Read `dist/index.html`, write an unmodified copy to `dist/app.html` **before** mutating it.
   - Replace the empty `<div id="root"></div>` in the `index.html` contents with `<div id="root">${html}</div>` (exact string match against the built shell's actual markup — check what Vite emits, it should be unchanged from the source `index.html`'s `<div id="root"></div>`).
   - Write the mutated contents back to `dist/index.html`.
   - `rm -rf` the `dist-ssr` directory.
   - Fail loudly (non-zero exit) if any step fails — this runs inside `bun run build`, which must keep satisfying INV-C3.
5. Update `package.json`'s `build` script to:
   `"tsc -b && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs"`
6. Run `bun run build` and inspect the real output filename under `dist-ssr/` before finalizing step 4's import path (Vite's SSR-build output naming can vary by version/format — verify rather than guess).
7. In `src/main.tsx`: import `hydrateRoot` alongside `createRoot` from `react-dom/client`. Build the `<StrictMode><BrowserRouter><App /></BrowserRouter></StrictMode>` element once, then: if `document.getElementById('root')!.hasChildNodes()`, call `hydrateRoot(container, app)`; otherwise `createRoot(container).render(app)`.
8. In `netlify.toml`, add before the existing catch-all redirect:
   ```toml
   [[redirects]]
     from = "/app*"
     to = "/app.html"
     status = 200
   ```
9. Add `dist-ssr` to `.gitignore` next to the existing `dist` line.
10. Apply the `.ai/agents/context.md` spec changes drafted above.
11. Run `bunx biome ci`, `bun run type-check`, and `bun run build` — all three must pass with zero errors (see `.ai/harness/rules.md` verification gate).
12. Manually sanity-check the built output: open `dist/index.html` in a text viewer and confirm `#root` now contains real landing-page markup (headline text, world names, etc.), and confirm `dist/app.html` still has an empty `#root`.
13. If a local static server is available, serve `dist/` and spot-check: `/` shows the landing page correctly and is interactive (language toggle, CTA button); a route under `/app/...` still loads correctly when Netlify-style redirects are honored (or note in implementation notes if this could only be verified by reasoning about the config, not by running it, since `bun run preview`/`vite dev` don't apply `netlify.toml`).

---

## Rollback

Revert the commit. `netlify.toml` reverts to a single catch-all redirect, `package.json`'s `build` script reverts to `tsc -b && vite build`, and `dist/app.html` simply stops being produced. No localStorage schema or key changed, so no migration is needed — `LanguageProvider` and `LandingRoute` behave exactly as before once their effects are removed (the one-frame defer-to-`useEffect` change is itself also safe to leave in place independently, if a partial rollback is ever wanted).

---

## Review notes

{Filled in by reviewer-code during plan review stage.}

---

## Implementation notes

{Filled in by builder after implementation.}
