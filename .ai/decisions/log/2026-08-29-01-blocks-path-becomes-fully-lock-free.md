# Blocks path becomes fully lock-free

**Date:** 2026-08-29

## Decision

The blocks (code block) path no longer gates access to anything: every main world, every
bonus world, and every lesson within a world is playable from `progress.xp === 0` with no
prior progress. Stars and XP are still tracked and awarded exactly as before
(INV-PR1–PR4 untouched) — only the accessibility gate is removed, not the scoring.

Previously:
- Main worlds required `progress.xp >= world.unlockAtXP` (0 → 1650 XP across the six
  post-Jungle worlds).
- Bonus worlds (`jurassic`, `parking`, `sorting`, `debugging`, `orchestra`, `cove`, `eco`)
  additionally required the final main-path lesson (`portal-4`) to be completed.
- Lessons within every world (main and bonus) unlocked sequentially, lesson N requiring
  lesson N−1.

## Why

Explicit product request: let a kid explore the blocks path freely rather than being
walled off by an XP/completion gate. The persona this app is built for (Rafi, age 8,
impatient — see `.ai/agents/personas.md`) is better served by removing friction than by
preserving a curated unlock order; a kid who wants to try the "cool bonus world" should
not have to grind through six worlds and 44 lessons first.

## Why not keep sequential lesson unlock while only removing the XP/bonus gate

Considered scoping the change to world-level unlock only (worlds always open, lessons
within a world still sequential). Rejected because the request was explicit and
unambiguous once clarified with the user: "fully free — any lesson, any world." A
half-free system (open world map, but still locked lesson tiles inside) would reintroduce
the same friction one level down.

## Why the thinking path is untouched

The thinking path already has no world-level XP gate (INV-L3) by original design intent
(see `2026-08-07-08-thinking-path-all-worlds-unlocked-from-start.md`) and was not part of
this request. Its lesson-level sequential unlock (INV-L1) stays as-is — this decision
narrows INV-L1's scope to the thinking path rather than removing it globally.

## Why `unlockAtXP` is removed from `World` instead of left as unused data

Leaving a field on every blocks world object that reads like an active gate
(`unlockAtXP: 1650`) while nothing in the app honours it would mislead the next person
who edits `src/data/worlds/*.ts` into believing it still controls access. Removing it
from the `World` type (and every world file) makes the "no lock" property visible in the
type system itself rather than only in the (now much thinner) unlock functions.
`ThinkingWorld.unlockAtXP` is a separate type and is untouched — INV-L3 still depends on
every thinking world declaring `unlockAtXP: 0`.

## Consequences

- `INV-L2` is rewritten: it now states the blocks path has no XP gate at all, rather than
  describing the threshold check that used to exist.
- `INV-L1` is rewritten to scope explicitly to the thinking path.
- `areBonusWorldsUnlocked` becomes a constant-`true` function and the bonus-specific
  gating constants (`BONUS_WORLD_IDS`, `FINAL_LESSON_ID`, `TUTORIAL_GATED_BONUS_WORLDS`)
  in `src/store/useProgress.ts` are deleted as dead code.
- The world map and lesson list in `BlocksHome.tsx` no longer render any lock affordance
  for the blocks path; the "Bonus Worlds" section always shows the "all unlocked" banner
  instead of a conditional locked/unlocked hint.
- Existing localStorage progress is unaffected — no schema change, no migration.
