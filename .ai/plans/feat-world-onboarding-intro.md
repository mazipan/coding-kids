# feat-world-onboarding-intro

**Status:** done  
**Branch:** claude/blocky-onboarding-intro-rd2t1m

## Problem

Kids land directly in Lesson 1 of each world with no introduction to the Blockly mechanic or the world's core concept (loops, variables, conditions, etc.). The first failure is often UI confusion, not logical confusion — they don't know how to drag a block or what a "repeat" block does.

## Solution

Two layers of onboarding, both gated behind `isTutorial: true`:

**Layer 1 — Concept walkthrough overlay** (`BlocklyWalkthrough.tsx`)  
Shown automatically when a tutorial lesson first opens. A full-screen overlay with two phases:
- **Teach phase**: 1–2 slides with a visual block diagram explaining the world's core concept (sequences, loops, variables, conditions, functions, lists). Each diagram uses custom `<Pill>` / `<RepeatWrap>` / `<IfWrap>` components to simulate Blockly block stacks without requiring the real workspace.
- **Demo phase**: After the last teach slide, the overlay loads a pre-built Blockly workspace state into the real workspace (`DEMO_STATES[worldId]`), switches to the blocks tab, and shows a floating card pointing at the workspace. Kids can study the example before clearing and building their own.

The walkthrough fires once per tutorial lesson visit. If the kid clicks "Skip", the overlay closes and they enter the lesson directly.

**Layer 2 — Tutorial lesson** (number 0, `isTutorial: true`)  
A real interactive lesson with a simple grid that the kid must solve by running code:
- No stars, no XP pressure — completion shows "You're Ready! 🎉" overlay with "Start Level 1!" button
- Stored in `progress.lessons['world-0']` like any other lesson
- Blocks Lesson 1 for new players until completed; existing players with world progress bypass automatically

## Files changed

| File | Change |
|------|--------|
| `src/types/index.ts` | Added `isTutorial?: true` to `Lesson` interface |
| `src/data/lessons.ts` | Added 7 tutorial lessons (`jungle-0` … `portal-0`); `getLessonsByWorld` excludes tutorials; new `getWorldTutorial(worldId)` function |
| `src/store/useProgress.ts` | `isLessonUnlocked`: lesson 0 always accessible; lesson 1 now requires tutorial completion unless player already has world progress (backward compat) |
| `src/screens/HomeScreen.tsx` | Tutorial card rendered at top of lesson list — glowing "Start Here First!" CTA when not done, dimmed "✓ Tutorial Complete" when done |
| `src/screens/LessonScreen.tsx` | Added `showWalkthrough` state (true when `isTutorial`); `handleWalkthroughLoadState` and `handleWalkthroughSwitchTab` callbacks; renders `<BlocklyWalkthrough>` overlay; tutorial mode: TUTORIAL badge in header, no star calculation on win, tutorial complete overlay with "Start Level 1!" button |
| `src/components/BlocklyWorkspace.tsx` | Added `loadState(state: object)` to `BlocklyWorkspaceHandle` interface and `useImperativeHandle` — called by walkthrough to inject the demo workspace state |
| `src/components/BlocklyWalkthrough.tsx` | **New file** — concept walkthrough overlay; see architecture section below |
| `src/i18n/translations.ts` | Added 8 `tutorial.*` keys and 3 `walkthrough.*` keys (EN + ID) — see INV-C2 note |

## BlocklyWalkthrough architecture

```
BlocklyWalkthrough
├── phase = 'teach'
│   └── motion.div (full-screen modal, AnimatePresence keyed by stepIdx)
│       ├── Header: world accent color, icon, title
│       ├── Body: explanation text
│       ├── Diagram: visual block mockup (world-specific)
│       ├── Step dots (when steps.length > 1)
│       └── Buttons: Skip (closes overlay) | Next / Show Example / Let's go
└── phase = 'demo'
    └── motion.div (floating bottom card)
        ├── Pulsing left glow pointing at workspace
        ├── Character + explanation text
        └── "Got it, let's try!" button (closes overlay)
```

Visual primitives (all inline, no external lib):
- `<Pill>` — a rounded colored block label
- `<StackedPills>` — vertical column of Pill blocks
- `<RepeatWrap>` — loop header + indented body + end cap
- `<IfWrap>` — if header + indented body + end cap
- `<VarSet>` / `<VarGet>` — variable setter/getter representation

`DEMO_STATES` — pre-built Blockly JSON serialization for each world, loaded into the real workspace via `blocklyRef.current.loadState()`.

## Tutorials per world

| World | Concept | Teach slides | Demo state |
|-------|---------|-------------|------------|
| Jungle | Sequences | 2 (what a sequence is; how to drag+run) | 2× move_right |
| Space | Loops | 1 (repeat vs individual blocks) | repeat(3){move_right} |
| Loops | Loops (efficiency) | 1 (fewer blocks = more stars) | repeat(6){move_right} |
| Ocean | Variables | 1 (set variable, use in repeat) | variables_set + repeat(variable) |
| Caves | Conditions | 1 (if/else concept) | controls_if(TRUE){move_right×3} |
| Factory | Functions | 1 (define once, call many times) | No demo (concept shown in diagram only) |
| Portal | Lists | 1 (list + loop concept) | repeat(5){move_right} |

## Invariants checked

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | All content is inline |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-PR1 progress never decreases | no | `completeLesson(id, 1, 0)` only adds |
| INV-PR3 XP delta | no | tutorials award 0 XP |
| INV-L1 sequential unlock | yes | lesson 0 always accessible; lesson 1 requires tutorial done |
| INV-L2 world unlock by XP | no | unchanged |
| INV-G1–G4 game engine | no | engine unchanged; walkthrough is UI-only |
| INV-C1 TypeScript strict | yes | `tsc -b` passes with zero errors |
| INV-C2 no hardcoded strings | yes | **HomeScreen card and LessonScreen overlay** use `t()` — 8 `tutorial.*` keys added (badge, card.label, card.desc, card.cta, card.done, complete.title, complete.subtitle, complete.cta). **BlocklyWalkthrough body text** uses inline bilingual objects `{ en: ..., id: ... }` — acceptable for static teach content that isn't UI copy. **BlocklyWalkthrough interactive labels** (Skip, Next, Got it, etc.) use inline `lang === 'id' ? ... : ...` checks; 3 `walkthrough.*` keys also exist in `translations.ts` but are not called from any component (dead keys — the component uses inline checks). |
| INV-C3 build passes | yes | verified |
| INV-C4 localStorage only | no | no new keys |
| INV-I1 all keys have EN value | yes | all 11 new keys (`tutorial.*` × 8, `walkthrough.*` × 3) have EN + ID values |
| INV-I2 no layout assumptions | no | |

## Backward compatibility

Existing players who already have progress in a world (e.g. completed `jungle-1`) bypass the tutorial gate automatically — `hasWorldProgress` check in `isLessonUnlocked` returns true before reaching the tutorial requirement.
