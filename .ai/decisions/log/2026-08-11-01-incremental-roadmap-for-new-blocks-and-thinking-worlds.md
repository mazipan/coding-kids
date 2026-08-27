# 2026-08-11 — Incremental roadmap for new blocks and thinking worlds

**Context:** The catalog already contains broad blocks and brain-training coverage, and the request was to plan more world ideas without immediately expanding the shipped lesson set.

**Decision:** Keep the ideas in a prioritized roadmap and implement at most one world per path at a time. Prioritize Code Orchestra for blocks because it creates a fresh nested-loop/function capstone with the existing engine, and Spatial Studio for brain training because spatial reasoning is the clearest gap in the current catalog; require a separate approved plan and complete content audit before either is built.

**Alternatives rejected:**
- Ship several new worlds together — too much lesson content to playtest and audit effectively in one release.
- Extend all existing worlds — makes sequential paths longer and increases duplicate-mechanic risk.
- Build Coordinate Cove first — meaningful coordinates require safe position-sensor blocks and an engine/sandbox design that does not exist yet.
- Start with timed attention games — reaction speed is not the intended learning outcome and can create accessibility barriers.

**Consequences:** This decision changes documentation only. The roadmap is reversible, no new dependency or persistence change is approved, thinking worlds remain always unlocked, and every selected world must receive its own implementation plan, invariant review, bilingual lesson authoring, and content-quality audit.
