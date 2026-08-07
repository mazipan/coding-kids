# Plan: Block count audit and jungle corrections

**Slug:** `fix-block-count-audit`  
**Date:** 2026-08-07  
**Status:** done

---

## Request

> Audit all `optimalBlockCount` values across every lesson. Make sure we count correctly, considering features like loops (which produce more blocks in practice) and variables.

---

## Decision

Audit all 31 block coding lessons against precise Blockly counting rules. Correct two confirmed bugs in the jungle world where `optimalBlockCount` and `starThresholds` were inconsistent with the hints written in the same lesson. All other worlds verified correct.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Adjust hints to match wrong thresholds | The hints describe the *actual* optimal path; adjusting thresholds is more correct than changing the path description. |
| Change all repeat loops to count as 1 block | `workspace.getAllBlocks(false)` counts real blocks, not visual units; our toolbox uses a real `math_number` block (not a shadow) inside `controls_repeat_ext`, so each repeat costs 3 blocks. Cannot change this without forking Blockly. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-PR1 progress never decreases | no | Thresholds are looser now; existing saved stars are unaffected |
| INV-PR2 stars are best-of | no | |
| INV-G3 action cap | no | |
| INV-C1 TypeScript strict | yes | Verified build passes after data changes |
| INV-C3 build passes | yes | Verified |
| All others | no | |

---

## Blockly block counting rules (established by this audit)

`workspace.getAllBlocks(false)` counts all real blocks in the workspace:

- Each movement block = 1 block
- `controls_repeat_ext` loop = **3 blocks**: the repeat container + the math_number input + each body block. So `repeat(N) { move }` = 3 blocks total, regardless of N.
- Individual moves are cheaper for N ≤ 2: `move; move` = 2 blocks vs `repeat(2){move}` = 3 blocks.
- Variable: `set x to N` = 2 blocks (variable setter + value). Each use of the variable = 1 block.
- Function definition: the define block + its body blocks. Function call = 1 block.

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/data/lessons.ts` | edit | Fix jungle-4 and jungle-6 as described below |

---

## Corrections applied

### jungle-4 (`id: 'jungle-4'`)

- Start: `[0,0]`, items at `[0,3]` and `[3,3]`
- Optimal path: right×3 → collect b1 → down×3 → collect b2 = **6 blocks**
- Hint already says "Go right 3 times to get banana 1, then down 3 to get banana 2!"
- **Before:** `optimalBlockCount: 7`, `starThresholds: [10, 7]`
- **After:** `optimalBlockCount: 6`, `starThresholds: [10, 6]`

### jungle-6 (`id: 'jungle-6'`)

- Start: `[0,0]`, items at `[0,2]`, `[2,4]`, `[4,6]`
- Optimal path: right×2 → down×2 → right×2 → down×2 → right×2 = **10 blocks**
- Hint already says "Try right 2, down 2, right 2, down 2, right 2. That's 10 moves!"
- **Before:** `optimalBlockCount: 12`, `starThresholds: [16, 12]`
- **After:** `optimalBlockCount: 10`, `starThresholds: [16, 10]`

### All other worlds

Verified correct:
- **jungle-0 through jungle-5**: Checked. jungle-5 `optimalBlockCount: 8` is correct (right×4 + down×4).
- **space (loops world)**: All lessons count at 3 blocks per repeat. Verified correct.
- **loops world**: All lessons correctly calibrated at 3 blocks per repeat.
- **factory-2** (`optimalBlockCount: 5`): define{right}(2) + repeat(5){call}(3) = 5. Correct.
- **Bonus worlds**: Spot-checked; thresholds are generous enough that minor variations don't matter.

---

## Rollback

Revert the two data edits in `src/data/lessons.ts`. No localStorage migration needed — `starThresholds` only affects scoring of new runs; existing saved stars are unaffected.

---

## Implementation notes

No deviations from plan. Both fixes are one-line changes to `optimalBlockCount` and one-line changes to `starThresholds`.
