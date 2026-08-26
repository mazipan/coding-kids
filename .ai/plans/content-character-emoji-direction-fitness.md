# Plan: Fix backwards-facing character emoji, swap a non-creature Ocean character

**Slug:** `content-character-emoji-direction-fitness`
**Date:** 2026-08-26
**Status:** in-review

---

## Request

> on coding blocks, we use emoji in the blocks, e.g we use 🐒, 🏎️
>
> the problem is sometimes the emoji have wrong direction. e.g 🏎️ go to the left, when most of time we
> start the steps from left, so the emoji ideally should have opposite flip direction.
>
> also some emoji maybe not good as moveable icon, like 🤿, why not use 🐠🐟🐡🏊, check the usage of the
> emoji. make sure it's not random choose but see the correctness and the fitness

---

## Decision

Audited every `character` emoji across all 14 block-coding worlds (`src/data/worlds.ts`) and how the
character is rendered (`src/components/GameGrid.tsx`). Of the 13 distinct character emoji, only **🏎️
(Loop Land / Dash)** and **⛵ (Coordinate Cove / Coral)** have an unambiguous, real inherent left/right
facing in standard emoji glyph designs (both face left by default across Twemoji/Apple/Noto — the same
convention that also applies to walking/running/swimming human pictographs). The other 11 (🐒🧝🤖🧑‍🚀🧑‍🔬👮🐛🧑‍🎤👷,
plus 🚀 which points vertically, not left/right) are front-facing or pose-neutral and have no correct or
incorrect horizontal orientation to fix.

The character never currently flips: `GameGrid.tsx` renders `world.character` in one fixed orientation
regardless of travel direction (a `FACING_ROTATE` rotation map exists in the file but is dead code — never
referenced). Since most lesson paths open moving rightward, a character whose glyph faces left by default
reads as "driving backwards." Fix: add an opt-in `facingDefault?: 'left'` field on `World`, and make
`GameGrid` track the character's last horizontal travel direction and mirror the emoji (CSS `scaleX(-1)`)
only when `facingDefault === 'left'` and it's currently moving right — so it faces the way it's travelling
without guessing at emoji that have no real facing to correct.

Separately: Ocean World's character is 🤿 (diving mask) — gear, not a creature or person, and the only
non-creature/inanimate "moveable character" in the whole roster (every other world's character is an
animal, robot, or person). It is being animated across the grid as if it were "Finn the Diver," but the
glyph shown is the mask, not Finn. Swap it for 🏊 (person swimming) — an actual moving human figure,
consistent with how every other world represents its character (a being, not an object), and still true to
the "diver exploring the ocean" story. 🏊 also has the same real left-facing default as 🏎️/⛵, so it is
covered by the same `facingDefault: 'left'` fix.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Rotate the character per direction (revive the dead `FACING_ROTATE` 90°/180° map) | Rotating a front-facing humanoid/animal/robot 90° for up/down movement renders it sideways (a face on its side) — broken for every character except a literal arrow. The user's complaint is specifically about left vs. right, not up/down, so mirroring on the horizontal axis is the correct and much safer scope. |
| Add `facingDefault` to all 13 characters | Would be guessing. Only 🏎️, ⛵, and the new 🏊 have a real, well-established inherent left/right facing in standard emoji design; the rest (monkey, elf, robot, astronaut, scientist, officer, bug, singer, worker) are drawn front-on with no wrong direction to correct. Flipping a symmetric front-facing glyph is a no-op at best and a distraction from the real fix. |
| Replace 🤿 with a sea creature (🐠/🐟/🐡) instead of 🏊 | Every other world's character is a being with a name and personality (Bingo the monkey, Bolt the robot, Zara the elf...), never an unrelated animal standing in for a named person. Ocean's character is explicitly "Finn the Diver" (`worlds.ts:74`) — a person. 🏊 (person swimming) keeps that story intact while fixing the "inanimate object" problem; a fish would replace one mismatch (gear ≠ creature) with another (fish ≠ person named Finn). |
| Leave 🚀 (Space/Astro) untouched | Confirmed as out of scope: the rocket's default glyph points straight up, not left or right, so it has no horizontal-facing bug to fix — the "wrong direction" complaint doesn't apply to it. |

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
| INV-G1 bounded grid | no | purely visual — no change to movement/collision logic |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | new optional `World.facingDefault` field; `tsc -b` must stay clean |
| INV-C2 no hardcoded strings | no | no user-visible text added — `facingDefault` is data, not copy |
| INV-C3 build passes | yes | `bun run build` must pass before commit |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | add `facingDefault?: 'left'` to the `World` interface |
| `src/data/worlds.ts` | edit | add `facingDefault: 'left'` to `loops` and `cove`; change `ocean.character` from `'🤿'` to `'🏊'` and add `facingDefault: 'left'` |
| `src/components/GameGrid.tsx` | edit | remove dead `FACING_ROTATE`; track last horizontal move direction; mirror the character span via `scaleX(-1)` when `world.facingDefault === 'left'` and travelling right |
| `.ai/specs/worlds.md` | edit | document the new `facingDefault` field next to the existing `character` field description |
| `.ai/decisions/log.md` | edit | new entry recording this decision |

---

## Spec changes

