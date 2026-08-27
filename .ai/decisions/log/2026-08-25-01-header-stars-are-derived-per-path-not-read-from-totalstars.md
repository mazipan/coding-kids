# 2026-08-25 — Header stars are derived per path, not read from `totalStars`

**Context:** The header star pill printed `progress.totalStars`, a single counter incremented by
`completeLesson` across both learning paths. Three things were wrong with it as a display value. It mixed
two scoring systems — a blocks lesson is worth 3 or 5 stars depending on its `starThresholds`, a thinking
puzzle always 3 — so the number answered no question a player could ask. It counted tutorial lessons,
which award a flat 1 star and are filtered out of `getLessonsByWorld`, so the header disagreed with every
world card by exactly the number of tutorials cleared. And it was the same number on both paths, so
walking from Brain Training into Block Coding changed nothing on screen.

**Decision:** Derive every displayed star figure from `progress.lessons` in a new pure module,
`src/utils/progressStats.ts`, and scope the header pill to the path in the URL: blocks under
`/app/blocks`, thinking under `/app/thinking`, and the combined total on the `/app` hub where neither path
is active. The pill becomes the trigger for a new `StatsModal` — level badge and name, XP to the next
level, the combined star total, a tab per path with its own stars/maximum, and a per-world breakdown
carrying stars, the world maximum, lessons done, and a percentage. `progress.totalStars` is left in the
store exactly as it is: it still gates the `star_collector` badge, and leaving it alone means no schema
change and no migration (INV-C4, INV-PR1).

**Alternatives rejected:**
- Persist `blocksStars` / `thinkingStars` in localStorage — a migration for a number that is cheap to
  derive, and it would drift from the lesson tables the same way `totalStars` already had.
- Fix only the popup and leave the collapsed pill combined — the request is explicit that the number shown
  before any click must already be right.
- Print `stars / maxStars` in the pill — the blocks maximum is 529 and the thinking maximum 420; a
  three-digit denominator does not fit the mobile header and means nothing without the breakdown.
- Count tutorial stars — a tutorial awards 1 of a possible 3 and can never be replayed for more, so
  including them would drag the percentage down for something the child cannot improve, and would keep the
  header disagreeing with the world cards.
- Per-world accent colours in the modal — the thinking colour map is already duplicated across two
  screens; a third copy would be a maintenance trap. One accent per path plus the world emoji reads just
  as clearly.

**Consequences:** A new `src/utils/progressStats.ts` and `src/components/StatsModal.tsx`, fifteen
`stats.*` translation keys in both languages, and `areBonusWorldsUnlocked(progress)` extracted from
`useProgress` so the bonus gate has one definition rather than two. The header number visibly drops for
existing saves — by exactly one per tutorial cleared — which is the bug being fixed, not a regression.
`tests/progressStats.test.ts` pins path isolation, tutorial exclusion, the per-world maximums, and the
unlock rules (including INV-L3: every thinking world unlocked from the start). No dependency, route, or
persistence change.
