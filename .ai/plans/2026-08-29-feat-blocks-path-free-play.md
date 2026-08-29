status: done

# Blocks path — remove the world-level lock (free play)

## What changed and why

The blocks (code block) path currently gates progress in three ways: main worlds require
`progress.xp >= world.unlockAtXP`, bonus worlds require the final main-path lesson
(`portal-4`) to be completed, and lessons within any world unlock sequentially. The
request is to remove the **world-level** locks — a kid can jump into any world, including
every bonus world, from the very start. Stars and XP still accrue exactly as before, and
lessons *within* a world still unlock sequentially (INV-L1) — only world accessibility
changes, not lesson order or scoring.

**Correction (same day, see the "Correction" section below and
`.ai/decisions/log/2026-08-29-02-blocks-lessons-stay-sequential-only-worlds-are-free.md`):**
the first implementation pass went further than intended and also made every lesson
within a world freely reorderable. That part was reverted; only the world-level lock is
gone.

The thinking path is unaffected throughout: it already has no world-level XP gate
(INV-L3) and keeps its existing sequential lesson unlock (INV-L1).

## Files touched

- `src/types/index.ts` — remove `unlockAtXP` from the `World` interface (vestigial once
  nothing gates on it; `ThinkingWorld.unlockAtXP` is untouched)
- `src/data/worlds/*.ts` (14 files) — remove the `unlockAtXP` field from every world
- `src/store/useProgress.ts` — `isLessonAvailable` short-circuits to `true` for every
  blocks world id; `areBonusWorldsUnlocked` always returns `true`; drop the now-dead
  `BONUS_WORLD_IDS` / `FINAL_LESSON_ID` / `TUTORIAL_GATED_BONUS_WORLDS` gating constants
- `src/utils/progressStats.ts` — `blocksWorldStats` reports every blocks world as
  `unlocked: true`
- `src/screens/BlocksHome.tsx` — drop the `isWorldUnlocked` / `isBonusWorldUnlocked` /
  `isLessonUnlocked` props and all lock UI (lock badges, XP-needed hint, dimmed/disabled
  cards) for worlds and lessons; bonus section always shows the "all unlocked" banner
- `src/App.tsx` — blocks routes (`WorldMapRoute`, `WorldDetailRoute`, `LessonRoute`) stop
  threading `isWorldUnlocked` / `isBonusWorldUnlocked` into `BlocksHome`; `LessonRoute`
  drops the bonus/XP accessibility check (any existing world+lesson pair is playable) but
  keeps the `isLessonUnlocked` store check as a defense-in-depth no-op
- `src/i18n/translations.ts` — remove now-unreferenced `bonus.locked.hint` and
  `common.to.unlock` keys (EN + ID); `bonus.unlocked.all` is now shown unconditionally
- `.ai/specs/invariants.md` — rewrite INV-L1 and INV-L2 to scope sequential/XP unlock to
  the thinking path only; blocks path is documented as lock-free
- `.ai/specs/worlds.md` — drop the `unlockAtXP` column from the blocks world table and
  the bonus-gate paragraph; update "Adding a new block coding world" step 2
- `tests/progressStats.test.ts`, `tests/coordinateCoveLessons.test.ts`,
  `tests/orchestraLessons.test.ts`, `tests/ecoCityLessons.test.ts` — update assertions
  that encoded the old XP/finale/sequential gates for blocks worlds

## Invariants checked

- **INV-L1** (rewritten) — sequential unlock now applies to the thinking path only;
  every blocks lesson is accessible regardless of prior completion
- **INV-L2** (rewritten) — the blocks path has no XP gate of any kind; every world,
  including every bonus world, is accessible from `progress.xp === 0`
- **INV-L3** — unaffected; thinking worlds remain always unlocked
- **INV-PR1/PR2/PR3** — unaffected; `completeLesson` (star/XP accrual, best-of stars,
  delta-only XP) is untouched by this change
- **INV-C1/C2/C3** — `tsc -b`, `t()`/`localize()` for all copy, and `bun run build` all
  still hold; no hardcoded strings introduced
- **INV-C5** — no new icons; the `Lock` import is removed from `BlocksHome.tsx` since it
  becomes unused there

## Implementation steps

