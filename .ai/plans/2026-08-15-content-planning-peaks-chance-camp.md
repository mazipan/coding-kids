# Plan: Planning Peaks and Chance Camp thinking worlds

**Slug:** `content-planning-peaks-chance-camp`
**Date:** 2026-08-15
**Status:** done

---

## Request

> Last time I spawn some ideas; `.ai/plans/2026-08-11-content-more-world-ideas.md` but only managed to ship 1, can you check if you can pick other ideas execution? respect our rules to add new worlds and levels.

---

## Decision

Execute the two remaining roadmap items that are **pure content** and need no new interaction or engine work: **Planning Peaks** (roadmap priority 3, constraint planning) and **Chance Camp** (roadmap priority 5, probability). Both are brain-training worlds built entirely from puzzle types that already exist and are already rendered generically by `ThinkingLesson.tsx`, so the release adds 20 bilingual lessons and zero new mechanics.

The three remaining roadmap ideas are deliberately **not** executed in this release:

| Idea | Priority | Why not now |
|---|---|---|
| Spatial Studio | 2 | The roadmap requires a spatial-choice **interaction prototype** to be built and passed through code + kid review *before* content authoring. That is a feature plan (new puzzle type in `types/index.ts` + a new view in `ThinkingLesson.tsx`), not a content plan. |
| Eco City | 4 | A blocks world needs 10 grids with exact, simulated, provably-solvable routes (Code Orchestra needed a dedicated route-simulation test). It is a capstone and deserves its own independently revertible release. |
| Coordinate Cove | 6 | Explicitly deferred by the roadmap: meaningful coordinate reading needs read-only row/column sensor blocks, a sandbox exposure decision, and action-cap review. Blocked on a technical plan that does not exist. |

Shipping the two data-only worlds together is a deliberate, narrow exception to the roadmap's "do not batch" guidance. The rationale: both are data-only, they touch disjoint lesson arrays, neither changes runtime behaviour for any existing lesson, and either can be reverted independently by deleting its lesson block and world entry. The guidance exists to keep *engine* and *interaction* risk playtestable one change at a time; there is no such risk here.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Ship Spatial Studio next, as roadmap priority order suggests | Its own roadmap entry makes a prototype a precondition. Authoring 10 spatial lessons against an unreviewed interaction would have to be redone if the interaction fails kid review. |
| Ship only Planning Peaks | The roadmap already sanctions a data-only release, and the request is explicitly about shipping more than one idea. Chance Camp carries identical (zero) technical risk. |
| Ship all five remaining ideas | Two of them are blocked on design work that does not exist yet; the other adds ~30 lessons plus grid simulation to one review. |
| Reuse the `sort` puzzle type for clue-ordering in Planning Peaks | `thinking.sort.prompt` is hardcoded to "Tap numbers from smallest to largest!", which directly contradicts a clue-driven order. `sequence` (prompt: "Tap the steps in the right order!") is correct for this. |
| Use word options on `MathPuzzle` for probability answers | `MathPuzzle.options` is `string[]`, not `LocalizedString[]` — words there could not be translated and would break INV-C2/INV-I1. Non-numeric answers use `if-then`, whose options carry `label: LocalizedString`. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | Static local lesson data only. |
| INV-P2 no data exfiltration | no | No new data collection or transmission. |
| INV-P3 no auth | no | No gate of any kind added. |
| INV-P4 no ads | no | None. |
| INV-PR1 progress never decreases | no | `completeLesson` untouched. |
| INV-PR2 stars are best-of | no | Scoring logic untouched. |
| INV-PR3 XP is delta-only | no | XP logic untouched. |
| INV-PR4 badges are permanent | no | Badge logic untouched. |
| INV-L1 sequential lesson unlock | yes | Both worlds use `{worldId}-{n}` starting at 0; the shared `isLessonUnlocked` path applies unchanged. |
| INV-L2 world unlock by XP | no | Blocks path untouched. |
| INV-L3 thinking worlds always unlocked | yes | Both new worlds set `unlockAtXP: 0`. Asserted by test. |
| INV-G1–G4 game engine | no | No blocks-path or engine change. |
| INV-C1 TypeScript strict | yes | `tsc -b --noEmit` must pass. |
| INV-C2 no hardcoded strings | yes | Every user-visible string is `LocalizedString`; no `t()` key is needed because puzzle prompts are already generic. |
| INV-C3 build passes | yes | `bun run build` must pass. |
| INV-C4 localStorage only | no | No schema or key change. New lesson IDs are additive. |
| INV-C5 lucide-react only | yes | No icons added. **No `→`, `✓`, `✗`, `←` in any new string** — emoji appear only as puzzle content and decorative mascot flavour. |
| INV-I1 all keys have EN value | yes | Every new `LocalizedString` has non-empty `en` and `id`. Asserted by test. |
| INV-I2 no layout assumptions | yes | Indonesian labels kept short enough for the existing sequence card (`w-20`) and option grid; no fixed-width container added. |
| INV-Q1 lesson uniqueness | yes | Audited below — every lesson in a world has a distinct mechanic/scenario pair. |
| INV-Q2 scenario freshness | yes | Audited below — expedition and chance scenarios are new to the catalog. |
| INV-Q3 true-false balance | yes | Planning Peaks has 1 true-false. Chance Camp's true-false answers run false, true, false, true. Asserted by test. |
| INV-Q4 plausible distractors | yes | Every distractor is a documented child misconception — listed per lesson below. |
| INV-Q5 real difficulty curve | yes | Lessons 0–4 are single-constraint / single-step; 5–9 add multi-clue, backward, and data-revision reasoning. |

