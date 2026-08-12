# Plan: More Blocks and Brain Training World Ideas

**Slug:** `content-more-world-ideas`
**Date:** 2026-08-11
**Status:** draft

---

## Request

> Plan more blocks world ideas. And brain training ideas

---

## Decision

Create a bounded content roadmap rather than adding several worlds in one release. The next recommended blocks world is **Code Orchestra**, a 10-lesson bonus world that revisits nested loops and functions in a fresh musical route-building setting; the next recommended brain-training world is **Spatial Studio**, a 10-lesson, always-unlocked world about rotation, symmetry, and mental mapping. Each world must be delivered later through its own implementation plan and content audit so the first release can be playtested before the backlog is expanded.

### Priority roadmap

| Priority | Path | World | Ages | Learning focus | Platform fit | Delivery note |
|---|---|---|---|---|---|---|
| 1 | Blocks | 🎵 **Code Orchestra** / **Orkestra Kode** | 8–12 | nested loops, reusable phrases, functions | high — existing movement, collection, loops, and functions | Ship as a bonus world with 10 lessons; no new runtime mechanic. |
| 2 | Brain | 🧭 **Spatial Studio** / **Studio Spasial** | 7–11 | mental rotation, symmetry, viewpoints, spatial paths | medium — early lessons fit current option puzzles; rotations need a dedicated puzzle representation | Prototype the interaction before authoring all 10 lessons. |
| 3 | Brain | 🗺️ **Planning Peaks** / **Puncak Perencanaan** | 8–12 | ordering under constraints, working backward, planning | high — `sequence`, `sort`, and multiple-choice puzzles already exist | Ship after Spatial Studio if the new spatial interaction tests well, or first if a data-only release is preferred. |
| 4 | Blocks | 🌱 **Eco City** / **Kota Hijau** | 10–14 | decomposition and capstone algorithm design | high — combines existing categories | Keep objectives route-based; do not turn environmental facts into required prior knowledge. |
| 5 | Brain | 🎲 **Chance Camp** / **Kamp Peluang** | 9–13 | probability, fair choices, interpreting simple data | high — current math and multiple-choice types cover most lessons | Use concrete spinners, bags, and dice; avoid formal notation early. |
| 6 | Blocks | 🧭 **Coordinate Cove** / **Teluk Koordinat** | 10–13 | coordinates, state, variables, relative vs absolute movement | low — meaningful coordinate reading needs new blocks and engine state | Defer until a separate technical plan defines safe position-sensor blocks. |

### Blocks world briefs

#### 1. Code Orchestra — recommended next

- **Story:** Help conductor Melody collect notes in the right musical route and reach the stage.
- **Concept promise:** “Turn repeated movements into short code phrases, then reuse the phrases.”
- **Lesson arc:**
  1. Follow a four-note line with basic moves.
  2. Repeat one movement to collect a row of notes.
  3. Repeat a two-move rhythm around a corner.
  4. Build two repeated phrases on a mirrored route.
  5. Use a nested loop for repeating note bars.
  6. Create a function for a short chorus path.
  7. Call the chorus from two different grid positions.
  8. Combine a loop and a function without extra moves.
  9. Choose between two valid arrangements and optimize block count.
  10. Perform a finale that combines nested loops, functions, and a goal cell.
- **Guardrails:** Music is the scenario, not an audio-recognition test; every goal remains visible and solvable with the existing grid. Do not duplicate Space’s simple straight-line loop lesson or Factory’s introductory single-function lesson.

#### 2. Eco City

- **Story:** Help builder Sol route recycling, water, and power tokens to finish a neighborhood.
- **Concept promise:** “Break one big mission into smaller algorithms and reuse what works.”
- **Lesson arc:** sequence two deliveries; loop repeated street segments; choose an efficient collection order; use variables as counters; use conditions on known values; extract a route function; reuse functions across districts; manage a small list of stops; compare two algorithms; complete a multi-concept city finale.
- **Guardrails:** Facts must be explained in the puzzle and not assessed as cultural or scientific trivia. Differentiate from City Parking by emphasizing decomposition and reusable subroutines rather than sorting or shortest-route work.

#### 3. Coordinate Cove — later technical investment

