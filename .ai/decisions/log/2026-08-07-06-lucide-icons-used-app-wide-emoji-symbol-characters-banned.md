# 2026-08-07 — Lucide icons used app-wide; emoji/symbol characters banned from controls

**Context:** After migrating action icons in PathSelector, ThinkingHome, and ThinkingLesson to `lucide-react`, a secondary audit found embedded arrow/symbol characters (`←`, `→`, `▶`, `✓`) baked into multiple translation strings (`path.back`, `landing.returning`, `tutorial.card.cta`, `tutorial.card.done`, `walkthrough.next`, `thinking.correct`). These were causing double-icon display when JSX icons were added alongside the strings.

**Decision:** Strip all symbol characters from translation strings — the translation value is always plain text. Icons are placed exclusively in JSX next to `t()` calls. This rule is now documented in `context.md` as a gotcha and applies to all future translation keys.

**Alternatives rejected:**
- Keep symbols in translations and skip JSX icons — loses visual consistency; emoji arrows are lower quality than lucide icons and render differently per OS.
- Strip JSX icons and keep translation symbols — translation strings should be language-agnostic text; embedding directional arrows couples content to layout.

**Consequences:** All interactive controls (buttons, badges, status labels) use lucide-react icons. Emoji is retained only for decorative mascots and puzzle content. Translation strings are pure text.