### Pre-existing violations found during the audit (NOT fixed here)

These predate this change and are out of its scope. Recording them so they are not mistaken for regressions:

- `nature` world: lessons 1, 2 and 5 are the only true-false puzzles and all answer `true` — a run of 3 (INV-Q3).
- `deduction` world: true-false lessons 0, 1 and 3 all answer `true` — a run of 3 (INV-Q3).
- Several existing `tutorial.example` strings embed `→`, `✓` and `✗` (INV-C5).

---

## Content audit

### Cross-world freshness (INV-Q2)

The catalog covers patterns, if/then, arithmetic, memory, science, number sequences, decomposition, abstraction, mathematical reasoning, induction and deduction. Neither **planning under explicit constraints** nor **uncertainty** appears anywhere in it.

The one real adjacency is `decomposition` (Step by Step), which is 10 `sequence` puzzles. Planning Peaks also uses `sequence`, so the boundary must be explicit:

| | `decomposition` | `planning` |
|---|---|---|
| Where the answer comes from | The child's own world knowledge of a familiar routine (you butter bread before you close the sandwich). | Written clues in the mascot line. |
| Is the everyday order the answer? | Yes — it *is* the everyday order. | Not necessarily; the clues override intuition (e.g. light the fire last, photo only at the top). |
| Scenario | Household routines: sandwich, teeth, plant, cocoa, juice, school, cookies, letter, hands, phone. | Mountain expedition: packing, camp rules, bridge timing, climbing safety, schedule. |

No scenario is shared between the two worlds. Same for Chance Camp: no existing lesson anywhere uses marbles, spinners, dice fairness, or tallies.

### Planning Peaks — lesson-by-lesson (INV-Q1, Q4, Q5)

| # | Title EN / ID | Type | Core mechanic | Scenario | Answer / distractor rationale | XP |
|---|---|---|---|---|---|---|
| 0 | Pack by the Clues / Kemas Sesuai Petunjuk | `sequence` | 3 steps, 2 clues (one fixed-first, one before-relation) | Packing the bag | Order map, rope, tent. Intuition says "tent first, it's biggest" — clues override. | 10 |
| 1 | Fire Rule / Aturan Api | `if-then` | Apply one stated prerequisite to pick the next action | Leaving camp | Correct: put out the fire. Distractors: leave camp (ignores the rule), sleep, cook more (both plausible camp actions). | 10 |
| 2 | Camp Setup / Dirikan Kemah | `sequence` | 4 steps, 3 clues (first, before-relation, last) | Pitching camp | Clear ground, tent, sleeping bag, fire. "Fire last" is the counter-intuitive clue. | 12 |
| 3 | Backpack Limit / Batas Ransel | `math` | Capacity subtraction under a stated limit | Weight budget | 8 − 3 − 2 = 3. Distractors: 5 (forgot the rope), 2 (subtracted only in one direction), 13 (added instead of subtracted). | 12 |
| 4 | Closed Bridge / Jembatan Ditutup | `true-false` (**false**) | Validate a plan against a time constraint | Bridge opening hours | Plan crosses at 9, bridge opens after 10. Requires comparing plan to rule, not recall. | 14 |
| 5 | Clue Chain / Rantai Petunjuk | `sequence` | 4 steps, 3 clues including a **right-after** adjacency clue | Trail day | Map, water, pack, eat. Adjacency ("right after") is a new clue type not used in 0 or 2. | 16 |
| 6 | Only What Fits / Hanya yang Muat | `abstraction` / `category-match` | Multi-select against a strict inequality | Weight rule | "Lighter than 3 kg" — the 3 kg stove is the strict-inequality trap; 4 kg tent is the obvious exclusion. Both are genuine child errors. | 18 |
| 7 | Start by When? / Mulai Pukul Berapa? | `math` | **Working backward** from a deadline | Summit by noon | 12 − 3 − 1 = 8. Distractors: 9 (forgot the rest hour), 10 (halved the climb), 16 (worked forward instead of backward). | 18 |
| 8 | Fix the Plan / Perbaiki Rencana | `sequence` | 4 steps, 3 clues including an **only-at-location** constraint | Climbing safety | Helmet, rope, climb, photo. Framed as repairing a plan that broke one clue. | 20 |
| 9 | Four-Clue Expedition / Ekspedisi Empat Petunjuk | `sequence` | **5 steps, 4 clues** — first, adjacency, last, and a before-relation resolving the middle | Full expedition | Guide, permit, sled, base camp, summit. Only order satisfying all four. | 22 |

