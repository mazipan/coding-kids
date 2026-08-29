# 2026-08-29 — Prerender the landing page via a manual `vite build --ssr` step, not a plugin

**Context:** The app is a fully client-rendered SPA (`BrowserRouter`, one shared `dist/index.html`
served for every route). The landing page (`/`) is pure marketing content with no per-user data
needed for its first paint, so it was flagged as a good candidate for static generation — better
first paint, better for crawlers and no-JS visits — while `/app/*` stays a normal SPA (it's
inherently interactive: Blockly, the game grid, localStorage-backed progress).

**Decision:** Add `src/entry-server.tsx`, a tiny SSR entry exporting `renderLandingPage()` that
calls `react-dom/server`'s `renderToString` on `<LanguageProvider><LandingScreen .../></LanguageProvider>`.
Build it with Vite's own `--ssr` flag (`vite build --ssr src/entry-server.tsx --outDir dist-ssr`) —
this reuses the project's existing `vite.config.ts` (including the `__COMMIT_SHA__`/`__BUILD_DATE__`
`define` values that `Footer.tsx` needs, which a plain Node/Bun import of the `.tsx` file would not
get). A new `scripts/prerender.mjs` then splits the single built shell into two files: `dist/app.html`
(the plain, untouched SPA shell — copied before mutation) for every `/app/*` route, and `dist/index.html`
with the rendered landing markup injected into `#root`, for `/`. `netlify.toml` gets one new redirect
(`/app* → /app.html`) ahead of the existing catch-all so the two never collide. `src/main.tsx` picks
`hydrateRoot` vs `createRoot` based on whether `#root` already has markup, so every non-`/` entry point
(including local `bun run dev`) is unaffected.

Two existing "dynamic feature checks" had to change to make the landing tree safe to render in Node
and hydrate without a mismatch: `LanguageProvider`'s initial-language detection
(`localStorage`/`navigator.language`, read synchronously in a `useState` initializer) and `LandingRoute`'s
`hasProgress` returning-player check (read from the progress store at first render). `hasProgress` is
scoped to `LandingRoute` alone, so it simply starts `false` and self-corrects in a mount-only `useEffect`.
`LanguageProvider` is not scoped the same way — it wraps the whole route tree once, so forcing its
default to `'en'` would have added a language-flash to every `/app/*` reload, not just the prerendered
`/` page. An independent plan review caught this; the fix threads `main.tsx`'s existing
`hasChildNodes()`-derived `isHydrating` flag down through `App` into an opt-in `forcedInitialLanguage`
prop, so only the actual hydration path forces and self-corrects a fixed initial language — every normal
`createRoot` load keeps its original synchronous, no-flash behavior. The same review also caught that
`Footer`'s `__BUILD_DATE__` (a `vite.config.ts` `define` value recomputed at each config load) could
disagree between the plan's two separate `vite build` invocations (client, then `--ssr`) if they straddle
a UTC minute boundary — fixed by computing that timestamp once via a `BUILD_DATE` env var shared across
both invocations.

**Alternatives rejected:**
- A prerendering plugin (`vite-plugin-ssg`, `vite-plugin-prerender-spa`, etc.) — pulls in a new
  dependency (against `.ai/harness/rules.md`'s "no new dependency without a plan" constraint) to do
  something `react-dom/server` + Vite's own `--ssr` build already does, for a codebase with exactly
  one route that needs prerendering.
- Headless-Chromium snapshotting of `/` at build time — would need a browser binary in Netlify's build
  image just to screenshot one page to HTML; slow and fragile compared to `renderToString`.
- True SSR (a server or serverless function rendering every request) — violates the static-only, no-backend
  architecture (`.ai/decisions/architecture.md`, `.ai/harness/rules.md` hard constraints).
- Injecting the prerendered markup into the *same* `dist/index.html` used for every route (no `app.html`
  split) — Netlify's catch-all already serves that one file for every unmatched path; without the split,
  a direct visit to e.g. `/app/blocks` would briefly show the landing page's DOM before React discards
  and replaces it — a worse regression than today's blank-then-render.

**Consequences:** `bun run build` (and therefore Netlify's build, which runs the same script) gains two
extra steps (an SSR build of one small entry, then a Node script) and a temporary `dist-ssr/` artifact
that's deleted before the build finishes and is gitignored. Any future change to `LandingScreen`'s render
tree (or anything it imports) must stay safe to render in Node — no synchronous `window`/`document`/
`localStorage` reads during render — documented as a new "Known gotchas" entry in
`.ai/agents/context.md`. `bun run preview`/`bun run dev` don't apply `netlify.toml`'s redirects, so a
deep `/app/...` URL loaded directly under `bun run preview` can briefly flash the prerendered landing
markup before React replaces it — a known, accepted local-tooling gap that resolves correctly on Netlify
itself.
