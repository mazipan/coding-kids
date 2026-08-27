# Plan: Eco City Bonus World

**Slug:** `feat-eco-city-world`
**Date:** 2026-08-22
**Status:** done
**Issue:** #55

## Request

> Roadmap priority 4 from `.ai/plans/2026-08-11-content-more-world-ideas.md` — 🌱 Eco City / Kota Hijau, ages 10–14. Help builder Sol route recycling, water and power tokens to finish a neighbourhood. Concept promise: "Break one big mission into smaller algorithms and reuse what works."

## Decision

Ship Eco City as a bilingual 10-lesson blocks **bonus** world (`eco`), built entirely from the existing grid engine and the existing Blockly categories (`move`, `loops`, `variables`, `logic`, `functions`, `lists`). No engine change, no new block, no new dependency. Every canonical route is simulated in `tests/ecoCityLessons.test.ts` through `applyAction` and `checkWin`, matching the precedent Code Orchestra set.

Eco City is the seventh bonus world and stays behind the existing shared bonus gate (`portal-4` complete), with normal sequential unlock inside the world. Lesson 1 is additionally gated behind the world tutorial `eco-0`, the same way Code Orchestra and Coordinate Cove are.

## Alternatives considered

| Alternative | Why rejected |
|---|---|
| Make Eco City a main XP-gated world | It is a capstone that mixes six categories already taught by the main path; the bonus model is where the other capstones live. |
| Add a "recycling sorting" mechanic (bins accepting only one token type) | Needs a new engine concept (typed items + a drop action). The issue explicitly keeps objectives route-based. |
| Teach real recycling/water/power facts and assess them | The issue forbids it: the lesson tests algorithm design, not environmental trivia. Facts appear as scenery and are always explained inside the puzzle. |
| Reuse a `reach_goal` finale so the 🏙️ goal cell shows | `GameGrid` does not render `goalPos` at all, and `reach_goal` would let a child skip every token. All ten lessons use `collect_all`. |

## Invariants check

| Invariant | Affected? | Notes |
|---|---|---|
| INV-P1–P4 | no | Static local lesson data only. No network, storage, auth, or ads. |
| INV-PR1–PR4 | no | Scoring and progress code untouched. |
| INV-L1 | yes | `eco` joins `BONUS_WORLD_IDS`, so lesson N requires lesson N−1; lesson 1 requires the `eco-0` tutorial. |
| INV-L2 | yes | `unlockAtXP: 999999` + `isBonus: true` — reachable only through the bonus gate, never by XP. |
| INV-L3 | no | Thinking path untouched. |
| INV-G3 loop guard | no | No `controls_whileUntil` and no sensors in any Eco City lesson, so the `MAX_LOOP_TICKS` trap is never exercised by this world. |
| INV-G1 | yes | Every canonical route is simulated and asserted never to reach `crashed`; all coordinates are inside `gridRows`/`gridCols`. |
| INV-G2 | yes | Lessons 5, 9 and 10 place obstacles; the test proves no canonical route steps on one. |
| INV-G3 | yes | The longest canonical route is 15 actions, far under `MAX_ACTIONS = 200`. |
| INV-G4 | no | No sandbox or generator change. |
| INV-C1/C3 | yes | `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` all run before commit. |
| INV-C2/I1 | yes | Every `title`, `story`, `mascotMessage`, hint, and all world metadata carry `en` and `id`. |
| INV-C4 | no | No persistence change; new lesson IDs are additive so existing saves need no migration. |
| INV-C5 | no | No icons added. Lesson copy uses emoji only as scenery, never as a functional control. |
| INV-I2 | no | Existing world/lesson layouts already wrap localized text. |
| INV-Q1/Q2 | yes | Audit below. |
| INV-Q3/Q4 | no | Blocks lessons have no true-false answers and no multiple-choice distractors. |
| INV-Q5 | yes | Lessons 1–5 build one abstraction at a time; 6–10 require choosing and composing abstractions. |

## Content audit and exact lesson design

All grids are zero-indexed `[row, col]`. Movement auto-collects a token when the character **steps onto** its cell, so no token is ever placed on `startPos`. Block counts follow the workspace's own accounting (`workspace.getAllBlocks(false)`): a Repeat costs 2 blocks (`controls_repeat_ext` + its number) plus its body; a function costs 1 for the definition plus its body, and 1 per call.

