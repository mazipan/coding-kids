<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Split `src/data/thinkingLessons.ts` into one file per world

**Slug:** `refactor-split-thinking-lessons-core-data`
**Date:** 2026-08-27
**Status:** done

---

## Request

> yes

Confirming a follow-up offer after `refactor-split-thinking-lessons-advanced-data`: split the remaining tier-one file, `src/data/thinkingLessons.ts` (2947 lines, `THINKING_LESSONS_CORE`), the same way the tier-two file (`thinkingLessonsAdvanced.ts`) was just split — one file per world. This completes the one-file-per-world treatment across all four world/lesson-content data files touched today.

---

## Decision

`thinkingLessons.ts` held `THINKING_LESSONS_CORE` (140 tier-one lessons, 10 per world × 14 worlds) plus the exported `THINKING_LESSONS` (core + advanced combined) and its two lookup helpers, `getThinkingLessonsByWorld` / `getThinkingLessonByNumber`. Unlike `thinkingLessonsAdvanced.ts`, this file's world sections were **not** contiguous: `patterns`, `logic`, and `counting` were each authored in two separate passes (lessons 0–4, then 5–9), so their two sections sit apart, interleaved with each other, in the original file (`Pattern World` → `Logic World` → `Pattern World (lessons 5–9)` → `Logic World (lessons 5–9)` → `Counting World` → `Counting World (lessons 5–9)` → the remaining 11 worlds each in one contiguous section).

Converted it to a `src/data/thinkingLessons/` directory: one file per world exporting `{camelId}Lessons: ThinkingLesson[]`. For the three worlds with two source sections, both sections were concatenated into a single file in their original relative order (0–4 then 5–9), dropping the second section's now-redundant header comment. `index.ts` imports all 14 world files plus `THINKING_LESSONS_ADVANCED` (from `../thinkingLessonsAdvanced`), and rebuilds `THINKING_LESSONS`, `getThinkingLessonsByWorld`, and `getThinkingLessonByNumber` with identical logic. The internal-only `THINKING_LESSONS_CORE` name is dropped — it was never exported or used outside this file.

