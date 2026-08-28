<!-- Save this file as .ai/plans/{YYYY-MM-DD}-{type}-{short-description}.md — the date prefix keeps the
     directory sorted chronologically. See .ai/harness/rules.md → "File naming — plans and decisions". -->

# Plan: Split `src/data/thinkingLessonsAdvanced.ts` into one file per world

**Slug:** `refactor-split-thinking-lessons-advanced-data`
**Date:** 2026-08-27
**Status:** done

---

## Request

> also the advance one

Follow-up to the same day's `refactor-split-worlds-data` and `refactor-split-thinking-worlds-data` plans, which split the two world-catalog files. This one targets `src/data/thinkingLessonsAdvanced.ts` (tier-two thinking lesson content, 4612 lines) — the "advanced" tier file, as distinct from `thinkingLessons.ts` (tier one, 2947 lines), which was not named and is left untouched.

---

## Decision

`thinkingLessonsAdvanced.ts` held all 140 tier-two lessons (10 per world × 14 worlds) as one flat array, already internally grouped by world with comment dividers (`// ── Pattern World · tier two ──`, etc.) but never split into separate files. Converted it to a `src/data/thinkingLessonsAdvanced/` directory: one file per world, each exporting a `{camelId}LessonsAdvanced: ThinkingLesson[]` array (e.g. `patterns.ts` → `patternsLessonsAdvanced`), plus `index.ts` that spreads all 14 into `THINKING_LESSONS_ADVANCED` in the original order and carries the file-level docblock explaining the tier-two rationale and the two tier-two-only puzzle types (`multi-step`, `grid-select`).

Given the file's size (4612 lines), the split was performed mechanically with a one-off Bun script that located the 14 world-boundary comments, sliced each section, and wrote the per-world files — safer than hand-transcribing ~4600 lines. The result was verified by importing both the old file (before deletion) and the new directory side by side and deep-comparing all 140 lesson objects with `JSON.stringify`, confirming byte-identical content and order before the old file was deleted. The splitting script itself was scratch tooling, not committed.

