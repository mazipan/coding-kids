# Store spec

All persistence lives in `window.localStorage`. See `.ai/decisions/storage.md` for why.

---

## `codekids_progress_v1`

JSON-serialised `PlayerProgress`. Written by `src/store/useProgress.ts` — `completeLesson()` is the only writer.

### Shape

```ts
interface PlayerProgress {
  xp: number           // total XP earned; never decrements
  level: number        // 1–15; derived from xp but stored for quick reads
  totalStars: number   // sum of best stars across all completed lessons
  badges: string[]     // badge IDs earned (see table below)
  lastPlayed: string   // ISO-8601 date string; updated on every completeLesson()
  lessons: Record<string, LessonProgress>  // keyed by lesson.id
}

interface LessonProgress {
  completed: boolean
  stars: number    // best stars achieved (1–3); only updates if new attempt is better
  xpEarned: number // XP from best attempt
  attempts: number // total attempts; always increments
}
```

### Default value (new user / missing key)

```json
{ "xp": 0, "level": 1, "totalStars": 0, "badges": [], "lastPlayed": "", "lessons": {} }
```

### Write rules

1. `attempts` always increments
2. `stars` and `xpEarned` only update if the new attempt beats the stored best
3. Global `xp` adds only the delta (`newStarXP - oldBestXP`), not the full reward — prevents farming
4. `level` and `totalStars` are recomputed from scratch on every write
5. Badges are awarded once and never removed

### Derived stats — what the player actually sees

`totalStars` stays the append-only counter `completeLesson` writes, but nothing in the UI reads it as a
star display any more. Every star figure shown to a player — the header pill, the world cards, the stats
modal — is derived on the fly from `progress.lessons` by `src/utils/progressStats.ts`:

- **Per path.** Blocks and thinking score differently (a blocks lesson is worth 3 or 5 stars depending on
  its `starThresholds`, a thinking lesson always 3), so the two are summed separately and only added
  together for the "both paths" total. The header pill shows the path the player is currently in.
- **Tutorials excluded.** Tutorial lessons award a flat 1 star, are hidden from every world card, and can
  never be improved. `getLessonsByWorld` already drops them, and the stats module inherits that.
- **Unlock state reuses the store.** Blocks worlds (main and bonus alike) are always
  unlocked (INV-L2) — `unlocked` is hardcoded `true`, not derived from any check. Thinking and
  safety worlds still check `progress.xp >= world.unlockAtXP` via `isWorldUnlocked` (exported from
  `useProgress.ts`), which is always true today since every thinking and safety world declares
  `unlockAtXP: 0` (INV-L3).

A third path, `safety` (Digital Citizenship), is scored identically to `thinking` — every safety
lesson is worth up to 3 stars, scored by attempt count, and safety worlds are never XP-gated
(INV-L3). `AllStats` carries `blocks`, `thinking`, and `safety` as separate `PathStats`, summed
for the combined total.

Because everything is derived, a save written by an older build needs no migration — the numbers simply
recompute from `lessons`.

### Badge IDs

| ID | Awarded when |
|----|-------------|
| `first_lesson` | First lesson ever completed |
| `star_collector` | Any lesson completed with 3 stars |
| `level_5` | Reached level 5 |
| `level_10` | Reached level 10 |

---

## `codekids_language`

Plain string — `'en'` or `'id'`. No version suffix (string value, no schema to break).

Written by `setLanguage()` in `src/i18n/LanguageProvider.tsx`. Read on app init; falls back to `navigator.language` detection (`startsWith('id')` → Indonesian) if the key is absent.
