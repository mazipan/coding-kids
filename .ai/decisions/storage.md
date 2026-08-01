# Storage decisions

## Why localStorage

**Decision:** All user progress is stored in `window.localStorage`. No IndexedDB, no cookies, no remote store.

**Rationale:**

| Option | Why not |
|--------|---------|
| Remote DB | Requires a backend — ruled out by static-only constraint |
| IndexedDB | Async API adds complexity; data is < 5 KB even with all 31 lessons completed — synchronous localStorage is fine at this scale |
| Cookies | Require a server round-trip or CORS config — incompatible with pure static hosting; also size-limited |
| sessionStorage | Lost on tab close — progress must survive sessions |

**Accepted tradeoffs:**
- Progress is lost if the user clears browser storage or switches device/browser
- No cross-device sync
- No teacher/parent visibility into progress

---

## Key versioning

**Decision:** All localStorage keys carry a `_v1` suffix.

**Rationale:** If the stored schema needs a breaking change in a future version, a `_v2` key can be introduced alongside a one-time migration on app init (read `_v1`, transform, write `_v2`, delete `_v1`). Without versioning, a schema change silently corrupts existing data.

**Current keys:**
- `codekids_progress_v1` — player progress (XP, stars, badges, lesson records)
- `codekids_language` — language preference (`'en'` | `'id'`); no version suffix because the value is a simple string with no schema

---

## XP and stars are append-only / best-of

**Decision:** `completeLesson` only updates `stars` if the new attempt beats the stored best. XP only adds the delta between old best and new best (not the full `xpReward` every time).

**Rationale:** Prevents XP farming by replaying the same easy lesson. A player who already earned 3 stars and 30 XP on a lesson gets 0 additional XP for replaying it, but still gets to play. If they previously earned 1 star (10 XP) and now earn 3 stars (30 XP), they get the 20 XP delta.
