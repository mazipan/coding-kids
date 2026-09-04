# CodeKids 🚀

A fun, free learning adventure for kids ages 5–14. Three parallel paths: visual block coding, brain-training puzzles, and digital citizenship. No downloads, no logins, no ads.

**Live:** [coding.mazipan.space](https://coding.mazipan.space) → https://coding-kids.netlify.app/ (_alternative_)

---

## Learning Paths

### 🧩 Block Coding
Write code with visual Blockly blocks. 7 main worlds + 7 bonus worlds teaching programming concepts.

| World | Ages | Concept | Lessons |
|-------|------|---------|---------|
| 🌴 Jungle Adventure | 5–7 | Sequences | 6 |
| 🚀 Space Station | 7–9 | Loops | 6 |
| 🔄 Loop Land | 8–10 | Loop Efficiency | 6 |
| 🌊 Ocean Deep | 9–11 | Variables | 5 |
| 💎 Crystal Caves | 10–12 | Conditions | 6 |
| 🤖 Robot Factory | 11–13 | Functions | 6 |
| ⏰ Time Portal | 12–14 | Arrays & Lists | 10 |

**Bonus worlds** (playable from the start, same as main worlds):

| World | Ages | Concept | Lessons |
|-------|------|---------|---------|
| 🦕 Jurassic Park | 10–14 | Real-World Pathfinding | 10 |
| 🚗 City Parking | 10–14 | Sorting & Routing | 10 |
| 📦 Space Sorting | 11–14 | Algorithms & Data | 10 |
| 🐛 Bug Lab | 11–14 | Debugging | 10 |
| 🎵 Code Orchestra | 8–12 | Loops & Functions | 10 |
| 🧭 Coordinate Cove | 10–13 | Coordinates & Position | 10 |
| 🌱 Eco City | 10–14 | Decomposition & Reuse | 10 |

### 🧠 Brain Training
Pattern recognition, logic puzzles, math, science, and reasoning challenges. No code editor required. All 15 worlds are unlocked from the start.

| World | Ages | Concept | Lessons |
|-------|------|---------|---------|
| 🔮 Pattern World | 5–8 | Pattern Recognition | 10 |
| 🧠 Logic Land | 7–10 | If/Then Thinking | 10 |
| ✨ Math Magic | 8–12 | Number Patterns | 10 |
| 🧩 Memory Maze | 6–10 | Sequence Memory | 10 |
| 🌿 Nature Quest | 8–11 | Science Thinking | 10 |
| ⚡ Number Ninja | 9–13 | Number Sequences | 10 |
| 🧩 Step by Step | 6–10 | Decomposition | 10 |
| 🔍 Think Alike | 7–11 | Abstraction | 10 |
| 🔢 Math Reasoning | 8–12 | Mathematical Reasoning | 10 |
| 🔬 Rule Finder | 8–12 | Inductive Reasoning | 10 |
| 🕵️ Logic Detective | 9–13 | Deductive Reasoning | 10 |
| 🗺️ Planning Peaks | 8–12 | Constraint Planning | 10 |
| 🎲 Chance Camp | 9–13 | Probability | 10 |
| 🧭 Spatial Studio | 7–11 | Spatial Reasoning | 10 |
| 💰 Money & Time | 6–13 | Everyday Numeracy | 20 |

### 🛡️ Digital Citizenship
Scenario puzzles that teach kids to be safe, private, and kind online. No code editor required. All 4 worlds are unlocked from the start.

| World | Ages | Concept | Lessons |
|-------|------|---------|---------|
| 🔑 Password Planet | 5–7 | Secrets & Strong Codes | 10 |
| 🏝️ Privacy Cove | 8–10 | What's Safe to Share | 10 |
| 💛 Kindness Kingdom | 8–10 | Being Kind Online | 10 |
| 🕵️ Scam Detectors | 11–14 | Spotting Scams & Phishing | 10 |

---

## Features

- **Three learning paths** — Block Coding, Brain Training, and Digital Citizenship, all accessible from the hub at `/app`
- **Shared XP & stars** — progress flows across all three paths; one store, one level system
- **7 block coding worlds** — Jungle → Space → Loop Land → Ocean → Crystal Caves → Robot Factory → Time Portal (+ 7 bonus worlds)
- **15 brain training worlds** — 140+ puzzles covering patterns, logic, math, memory, science, numbers, decomposition, abstraction, math reasoning, induction, deduction, constraint planning, probability, spatial reasoning, and everyday money & time skills
- **4 digital citizenship worlds** — 40 puzzles covering passwords, privacy, kindness, and spotting scams
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
│   ├── PuzzlePlayer.tsx        # Shared puzzle-type renderer used by both Brain Training and Digital Citizenship
│   ├── RewardModal.tsx         # Post-lesson modal: stars, XP, level-up banner
│   ├── StarRating.tsx          # 1–3 stars display
│   └── XPBar.tsx               # XP progress bar with optional level name (hideLabel prop)
├── data/
│   ├── lessons.ts              # block coding lessons across 14 worlds
│   ├── thinkingLessons/        # 150 tier-one brain training lessons, one file per world
│   ├── thinkingLessonsAdvanced/ # 150 tier-two brain training lessons, one file per world
│   ├── thinkingWorlds/         # 15 thinking worlds, one file per world
│   ├── safetyLessons/          # 40 digital citizenship lessons, one file per world
│   ├── safetyWorlds/           # 4 digital citizenship worlds, one file per world
│   ├── worlds/                 # 14 block coding worlds with themes, emoji, characters, one file per world
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
