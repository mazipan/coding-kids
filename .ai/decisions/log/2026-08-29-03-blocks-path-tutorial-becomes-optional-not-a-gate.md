# Blocks path tutorial becomes optional, not a gate

**Date:** 2026-08-29

## Decision

In every blocks-path world whose lesson 0 is a tutorial (the seven main worlds, plus the
bonus worlds `orchestra`, `cove`, `eco`), lesson 1 is now accessible immediately,
regardless of whether the tutorial has been completed. The tutorial card is still shown
and still fully playable at any time — it simply no longer blocks anything. Sequencing
resumes normally from lesson 2 onward: lesson N still requires lesson N-1 completed.

The thinking path is untouched — it has no tutorial concept, so its lesson 1 still
requires lesson 0 completed, with no exception.

## Why

Restoring sequential lesson unlock (see `2026-08-29-02-...`) brought back a detail the
user hadn't originally flagged: on a fresh profile, lesson 1 in every tutorial-bearing
world was locked until the tutorial was cleared. Once this was pointed out and explained,
the user asked to remove it. This is consistent with the spirit of the whole day's
change — reduce friction for a kid who wants to jump into the "real" content — while
still keeping levels 2+ properly sequential as requested one message earlier. It also
makes the blocks path internally consistent: every world's lesson 1, main or bonus,
tutorial or not, is now reachable the moment the world is (which INV-L2 already made
unconditional), and only lesson 2 onward enforces "finish the previous one."

## What changed

- `src/store/useProgress.ts` — `isLessonAvailable` collapses the two previously-separate
  branches (bonus vs. general) into one function. Lesson 0 is always available. Lesson 1
  is always available for every id in `BLOCKS_WORLD_IDS` (derived from `WORLDS`, i.e. all
  14 blocks worlds, main and bonus) and otherwise falls back to the thinking-path rule
  (lesson 1 needs lesson 0, with the pre-existing `hasWorldProgress` back-compat escape
  hatch). Lesson N (N ≥ 2) always requires lesson N-1, for every world in both paths.
  `BONUS_WORLD_IDS` and `TUTORIAL_GATED_BONUS_WORLDS` are removed — nothing distinguishes
  bonus worlds from main worlds in this function any more, since both now only special-case
  lesson 1.
- `.ai/specs/invariants.md` / `.ai/specs/worlds.md` — INV-L1 gains an explicit "tutorial
  is optional" exception, scoped precisely to blocks-path worlds with an `isTutorial`
  lesson 0, plus the untutorialed bonus worlds whose numbering starts at 1.
- `tests/coordinateCoveLessons.test.ts`, `tests/orchestraLessons.test.ts`,
  `tests/ecoCityLessons.test.ts` — updated to assert lesson 1 is open without the
  tutorial/lesson-0 completed.
- `tests/lessonUnlock.test.ts` (new) — direct coverage for a main world (`jungle`,
  tutorial optional) and a thinking world (`patterns`, no exception), since this exact
  case had no dedicated test before today.

## What did not change

- World-level accessibility (INV-L2) — unaffected, already fully free from the earlier
  decision today.
- Lesson N ≥ 2 sequencing, in either path — unaffected.
- The tutorial lesson itself — still shown as its own card, still awards no XP/stars,
  still completable at any time; it just stopped being a prerequisite.
