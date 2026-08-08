# Plan: Debugging Challenges — find and fix broken code (blocks path)

**Slug:** `feat-debugging-challenges`  
**Date:** 2026-08-08  
**Status:** draft  
**Issue:** #30

---

## Request

> A new lesson type for the blocks path where the kid receives **pre-written code with one or two bugs** and must identify and fix them — rather than building a solution from scratch. This teaches a core CT skill (systematic debugging) that isn't currently in the platform.
>
> - Lesson loads with a workspace already containing blocks (some correct, one or two wrong)
> - A "broken code" badge/indicator shows the kid that something needs fixing
> - The kid must change the wrong block(s) and hit Run to verify
> - Star rating based on how few attempts (or how few edits) it takes
>
> New optional `isBuggy: true` flag on `Lesson` and a `buggyBlocks` field with the pre-broken XML workspace. `LessonScreen` detects `isBuggy` and initialises Blockly with the broken workspace instead of empty.

---

## Decision

Extend the existing `Lesson` interface with two optional fields (`isBuggy?: true` and `buggyState?: object`) that mirror the `isTutorial?: true` pattern already in use. When `isBuggy` is set, `LessonScreen` loads the pre-broken Blockly state after mount (via the existing `loadState` handle) and renders a debug-challenge banner above the workspace. Stars continue to use the existing block-count mechanism — the `optimalBlockCount` for a debug lesson is the block count of the **correct** (fixed) solution. Three new lessons are added: `caves-6` (direction bug), `factory-6` (function body bug), `portal-10` (loop count bug).

The `buggyState` is stored as a Blockly JSON serialisation object (`Blockly.serialization.workspaces.save()` format). The builder generates each `buggyState` object by constructing the workspace visually in the dev server and copying the serialised JSON from the browser console. This format is already used internally for state persistence (`savedStateRef`), so no new Blockly API surface is introduced.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| New discriminated `lessonType: 'debug'` union | More type-safe but breaks backward compatibility with the flat Lesson shape; `isTutorial?: true` is the established precedent for variants |
| Track edit count for star rating | Requires new `useProgress` store fields and migration; block count of the final solution works well enough — fewer total blocks correlates with a more surgical fix |
| Store `buggyState` as Blockly XML string | The app already uses JSON serialisation internally (`Blockly.serialization`); JSON is preferred in this codebase |
| Separate `DebuggingLesson` interface alongside `ThinkingLesson` | Overkill — debug lessons run on the same `LessonScreen` and game engine; only init and one UI element differ |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | Static data only |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | Same `completeLesson` flow, same guards |
| INV-PR2 stars are best-of | no | Unchanged |
| INV-PR3 XP is delta-only | no | Unchanged |
| INV-PR4 badges are permanent | no | No new badge types in this plan |
| INV-L1 sequential lesson unlock | yes | New lessons (caves-6, factory-6, portal-10) are numbered sequentially and require the previous lesson to be completed. No bypass logic needed. |
| INV-L2 world unlock by XP | no | Caves/Factory/Portal XP thresholds unchanged |
| INV-G1 bounded grid | no | Same game engine, same bounds checking |
| INV-G2 obstacle collision | no | Same |
| INV-G3 action cap | no | Same |
| INV-G4 sandbox | no | Same |
| INV-C1 TypeScript strict | yes | New optional fields on `Lesson`; `isBuggy` guard in `LessonScreen` must use `=== true`; `buggyState` typed as `object` (same as `BlocklyWorkspaceHandle.loadState` parameter) |
| INV-C2 no hardcoded strings | yes | New `debug.banner` and `debug.badge` keys added to `translations.ts` with both EN and ID values |
| INV-C3 build passes | yes | Verify with `bun run build` after all changes |
| INV-C4 localStorage only | no | No new storage |
| INV-I1 all keys have EN value | yes | Both new keys must have non-empty EN strings |
| INV-I2 no layout assumptions | yes | Debug banner uses `t()` with wrapping text — no fixed-width container |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `isBuggy?: true` and `buggyState?: object` to `Lesson` |
| `src/screens/LessonScreen.tsx` | edit | Load `buggyState` on mount; render debug banner |
| `src/i18n/translations.ts` | edit | Add `debug.banner` and `debug.badge` keys |
| `src/data/lessons.ts` | edit | Add `caves-6`, `factory-6`, `portal-10` debug lessons |
| `.ai/specs/worlds.md` | edit | Update lesson counts for caves, factory, portal |
| `.ai/decisions/log.md` | edit | Record the `isBuggy` design choice |

---

## Spec changes

### `.ai/specs/worlds.md`

In the worlds table or lesson-count section, update:
- **Caves**: 6 lessons → 7 lessons (adds `caves-6`, a debug challenge)
- **Factory**: 6 lessons → 7 lessons (adds `factory-6`, a debug challenge)
- **Portal**: 10 lessons → 11 lessons (adds `portal-10`, a debug challenge)

In the "Adding a new lesson" or equivalent guide section, add a note:

