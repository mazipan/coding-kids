# 2026-08-01 — lucide-react for landing page icons

**Context:** Feature cards and "how it works" steps had emoji icons which look inconsistent with a professional layout; user asked for SVG icons in some places.

**Decision:** Add `lucide-react` (tree-shakeable, zero-config, MIT). Use it on the landing page only — feature cards (MousePointerClick, Trophy, Globe, Smartphone) and step icons (Map, Grip, Zap). Emoji retained for world mascots, reward modal, and any kid-facing content where emoji energy is appropriate.

**Alternatives rejected:**
- Heroicons — also good, but lucide-react is more consistently maintained and has a slightly larger icon set.
- Hand-crafted inline SVGs — adds maintenance burden; lucide-react is negligible bundle cost given tree-shaking.

**Consequences:** Landing page icons are sharp and consistent. New icons must come from lucide-react (not a second icon library) to maintain visual consistency.
