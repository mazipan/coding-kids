# Plan: Money & Time — new thinking-path world (life skills)

**Slug:** `content-money-time-world`
**Date:** 2026-09-04
**Status:** done

---

## Request

> ## Summary
>
> Add a new thinking-path world, **Money & Time**, teaching practical numeracy: counting money, making change, telling time, and simple budgeting. Reuses the existing thinking-world infrastructure entirely — no engine or routing changes.
>
> ## Why
>
> Financial and time literacy is a top practical-skill ask from parents/teachers, and it's currently *not* covered — `numbers` and `counting` in the existing thinking path are abstract-reasoning worlds (sequences, comparisons), not applied life-skill numeracy. This world is deliberately framed as "using numbers in real life" rather than "numbers as puzzles," which keeps it distinct from those two worlds under INV-Q1/INV-Q2.
>
> (Full body: see issue #86 — proposed lesson outline by age band, content notes for the planner, invariants to watch.)

---

## Decision

Add a fifteenth thinking-path world, `money` ("Money & Time"), following the established one-file-per-world pattern exactly (`thinkingWorlds/money.ts`, `thinkingLessons/money.ts` for tier one, `thinkingLessonsAdvanced/money.ts` for tier two). No engine, routing, puzzle-renderer, or type changes beyond adding the `money` literal to `ThinkingWorldId` — every puzzle type the world uses (`math`, `if-then`, `sequence`, `true-false`, `fill-in`, `abstraction`, `multi-step`, `grid-select`) already exists. The world is framed as *applying* numbers to real life (recognising coin values, reading a clock face, making change, comparing unit prices, budgeting an allowance, reading a weekly schedule) rather than the abstract-reasoning angle `counting`, `math_reasoning`, `numbers`, `probability`, `memory`, and `planning` already take when they use coins or clocks as flavour — checked lesson-by-lesson against those six files before writing (see "Cross-world freshness check" below).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Fold money/time lessons into `counting` (Math Magic) as extra lessons | `counting` is already at the shared 20-lesson cap; more importantly it would blur INV-Q1/Q2 — `counting` already uses coins for abstract arithmetic drills, so life-skill "recognise this coin, read this clock" content would collide with its existing mechanic+scenario space rather than sitting cleanly next to it. |
| Use a real currency symbol (Rp / IDR) | Issue flagged this as an open question. Kept currency abstract ("coins" of value 1/5/10, no symbol) so the world reads the same in both languages and doesn't imply a specific country's currency for a bilingual EN/ID audience — consistent with how `counting`, `mathReasoning`, `planning`, and `numbers` already treat coins. |
| New puzzle type for "make exact change with fewest coins" | Existing `grid-select` already fits (tap the cells that fit a rule) once applied to a schedule/coin grid instead of a shape — no type addition needed, keeps the change minimal. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | Pure data addition. |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | No changes to `completeLesson`/`useProgress`. |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | yes | New world follows the plain thinking-path rule (lesson 0 always open, lesson N needs N-1) — no tutorial exception applies to the thinking path. Verified by the generic `tests/thinkingWorldsContent.test.ts` (`describe.each` over `THINKING_WORLDS`). |
| INV-L2 world unlock by XP (blocks) | no | Blocks path untouched. |
| INV-L3 thinking/safety always unlocked | yes | `unlockAtXP: 0` set on `moneyWorld`, matching every other thinking world. |
| INV-G1–G4 game engine | no | Thinking path has no grid/engine. |
| INV-C1 TypeScript strict | yes | `bun run type-check` run after every file added. |
| INV-C2 no hardcoded strings | yes | Every lesson string is a `LocalizedString` (`en`/`id`) per the existing data-file convention; no new UI copy, so no new `translations.ts` keys needed for lesson content. Two existing hardcoded landing-page counts (`landing.worlds.title`, README) do change — see Files to change. |
| INV-C3 build passes | yes | `bun run build` run before commit. |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | yes | Every `LocalizedString` in the new lessons carries both `en` and `id`; checked by `tests/thinkingWorldsContent.test.ts`'s generic localized-string walk. |
| INV-I2 no layout assumptions | no | Reuses existing puzzle renderers; no new layout. |
| INV-Q1 lesson uniqueness within world | yes | Checked every pair of same-type lessons within `money` for mechanic+scenario overlap (see Implementation notes). |
| INV-Q2 cross-world scenario freshness | yes | Coins/clocks already appear in `counting`, `mathReasoning`, `numbers`, `probability`, `memory`, `patterns`, `decomposition`, `planning` as flavour for abstract-reasoning mechanics (arithmetic drills, algebra, geometric sequences, randomness, sequence-memory ordering, parallelism metaphors, constraint optimisation). `money`'s lessons are framed as the applied skill itself (recognise/count denominations, read clock hands, make change, compare unit price, budget, spot a schedule conflict) — a different cognitive angle in every case. Full check documented in Implementation notes. |
| INV-Q3 true/false balance | yes | 4 true-false lessons in the world (`money-4` true, `money-7` false, `money-15` false, `money-18` true) — no run of 3+ identical answers among them in lesson-number order. Verified by `bun run audit-lessons`. |
| INV-Q4 plausible distractors | yes | Every 4-option puzzle's wrong answers are a plausible arithmetic/clock-reading slip for the target age, not filler. |
| INV-Q5 real difficulty curve | yes | Tier one 0–4 (single/simple coin counts, whole-hour clock reading, 4-step routine order) is easier than 5–9 (mixed denominations, change-making/subtraction, half- and quarter-hour reading, crossing-the-hour duration). Tier two opens two mechanics tier one never used (`multi-step`, `grid-select`) and raises cognitive load via compound conditions (weekday-AND-evening-AND-free) and chained dependent reasoning (unit price → unit price → decision; save → split → allocate), not bigger numbers alone. `bun run audit-lessons`'s tier-two-average-XP-over-tier-one check passes (tier one avg 16.0 XP, tier two avg 30.6 XP). |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `'money'` to the `ThinkingWorldId` union. |
| `src/data/thinkingWorlds/money.ts` | add | New world: id `money`, emoji 💰, color `yellow` (already registered in both colour maps via the `passwords` safety world — no cross-path uniqueness requirement, verified against `tests/thinkingWorldsContent.test.ts`'s per-path-only uniqueness check), `unlockAtXP: 0`, `lessonCount: 20`. |
| `src/data/thinkingWorlds/index.ts` | edit | Import `moneyWorld`, append to `THINKING_WORLDS` (becomes the new last world — next-world banner moves onto `spatial`). |
| `src/data/thinkingLessons/money.ts` | add | Tier-one lessons `money-0`..`money-9`. |
| `src/data/thinkingLessons/index.ts` | edit | Import `moneyLessons`, spread into `THINKING_LESSONS`. |
| `src/data/thinkingLessonsAdvanced/money.ts` | add | Tier-two lessons `money-10`..`money-19`. |
| `src/data/thinkingLessonsAdvanced/index.ts` | edit | Import `moneyLessonsAdvanced`, spread into `THINKING_LESSONS_ADVANCED`. |
| `src/i18n/translations.ts` | edit | `landing.worlds.title`: `32 Worlds to Explore` → `33 Worlds to Explore` (EN), `32 Dunia untuk Dijelajahi` → `33 Dunia untuk Dijelajahi` (ID). 14 blocks + 15 thinking + 4 safety = 33. |
| `.ai/specs/worlds.md` | edit | Add `money` row to the thinking-worlds catalog table; add a "World boundaries" bullet distinguishing `money`'s applied-numeracy angle from `counting`/`math_reasoning`/`numbers`/`probability`/`planning`'s abstract use of coins/clocks. |
| `README.md` | edit | Bump "All 14 worlds" → "All 15 worlds"; add Money & Time row to the Brain Training table; bump the "14 brain training worlds" feature bullet to 15 (kept the existing "140+" hedge rather than asserting a precise total, since the table's per-world "Lessons" column was already out of sync with the real `lessonCount: 20` before this change — pre-existing, out of scope here); bump the `thinkingLessons/`/`thinkingLessonsAdvanced/`/`thinkingWorlds/` project-structure comment counts (140→150, 140→150, 14→15). |
| `.ai/decisions/log/2026-09-04-01-money-time-thinking-world.md` | add | Decision record. |

No changes to `src/screens/`, `src/components/`, `src/utils/worldColorThemes.ts`, or `src/screens/LandingScreen.tsx`'s colour map — `yellow` is already registered in both.

---

## Spec changes

### `.ai/specs/worlds.md`

Add to the thinking-worlds catalog table:

```
| money | 💰 | Everyday numeracy | 6–13 | yellow | 0 | 20 |
```

Add to "World boundaries":

```
- `money` (Money & Time) vs `counting`/`math_reasoning`/`numbers`/`probability`/`planning` — several of
  those worlds already use coins or clocks as flavour for an abstract-reasoning mechanic (arithmetic
  drills, algebra, geometric sequences, randomness, constraint optimisation). `money` is the applied
  skill itself: recognising a coin or bill's value, reading clock hands, making change, comparing unit
  price, budgeting an allowance, spotting a schedule conflict. Never add a `money` lesson that is really
  one of those worlds' mechanics re-skinned with a coin emoji — the test is whether the lesson still
  makes sense with the money/time framing removed (if yes, it belongs in the other world instead).
```

---

## Implementation steps

1. Add `'money'` to `ThinkingWorldId` in `src/types/index.ts`.
2. Create `src/data/thinkingWorlds/money.ts` exporting `moneyWorld`; register in `src/data/thinkingWorlds/index.ts`.
3. Create `src/data/thinkingLessons/money.ts` (10 tier-one lessons) and register in `src/data/thinkingLessons/index.ts`.
4. Create `src/data/thinkingLessonsAdvanced/money.ts` (10 tier-two lessons) and register in `src/data/thinkingLessonsAdvanced/index.ts`.
5. Update `src/i18n/translations.ts` world-count strings (EN + ID).
6. Update `.ai/specs/worlds.md` and `README.md` per "Spec changes" / "Files to change" above.
7. Add the decision log entry.
8. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons`, `bun test` — all must pass.
9. Update this plan's status to `done` with implementation notes.

---

## Rollback

Revert the commit. No localStorage migration needed — a player who never had `money-*` entries in `progress.lessons` simply sees the new world as unstarted; removing the world removes those keys' meaning but never their validity (unknown lesson ids are ignored by every reader in `useProgress.ts`/`progressStats.ts`).

---

## Review notes

Self-reviewed against `.ai/specs/invariants.md` and `.ai/specs/worlds.md` before writing any lesson content (plan-review stage folded into this session since no separate reviewer agent was invoked): scope is bounded to thinking-path data files + two doc/i18n counters, no engine/type risk beyond one union literal, and the INV-Q1/Q2 cross-world check was done against all six worlds that already use coins or clocks (`counting`, `mathReasoning`, `numbers`, `probability`, `memory`, `patterns`, `decomposition`, `planning`) before drafting a single lesson. Approved to proceed to build.

---

## Implementation notes

Built as planned, no deviations. Cross-world freshness check performed before writing lesson content:

- `counting` — coins as plain addition/subtraction/word-problem units (implicit value 1, or a stated single price × quantity), used to teach arithmetic operations. `money`'s coin lessons instead require recognising *different* coin denominations and summing their *value* (e.g. a 5-coin + a 1-coin), and later making change/comparing unit price as a purchasing decision — the arithmetic is a means to a real-world judgement, not the lesson itself.
- `mathReasoning` — coins/prices as algebraic reverse-solving ("she started with how many coins?") and inequality bounding. `money` never asks a child to reverse-engineer an unknown starting value.
- `numbers` — coins in a geometric-sequence multi-step chain (doubling each day). `money`'s multi-step chains are proportional-division chains (unit price, allowance splitting), not sequences.
- `probability` — a coin purely as a fair random-event generator (heads/tails), unrelated to its value. No overlap.
- `memory` / `patterns` — clock *emoji* used for sequence-memory ordering and skip-pattern recognition, never for reading what time the hands show. `money`'s clock lessons are literal hand-reading comprehension (`if-then`: "the short hand points to X, the long hand to Y — what time is it?").
- `decomposition` — a clock as a parallelism metaphor (two people halve the time), not a numeracy lesson.
- `planning` — a clock/budget used for constraint satisfaction (can this plan meet a deadline; maximise items under a budget). `money`'s budgeting lesson splits a fixed amount into named buckets (save/want/need) rather than optimising a purchase under a constraint, and its schedule lessons (`grid-select`) ask the child to find free/conflicting slots directly on a grid rather than reason about a stated clue.
- `money-2`'s daily-routine `sequence` lesson deliberately avoids reusing `decomposition-1`'s exact "brush teeth" scenario — chose wake up → get dressed → eat breakfast → go to school (a chronological, multi-activity day-ordering task) instead of a single how-to procedure.

Verification commands: `bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons`, `bun test` — see commit for results.
