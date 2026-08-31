<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Persist language selection via `?lang=` search param

**Slug:** `feat-language-search-param`
**Date:** 2026-08-31
**Status:** done

---

## Request

> persist the language selection using search param, so we can share to other with exact language.
>
> e.g: ?lang=id for Indonesian, lang=en for English.

---

## Decision

Keep `localStorage` as the persistence mechanism for a returning visitor's language, but add the URL's `?lang=` query param as a higher-priority signal so a shared link always opens in the intended language, and keep the query string in sync with the active language so any URL a player is currently on is a faithful, shareable snapshot (including after they use the EN/ID toggle). The URL/state sync is implemented as a small router-aware component (`LanguageUrlSync`) rendered inside `App.tsx`, not inside `LanguageProvider` itself, so the prerendered-landing-page SSR path (`src/entry-server.tsx`, which renders `LanguageProvider` with no `<BrowserRouter>` ancestor) is untouched and cannot throw for missing router context.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Read/write `window.location`/`history.replaceState` directly inside `LanguageProvider` | Bypasses React Router's history abstraction — a raw `history.replaceState` call doesn't fire a `popstate` event, so `useLocation()`/`useSearchParams()` elsewhere in the tree can go stale relative to the real URL. Also would need `typeof window !== 'undefined'` guards sprinkled through the provider to stay SSR-safe, weakening the existing SSR-safety story documented in context.md. |
| Make `lang` the single source of truth (drop `localStorage`) | Breaks INV-C4-adjacent expectation that language is a sticky per-visitor preference; visiting `/app` after landing on a shared `?lang=id` link with no param present would silently forget the choice. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | Query param is local URL state only, never transmitted anywhere by the app. |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | no | |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | New file must type-check under strict mode; no `any`. |
| INV-C2 no hardcoded strings | no | No new user-visible copy. |
| INV-C3 build passes | yes | `bun run build` re-verified after the change. |
| INV-C4 localStorage only | no | `localStorage` remains the only persistence store; the URL param is transient browser state, not a new storage mechanism. |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/i18n/LanguageProvider.tsx` | edit | `getInitialLanguage()` also checks `?lang=` (highest priority, above `localStorage`). SSR path (`forcedInitialLanguage`) and the hydration self-correction effect are untouched in structure — both now benefit from the param check for free since they call the same function. |
| `src/i18n/LanguageUrlSync.tsx` | add | New component: `useSearchParams()` (react-router) — reads `?lang=` on mount/navigation and calls `setLanguage` when it disagrees with current state; writes the current `language` back into the query string (`replace: true`) whenever they drift apart. Router-context-only; not used by `entry-server.tsx`. |
| `src/App.tsx` | edit | Render `<LanguageUrlSync />` once, as a child of `<LanguageProvider>` and a sibling of `<Routes>`, so it's active on every route without being tied to a specific screen. |
| `.ai/specs/i18n.md` | edit | Document the `?lang=` param under "Language detection order" and note the sync behavior. |

---

## Spec changes

### `.ai/specs/i18n.md`

Replace the "Language detection order" section with:

```md
## Language detection order

1. `?lang=en` / `?lang=id` in the URL — an explicit, shareable override; always wins when present
2. `localStorage.getItem('codekids_language')` — user's explicit choice from a previous visit
3. `navigator.language.startsWith('id')` → `'id'`, else `'en'`
4. Default: `'en'`

Whenever the active language changes — via `setLanguage`, the toggle in `Header`, or a `?lang=`
override on load — the URL's `lang` query param is kept in sync (via `LanguageUrlSync`, mounted once
in `App.tsx`) so the current page URL is always an exact, shareable snapshot of what the player sees.
This sync only runs inside the React Router tree; the prerendered landing page build
(`src/entry-server.tsx`) does not include it and is unaffected.
```

---

## Implementation steps

1. In `src/i18n/LanguageProvider.tsx`, add a `getLangFromSearch()` helper guarded by
   `typeof window === 'undefined'` returning `null`, reading `new URLSearchParams(window.location.search).get('lang')`
   and validating it's `'en' | 'id'`. Call it first inside `getInitialLanguage()`, falling through to the
   existing `localStorage` → `navigator.language` → `'en'` chain when absent/invalid.
2. Create `src/i18n/LanguageUrlSync.tsx` exporting `LanguageUrlSync()`, a component with no visible output
   (`return null`) that:
   - Uses `useSearchParams()` from `react-router-dom`.
   - Uses `useLanguage()` for `{ language, setLanguage }`.
   - One effect: if `searchParams.get('lang')` is a valid language and differs from `language`, calls `setLanguage(...)`.
   - Another effect: if `searchParams.get('lang') !== language`, updates the search params to `language` with `{ replace: true }`, preserving any other existing query params.
3. In `src/App.tsx`, import `LanguageUrlSync` and render it directly inside `<LanguageProvider>`, before `<Routes>`.
4. Update `.ai/specs/i18n.md` per "Spec changes" above.
5. Manually verify in the dev server: loading `/?lang=id` shows Indonesian immediately; toggling EN/ID in
   the header updates the address bar's `lang` param; navigating between `/app` routes keeps the param in
   sync; loading with no param falls back to `localStorage`/browser language as before.
6. Run `bunx biome ci`, `bun run type-check`, `bun run build` — all three must pass.

---

## Rollback

Revert the commit for this plan. No `localStorage` key or schema changes were made, so no migration is needed — reverting simply stops reading/writing the `lang` query param.

---

## Review notes

Self-reviewed in a single-agent session (no separate reviewer-code/reviewer-kid pass available here). Verified: `LanguageUrlSync` is only reachable from the `BrowserRouter`-wrapped tree in `main.tsx`/`App.tsx`, never from `entry-server.tsx`'s standalone `LanguageProvider` + `LandingScreen` render, so the SSR prerender path cannot throw for missing router context. `getLangFromSearch()` is `window`-guarded so it is safe to have on the shared `getInitialLanguage()` path used by both hydration and non-hydration mounts.

---

## Implementation notes

Implemented as planned, with one deviation from the original `LanguageUrlSync` sketch: the
initial two-effect design (both keyed off `[fromUrl, language]`) had a real race — clicking the
EN/ID toggle updates `language` first, and on that same commit the URL→state effect saw the
still-stale `fromUrl` and immediately called `setLanguage` back to the old value before the
state→URL effect could catch up (confirmed with a scripted Chromium/Playwright click-through
against `bun run dev`, not just static rendering). Fixed by making the two effects
directionally asymmetric: the URL→state effect depends only on `fromUrl` (fires on navigation —
pasted link, back/forward) and reads the latest `language` via a ref instead of a dependency; the
state→URL effect depends only on `language` (fires on the toggle) and reads `searchParams` fresh
through `setSearchParams`'s functional updater. This is documented in a comment in
`LanguageUrlSync.tsx`.

Verified with `bun run dev` + a scripted headless Chromium session (`playwright-core`, added as a
throwaway dev dependency for the session and removed afterward — never committed):
- `/app?lang=id` and `/app/blocks?lang=id` render Indonesian immediately, ID toggle shows active.
- `/app` with no param renders English, URL is rewritten to `?lang=en` on load (shareable snapshot).
- Clicking ID/EN updates both the visible language and the URL's `lang` param correctly, including
  under rapid repeated toggling.
- `bunx biome ci`, `bun run type-check`, `bun run build`, and `bun run test` (304 pass, 8 skip, 0
  fail — pre-existing skips, unrelated to this change) all pass.
