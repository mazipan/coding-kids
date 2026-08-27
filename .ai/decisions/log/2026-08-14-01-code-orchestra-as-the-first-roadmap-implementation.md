# 2026-08-14 — Code Orchestra as the first roadmap implementation

**Context:** The new-world roadmap prioritized Code Orchestra and required worlds to ship as separate, playtestable releases. Review also found that existing bonus worlds bypassed sequential lesson unlocking after their shared world gate opened.

**Decision:** Add Code Orchestra as a 10-lesson bonus world using only existing movement, loop, and function mechanics. Keep the shared final-main-lesson bonus gate, then apply normal previous-lesson sequencing inside every bonus world.

**Alternatives rejected:**
- Implement Spatial Studio in the same release — its spatial interaction still requires a separate prototype and review.
- Add audio-recognition gameplay — unnecessary for the programming objective and less accessible.
- Preserve all-at-once bonus lesson access — violates INV-L1 and removes the intended learning progression.

**Consequences:** Existing completed bonus progress remains valid, while uncompleted bonus lessons now open sequentially. No localStorage migration is necessary because stored lesson records and keys do not change.
