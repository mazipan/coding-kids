# 2026-08-01 — Plus Jakarta Sans for landing page; Nunito retained for game UI

**Context:** User requested a professional redesign that avoids a "newbie vibe." The existing Nunito font is rounded and playful — good for kids game UI, wrong signal for a marketing page targeting parents/teachers.

**Decision:** Load Plus Jakarta Sans (weights 400–800) alongside Nunito in `index.html`. Apply `font-family: 'Plus Jakarta Sans'` via an inline style on the `LandingScreen` root div, leaving `body { font-family: Nunito }` unchanged for the game.

**Alternatives rejected:**
- Replace body font globally — would break the kid-friendly tone of the game UI.
- Use a Tailwind `font-jakarta` class on the root div — this works but inline style is slightly more explicit that the override is intentional and scoped to LandingScreen only.

**Consequences:** Landing page feels professional; game preserves its playful character. Any future standalone marketing pages should also opt in to `Plus Jakarta Sans`.
