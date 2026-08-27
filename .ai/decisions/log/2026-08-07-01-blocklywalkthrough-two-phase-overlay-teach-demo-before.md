# 2026-08-07 — BlocklyWalkthrough: two-phase overlay (teach + demo) before tutorial lesson

**Context:** Each world has a tutorial lesson (number 0, `isTutorial: true`) that kids must complete before level 1. The question was whether it was enough to drop kids straight into that lesson, or whether they needed pre-lesson concept preparation.

**Decision:** Added a two-phase concept walkthrough overlay that fires automatically when a tutorial lesson opens:
- **Teach phase** — full-screen modal with 1–2 slides showing visual block diagrams (using `<Pill>`, `<RepeatWrap>`, `<IfWrap>`, `<VarSet>/<VarGet>` primitives that simulate Blockly stacks without the real workspace). Explains the world's core concept in kid-friendly language.
- **Demo phase** — loads a pre-built Blockly workspace state into the real workspace via `blocklyRef.current.loadState()`, then shows a floating card pointing at it. Kids see a working example before clearing it and building their own.

The tutorial lesson itself is the hands-on practice — the overlay is the "watch first" layer before the "try it" layer. The Skip button lets confident kids bypass both phases.

**Alternatives rejected:**
- Just show the tutorial lesson with no overlay — the lesson's grid is the practice, not the explanation; kids with no context still don't know how to drag blocks or what a "repeat" block looks like.
- Use real Blockly in the overlay — requires a second workspace mount, doubles memory, and the workspace has a slow init path. The visual block primitives are a lightweight, instant-loading equivalent that's good enough for the teach phase.
- Show text instructions on the lesson screen instead of an overlay — walls of text are ignored by kids; the overlay with animation and visual diagrams is closer to what they'd experience in a game tutorial.

**Consequences:** `BlocklyWorkspaceHandle` got a `loadState(state: object)` method exposed via `useImperativeHandle`. `DEMO_STATES` in `BlocklyWalkthrough.tsx` holds pre-built Blockly JSON per world. Factory world has no demo state (its concept diagram is sufficient). The walkthrough fires once per tutorial lesson visit (state is local to the component mount); after Skip or completion it does not re-appear until the lesson is re-opened.

**Note on translation keys:** `walkthrough.next`, `walkthrough.skip`, `walkthrough.go` were added to `translations.ts` but ended up unused — the component uses inline `lang === 'id' ? ... : ...` checks for those labels. These keys are dead code.
