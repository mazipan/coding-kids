# Decision: Standardize on 10 lessons per block-coding world

**Date:** 2026-08-29

## Context

Since INV-L2 removed the world-level lock from the blocks path (all worlds — main and bonus — are freely
explorable from the start), a player can jump straight into any world. Six of the thirteen block-coding
worlds (`jungle`, `space`, `loops`, `ocean`, `caves`, `factory`) had only 5–6 lessons while `portal` and all
seven bonus worlds had 10. That made the amount of content a player finds wildly inconsistent depending on
which world they pick first, with no in-app signal explaining why.

## Decision

Every block-coding world now has `lessonCount: 10`. The six short worlds were extended by appending new
lessons that continue each world's existing concept and difficulty curve — no existing lesson's `id`,
`number`, or fields were changed, so no player's stored progress is invalidated.

Going forward, `.ai/specs/worlds.md` documents a "keep lesson counts in sync" rule: before adding a lesson
to one world, check `lessonCount` across all worlds, and either match any change across worlds in the same
change or record a reason for the exception in a decision log entry.

## Alternatives considered

- Renumber each world's existing final/buggy lesson so it lands on lesson 10 and insert new content before
  it — rejected as unnecessary risk to existing lesson identity for no invariant benefit.
- Trim the 10-lesson worlds down instead of growing the short ones — rejected as a content regression.

## Consequences

- Larger `src/data/lessons.ts` (25 new lesson objects across six worlds).
- Future lesson additions must consider cross-world lesson-count parity, per the new spec rule.
