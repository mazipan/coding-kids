# Plan: Complete i18n + Brand Redesign

**Slug:** `feat-branding-and-i18n-complete`  
**Date:** 2026-08-01  
**Status:** in-review

---

## Request

> replace all hardcoded words to fully support switching language  
> make the landing page looks like more professional companies, not a newbie vibe coder, watch closely the spacing, check mobile as well, be creative, clean, but still fun to read, feel free to pick different fonts as well  
> prepare the branding, the icon, the illustrations if needed, the colors, etc

---

## Decision

Two parallel workstreams: (1) Audit every `.tsx` file for user-visible strings that bypass `t()` and add the missing keys to both EN and ID translations. (2) Redesign the landing page with a proper brand system — SVG `</>` logo, Plus Jakarta Sans headings, generous whitespace, professional section layouts — while keeping the playful colour energy that fits a kids product.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Use a paid icon library (Heroicons, Lucide) | New npm dependency; the `</>` SVG can be hand-crafted in 10 lines |
| Full i18next integration | Overkill for a two-language app; the flat-key system is already established (see ADR in decisions/log.md) |
| Change world.name / world.tagline to go through t() everywhere | Wider blast radius than this PR warrants; scoped to LandingScreen only where we're already rewriting the file |

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
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | yes | All new components must type-check |
| INV-C2 no hardcoded strings | yes | This PR is the fix for the violations |
| INV-C3 build passes | yes | Must verify after all changes |
| INV-C4 localStorage only | no | |
| INV-I1 all keys have EN value | yes | Every new key gets an EN value first |
| INV-I2 no layout assumptions | yes | Plus Jakarta Sans tested at both EN and ID text lengths |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/i18n/translations.ts` | edit | Add ~45 new keys (blockly, mascot, home, reward) |
| `src/components/BlocklyWorkspace.tsx` | edit | Import useLanguage, replace 5 hardcoded strings |
| `src/screens/LessonScreen.tsx` | edit | Replace 5 hardcoded mascot messages + hint prefix |
| `src/screens/HomeScreen.tsx` | edit | Replace hardcoded welcome title + subtitle |
| `src/components/RewardModal.tsx` | edit | Replace MESSAGES array with t() calls |
| `src/components/Logo.tsx` | add | SVG </> logo component, used in landing nav + footer |
| `package.json` | edit | Add `lucide-react` for SVG icons on landing page (feature cards, steps) |
| `src/screens/LandingScreen.tsx` | edit | Full redesign: typography, layout, brand identity |
| `index.html` | edit | Add Plus Jakarta Sans, update favicon to SVG |
| `tailwind.config.js` | edit | Register font-jakarta utility |
| `src/index.css` | edit | No body-level change; Blockly label override updated |
| `.ai/decisions/log.md` | edit | Record font + brand decisions |

---

## Implementation steps

1. Add all missing keys to `translations.ts` (EN + ID)
2. Fix `BlocklyWorkspace.tsx` — import `useLanguage`, replace toolbar strings
3. Fix `LessonScreen.tsx` — replace mascot messages and hint prefix
4. Fix `HomeScreen.tsx` — replace welcome text and subtitle
5. Fix `RewardModal.tsx` — replace MESSAGES array with `t()` calls
6. Create `src/components/Logo.tsx` — SVG `</>` in gradient rounded square
7. Rewrite `LandingScreen.tsx` — Plus Jakarta Sans, professional layout, Logo in nav
8. Update `index.html` — load Plus Jakarta Sans from Google Fonts, SVG favicon
9. Update `tailwind.config.js` — add `font-jakarta`
10. Run `npm run build` — must pass with zero TS errors
11. Record decisions in `.ai/decisions/log.md`

---

## Spec changes

None — this change does not alter any existing spec. The i18n spec already requires all strings through `t()`.

---

## Rollback

Revert the commit. No localStorage migration needed (no schema changes).

---

## Implementation notes

- Added 45 new translation keys (EN + ID): blockly toolbar, mascot messages, home welcome, reward messages (9 variants across 3 star levels × 3 random), trust strip, landing section labels.
- `BlocklyWorkspace.tsx`: imported `useLanguage`; replaced 5 hardcoded toolbar strings. Singular/plural block count handled via `t(blockCount === 1 ? 'blockly.block' : 'blockly.blocks')`.
- `LessonScreen.tsx`: replaced 5 mascot messages and hint prefix. Star-based success message now uses `t('mascot.success.{stars}')`.
- `HomeScreen.tsx`: welcome title splits on "CodeKids" to preserve gradient styling without hardcoding the brand name outside of a key.
- `RewardModal.tsx`: removed MESSAGES array; uses `t('reward.msg.{stars}.{variant}')` with `Math.floor(Math.random()*3)` variant selection — same behaviour, now bilingual.
- `Logo.tsx`: new SVG `</>` component with purple-to-pink gradient rounded square. Used in landing nav and footer.
- `LandingScreen.tsx`: full redesign. Plus Jakarta Sans via inline `fontFamily` style on root div (game pages keep Nunito). `lucide-react` icons in feature cards (MousePointerClick, Trophy, Globe, Smartphone) and steps (Map, Grip, Zap). Trust bar uses dedicated `trust.*` keys so the badge text is cleanly composed without emoji stripping.
- `index.html`: SVG favicon via data URI (the `</>` logo), Plus Jakarta Sans loaded from Google Fonts alongside Nunito.
- `tailwind.config.js`: added `font-jakarta` utility.
- `npm run build` passes with zero TypeScript errors; all chunks within expected sizes.
