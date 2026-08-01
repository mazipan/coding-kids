# Common agent tasks

Standard task prompts. Copy, adjust the specifics, and hand to an agent.

---

## Add a lesson

> "Add lesson 7 to the Jungle world. It should introduce a simple loop — repeating a move block 3 times. Grid 5×5, no obstacles, 3 banana items arranged in a straight line. goalType: collect_all. Give it 2 hints, xpReward: 35, starThresholds: [6, 4]."

**Files touched:** `src/data/lessons.ts`  
**Checklist:**
- [ ] `id` follows pattern `{worldId}-{number}` (e.g. `jungle-7`)
- [ ] `availableCategories` includes `'loops'` if loops are intended
- [ ] `cells` uses `emptyGrid(rows, cols)` helper
- [ ] `starThresholds[1]` ≤ `starThresholds[0]` (silver is stricter than bronze)
- [ ] `bun run build` passes

---

## Add a world

> "Add a seventh world: Cloud Kingdom. Concept: objects/maps. Ages 13–15. Emoji: ☁️. unlockAtXP: 2200. Character: 🌤️, characterName: Nimbus. Theme colors: light blue accent."

**Files touched:** `src/data/worlds.ts`, `src/i18n/translations.ts`, `src/data/lessons.ts` (at least 3 starter lessons), `src/types/index.ts` (add new WorldId)  
**Checklist:**
- [ ] WorldId union updated in `src/types/index.ts`
- [ ] World translations added for both `en` and `id`
- [ ] At least 3 lessons added to verify the world is playable
- [ ] `bun run build` passes

---

## Fix a bug in the game engine

> "The character walks through diagonal paths it shouldn't reach. Investigate applyAction in the game engine."

**Files to read first:** `src/engine/gameEngine.ts`, `src/types/index.ts`  
**Checklist:**
- [ ] Write a mental repro case using an existing lesson before touching code
- [ ] Verify the fix doesn't break `collect_all`, `reach_goal`, and `collect_any` goal types
- [ ] `bun run build` passes

---

## Add a translation key

> "The hint panel has a hardcoded 'Show hint' label. Add it to the translation system."

**Files touched:** `src/i18n/translations.ts`, the component with the hardcoded string  
**Checklist:**
- [ ] Key added to both `en` and `id` objects
- [ ] Key name follows the `{section}.{name}` convention
- [ ] Hardcoded string replaced with `t('your.key')`
- [ ] `bun run build` passes

---

## Add a badge

> "Award a badge 'world_complete' when a player completes all lessons in any world."

**Files touched:** `src/store/useProgress.ts`, `src/components/RewardModal.tsx`, `.ai/specs/store.md`  
**Checklist:**
- [ ] Badge ID added to the badge table in `.ai/specs/store.md`
- [ ] Award logic added in `completeLesson()` — check after star/XP update
- [ ] Badge display handled in `RewardModal`
- [ ] `bun run build` passes

---

## Add a new language

> "Add Japanese (ja) as a third language option."

**Files touched:** `src/i18n/translations.ts`, `src/i18n/LanguageProvider.tsx`, `src/components/Header.tsx`, `src/screens/LandingScreen.tsx`  
**Checklist:**
- [ ] `Language` type updated to `'en' | 'id' | 'ja'`
- [ ] All keys translated in the `ja` object (copy `en` and translate)
- [ ] Language toggle button added in Header and LandingScreen nav
- [ ] Auto-detect logic updated (`navigator.language.startsWith('ja')`)
- [ ] `bun run build` passes

---

## Improve a lesson's difficulty curve

> "Lessons 3–5 in the Ocean world have a difficulty spike — players are suddenly expected to use variables with no introduction. Smooth the curve."

**Files to read first:** `src/data/lessons.ts` (ocean lessons), `.ai/specs/worlds.md`  
**Approach:** Read all ocean lessons in sequence. Identify where `variables` first appears in `availableCategories`. Adjust grid complexity, hint quality, and `starThresholds` for gradual introduction.
