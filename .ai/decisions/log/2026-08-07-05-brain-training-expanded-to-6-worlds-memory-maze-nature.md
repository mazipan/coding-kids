# 2026-08-07 — Brain Training expanded to 6 worlds (Memory Maze, Nature Quest, Number Ninja)

**Context:** The original three thinking worlds (patterns, logic, counting) covered only core CS-adjacent cognitive skills. Users requested more worlds to extend the brain training path.

**Decision:** Added three new worlds, each themed around a distinct skill not covered by the originals:
- **Memory Maze** (`memory`, 🧩, ages 6–10) — Sequence recall using `pattern` puzzles with longer chains (up to 8 items) and blanks in the middle, not just at the end. Teaches working memory.
- **Nature Quest** (`nature`, 🌿, ages 8–11) — Science/nature if-then reasoning using `if-then` puzzles about plants, animals, weather, and life cycles. Teaches causal thinking via real-world context.
- **Number Ninja** (`numbers`, ⚡, ages 9–13) — Number sequence pattern-finding using `math` puzzles (skip counting, doubling, Fibonacci, square numbers, triangular numbers). Distinct from `counting` which focuses on arithmetic operations.

All three new worlds use existing puzzle types — no new renderer code needed. All have `unlockAtXP: 0` per INV-L3.

**Alternatives rejected:**
- Adding more lessons to existing worlds — increases depth but not breadth; kids who finish all three worlds have nowhere to go.
- Introducing new puzzle types (e.g. drag-and-sort) — requires new renderer code in `ThinkingLesson.tsx`; scope is too large for this pass.

**Consequences:** Brain Training path now has 60 lessons across 6 worlds. The world map (`grid-cols-1 sm:grid-cols-3`) renders as 2 rows × 3 columns — no layout change required. INV-L3 updated to name all six worlds and to explicitly require `unlockAtXP: 0` for any future additions.
