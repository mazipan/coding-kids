# Blocks lessons stay sequential — only worlds are free

**Date:** 2026-08-29

## Decision

Correcting the same-day decision in `2026-08-29-01-blocks-path-becomes-fully-lock-free.md`:
the blocks path removes the **world-level** lock only. Every world — main and bonus alike
— is accessible from `progress.xp === 0` with no prior progress, exactly as that decision
describes. But lessons *within* a world unlock sequentially again (INV-L1), the same as
before this feature started: lesson N requires lesson N−1 to be `completed: true`, lesson
0 is always open, and `orchestra`/`cove`/`eco` still gate their lesson 1 behind their own
tutorial (`orchestra-0`/`cove-0`/`eco-0`).

## Why

The user clarified after the first pass shipped: worlds should be free to explore, but
levels (lessons) within a world should still be sequential. The earlier decision recorded
"fully free — any lesson, any world" as the explicit, clarified answer at the time, but
that answer was itself a miscommunication — the user's original ask was about *worlds*
("not lock any level by the XP... make kids can explore more level as they want" was
about being able to reach any world, not about reordering lessons inside one). Once
corrected, the two invariants split cleanly:

- **INV-L2** — world accessibility. No XP gate, no "clear the main path first" bonus
  gate. This part of the original decision stands unchanged.
- **INV-L1** — lesson accessibility within a world. Reverted to sequential unlock,
  scoped to both paths again (it had briefly been narrowed to "thinking path only").

## What actually changed vs. the first pass

- `src/store/useProgress.ts` — `isLessonAvailable` no longer short-circuits to `true` for
  every blocks world id. It restores the pre-existing bonus/tutorial-gated and general
  sequential-unlock branches, with one real difference from the pre-feature behavior: the
  bonus branch no longer requires the main path's final lesson (`portal-4`) to be
  completed before any bonus lesson is reachable — that requirement is gone for good,
  because bonus *worlds* are meant to be reachable immediately. `BONUS_WORLD_IDS` and
  `TUTORIAL_GATED_BONUS_WORLDS` are restored; `FINAL_LESSON_ID` is not (nothing reads it
  any more).
- `src/screens/BlocksHome.tsx` — the per-lesson lock UI (lock overlay, disabled
  cursor/opacity, hidden Play badge) is restored, driven by `isLessonUnlocked` again. The
  world-map-level lock UI (world cards, bonus-section banner) stays removed — that part of
  the original change was correct as shipped.
- `src/App.tsx` — `WorldMapRoute`/`WorldDetailRoute` thread `isLessonUnlocked` back into
  `BlocksHome`. `LessonRoute`'s `isLessonUnlocked` check, which had been kept in the first
  pass as an inert defense-in-depth check, is now load-bearing again.
- `.ai/specs/invariants.md` — INV-L1 widens back to both paths; INV-L2 is reworded to be
  explicit that it covers world-level access only, not lesson order within a world.
- Tests in `tests/coordinateCoveLessons.test.ts`, `tests/orchestraLessons.test.ts`,
  `tests/ecoCityLessons.test.ts` are restored to assert sequential unlock, minus the
  `portal-4` finale requirement they asserted before this feature.

## What did not change back

- `unlockAtXP` stays removed from the `World` type and every blocks world file — no main
  world was ever meant to regain an XP gate, only the finale/XP *world* gates are gone,
  never the field describing them.
- `areBonusWorldsUnlocked` stays a constant `true` — bonus worlds are still reachable
  without clearing the main path.
- The world-map lock UI and the two now-dead translation keys (`bonus.locked.hint`,
  `common.to.unlock`) stay removed.