As with the tier-two split, this file's size (2947 lines) and its non-contiguous sections made a scripted split with an automated equivalence check the safer choice over hand-transcription. The script sliced the file at its 17 existing comment-delimited sections, mapped each to a world id, concatenated same-world sections, and wrote the 14 files. Verification compared the pre-deletion original against the new directory: as a **set** keyed by lesson `id`, all 280 lessons (140 tier-one, matched to the 140 tier-two already verified in the prior split) are present with byte-identical content. The flat array's **order** did change — the new file interleaves worlds in the canonical `patterns, logic, counting, ...` order rather than the original's `patterns(0-4), logic(0-4), patterns(5-9), logic(5-9), counting(0-4), counting(5-9), ...` — but `THINKING_LESSONS`' own comment states order is irrelevant ("every lookup sorts or filters by number"), and this is exactly the property both lookup helpers already depend on.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Preserve the exact original section fragmentation (e.g. a `patterns.ts` that itself re-exports two chunks) | Adds indirection for no benefit — the two-pass authoring history isn't meaningful information once lessons live in one per-world file; a single flat 10-lesson array per world is simpler and matches how tier two was authored (all 10 in one section) |
| Hand-transcribe | Same reasoning as the tier-two split: high risk of silent transcription error across ~2900 lines of bilingual puzzle content; scripted split + automated diff makes correctness verifiable |
| Keep `THINKING_LESSONS_CORE` as a named intermediate re-exported from `index.ts` | It was never used outside this file (confirmed via grep); keeping it would be dead API surface |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1–P4 | no | |
| INV-PR1–PR4 | no | |
| INV-L1 sequential lesson unlock | no | lesson `number`/`id` fields unchanged; `getThinkingLessonsByWorld` still sorts by `number` |
| INV-L3 thinking worlds always unlocked | no | not touched by lesson content |
| INV-G1–G4 | no | thinking path has no game engine |
| INV-C1 TypeScript strict | yes | must still pass with zero errors after split |
| INV-C2 no hardcoded strings | no | lesson copy already `LocalizedString`; copied verbatim |
| INV-C3 build passes | yes | verified after split |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | content unchanged, `bun run audit-lessons` re-verified |
| INV-I2 no layout assumptions | no | |
| INV-Q1–Q5 content quality | no | zero content change — confirmed as an exact id-keyed set match; `bun run audit-lessons` reports the same 280 total lessons and per-type breakdown as before |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/thinkingLessons.ts` | delete | replaced by `src/data/thinkingLessons/` directory |
| `src/data/thinkingLessons/{patterns,logic,counting,memory,nature,numbers,decomposition,abstraction,mathReasoning,induction,deduction,planning,probability,spatial}.ts` | add | 14 files, each exporting `{camelId}Lessons: ThinkingLesson[]`, 10 lessons apiece |
| `src/data/thinkingLessons/index.ts` | add | assembles `THINKING_LESSONS` (spreading all 14 world files + `THINKING_LESSONS_ADVANCED`); re-exports `getThinkingLessonsByWorld` and `getThinkingLessonByNumber` |
| `scripts/audit-thinking-lessons.mjs` | edit | its `THINKING_LESSONS` import used an explicit `../src/data/thinkingLessons.ts` path — same pitfall as the `thinkingWorlds` split — updated to `../src/data/thinkingLessons/index.ts` |
| `.ai/agents/context.md` | edit | update file-tree entry and the tier-split gotcha |
| `.ai/specs/worlds.md` | edit | update all references to `thinkingLessons.ts` (five spots) |
| `src/data/thinkingLessonsAdvanced/index.ts` | edit | its docblock referenced `../thinkingLessons.ts` by explicit path; updated to `../thinkingLessons/` |
| `README.md` | edit | its data/ file tree was already stale from the three earlier splits today (still showed `worlds.ts`, `thinkingWorlds.ts` as single files) — updated all four data-file entries together |
| `.ai/decisions/log/2026-08-27-08-split-thinking-lessons-core-data-into-one-file-per-world.md` | add | decision record |

No consumer needs a change beyond the doc/script updates: every other import site (`App.tsx`, `ThinkingHome.tsx`, `progressStats.ts`, three test files) uses a bare `'../data/thinkingLessons'` / `'./data/thinkingLessons'` specifier, transparent to the directory swap.

---

## Spec changes

### `.ai/agents/context.md`

Replace the `thinkingLessons.ts` file-tree line with a `thinkingLessons/` entry, and update the tier-split gotcha to say tier one now lives one-file-per-world too.

### `.ai/specs/worlds.md`

Update the five references to `thinkingLessons.ts`: the "Thinking lesson fields" intro, the tier-one difficulty-curve heading, the short "Adding a new thinking lesson" checklist, the longer "Adding a new thinking lesson" walkthrough's step 1, and the "Adding a new thinking world" step 7.

### `README.md`

Update the `data/` file-tree block (four lines) to reflect all three of today's splits plus this one, since it had not been touched by the earlier plans.

---

## Implementation steps

1. Write a one-off Bun script (scratch, not committed) that reads `thinkingLessons.ts`, locates its 17 `// ── {Section Name} ──` boundary comments, maps each to a world id (three worlds map two sections each), concatenates same-world sections in original order (dropping the second section's header comment), and writes `src/data/thinkingLessons/{camelId}.ts` plus an `index.ts` rebuilding `THINKING_LESSONS` + both lookup helpers.
2. Run the script; sanity-check every world file has exactly 10 lesson objects, and that the merged files (patterns/logic/counting) read as one clean 0–9 sequence with no duplicated header line.
3. Verify equivalence: import the pre-deletion original file and the new directory side by side (via explicit paths) and compare all 280 `ThinkingLesson` objects as a set keyed by `id` (not positional order, since the split intentionally reorders which section leads).
4. Delete `src/data/thinkingLessons.ts`.
5. Fix the resulting broken import in `scripts/audit-thinking-lessons.mjs` (explicit `.ts` path, same pitfall as the `thinkingWorlds` split) and the stale explicit-path reference in `thinkingLessonsAdvanced/index.ts`'s docblock.
6. Update `.ai/agents/context.md`, `.ai/specs/worlds.md`, and `README.md` per "Spec changes" above.
7. Add decision log entry `.ai/decisions/log/2026-08-27-08-split-thinking-lessons-core-data-into-one-file-per-world.md`.
8. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons`, `bun test` — all must pass with zero errors and the same lesson counts/per-type breakdown as before.

---

## Rollback

`git revert` the commit. No localStorage migration needed — source-file reorganization only, content set-identical (array order changed, documented as irrelevant).

---

## Review notes

Self-reviewed (single-agent session). The interleaved-sections wrinkle (patterns/logic/counting each split across two non-adjacent comment blocks) is the one real difference from the tier-two split, and is why verification here checks set equality by `id` rather than positional array equality — a stricter positional check would have failed for a reason that doesn't matter (the file's own comment says order is irrelevant), so a weaker-but-correct check was the right tool. Confirmed via grep that `THINKING_LESSONS_CORE` has no external consumers before dropping the name.

---

## Implementation notes

Implemented exactly as planned. Verification script confirmed all 280 lessons (140 tier-one + 140 tier-two) match as a set keyed by `id` with byte-identical content; only the flat array's insertion order changed, which `THINKING_LESSONS`'s own comment and both lookup helpers already treat as irrelevant. `scripts/audit-thinking-lessons.mjs` needed the same explicit-`.ts`-path fix as the `thinkingWorlds` split. All five verification commands pass; `audit-lessons` reports the same 280 total lessons and per-type counts as before every split done today. `README.md`'s `data/` file tree, stale since the first split earlier today, was brought up to date as part of this change.
