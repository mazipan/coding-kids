# Plan: Static-generate the landing page (`/`)

**Slug:** `feat-static-landing-page-prerender`
**Date:** 2026-08-29
**Status:** done

---

## Request

> we are currently running full spa application, but for landing page, seems better to be statically generated, can remove dynamic feature check if needed.
> do you think we can start for static generated without need to do too much changes

---

## Decision

Add a build-time prerender step that renders `LandingScreen` to static HTML and injects it into `dist/index.html`, so `/` paints real content before any JS runs (better first paint, better for crawlers/no-JS). `/app/*` keeps working exactly as an SPA today — it gets a second, unmodified copy of the shell (`dist/app.html`) via a new Netlify redirect, so the prerendered landing markup never collides with the game routes. No new npm dependency: `react-dom/server`'s `renderToString` and a one-off `vite build --ssr` of a tiny new entry file do the whole job.

The two "dynamic feature checks" blocking a clean prerender are the landing page's initial language (read from `localStorage`/`navigator.language` synchronously at first render) and its `hasProgress` returning-player check (read from the progress store at first render). Both must resolve identically in Node (no `localStorage`) and in the browser's very first paint (before hydration), or React logs a hydration mismatch.

`hasProgress` is scoped to `LandingRoute` alone, so it simply starts `false` and corrects itself via a mount-only `useEffect` — a one-frame flash for a returning player, invisible in practice.

`LanguageProvider` is not scoped the same way: it wraps the entire route tree once, at the top of `App()`, so it also governs every fresh `/app/*` load (a refresh, a bookmark, a shared deep link) — none of which are prerendered or benefit from this change. Forcing its initial state to `'en'` unconditionally would add a language-flash to every one of those loads, which fails the persona check in `.ai/harness/rules.md` (a recurring flash on every game-route reload is a real regression for an impatient 8-year-old, not a one-time landing-page trade-off). So the default synchronous `getInitialLanguage()` initializer stays exactly as it is today for the normal `createRoot` path. Only the hydration path — rendering prerendered markup at `/` — forces `'en'` and self-corrects. `main.tsx` already knows which path it's on (`#root` has children only when hydrating prerendered markup), so that single boolean is threaded down through `App` into `LanguageProvider` as a prop, rather than changing the provider's default behavior.

A third mismatch risk surfaced in review: `Footer` renders `__BUILD_DATE__` (a `vite.config.ts` `define` value computed as `new Date().toISOString()` at config-load time), and it sits inside the prerendered tree. The plan's build chain invokes `vite build` (client) and `vite build --ssr src/entry-server.tsx` (SSR) as two separate process invocations, each of which would otherwise compute its own timestamp — any run that straddles a UTC minute boundary produces a genuine text-content hydration mismatch on `/`. The two invocations now share one timestamp via an env var set once before both run.

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
| `src/i18n/LanguageProvider.tsx` | edit | Accepts an optional `forcedInitialLanguage` prop; when set, `useState` starts from it instead of `getInitialLanguage()`, and a mount-only `useEffect` re-detects and self-corrects. When unset (the normal, non-hydrating path), behavior is unchanged from today. |
| `src/App.tsx` | edit | `App` accepts an `isHydrating?: boolean` prop and passes `forcedInitialLanguage={isHydrating ? 'en' : undefined}` to `LanguageProvider`. `LandingRoute`: `hasProgress` starts `false`, corrected in a mount-only `useEffect` once `useProgress()` has loaded. |
| `src/entry-server.tsx` | add | SSR entry: exports `renderLandingPage(): string`, renders `<LanguageProvider forcedInitialLanguage="en"><LandingScreen onStart={noop} hasProgress={false} /></LanguageProvider>` via `renderToString`. |
| `scripts/prerender.mjs` | add | Node script run after both builds: copies the built `dist/index.html` to `dist/app.html` (untouched SPA shell for `/app/*`), then injects the SSR output into `dist/index.html`'s `<div id="root">`, then removes the temporary `dist-ssr/` output. |
| `package.json` | edit | `build` script becomes a chain that computes one shared `BUILD_DATE` env var and exports it before both Vite invocations: `tsc -b && export BUILD_DATE=$(date -u +%Y-%m-%dT%H:%M:%S.000Z) && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs`. |
| `vite.config.ts` | edit | `define.__BUILD_DATE__` reads `process.env.BUILD_DATE ?? new Date().toISOString()` instead of always computing a fresh timestamp, so both build invocations agree. |
| `src/main.tsx` | edit | Compute `isHydrating = document.getElementById('root')!.hasChildNodes()` once; use `hydrateRoot` and pass `isHydrating={true}` into `<App />` when true (the `/` case), `createRoot` and `isHydrating={false}` otherwise (every other route, and local `bun run dev`, both land on an empty `#root`). |
| `netlify.toml` | edit | Add a `/app*` → `/app.html` redirect (status 200) before the existing catch-all, so every game route keeps serving the plain, un-prerendered shell. |
| `.gitignore` | edit | Add `dist-ssr` next to the existing `dist` entry — it's a temporary build artifact, never committed. |
| `.ai/agents/context.md` | edit | Document the new build step under "Deployment" and add a "Known gotchas" entry (see Spec changes below). |

