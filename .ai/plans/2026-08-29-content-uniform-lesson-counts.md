<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Uniform 10-lesson worlds (blocks path)

**Slug:** `content-uniform-lesson-counts`
**Date:** 2026-08-29
**Status:** done

---

## Request

> since now there is locked worlds, let's expand the lesson in code blocks path. make all worlds have a
> uniform 10 lessons for future reference, let's add guidance for ai to always make the number of lessons
> in sync across the world

(Note: block-coding worlds are not "locked" — INV-L2 already removed world-level locks. The user's framing
refers to the fact that every world is now freely explorable, which is the reason a uniform 10-lesson depth
per world now matters for consistency of experience across all of them.)

---

## Decision

Bring every block-coding world with fewer than 10 lessons up to `lessonCount: 10` by appending new lessons
that continue each world's existing difficulty curve and concept. Six worlds need lessons added: `jungle`
(6→10), `space` (6→10), `loops` (6→10), `ocean` (5→10), `caves` (6→10), `factory` (6→10). `portal` and all
seven bonus worlds are already at 10 and are untouched. Also document the "keep lesson counts in sync"
rule in `.ai/specs/worlds.md` so future additions to one world are checked against the others.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Renumber each world's existing final/buggy lesson to be lesson 10 and insert new lessons before it | Higher risk (touches existing lesson `id`s that may already be in a shipped player's `localStorage`), no invariant requires the buggy lesson to be last, and two of the six worlds (`caves`, `factory`) already carry their bonus debug lesson mid-sequence today (lesson 6, with no lesson 7+) without issue. Appending is strictly additive and lower risk. |
| Trim the 10-lesson worlds down to match the shortest world instead | Reduces existing content and would be a regression for players who already unlocked those lessons; contradicts INV-PR (nothing about lessons should shrink) in spirit. |
| Leave lesson counts uneven and only add the spec guidance | Doesn't satisfy the explicit request to expand the six short worlds now. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | Purely additive lessons; no existing lesson `id`/`number` changes. |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | yes | New lessons continue the existing sequential numbering (lesson N requires N-1 completed); no gate/tutorial semantics change. |
| INV-L2 world unlock by XP | no | Blocks path already has no world-level lock; unaffected. |
| INV-G1 bounded grid | yes | Every new lesson's `items`/`startPos`/obstacles are inside `[0, gridRows) x [0, gridCols)`. |
| INV-G2 obstacle collision | yes | Every new lesson's items/start position avoid obstacle cells; verified by hand per lesson. |
| INV-G3 action cap | yes | All new lessons solvable well under `MAX_ACTIONS = 200`. |
| INV-G4 sandbox | no | No engine/sandbox change. |
| INV-C1 TypeScript strict | yes | `bun run build` must stay green. |
| INV-C2 no hardcoded strings | yes | Every new lesson's `title`/`story`/`mascotMessage`/`hints` is a `LocalizedString` with both `en` and `id`. |
| INV-C3 build passes | yes | Verified before commit. |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | yes | All new strings ship English + Indonesian. |
| INV-I2 no layout assumptions | no | |
| INV-Q1 lesson uniqueness within a world | yes | Each new lesson is checked against every existing lesson in its world for mechanic+scenario duplication. |
| INV-Q2 cross-world scenario freshness | yes | New scenarios avoid overused motifs already flagged in the spec (rain, apples, cats/dogs) and don't reuse another world's exact framing. |
| INV-Q3 true-false balance | n/a | Blocks path has no true-false puzzles. |
| INV-Q4 plausible distractors | n/a | Blocks path has no multiple-choice puzzles. |
| INV-Q5 real difficulty curve | yes | New lessons raise difficulty through new goal shapes, larger multi-segment paths, obstacle density, and (in `loops`) a genuinely new nested-loop mechanic — not just bigger numbers. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/lessons.ts` | edit | Append 4 new lessons each to `jungle`, `space`, `loops`, `caves`, `factory`; append 5 new lessons to `ocean`. Lightly reword the now-inaccurate "final/biggest/ultimate" framing in each world's current last lesson, since more lessons now follow it. |
| `src/data/worlds/jungle.ts` | edit | `lessonCount: 6` → `10` |
| `src/data/worlds/space.ts` | edit | `lessonCount: 6` → `10` |
| `src/data/worlds/loops.ts` | edit | `lessonCount: 6` → `10` |
| `src/data/worlds/ocean.ts` | edit | `lessonCount: 5` → `10` |
| `src/data/worlds/caves.ts` | edit | `lessonCount: 6` → `10` |
| `src/data/worlds/factory.ts` | edit | `lessonCount: 6` → `10` |
| `.ai/specs/worlds.md` | edit | Update the block-coding worlds table's `Lessons` column to `10` for all six; add the missing `loops` world row (undocumented pre-existing gap); add a new "keep lesson counts in sync" rule under "Adding a new block coding lesson". |
| `.ai/decisions/log/2026-08-29-04-uniform-block-world-lesson-counts.md` | add | Record the decision to standardize on 10 lessons per world and the "sync" spec rule. |

---

## Spec changes

### `.ai/specs/worlds.md`

- In the block coding worlds table, change every `Lessons` value for `jungle`, `space`, `ocean`, `caves`,
  `factory` to `10`, and add the missing `loops` row (`🔄 · Loop Efficiency · 8–10 · 10`) — it was never
  listed even though the world has existed since before this change.
- Add a new subsection right after "Adding a new block coding lesson" titled **"Keeping lesson counts in
  sync"**:

  > Every block-coding world should carry the same `lessonCount` as the others unless there is a documented
  > reason for a shorter world (record that reason in `.ai/decisions/log/`). Before adding a lesson to
  > *one* world, check `lessonCount` across all worlds in `src/data/worlds/` — if the target world is
  > already at the shared maximum, adding a lesson there without adding matching lessons elsewhere will
  > make it deeper than its siblings again. When you shorten or lengthen one world, either bring the others
  > to the same depth in the same change, or record why not.

---

## Implementation steps

1. Read the full current content of every world's lessons in `src/data/lessons.ts` (jungle, space, loops,
   ocean, caves, factory) to match tone, scenario, and existing `starThresholds` tuple shape (`[bronze,
   silver]` 2-tuple for jungle/space/loops/ocean; `[t1,t2,t3,t4]` 4-tuple, 5-star, for caves/factory).
2. For each of the six worlds, append new lessons continuing the number sequence (e.g. jungle 7–10), each
   with: bilingual `title`/`story`/`mascotMessage`/`hints`, a grid built with `emptyGrid` (+ obstacles via
   IIFE where appropriate), `startPos`/`items` inside grid bounds and off obstacle cells, `optimalBlockCount`
   matching the intended solution, `starThresholds` in the world's existing tuple shape, and
   `availableCategories`/`requiredCategories` consistent with the world's taught concept.
3. Lightly reword the current last lesson of jungle/space/loops/ocean/caves/factory that claims finality
   ("the biggest challenge yet", "final ocean challenge", etc.) since it is no longer the last lesson.
4. Bump `lessonCount` to `10` in `src/data/worlds/jungle.ts`, `space.ts`, `loops.ts`, `ocean.ts`, `caves.ts`,
   `factory.ts`.
5. Update `.ai/specs/worlds.md` per "Spec changes" above.
6. Add the decision log entry.
7. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.
8. Manually re-derive each new lesson's reachability (start → items, avoiding obstacles, within bounds) by
   hand since there is no automated content-audit script for the blocks path (unlike `bun run audit-lessons`
   for thinking lessons).
9. Commit and push to `claude/uniform-lessons-locked-worlds-npwxo4`.

---

## Rollback

Revert the commit. No localStorage migration needed — every change is additive (new lesson objects, higher
`lessonCount` numbers, spec prose); no existing lesson `id`, `number`, or field changed in a way that
invalidates previously-stored progress.

---

## Review notes

Self-reviewed against `.ai/specs/invariants.md` and the plan-review checklist in
`.ai/harness/workflow.md` (bounded scope: content-only addition, no engine/store/type changes; invariants
drafted above; spec changes drafted inline; decision log entry planned). Approved to proceed to Build.

---

## Implementation notes

- Appended 4 new lessons each to `jungle`, `space`, `loops`, `caves`, `factory` and 5 new lessons to `ocean`
  (25 lessons total), continuing each world's existing numbering, concept, and `starThresholds` tuple shape
  (2-tuple for jungle/space/loops/ocean; 4-tuple 5-star scale for caves/factory, matching their existing
  lessons). `caves` and `factory` keep their existing bonus debug lesson at `number: 6` mid-sequence — new
  progression lessons 7–10 were appended after it rather than renumbering the existing buggy lesson, per
  the "Alternatives considered" reasoning above.
- Softened the now-inaccurate "final/biggest/ultimate" framing in each world's previous last lesson
  (`jungle-6`, `space-6`, `loops-6`, `ocean-5`, `caves-5`, `factory-5`) since more lessons now follow them.
  The true "capstone" framing moved to each world's new lesson 10.
- `loops` introduces a genuinely new mechanic (nested `Repeat` blocks — an outer loop wrapping two inner
  loops) across lessons 7–10, rather than just bigger grids, satisfying INV-Q5. `ocean`'s new lessons
  introduce variable *reuse* across multiple movement legs (same variable, reset to a new value), which its
  original 5 lessons only demonstrated once. `jungle` introduces obstacles for the first time in lessons
  7–10 (it previously had none).
- Verified every new lesson programmatically (ad hoc script, not committed — no existing content-audit
  tool covers the blocks path): start position and every item are in-bounds and not on an obstacle cell,
  and every item is reachable from the start via BFS over the free (non-obstacle) cells. Also cross-checked
  each `optimalBlockCount` against the manhattan-distance path sum in item order; the only real mismatch
  found (`ocean-10`, off by one) was corrected. Remaining differences between the raw manhattan sum and the
  recorded `optimalBlockCount` are intentional: `loops` and the loop-required `space` lessons compress
  several raw moves into a `Repeat` block's few blocks by design, and obstacle detours cost more blocks than
  the unobstructed straight-line distance.
- Also fixed two pre-existing stale spec references while editing the surrounding text: the `loops` world's
  missing row in the worlds table (it predates this change but was never documented), and two "Adding a new
  block coding lesson/world" steps that still pointed at the pre-split `src/data/worlds.ts` file instead of
  `src/data/worlds/`.
- `bunx biome ci`, `bun run type-check`, `bun run build`, and `bun test` all pass (304 pass / 8 skip / 0
  fail, unchanged from the pre-change baseline — no existing test hardcodes a lesson count, they all derive
  it from `LESSONS`/`getLessonsByWorld`).