> **Debug lessons** (`isBuggy: true`): The workspace initialises with pre-broken blocks instead of empty. Set `buggyState` to the Blockly JSON serialisation of the broken workspace (obtained by constructing the workspace in the dev server and calling `Blockly.serialization.workspaces.save(Blockly.getMainWorkspace())` in the browser console). `optimalBlockCount` is the block count of the **correct** (fixed) solution. Star thresholds use the same semantics as non-debug lessons.

---

## New translation keys

Add to `src/i18n/translations.ts` (both EN and ID):

```ts
'debug.banner': {
  en: "Something's broken — can you find and fix it?",
  id: 'Ada yang rusak — bisakah kamu menemukan dan memperbaikinya?',
},
'debug.badge': {
  en: 'Debug Challenge',
  id: 'Tantangan Debug',
},
```

---

## New lessons specification

### caves-6 — "The Wrong Turn"

**Theme:** Direction bug — one `moveRight()` is replaced with `moveDown()` in a straight-line sequence.

```
Grid: 3 rows × 5 cols (gridRows: 3, gridCols: 5)
All cells: 'empty'
startPos: [1, 0]
Items: [{ id: 'gem-1', pos: [1, 3] }]
goalType: 'collect_all'
availableCategories: ['move']
optimalBlockCount: 4   (moveRight × 3 + collect_item × 1)
xpReward: 75
starThresholds: [8, 6, 5, 4]   (same scale as other caves lessons)
isBuggy: true
```

**Buggy workspace** (4 blocks, chained): `moveRight → moveDown → moveRight → collect_item`  
The second block (`moveDown`) is the bug; correct is `moveRight`.

**Correct solution** (4 blocks): `moveRight → moveRight → moveRight → collect_item`

**Generating `buggyState`**: In the dev server, open any lesson, open the browser console, and run:
```js
// After building the workspace visually, copy the result of:
JSON.stringify(Blockly.serialization.workspaces.save(Blockly.getMainWorkspace()))
```
Construct the four blocks in order (right, **down**, right, collect), serialise, paste the result as `buggyState` in the lesson object.

---

### factory-6 — "The Missing Cog"

**Theme:** Function body bug — a custom function is defined but its body is missing one `moveRight()` call.

```
Grid: 3 rows × 6 cols (gridRows: 3, gridCols: 6)
All cells: 'empty'
startPos: [1, 0]
Items: [{ id: 'cog-1', pos: [1, 4] }]
goalType: 'collect_all'
availableCategories: ['move', 'functions']
optimalBlockCount: 7   (procedure_defnoreturn + 4 move_right + collect_item + procedure_callnoreturn)
xpReward: 100
starThresholds: [12, 9, 8, 7]
isBuggy: true
```

**Intended pattern:** A `doStep` function containing `moveRight(); moveRight()` is defined, called twice, then `collect()`.  
**Bug:** The function body only has one `moveRight()` (missing the second). Kid must add the missing block inside the function.  
**Correct block count**: function definition (1) + move_right in body (2) + call (1) + call (1) + collect (1) = 6 blocks minimum. Adjust `optimalBlockCount` to match what the corrected workspace actually reports — builder verifies in the dev server.

---

### portal-10 — "The Loop Lag"

**Theme:** Loop count bug — a `repeat` block has count `3` when it should be `4`.

```
Grid: 3 rows × 6 cols (gridRows: 3, gridCols: 6)
All cells: 'empty'
startPos: [1, 0]
Items: [{ id: 'clock-1', pos: [1, 4] }]
goalType: 'collect_all'
availableCategories: ['move', 'loops']
optimalBlockCount: 3   (controls_repeat_ext + move_right + collect_item)
xpReward: 100
starThresholds: [6, 4, 3, 3]
isBuggy: true
```

**Buggy workspace**: `repeat(3) { moveRight() }; collect_item`  
**Correct workspace**: `repeat(4) { moveRight() }; collect_item`  
Kid must change the `3` to `4` in the repeat block.

---

## Implementation steps

1. **`src/types/index.ts`** — add two optional fields to the `Lesson` interface, after `isTutorial?`:
   ```ts
   isBuggy?: true
   buggyState?: object
   ```

2. **`src/i18n/translations.ts`** — add `debug.banner` and `debug.badge` entries (both EN and ID) as specified in the "New translation keys" section above. Insert them near the `tutorial.*` group for discoverability.

3. **`src/screens/LessonScreen.tsx`**:
   a. Import `useEffect` if not already imported (it already is — confirm at line 1).  
   b. After the existing refs (`runningRef`, `blocklyRef`), add a one-shot `useEffect` that runs on mount only:
      ```ts
      useEffect(() => {
        if (lesson.isBuggy && lesson.buggyState) {
          blocklyRef.current?.loadState(lesson.buggyState)
        }
      }, [])
      ```
      Place this after all other state declarations, before any event handlers.  
   c. In the JSX, directly above the `<BlocklyWorkspace>` component (inside the left-panel `motion.div`), add a debug banner that renders only when `lesson.isBuggy`:
      ```tsx
      {lesson.isBuggy && (
        <div className="flex items-center gap-2 rounded-xl px-4 py-2 mb-3 text-sm font-semibold bg-amber-500/20 border border-amber-400/40 text-amber-300">
          <Bug className="w-4 h-4 shrink-0" />
          {t('debug.banner')}
        </div>
      )}
      ```
      Import `Bug` from `lucide-react` at the top of the file alongside the existing lucide imports.

