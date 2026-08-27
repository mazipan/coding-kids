# 2026-08-07 — Blockly block counting: controls_repeat_ext uses real math_number block

**Context:** Auditing `optimalBlockCount` values required knowing exactly how `workspace.getAllBlocks(false)` counts blocks. The key question was whether the number input inside a repeat block is a "shadow" (not counted) or a real block.

**Decision:** Our `toolboxes.ts` defines the repeat entry as `{ block: { type: 'math_number' } }` (not `{ shadow: ... }`), so the number IS a real block. Therefore: `repeat(N) { move }` = 3 blocks (repeat container + math_number + body block), regardless of N. For N ≤ 2, using individual move blocks (2 blocks for 2 moves) is cheaper than a loop (3 blocks). This rule is documented in the block-count-audit plan and applied when setting `optimalBlockCount` and `starThresholds`.

**Alternatives rejected:**
- Changing the toolbox to use a shadow number — would break existing lesson saves; not worth it.
- Using N as the block count for a loop — incorrect; contradicted by the actual Blockly API.

**Consequences:** All `optimalBlockCount` and `starThresholds` values must be validated against this 3-block-per-repeat rule, not 1-per-repeat. Two jungle lessons (jungle-4, jungle-6) had incorrect values and were corrected.
