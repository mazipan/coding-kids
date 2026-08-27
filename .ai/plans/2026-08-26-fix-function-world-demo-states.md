# fix-function-world-demo-states

**Slug:** `fix-function-world-demo-states`
**Date:** 2026-08-26
**Status:** approved
**Branch:** claude/coding-blocks-intro-diff-ae4g0d

---

## Request

> on coding blocks for robots factory and time portal, why the intro have no "show me example",
> but only "let's go"? why it's different?
>
> yes fix all of them

---

## Problem

`BlocklyWalkthrough` decides its final button label from a single lookup:

```ts
const hasDemoState = world.id in DEMO_STATES
```

A world with a `DEMO_STATES` entry ends its teach phase with "👀 Show me an example!", loads a
prebuilt workspace and enters the `demo` phase. A world without one ends with a bare "Let's go!"
and simply closes.

`DEMO_STATES` covered `jungle, space, loops, ocean, caves, portal, cove`. `getTeachSteps` covered
those plus `factory, orchestra, eco` — so those three worlds, and only those three, showed the
degraded intro. Time Portal was never affected (it has had a demo since 937c965); the report was
about Robot Factory.

The three affected worlds are exactly the three that teach **functions**. Every existing demo is
built only from blocks that serialize as plain JSON with shadow inputs (`move_*`,
`controls_repeat_ext`, `controls_if`, `variables_*`, `logic_compare`, `sensor_col`). A functions
demo needs a `procedures_defnoreturn` / `procedures_callnoreturn` pair, where the call block
carries an `extraState` that must resolve against the definition — which is why nobody hand-wrote
one.

A second, smaller defect in the same table: the Ocean demo hardcodes the variable name `steps`,
while the teach diagram the child has just read calls it `langkah` in Indonesian. The injected
workspace contradicts the lesson.

---

## Decision

Add the three missing demo states, and make `DEMO_STATES` language-aware so the identifiers inside
the injected workspace match the names the teach diagram just showed.

`DEMO_STATES` becomes `Partial<Record<string, (lang: 'en' | 'id') => object>>`. Static demos become
`() => ({ … })`; the ocean, factory, orchestra and eco demos read `lang` to pick their variable or
procedure name.

The three new demos mirror their world's own teach diagram and, when run, solve that world's
tutorial lesson — the same relationship the jungle, space and portal demos already have with theirs:

| World | Demo | Moves | Tutorial |
|-------|------|-------|----------|
| `factory` | `function move3Right` = 3 × Move Right, called twice | 6 | `factory-0`, 3×8 grid, start `[1,0]`, gears at `[1,2]`/`[1,5]` |
| `orchestra` | `function chorus` = Repeat 2 × Move Right, called twice | 4 | `orchestra-0`, 3×5 grid, start `[1,0]`, note at `[1,4]` |
| `eco` | `function district` = 2 × Move Right, called twice | 4 | `eco-0`, 3×5 grid, start `[1,0]`, token at `[1,4]` |

Orchestra puts a loop *inside* the function because the world teaches "Loops & Functions" and its
walkthrough has two teach steps; eco keeps the body a flat pair of moves because it teaches
decomposition and reuse, not looping. That keeps the two demos structurally distinct.

