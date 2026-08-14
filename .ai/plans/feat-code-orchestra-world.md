# Plan: Code Orchestra Bonus World

**Slug:** `feat-code-orchestra-world`
**Date:** 2026-08-14
**Status:** done

## Request

> Could you implement the plan?

## Decision

Implement only the roadmap's first release: Code Orchestra, a bilingual 10-lesson blocks bonus world for ages 8–12. It will use the existing grid, movement, loop, and function support, remain behind the existing bonus-world completion gate, and introduce no dependency or engine change.

## Alternatives considered

| Alternative | Why rejected |
|---|---|
| Implement Spatial Studio too | The roadmap explicitly requires a separate interaction prototype after Code Orchestra. |
| Add new music/audio mechanics | Existing sounds do not encode puzzles; audio recognition would add accessibility and implementation scope. |
| Make Orchestra a main XP-gated world | It combines advanced concepts and fits the existing bonus-world model. |

## Invariants check

| Invariant | Affected? | Notes |
|---|---|---|
| INV-P1–P4 | no | Static local data only; no auth, ads, or network. |
| INV-PR1–PR4 | no | Progress and scoring logic unchanged. |
| INV-L1 | yes | Lessons 1–10 retain sequential unlock after the world is open. |
| INV-L2 | yes | The new world uses the existing bonus completion gate, not a reachable XP value. |
| INV-L3 | no | Thinking path unchanged. |
| INV-G1–G4 | yes | Existing bounded grid, collisions, action cap, and sandbox remain unchanged. |
| INV-C1/C3 | yes | All quality gates must pass. |
| INV-C2/I1 | yes | Every world and lesson string has English and Indonesian content. |
| INV-C4/C5 | no | No persistence or icon changes. |
| INV-I2 | no | Existing world and lesson layouts already wrap/truncate localized data. |
| INV-Q1/Q2 | yes | Audit below defines distinct mechanic/scenario pairs. |
| INV-Q3/Q4 | no | Blocks lessons have no true/false answers or distractors. |
| INV-Q5 | yes | Lessons progress from one loop to looped/reused function compositions. |

## Content audit and exact lesson design

All grids are zero-indexed `[row, col]`. Movement automatically collects notes.

| # | Title EN / ID | Core mechanic + scenario | Grid route and exact optimal solution | Categories / required | Optimal; thresholds |
|---|---|---|---|---|---|
| 1 | Opening Beat / Ketukan Pembuka | one loop; four-note opening line | 3×6, start `[1,0]`, notes `[1,1..4]`; repeat right ×4 | move, loops / loops | 3; `[9,6,4,3]` |
| 2 | Corner Rhythm / Ritme di Tikungan | loop plus turn; L-shaped verse | 5×6, start `[1,0]`, notes `[1,1..4]`,`[2..3,4]`; right ×4, down ×2 | move, loops / loops | 6; `[13,9,7,6]` |
| 3 | Echo Bars / Birama Gema | repeated two-move stair phrase | 6×6, start `[0,0]`, notes `[0,1],[1,1],[1,2],[2,2],[2,3],[3,3]`; repeat(right,down) ×3 | move, loops / loops | 4; `[12,8,5,4]` |
| 4 | Mirror Melody / Melodi Cermin | two matching stair phrases | 5×7, start `[2,0]`, notes across top/bottom arms ending `[2,6]`; right×2, up×2, right×2, down×4, right×2, up×2 | move, loops / loops | 6; `[14,10,8,6]` |
| 5 | Three-Bar Beat / Ketukan Tiga Birama | one loop around a repeated three-move bar | 5×7, start `[0,0]`, notes at each step along three repetitions of right×2 then down; repeat(right, right, down) ×3 | move, loops / loops | 5; `[15,10,7,5]` |
| 6 | Chorus Function / Fungsi Refrain | define and call a short chorus | 3×7, start `[1,0]`, notes `[1,2],[1,4],[1,6]`; function chorus = right×2, call ×3 | move, functions / functions | 6; `[15,11,8,6]` |
| 7 | Chorus Encore / Refrain Ulangan | reuse one corner function from two positions | 7×7, start `[0,0]`, notes `[0,2],[2,2],[2,4],[4,4]`; phrase = right×2, down×2; call ×2 | move, functions / functions | 7; `[18,13,9,7]` |
| 8 | Loop the Chorus / Ulangi Refrain | function call inside a loop | 7×7, start `[0,0]`, notes after each right/down stair segment ending `[6,6]`; phrase = right,down; repeat call ×6 | move, loops, functions / functions, loops | 6; `[17,12,8,6]` |
| 9 | Shortest Arrangement / Aransemen Terpendek | choose and encode an efficient repeated square-wave phrase | 7×8, start `[1,0]`, route repeats right×2,down×2,right×2,up×2 then final right; function wave plus loop/calls | move, loops, functions / functions, loops | 14; `[30,22,17,14]` |
| 10 | Grand Finale / Final Akbar | compose loops and a reusable function to collect the finale notes | 8×8, start `[0,0]`, zigzag verse ending `[4,0]`, right sweep to `[4,7]`, final drop to `[6,7]`; function zigzag = right×2, down×2, left×2, down×2; call once, right×7, down×2; notes at each section endpoint | move, loops, functions / functions, loops | 17; `[36,27,21,17]` |

