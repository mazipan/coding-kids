# 2026-08-27 — Routine dependency update: patch/minor bumps only, framer-motion major deferred

**Context:** Requested to update all dependencies and their lockfile. `bun outdated` showed every package
except `framer-motion` had a patch or minor update available within (or matching) its existing `^` range;
`framer-motion` had a major version jump (12.43.0 → 13.1.1) sitting outside its current range.

**Decision:** Ran `bun update` to bring `blockly`, `lucide-react`, `@types/node`, `@types/react-dom`,
`@vitejs/plugin-react`, `postcss`, and `vite` to their latest patch/minor versions, and manually bumped the
exact-pinned `@biomejs/biome` from `2.5.6` to `2.5.10` (patch-only) along with the `$schema` URL in
`biome.json` to match — `biome ci` fails on a schema/CLI version mismatch otherwise. Left `framer-motion`
at `^12.43.0`; the workflow's skip-plan exception only covers patch bumps, and jumping a major version
without reviewing its changelog for breaking animation-API changes isn't a "no plan needed" change.

**Alternatives rejected:**
- Bumping framer-motion to 13.x in the same pass — no plan exists for it, and framer-motion is used
  throughout the block coding path's animations (`GameGrid`, `Confetti`, XP/star reveals); a silent major
  bump risks a runtime animation regression that `tsc`/`biome`/`bun test` wouldn't catch.

**Consequences:** `package.json`, `bun.lock`, and `biome.json`'s `$schema` are updated; all three
verification commands and `bun test` pass. `framer-motion` 13.1.1 remains available and should go through
`.ai/plans/` as a `feat` or `chore` plan if/when the team wants it, with its changelog reviewed for breaking
changes first.
