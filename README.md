# CodeKids 🚀

A fun, free coding adventure for kids ages 5–14. Learn programming with colorful visual blocks, earn XP, and explore 6 epic worlds — no downloads, no logins, no ads.

**Live:** [coding.mazipan.space](https://coding.mazipan.space)

---

## Features

- **Visual block coding** — Blockly drag-and-drop, no typing required
- **6 themed worlds** — Jungle → Space → Ocean → Crystal Caves → Robot Factory → Time Portal
- **XP & leveling** — 15 levels from Code Cub to Master Coder
- **Stars & achievements** — 1–3 stars per lesson based on code efficiency
- **Bilingual** — English and Indonesian, auto-detects browser locale
- **Mobile-friendly** — works on phone, tablet, and desktop
- **100% static** — no backend, no server, no login, no data collected

## Worlds & Concepts

| World | Ages | Concept |
|-------|------|---------|
| 🌿 Jungle Adventure | 5–7 | Sequences |
| 🚀 Space Station | 7–9 | Loops |
| 🌊 Ocean Deep | 9–10 | Variables |
| 💎 Crystal Caves | 10–11 | Conditions |
| 🤖 Robot Factory | 11–13 | Functions |
| ⏰ Time Portal | 12–14 | Arrays & Lists |

## Tech Stack

- **React 18** + TypeScript + Vite
- **Blockly v10** — visual block programming
- **Framer Motion** — animations
- **Tailwind CSS** — styling
- **React Router v7** — `/` landing page, `/app` game
- **Web Audio API** — synthesized sound effects (no library)
- **localStorage** — all progress stored client-side

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — landing page at `/`, game at `/app`.

## Project Structure

```
src/
├── blockly/        # Custom blocks + toolbox definitions
├── components/     # Shared UI components
├── data/           # Worlds, lessons, XP system
├── engine/         # Game logic (move, collect, win check)
├── i18n/           # Translations (EN/ID) + LanguageProvider
├── screens/        # LandingScreen, HomeScreen, LessonScreen
├── store/          # useProgress (localStorage)
├── types/          # TypeScript types
└── utils/          # Sound effects
```

## License

MIT

---

By [Irfan Maulana](https://mazipan.space)
