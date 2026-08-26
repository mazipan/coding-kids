# content: Brain Training tier two — 20 lessons per world

status: done
slug: content-thinking-lessons-tier-two

## What changed and why

Every one of the 14 brain training worlds had exactly 10 lessons. This plan adds a
second tier — lessons 10–19 — to all 14 worlds, taking the thinking path from 140 to
280 lessons.

The second tier is not "more of the same, with bigger numbers". Each world's tier two
introduces mechanics its first tier never used, so difficulty comes from cognitive
load (compound conditions, chained reasoning, tracking a mutating list, constraint
satisfaction, composing two transformations) rather than from longer text (INV-Q5).

Two new selection models are introduced to carry that extra load:

- **`multi-step`** — a chain of 2–3 linked questions. Every step must be right and the
  chain is checked as one answer, so a child has to hold an intermediate result and use
  it in the next step. This is the headline complexity lever and appears in every world.
- **`grid-select`** — tap many squares on a labelled grid, then Check. Gives spatial,
  pattern and planning puzzles a construction interaction instead of a pick-one-of-four
  interaction.

`SortPuzzle` also gains an optional `prompt` so a non-numeric sort (clock faces) can
say what "in order" means instead of borrowing the numeric prompt.

## Files touched

| File | Change |
|------|--------|
| `src/types/index.ts` | `MultiStepPuzzle`, `GridSelectPuzzle`, both added to `ThinkingPuzzle`; `SortPuzzle.prompt?` |
| `src/screens/ThinkingLesson.tsx` | `MultiStepPuzzleView`, `GridSelectPuzzleView`, answer checks, render branches |
| `src/i18n/translations.ts` | 6 new keys (EN + ID) for the two new models |
| `src/data/thinkingWorlds.ts` | `lessonCount: 10` → `20` on all 14 worlds |
| `src/data/thinkingLessonsAdvanced.ts` | **new** — the 140 tier-two lessons |
| `src/data/thinkingLessons.ts` | core array renamed, spread with the advanced array |
| `.ai/specs/worlds.md`, `.ai/decisions/log/` | spec + decision record |

## Invariants checked

| Invariant | Affected | How it is preserved |
|-----------|----------|---------------------|
| INV-P1/P2/P3/P4 | no | Pure static data + two presentational components. No network, no storage, no gate. |
| INV-PR1–PR4 | no | Scoring path untouched; new lessons use the same `completeLesson(id, stars, xp)` call. |
| INV-L1 | yes | New lessons keep the `{worldId}-{number}` id scheme and contiguous numbering 10–19, so the existing sequential-unlock logic keeps working with no change. |
| INV-L3 | yes | No world's `unlockAtXP` is touched; all stay `0`. |
| INV-C1/C3 | yes | `bunx biome ci`, `bun run type-check`, `bun run build` all run before commit. |
| INV-C2 | yes | Every new user-visible string is a `LocalizedString` (EN + ID) or a `t()` key. Free-text `fill-in` answers and `math`/`sort` options stay numeric or emoji so they are language-neutral. |
| INV-C5 | yes | No new icon library; no arrows or status symbols inside translation strings. |
| INV-I1/I2 | yes | Every new key and every new `LocalizedString` has both `en` and `id`. |
| INV-Q1 | yes | Audited: no tier-two lesson repeats both the mechanic and the scenario of a tier-one lesson in the same world. |
| INV-Q2 | yes | Shared scenarios across worlds are applied from a different angle (e.g. mirroring is *selected* in Spatial tier one and *constructed* in tier two). |
| INV-Q3 | yes | A script audits true/false runs per world over all 20 lessons. Two **pre-existing** violations were found (`nature` 1/2/5 all true, `deduction` 0/1/3 all true) and are fixed by rewording one statement in each world rather than by leaving a known-broken invariant in place. |
| INV-Q4 | yes | Every 4-option puzzle has four plausible options; no filler. |
| INV-Q5 | yes | Tier two is harder by mechanic, not by number size — see the per-world tables in the implementation notes. |

