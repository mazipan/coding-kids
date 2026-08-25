# Plan: Path-scoped header stars + achievement summary popup

**Slug:** `fix-header-stars-per-path`  
**Date:** 2026-08-25  
**Status:** done

---

## Request

> We have a stars icon stats in the header, but seems wrong.
> each path (coding block, brain training) have different way to sum the star, and should not be counted all together.
> when we on the coding block path, we should only show the star for the coding block, same in the brain training.
> maybe you can show the overall summary when click it, but the initial show should be correct.
> consider to add more detailed information popup when click it.
> such an achievement summary, like the current level name (code journey, etc), how world they are already passed, each world how much star they are collecting, and the maximum star they should be able to collect, how percentage they are collected compared to the maximum, etc.

---

## Decision

The header star pill currently prints `progress.totalStars`, a single running counter that mixes both paths and also counts tutorial lessons (which always award exactly 1 star and are hidden from every world card). Replace the printed value with a number derived from the lesson data of the path the player is currently in: blocks stars under `/app/blocks`, thinking stars under `/app/thinking`, and the combined total on the `/app` hub. Make the pill a button that opens a new `StatsModal` — an achievement summary showing level badge/name/XP, the combined star total, a per-path summary (stars, max stars, percent, worlds finished, lessons done) and a per-world star breakdown for the selected path.

`progress.totalStars` stays in the store untouched (INV-PR1/INV-C4 — no schema change, no migration); it is simply no longer what the header renders. All new numbers are derived on the fly from `progress.lessons` plus the lesson tables, which is the same source `BlocksHome`/`ThinkingHome` world cards already use — so the header and the world cards finally agree.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Store `blocksStars` / `thinkingStars` in localStorage | A schema change and a migration for a number that is cheap to derive, and it would drift from the lesson tables exactly the way `totalStars` already has. |
| Keep the pill showing the combined total and only fix the popup | The request is explicit that the initial (collapsed) value must be the current path's. |
| Show `stars / maxStars` in the pill | The blocks maximum is 559 across every world; a 3-digit denominator does not fit the mobile header and means nothing without the breakdown. The modal carries it instead. |
| Count tutorial lessons in the totals | Tutorials always award 1 star out of a possible 3 and are excluded from every world card, so including them would show a header number no screen can explain and drag the percentage down for something that cannot be improved. |
| Per-world accent colours in the modal | The thinking colour map is already duplicated across two screens; a third copy in the stats module would be a maintenance trap. One accent per path plus the world emoji reads just as clearly. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | Pure derivation from in-memory data. |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | Read-only change; no writer touched. |
| INV-PR2 stars are best-of | no | Reads `lessons[id].stars`, which is already the best-of value. |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | yes | Stats reuse the same rule (`xp >= unlockAtXP`, bonus gate on `portal-4`) to mark a world locked; `areBonusWorldsUnlocked` is extracted from `useProgress` so there is one definition, not two. |
| INV-L3 thinking worlds always unlocked | yes | Thinking worlds are all `unlockAtXP: 0`, so every thinking world shows as unlocked. No gate added. |
| INV-G1..G4 game engine | no | Blocks path engine untouched. |
| INV-C1 TypeScript strict | yes | New module + component must type-check. |
| INV-C2 no hardcoded strings | yes | All new copy goes through `t()`; world names through `localize()`. |
| INV-C3 build passes | yes | Verified before commit. |
| INV-C4 localStorage only | no | No new persistence, no key change. |
| INV-C5 lucide-react only icons | yes | `Star`, `Lock`, `X`, `Trophy` from lucide-react; no symbols inside translation strings. |
| INV-I1 all keys have EN value | yes | Every new key added to both `en` and `id`. |
| INV-I2 no layout assumptions | yes | Modal uses wrapping/truncating flex rows, no fixed-width text containers. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/utils/progressStats.ts` | add | Pure derivation: `getPathStats`, `getAllStats`, types. |
| `src/store/useProgress.ts` | edit | Export `areBonusWorldsUnlocked(progress)`; hook reuses it. |
| `src/components/StatsModal.tsx` | add | Achievement summary dialog. |
| `src/components/Header.tsx` | edit | Path-scoped star count; pill becomes the modal trigger. |
| `src/i18n/translations.ts` | edit | New `stats.*` keys in `en` + `id`. |
| `tests/progressStats.test.ts` | add | Star/max/percent/unlock derivation. |
| `.ai/specs/store.md` | edit | Document that header stars are derived, not `totalStars`. |
| `.ai/agents/context.md` | edit | New files in the structure map + gotcha. |
| `.ai/decisions/log.md` | edit | Decision record. |

---

## Spec changes

### `.ai/specs/store.md`

Add a "Derived stats" section: `totalStars` remains the append-only counter written by `completeLesson`, but every star figure shown to the player (header pill, world cards, stats modal) is derived from `progress.lessons` via `src/utils/progressStats.ts`, which excludes tutorial lessons and is scoped per path.

---

## Implementation steps

1. Export `areBonusWorldsUnlocked(progress)` from `src/store/useProgress.ts` and make the hook's `isBonusWorldUnlocked` call it.
2. Add `src/utils/progressStats.ts` with `WorldStats` / `PathStats` / `AllStats` types and `getPathStats(progress, path)` + `getAllStats(progress)`. Blocks max stars per lesson comes from `maxStarsForThresholds`; thinking is a flat 3.
3. Add `stats.*` translation keys to `en` and `id`.
4. Add `src/components/StatsModal.tsx` — level card, combined total, per-path summary cards, path tabs, per-world rows.
5. Rewrite the header star pill as a button whose value is path-scoped, opening the modal.
6. Add `tests/progressStats.test.ts`.
7. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` — all must pass.

---

## Rollback

Revert the commit. No localStorage migration needed — nothing was written or renamed.

---

## Review notes

Plan reviewed against `.ai/specs/invariants.md`: scope is bounded to read-only derivation plus one new dialog; no store writer, engine, or lesson data is touched. Approved.

---

## Implementation notes

Built as planned. Deviations and details:

- The stats modal's per-path card leads with the **percentage**, not a second copy of the star count — the
  path tabs directly above it already show `stars / maxStars` for both paths, and repeating it read as
  noise in the first playtest render.
- On the `/app` hub, where neither path is "current", the modal opens on whichever path has more stars
  (blocks on a tie) rather than always on blocks.
- World rows render the maximum as `/ 50` rather than a bare `50`; as a bare number under the earned count
  it read as a second star total.
- Verified in a real browser at 1280×900 and 390×844, in both languages, with a seeded save
  (jungle finished, part of space, patterns finished, part of logic/counting):
  blocks pill 23, thinking pill 41, hub pill 64 — the old header showed 66 for the same save, the
  two extra being the `jungle-0` and `space-0` tutorial stars. Escape and the backdrop both close the
  dialog; locked and bonus worlds render dimmed with a lock.

Verification: `bunx biome ci`, `bun run type-check`, `bun run build`, `bun test` (171 pass / 0 fail).