---

## Spec changes

### `.ai/agents/context.md`

Under **Deployment**, replace the current single-paragraph description with:

> Netlify: `bun run build` → `dist/`. The build runs in three stages: (1) `tsc -b && vite build` produces the normal SPA client bundle, (2) `vite build --ssr src/entry-server.tsx --outDir dist-ssr` renders the landing page's component tree to a small Node-runnable bundle, (3) `scripts/prerender.mjs` calls that bundle's `renderLandingPage()`, copies the plain built shell to `dist/app.html` (used for every `/app/*` route), injects the rendered landing HTML into `dist/index.html`'s `#root`, and deletes the temporary `dist-ssr/` folder. `netlify.toml` routes `/app*` to `app.html` and everything else to `index.html`, so `/` gets real markup on first paint while `/app/*` stays a plain SPA shell. No environment variables needed.

Add to **Known gotchas**:

> - The landing page (`/`) is prerendered at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`) via `renderToString` — no framework, no new dependency. Anything reachable from `LandingScreen`'s render tree must stay safe to render in Node: no `window`/`document`/`localStorage` read synchronously during render. `main.tsx` picks `hydrateRoot` vs `createRoot` based on whether `#root` already has markup, and threads that same signal into `App`'s `isHydrating` prop — `LanguageProvider` only forces a fixed initial language (and self-corrects via `useEffect`) when hydrating; every normal `createRoot` load (all of `/app/*`, `bun run dev`) keeps the original synchronous, no-flash `getInitialLanguage()` behavior. Don't widen a prerender-only workaround into the provider's default path. `Footer`'s `__BUILD_DATE__`/`__COMMIT_SHA__` are `vite.config.ts` `define` values baked in at build time — `__BUILD_DATE__` is read from a `BUILD_DATE` env var set once and shared across both the client and SSR `vite build` invocations (see the `build` script) specifically so the prerendered and client-hydrated trees agree; if a future change adds another `define` value reachable from the landing tree, it needs the same treatment or it'll intermittently fail hydration.
> - `bun run preview` and `bun run dev` don't know about `netlify.toml`'s redirects — visiting a deep `/app/...` URL directly under `bun run preview` will briefly show the prerendered landing markup before React replaces it with the real route (Vite's generic SPA fallback always serves `dist/index.html`, never `dist/app.html`). This only resolves correctly on Netlify itself; it isn't a regression to chase locally.

---

## Implementation steps

1. In `src/i18n/LanguageProvider.tsx`: add an optional prop, `forcedInitialLanguage?: Language`, to `LanguageProvider`. Change the initializer to `useState<Language>(() => forcedInitialLanguage ?? getInitialLanguage())`. Add `useEffect(() => { if (forcedInitialLanguage === undefined) return; const detected = getInitialLanguage(); setLanguageState(prev => (detected !== prev ? detected : prev)) }, [])` — this only runs (and only differs from today's behavior) when a caller explicitly forces an initial value, i.e. only on the hydration path. Do not call `localStorage.setItem` from this effect — only the existing explicit `setLanguage` (user clicking EN/ID) persists a choice; silently adopting the detected/stored language on load must not itself write anything.
2. In `src/App.tsx`: add `isHydrating?: boolean` to `App`'s props and pass `forcedInitialLanguage={isHydrating ? 'en' : undefined}` to `<LanguageProvider>`. Update `LandingRoute`: replace the inline `const hasProgress = progress.xp > 0 || progress.totalStars > 0` with a `useState(false)` plus a `useEffect(() => { setHasProgress(progress.xp > 0 || progress.totalStars > 0) }, [progress.xp, progress.totalStars])`, and pass that state to `<LandingScreen hasProgress={...} />`.
3. Create `src/entry-server.tsx`:
   ```tsx
   import { renderToString } from 'react-dom/server'
   import { LanguageProvider } from './i18n/LanguageProvider'
   import { LandingScreen } from './screens/LandingScreen'

   export function renderLandingPage(): string {
     return renderToString(
       <LanguageProvider forcedInitialLanguage="en">
         <LandingScreen onStart={() => {}} hasProgress={false} />
       </LanguageProvider>,
     )
   }
   ```
4. In `vite.config.ts`, change `__BUILD_DATE__: JSON.stringify(new Date().toISOString())` to `__BUILD_DATE__: JSON.stringify(process.env.BUILD_DATE ?? new Date().toISOString())` — falls back to today's behavior for `bun run dev` and any build that doesn't set the env var, but lets the `build` script pin one value across both Vite invocations.
5. Create `scripts/prerender.mjs` (plain Node ESM, mirroring the style of `scripts/audit-thinking-lessons.mjs`):
   - Dynamically `import()` the SSR build's output from `dist-ssr/` (confirm the exact emitted filename after step 7 runs once — Vite names it after the entry by default, e.g. `dist-ssr/entry-server.js`; adjust the import path to whatever is actually emitted rather than assuming).
   - Call `renderLandingPage()` to get the HTML string.
   - Read `dist/index.html`, write an unmodified copy to `dist/app.html` **before** mutating it.
   - Replace the empty `<div id="root"></div>` in the `index.html` contents with `<div id="root">${html}</div>` (exact string match against the built shell's actual markup — check what Vite emits, it should be unchanged from the source `index.html`'s `<div id="root"></div>`).
   - Write the mutated contents back to `dist/index.html`.
   - `rm -rf` the `dist-ssr` directory.
   - Fail loudly (non-zero exit) if any step fails — this runs inside `bun run build`, which must keep satisfying INV-C3.
6. Update `package.json`'s `build` script to:
   `"tsc -b && export BUILD_DATE=$(date -u +%Y-%m-%dT%H:%M:%S.000Z) && vite build && vite build --ssr src/entry-server.tsx --outDir dist-ssr && node scripts/prerender.mjs"`
   (the `export` makes `BUILD_DATE` visible to every subsequent command in the same shell invocation, so both Vite builds see the identical timestamp).
7. Run `bun run build` and inspect the real output filename under `dist-ssr/` before finalizing step 5's import path (Vite's SSR-build output naming can vary by version/format — verify rather than guess).
8. In `src/main.tsx`: import `hydrateRoot` alongside `createRoot` from `react-dom/client`. Compute `const isHydrating = document.getElementById('root')!.hasChildNodes()` once, build `<StrictMode><BrowserRouter><App isHydrating={isHydrating} /></BrowserRouter></StrictMode>`, then: if `isHydrating`, call `hydrateRoot(container, app)`; otherwise `createRoot(container).render(app)`.
9. In `netlify.toml`, add before the existing catch-all redirect:
   ```toml
   [[redirects]]
     from = "/app*"
     to = "/app.html"
     status = 200
   ```
10. Add `dist-ssr` to `.gitignore` next to the existing `dist` line.
11. Apply the `.ai/agents/context.md` spec changes drafted above.
12. Run `bunx biome ci`, `bun run type-check`, and `bun run build` — all three must pass with zero errors (see `.ai/harness/rules.md` verification gate).
13. Manually sanity-check the built output: open `dist/index.html` in a text viewer and confirm `#root` now contains real landing-page markup (headline text, world names, etc.), and confirm `dist/app.html` still has an empty `#root`. Confirm the `__BUILD_DATE__` text embedded in `dist/index.html`'s prerendered `#root` matches the `__BUILD_DATE__` baked into the client bundle's footer-rendering code (both should trace back to the same `BUILD_DATE` value).
14. If a local static server is available, serve `dist/` and spot-check: `/` shows the landing page correctly and is interactive (language toggle, CTA button), and switching languages still works and still persists (unaffected by `forcedInitialLanguage`, which only applies to the very first render pass). A route under `/app/...` still loads correctly when Netlify-style redirects are honored (or note in implementation notes if this could only be verified by reasoning about the config, not by running it, since `bun run preview`/`vite dev` don't apply `netlify.toml`).

---

## Rollback

Revert the commit. `netlify.toml` reverts to a single catch-all redirect, `package.json`'s `build` script reverts to `tsc -b && vite build`, and `dist/app.html` simply stops being produced. No localStorage schema or key changed, so no migration is needed — `LanguageProvider` and `LandingRoute` behave exactly as before once their effects are removed (the one-frame defer-to-`useEffect` change is itself also safe to leave in place independently, if a partial rollback is ever wanted).

---

## Review notes

Independent plan review (2026-08-29) returned **NEEDS-CHANGES** with two findings, both addressed in this revision:

1. **`LanguageProvider` scope leak.** The original plan forced `LanguageProvider`'s initial state to `'en'` unconditionally, but the provider wraps the entire route tree, not just the landing page — this would have added a language-flash-then-correct to every fresh `/app/*` load (refresh, bookmark, deep link), none of which are prerendered or benefit from the change. Fixed by adding an opt-in `forcedInitialLanguage` prop, threaded from `main.tsx`'s existing `isHydrating` check through `App` and only set on the actual hydration path. Every `createRoot` load keeps today's exact synchronous, no-flash behavior.
2. **`__BUILD_DATE__` hydration mismatch.** `vite.config.ts`'s `define.__BUILD_DATE__` recomputes `new Date().toISOString()` on every config load; the plan's two separate `vite build` invocations (client, then `--ssr`) could disagree if they straddle a UTC minute boundary, and `Footer` (inside the prerendered tree) renders that value as text — a genuine, if rare, hydration mismatch. Fixed by computing the timestamp once via a `BUILD_DATE` env var exported before both invocations in the `build` script, with `vite.config.ts` falling back to `new Date().toISOString()` when the env var is absent (dev, and any other build path).

Everything else in the original review passed without changes: scope is bounded, no new dependency, `entry-server.tsx` rendering `LandingScreen` directly (not through `LandingRoute`/`useProgress()`) avoids a Node-side `localStorage` crash, `hasProgress`'s deferral is correctly scoped to `LandingRoute` alone, `renderToString`/`framer-motion`/`localize()` are SSR-safe as used here, building via `vite build --ssr` (vs. a plain Node import) correctly resolves `__COMMIT_SHA__`, and the `netlify.toml` `/app*` redirect ordering and pattern (matching bare `/app` too, unlike `/app/*`) is correct.

Status: **approved**.

---

## Implementation notes

Implemented all 14 steps as planned, with one addition discovered during implementation:

- **`public/_redirects` removed (deviation, not in original plan).** The repo carried a pre-existing `public/_redirects` file (`/* /index.html 200`, added in an unrelated 2026-08-01 dependency-upgrade commit) that Netlify copies into `dist/` alongside `netlify.toml`'s redirects. Netlify does not clearly guarantee that `netlify.toml` redirects run *before* a `_redirects` file's catch-all — if the `_redirects` catch-all is evaluated first, it would match every path (including `/app/*`) and serve `dist/index.html` unconditionally, silently defeating the new `/app*` → `/app.html` split from step 9. Since `netlify.toml` already fully subsumes what `_redirects` did, the safest fix was to delete the redundant file rather than depend on undocumented cross-source precedence. Documented in `.ai/agents/context.md`'s Deployment section so a future change doesn't reintroduce it.
- `vite build --ssr src/entry-server.tsx --outDir dist-ssr` emits `dist-ssr/entry-server.js` (a real ESM bundle, `react`/`react-dom`/`framer-motion`/etc. left external per Vite's SSR default) — confirmed by running it once before writing `scripts/prerender.mjs`, per the plan's own caution not to assume the filename.
- Verified end-to-end in a real browser (headless Chromium via CDP): `bun run build`'s output hydrates with zero console errors/warnings and zero exceptions; the language toggle and the CTA's client-side navigation to `/app` both work correctly post-hydration. Confirmed `dist/index.html`'s `#root` contains real landing markup and `dist/app.html`'s `#root` is empty, and that the `__BUILD_DATE__` text baked into the prerendered HTML matches the client bundle's.
  - Note for future debugging: most of the verification time on this task went into chasing an apparent hydration bug (duplicated DOM under `#root`) that turned out to be entirely caused by stale/reused local test-server ports in this sandbox, not the shipped code — confirmed by re-running the identical build on freshly-verified ports and getting a clean result every time. If a future agent sees mysterious duplicate content while testing locally, kill and verify port state before suspecting the hydration logic itself.
- All three verification commands pass (`bunx biome ci`, `bun run type-check`, `bun run build`), and `bun test` passes unchanged (304 pass / 8 skip, pre-existing skips unrelated to this change).
- Post-merge follow-up: added a "Landing page prerendering" entry to `.ai/decisions/architecture.md` (the one-off ADR log) alongside "React Router v7", since this is an architecture-level shift for the project (first departure from pure client-only rendering) and belongs there, not just in the timestamped decision log.
