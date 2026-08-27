# 2026-08-07 — Framer Motion animations added to block coding path

**Context:** The thinking path's animated star reveal drew attention to the relative stillness of the block coding path. User requested animations to make blocks feel as engaging as brain training.

**Decision:** Added four targeted animations: (1) collectible items bob continuously with staggered delays; (2) character gently bounces when the game is idle; (3) block count badge pops with a spring on every change; (4) Run button glow cycles between purple and pink when blocks are ready. Also fixed a pre-existing INV-C2 violation: the success banner in GameGrid had a hardcoded English string (`"Amazing! You did it!"`) that now uses `t('game.success')`.

**Alternatives rejected:**
- Animating HomeScreen world/lesson cards — already well-animated (entrance stagger, emoji wiggle, hover lift, progress bar).
- Animating the star row in the LessonScreen header — those are prior best stars that shouldn't flash on every visit; RewardModal already animates newly-earned stars.
- Lottie files — would introduce an external asset dependency and download cost.

**Consequences:** block coding path now matches the energy level of the thinking path. No new dependencies — framer-motion was already installed.