| # | Title EN / ID | Core mechanic + scenario | Grid, start, tokens, obstacles | Canonical route | Categories / required | Optimal; thresholds |
|---|---|---|---|---|---|---|
| 1 | Two Deliveries / Dua Pengiriman | split one mission into two straight legs — no abstraction yet | 4×5, start `[0,0]`, tokens `[0,3]`,`[2,3]` | R×3, D×2 | move, loops / — | 5; `[12,8,6,5]` |
| 2 | Solar Street / Jalan Surya | one loop over one repeated street segment | 3×8, start `[1,0]`, tokens `[1,1..6]` | R×6 | move, loops / loops | 3; `[9,6,4,3]` |
| 3 | One Way Round / Sekali Putar | pick the collection **order** that never doubles back | 5×7, start `[0,0]`, tokens `[0,2]`,`[0,5]`,`[2,5]`,`[4,5]`,`[4,2]` | R×5, D×4, L×3 | move, loops / loops | 9; `[20,14,11,9]` |
| 4 | Same Street Twice / Jalan Sama Dua Kali | a variable names the length every street shares | 4×7, start `[0,0]`, tokens `[0,3]`,`[3,3]`,`[3,6]` | R×3, D×3, R×3 | move, loops, variables / variables | 11; `[24,17,13,11]` |
| 5 | Gate Closed Today / Gerbang Tutup Hari Ini | a condition on a stated, known value picks the open lane | 5×7, start `[0,0]`, tokens `[2,3]`,`[2,6]`,`[4,6]`, obstacles `[0,3]`,`[1,3]` | D×2, R×6, D×2 | move, loops, logic, variables / logic | 13; `[28,20,16,13]` |
| 6 | Name the Block / Beri Nama Blok | extract one repeated route into a named function | 5×7, start `[0,0]`, tokens `[1,2]`,`[2,4]`,`[3,6]` | (R,D,R) ×3 | move, functions / functions | 7; `[16,12,9,7]` |
| 7 | Three Districts / Tiga Distrik | reuse one function across districts, with the link road inside the loop | 7×10, start `[0,0]`, tokens `[2,2]`,`[4,5]`,`[6,8]` | (R,D,R,D, R) ×3 | move, loops, functions / functions | 9; `[22,16,12,9]` |
| 8 | Sol's Stop List / Daftar Henti Sol | hold the round as an ordered list of stops and work through it | 5×9, start `[2,0]`, tokens `[2,2]`,`[0,5]`,`[4,8]` | R×2, U×2, R×3, D×4, R×3 | move, loops, variables, lists / lists | 19; `[40,29,23,19]` |
| 9 | Two Gates, One Plan / Dua Gerbang, Satu Rencana | compare two valid plans and take the cheaper one | 7×7, start `[3,0]`, tokens `[1,3]`,`[3,6]`, obstacles `[0,3]`,`[2,3]`,`[3,3]`,`[4,3]`,`[5,3]` | U×2, R×6, D×2 | move, loops, logic, functions / loops | 9; `[20,14,11,9]` |
| 10 | Eco City Finale / Final Kota Hijau | compose a function, a loop over it, and two more loops around an obstacle | 7×9, start `[0,0]`, tokens `[1,2]`,`[2,4]`,`[3,6]`,`[6,8]`, obstacles `[4,0..5]` | (R,R,D) ×3, R×2, D×3 | all six / functions, loops | 13; `[28,20,16,13]` |

Every lesson is `goalType: 'collect_all'`. Every lesson gets two bilingual hints: hint 1 names the next abstraction, hint 2 states the exact route or phrase.

### Uniqueness within Eco City (INV-Q1)

Each lesson pairs a distinct mechanic with a distinct scenario: two legs / a delivery round → one loop / a solar street → collection order / a kerbside round → a variable as a shared length / three same-length streets → a condition on a stated value / a closed gate → function extraction / one repeated street block → function reuse plus a link road / three districts → an ordered list / a stop list → plan comparison / two gates across a tram line → full composition / the city finale. No two share both.

### Cross-world freshness (INV-Q2)

The nearest neighbours and why each stays distinct:

- **City Parking** (`parking`, Sorting & Routing) — the issue's named risk. Parking is about sorting cars and finding the shortest route; Eco City never sorts and never asks for a shortest path. Its wins come from *encoding* a route in fewer blocks by naming and reusing a sub-route.
- **Code Orchestra** (`orchestra`, Loops & Functions) — Orchestra composes musical phrases on empty grids and never uses obstacles, variables, logic, or lists. Eco City's function bodies (`R,D,R` and `R,R,D`) differ from Orchestra's (`R,R` and `R,D`), lesson 7 puts a *link road* inside the loop body rather than a bare call, and lessons 5, 9 and 10 are obstacle-constrained, which Orchestra never is.
- **Ocean Deep** (`ocean`, Variables) — Ocean uses a variable as a tally of what has been collected. Eco City lesson 4 deliberately avoids the tally angle and uses a variable as a *named length reused by three loops*.
- **Time Portal** (`portal`, Arrays & Lists) — Portal uses a list to track what has already been visited. Eco City lesson 8 uses a list as an ordered **work queue** written before the round starts.

