# Invariants

These are non-negotiable truths about the system. Every change must preserve every invariant. The reviewer-code agent checks these explicitly; the builder must not ship a change that breaks any of them.

---

## Product invariants

**INV-P1 — No network calls at runtime**  
After the initial page load, the app must function completely offline. No fetch, XHR, WebSocket, or import() call may be made to an external host during gameplay.

**INV-P2 — Zero data exfiltration**  
No user data, progress, or behaviour is ever sent to any external server, analytics endpoint, or third-party service.

**INV-P3 — No account required**  
No screen in the app may gate content behind authentication, registration, or email verification.

**INV-P4 — No ads**  
No advertising network, affiliate pixel, or sponsored content of any kind.

---

## Progress invariants

**INV-PR1 — Progress never decreases**  
A player's XP, star count, and level can only increase. `completeLesson` must never reduce any of these values, even on a worse retry.

**INV-PR2 — Stars are best-of**  
The stored `stars` for a lesson is always the highest value ever achieved. A retry with fewer stars must not overwrite a better result.

**INV-PR3 — XP is delta-only**  
Re-completing a lesson already at max stars earns 0 additional XP. A partial improvement earns only the delta.

**INV-PR4 — Badges are permanent**  
Once a badge is awarded it is never removed, even if the triggering condition could theoretically be un-met.

---

## Lesson unlock invariants

**INV-L1 — Sequential unlock**  
Lesson N in a world is only accessible after lesson N-1 is marked `completed: true`. Lesson 0 (the first lesson) is always accessible once the world is unlocked. This applies to both the blocks path and the thinking path.

**INV-L2 — World unlock by XP (blocks path)**  
In the blocks path, a world is accessible only when `progress.xp >= world.unlockAtXP`. The Jungle world (0 XP) is always accessible.

**INV-L3 — Thinking worlds are always unlocked**  
All thinking worlds (`patterns`, `logic`, `counting`, `memory`, `nature`, `numbers`, `decomposition`) have `unlockAtXP: 0` and are accessible from the moment a player enters the thinking path. XP earned in either path contributes to the shared pool, but thinking worlds must never be gated by XP. Any new thinking world added in the future must also have `unlockAtXP: 0`.

---

## Game engine invariants (blocks path only)

These invariants apply exclusively to the blocks path (`/app/blocks`). The thinking path has no code editor or game grid.

**INV-G1 — Bounded grid**  
The character can never occupy a cell outside the grid. Any action that would move the character out of bounds must result in `status: 'crashed'`.

**INV-G2 — Obstacle collision**  
The character can never occupy a cell where `cells[row][col] === 'obstacle'`. Such a move must result in `status: 'crashed'`.

**INV-G3 — Action cap**  
No code execution may produce more than `MAX_ACTIONS = 200` actions. Execution beyond this limit must be stopped.

**INV-G4 — Sandbox**  
Block-generated code runs in a `new Function(...)` context. Only the five game verbs (`moveRight`, `moveLeft`, `moveUp`, `moveDown`, `collect`) are exposed in scope. No access to `window`, `document`, `fetch`, `localStorage`, or any global.

---

## Code invariants

**INV-C1 — TypeScript strict**  
`tsc -b` must pass with zero errors before any commit. No `@ts-ignore` or `@ts-expect-error` suppressions without a documented reason in the commit message.

**INV-C2 — No hardcoded user-visible strings**  
Every string shown to the user must go through `t()` from `useLanguage()`, or `localize(value, language)` for world/lesson content stored in data files. The only exceptions are dev-only console logs and error messages that never reach the UI.

**INV-C3 — Build passes**  
`bun run build` must succeed before any commit is pushed.

**INV-C4 — localStorage is the only persistence**  
No other storage mechanism (IndexedDB, cookies, sessionStorage, Cache API) may be used for user data without a decision record in `.ai/decisions/log.md`.

**INV-C5 — lucide-react is the only icon library**  
All icons in the UI must come from `lucide-react`. Translation strings must never embed directional or status symbols (`←`, `→`, `▶`, `✓`, `🔒`, etc.) — icons are placed exclusively in JSX alongside `t()` calls. Emoji are permitted only for decorative mascots, world themes, and puzzle content, never as functional UI icons.

---

## i18n invariants

**INV-I1 — All keys have an English value**  
Every key in `translations.ts` must have a non-empty English string. Indonesian is required; other languages may fall back to English.

**INV-I2 — No language-specific layout assumptions**  
UI layout must not assume English word length. Use truncation or wrapping — never fixed-width containers that clip translated text.
