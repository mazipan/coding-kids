# 2026-09-04 — Add Money & Time as a fifteenth thinking-path world

**Context:** Issue #86 asked for a new thinking-path world teaching practical numeracy —
counting money, making change, telling time, and simple budgeting — framed as "using
numbers in real life" rather than abstract reasoning. Six existing worlds (`counting`,
`math_reasoning`, `numbers`, `probability`, `memory`, `patterns`, `decomposition`,
`planning`) already use coins or clocks as flavour for an unrelated abstract-reasoning
mechanic, so the risk under INV-Q1/INV-Q2 was building a world that just re-skins those
mechanics rather than teaching the applied skill itself.

**Decision:** Add `money` ("Money & Time") as a fifteenth thinking world, following the
existing one-file-per-world pattern exactly (`thinkingWorlds/money.ts`,
`thinkingLessons/money.ts`, `thinkingLessonsAdvanced/money.ts`), with `unlockAtXP: 0`
(INV-L3) and `lessonCount: 20`. Every lesson is framed as the applied skill — recognise a
coin's value, read clock hands, make change, compare unit price, budget an allowance,
spot a schedule conflict — checked lesson-by-lesson against the six worlds above before
writing any content (documented in the plan's Implementation notes). Currency stays
abstract ("coins" of value 1/5/10, no currency symbol) so the world reads identically in
English and Indonesian. Reused the `yellow` colour already registered in
`worldColorThemes.ts`/`LandingScreen.tsx` (via the `passwords` safety world) — colour
uniqueness is enforced per-path by `tests/thinkingWorldsContent.test.ts` and
`tests/safetyWorldsContent.test.ts` separately, not across the two paths, so no new
colour registration was needed.

**Alternatives rejected:**
- Folding the content into `counting` (Math Magic) instead of a new world — rejected
  because `counting` is already at the shared 20-lesson cap, and its existing coin
  lessons are abstract arithmetic drills; mixing in applied life-skill lessons would blur
  exactly the INV-Q1/Q2 boundary this world exists to keep clean.
- Using a real currency (IDR) — rejected in favour of abstract coin values, matching how
  every other world already treats coins, and avoiding a country-specific framing for a
  bilingual audience.
- A new puzzle type for "pick the fewest coins for exact change" — rejected; the existing
  `grid-select` type (tap every cell matching a rule) already fits once applied to a
  schedule/coin grid instead of a shape, so tier two reuses it for schedule-conflict
  lessons instead of adding a type.

**Consequences:** The thinking path now has 15 worlds / 33 total worlds app-wide — bumped
the two hardcoded counts this touches (`landing.worlds.title` in both languages, and the
world-count mentions in `README.md`). Future thinking-world or lesson additions that
involve money or time must check their cognitive angle against `money`'s "World
boundaries" entry in `.ai/specs/worlds.md`, the same way `money` was checked against the
six pre-existing worlds. `README.md`'s per-world "Lessons" column for the thinking-worlds
table was already out of sync with the real `lessonCount: 20` before this change (it
shows `10` for every existing row); this change does not fix that pre-existing drift —
the new `money` row uses the correct `20` to match `lessonCount` and `.ai/specs/
worlds.md`, so the drift is not made worse, but it also isn't resolved for the other 14
rows.