### Difficulty curve (INV-Q5)

Lessons 1–5 add one idea at a time on short routes (a two-leg sequence, a single loop, an order choice, a named length, a stated condition). Lessons 6–10 stop supplying the abstraction: the child must decide *what to extract* (6), reuse it from a moving start position with a link step folded into the loop (7), keep an ordered plan across a three-direction route (8), cost two competing plans and pick one (9), and compose a function, a loop over it, and two further loops around an obstacle (10). Difficulty comes from cognitive load, not from bigger grids alone.

### Environmental content (issue guardrail)

Recycling, water and power appear only as scenery and are always explained inside the same sentence that uses them ("the glass bank on the corner", "the north gate is closed for repairs today"). No lesson asks a child to know a fact about the environment in order to solve it.

## Files to change

| File | Change |
|---|---|
| `src/types/index.ts` | Add `eco` to the `WorldId` union. |
| `src/data/worlds.ts` | Add the bilingual Eco City bonus-world entry. |
| `src/data/lessons.ts` | Add the `eco-0` tutorial plus 10 bilingual lessons. |
| `src/store/useProgress.ts` | Add `eco` to `BONUS_WORLD_IDS` and `TUTORIAL_GATED_BONUS_WORLDS`. |
| `src/components/BlocklyWalkthrough.tsx` | Add the two-step `eco` teach sequence (loops, then functions). |
| `src/i18n/translations.ts` | Update the hardcoded `landing.worlds.title` count (EN + ID). |
| `tests/ecoCityLessons.test.ts` | Simulate every canonical route; assert the bonus gate. |
| `.ai/specs/worlds.md` | Add `eco` to the blocks catalog. |
| `.ai/plans/2026-08-11-content-more-world-ideas.md` | Mark roadmap priority 4 shipped. |
| `README.md` | Bonus-world table and world counts. |
| `.ai/decisions/log.md` | Record the decision. |

## Spec changes

Add `eco | 🌱 | Decomposition & Reuse | 10–14 | bonus gate | 10` to the blocks catalog in `.ai/specs/worlds.md`, documented as a bonus world that uses only existing Blockly categories.

## Implementation steps

1. Add the world ID, metadata, and bonus-gate membership.
2. Add the tutorial and all 10 bilingual lessons from the design table.
3. Add `tests/ecoCityLessons.test.ts` simulating every canonical route through `applyAction`/`checkWin`, plus obstacle and gate assertions.
4. Add the walkthrough entry and update the landing world count.
5. Update the catalog, roadmap status, README, and decision log.
6. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test`.

## Rollback

Revert the implementation commit. Lesson IDs are additive and the localStorage key and schema are unchanged, so existing saves stay valid.

## Review notes

Drive-by correction: `landing.worlds.title` still read "24 Worlds to Explore" after Code Orchestra took the total to 25. Adding Eco City makes it 26, and both the EN and ID literals are corrected in this change.

## Implementation notes

Implemented as planned. `tests/ecoCityLessons.test.ts` simulates all ten canonical routes, asserts none reaches `crashed`, asserts every lesson wins on its route, asserts no token sits on a start cell or an obstacle, and regresses the bonus/tutorial gate. The tutorial-gated bonus set in `useProgress.ts` was generalized from the single `orchestra` special case to a named set so Eco City reuses it instead of adding a second branch.

### Merge with Coordinate Cove and Spatial Studio (2026-08-22)

`main` moved ahead with Coordinate Cove (`cove`, blocks bonus world #6 with read-only position sensors) and Spatial Studio (`spatial`, thinking world #14) while this branch was open. Resolved by keeping both sides everywhere and correcting the derived numbers:

- `TUTORIAL_GATED_BONUS_WORLDS` — `main` had independently generalized the same `orchestra`-only branch this plan generalized. `main`'s name is kept and `eco` added to it, rather than shipping two helpers that do the same job.
- Eco City's theme moved from emerald (`#34d399`) to lime (`#a3e635`). Coordinate Cove shipped a teal (`#2dd4bf`) theme close enough that the two bonus cards read as the same world side by side.
- Eco City is now bonus world 7, not 6, and the `LESSONS` array orders its block after Cove's to match `WORLDS`.
- `landing.worlds.title` goes to 28 (14 blocks + 14 thinking), and the README bonus/blocks counts to 7 and 14.
- Eco City takes no `sensors` category. Position sensors now exist, but reading a coordinate is Cove's concept; Eco City's lessons are about naming and reusing a sub-route, which a sensor does not help with. The `availableCategories` in the design table above are unchanged by the merge.
