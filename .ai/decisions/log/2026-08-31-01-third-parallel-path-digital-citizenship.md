# 2026-08-31 — A third parallel path (`/app/safety`) instead of extending the thinking path

**Context:** Parent/teacher feedback (GitHub issue #85) asked for online-safety/digital-citizenship
content — scenario puzzles on privacy, passwords, kindness, and scam recognition. The existing app
has exactly two top-level paths, `/app/blocks` and `/app/thinking`, and several files hardcode that
binary split (`PathId` in `src/utils/progressStats.ts`, the tab list in `StatsModal.tsx`, the
`subPath` checks in `Header.tsx`).

**Decision:** Add digital citizenship as a third path, `/app/safety`, structurally parallel to
`/app/thinking` — its own world/lesson data directories, its own `SafetyHome`/`SafetyLessonScreen`
screens, its own `PathId` member — rather than folding it into the existing 14-world thinking
catalog as an 8th–11th world. It reuses the thinking path's puzzle *type system* (`ThinkingPuzzle`,
aliased as `SafetyPuzzle`) via a newly extracted shared `src/components/PuzzlePlayer.tsx`, so the
twelve puzzle-rendering components are not duplicated, only the domain-specific chrome (routes,
world data, screen wrappers) is.

**Alternatives rejected:**
- Add these as new thinking worlds — rejected because digital safety is a distinct trust message
  parents/teachers care about on its own terms; it deserves its own hub card and landing-page
  mention rather than blending into "brain training," and the originating issue explicitly asked
  for a path, not a world.
- Generalize `ThinkingHome`/`ThinkingLessonScreen` with a `basePath` prop to serve both `/app/thinking`
  and `/app/safety` off one `ThinkingWorldId`-shaped type — rejected as riskier to the existing,
  tested thinking path for a code-cleanliness gain, and inconsistent with how this codebase already
  chose parallel domains over one generalized domain for blocks vs. thinking (see
  `.ai/decisions/log/2026-08-07-10-two-parallel-learning-paths-app-blocks-and-app-thinking.md`).
- Fully duplicate the ~800 lines of puzzle-view components into a new file — rejected: real
  duplication-drift risk for genuinely reusable, already-implemented components, so they're
  extracted into a shared module instead.

**Consequences:** Every file that currently assumes exactly two paths (`PathId` union,
`PathSelector`, `Header`, `StatsModal`, `progressStats.ts`, `App.tsx` routing,
`scripts/audit-thinking-lessons.mjs`) needs a third branch — enumerated in
`.ai/plans/2026-08-31-feat-digital-citizenship-path.md`. `THINKING_COLOR_MAP` in `LandingScreen.tsx`
and the local `getWorldTheme` in `ThinkingHome.tsx` are consolidated into one shared
`src/utils/worldColorThemes.ts` module as part of this work, which also closes the exact
two-maps-drift risk `.ai/specs/worlds.md` already flagged once. INV-L3 is reworded to cover safety
worlds alongside thinking worlds, since it is the same "no XP gate" rule applied to a second
puzzle-based path. MVP ships tier one only (10 lessons × 4 worlds); a tier-two follow-up plan can
add `safetyLessonsAdvanced/` later, the same way `thinkingLessonsAdvanced/` followed the original
`thinkingLessons/` for the existing 14 thinking worlds.
