# CodeKids 🚀

A fun, free learning adventure for kids ages 5–14. Two parallel paths: visual block coding and brain-training puzzles. No downloads, no logins, no ads.

**Live:** [coding.mazipan.space](https://coding.mazipan.space) → https://coding-kids.netlify.app/ (_alternative_)

---

## Learning Paths

### 🧩 Block Coding
Write code with visual Blockly blocks. 6 themed worlds teaching programming concepts.

| World | Ages | Concept | Lessons |
|-------|------|---------|---------|
| 🌿 Jungle Adventure | 5–7 | Sequences | 6 |
| 🚀 Space Station | 7–9 | Loops | 6 |
| 🌊 Ocean Deep | 9–10 | Variables | 5 |
| 💎 Crystal Caves | 10–11 | Conditions | 5 |
| 🤖 Robot Factory | 11–13 | Functions | 5 |
| ⏰ Time Portal | 12–14 | Arrays & Lists | 4 |

### 🧠 Brain Training
Pattern recognition, logic puzzles, and math challenges. No code editor required.

| World | Ages | Puzzle type | Lessons |
|-------|------|-------------|---------|
| 🔮 Pattern World | 5–8 | Pattern completion | 10 |
| 🧠 Logic Land | 7–10 | If-then choices | 10 |
| ✨ Math Magic | 8–12 | Number puzzles | 10 |

---

## Features

- **Two learning paths** — Block Coding and Brain Training, both accessible from the hub at `/app`
- **Shared XP & stars** — progress flows across both paths; one store, one level system
- **6 block coding worlds** — Jungle → Space → Ocean → Crystal Caves → Robot Factory → Time Portal
- **3 brain training worlds** — 30 puzzles with progressively harder difficulty
- **XP & leveling** — 15 levels from Code Cub to Master Coder
- **Stars per lesson** — 1–3 stars based on code efficiency (blocks) or attempts (thinking)
- **Next-world navigation** — each world links directly to the next at the bottom of its lesson list
- **Bilingual** — English and Indonesian, auto-detects browser locale
- **Mobile-friendly** — works on phone, tablet, and desktop
- **100% static** — no backend, no server, no login, no data collected

## Routes

| URL | Screen |
|-----|--------|
| `/` | Landing page |
| `/app` | Path selector (hub) |
| `/app/blocks` | Block coding world map |
| `/app/blocks/world/:worldId` | Block coding lesson list |
| `/app/blocks/world/:worldId/:lessonNumber` | Lesson (Blockly + game grid) |
| `/app/thinking` | Brain training world map |
| `/app/thinking/world/:worldId` | Brain training lesson list |
| `/app/thinking/world/:worldId/:lessonNumber` | Thinking puzzle screen |
| `/*` | Redirect to `/` |

## Tech Stack

- **React 19** + TypeScript + Vite 8
- **Blockly v13** — visual block programming
- **Framer Motion** — animations
- **Tailwind CSS v4** — styling
- **React Router v7** — routing
- **React Aria Components** — accessible modals (RewardModal)
- **lucide-react** — icons throughout the app
- **Web Audio API** — synthesized sound effects (no library)
- **localStorage** — all progress stored client-side

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:5173](http://localhost:5173) — landing page at `/`, game hub at `/app`.

```bash
bun run build  # must pass before committing (tsc + vite)
```

## Project Structure

```
src/
├── blockly/
│   ├── customBlocks.ts      # move_right/left/up/down, collect_item blocks + JS generators
│   └── toolboxes.ts         # buildToolbox(categories[]) → Blockly toolbox JSON
├── components/
│   ├── BlocklyWalkthrough.tsx  # First-time tour overlay for each world
│   ├── BlocklyWorkspace.tsx    # forwardRef — exposes resize() via useImperativeHandle
│   ├── Confetti.tsx            # Canvas-based confetti (120 particles, no library)
│   ├── GameGrid.tsx            # Absolute-positioned cells, Framer Motion character
│   ├── Header.tsx              # Sticky nav: logo/back (path-aware), XP bar, stars, EN/ID toggle
│   ├── Mascot.tsx              # Character + speech bubble
│   ├── RewardModal.tsx         # Post-lesson modal: stars, XP, level-up banner
│   ├── StarRating.tsx          # 1–3 stars display
│   └── XPBar.tsx               # XP progress bar with optional level name (hideLabel prop)
├── data/
│   ├── lessons.ts              # 31 block coding lessons across 6 worlds
│   ├── thinkingLessons.ts      # 30 brain training lessons across 3 worlds
│   ├── thinkingWorlds.ts       # 3 thinking worlds: patterns, logic, counting
│   ├── worlds.ts               # 6 block coding worlds with themes, emoji, characters
│   └── xpSystem.ts             # 15 XP levels, calculateStars(), getLevelInfo()
├── engine/
│   └── gameEngine.ts           # parseCodeToActions(), applyAction(), checkWin()
├── i18n/
│   ├── LanguageProvider.tsx    # React context: useLanguage() → { t, language, setLanguage }
│   ├── localize.ts             # localize(LocalizedString, language) helper
│   └── translations.ts         # Flat-key EN + ID strings
├── screens/
│   ├── HomeScreen.tsx          # Block coding: world map + lesson list
│   ├── LandingScreen.tsx       # Marketing landing page
│   ├── LessonScreen.tsx        # Blockly editor + game grid + controls
│   ├── PathSelector.tsx        # Hub at /app — choose blocks or brain training
│   ├── ThinkingHome.tsx        # Brain training: world map + lesson list
│   └── ThinkingLesson.tsx      # Brain training puzzle screen (pattern/logic/math)
├── store/
│   └── useProgress.ts          # localStorage — XP, stars, lesson completion
├── types/
│   └── index.ts                # All shared TypeScript types
└── utils/
    └── sounds.ts               # Web Audio API synth sounds (no library)
```

## License

MIT

---

By [Irfan Maulana](https://mazipan.space)
