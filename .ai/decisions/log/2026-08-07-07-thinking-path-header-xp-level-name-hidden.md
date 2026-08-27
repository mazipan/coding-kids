# 2026-08-07 — Thinking path header: XP level name hidden

**Context:** The XP level progression uses coding-themed names (Code Cub, Block Builder, …) which are irrelevant and confusing when the player is on the Brain Training path.

**Decision:** Added `hideLabel?: boolean` prop to `XPBar`. `Header` passes `hideLabel` when `subPath === 'thinking'`. The XP bar still shows the progress fill; only the level name text is suppressed.

**Alternatives rejected:**
- Separate XP system per path — adds complexity; shared XP is a deliberate design choice (see two-paths entry below).
- Replace level names with generic labels on thinking path — adds translation keys for marginal benefit; hiding is simpler.

**Consequences:** The XP bar remains visible on both paths (kids can see progress), but coding-specific jargon doesn't bleed into the thinking context.
