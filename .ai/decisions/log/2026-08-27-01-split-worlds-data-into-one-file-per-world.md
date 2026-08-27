# 2026-08-27 — Split `src/data/worlds.ts` into one file per world

**Context:** `src/data/worlds.ts` held all 14 `World` objects (7 main + 7 bonus) as one 327-line array literal. Every new world adds 14–25 lines to an already-long file, making diffs noisy and any single world's data hard to locate or review in isolation.

**Decision:** Converted `worlds.ts` into a `src/data/worlds/` directory: one file per world, each exporting a single `{id}World: World` const, plus `index.ts` assembling `WORLDS` in the original order (main worlds, then bonus worlds) and re-exporting `getWorld` unchanged. Import paths (`'../data/worlds'`, `'./data/worlds'`) are untouched since they resolve to the directory's `index.ts`.

**Alternatives rejected:**
- Keep one array and just reformat — doesn't stop the file from growing every time a world is added.
- Split into `mainWorlds.ts` + `bonusWorlds.ts` — still grows unbounded within each file.
- Key worlds by object instead of array — `WORLDS.find/.filter/.length/.map` call sites throughout the app rely on array semantics; would ripple into every consumer for no benefit.

**Consequences:** Adding a world is now "add one new file + one import line in `index.ts`" instead of inserting into a growing array — smaller, more reviewable diffs per world. `src/data/thinkingWorlds.ts` has the identical shape and could get the same treatment later, but was left untouched since it wasn't part of this request.
