# Plan: Framer Motion animations for the block coding path

**Slug:** `feat-coding-path-animations`  
**Date:** 2026-08-07  
**Status:** done

---

## Request

> Since the thinking path was added, we now have Framer Motion — like the stars in the thinking world are animated. Can we adopt some animations in the coding-blocks path too? To make it more engaging for kids.

---

## Decision

Add targeted Framer Motion animations to four touch points in the block coding path that are most visible to kids during active play. The thinking path's star reveal (`scale: 0 → 1`, staggered) was the reference for tone. framer-motion is already installed and used in `HomeScreen`, `LessonScreen`, `RewardModal`, `GameGrid`, and `Mascot` — no new dependency needed.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Animate world/lesson cards on HomeScreen | HomeScreen already has entrance stagger, emoji wiggle, hover lift, and animated progress bars — it was already well-animated. |
| Animate the star reveal in LessonScreen header | The header shows *prior* best stars on mount; they shouldn't animate on every page visit. The RewardModal already animates the newly-earned stars. |
| CSS keyframe animations instead of Framer Motion | Framer Motion is already imported; CSS animations would add a second animation system. |
| Lottie files for item sparkles | Out of scope — external asset dependency, download cost. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | All animation data is local |
| INV-C1 TypeScript strict | yes | Verified build passes |
| INV-C2 no hardcoded strings | yes | Fixed hardcoded "Amazing! You did it!" in GameGrid to use `t('game.success')` |
| INV-C3 build passes | yes | Verified |
| INV-C5 lucide-react only icon library | no | No new icon library introduced |
| All others | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/components/GameGrid.tsx` | edit | Item bob, character idle bounce, i18n fix |
| `src/components/BlocklyWorkspace.tsx` | edit | Block count badge pop animation |
| `src/screens/LessonScreen.tsx` | edit | Run button glow pulse |

---

## Animation details

### GameGrid — item float
Items (bananas, gems, stars etc.) continuously bob up and down (`y: [0, -6, 0]`, 1.6s loop, ease in-out). Items are staggered by `(index % 4) * 0.4s` delay so they don't all move in sync. This runs on the inner `motion.span` inside the existing `AnimatePresence` wrapper; the outer `motion.div` retains its scale pop-in and exit burst.

### GameGrid — character idle bounce
When `status === 'idle'`, the character emoji gently bobs (`y: [0, -4, 0]`, 2s loop). This runs on a `motion.span` wrapping the character inside the character's position-controlling `motion.div`. The outer div's `x`/`y` animate the grid position via spring; the inner span's `y` adds a cosmetic bounce on top. They don't interfere.

### GameGrid — i18n fix (INV-C2)
Added `useLanguage` to `GameGrid` and replaced the hardcoded success banner `"🎉 Amazing! You did it!"` with `t('game.success')`. This was a pre-existing INV-C2 violation caught during this audit.

### BlocklyWorkspace — block count badge pop
Changed the block count `<span>` to `<motion.span key={blockCount}>`. Every time `blockCount` changes, React unmounts/remounts the element, and Framer Motion plays the spring pop-in (`scale: 0.7 → 1`). Added `import { motion } from 'framer-motion'`.

### LessonScreen — Run button glow pulse
Moved `boxShadow` out of the `style` prop and into Framer Motion's `animate`. When `currentBlockCount > 0` and not running, the shadow cycles between purple and pink (`rgba(124,58,237,0.5)` → `rgba(236,72,153,0.8)`) over 2 seconds. When running or no blocks, shadow is flat. The `whileHover` and `whileTap` variants include their own `transition` so the spring snap isn't slowed by the box-shadow animation timing.

---

## Rollback

Revert the three changed files. No data or localStorage changes — purely presentational.

---

## Implementation notes

No deviations from plan. TypeScript strict mode accepted all changes without errors. Build passed in 1.24s.
