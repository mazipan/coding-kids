# Plan: React Aria Components — Accessible Modal

**Slug:** `refactor-shadcn-react-aria`  
**Date:** 2026-08-01  
**Status:** done

---

## Request

> did we consider to use shadcn or any other components? if yes, use react aria instead.
> i heard shadcn now works with react aria
> yea do it later, we'll merge this one first

---

## Decision

Use `react-aria-components` (the official single-package distribution of React Aria) to replace the DIY fixed-overlay modal in `RewardModal.tsx` with a properly accessible dialog. shadcn's React Aria registry adds styled component shells on top of the same primitives — for this codebase we hand-style everything with Tailwind, so we use `react-aria-components` directly without the shadcn scaffolding layer.

Scope is intentionally narrow: Dialog first (highest accessibility value), Tabs deferred (the two-column desktop layout doesn't fit the standard Tabs pattern — see alternatives rejected).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Full `npx shadcn@latest init` with React Aria registry | Adds generated component files we'd need to maintain; our Tailwind-first approach means we just use the RAC primitives directly |
| Refactor mobile Tabs in LessonScreen | The desktop layout requires BOTH panels visible simultaneously; hidden `TabPanel` gets `aria-hidden="true"`, which would mark visible content as hidden for screen readers — semantically wrong |
| Button component from RAC | Buttons are already `<button>` elements; pressed/hovered state via `data-*` is a marginal win not worth the churn |
| Keep DIY overlay | Loses focus trap (Tab key escapes modal), `aria-modal="true"`, and body-scroll lock |

---

## What changed

### `react-aria-components` v1.20.0

New dependency. Provides `ModalOverlay`, `Modal`, `Dialog` used in RewardModal.

### `RewardModal.tsx`

- Removed `AnimatePresence` outer wrapper
- Replaced manual `motion.div` backdrop with `ModalOverlay` (portal, focus scope, body-scroll lock)
- Added `Modal` (modal context) + `Dialog aria-label={message}` (role="dialog" + aria-modal)
- Kept all inner Framer Motion animations unchanged (spring entrance, emoji wiggle, XP badge scale-in)
- `isDismissable={false}` — no click-outside or escape-key dismiss; player must choose next/retry/home

### `src/index.css`

- Added `:root` CSS custom properties for brand palette (`--color-brand-purple`, `--color-brand-light`, etc.) — prep for future shadcn token mapping
- Added `.ck-overlay[data-entering/exiting]` CSS animations — RAC detects these and waits for the exit animation to finish before unmounting, giving a 200ms fade-out instead of an instant pop

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | react-aria-components is bundled, no runtime fetch |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-C1 TypeScript strict | yes | Build passes with zero errors |
| INV-C3 build passes | yes | Verified |

---

## Bundle impact

`index.js`: ~100 kB → ~154 kB (+54 kB). Acceptable: RAC ships focus management, ARIA utilities, and international keyboard support that would otherwise have to be hand-rolled.

---

## Rollback

Revert the commit. Remove `react-aria-components` from package.json.

---

## Deferred

- **shadcn Dialog shell** — if we want shadcn's copy-paste styled Dialog wrapper, run `npx shadcn@latest add dialog` with the React Aria registry after the team decides on a component design system.
- **Tabs** — replace the mobile tab buttons in `LessonScreen.tsx` only if we restructure the desktop layout to not require both panels simultaneously (e.g. move to a drawer pattern on mobile).
- **Button** — wrap control-bar buttons in RAC `Button` for `data-pressed`/`data-hovered` states if the team wants richer touch feedback.
