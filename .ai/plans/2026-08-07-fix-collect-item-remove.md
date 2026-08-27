# Plan: Remove collect_item block

**Slug:** `fix-collect-item-remove`  
**Date:** 2026-08-07  
**Status:** done

---

## Request

> The "Ambil ⭐" (collect_item) block is useless — items auto-collect on movement. Remove it from all files. It confuses kids and hurts their star rating because the block count inflates artificially.

---

## Decision

Remove `collect_item` entirely from the toolbox, custom block definitions, JS generator, game engine, type definitions, and sound logic. The `applyAction` function in `gameEngine.ts` already auto-collects items whenever the character steps onto their cell, making an explicit collect action redundant and harmful to the UX (kids use it, inflate their block count, and score fewer stars).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Keep `collect_item` but don't count it toward block score | Block counting is based on `workspace.getAllBlocks()` — there is no practical way to exclude specific block types without forking the toolbox logic. |
| Hide `collect_item` from the toolbox but keep the engine support | The block would still be serializable from saved state and confuse state restoration. |

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
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | no | |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | Auto-collect still subject to MAX_ACTIONS via move actions |
| INV-G4 sandbox | yes | Removed `collect` from the `new Function()` scope; only 4 move verbs remain |
| INV-C1 TypeScript strict | yes | Removed `'collect'` from the `ActionType` union; updated `LessonScreen` sound logic to avoid a dead comparison |
| INV-C2 no hardcoded strings | no | |
| INV-C3 build passes | yes | Verified `bun run build` passes |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | yes | Removed the `COLLECT_ITEM` key from `CUSTOM_MSG` in BlocklyWorkspace |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/blockly/toolboxes.ts` | edit | Remove `collect_item` entry from `MOVE_CONTENTS` |
| `src/blockly/customBlocks.ts` | edit | Remove `collect_item` block definition, JS generator, and unused `ACTION_COLOR` constant |
| `src/components/BlocklyWorkspace.tsx` | edit | Remove `COLLECT_ITEM` from `CUSTOM_MSG` |
| `src/engine/gameEngine.ts` | edit | Remove `collect` action from `new Function` scope and `applyAction` handler |
| `src/types/index.ts` | edit | Remove `'collect'` from `ActionType` union |
| `src/screens/LessonScreen.tsx` | edit | Replace `if (action.type === 'collect')` with collected-set size delta check |

---

## Implementation notes

Six files were changed (not the four initially estimated — `LessonScreen.tsx` also required updating for the sound logic). The `if (action.type === 'collect')` branch in the sound effect code was a dead comparison after removing `'collect'` from `ActionType`; TypeScript caught it. The fix plays the collect sound whenever a move causes `collectedIds.size` to increase, which correctly reflects auto-collection on movement.
