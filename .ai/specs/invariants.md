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
Lesson N in a world is only accessible after lesson N-1 is marked `completed: true`. Lesson 0 (the first lesson) is always accessible. This applies to the blocks path, the thinking path, and the safety path alike — it governs unlock *within* a world. World-level accessibility for the blocks path is governed separately by INV-L2.

**Exception — the tutorial is optional, never a gate.** In every blocks-path world whose lesson 0 is a tutorial (`isTutorial: true` — the seven main worlds plus `orchestra`, `cove`, `eco`), lesson 1 is accessible regardless of whether the tutorial is completed. Sequencing resumes normally from lesson 2 onward (lesson N still requires lesson N-1). Bonus worlds with no lesson 0 at all (`jurassic`, `parking`, `sorting`, `debugging`; numbering starts at 1) fall under the same rule — their lesson 1 is always open. Neither the thinking path nor the safety path has a tutorial concept, so their lesson 1 always requires lesson 0 completed, with no exception.

**INV-L2 — The blocks path has no world-level lock**  
Every world in the blocks path — main and bonus alike — is accessible regardless of `progress.xp` or any lesson's completion state elsewhere in the app: there is no XP gate on any main world, and no longer a "finish the main path" gate on any bonus world. `progress.xp` and star counts are still tracked and displayed exactly as before (INV-PR1–PR4) — this invariant is about *world* accessibility only. Lessons *within* a world still unlock sequentially per INV-L1, including the tutorial gate that `orchestra`, `cove`, and `eco` place on their own lesson 1 (see `TUTORIAL_GATED_BONUS_WORLDS` in `src/store/useProgress.ts`).

**INV-L3 — Thinking and safety worlds are always unlocked**  
All thinking worlds (`patterns`, `logic`, `counting`, `memory`, `nature`, `numbers`, `decomposition`, and every world added since) and all safety worlds (`passwords`, `privacy`, `kindness`, `scams`, and every world added since) have `unlockAtXP: 0` and are accessible from the moment a player enters that path. XP earned in any path contributes to the shared pool, but neither thinking nor safety worlds may ever be gated by XP. Any new thinking or safety world added in the future must also have `unlockAtXP: 0`.

---

## Game engine invariants (blocks path only)

These invariants apply exclusively to the blocks path (`/app/blocks`). The thinking path has no code editor or game grid.

**INV-G1 — Bounded grid**  
The character can never occupy a cell outside the grid. Any action that would move the character out of bounds must result in `status: 'crashed'`.

**INV-G2 — Obstacle collision**  
The character can never occupy a cell where `cells[row][col] === 'obstacle'`. Such a move must result in `status: 'crashed'`.

**INV-G3 — Action cap**  
No code execution may produce more than `MAX_ACTIONS = 200` actions. Execution beyond this limit must be stopped.

A loop whose body moves the character is bounded by that cap. A loop that does *not* move the character is bounded separately: Blockly's `INFINITE_LOOP_TRAP` injects `__tick()` at the top of every loop body, and the engine stops the run after `MAX_LOOP_TICKS = 10 000` ticks. Both guards stop generation cleanly — they never surface as a code error and never hang the tab.

**INV-G4 — Sandbox**  
Block-generated code runs in a `new Function(...)` context under a `'use strict'` prologue. Exactly seven usable names are exposed in scope:

| Name | Purpose |
|------|---------|
| `moveRight`, `moveLeft`, `moveUp`, `moveDown` | the four movement verbs |
| `currentRow`, `currentCol` | read-only 1-based position sensors (Coordinate Cove) |
| `__tick` | the loop guard behind INV-G3 |

There is no `collect` verb — items are collected automatically by `applyAction` when the character enters their cell.

Every identifier in `SHADOWED_GLOBALS` (`src/engine/gameEngine.ts`) is passed as an unbound parameter, so `window`, `document`, `fetch`, `localStorage`, and the other named globals resolve to `undefined` inside generated code. Adding a name to the exposed set requires a decision record; the sensors must stay **read-only** — no block may set the character's position, because that would bypass the INV-G1 and INV-G2 checks.

---

## Code invariants

**INV-C1 — TypeScript strict**  
`tsc -b` must pass with zero errors before any commit. No `@ts-ignore` or `@ts-expect-error` suppressions without a documented reason in the commit message.

**INV-C2 — No hardcoded user-visible strings**  
Every string shown to the user must go through `t()` from `useLanguage()`, or `localize(value, language)` for world/lesson content stored in data files. The only exceptions are dev-only console logs and error messages that never reach the UI.

**INV-C3 — Build passes**  
`bun run build` must succeed before any commit is pushed.

**INV-C4 — localStorage is the only persistence**  
No other storage mechanism (IndexedDB, cookies, sessionStorage, Cache API) may be used for user data without a decision record in `.ai/decisions/log/`.

**INV-C5 — lucide-react is the only icon library**  
All icons in the UI must come from `lucide-react`. Translation strings must never embed directional or status symbols (`←`, `→`, `▶`, `✓`, `🔒`, etc.) — icons are placed exclusively in JSX alongside `t()` calls. Emoji are permitted only for decorative mascots, world themes, and puzzle content, never as functional UI icons.

---

## i18n invariants

**INV-I1 — All keys have an English value**  
Every key in `translations.ts` must have a non-empty English string. Indonesian is required; other languages may fall back to English.

**INV-I2 — No language-specific layout assumptions**  
UI layout must not assume English word length. Use truncation or wrapping — never fixed-width containers that clip translated text.

---

## Content quality invariants

These apply to every lesson addition or modification — both block coding and thinking path.

**INV-Q1 — Lesson uniqueness within a world**  
No two lessons in the same world may share both the same core mechanic (puzzle structure or operation type) AND the same scenario (topic or theme). Swapping emoji while keeping the same structure, or changing numbers while keeping the same operation, is a duplicate and is not allowed.

**INV-Q2 — Cross-world scenario freshness**  
A scenario (e.g. rain, apples, a specific animal) may appear in more than one world only when it is applied from a genuinely different cognitive angle in each. Reusing the same scenario with only the world framing changed is a violation.

**INV-Q3 — True-false answer balance**  
Any world that contains multiple true-false puzzles must have a mix of true and false answers. A run of 3 or more consecutive same-answer true-false puzzles in a single world is a violation — a child must not be able to score 100% by always tapping the same choice.

**INV-Q4 — Plausible distractors**  
Every option in a 4-option puzzle must be plausible to a child of the target age. Nonsensical filler options added only to reach the 4-option count are not allowed.

**INV-Q5 — Real difficulty curve**  
Lessons 0–4 in any world must be genuinely easier for the target age than lessons 5–9. Difficulty must come from increased cognitive load — compound conditions, longer sequences, inverse operations, multi-step reasoning — not merely from larger numbers or longer text.