- **Story:** Help navigator Coral find map markers on a treasure chart.
- **Concept promise:** “Use rows, columns, and changing position values to navigate.”
- **Lesson arc:** read a grid location; move relative to a landmark; set a step count variable; update a coordinate; reach a supplied row; reach a supplied column; combine row and column tests; visit coordinate pairs; debug an off-by-one route; solve a changing-map finale.
- **Guardrails:** Do not fake conditions that always resolve the same way. A separate feature plan must specify read-only row/column blocks, sandbox exposure, action-cap behavior, and accessible coordinate labels before this world can be approved.

### Brain-training world briefs

#### 1. Spatial Studio — recommended next

- **Story:** Help artist Orbit repair pictures, maps, and models by seeing how pieces move in space.
- **Concept promise:** “Turn shapes in your mind and see the same object from a new direction.”
- **Lesson arc:**
  1. Match a shape moved without rotation.
  2. Complete a vertical mirror.
  3. Complete a horizontal mirror.
  4. Pick a quarter-turn rotation.
  5. Trace a short route from an overhead map.
  6. Combine a turn and a reflection.
  7. Match an object seen from another viewpoint.
  8. Fold a simple grid mentally and identify touching edges.
  9. Work backward from a rotated result.
  10. Follow a multi-turn map and choose the final orientation.
- **Interaction recommendation:** Add one reusable spatial-choice puzzle type that presents a prompt figure and four labeled visual options. Use CSS/grid or compact text/emoji data, not remote images. Ensure orientation is conveyed by shape as well as color.
- **Guardrails:** Distractors should represent believable errors (wrong turn direction, mirror instead of rotate, one step short), not unrelated shapes.

#### 2. Planning Peaks

- **Story:** Help climber Pico pack, schedule, and navigate expeditions in the right order.
- **Concept promise:** “Plan several steps while obeying every clue.”
- **Lesson arc:** order two dependent steps; place one step before another; select a needed item; order three camp tasks; avoid a blocked route; satisfy two ordering clues; work backward from arrival time; choose a plan with limited capacity; repair a plan with one broken constraint; solve a four-clue expedition schedule.
- **Guardrails:** This is constraint planning, not another Step by Step daily-routine world. Later lessons must allow children to reason from explicit clues rather than rely on real-world assumptions.

#### 3. Chance Camp

- **Story:** Help camper Lucky test games, spinners, and mystery bags to decide what is likely or fair.
- **Concept promise:** “Compare what could happen, what is likely, and what is fair.”
- **Lesson arc:** impossible vs possible; certain outcomes; compare two-color bags; read an equal spinner; choose the most likely result; distinguish possible from guaranteed; compare unequal spinners; identify a fair game; reason about two simple draws with replacement; revise a prediction from a small results table.
- **Guardrails:** Do not imply that short random streaks prove a rule. Use countable visuals and plain language before fractions, and make near-miss distractors reflect common probability misconceptions.

### Reserve ideas

- **Blocks — Robot Rescue Control Room:** events and messages between helpers. Valuable, but blocked on a genuine event-system design; loops disguised as “signals” would not teach events.
- **Blocks — Pixel Garden:** draw repeated pixel patterns with loops and functions. Technically easy, but visually close to Code Orchestra’s patterned routes, so keep only one unless their mechanics become materially different.
- **Brain — Word Bridges:** analogies, categories, and word relationships. Promising for ages 9–13, but bilingual equivalence and reading-level review must happen before lesson drafting.
- **Brain — Focus Forge:** selective attention and rule switching. Avoid speed scoring or timers; a future design must test executive control without penalizing children who read or tap slowly.

---

## Alternatives considered

| Alternative | Why rejected |
|---|---|
| Add all proposed worlds in one release | It would add at least 60 lessons, prevent useful playtest feedback between releases, and make content-quality review too broad. |
| Extend every existing world with more lessons | It lengthens sequential progression and risks repeating established mechanics; clearly themed new worlds make the learning promise easier for children to understand. |
| Prioritize Coordinate Cove | Position-aware variables would be valuable, but the current game exposes movement verbs rather than safe row/column sensors, so it requires engine design before content authoring. |
| Make the next brain world timer-based attention training | Speed is a weak proxy for thinking and can disadvantage younger children, second-language readers, and children with motor or attention differences. |

---

## Invariants check

This planning-only change does not alter runtime behavior. The implementation plans named above must repeat this gate against their exact content and code.

