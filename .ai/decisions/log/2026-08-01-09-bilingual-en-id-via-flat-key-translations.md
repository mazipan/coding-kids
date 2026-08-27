# 2026-08-01 — Bilingual EN/ID via flat-key translations

**Context:** The app targets Indonesian children (primary market) but should also work in English.

**Decision:** Flat-key translation object (`Record<string, string>`) with `{var}` template substitution. Auto-detect Indonesian via `navigator.language.startsWith('id')`. Persist choice to localStorage.

**Alternatives rejected:**
- i18next / react-i18next — adds a dependency and abstractions for a two-language app with simple strings.
- URL-based locale (`/id/app`) — routing complexity for no user benefit; locale is a preference not an identity.

**Consequences:** Adding a third language requires only a new key object in `translations.ts` and a toggle button update. The flat key structure means no namespacing collisions but requires discipline in key naming.
