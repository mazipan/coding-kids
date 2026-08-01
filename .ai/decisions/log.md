# Decision log

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
