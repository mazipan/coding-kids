# Language selection synced via `?lang=` search param

**Date:** 2026-08-31

## Decision

The active language is now also reflected in — and readable from — a `?lang=en` / `?lang=id`
URL query param, kept in sync by a new `LanguageUrlSync` component. `localStorage` remains the
persistence store (no new storage mechanism, INV-C4 untouched); the query param sits above it in
priority so a shared link always opens in the language the sender saw, and every page URL stays
an exact, shareable snapshot of the active language.

## Why a separate `LanguageUrlSync` component instead of putting `useSearchParams()` in `LanguageProvider`

`LanguageProvider` is rendered in two places: inside `<BrowserRouter>` (`main.tsx` → `App.tsx`,
every real route) and standalone, with **no** router ancestor, in `src/entry-server.tsx` for the
build-time landing-page prerender. `useSearchParams()` throws without router context, so putting
it directly in `LanguageProvider` would break the prerender build. Splitting the router-dependent
sync into its own component, mounted only inside `App.tsx`, keeps `LanguageProvider` itself
router-agnostic and leaves `entry-server.tsx` untouched.

## Why not read/write `window.location`/`history.replaceState` directly instead

Bypassing React Router's history abstraction (`history.replaceState` doesn't fire `popstate`)
risks `useLocation()`/`useSearchParams()` elsewhere in the tree going stale relative to the real
URL. Using `useSearchParams()` (still with `{ replace: true }`, so no extra back-button entries)
keeps the router's own state as the single source of truth.

## Consequences

- `getInitialLanguage()` in `LanguageProvider.tsx` checks the URL first, `localStorage` second,
  `navigator.language` third — documented in `.ai/specs/i18n.md`.
- Visiting `/` (the prerendered landing page) with `?lang=id` still shows the same brief
  English-then-corrected flash that browser-language detection already causes there (see
  `context.md`'s hydration note) — this decision does not change that existing tradeoff.
- No `localStorage` schema change; no migration needed.