Before implementation, routes 4, 9, and 10 may be adjusted only to make them bounded and solvable; their mechanic/scenario and cognitive level must not change. Every lesson gets two bilingual hints: first names the next abstraction, second describes the exact repeated phrase.

**Uniqueness:** Each lesson advances a distinct composition task: straight opening, turn, staircase echo, mirror, repeated bars, first chorus function, positional reuse, looped call, optimization, and multi-section finale. Although Space and Factory teach loops/functions separately, Orchestra uniquely asks children to compose musical phrases and combine both abstractions; it does not repeat the same mechanic and scenario pair.

**Difficulty:** Lessons 1–5 introduce increasingly complex loops and repeated phrases. Lessons 6–8 add function definition, positional reuse, and a function call inside a loop. Lessons 9–10 require selecting an abstraction and composing multiple sections rather than merely traversing a longer route.

## Files to change

| File | Change |
|---|---|
| `src/types/index.ts` | Add `orchestra` world ID. |
| `src/data/worlds.ts` | Add bilingual bonus-world metadata. |
| `src/data/lessons.ts` | Add 10 bilingual, solvable lessons. |
| `src/store/useProgress.ts` | Recognize Orchestra as a bonus world for lesson gating. |
| `.ai/specs/worlds.md` | Add the shipped world to the blocks catalog. |
| `README.md` | Correct bonus-world counts/catalog and data-file descriptions. |
| `.ai/plans/content-more-world-ideas.md` | Note that the first roadmap item is implemented. |
| `.ai/decisions/log.md` | Record the implementation decision. |

## Spec changes

Add `orchestra | 🎵 | Loops & Functions | 8–12 | bonus gate | 10` to the blocks catalog and document it as a bonus world using existing categories.

## Implementation steps

1. Add the world ID, metadata, and bonus unlock membership.
2. Add and validate all 10 bilingual lessons against the exact design table.
3. Update the catalog documentation, roadmap status/notes, and decision log.
4. Programmatically simulate each documented movement solution through `applyAction` and `checkWin`.
5. Run `bunx biome ci`, `bun run type-check`, and `bun run build`.
6. Mark the plan `in-review`, commit, then complete code and kid reviews.

## Rollback

Revert the implementation commit. Existing localStorage records remain compatible because the schema and key do not change.

## Review notes

The initial draft was rejected because several routes and fields were incomplete and because existing bonus lessons bypassed sequential unlock. Implementation resolves those blockers with exact lesson data, canonical-route tests, and a shared sequential unlock helper for all bonus worlds.

## Implementation notes

Implemented Code Orchestra as the only roadmap world in this release. The final lesson data contains the authoritative exact bilingual content and coordinates. Added `tests/orchestraLessons.test.ts` to simulate all canonical routes and regress the bonus lesson gate. No engine, dependency, persistence-schema, or spatial-world changes were made.

Dual review passed after adding the required finale endpoint note, rejecting shortcut wins, gating lesson 1 behind the Orchestra tutorial, and consistently scoping the concept to Loops & Functions.
