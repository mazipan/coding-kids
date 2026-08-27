# 2026-08-27 — Split `src/data/thinkingLessonsAdvanced.ts` into one file per world

**Context:** Same day's `worlds.ts` and `thinkingWorlds.ts` splits addressed the two world-catalog files; this follow-up targets `thinkingLessonsAdvanced.ts` (tier-two thinking lesson content), a 4612-line flat array of 140 lessons (10 per world × 14 worlds) that was already internally grouped by world via comment dividers but never split into separate files.

**Decision:** Converted it to a `src/data/thinkingLessonsAdvanced/` directory: one file per world exporting `{camelId}LessonsAdvanced: ThinkingLesson[]`, plus `index.ts` spreading all 14 into `THINKING_LESSONS_ADVANCED` in the original order and carrying the tier-two rationale docblock. Given the file's size, the split was done with a one-off Bun script (scratch tooling, not committed) that sliced the original text at its existing world-boundary comments, then verified with a byte-for-byte deep comparison (`JSON.stringify` on every lesson) between the old file and the new directory before deleting the old file — safer than hand-transcribing ~4600 lines of bilingual puzzle content.

**Alternatives rejected:**
- Hand-author each world's file — high risk of silent transcription errors in emoji/bilingual strings across 140 lessons; the script + diff-check approach makes correctness verifiable rather than assumed.
- Also split `thinkingLessons.ts` (tier one) — not requested; user asked specifically for "the advance one".
- Key lessons by world in an object instead of a flat array — same reasoning as the two prior splits: call sites rely on flat-array/`filter` semantics.

**Consequences:** Adding a tier-two lesson is now "append to the matching world's file under `thinkingLessonsAdvanced/`" instead of finding the right section in a 4612-line file. `scripts/audit-thinking-lessons.mjs` needed no change this time (it imports `THINKING_LESSONS` via `thinkingLessons.ts`, not this file directly) — unlike the `thinkingWorlds` split, where an explicit `.ts`-suffixed import path in that same script broke and had to be fixed. Also fixed one leftover stale `src/data/thinkingWorlds.ts` reference in `.ai/specs/worlds.md`, missed when that file was split earlier the same day.