Uniqueness: the five `sequence` lessons differ in length (3, 4, 4, 4, 5), clue count (2, 3, 3, 3, 4), clue *type* (fixed-position, before-relation, adjacency, only-at-location) and scenario (packing, pitching camp, trail day, climbing, expedition). No pair shares both mechanic and scenario.

Difficulty: 0–4 are one constraint or one arithmetic step. 5–9 require holding 3–4 simultaneous clues, a strict inequality, or reasoning backward from a deadline.

True-false: exactly one puzzle (lesson 4, `false`) — no run possible.

### Chance Camp — lesson-by-lesson (INV-Q1, Q3, Q4, Q5)

| # | Title EN / ID | Type | Core mechanic | Scenario | Answer / distractor rationale | XP |
|---|---|---|---|---|---|---|
| 0 | Can It Happen? / Mungkinkah Terjadi? | `true-false` (**false**) | Impossible outcome | All-red bag | A colour not in the bag cannot be drawn. | 10 |
| 1 | Sure Thing / Pasti Terjadi | `if-then` | Certain outcome | All-yellow bag | Correct: certainly yellow. Distractors: maybe red, certainly blue, yellow-or-red — each a real confusion between certain, possible and impossible. | 10 |
| 2 | Mystery Bag / Kantong Misteri | `if-then` | Compare two unequal colour counts | 7 red, 3 blue | Correct: red more likely. Key distractor: "red for certain" — the classic likely/certain conflation. | 12 |
| 3 | Fair Spinner / Roda Adil | `if-then` | Equal-section spinner | 4 equal parts | Correct: all the same chance. Distractors encode position bias ("red, it is first" / "yellow, it is last") and lucky-colour belief. | 12 |
| 4 | What Could Happen? / Apa yang Mungkin Terjadi? | `abstraction` / `category-match` | Multi-select the **sample space** | Animal spinner | Tap frog, butterfly, ladybug; fish and bee are absent from the spinner but are plausible animal answers. | 14 |
| 5 | Possible, Not Certain / Mungkin, Belum Pasti | `true-false` (**true**) | Separate *possible* from *certain* | 5 green, 1 purple | The rare outcome is still possible. Inverse of lesson 0. | 16 |
| 6 | Count the Chances / Hitung Peluangnya | `math` | Count the complement of an event | 8-section spinner | 2 + 1 = 3 not green. Distractors: 5 (counted green instead), 2 (only red), 8 (total sections). | 16 |
| 7 | Is the Game Fair? / Adilkah Permainannya? | `true-false` (**false**) | Fairness as equal chance, not equal rules | Dice game, 5 outcomes vs 1 | Both players "have a rule", but the chances are not equal. | 18 |
| 8 | Put It Back / Kembalikan Lagi | `true-false` (**true**) | Independence with replacement | 4 red, 4 blue | Replacing restores the original chances. | 20 |
| 9 | Read the Tally / Baca Catatan Hasil | `if-then` | **Revise a prediction from data** | 20 recorded spins | Correct: the orange part is probably biggest (a best guess, not a certainty). Distractors: "no blue part" (over-reading a small sample), "all equal" (ignoring data), and **"blue is due"** — the gambler's fallacy the roadmap guardrail names explicitly. | 22 |

True-false answer order across the world: **false, true, false, true** (lessons 0, 5, 7, 8). No run of 2, let alone 3 — INV-Q3 satisfied.

