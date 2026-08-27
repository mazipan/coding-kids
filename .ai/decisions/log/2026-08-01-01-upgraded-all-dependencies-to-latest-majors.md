# 2026-08-01 — Upgraded all dependencies to latest majors

**Context:** `bun outdated` showed React, Vite, Tailwind, TypeScript, Blockly, and framer-motion all sitting one or more majors behind. User asked to upgrade everything rather than defer the majors indefinitely.

**Decision:** Bumped every dependency to latest: React 18→19, Vite 5→8, `@vitejs/plugin-react` 4→6, Tailwind 3→4, TypeScript 5→7 (the native-compiler rewrite, not a beta — `latest` dist-tag), Blockly 10→13, framer-motion 11→12. `react-router-dom`, `lucide-react`, `react-aria-components`, `lefthook`, and `biome` were already at latest.

**Fallout fixed to keep the build green:**
- Tailwind v4 moved PostCSS integration to a separate `@tailwindcss/postcss` package (dropped `autoprefixer`, now built in) and CSS entry changed from three `@tailwind` directives to `@import 'tailwindcss'`. Kept `tailwind.config.js` unchanged and bridged it in via `@config '../tailwind.config.js'` in `src/index.css` rather than rewriting theme.extend as CSS-first `@theme` — lower risk, identical values, and avoided colliding with the hand-written `--color-*` custom properties already in `:root` for React Aria.
- Vite 8 vendors **rolldown** (its Rust bundler) instead of JS Rollup for `RollupOptions` types. Rolldown's `manualChunks` only accepts the function form, not the `Record<string, string[]>` object form Rollup allowed — `vite.config.ts` was rewritten from an object literal to an equivalent `(id) => ...` function.
- TypeScript 7 (strict) now rejects a side-effect `import './index.css'` with no ambient module declaration — the project never had a `src/vite-env.d.ts`; added the standard `/// <reference types="vite/client" />` file.

**Alternatives rejected:**
- Minor/patch-only bump — leaves known majors unaddressed indefinitely and was explicitly not what was asked.
- Full Tailwind v4 CSS-first config rewrite (`@theme` block) — more idiomatic long-term, but riskier for this pass since it would require renaming/deduplicating against the existing manual `:root` custom properties; deferred to a future dedicated pass if desired.

**Consequences:** No product-facing behavior changed (verified: landing page, world map, and a lesson's Blockly toolbox/flyout/code-gen all render correctly with zero console errors post-upgrade). Future Vite config changes must use the rolldown-style function `manualChunks`, not the Rollup object form. Future Tailwind theme edits go through `tailwind.config.js` as before (still bridged via `@config`), not CSS `@theme`.
