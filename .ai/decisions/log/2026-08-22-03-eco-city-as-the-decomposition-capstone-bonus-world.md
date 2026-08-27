# 2026-08-22 — Eco City as the decomposition capstone bonus world

**Context:** Eco City was roadmap priority 4 and had been deferred for effort, not capability: a blocks world needs 10 grids whose routes are provably solvable, which is materially more work than a data-only thinking world. Code Orchestra had already set the precedent of shipping a blocks bonus world with a route-simulation test.

**Decision:** Ship Eco City (`eco`) as a 10-lesson blocks bonus world for ages 10–14, teaching Decomposition & Reuse. It is built entirely from the six pre-existing Blockly categories and the existing grid engine — no new block, goal type, or engine behaviour, and in particular no use of the `sensors` category Coordinate Cove introduced. It sits behind the shared bonus gate, unlocks sequentially, and gates lesson 1 behind its own tutorial the way Code Orchestra and Coordinate Cove do. `tests/ecoCityLessons.test.ts` simulates every canonical route through `applyAction`/`checkWin` and asserts the obstacle lessons really do block the naive route.

**Alternatives rejected:**
- Add a typed-token sorting mechanic (bins that accept only one kind of token) — needs a new engine concept, and the issue explicitly keeps objectives route-based.
- Assess environmental facts — the issue forbids it. Recycling, water and power are scenery, and every fact a lesson uses is explained in the same sentence that uses it.
- Make Eco City a main XP-gated world — it mixes six categories the main path already teaches one at a time, which is exactly what the bonus tier is for.
- Use `reach_goal` for the finale so the 🏙️ goal cell appears — `GameGrid` does not render `goalPos` at all, and `reach_goal` would let a child win while skipping every token.
- Give Eco City position sensors now that they exist — reading a coordinate is Coordinate Cove's concept. Eco City's lessons are about naming and reusing a sub-route, and a sensor would answer nothing they ask.

**Consequences:** A seventh bonus world, 11 new lesson IDs (`eco-0` … `eco-10`), no new dependency and no persistence change, so existing saves need no migration. `eco` joins both `BONUS_WORLD_IDS` and `TUTORIAL_GATED_BONUS_WORLDS`. Eco City's palette was moved from emerald to lime during the merge with Coordinate Cove, whose teal theme was close enough to read as the same world on the bonus map. The hardcoded `landing.worlds.title` count goes from 27 to 28.
