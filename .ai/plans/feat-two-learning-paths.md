# Plan: feat-two-learning-paths

**Status:** done  
**Slug:** feat-two-learning-paths  
**Date:** 2026-08-07

---

## What changed and why

Split the single `/app` route into two independent learning paths:

- **`/app/blocks`** — existing Blockly game (moved, backward-compat redirect from `/app`)
- **`/app/thinking`** — new "Brain Training" path: pattern, logic, and math puzzles, no code editor
- **`/app`** — new PathSelector hub that links to both

Rationale: Blockly teaches syntax but skips computational thinking fundamentals (pattern recognition, if/then reasoning, number patterns) that are developmentally important for ages 5–10. Two parallel paths let kids build foundations before or alongside coding.

---

## Files touched

| File | Change |
|---|---|
| `src/App.tsx` | New nested routing structure |
| `src/components/Header.tsx` | Path-aware back navigation |
| `src/screens/HomeScreen.tsx` | `/app/world/` → `/app/blocks/world/` |
| `src/screens/LessonScreen.tsx` | `/app/world/` → `/app/blocks/world/` |
| `src/screens/PathSelector.tsx` | **new** — hub at `/app` |
| `src/screens/ThinkingHome.tsx` | **new** — world map + lesson list for thinking |
| `src/screens/ThinkingLesson.tsx` | **new** — puzzle screen |
| `src/data/thinkingWorlds.ts` | **new** — 3 worlds: patterns, logic, counting |
| `src/data/thinkingLessons.ts` | **new** — 15 lessons (5 per world) |
| `src/types/index.ts` | Add ThinkingWorld, ThinkingLesson, puzzle types |
| `src/i18n/translations.ts` | Add path selector + thinking path keys |
| `.ai/decisions/log.md` | Decision record |

---

## Invariants

| Invariant | Affected? | Verified |
|---|---|---|
| INV-P1 No network calls | No | ✓ all data is static |
| INV-P2 No exfiltration | No | ✓ |
| INV-P3 No account required | No | ✓ |
| INV-P4 No ads | No | ✓ |
| INV-PR1 Progress never decreases | Yes | ✓ reuses `completeLesson` with same best-of logic |
| INV-PR2 Stars are best-of | Yes | ✓ same store, same `completeLesson` |
| INV-PR3 XP is delta-only | Yes | ✓ same store |
| INV-PR4 Badges permanent | No | ✓ |
| INV-L1 Sequential unlock | Yes | ✓ thinking lessons use lessonNum 0–4, same `isLessonUnlocked` logic |
| INV-L2 World unlock by XP | Yes | ✓ `isWorldUnlocked(unlockAtXP)` same function |
| INV-G1–G4 Game engine | No | n/a — thinking path has no game grid |
| INV-C1 TypeScript strict | Yes | ✓ build passes |
| INV-C2 No hardcoded strings | Yes | ✓ all UI strings via `t()` or `localize()` |
| INV-C3 Build passes | Yes | ✓ |
| INV-C4 localStorage only | No | ✓ |
| INV-I1 All keys have EN | Yes | ✓ all new keys have EN + ID |
| INV-I2 No layout assumptions | Yes | ✓ flex/wrap layouts used |

---

## Implementation steps

1. Add thinking types to `src/types/index.ts`
2. Create `src/data/thinkingWorlds.ts` (3 worlds)
3. Create `src/data/thinkingLessons.ts` (15 lessons: 5 pattern, 5 logic, 5 counting)
4. Add translation keys to `src/i18n/translations.ts`
5. Create `src/screens/PathSelector.tsx`
6. Create `src/screens/ThinkingHome.tsx`
7. Create `src/screens/ThinkingLesson.tsx`
8. Update `src/components/Header.tsx` — path-aware back navigation
9. Update `src/screens/HomeScreen.tsx` — `/app/world/` → `/app/blocks/world/`
10. Update `src/screens/LessonScreen.tsx` — same path update
11. Restructure `src/App.tsx` — new route tree
12. `bun run build` — verify

---

## Routing design

```
/app                          → PathSelector (new hub)
/app/blocks                   → GameLayout → HomeScreen (world map)
/app/blocks/world/:worldId    → HomeScreen (lesson list)
/app/blocks/world/:wId/:lNum  → LessonScreen
/app/thinking                 → GameLayout → ThinkingHome (world map)
/app/thinking/world/:worldId  → ThinkingHome (lesson list)
/app/thinking/world/:wId/:lNum → ThinkingLesson
```

All routes under `/app` share `GameLayout` (dark bg, Header, star field).  
Backward compat: old `/app/world/...` deep-links still resolve to `/` catch-all, which is acceptable.

---

## Thinking path content

**3 worlds, 5 lessons each (15 total):**

| World | ID | Ages | XP unlock | Puzzle type |
|---|---|---|---|---|
| Pattern World 🔮 | `patterns` | 5–8 | 0 | pattern completion |
| Logic Land 🧠 | `logic` | 7–10 | 30 | if-then choices |
| Math Magic ✨ | `counting` | 8–12 | 80 | number puzzles |

Star system: 3 stars = first try, 2 = second try, 1 = third+.  
XP shared with blocks path (same `useProgress` store).

---

## New dependency

None.

---

## Rollback

All blocks-path code is preserved unchanged in function; only paths moved from `/app/world/...` to `/app/blocks/world/...`. Reverting `src/App.tsx` restores the old routes. The thinking-path files can be deleted without affecting blocks.

---

## Implementation notes

- Thinking lesson IDs use format `{worldId}-{number}` (e.g. `patterns-0`) matching the existing `isLessonUnlocked` logic which parses `lessonId.split('-')[1]`
- Lesson numbering starts at 0 so the first lesson is always accessible (matching the tutorial-always-accessible logic in `isLessonUnlocked`)
- `ThinkingLesson` uses inline completion state instead of `RewardModal` (which is tightly coupled to the blocks `Lesson` type)
- `Header.tsx` updated to detect `/app/blocks/...` and `/app/thinking/...` paths and generate correct back-navigation URLs
- Post-plan additions shipped on same branch: lessons expanded to 10 per world (30 total), all thinking worlds unlocked from start (`unlockAtXP: 0`), lessons 5–9 redesigned for progressive difficulty, next-world navigation banner added to each world view, `XPBar` gained `hideLabel` prop to suppress coding-level names on thinking path, all interactive icons migrated to `lucide-react` with symbol characters stripped from translation strings