4. **`src/data/lessons.ts`** — add three new debug lessons. For each, generate `buggyState` via the dev server:
   a. Run `bun run dev`, open any lesson, open DevTools console.
   b. In the Blockly workspace, build the **buggy** version of the code manually.
   c. Copy the result of: `JSON.stringify(Blockly.serialization.workspaces.save(Blockly.getMainWorkspace()))` — paste this JSON object (parsed, not stringified) as the `buggyState` value.
   d. Also check the block count of the **correct** solution (fix the bug, run, read the `count` from `handleCodeChange`) and set `optimalBlockCount` accordingly.
   e. Add the three lessons in world order after the last lesson of each world.
   
   **caves-6** fields: use the specification above. Titles and story copy:
   ```ts
   title: { en: 'The Wrong Turn', id: 'Belokan yang Salah' },
   story: {
     en: "Zara's map has a mistake! The code is almost right, but one block is pointing the wrong way. Find it and fix it!",
     id: 'Peta Zara ada kesalahannya! Kodenya hampir benar, tapi satu blok mengarah ke arah yang salah. Temukan dan perbaiki!',
   },
   mascotMessage: {
     en: "Look at where each block sends you. One of them takes a wrong turn!",
     id: 'Lihat ke mana setiap blok membawamu. Salah satunya berbelok ke arah yang salah!',
   },
   hints: [
     { en: 'Run the code and watch where the character goes wrong.', id: 'Jalankan kode dan perhatikan di mana karakter salah jalan.' },
     { en: 'Compare each block to the path on the grid.', id: 'Bandingkan setiap blok dengan jalur di grid.' },
   ],
   ```

   **factory-6** fields:
   ```ts
   title: { en: 'The Missing Cog', id: 'Roda Gigi yang Hilang' },
   story: {
     en: "Bolt built a helper function, but forgot one step! The machine stops short. Add the missing cog to get it working.",
     id: 'Bolt membuat fungsi pembantu, tapi lupa satu langkah! Mesin berhenti di tengah jalan. Tambahkan roda gigi yang hilang agar bekerja lagi.',
   },
   mascotMessage: {
     en: "The function runs but doesn't go far enough. What's missing inside it?",
     id: 'Fungsi berjalan tapi tidak cukup jauh. Apa yang hilang di dalamnya?',
   },
   hints: [
     { en: 'Open the function definition — count the steps inside it.', id: 'Buka definisi fungsi — hitung langkah-langkah di dalamnya.' },
     { en: 'How many times does the function need to run to reach the goal?', id: 'Berapa kali fungsi perlu berjalan untuk mencapai tujuan?' },
   ],
   ```

   **portal-10** fields:
   ```ts
   title: { en: 'The Loop Lag', id: 'Lingkaran yang Kurang' },
   story: {
     en: "Nova's time loop is one step short! The repeat count is wrong. Adjust it so the portal aligns.",
     id: 'Lingkaran waktu Nova kurang satu langkah! Jumlah pengulangan salah. Sesuaikan agar portal sejajar.',
   },
   mascotMessage: {
     en: "Count how many steps you need, then check the number in the repeat block.",
     id: 'Hitung berapa langkah yang kamu butuhkan, lalu periksa angka di blok pengulangan.',
   },
   hints: [
     { en: 'How many columns are between the start and the goal?', id: 'Berapa kolom antara awal dan tujuan?' },
     { en: 'The repeat count controls how many times the block inside runs.', id: 'Jumlah pengulangan menentukan berapa kali blok di dalamnya berjalan.' },
   ],
   ```

5. **`.ai/specs/worlds.md`** — apply the spec changes described in the "Spec changes" section above.

6. **`.ai/decisions/log.md`** — add an entry:
   ```
   ## 2026-08-08 — isBuggy flag for debug lessons
   Added `isBuggy?: true` and `buggyState?: object` to the `Lesson` interface (feat-debugging-challenges).
   Chose optional flags over a discriminated type union to match the existing `isTutorial?: true` pattern.
   Chose Blockly JSON serialisation format (not XML) because the app already uses it internally for state persistence.
   Stars still use final block count; `optimalBlockCount` reflects the corrected solution.
   ```

7. **`bun run build`** — must pass with zero TypeScript errors before committing.

---

## Rollback

Revert the feature commit(s). No localStorage migration needed — `isBuggy` and `buggyState` are additive fields; existing saved progress is unaffected. The three new lesson IDs (`caves-6`, `factory-6`, `portal-10`) simply won't exist, which means no player progress references them.

---

## Review notes

_To be filled in by reviewer-code._

---

## Implementation notes

_To be filled in by builder after implementation._
