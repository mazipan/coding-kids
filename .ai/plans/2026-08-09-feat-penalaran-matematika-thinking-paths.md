# feat-penalaran-matematika-thinking-paths

**Status:** in-review  
**Slug:** feat-penalaran-matematika-thinking-paths

## What and why

Add "Penalaran Matematika" (Mathematical Reasoning) as a new thinking world with 10 lessons, plus a lightweight tutorial card mechanic for the thinking path so kids get a brief concept intro before puzzles that introduce new ideas.

## Files touched

- `src/types/index.ts` — add `'math_reasoning'` to `ThinkingWorldId`; add optional `tutorial` field to `ThinkingLesson`
- `src/data/thinkingWorlds.ts` — add `math_reasoning` world
- `src/data/thinkingLessons.ts` — add 10 lessons for `math_reasoning`
- `src/screens/ThinkingLesson.tsx` — render tutorial card when `lesson.tutorial` is set
- `src/i18n/translations.ts` — add `thinking.tutorial.dismiss` key (EN + ID)

## Invariants checked

- **INV-L3** — `math_reasoning` world has `unlockAtXP: 0` ✅
- **INV-C2** — all new strings go through `t()` or `localize()` ✅
- **INV-C1** — `tsc -b` passes ✅
- **INV-C3** — `bun run build` passes ✅
- **INV-P1/P2/P3/P4** — no network, no data, no accounts, no ads ✅

## Implementation steps

1. Extend `ThinkingWorldId` union and add `tutorial` optional field to `ThinkingLesson`
2. Add world definition to `thinkingWorlds.ts`
3. Add 10 lessons (mix of math, fill-in, match, sort, abstraction, pattern, true-false puzzle types) with tutorials on lessons 0, 3, 6
4. Update `ThinkingLesson.tsx`: add `showTutorial` state; render dismissible tutorial card above mascot message
5. Add `thinking.tutorial.dismiss` translation key

## Tutorial UX

- Optional `tutorial?: { title: LocalizedString; body: LocalizedString; example?: LocalizedString }` on `ThinkingLesson`
- When present, show a dismissible amber-tinted card before the puzzle
- "Got it! Let's go!" button hides it (component state — resets on page reload, which is intentional)
- Designed to be brief and skippable: Rafi (age 8) sees it once, taps away

## Decision record

Added to `.ai/decisions/log.md`: math_reasoning world chosen as amber/yellow to distinguish from existing math worlds (emerald counting, indigo numbers). Tutorial card uses component state (not localStorage) — resets on every visit, keeping the mechanic friction-free and not adding new localStorage keys (INV-C4).
