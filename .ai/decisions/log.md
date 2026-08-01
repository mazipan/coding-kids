# Decision log

## 2026-08-01 — Upgraded all dependencies to latest majors

**Context:** `bun outdated` showed React, Vite, Tailwind, TypeScript, Blockly, and framer-motion all sitting one or more majors behind. User asked to upgrade everything rather than defer the majors indefinitely.

**Decision:** Bumped every dependency to latest: React 18→19, Vite 5→8, `@vitejs/plugin-react` 4→6, Tailwind 3→4, TypeScript 5→7 (the native-compiler rewrite, not a beta — `latest` dist-tag), Blockly 10→13, framer-motion 11→12. `react-router-dom`, `lucide-react`, `react-aria-components`, `lefthook`, and `biome` were already at latest.

**Fallout fixed to keep the build green:**
- Tailwind v4 moved PostCSS integration to a separate `@tailwindcss/postcss` package (dropped `autoprefixer`, now built in) and CSS entry changed from three `@tailwind` directives to `@import 'tailwindcss'`. Kept `tailwind.config.js` unchanged and bridged it in via `@config '../tailwind.config.js'` in `src/index.css` rather than rewriting theme.extend as CSS-first `@theme` — lower risk, identical values, and avoided colliding with the hand-written `--color-*` custom properties already in `:root` for React Aria.
- Vite 8 vendors **rolldown** (its Rust bundler) instead of JS Rollup for `RollupOptions` types. Rolldown's `manualChunks` only accepts the function form, not the `Record<string, string[]>` object form Rollup allowed — `vite.config.ts` was rewritten from an object literal to an equivalent `(id) => ...` function.
- TypeScript 7 (strict) now rejects a side-effect `import './index.css'` with no ambient module declaration — the project never had a `src/vite-env.d.ts`; added the standard `/// <reference types="vite/client" />` file.

**Alternatives rejected:**
- Minor/patch-only bump — leaves known majors unaddressed indefinitely and was explicitly not what was asked.
- Full Tailwind v4 CSS-first config rewrite (`@theme` block) — more idiomatic long-term, but riskier for this pass since it would require renaming/deduplicating against the existing manual `:root` custom properties; deferred to a future dedicated pass if desired.

