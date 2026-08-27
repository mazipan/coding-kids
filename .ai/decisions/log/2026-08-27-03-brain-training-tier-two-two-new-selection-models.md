# 2026-08-27 — Brain training tier two: two new selection models for lessons 10–19

**Context:** Every thinking world had exactly 10 lessons. Doubling that to 20 raised a question the first
tier never had to answer: what does "harder" mean here? Tier one already covers each world's core idea, so
a second tier of the same puzzle types with bigger numbers would be longer, not harder — and INV-Q5
forbids exactly that. `decomposition` made the problem obvious: all ten of its lessons were `sequence`
puzzles, so an eleventh sequence would have been the eleventh of the same thing.

**Decision:** Add two puzzle types that exist to carry cognitive load the existing ten cannot.

`multi-step` is a chain of 2–3 linked questions submitted as one answer. It forces a child to hold an
intermediate result and use it in the next step, and one wrong link resets the chain. Every world gets at
least one, because the shape is domain-neutral: narrow suspects clue by clue, compute a total then the
change, guess a rule then test it then use it, follow a timetable through three connections.

`grid-select` replaces pick-one-of-four with tap-many-squares. It gives spatial, pattern and planning
puzzles a *construction* interaction — mirror a drawing square by square, mark every map square a set of
constraints allows — which is a different act from recognising a finished answer among four.

`SortPuzzle` also gains an optional `prompt`, so a non-numeric sort can say what "in order" means instead
of borrowing the hardcoded numeric line.

Tier-two lessons live in `src/data/thinkingLessonsAdvanced.ts` and are spread into `THINKING_LESSONS`.

**Alternatives rejected:**
- More of the existing types with harder content — works for some worlds and not at all for the ones whose
  tier one exhausted a single type. It also caps difficulty at "one question", which is the real ceiling.
- Partial credit inside a `multi-step` chain — grading each step separately makes it three easy puzzles
  stacked, not one hard one. All-or-nothing is what makes the child check step 1 before committing.
- A timer or a move limit as the difficulty lever — pressure is not comprehension, and it works directly
  against the persona: Rafi is impatient, and a clock turns thinking time into panic.
- One 280-lesson file — a 6000-line array is unreviewable in a diff. The split is by tier, so a reviewer
  reading `thinkingLessonsAdvanced.ts` sees exactly the new content.
- A `figure` field on `grid-select` so it could show a prompt shape like `spatial` does — no tier-two
  lesson needed it, and `spatial` already owns "look at this shape, then answer".

**Consequences:** `MultiStepPuzzle` and `GridSelectPuzzle` in `src/types/index.ts`, two views and two
answer checks in `ThinkingLesson.tsx`, six i18n keys in both languages, and `lessonCount: 20` on all
fourteen worlds. 140 new lessons — 33 `multi-step`, 5 `grid-select`, the rest spread across the existing
types.

A new `scripts/audit-thinking-lessons.mjs` (`bun run audit-lessons`) checks the mechanical half of the
content invariants: contiguous numbering (INV-L1), both languages on every string (INV-I1), answers that
actually appear among their options, no duplicate or identical options, `spatial` grid geometry,
`grid-select` keys in range, free-text `fill-in` answers being language-neutral (INV-C2), no run of 3+
same-answer true/false puzzles in a world (INV-Q3), and tier two paying more XP than tier one. It found
two **pre-existing** INV-Q3 violations — `nature` 1/2/5 and `deduction` 0/1/3 were each three consecutive
`true` answers, so a child could clear them by always tapping TRUE. Both are fixed by rewording one
statement per world so the same concept is now tested with a `false` answer (`nature-2` asks whether
stirring makes oil mix in; `deduction-3` asks whether we still cannot tell a fish is not a bird). No
lesson id changed, so no stored progress is affected (INV-PR1).

INV-Q1, INV-Q2 and the judgement half of INV-Q5 remain human checks — a script cannot tell that Spatial
Studio *selecting* a mirror image and Pattern World *building* one are different cognitive acts.
