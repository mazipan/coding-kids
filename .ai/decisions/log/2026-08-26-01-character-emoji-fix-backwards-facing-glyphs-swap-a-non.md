# 2026-08-26 — Character emoji: fix backwards-facing glyphs, swap a non-creature Ocean character

**Context:** User flagged that 🏎️ (Loop Land's character, Dash) visually drives backwards, since its
standard emoji glyph faces left by default while most lesson paths move the character rightward. They also
flagged 🤿 (Ocean's character, "Finn the Diver") as a poor fit — a diving mask is gear, not a creature or
person, unlike every other world's character.

**Decision:** Audited all 13 distinct character emoji across `src/data/worlds.ts`. Only 🏎️ (loops) and ⛵
(cove) have a real, standard-design inherent left/right facing (both face left by default across
Twemoji/Apple/Noto); the other 10 non-vehicle characters are drawn front-on or pose-neutral and have no
wrong direction to correct. 🚀 (space) points vertically, not left/right, so it's unaffected. Added an
opt-in `World.facingDefault?: 'left'` field and made `GameGrid` track the character's last horizontal
travel direction, mirroring the emoji via `scaleX(-1)` (Framer Motion, 0.2s) only when
`facingDefault === 'left'` and it's currently moving right. Set the field on `loops` and `cove`.

Separately, swapped Ocean's character from 🤿 to 🏊 (person swimming) — an actual moving human figure,
matching how every other world represents its character (a named being, not an object) while staying true
to "Finn the Diver." 🏊 shares the same real left-facing default as 🏎️/⛵, so it also gets
`facingDefault: 'left'`.

**Alternatives rejected:**
- Reviving the pre-existing (but dead/unreferenced) `FACING_ROTATE` 90°/180° rotation map to handle all
  four directions — rotating a front-facing character 90° for up/down movement renders it sideways, broken
  for every non-arrow glyph. The actual complaint was left/right only, so a horizontal mirror is the
  correct, much narrower fix.
- Adding `facingDefault` to all 13 characters "to be safe" — would be guessing; only 3 have a real inherent
  facing in standard emoji design, and flipping a symmetric front-facing glyph is a no-op that adds
  unjustified state.
- Replacing 🤿 with a sea creature (🐠/🐟/🐡) instead of 🏊 — every other world's character is a named
  being (Bingo the monkey, Bolt the robot...), never an animal standing in for a named person; 🏊 keeps
  Finn as a person while fixing the "inanimate object" mismatch.

**Consequences:** `World.facingDefault` is new, optional, static data — no localStorage schema or
migration impact. `GameGrid.tsx` lost its unused `FACING_ROTATE` constant. No behavior change for the 11
worlds without `facingDefault` set. Plan: `.ai/plans/2026-08-26-content-character-emoji-direction-fitness.md`.
