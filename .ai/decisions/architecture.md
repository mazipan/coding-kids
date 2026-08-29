# Architecture decisions

## Static-only, no backend

**Decision:** The app is a pure static bundle — no API server, no serverless functions, no database.

**Rationale:**
- Zero hosting cost and zero infrastructure to maintain
- No privacy risk: nothing leaves the device
- No friction for users: no account, no email, no consent flow
- Works offline by default once cached

**Constraint this imposes:** Any feature that requires server-side state (cross-device sync, leaderboards, teacher dashboards) is out of scope until a backend is explicitly introduced.

---

## State machine routing inside /app

**Decision:** `HomeScreen` and `LessonScreen` are not separate URL routes. They share a React state object (`appState`) inside `GameApp`.

**Rationale:**
- Lesson state (current world, lesson ID) is transient — it doesn't need to survive a page refresh
- Keeping world/lesson selection as state avoids URL complexity (no `/app/world/jungle/lesson/1`)
- The only hard URL boundary that matters is landing (`/`) vs. game (`/app`)

**Where to change this:** If deep-linking to specific lessons becomes a requirement, lift `currentWorldId` and `currentLessonId` into URL search params (`/app?world=jungle&lesson=jungle-1`).

---

## Blockly resize on mobile

**Decision:** `BlocklyWorkspace` exposes `resize()` via `forwardRef` + `useImperativeHandle`. `LessonScreen` calls it inside `requestAnimationFrame` when switching back to the Blocks tab.

**Rationale:** Blockly measures its container's dimensions at injection time and when the workspace is resized. On mobile, the Blocks panel is hidden (`display: none` equivalent via Tailwind class toggle) while the Game tab is active. When Blocks becomes visible again, Blockly's stored dimensions are stale — `Blockly.svgResize(workspace)` forces a recalculation. The `requestAnimationFrame` delay ensures the DOM has painted before the measurement.

---

## Game engine sandboxing

**Decision:** `parseCodeToActions` uses `new Function(...)` with a closed set of exposed verbs and a hard action cap of `MAX_ACTIONS = 200`.

**Rationale:**
- Kids will write infinite loops. Capping actions prevents the UI from freezing.
- Only the five game verbs are exposed in scope — no `window`, `document`, `fetch`, etc. accessible from the block-generated code.
- `new Function` (not `eval`) runs in strict mode and doesn't have access to the surrounding closure.

---

## Web Audio API for sound

**Decision:** All sounds are synthesized via the Web Audio API. No audio files, no library.

**Rationale:**
- Zero network requests for assets
- Keeps the bundle small
- AudioContext is created lazily on first user interaction (browser requirement)

---

## React Router v7

**Decision:** React Router v7 is used for the `/` ↔ `/app` boundary. The older declarative `BrowserRouter` + `Routes` + `Route` API (v6-style) is used, not the new data router API.

**Rationale:**
- Only two real routes exist — a data router would be over-engineering
- v6-style API is simpler and has no loader/action complexity
- v7 is backward compatible with v6 declarative API

---

## Landing page prerendering

**Decision:** `/` is prerendered to static HTML at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`, via `react-dom/server`'s `renderToString` and a one-off `vite build --ssr` of that one entry). `/app/*` stays a pure client-rendered SPA, served from a separate `dist/app.html` shell via a `netlify.toml` `/app*` redirect, so the prerendered landing markup never collides with a game route.

**Rationale:**
- The landing page is pure marketing content with no per-user state needed for its first paint — real HTML on first byte beats a blank `#root` for crawlers, no-JS visits, and perceived load time.
- `/app/*` is inherently interactive (Blockly, the game grid, localStorage-backed progress) and gets no benefit from prerendering — full SSR of the whole app would add real complexity for zero payoff there.
- No new dependency: `react-dom/server` and Vite's own `--ssr` build flag do the whole job for the one route that needs it, versus pulling in a prerendering plugin or a headless-browser snapshot step.

**Constraint this imposes:** Anything reachable from `LandingScreen`'s render tree must stay safe to render in Node — no synchronous `window`/`document`/`localStorage` reads during render. `LanguageProvider` and the landing route's returning-player check defer their localStorage-derived state to a post-mount `useEffect`, and only on the actual hydration path (see `.ai/agents/context.md` → Known gotchas), specifically so the server-rendered and first-client-rendered trees agree and React doesn't hydration-mismatch. Full reasoning and the plan-review findings that shaped this are in `.ai/decisions/log/2026-08-29-04-prerender-landing-page-via-vite-ssr-build.md` and `2026-08-29-05-delete-redundant-public-redirects-file.md`.
