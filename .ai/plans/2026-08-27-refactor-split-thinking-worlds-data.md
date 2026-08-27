<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Split `src/data/thinkingWorlds.ts` into one file per thinking world

**Slug:** `refactor-split-thinking-worlds-data`
**Date:** 2026-08-27
**Status:** done

---

## Request

> how about brain thinking paths, seems we also need to split it over world

Follow-up to `.ai/plans/2026-08-27-refactor-split-worlds-data.md`, which split `src/data/worlds.ts` (the blocks path) into one file per world and flagged `src/data/thinkingWorlds.ts` as having the identical shape.

---

## Decision

`src/data/thinkingWorlds.ts` is 176 lines holding all 14 `ThinkingWorld` objects (patterns, logic, counting, memory, nature, numbers, decomposition, abstraction, math_reasoning, induction, deduction, planning, probability, spatial) in one array literal — the same growing-file problem as `worlds.ts` had. Apply the identical treatment: convert to a `src/data/thinkingWorlds/` directory, one file per world exporting a single `{camelCaseId}World: ThinkingWorld` const, plus `index.ts` assembling `THINKING_WORLDS` in the original order and re-exporting `getThinkingWorld` unchanged. All consumers import from `'../data/thinkingWorlds'` / `'./data/thinkingWorlds'` (no deeper path), so this is transparent to every call site — same as the blocks-path split.

`math_reasoning` (snake_case `id`) gets a camelCase export `mathReasoningWorld` to match the file's own JS identifier conventions; the `id` field itself is untouched (it's read as a string/`ThinkingWorldId`, not as an import name).

`src/data/thinkingLessons.ts` / `thinkingLessonsAdvanced.ts` (the actual puzzle content, 2947 + 4612 lines) are out of scope — they're already split by tier per world, not by world, and the request named "brain thinking paths" mirroring the worlds-file split specifically, not a request to also restructure lesson content.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Keep one array | Same growth problem the previous split fixed for `worlds.ts` |
| Also split `thinkingLessons.ts` / `thinkingLessonsAdvanced.ts` per world | Not what was asked; those files are already split by tier (0–9 / 10–19) for reviewable diffs per `.ai/agents/context.md`'s gotchas, and splitting ~280 lessons across 14 files is a much larger, separate change |
| One file per world keyed by object instead of array | Same reasoning as the blocks-path decision: `THINKING_WORLDS.find/.map/.reduce/.length` call sites rely on array semantics |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L3 thinking worlds always unlocked | yes | every world keeps `unlockAtXP: 0` verbatim, copied unchanged into its own file |
| INV-G1–G4 game engine | no | thinking path has no game engine |
| INV-C1 TypeScript strict | yes | must still pass with zero errors after split |
| INV-C2 no hardcoded strings | no | world copy already `LocalizedString` + `localize()`; unchanged |
| INV-C3 build passes | yes | verified after split |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/thinkingWorlds.ts` | delete | replaced by `src/data/thinkingWorlds/` directory |
| `src/data/thinkingWorlds/patterns.ts` | add | exports `patternsWorld` |
| `src/data/thinkingWorlds/logic.ts` | add | exports `logicWorld` |
| `src/data/thinkingWorlds/counting.ts` | add | exports `countingWorld` |
| `src/data/thinkingWorlds/memory.ts` | add | exports `memoryWorld` |
| `src/data/thinkingWorlds/nature.ts` | add | exports `natureWorld` |
| `src/data/thinkingWorlds/numbers.ts` | add | exports `numbersWorld` |
| `src/data/thinkingWorlds/decomposition.ts` | add | exports `decompositionWorld` |
| `src/data/thinkingWorlds/abstraction.ts` | add | exports `abstractionWorld` |
| `src/data/thinkingWorlds/mathReasoning.ts` | add | exports `mathReasoningWorld` (id: `math_reasoning`) |
| `src/data/thinkingWorlds/induction.ts` | add | exports `inductionWorld` |
| `src/data/thinkingWorlds/deduction.ts` | add | exports `deductionWorld` |
| `src/data/thinkingWorlds/planning.ts` | add | exports `planningWorld` |
| `src/data/thinkingWorlds/probability.ts` | add | exports `probabilityWorld` |
| `src/data/thinkingWorlds/spatial.ts` | add | exports `spatialWorld` |
| `src/data/thinkingWorlds/index.ts` | add | assembles `THINKING_WORLDS` array in original order + `getThinkingWorld` |
| `.ai/agents/context.md` | edit | update file-tree entry for `data/thinkingWorlds.ts` → `data/thinkingWorlds/` |
| `.ai/specs/worlds.md` | edit | update "Source:" line + the two "Increment `lessonCount` in `src/data/thinkingWorlds.ts`" references + the "Add the world object to `THINKING_WORLDS`" step |
| `.ai/decisions/log/2026-08-27-06-split-thinking-worlds-data-into-one-file-per-world.md` | add | decision record (checked existing log dates — highest sequence used today is 05) |
| `scripts/audit-thinking-lessons.mjs` | edit | its import used an explicit `../src/data/thinkingWorlds.ts` path (extension included), which does not resolve to a directory the way a bare specifier does — updated to `../src/data/thinkingWorlds/index.ts` |

No other consumer file needs a change — every other import site uses `THINKING_WORLDS`/`getThinkingWorld` from a bare `'../data/thinkingWorlds'` / `'./data/thinkingWorlds'` specifier, which resolves to the directory's `index.ts` automatically.

---

## Spec changes

### `.ai/agents/context.md`

Replace the `thinkingWorlds.ts` file-tree line with a `thinkingWorlds/` entry, same pattern as the `worlds/` entry added by the prior split.

### `.ai/specs/worlds.md`

- Replace `Source: `src/data/thinkingWorlds.ts` — `THINKING_WORLDS` array.` with the directory description.
- Replace both `Increment `lessonCount` in `src/data/thinkingWorlds.ts`` lines with `Increment `lessonCount` in the world's file under `src/data/thinkingWorlds/``.
- Replace `Add the world object to `THINKING_WORLDS` in `src/data/thinkingWorlds.ts`` with `Add a new file exporting the world object under `src/data/thinkingWorlds/`, then register it in `src/data/thinkingWorlds/index.ts``.

