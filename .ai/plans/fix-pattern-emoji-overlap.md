# Plan: Fix overlapping stars in pattern puzzles

**Slug:** `fix-pattern-emoji-overlap`  
**Date:** 2026-08-09  
**Status:** in-review

---

## Request

> can you fix the overlapping stars

---

## Decision

Pattern puzzles store multi-star answers as concatenated emoji strings (`⭐⭐⭐⭐`) and render them as a single text node inside fixed-size boxes at `text-4xl`/`text-5xl`. Star glyphs visually overflow their advance width, so they pile on top of each other — especially on Growing Stars (`patterns-3`). Fix by splitting emoji runs into graphemes, laying them out with flex gap, sizing sequence/option cells to content, and scaling font size down as the count grows. Answer comparison stays string-based (unchanged).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Change lesson data to use numbers / separate arrays | Touches many lessons and puzzle schema; overkill for a render bug |
| CSS `letter-spacing` only | Unreliable across emoji fonts and OS; doesn't fix fixed box overflow |
| Shrink all emoji globally | Hurts single-emoji pattern lessons that look fine today |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1–PR4 progress | no | Answer strings unchanged |
| INV-L1–L3 unlock | no | |
| INV-G1–G4 game engine | no | Thinking path only |
| INV-C1 TypeScript strict | yes | New helper typed; no `any` |
| INV-C2 no hardcoded strings | no | No new user-facing copy |
| INV-C3 build passes | yes | Verify with `bun run build` |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | yes | Layout must not assume fixed emoji count; cells grow / text scales |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/screens/ThinkingLesson.tsx` | edit | Grapheme split helper + `PatternPuzzleView` layout |
| `.ai/plans/fix-pattern-emoji-overlap.md` | add | This plan |

---

## Spec changes

None.

---

## Implementation steps

1. Add a small `splitGraphemes` helper (prefer `Intl.Segmenter`, fallback `Array.from`) and an `EmojiCluster` renderer that wraps graphemes in `inline-flex` with gap.
2. In `PatternPuzzleView` sequence cells: replace fixed `w-14`/`w-16` with min-width + horizontal padding; render items via `EmojiCluster`; scale text size by grapheme count.
3. In option buttons: render via `EmojiCluster`; use adaptive text size; allow horizontal padding / auto height so 6–7 stars fit without overflow.
4. Run `bun run build` — must pass.

---

## Rollback

Revert the `ThinkingLesson.tsx` change. No localStorage migration.

---

## Review notes

Plan is a localized UI fix with no schema/progress changes. Approved for build.

---

## Implementation notes

- Added `splitGraphemes` / `EmojiCluster` in `ThinkingLesson.tsx` with adaptive text size by emoji count.
- Sequence cells use `min-w-*` + horizontal padding; option buttons use `min-h-*` + padding so long runs fit.
- `Intl.Segmenter` accessed via a narrow type assertion so `tsc` passes on the current lib target.
- `bun run build` passes.