| Invariant | Affected? | Notes |
|---|---|---|
| INV-P1 no network calls | no | Plans explicitly keep assets local. |
| INV-P2 no data exfiltration | no | No runtime change or new data collection. |
| INV-P3 no auth | no | No account or gate proposed. |
| INV-P4 no ads | no | No advertising proposed. |
| INV-PR1 progress never decreases | no | No progress code changes. |
| INV-PR2 stars are best-of | no | No scoring changes. |
| INV-PR3 XP is delta-only | no | No XP changes. |
| INV-PR4 badges are permanent | no | No badge changes. |
| INV-L1 sequential lesson unlock | no | Future worlds will retain sequential lesson unlock. |
| INV-L2 world unlock by XP | no | Code Orchestra and Eco City are proposed as bonus content; exact unlock behavior belongs in their implementation plans. |
| INV-L3 thinking worlds always unlocked | no | Every proposed brain world will use `unlockAtXP: 0`. |
| INV-G1 bounded grid | no | No game-engine change. Coordinate Cove is deferred until this can be designed safely. |
| INV-G2 obstacle collision | no | No game-engine change. |
| INV-G3 action cap | no | Future blocks worlds must retain the 200-action cap. |
| INV-G4 sandbox | no | No sandbox change; any Coordinate Cove sensor design needs separate review. |
| INV-C1 TypeScript strict | no | Documentation only; quality gate still runs. |
| INV-C2 no hardcoded strings | no | Future user-visible content must provide English and Indonesian values. |
| INV-C3 build passes | no | Quality gate still runs before commit. |
| INV-C4 localStorage only | no | No persistence changes. |
| INV-C5 lucide-react only | no | No UI icons or functional emoji added. |
| INV-I1 all keys have EN value | no | Future localized content requires both current languages. |
| INV-I2 no layout assumptions | no | Future spatial interactions must support wrapping and non-color orientation cues. |
| INV-Q1 lesson uniqueness | no | No lessons are added now; candidate boundaries are documented below. |
| INV-Q2 scenario freshness | no | Proposed scenarios use distinct cognitive angles. |
| INV-Q3 true-false balance | no | No true-false answers are authored. |
| INV-Q4 plausible distractors | no | Distractor strategies are specified, but exact options require per-world audit. |
| INV-Q5 real difficulty curve | no | Each recommended world has a cognitive progression, not merely larger values. |

### Preliminary content audit

No existing world is being modified and no lesson data is being added in this PR, so there is no target-world lesson-by-lesson audit to perform. Before implementation, each separate world plan must list all 10 exact mechanic/scenario pairs, all four options where applicable, any true-false answer sequence, and the early/late difficulty evidence.

The current catalog already covers sequences, loops, loop efficiency, variables, conditions, functions, lists, pathfinding, sorting/routing, algorithms/data, debugging, patterns, if/then logic, math, memory, nature/science, number sequences, decomposition, abstraction, mathematical reasoning, induction, and deduction. The shortlist stays fresh by assigning Code Orchestra to **composing reusable repeated phrases**, Spatial Studio to **mental transformations**, Planning Peaks to **multi-constraint planning**, and Chance Camp to **uncertainty**. Eco City is deliberately labeled a capstone, while Coordinate Cove is deferred because its meaningful mechanic is not yet supported.

---

## Files to change

| File | Change type | Notes |
|---|---|---|
| `.ai/plans/content-more-world-ideas.md` | add | Record the prioritized roadmap, briefs, constraints, and future implementation boundaries. |
| `.ai/decisions/log.md` | edit | Record why worlds will ship incrementally and why Code Orchestra and Spatial Studio are first. |

---

## Spec changes

None. This change is a planning artifact and does not alter the shipped world catalog or its schema. Each selected world will require a separate plan that drafts the corresponding `.ai/specs/worlds.md` catalog and puzzle-type changes.

---

## Implementation steps

1. Review and approve or reprioritize this roadmap without changing application code.
2. Create a dedicated feature/content plan for Code Orchestra, including exact bilingual lesson content, grids, solutions, block counts, and a full content audit.
3. Implement and playtest Code Orchestra as one independently reversible release.
4. Prototype Spatial Studio’s spatial-choice interaction with local, accessible visual data and validate it with both code and kid review.
5. Create the full Spatial Studio content plan only after the interaction prototype passes review.
6. Reassess the remaining backlog using playtest feedback; do not batch the remaining worlds automatically.
7. For every implementation release, run `bunx biome ci`, `bun run type-check`, and `bun run build` before committing.

---

## Rollback

Revert the planning commit. No application code, lesson data, routes, dependencies, or localStorage schema are changed.

---

## Review notes


---

## Implementation notes

Planning only. No application implementation is included in this change.
