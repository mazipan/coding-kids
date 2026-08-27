# 2026-08-07 — Two parallel learning paths: /app/blocks and /app/thinking

**Context:** Blockly is good for teaching syntax but skips computational thinking fundamentals (pattern recognition, if/then reasoning, number patterns) that matter for ages 5–10. User requested two separate paths.

**Decision:** Split `/app` into a PathSelector hub with two routes: `/app/blocks` (existing Blockly game, moved from `/app`) and `/app/thinking` (new Brain Training path with pattern, logic, and math puzzles). Both share the same `GameLayout` and `useProgress` store — XP and stars accumulate across both paths.

**Alternatives rejected:**
- Keep `/app` pointing to blocks, add `/app/thinking` as a sibling — cleaner backward compat but no central hub page; users arriving at `/app` would go straight into blocks with no visibility of the thinking path.
- Separate XP pools per path — adds complexity; shared XP means a kid can unlock thinking worlds by playing blocks and vice versa, which feels natural.
- Redirect `/app` → `/app/blocks` permanently — hides the path selector from users who know the old URL.

**Consequences:** Old deep-links (`/app`, `/app/world/...`) redirect to `/` (catch-all) rather than the specific lesson — acceptable for v1. ThinkingLesson uses inline completion state instead of `RewardModal` because `RewardModal` is tightly coupled to the blocks `Lesson` type. Thinking lesson IDs follow the same `{worldId}-{lessonNum}` format starting at 0, so `isLessonUnlocked` works unchanged.
