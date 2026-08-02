# feat-world-onboarding-intro

**Status:** done  
**Branch:** claude/blocky-onboarding-intro-rd2t1m

## Problem

Kids land directly in Lesson 1 of each world with no introduction to the Blockly mechanic or the world's core concept (loops, variables, conditions, etc.). The first failure is often UI confusion, not logical confusion — they don't know how to drag a block or what a "repeat" block does.

## Solution

Each main world (Jungle → Portal) gets a guided tutorial lesson (number 0, `isTutorial: true`) that runs **once** before Lesson 1 unlocks. The tutorial:

- Uses the existing game UI — same Blockly workspace, same mascot, same game grid
- Is interactive (kids must successfully run code to complete it)
- Has no stars, no XP pressure — just a "You're Ready! 🎉" completion overlay
- Is stored in `progress.lessons['world-0']` as any other lesson
- Blocks Lesson 1 for new players until completed; existing players bypass the gate automatically

## Files changed

| File | Change |
|------|--------|
| `src/types/index.ts` | Added `isTutorial?: true` to `Lesson` interface |
| `src/data/lessons.ts` | Added 6 tutorial lessons (`jungle-0` … `portal-0`); `getLessonsByWorld` excludes tutorials; new `getWorldTutorial(worldId)` function |
| `src/store/useProgress.ts` | `isLessonUnlocked`: lesson 0 always accessible; lesson 1 now requires tutorial completion unless player already has world progress (backward compat) |
| `src/screens/HomeScreen.tsx` | Tutorial card rendered at top of lesson list — glowing "Start Here First!" CTA when not done, dimmed "✓ Tutorial Complete" when done |
| `src/screens/LessonScreen.tsx` | Tutorial mode: TUTORIAL badge in header, no star calculation on win, tutorial complete overlay with "Start Level 1!" button |
| `src/i18n/translations.ts` | Added `tutorial.*` keys (EN + ID) |

## Tutorials per world

| World | Concept | Tutorial teaches |
|-------|---------|-----------------|
| Jungle | Sequences | Drag ➡️ Move Right, press Run |
| Space | Loops | Repeat block instead of many moves |
| Ocean | Variables | Create variable, use in Repeat |
| Caves | Conditions | If/else block with true condition |
| Factory | Functions | Define named function, call it twice |
| Portal | Lists | Lists + repeat to collect items |

## Invariants checked

- **INV-P1** ✓ No network calls added
- **INV-P2** ✓ No data exfiltration
- **INV-P3** ✓ No auth gate
- **INV-PR1** ✓ Progress never decreases — `completeLesson(id, 1, 0)` only adds
- **INV-PR3** ✓ XP delta: tutorials award 0 XP; re-completing adds 0
- **INV-L1** ✓ Sequential unlock preserved; lesson 0 always accessible
- **INV-L2** ✓ World XP gate unchanged
- **INV-G1–G4** ✓ Game engine unchanged
- **INV-C1** ✓ `tsc -b` passes with zero errors
- **INV-C2** ✓ All strings go through `t()`
- **INV-C3** ✓ `bun run build` passes
- **INV-C4** ✓ `localStorage` only, no new keys

## Backward compatibility

Existing players who already have progress in a world (e.g. completed `jungle-1`) bypass the tutorial gate automatically — `hasWorldProgress` check in `isLessonUnlocked` returns true before reaching the tutorial requirement.
