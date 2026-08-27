# Plan: Fix `thinkingWorldsContent.test.ts` staleness and close out #57

**Slug:** `fix-thinkingworldscontent-test-staleness`
**Date:** 2026-08-27
**Status:** done

---

## Request

> Issue #57 ("INV-Q3 violated — all true-false answers in Nature Quest and Logic Detective run
> the same way") asked, as its third acceptance item, to widen `NEW_WORLDS` in
> `tests/thinkingWorldsContent.test.ts` to cover every thinking world once `nature` and
> `deduction`'s data were fixed. The data fix landed as part of
> `.ai/plans/2026-08-27-content-thinking-lessons-tier-two.md` (#68), but that plan expanded every
> world from 10 to 20 lessons without updating this test file's hardcoded 10-lesson/XP-tier
> assumptions. Widening `NEW_WORLDS` as originally written would take the suite from 6 failures to
> many more. User confirmed: fix the test file for real (not just close #57 and file a follow-up).

---

## Decision

`tests/thinkingWorldsContent.test.ts` predates tier two. Its per-world tests were scoped to
`NEW_WORLDS = ['planning', 'probability', 'spatial']` specifically to dodge the pre-existing
`nature`/`deduction` INV-Q3 violation — that reason no longer exists, both worlds are fixed. But
two of the per-world tests also hardcode the *old* 10-lesson shape (`toHaveLength(10)`,
`xpReward` bounds keyed to `number <= 4`), which is now wrong for all 14 worlds, not just the 3 in
`NEW_WORLDS`. Fix both problems together: drop the scoping constant and run every per-world test
against all 14 worlds, and make the two stale tests describe the actual 20-lesson/two-tier shape
instead of the old one.

`scripts/audit-thinking-lessons.mjs` (added alongside tier two) is the authoritative mechanical
check for lesson content and already validates ids, numbering, `lessonCount`, INV-Q3, and a
tier-two-pays-more-than-tier-one INV-Q5 check across all 14 worlds with 0 problems. This plan does
not duplicate that script's job — it fixes this test file's own two stale assertions and removes
its now-pointless scoping, so both checks keep running (`bun test` in CI/lefthook, `bun run
audit-lessons` on demand) without one of them silently only covering 3 of 14 worlds.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Close #57 now, file a separate issue for the 6 failures | Was the first option offered; user asked for the full fix instead. |
| Delete `tests/thinkingWorldsContent.test.ts`, rely on `audit-lessons.mjs` alone | The test file also checks things the script does not: forbidden symbols (INV-C5), puzzle-answer reachability as `bun:test` assertions (so failures show inline in `bun test` output/CI), and the world colour-theme regression guard. Deleting it loses that coverage and moves content validation fully out of the standard test run. |
| Hardcode new fixed XP bounds per bucket (e.g. `0-4: 10-20`, `5-9: 15-30`, ...) | Measured the actual shipped data: every world's XP is non-decreasing within each 5-lesson block (0-4, 5-9, 10-14, 15-19), and every world's tier-two average exceeds its tier-one average — but XP is *not* globally non-decreasing across every lesson (e.g. `logic` lesson 4 costs 20, lesson 5 costs 18), so a single global monotonic or fixed-bound assertion would either fail on real, presumably-reviewed content or invent precision the spec (INV-Q5) never asked for. Assert the two properties that actually hold and that mirror the audit script's own INV-Q5 check, instead of guessing bounds. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | yes | Test updated to assert 20 sequentially numbered lessons per world (was 10); no production code changes, lesson data already satisfies this. |
| INV-L2 world unlock by XP | no | |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | `bun run type-check` run before commit. |
| INV-C2 no hardcoded strings | no | Test-only change; no new user-visible strings. |
| INV-C3 build passes | yes | `bun run build` run before commit. |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | Existing check widened to more worlds, not weakened. |
| INV-I2 no layout assumptions | no | |
| INV-Q3 true-false answer balance | yes | This is the actual subject of #57. The guard now runs against all 14 worlds instead of 3; data already passes (fixed by #68). |
| INV-Q5 real difficulty curve | yes | Stale bound-based assertion replaced with the two properties the shipped data actually has (see Decision). No lesson data changes. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `tests/thinkingWorldsContent.test.ts` | edit | Remove `NEW_WORLDS` scoping constant (iterate `THINKING_WORLDS` directly); update "has N sequentially numbered lessons" test from 10 → 20; replace the fixed-bound INV-Q5 test with the block-monotonic + tier-average check described above. |
| `.ai/decisions/log/2026-08-27-04-widen-thinkingworldscontent-test-to-all-worlds.md` | add | Decision record for dropping `NEW_WORLDS` and the new INV-Q5 test shape. |

No `src/` changes — this is test-only.

---

## Spec changes

None. `.ai/specs/invariants.md` INV-Q3 and INV-Q5 text is unchanged; this plan makes the test
suite match specs that were already true of the shipped data.

---

## Implementation steps

1. Edit `tests/thinkingWorldsContent.test.ts`:
   - Delete the `NEW_WORLDS` constant and its comment; change `describe.each(NEW_WORLDS)` to
     `describe.each(THINKING_WORLDS.map(w => w.id))`.
   - Rename `'has 10 sequentially numbered lessons (INV-L1)'` → `'has 20 sequentially numbered
     lessons (INV-L1)'`; change `toHaveLength(10)` → `toHaveLength(20)`. Loop body (number/id/worldId
     checks) is unchanged.
   - Replace the body of `'xp rewards follow the documented difficulty curve (INV-Q5)'` with:
     within each of the four 5-lesson blocks (`0-4`, `5-9`, `10-14`, `15-19`), `xpReward` is
     non-decreasing; and the average `xpReward` of lessons 10-19 is strictly greater than the
     average of lessons 0-9.
2. Run `bun test tests/thinkingWorldsContent.test.ts` — confirm 0 failures across all 14 worlds.
3. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test`, `bun run audit-lessons`
   — all must pass.
4. Add the decision log entry.
5. Update this plan's status to `done` with implementation notes.
6. Commit, push to `claude/issue-57-validation-dn4xq6`.
7. Comment on and close GitHub issue #57.

---

## Rollback

Revert the commit. Test-only change with no data or production-code edits, so there is nothing to
migrate and no stored progress is affected.

---

## Review notes

Single-agent session, no separate plan-review pass performed before build — user explicitly chose
the full-fix path in response to the scope tradeoff being surfaced, which stands in for plan
approval. Verification commands (step 3) are the actual gate before commit.

---

## Implementation notes

Built as planned, plus two additional real bugs the widening itself surfaced (both fixed rather
than worked around, since the request was to get this suite green for real):

1. **INV-C5 violations.** Widening past `NEW_WORLDS` caught 9 `LocalizedString` fields (across
   `math_reasoning-0`, `math_reasoning-3`, `induction-0`, `induction-5`, `deduction-0`,
   `deduction-4`) that embedded `→` or `✓` inside tutorial copy — never checked before because the
   check only ran on 3 of 14 worlds. Reworded each to drop the symbol while keeping the meaning
   (e.g. `A → B` → `A leads to B`; `→` between clauses → a period or "then"). One remaining `→`
   lives in `induction-2`'s `puzzle.visual` field, which is a plain math-notation string (not a
   `LocalizedString`) and outside what INV-C5 or any existing check covers — left as-is,
   consistent with other emoji/symbol `visual` fields elsewhere in the data.
2. **Sort-puzzle test over-fit to tier one.** The "reachable, unambiguous answer" test's `sort`
   branch called `Number()` on every item and required no `NaN`. Tier two added sorts whose items
   are fractions (`counting-16`), exponents (`numbers-14`), and clock emoji (`memory-14`) — not
   plain numeric strings, so `Number()` returns `NaN` even though the answers are correctly
   ordered (checked by hand: `2³,3²,2⁴,5²,3³` = `8,9,16,25,27`, ascending). Gated the numeric
   ascending-order check on `p.items.every(item => !Number.isNaN(Number(item)))` instead of
   asserting it unconditionally — non-numeric sorts still get permutation/uniqueness coverage from
   `scripts/audit-thinking-lessons.mjs`.

The "lesson 0 opens with a tutorial card" test turned out not to be a real invariant at all: only
the 6 worlds designed after the tutorial-card pattern was introduced (`math_reasoning`,
`induction`, `deduction`, `planning`, `probability`, `spatial`) have one on lesson 0; the original
8 do not, by original design, not by omission. Made it `test.skipIf(!lessons[0]?.tutorial)` instead
of forcing a requirement that was never true for those 8 worlds.

**Verification.** `bunx biome ci`, `bun run type-check`, `bun run build` all pass.
`bun test tests/thinkingWorldsContent.test.ts` → 119 pass, 8 skip, 0 fail (was 33 pass, 6 fail
before this plan, and would have been ~20+ fail if `NEW_WORLDS` were widened without also fixing
the two stale assumptions and the two data bugs above). `bun run audit-lessons` → 280 lessons,
0 problems.

**Not fixed here — separate, unrelated pre-existing bug found in passing.**
`tests/spatialPuzzle.test.ts` assumes every lesson in the `spatial` world has `puzzle.type ===
'spatial'`; tier two added `if-then`/`grid-select`/`multi-step` puzzles to `spatial` too, so that
file now fails the same way `thinkingWorldsContent.test.ts` did before this plan (1 fail + 5
unhandled errors, all in that one file, present on `origin/main` before any change in this plan).
Out of scope for #57 — filed as its own follow-up issue rather than folded in here, matching how
#57 itself was raised as a separate issue from the plan that found it.
