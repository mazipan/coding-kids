<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Split `src/data/worlds.ts` into one file per world

**Slug:** `refactor-split-worlds-data`
**Date:** 2026-08-27
**Status:** done

---

## Request

> let's split the world data definition, it grows too big now, maybe one file for one world is better

---

## Decision

`src/data/worlds.ts` is 327 lines holding all 14 `World` objects (7 main + 7 bonus) plus `getWorld`. Every future world adds ~14–25 lines to one already-long array literal, making diffs noisy and any single world hard to locate. Convert it to a `src/data/worlds/` directory: one file per world exporting a single `World` const, plus an `index.ts` that imports all of them, assembles `WORLDS` in the existing order, and re-exports `getWorld` unchanged. Import paths (`'../data/worlds'`, `'./data/worlds'`) are untouched — they resolve to the directory's `index.ts` automatically — so this is a pure internal reorganization with zero runtime or UI change.

`src/data/thinkingWorlds.ts` has the identical shape (14 thinking worlds, 176 lines) but was not named in the request and is a separately-named file for a different path (thinking, not blocks). Left untouched; can get the same treatment later if wanted.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Keep one array, just reformat/compact it | Doesn't solve the actual problem — file keeps growing every time a world is added |
| Split into `mainWorlds.ts` + `bonusWorlds.ts` (2 files) | Still grows unbounded within each file; doesn't give each world its own reviewable diff |
| One file per world, keyed by object (`{ jungle: {...}, space: {...} }`) instead of array | `WORLDS.find`, `.filter(w => !w.isBonus)`, `.length`, `.map` call sites throughout the app rely on array semantics — object form would ripple into every consumer for no benefit |

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
| INV-L2 world unlock by XP | no | data unchanged, only its file location |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | must still pass with zero errors after split |
| INV-C2 no hardcoded strings | no | world copy already goes through `LocalizedString` + `localize()`; unchanged |
| INV-C3 build passes | yes | verified after split |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/worlds.ts` | delete | replaced by `src/data/worlds/` directory |
| `src/data/worlds/jungle.ts` | add | exports `jungleWorld: World` |
| `src/data/worlds/space.ts` | add | exports `spaceWorld: World` |
| `src/data/worlds/loops.ts` | add | exports `loopsWorld: World` |
| `src/data/worlds/ocean.ts` | add | exports `oceanWorld: World` |
| `src/data/worlds/caves.ts` | add | exports `cavesWorld: World` |
| `src/data/worlds/factory.ts` | add | exports `factoryWorld: World` |
| `src/data/worlds/portal.ts` | add | exports `portalWorld: World` |
| `src/data/worlds/jurassic.ts` | add | exports `jurassicWorld: World` (bonus) |
| `src/data/worlds/parking.ts` | add | exports `parkingWorld: World` (bonus) |
| `src/data/worlds/sorting.ts` | add | exports `sortingWorld: World` (bonus) |
| `src/data/worlds/debugging.ts` | add | exports `debuggingWorld: World` (bonus) |
| `src/data/worlds/orchestra.ts` | add | exports `orchestraWorld: World` (bonus) |
| `src/data/worlds/cove.ts` | add | exports `coveWorld: World` (bonus) |
| `src/data/worlds/eco.ts` | add | exports `ecoWorld: World` (bonus) |
| `src/data/worlds/index.ts` | add | assembles `WORLDS` array in original order + `getWorld` |
| `.ai/agents/context.md` | edit | update file-tree entry for `data/worlds.ts` → `data/worlds/` |
| `.ai/specs/worlds.md` | edit | update "Source:" line to point at the new directory |
| `.ai/harness/tasks.md` | edit | update the "Files touched" example for adding a new world |
| `.ai/decisions/log/2026-08-27-01-split-worlds-data-into-one-file-per-world.md` | add | decision record |

No consumer file (`App.tsx`, `BlocksHome.tsx`, `LandingScreen.tsx`, `progressStats.ts`) needs a change — all import `WORLDS`/`getWorld` from `'../data/worlds'` or `'./data/worlds'`, which still resolves via the directory's `index.ts`.

---

## Spec changes

### `.ai/agents/context.md`

Replace the `data/worlds.ts` file-tree line with a `data/worlds/` entry describing the split (one file per world + `index.ts`).

### `.ai/specs/worlds.md`

Replace:
> Source: `src/data/worlds.ts` — `WORLDS` array. Each world has `theme` (...)

With:
> Source: `src/data/worlds/` — one file per world (e.g. `jungle.ts` exports `jungleWorld`), assembled into the `WORLDS` array by `index.ts` in the order main worlds then bonus worlds. Each world has `theme` (...)

### `.ai/harness/tasks.md`

Update the "Add a seventh world" example's **Files touched** line from `src/data/worlds.ts` to `src/data/worlds/{new-id}.ts` (new file) `+ src/data/worlds/index.ts` (register it).

---

## Implementation steps

1. Create `src/data/worlds/` directory with one file per world, each exporting a single `{id}World: World` const (camelCase, e.g. `jungleWorld`), content copied verbatim from the corresponding object literal in `src/data/worlds.ts`.
2. Create `src/data/worlds/index.ts` importing all 14 world consts and building `export const WORLDS: World[] = [...]` in the exact original order (7 main worlds, then the `// ── BONUS WORLDS ──` comment, then 7 bonus worlds). Re-export `getWorld` with identical implementation.
3. Delete `src/data/worlds.ts`.
4. Update `.ai/agents/context.md`, `.ai/specs/worlds.md`, `.ai/harness/tasks.md` per "Spec changes" above.
5. Add decision log entry `.ai/decisions/log/2026-08-27-01-split-worlds-data-into-one-file-per-world.md`.
6. Run `bunx biome ci`, `bun run type-check`, `bun run build` — all three must pass with zero errors.
7. Run the full test suite (`bun test` or project's test command) to confirm no import breaks.

---

## Rollback

`git revert` the commit. No localStorage migration needed — this is a source-file reorganization only, no runtime data shape changes.

---

## Review notes

Self-reviewed (single-agent session, no separate reviewer-code pass available). Confirmed: no consumer imports the old file by a path deeper than `'../data/worlds'` / `'./data/worlds'` (grep across `src/` and `tests/`), so the directory + `index.ts` swap is transparent to every call site. Scope stayed bounded to the file split — did not touch `thinkingWorlds.ts`, which has the same shape but wasn't named in the request.

---

## Implementation notes

Implemented exactly as planned. `node_modules` was empty at session start (fresh clone); ran `bun install` first. All three verification commands (`bunx biome ci`, `bun run type-check`, `bun run build`) pass with zero errors. `bun test` (7 files, 304 tests): 295 pass, 1 pre-existing failure + 5 pre-existing errors in `tests/spatialPuzzle.test.ts`, confirmed present before this change too (`git stash` + re-run) and unrelated to the worlds data split — left untouched as out of scope. No consumer file required edits.