**Consequences:** No product-facing behavior changed (verified: landing page, world map, and a lesson's Blockly toolbox/flyout/code-gen all render correctly with zero console errors post-upgrade). Future Vite config changes must use the rolldown-style function `manualChunks`, not the Rollup object form. Future Tailwind theme edits go through `tailwind.config.js` as before (still bridged via `@config`), not CSS `@theme`.

---

## 2026-08-01 — react-aria-components for accessible Dialog; shadcn deferred

**Context:** User asked about shadcn / React Aria. shadcn now has a React Aria registry, but the codebase is Tailwind-first with hand-styled components.

**Decision:** Install `react-aria-components` directly (the single-package distribution). Use `ModalOverlay + Modal + Dialog` to replace the DIY overlay in `RewardModal.tsx`. No shadcn scaffolding layer — RAC primitives are styled with the existing Tailwind classes.

**Alternatives rejected:**
- Full shadcn init + generated files — we'd own files we don't need to change; direct RAC usage is simpler.
- Tabs in LessonScreen — desktop needs both panels visible simultaneously, but `TabPanel` marks non-selected panels `aria-hidden`, which would hide visible content from screen readers. Deferred until layout is reconsidered.
- RAC Button — existing `<button>` elements are already semantically correct; marginal win not worth the churn.

**Consequences:** `RewardModal` now has proper focus trap, `aria-modal`, and body-scroll lock. CSS custom property brand tokens added to `index.css` as prep for future shadcn token mapping. Bundle grows ~54 kB (RAC focus utilities).

---

## 2026-08-01 — Plus Jakarta Sans for landing page; Nunito retained for game UI

**Context:** User requested a professional redesign that avoids a "newbie vibe." The existing Nunito font is rounded and playful — good for kids game UI, wrong signal for a marketing page targeting parents/teachers.

**Decision:** Load Plus Jakarta Sans (weights 400–800) alongside Nunito in `index.html`. Apply `font-family: 'Plus Jakarta Sans'` via an inline style on the `LandingScreen` root div, leaving `body { font-family: Nunito }` unchanged for the game.

**Alternatives rejected:**
- Replace body font globally — would break the kid-friendly tone of the game UI.
- Use a Tailwind `font-jakarta` class on the root div — this works but inline style is slightly more explicit that the override is intentional and scoped to LandingScreen only.

**Consequences:** Landing page feels professional; game preserves its playful character. Any future standalone marketing pages should also opt in to `Plus Jakarta Sans`.

---

## 2026-08-01 — lucide-react for landing page icons

**Context:** Feature cards and "how it works" steps had emoji icons which look inconsistent with a professional layout; user asked for SVG icons in some places.

**Decision:** Add `lucide-react` (tree-shakeable, zero-config, MIT). Use it on the landing page only — feature cards (MousePointerClick, Trophy, Globe, Smartphone) and step icons (Map, Grip, Zap). Emoji retained for world mascots, reward modal, and any kid-facing content where emoji energy is appropriate.

**Alternatives rejected:**
- Heroicons — also good, but lucide-react is more consistently maintained and has a slightly larger icon set.
- Hand-crafted inline SVGs — adds maintenance burden; lucide-react is negligible bundle cost given tree-shaking.

**Consequences:** Landing page icons are sharp and consistent. New icons must come from lucide-react (not a second icon library) to maintain visual consistency.

---

## 2026-08-01 — SVG </> favicon replacing emoji rocket

**Context:** The old favicon was `🚀` as a Unicode emoji, which renders inconsistently across platforms and doesn't represent the "coding" brand.

**Decision:** Replace with a custom inline SVG data URI: the same `</>` logo used in the nav, encoded as a URL-safe data URI in `index.html`.

**Alternatives rejected:**
- A separate `public/favicon.svg` file — works, but the data URI keeps everything self-contained in the HTML without an extra file.

**Consequences:** Consistent, on-brand favicon across all platforms. The gradient (purple→pink) also serves as a distinctive tab icon.

---

Running record of significant decisions. Add an entry whenever a non-obvious choice is made during planning or review. Most recent first.

Format:
```
## YYYY-MM-DD — {title}
**Context:** {what situation prompted this decision}
**Decision:** {what was decided}
**Alternatives rejected:** {what else was considered and why it lost}
**Consequences:** {what this decision makes easier or harder going forward}
```

---

## 2026-08-01 — Separate .ai/ directory for AI context

**Context:** The single `agents.md` file was growing unwieldy as we added personas, store specs, decisions, and harness prompts.

**Decision:** Split into a structured `.ai/` directory with subdirectories for `agents/`, `decisions/`, `specs/`, `harness/`, and `plans/`. `CLAUDE.md` imports the most essential files; the rest are linked from `agents.md`.

**Alternatives rejected:**
- Keep everything in `agents.md` — too long, hard to navigate, merge conflicts on every change.
- Use separate top-level files (`PERSONAS.md`, `SPECS.md`, etc.) — no hierarchy, harder to reason about ownership.

**Consequences:** Each concern has a clear home. Plans, specs, and decisions are independently versioned. New agents can be defined without touching existing files.

---

## 2026-08-01 — React Router v7 (declarative API)

**Context:** We needed `/` for the landing page and `/app` for the game with SPA fallback on Netlify.

**Decision:** Install React Router v7, use the legacy declarative `BrowserRouter` + `Routes` + `Route` API (v6-style) rather than the new data router API.

**Alternatives rejected:**
- Manual `window.history.pushState` + `popstate` listener — works but fragile; no nested route support if needed later.
- Hash routing (`/#/app`) — works without a server redirect but ugly URLs and bad for SEO/sharing.
- React Router v7 data router API — adds loader/action complexity we don't need for two routes.

**Consequences:** Clean URLs, Netlify SPA redirect handles hard refresh on `/app`. Upgrading to the data router API later is straightforward since the component tree is already route-aware.

---

## 2026-08-01 — localStorage over IndexedDB for progress

**Context:** User progress (XP, stars, completed lessons) needs to survive page refreshes without a backend.

**Decision:** `localStorage` with a `_v1` versioned key.

**Alternatives rejected:**
- IndexedDB — async API adds complexity for data that is < 5 KB; no meaningful benefit at this scale.
- Cookies — server round-trip or CORS config required; size-limited; incompatible with pure static hosting.
- Remote database — violates the static-only constraint and introduces privacy concerns.

**Consequences:** Progress is device-local. Cross-device sync is impossible without a backend. Acceptable for v1.

---

## 2026-08-01 — Bilingual EN/ID via flat-key translations

**Context:** The app targets Indonesian children (primary market) but should also work in English.

**Decision:** Flat-key translation object (`Record<string, string>`) with `{var}` template substitution. Auto-detect Indonesian via `navigator.language.startsWith('id')`. Persist choice to localStorage.

**Alternatives rejected:**
- i18next / react-i18next — adds a dependency and abstractions for a two-language app with simple strings.
- URL-based locale (`/id/app`) — routing complexity for no user benefit; locale is a preference not an identity.

**Consequences:** Adding a third language requires only a new key object in `translations.ts` and a toggle button update. The flat key structure means no namespacing collisions but requires discipline in key naming.

---

## 2026-08-01 — Static-only, no backend

**Context:** Platform design decision made at project start.

**Decision:** The app is a pure static file bundle. No API server, serverless functions, or database.

**Alternatives rejected:**
- Serverless functions (Netlify Functions, Vercel Edge) — would enable leaderboards, cross-device sync, teacher dashboards. Rejected for v1: adds infrastructure, latency, and privacy obligations.
- Full-stack (Next.js, Remix) — unnecessary complexity for a client-side game.

**Consequences:** Zero hosting cost. No privacy risk. No user accounts possible. Cross-device sync and teacher dashboards are blocked until a backend is explicitly introduced (requires revisiting INV-P1, INV-P2, INV-C4).