### `.ai/specs/worlds.md`

In the block coding worlds section, after the line describing world fields (`Source: src/data/worlds.ts`
— `WORLDS` array...), add:

```
`character` fields may also set `facingDefault: 'left'` when the emoji's standard glyph design has a real
inherent left/right facing (a vehicle, boat, or human pictograph drawn facing one way) — GameGrid mirrors
the character horizontally so it visually faces the direction it's currently travelling. Omit the field for
any character that is drawn front-on or pose-neutral (people, animals in a standing/sitting pose, robots) —
flipping those has no correctness benefit and the field should not be added "just in case." Currently set
on `loops` (🏎️), `cove` (⛵), and `ocean` (🏊).
```

---

## Implementation steps

1. In `src/types/index.ts`, add `facingDefault?: 'left'` to the `World` interface, directly after the
   `character: string` field.
2. In `src/data/worlds.ts`:
   - `loops` world (id `'loops'`): add `facingDefault: 'left',` after the `character: '🏎️',` line.
   - `cove` world (id `'cove'`): add `facingDefault: 'left',` after the `character: '⛵',` line.
   - `ocean` world (id `'ocean'`): change `character: '🤿',` to `character: '🏊',` and add
     `facingDefault: 'left',` on the next line. Leave `characterName: 'Finn'` and the tagline untouched.
3. In `src/components/GameGrid.tsx`:
   - Import `useEffect`, `useRef`, `useState` from `'react'`.
   - Delete the unused `FACING_ROTATE` constant (lines 13–18) — it was never referenced.
   - Add a `facingRight` boolean state (default `true`) plus refs tracking the previous `charPos` column
     and the previous `status`.
   - In a single `useEffect` keyed on `[charPos, status]`: if `status` just became `'running'` (i.e. it
     wasn't `'running'` on the previous render — this fires exactly when a run restarts, since
     `LessonScreen` resets `charPos` to `lesson.startPos` in the same state update that sets
     `status: 'running'`), set `facingRight` to `true`. Otherwise, if the column increased since the last
     render set `facingRight` to `true`; if it decreased, set it to `false`. Update both refs at the end of
     the effect. (Merging both checks into one effect — rather than two separate effects on different
     dependencies — avoids a same-commit ordering bug where a stale column comparison could overwrite the
     run-restart reset.)
   - Compute `const mirrored = world.facingDefault === 'left' && facingRight`.
   - On the inner character `motion.span` (the one currently animating only the idle bounce, around line
     212), add `scaleX: mirrored ? -1 : 1` to its `animate` prop alongside the existing idle `y` bounce —
     Framer Motion composes transform properties automatically, so this does not conflict with the outer
     `motion.div`'s position/scale animation.
4. Update `.ai/specs/worlds.md` with the spec change drafted above.
5. Add the decision log entry drafted for `.ai/decisions/log.md`.
6. Run `bunx biome ci`, `bun run type-check`, and `bun run build` — all three must pass before committing.

---

## Rollback

Revert the commit. No localStorage schema or migration is involved — `facingDefault` is static world data,
not persisted player state, so reverting has zero effect on existing saves.

---

## Review notes

_Filled in by reviewer-code during plan review stage._

Plan reviewed inline (no scope creep, invariants correctly scoped to INV-C1/INV-C3 only, alternatives are
substantive, rollback is trivial and correctly notes no migration is needed). Approved without changes.

---

## Implementation notes

Implemented exactly as planned, no deviations. One addition beyond the plan's transition wording: the
`scaleX`/`y` animate values on the character `motion.span` needed separate per-property `transition`
entries (`y` keeps the original 2s infinite idle-bounce easing; `scaleX` uses a snappy 0.2s ease-out) —
without that split, Framer Motion would have applied the 2s infinite-repeat easing to the mirror flip too,
making the character slowly wobble through the flip instead of snapping to face the new direction.

`node_modules` was not yet installed in this session; ran `bun install` before the verification commands.
`bunx biome ci`, `bun run type-check`, `bun run build`, and `bun test` (171 pass / 0 fail) all pass clean.

**reviewer-kid pass (post-push):** verdict Fun, with two real issues, both fixed here:
1. The run-start reset unconditionally forced `facingRight` to `true`, so a run whose first real
   move is left showed a one-frame snap-to-right-facing immediately followed by a flip back to
   left — a visible stray twitch. Fixed: a fresh run now only rebases `prevColRef` to the new
   start column without touching `facingRight`; the character keeps its last known facing until a
   real column move determines the new one, so there's no more forced snap.
2. Two Ocean lesson `mascotMessage` strings (`src/data/lessons.ts`, lessons `ocean-2` and
   `ocean-4`) hardcoded the old 🤿 emoji inline in the speech-bubble text, which then sat next to
   the new 🏊 avatar in the same Mascot component. Swapped both inline 🤿 → 🏊 (EN and ID) so the
   character reads consistently everywhere it appears. Left the "Finn the Diver" / "Finn si
   Penyelam" tagline text as-is — a narrative label, not a visual clash, and rewriting it would
   touch `worlds.ts` and `translations.ts` copy for no concrete bug.

Re-ran all four verification commands after these fixes — still 171/171 tests pass, build clean.
