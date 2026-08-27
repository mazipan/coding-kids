# 2026-08-01 — react-aria-components for accessible Dialog; shadcn deferred

**Context:** User asked about shadcn / React Aria. shadcn now has a React Aria registry, but the codebase is Tailwind-first with hand-styled components.

**Decision:** Install `react-aria-components` directly (the single-package distribution). Use `ModalOverlay + Modal + Dialog` to replace the DIY overlay in `RewardModal.tsx`. No shadcn scaffolding layer — RAC primitives are styled with the existing Tailwind classes.

**Alternatives rejected:**
- Full shadcn init + generated files — we'd own files we don't need to change; direct RAC usage is simpler.
- Tabs in LessonScreen — desktop needs both panels visible simultaneously, but `TabPanel` marks non-selected panels `aria-hidden`, which would hide visible content from screen readers. Deferred until layout is reconsidered.
- RAC Button — existing `<button>` elements are already semantically correct; marginal win not worth the churn.

**Consequences:** `RewardModal` now has proper focus trap, `aria-modal`, and body-scroll lock. CSS custom property brand tokens added to `index.css` as prep for future shadcn token mapping. Bundle grows ~54 kB (RAC focus utilities).