A functions demo occupies two top-level stacks (a definition and a call stack) — Blockly gives a
procedure definition its own root, there is no way to nest it. `loadState` therefore gains an explicit
`scroll(20, 20)` so a demo always reads from the first row down, clear of the demo card that runs
along the bottom edge on a phone.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Leave the three worlds on "Let's go!" and delete the branch | The demo phase is the payoff of the walkthrough. Functions are the hardest concept in the blocks path — dropping the worked example there is backwards. |
| Keep `DEMO_STATES` static and use English procedure names everywhere | An Indonesian child reads "🔧 Fungsi: gerak3Kanan" in the diagram and then finds a block named `move3Right`. That is the contradiction, not a shortcut around it. |
| Generate the demo state at runtime by building blocks against the live workspace | Needs a `WorkspaceSvg` and imperative Blockly calls inside a presentational component. The serialized-JSON table is the established shape. |
| Make each demo the literal minimal solution of its tutorial | `factory-0`'s optimum is 4 blocks (`moveTwo` × 2 legs), which does not reach the gear at column 5. The teach diagram's `move3Right` does, and matching the diagram matters more than matching the optimum on a lesson whose star thresholds are `[999, 999]`. |
| Also add teach steps for `jurassic`/`parking`/`sorting`/`debugging` | Those worlds ship no `isTutorial` lesson, so no walkthrough ever mounts. Out of scope; noted below. |

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
| INV-PR3 XP is delta-only | no | Tutorials are `xpReward: 0`, `starThresholds: [999, 999]`. |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | no | |
| INV-L3 thinking worlds unlocked | no | Blocks path only. |
| INV-G1 bounded grid | **yes** | Each demo is verified to stay inside its tutorial grid: 6 moves in 8 columns, 4 moves in 5 columns. |
| INV-G2 obstacle collision | **yes** | All three tutorial grids are `emptyGrid(…)` — no obstacles. |
| INV-G3 action cap | **yes** | 6, 4 and 4 actions. Blockly injects `__tick()` at the top of a procedure body as its recursion guard; `__tick` is already in the exposed set. |
| INV-G4 sandbox | no | No new identifier is exposed. Generated code is `function name() { … }` plus calls, which needs nothing beyond the seven existing names. |
| INV-C1 TypeScript strict | **yes** | `DEMO_STATES` value type changes from `object` to `(lang) => object`. |
| INV-C2 no hardcoded strings | **yes** | Procedure and variable names are user-visible block text; they follow the `lang === 'id' ? … : …` convention this file already uses for its diagrams. |
| INV-C3 build passes | **yes** | Gate. |
| INV-C4 localStorage only | no | |
| INV-C5 lucide-react only | no | No icon change. |
| INV-I1 all keys have EN value | no | No new `translations.ts` keys. |
| INV-I2 no layout assumptions | no | |
| INV-Q1…Q5 content quality | no | No lesson added or modified. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/components/BlocklyWalkthrough.tsx` | edit | `DEMO_STATES` → language-aware builders; add `factory`, `orchestra`, `eco`; localize ocean's variable name; export `getDemoState` for the test |
| `src/components/BlocklyWorkspace.tsx` | edit | `loadState` centres the viewport on the injected blocks |
| `tests/walkthroughDemos.test.ts` | add | every teach-step world has a demo; the three new demos win their tutorial without crashing |
| `.ai/decisions/log/2026-08-26-02-…md` | add | decision record, one file per the `.ai/decisions/log/` convention |
| `.ai/agents/context.md` | edit | gotcha: procedure demo serialization shape |

---

## Spec changes

None. No invariant, store, world or i18n spec statement changes — the walkthrough is not specified
in `.ai/specs/`. `.ai/agents/context.md` gains one gotcha entry:

> - A `DEMO_STATES` entry in `BlocklyWalkthrough.tsx` is what turns the last teach-step button into
>   "Show me an example!". A functions demo is two top-level stacks: `procedures_defnoreturn` with
>   `fields: { NAME }` and `inputs: { STACK }`, plus `procedures_callnoreturn` carrying
>   `extraState: { name }` — the same string, and the definition must come first in the `blocks`
>   array or the call cannot resolve it.

---

## Implementation steps

1. Change `DEMO_STATES` to `Partial<Record<string, (lang: 'en' | 'id') => object>>`; wrap the six
   existing static entries in `() => ({ … })`.
2. Localize ocean's variable name to `langkah` / `steps`, matching its diagram.
3. Add `factory`, `orchestra` and `eco` entries per the table above, with localized procedure names
   `gerak3Kanan`/`move3Right`, `refrain`/`chorus`, `distrik`/`district` — the exact strings their
   diagrams print. Definition first in the array, call stack second, with enough `y` gap that the
   two stacks do not overlap in the zelos renderer.
4. Update the call site: `DEMO_STATES[world.id]!(lang)`.
5. Export `getDemoState(worldId, lang)` so the invariant is testable. The condition the test pins
   is "every world that ships an `isTutorial` lesson has a demo" — that is the user-visible
   condition, since a walkthrough only ever mounts on a tutorial lesson, and it needs no refactor
   of the private teach-step table.
6. Anchor the viewport at the origin in `BlocklyWorkspace.loadState`.
7. Add `tests/walkthroughDemos.test.ts`.
8. Add the decision record and the `context.md` gotcha.
9. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.

---

## Rollback

Revert the commit. `DEMO_STATES` is read-only presentation state with no persistence, so there is
no migration and no stored data to unwind.

---

## Review notes

Scope is bounded to one table and one imperative handle. The only behavioural change outside the
three worlds is the ocean variable rename (a string in an injected demo) and the explicit scroll on
load, which pins the seven pre-existing single-stack demos to the position they already had.

Not fixed here, and filed as a follow-up: `jurassic`, `parking`, `sorting` and `debugging` have no
`isTutorial` lesson, so they never show a walkthrough at all; `getTeachSteps` would silently serve
them the jungle "sequences" slides if one were added.

---

## Implementation notes

Implemented as planned. Three deviations, all discovered while verifying in a real browser:

1. **`scrollCenter()` → `scroll(20, 20)`.** Centring is wrong for a two-stack demo: at 393×852 the
   walkthrough card covers the bottom of the workspace, so centring pushed the call stack behind it
   and the child saw the definition with nothing calling it. Anchoring at the origin reads top-down
   and keeps both stacks clear of the card. It also leaves the seven pre-existing single-stack demos
   exactly where they already sat.
2. **Tighter `y` on the call stacks** (factory 280, orchestra 260, eco 230, down from 320/300/280)
   for the same reason — measured against the rendered zelos block heights, not guessed.
3. **The test asserts tutorial coverage, not teach-step coverage.** `getTeachSteps` rebuilds its
   table on every call, so the jungle fallback cannot be detected by reference identity, and hoisting
   the table to module scope would have been a ~390-line whitespace diff. "Every world with an
   `isTutorial` lesson has a demo" is the condition that actually matters — a walkthrough only mounts
   on a tutorial lesson — and today the two sets are identical.

Verified in Chromium via `playwright-core` (installed outside the repo, no `package.json` change) at
1280×800 and 393×852, in both languages: all three worlds now show "👀 Show me an example!",
inject their two stacks legibly, and pressing Run clears the tutorial ("You're Ready! 🎉"). The
Indonesian run renders `gerak3Kanan` and `Gerak Kanan`. The `Failed to fetch` console errors in
those runs are the sandbox proxy blocking the Google Fonts stylesheet at initial page load — present
on every route, unrelated to this change, and not an INV-P1 concern (INV-P1 governs runtime after
load).

4. **Re-filed onto the new `.ai/` naming convention.** While this branch was open, `main` landed #67:
   plans gained a `{YYYY-MM-DD}-` prefix and `.ai/decisions/log.md` was split into one file per
   decision under `.ai/decisions/log/`. On merging, this plan moved to
   `.ai/plans/2026-08-26-fix-function-world-demo-states.md` and the decision entry became
   `.ai/decisions/log/2026-08-26-02-the-three-functions-worlds-get-a-worked-example-demo.md`
   (`-02` because #64's character-emoji decision already holds `-01` for that date). Body unchanged
   apart from the heading level the per-file format wants.

Gate: `bunx biome ci` clean (its `files.includes` is `src/*.js` + `scripts/*.mjs`, so it does not
cover `.tsx` in this repo), `bun run type-check` clean, `bun run build` clean, `bun test`
171 → 176 passing (5 new).
