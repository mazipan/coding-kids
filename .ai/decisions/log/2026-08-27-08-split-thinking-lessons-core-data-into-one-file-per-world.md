# 2026-08-27 — Split `src/data/thinkingLessons.ts` into one file per world

**Context:** Completing today's series of world/lesson-content splits (`worlds.ts`, `thinkingWorlds.ts`, `thinkingLessonsAdvanced.ts`), this one targets the last remaining file: `thinkingLessons.ts`, 2947 lines holding `THINKING_LESSONS_CORE` (140 tier-one lessons, 10 per world × 14 worlds) plus the exported `THINKING_LESSONS` (tier one + tier two combined) and its two lookup helpers.

**Decision:** Converted it to a `src/data/thinkingLessons/` directory: one file per world exporting `{camelId}Lessons: ThinkingLesson[]`, plus `index.ts` rebuilding `THINKING_LESSONS`, `getThinkingLessonsByWorld`, and `getThinkingLessonByNumber`. Unlike the tier-two file, three worlds (`patterns`, `logic`, `counting`) had their content authored across two non-adjacent sections each (lessons 0–4 then 5–9, interleaved with each other in the original file) — both sections were concatenated into one file per world, in original relative order. As with the tier-two split, the file's size (2947 lines) justified a scripted split with an automated equivalence check over hand-transcription; verification compared the pre-deletion original against the new directory as a **set keyed by lesson `id`** (not positional order — the merge intentionally changes which section leads), confirming all 280 lessons (both tiers) present with byte-identical content.

**Alternatives rejected:**
- Preserve the original two-section fragmentation as separate re-exported chunks — the authoring history isn't meaningful once lessons live in a per-world file; a flat 10-lesson array per world matches how tier two was already authored.
- Hand-transcribe — same transcription-risk reasoning as the tier-two split.
- Keep `THINKING_LESSONS_CORE` as a named export — confirmed via grep it had no consumers outside this file; dropped as dead API surface.

**Consequences:** All four world/lesson-content files touched today now follow the same one-file-per-world shape. `scripts/audit-thinking-lessons.mjs` needed the same explicit-`.ts`-path fix as the `thinkingWorlds` split (a second confirmation this is the recurring pitfall to grep for on any future file→directory split). `README.md`'s `data/` file tree, stale since the very first split earlier today, was brought current as part of this change rather than left drifting further.