`src/data/thinkingLessons.ts` (tier one) keeps its current single-file-per-tier shape — not requested, and it stays the entry point that spreads in `THINKING_LESSONS_ADVANCED` via `import { THINKING_LESSONS_ADVANCED } from './thinkingLessonsAdvanced'`, a bare specifier that now resolves to the new directory's `index.ts` automatically.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Keep one 4612-line file | Same growth/reviewability problem the other two splits fixed |
| Hand-transcribe each world's section into its own file | 4612 lines of lesson content (emoji, bilingual strings, puzzle data) is exactly the kind of content transcription error creeps into; a script that slices the original text verbatim and a byte-level diff check is safer |
| Also split `thinkingLessons.ts` (tier one) | Not requested — user asked specifically for "the advance one" |
| Key lessons by world in an object instead of a flat array | `THINKING_LESSONS.filter/find` call sites (and `getThinkingLessonsByWorld`-style helpers) rely on flat-array semantics; matches the reasoning already recorded for the two prior splits |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1–P4 | no | |
| INV-PR1–PR4 | no | |
| INV-L1 sequential lesson unlock | no | lesson `number`/`id` fields unchanged |
| INV-L3 thinking worlds always unlocked | no | not touched by lesson content |
| INV-G1–G4 | no | thinking path has no game engine |
| INV-C1 TypeScript strict | yes | must still pass with zero errors after split |
| INV-C2 no hardcoded strings | no | lesson copy already `LocalizedString`; copied verbatim |
| INV-C3 build passes | yes | verified after split |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | content unchanged, `bun run audit-lessons` re-verified |
| INV-I2 no layout assumptions | no | |
| INV-Q1–Q5 content quality | no | zero content change — split only reorganizes file location, confirmed byte-identical |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/thinkingLessonsAdvanced.ts` | delete | replaced by `src/data/thinkingLessonsAdvanced/` directory |
| `src/data/thinkingLessonsAdvanced/{patterns,logic,counting,memory,nature,numbers,decomposition,abstraction,mathReasoning,induction,deduction,planning,probability,spatial}.ts` | add | 14 files, each exporting `{camelId}LessonsAdvanced: ThinkingLesson[]`, 10 lessons apiece |
| `src/data/thinkingLessonsAdvanced/index.ts` | add | assembles `THINKING_LESSONS_ADVANCED` in original order; carries the tier-two docblock |
| `.ai/agents/context.md` | edit | update file-tree entry and the "split across two files by tier" gotcha |
| `.ai/specs/worlds.md` | edit | update the four references to `thinkingLessonsAdvanced.ts`; also fixed one leftover stale reference to `src/data/thinkingWorlds.ts` (missed in the prior split) |
| `.ai/decisions/log/2026-08-27-07-split-thinking-lessons-advanced-data-into-one-file-per-world.md` | add | decision record |

No consumer needs a change beyond the doc updates: the only code import, `src/data/thinkingLessons.ts`'s `import { THINKING_LESSONS_ADVANCED } from './thinkingLessonsAdvanced'`, is a bare specifier that resolves to the new directory's `index.ts` automatically. `scripts/audit-thinking-lessons.mjs` imports `THINKING_LESSONS` (from `thinkingLessons.ts`, which re-exports the combined tier-one + tier-two list), not `THINKING_LESSONS_ADVANCED` directly, so it needed no change this time — the earlier explicit-`.ts`-path pitfall found in the `thinkingWorlds` split does not recur here.

---

## Spec changes

### `.ai/agents/context.md`

Replace the `thinkingLessonsAdvanced.ts` file-tree line with a `thinkingLessonsAdvanced/` entry. Update the "split across two files by tier" gotcha to describe tier two as itself split per world.

### `.ai/specs/worlds.md`

Update every reference to `thinkingLessonsAdvanced.ts` (the "Thinking lesson fields" intro, the tier-two difficulty-curve heading, and the "Adding a new thinking lesson" mechanical checklist) to point at `thinkingLessonsAdvanced/` and name the per-world file. Also fix the leftover `src/data/thinkingWorlds.ts` reference in the longer "Adding a new thinking lesson" walkthrough's step 4, missed when `thinkingWorlds.ts` was split earlier the same day.

---

## Implementation steps

1. Write a one-off Bun script (scratch, not committed) that reads `thinkingLessonsAdvanced.ts`, locates the 14 `// ── {World Name} · tier two ──` boundary comments, and writes each section to `src/data/thinkingLessonsAdvanced/{camelId}.ts` plus an `index.ts` spreading them all into `THINKING_LESSONS_ADVANCED`.
2. Run the script; sanity-check every world file has exactly 10 lesson objects.
3. Verify byte-for-byte equivalence: import the pre-deletion original file and the new directory side by side (via explicit paths) and deep-compare all 140 `ThinkingLesson` objects with `JSON.stringify`.
4. Move the file-level tier-two docblock from the original file's top into the new `index.ts`.
5. Delete `src/data/thinkingLessonsAdvanced.ts`.
6. Update `.ai/agents/context.md` and `.ai/specs/worlds.md` per "Spec changes" above; fix the leftover stale `thinkingWorlds.ts` reference found along the way.
7. Add decision log entry `.ai/decisions/log/2026-08-27-07-split-thinking-lessons-advanced-data-into-one-file-per-world.md`.
8. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons`, `bun test` — all must pass with zero errors and the same lesson counts as before.

---

## Rollback

`git revert` the commit. No localStorage migration needed — source-file reorganization only, content byte-identical.

---

## Review notes

Self-reviewed (single-agent session). The scale of this file (4612 lines) is what justified scripting the split rather than hand-authoring 14 files, with the follow-up byte-diff check as the safety net a manual transcription wouldn't get for free. Confirmed the one code import site is a bare specifier (transparent to the directory swap) and that `scripts/audit-thinking-lessons.mjs` doesn't import this file directly (unlike the `thinkingWorlds` split, where it did and needed a fix).

---

## Implementation notes

Implemented exactly as planned. Verification script confirmed all 140 lessons byte-identical (via `JSON.stringify`) and in the same order between the old file and the new directory before the old file was deleted. All five verification commands (`bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons`, `bun test`) pass; `audit-lessons` reports the same 280 total lessons and per-type counts as before the split. No consumer file required edits beyond the doc updates.
