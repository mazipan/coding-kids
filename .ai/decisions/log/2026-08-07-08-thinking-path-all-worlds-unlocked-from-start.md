# 2026-08-07 — Thinking path: all worlds unlocked from start

**Context:** Initial implementation locked Logic Land at 30 XP and Math Magic at 80 XP. User feedback: the locks felt too strict; kids should be free to explore whichever world interests them.

**Decision:** Set `unlockAtXP: 0` for all three thinking worlds. Individual lessons within each world remain sequentially locked (lesson N requires lesson N-1 completed). The lesson-level gates preserve a natural difficulty ramp without a hard XP barrier at world entry.

**Alternatives rejected:**
- Keep XP gates but lower thresholds — still arbitrary friction; lesson-level gates provide enough structure.
- Unlock all lessons in all worlds — removes all progression structure; kids might skip to lessons they're not ready for.

**Consequences:** Kids can start any thinking world immediately. The sequential lesson lock inside each world still teaches the concept in order.