---

## Implementation steps

1. Create `src/data/thinkingWorlds/` with one file per world, each exporting a single `{camelCaseId}World: ThinkingWorld` const, content copied verbatim from the corresponding object literal in `src/data/thinkingWorlds.ts`.
2. Create `src/data/thinkingWorlds/index.ts` importing all 14 consts and building `export const THINKING_WORLDS: ThinkingWorld[] = [...]` in the exact original order. Re-export `getThinkingWorld` with identical implementation.
3. Delete `src/data/thinkingWorlds.ts`.
4. Update `.ai/agents/context.md` and `.ai/specs/worlds.md` per "Spec changes" above.
5. Add decision log entry `.ai/decisions/log/2026-08-27-06-split-thinking-worlds-data-into-one-file-per-world.md`.
6. Run `bunx biome ci`, `bun run type-check`, `bun run build` — all three must pass with zero errors.
7. Run `bun test` to confirm no import breaks, including `tests/thinkingWorldsContent.test.ts` and `tests/progressStats.test.ts` which import `THINKING_WORLDS` directly.

---

## Rollback

`git revert` the commit. No localStorage migration needed — source-file reorganization only.

---

## Review notes

Self-reviewed (single-agent session). Confirmed via grep that every consumer (`src/`, `tests/`) imports `THINKING_WORLDS`/`getThinkingWorld` from `'../data/thinkingWorlds'` or `'./data/thinkingWorlds'` with no deeper path, so the directory swap is transparent. Scope stayed bounded to the world-metadata file, matching exactly what the prior split did for the blocks path — did not touch the lesson-content files.

---

## Implementation notes

Implemented as planned, with one addition found during verification: `scripts/audit-thinking-lessons.mjs` imports `THINKING_WORLDS` via an explicit `'../src/data/thinkingWorlds.ts'` path (extension included), which is a literal-file resolution and does not fall through to a directory's `index.ts` the way Vite/tsc's bare-specifier resolution does — `bun run audit-lessons` failed with "Cannot find module" until the import was updated to `'../src/data/thinkingWorlds/index.ts'`. All three verification commands plus `bun run audit-lessons` and `bun test` pass. No other consumer file required edits.
