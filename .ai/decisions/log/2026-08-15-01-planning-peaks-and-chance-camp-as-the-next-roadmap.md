# 2026-08-15 — Planning Peaks and Chance Camp as the next roadmap implementation

**Context:** The new-world roadmap had shipped only Code Orchestra. Of the five remaining ideas, three are blocked on design work that does not exist: Spatial Studio needs an interaction prototype reviewed before authoring, Eco City needs 10 simulated blocks grids, and Coordinate Cove needs a position-sensor block and sandbox design. The other two, Planning Peaks and Chance Camp, need nothing beyond lesson data.

**Decision:** Implement both remaining data-only worlds in one release, as 10 bilingual lessons each built exclusively from the nine puzzle types already rendered generically by `ThinkingLesson.tsx`. Planning Peaks teaches constraint planning; Chance Camp teaches uncertainty. Both are `unlockAtXP: 0` per INV-L3.

**Alternatives rejected:**
- Ship Spatial Studio next as strict roadmap priority order suggests — its own roadmap entry makes a reviewed interaction prototype a precondition, so authoring content first risks discarding it.
- Ship only one world to honour the roadmap's "do not batch" guidance literally — that guidance exists to keep engine and interaction risk playtestable one change at a time, and neither world carries any. Both touch disjoint lesson data and are independently revertible.
- Use the `sort` puzzle type for clue-driven ordering — its prompt is hardcoded to "smallest to largest", which would contradict the puzzle on screen. `sequence` is used instead.
- Phrase probability answers as words on `MathPuzzle` — its `options` are `string[]`, not localizable, so word answers there would break INV-C2. Word answers go through `if-then`.

**Consequences:** Two new thinking worlds, 20 lessons, no new dependency, puzzle type, engine change, or persistence change. New lesson IDs are additive, so existing saves need no migration. A drive-by fix registers the three colours (`amber`, `cyan`, `violet`) that `ThinkingHome.getWorldTheme` was missing, which had been silently rendering Math Reasoning, Rule Finder and Logic Detective in the purple fallback; a test now asserts both colour maps stay in sync. Two pre-existing INV-Q3 true-false runs (in `nature` and `deduction`) were found during the audit and are recorded, not fixed, in the plan.