Difficulty: 0–4 classify a single outcome as impossible, certain, more likely, or possible. 5–9 require distinguishing possible from certain, counting a complement, judging fairness from unequal chances, understanding independence, and inferring a hidden structure from sample data.

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `planning` and `probability` to `ThinkingWorldId`. |
| `src/data/thinkingWorlds.ts` | edit | Append the two worlds, `unlockAtXP: 0`, `lessonCount: 10`. |
| `src/data/thinkingLessons.ts` | edit | Append 20 bilingual lessons. |
| `src/screens/ThinkingHome.tsx` | edit | Add `sky` and `lime` to `getWorldTheme`, **plus the missing `amber`, `cyan` and `violet`** (see below). |
| `src/screens/LandingScreen.tsx` | edit | Add `sky` and `lime` to `THINKING_COLOR_MAP`. |
| `src/i18n/translations.ts` | edit | `landing.worlds.title` count 22 to 24 (EN + ID). |
| `tests/thinkingWorldsContent.test.ts` | add | Structural + invariant assertions for the two new worlds. |
| `.ai/specs/worlds.md` | edit | Bring the thinking catalog up to date and add both worlds. |
| `.ai/decisions/log.md` | edit | Record this decision. |
| `.ai/plans/2026-08-11-content-more-world-ideas.md` | edit | Update implementation notes and remaining backlog. |
| `README.md` | edit | World and lesson counts, catalog table. |

### In-scope defect fix

`ThinkingHome.getWorldTheme` has only 8 colour entries but 11 worlds already use 11 colours. `amber` (Math Reasoning), `cyan` (Rule Finder) and `violet` (Logic Detective) currently hit the `?? themes.purple` fallback and render with the wrong accent. `LandingScreen.THINKING_COLOR_MAP` already has all three, so the two maps disagree.

This is fixed here rather than deferred because this change must edit that exact map anyway to register the two new colours, and shipping two new worlds next to three mis-themed ones would look like a regression introduced by this PR. It is three added lines with no behavioural coupling. Flagged in the PR body as a drive-by fix.

---

## Spec changes

### `.ai/specs/worlds.md`

The "Thinking worlds" table is stale — it lists 6 worlds when 11 ship today. Replace it with the full 13-world catalog (11 existing + `planning` + `probability`), correct the "All six worlds are unlocked" sentence, correct the puzzle-type table to list all 9 implemented types, and correct the next-world-banner note (the last world is no longer `counting`).

Add to the "Adding a new thinking world" steps: the new colour must be registered in **both** `ThinkingHome.getWorldTheme` and `LandingScreen.THINKING_COLOR_MAP`, or the world silently falls back to purple.

Add to the puzzle-type table the two authoring constraints discovered here:
- `sort` renders a fixed "smallest to largest" prompt — only use it for numeric ordering.
- `MathPuzzle.options` / `PatternPuzzle.options` are `string[]`, not localized — options must be numbers or emoji only. Use `if-then` when the answer needs words.

---

## Implementation steps

1. Add the two `ThinkingWorldId` literals.
2. Append both world objects with `unlockAtXP: 0` and distinct colours (`sky`, `lime`).
3. Register `sky` and `lime` in both colour maps; add the missing `amber`/`cyan`/`violet` to `getWorldTheme`.
4. Append the 20 lessons exactly as audited above, each with a `tutorial` card on lesson 0.
5. Add `tests/thinkingWorldsContent.test.ts` asserting lesson count and numbering, `unlockAtXP: 0`, non-empty `en`/`id` on every localized string, answer-validity for each puzzle type, distinct option ids, and the true-false balance rule.
6. Update `worlds.md`, `README.md`, the roadmap plan, the decision log, and the `landing.worlds.title` count.
7. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.

---

## Rollback

Revert the implementation commit. No localStorage migration is needed: the schema, key and version are unchanged, and the new lesson IDs (`planning-*`, `probability-*`) are purely additive — an existing save file simply has no records for them.

---

## Review notes

Plan review raised three blockers before build, all resolved in the design above:

1. `sort` could not be used for clue-driven ordering because its prompt string is hardcoded to numeric ordering. Resolved by using `sequence` throughout Planning Peaks.
2. `MathPuzzle.options` is not localizable, so probability answers phrased as words would break INV-C2. Resolved by routing all word-answer probability lessons through `if-then`.
3. The first Chance Camp draft had true-false answers false/false/false, a direct INV-Q3 violation. Resolved by reframing lesson 5 as "possible but not certain" (true) and adding lesson 8 on replacement (true), giving false/true/false/true.

---

## Implementation notes

Implemented both worlds exactly as audited; the lesson data in `src/data/thinkingLessons.ts` is the authoritative content. No engine, dependency, persistence-schema, puzzle-type, or blocks-path change was made.

Deviation from the plan: none in content. One addition — `getWorldTheme` also received the three missing pre-existing colours, as pre-authorized in the "In-scope defect fix" section above.

Spatial Studio, Eco City and Coordinate Cove remain in the backlog with their blocking conditions recorded in `content-more-world-ideas.md`.
