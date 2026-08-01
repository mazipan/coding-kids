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