## Implementation steps

1. Add the two puzzle types + `SortPuzzle.prompt?` to `src/types/index.ts`.
2. Add the two views and their answer checks to `ThinkingLesson.tsx`; wire the `sort` prompt override.
3. Add the 6 i18n keys in EN and ID.
4. Create `thinkingLessonsAdvanced.ts` with 140 lessons, 10 per world.
5. Spread it into `THINKING_LESSONS`; bump `lessonCount` to 20.
6. Run the content audit script (unique ids, contiguous numbering, TF runs, answer-in-options, grid answers in range).
7. Fix the two pre-existing INV-Q3 runs.
8. Update `.ai/specs/worlds.md` and add a `.ai/decisions/log/` entry.
9. Run the three verification commands.

## Rollback

Delete `thinkingLessonsAdvanced.ts`, revert the one-line spread in `thinkingLessons.ts`,
and set `lessonCount` back to 10. The two new puzzle types are additive — nothing in
tier one references them — so they can stay or go independently. Player progress is
keyed by lesson id, so removed lessons simply stop being listed; no stored XP or star
is lost (INV-PR1).

## Implementation notes

Built as planned. 140 lessons added, 10 per world, numbered 10–19.

**Per-world mechanic added by tier two** (the INV-Q5 "harder for a nameable reason" check):

| World | Tier one relied on | Tier two adds |
|-------|--------------------|---------------|
| patterns | one repeating unit | two patterns interleaved, two attributes on different cycles, counting *within* a pattern, a cyclic skip count |
| logic | one IF, one AND, one transitive chain | OR, NOT, exclusive OR, first-match-wins branching, contrapositive, "only if", some-vs-all |
| counting | one operation per puzzle | order of operations, remainders, inverse chains, fractions of a set, averages, two-price totals |
| memory | short repeats, simple matching | a routine recalled backwards, a list that mutates between questions, recall plus a transformation |
| nature | single cause and effect | food chains, the water cycle, decomposers, adaptation, and how a fair test is set up |
| numbers | single-step counting rules | two-operation rules, alternating rules, primes, powers, negative steps, the 20th term without listing |
| decomposition | ten `sequence` puzzles | big-job vs small-step, a repeated sub-task folded into one step, jobs that run side by side, the cost of a missing step |
| abstraction | grouping by appearance | grouping by function, by material, by two properties at once, and naming the group itself |
| math_reasoning | one clue, one calculation | work backwards, compare two arrangements, rates, part-whole, answers that are not the number just computed |
| induction | spot a rule that fits | sample size, confounded changes, reading a table, and what makes a rule *strong* |
| deduction | single valid conclusions | elimination across clues, negative clues, a 3x3 grid puzzle, pigeonhole, valid vs merely plausible |
| planning | clues to an order | budgets, a constraint board to audit, chained timetables, one shared resource blocking a job |
| probability | certain / likely / fair | counting the sample space, expected counts, chances that change, and the gambler's fallacy |
| spatial | one transformation | turn vs flip, building a mirror image, fitting a shape to a hole, composing two flips, perspective-taking, cube nets |

**Verification.** All three gate commands pass, plus `bun run audit-lessons` (280 lessons, 0 problems).
The geometry in every new `spatial` puzzle was checked by an independent script rather than by eye — grid
rotations and reflections recomputed from the figure, the wall hole matched against each piece by
normalised coordinates, and each candidate cube net folded by a die-rolling walk over the polyomino. All
74 arithmetic and grid-coordinate answers were likewise recomputed. Both new views were driven in a real
browser: a deliberately broken `multi-step` chain shows the red links and resets, the rebuilt chain
scores, and `grid-select` scores on the right cell set. Indonesian was checked on screen.

**Deviation from the plan.** The audit script originally rejected a `grid-select` answer cell that was
already filled in. That was wrong: a grid-select answer is a *set of places*, and half the lessons ask the
child to mark existing content (seats, map squares) rather than fill blanks. The check was dropped; the
in-range check it sat next to remains.