1. Remove `unlockAtXP` from `World` and every blocks world data file
2. Rework `isLessonAvailable` / `areBonusWorldsUnlocked` in `useProgress.ts` to make the
   blocks path unconditionally free while leaving the thinking path's logic untouched
3. Update `progressStats.ts` so derived blocks `WorldStats.unlocked` is always `true`
4. Strip lock UI from `BlocksHome.tsx` (world cards, bonus cards, lesson cards) and the
   now-unused props threading it in `App.tsx`
5. Update translations (drop two dead keys, always show the "bonus unlocked" line)
6. Update `.ai/specs/invariants.md` and `.ai/specs/worlds.md`
7. Update the four affected test files to assert the new free-play behaviour
8. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test`

## Spec changes (drafted)

See invariants.md and worlds.md diffs in this commit.

## Rollback approach

Revert this commit — the change is additive-free (removes gating code/data, no new
persisted state shape), so a plain revert restores the previous XP/finale gates with no
migration needed.

## Implementation notes

Implemented as planned. `bun test`, `bun run type-check`, and `bun run build` all pass.
`bunx biome ci` is a no-op on these files (its `files.includes` only covers `src/*.js`
and `scripts/*.mjs`, not the `.ts`/`.tsx` files this change touches).

## Correction — lessons stay sequential (same day)

The first pass implemented "fully free — any lesson, any world" per an explicit
clarifying question. The user then corrected that: only worlds should be free; lessons
within a world should stay sequential, as they always were. Reverted:

- `src/store/useProgress.ts` — `isLessonAvailable` no longer short-circuits `true` for
  blocks world ids. Restored the bonus/tutorial-gated branch (`BONUS_WORLD_IDS`,
  `TUTORIAL_GATED_BONUS_WORLDS`) and the general sequential branch, both used for blocks
  worlds again exactly as before this feature — minus the `portal-4` finale requirement,
  which is gone for good (that was a world-level gate).
- `src/screens/BlocksHome.tsx` / `src/App.tsx` — restored the per-lesson lock UI and the
  `isLessonUnlocked` prop threading; the world-map-level lock UI stays removed.
- `.ai/specs/invariants.md` / `.ai/specs/worlds.md` — INV-L1 widened back to both paths;
  INV-L2 reworded to be explicit it's about world access only.
- `tests/coordinateCoveLessons.test.ts`, `tests/orchestraLessons.test.ts`,
  `tests/ecoCityLessons.test.ts` — restored sequential-unlock assertions, minus the
  `portal-4` requirement.

All three verification commands re-run clean after the correction. See the decision log
entry above for the full rationale.

## Follow-up — the tutorial is optional, not a gate (same day)

Restoring sequential unlock brought back a pre-existing detail: lesson 1 in every
tutorial-bearing world was locked until the tutorial (lesson 0) was completed. Verified
in-browser, then confirmed with the user this should also be removed — the tutorial stays
playable but stops being a prerequisite for lesson 1. Lesson 2 onward is unaffected.

- `src/store/useProgress.ts` — `isLessonAvailable` rewritten as a single function: lesson
  0 always open; lesson 1 always open for every blocks-path world id (`BLOCKS_WORLD_IDS`,
  derived from `WORLDS` — covers both tutorial-bearing and untutorialed bonus worlds
  uniformly) and otherwise (thinking path) requires lesson 0 completed; lesson N ≥ 2
  always requires lesson N-1. `BONUS_WORLD_IDS` / `TUTORIAL_GATED_BONUS_WORLDS` removed —
  no longer needed now that bonus and main blocks worlds follow one rule.
- `.ai/specs/invariants.md` / `.ai/specs/worlds.md` — INV-L1 gains the tutorial-optional
  exception, scoped to blocks-path worlds only.
- `tests/coordinateCoveLessons.test.ts`, `tests/orchestraLessons.test.ts`,
  `tests/ecoCityLessons.test.ts` — updated for lesson 1 always open.
- `tests/lessonUnlock.test.ts` (new) — direct coverage for a main world and a thinking
  world, since no test previously exercised this path in isolation.

See `.ai/decisions/log/2026-08-29-03-blocks-path-tutorial-becomes-optional-not-a-gate.md`
for full rationale. All three verification commands pass after this follow-up.
