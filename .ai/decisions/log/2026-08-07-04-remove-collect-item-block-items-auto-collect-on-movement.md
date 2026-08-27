# 2026-08-07 — Remove collect_item block; items auto-collect on movement

**Context:** The `collect_item` Blockly block was originally added to give kids explicit control over picking up items. In practice, `applyAction` in `gameEngine.ts` already auto-collects items whenever the character moves onto their cell, making the explicit block redundant. Kids who used it inflated their block count and scored fewer stars.

**Decision:** Remove `collect_item` from toolbox, custom block definitions, JS generator, game engine, type definitions, and i18n strings. The `new Function` sandbox now exposes only four verbs: `moveRight`, `moveLeft`, `moveUp`, `moveDown`. Sound logic in LessonScreen was updated to play the collect sound whenever a move causes `collectedIds.size` to increase (auto-collect detection), replacing the now-dead `action.type === 'collect'` branch.

**Alternatives rejected:**
- Keep the block but don't count it in the score — `workspace.getAllBlocks()` counts all real blocks; excluding specific types would require forking the toolbox counting logic.
- Hide from toolbox but keep engine support — the engine handler would be dead code; serialized Blockly state could still reference it from old saves.

**Consequences:** Six files changed. No lesson data changes needed (no lesson required the collect block). INV-G4 is tighter: sandbox has exactly 4 verbs, not 5.
