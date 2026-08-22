# Decision log

## 2026-08-07 — BlocklyWalkthrough: two-phase overlay (teach + demo) before tutorial lesson

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

---

## 2026-08-07 — Framer Motion animations added to block coding path

**Context:** The thinking path's animated star reveal drew attention to the relative stillness of the block coding path. User requested animations to make blocks feel as engaging as brain training.

**Decision:** Added four targeted animations: (1) collectible items bob continuously with staggered delays; (2) character gently bounces when the game is idle; (3) block count badge pops with a spring on every change; (4) Run button glow cycles between purple and pink when blocks are ready. Also fixed a pre-existing INV-C2 violation: the success banner in GameGrid had a hardcoded English string (`"Amazing! You did it!"`) that now uses `t('game.success')`.

**Alternatives rejected:**
- Animating HomeScreen world/lesson cards — already well-animated (entrance stagger, emoji wiggle, hover lift, progress bar).
- Animating the star row in the LessonScreen header — those are prior best stars that shouldn't flash on every visit; RewardModal already animates newly-earned stars.
- Lottie files — would introduce an external asset dependency and download cost.

**Consequences:** block coding path now matches the energy level of the thinking path. No new dependencies — framer-motion was already installed.

---

## 2026-08-07 — Blockly block counting: controls_repeat_ext uses real math_number block

**Context:** Auditing `optimalBlockCount` values required knowing exactly how `workspace.getAllBlocks(false)` counts blocks. The key question was whether the number input inside a repeat block is a "shadow" (not counted) or a real block.

**Decision:** Our `toolboxes.ts` defines the repeat entry as `{ block: { type: 'math_number' } }` (not `{ shadow: ... }`), so the number IS a real block. Therefore: `repeat(N) { move }` = 3 blocks (repeat container + math_number + body block), regardless of N. For N ≤ 2, using individual move blocks (2 blocks for 2 moves) is cheaper than a loop (3 blocks). This rule is documented in the block-count-audit plan and applied when setting `optimalBlockCount` and `starThresholds`.

**Alternatives rejected:**
- Changing the toolbox to use a shadow number — would break existing lesson saves; not worth it.
- Using N as the block count for a loop — incorrect; contradicted by the actual Blockly API.

**Consequences:** All `optimalBlockCount` and `starThresholds` values must be validated against this 3-block-per-repeat rule, not 1-per-repeat. Two jungle lessons (jungle-4, jungle-6) had incorrect values and were corrected.

---

## 2026-08-07 — Remove collect_item block; items auto-collect on movement

**Context:** The `collect_item` Blockly block was originally added to give kids explicit control over picking up items. In practice, `applyAction` in `gameEngine.ts` already auto-collects items whenever the character moves onto their cell, making the explicit block redundant. Kids who used it inflated their block count and scored fewer stars.

**Decision:** Remove `collect_item` from toolbox, custom block definitions, JS generator, game engine, type definitions, and i18n strings. The `new Function` sandbox now exposes only four verbs: `moveRight`, `moveLeft`, `moveUp`, `moveDown`. Sound logic in LessonScreen was updated to play the collect sound whenever a move causes `collectedIds.size` to increase (auto-collect detection), replacing the now-dead `action.type === 'collect'` branch.

**Alternatives rejected:**
- Keep the block but don't count it in the score — `workspace.getAllBlocks()` counts all real blocks; excluding specific types would require forking the toolbox counting logic.
- Hide from toolbox but keep engine support — the engine handler would be dead code; serialized Blockly state could still reference it from old saves.

**Consequences:** Six files changed. No lesson data changes needed (no lesson required the collect block). INV-G4 is tighter: sandbox has exactly 4 verbs, not 5.

---

## 2026-08-07 — Brain Training expanded to 6 worlds (Memory Maze, Nature Quest, Number Ninja)

**Context:** The original three thinking worlds (patterns, logic, counting) covered only core CS-adjacent cognitive skills. Users requested more worlds to extend the brain training path.

**Decision:** Added three new worlds, each themed around a distinct skill not covered by the originals:
- **Memory Maze** (`memory`, 🧩, ages 6–10) — Sequence recall using `pattern` puzzles with longer chains (up to 8 items) and blanks in the middle, not just at the end. Teaches working memory.
- **Nature Quest** (`nature`, 🌿, ages 8–11) — Science/nature if-then reasoning using `if-then` puzzles about plants, animals, weather, and life cycles. Teaches causal thinking via real-world context.
- **Number Ninja** (`numbers`, ⚡, ages 9–13) — Number sequence pattern-finding using `math` puzzles (skip counting, doubling, Fibonacci, square numbers, triangular numbers). Distinct from `counting` which focuses on arithmetic operations.

All three new worlds use existing puzzle types — no new renderer code needed. All have `unlockAtXP: 0` per INV-L3.

**Alternatives rejected:**
- Adding more lessons to existing worlds — increases depth but not breadth; kids who finish all three worlds have nowhere to go.
- Introducing new puzzle types (e.g. drag-and-sort) — requires new renderer code in `ThinkingLesson.tsx`; scope is too large for this pass.

**Consequences:** Brain Training path now has 60 lessons across 6 worlds. The world map (`grid-cols-1 sm:grid-cols-3`) renders as 2 rows × 3 columns — no layout change required. INV-L3 updated to name all six worlds and to explicitly require `unlockAtXP: 0` for any future additions.

---

## 2026-08-07 — Lucide icons used app-wide; emoji/symbol characters banned from controls

**Context:** After migrating action icons in PathSelector, ThinkingHome, and ThinkingLesson to `lucide-react`, a secondary audit found embedded arrow/symbol characters (`←`, `→`, `▶`, `✓`) baked into multiple translation strings (`path.back`, `landing.returning`, `tutorial.card.cta`, `tutorial.card.done`, `walkthrough.next`, `thinking.correct`). These were causing double-icon display when JSX icons were added alongside the strings.

**Decision:** Strip all symbol characters from translation strings — the translation value is always plain text. Icons are placed exclusively in JSX next to `t()` calls. This rule is now documented in `context.md` as a gotcha and applies to all future translation keys.

**Alternatives rejected:**
- Keep symbols in translations and skip JSX icons — loses visual consistency; emoji arrows are lower quality than lucide icons and render differently per OS.
- Strip JSX icons and keep translation symbols — translation strings should be language-agnostic text; embedding directional arrows couples content to layout.

**Consequences:** All interactive controls (buttons, badges, status labels) use lucide-react icons. Emoji is retained only for decorative mascots and puzzle content. Translation strings are pure text.

---

## 2026-08-07 — Thinking path header: XP level name hidden

**Context:** The XP level progression uses coding-themed names (Code Cub, Block Builder, …) which are irrelevant and confusing when the player is on the Brain Training path.

**Decision:** Added `hideLabel?: boolean` prop to `XPBar`. `Header` passes `hideLabel` when `subPath === 'thinking'`. The XP bar still shows the progress fill; only the level name text is suppressed.

**Alternatives rejected:**
- Separate XP system per path — adds complexity; shared XP is a deliberate design choice (see two-paths entry below).
- Replace level names with generic labels on thinking path — adds translation keys for marginal benefit; hiding is simpler.

**Consequences:** The XP bar remains visible on both paths (kids can see progress), but coding-specific jargon doesn't bleed into the thinking context.

---

## 2026-08-07 — Thinking path: all worlds unlocked from start

**Context:** Initial implementation locked Logic Land at 30 XP and Math Magic at 80 XP. User feedback: the locks felt too strict; kids should be free to explore whichever world interests them.

**Decision:** Set `unlockAtXP: 0` for all three thinking worlds. Individual lessons within each world remain sequentially locked (lesson N requires lesson N-1 completed). The lesson-level gates preserve a natural difficulty ramp without a hard XP barrier at world entry.

**Alternatives rejected:**
- Keep XP gates but lower thresholds — still arbitrary friction; lesson-level gates provide enough structure.
- Unlock all lessons in all worlds — removes all progression structure; kids might skip to lessons they're not ready for.

**Consequences:** Kids can start any thinking world immediately. The sequential lesson lock inside each world still teaches the concept in order.

---

## 2026-08-07 — Thinking lessons 5–9: increased difficulty

**Context:** First 10 lessons were added with uniform easy difficulty. User testing found all 10 could be completed in under 2 minutes — no challenge ramp.

**Decision:** Redesigned lessons 5–9 in all three worlds with progressive difficulty: patterns get longer sequences (8–9 items), ABCD 4-element cycles, blank placed in the middle, number sequences (+2 odd, doubling); logic introduces negation, two-step ordering, even/odd classification, chained if-then, and deductive reasoning; counting adds reverse operations, multiplication, multi-step equations, and order-of-operations (brackets).

**Alternatives rejected:**
- Add more worlds instead of harder lessons — premature; depth in existing worlds is better than breadth for now.
- Difficulty flags per lesson — adds data complexity; the 0–4 / 5–9 ramp is implicit in the ordering and sufficient.

**Consequences:** A motivated 8-year-old should spend 5–10 minutes on a full world rather than 2. The boss lesson in counting (`(4 + 6) × 3 = 30`) rewards 30 XP and requires understanding operator precedence.

---

## 2026-08-07 — Two parallel learning paths: /app/blocks and /app/thinking

**Context:** Blockly is good for teaching syntax but skips computational thinking fundamentals (pattern recognition, if/then reasoning, number patterns) that matter for ages 5–10. User requested two separate paths.

**Decision:** Split `/app` into a PathSelector hub with two routes: `/app/blocks` (existing Blockly game, moved from `/app`) and `/app/thinking` (new Brain Training path with pattern, logic, and math puzzles). Both share the same `GameLayout` and `useProgress` store — XP and stars accumulate across both paths.

**Alternatives rejected:**
- Keep `/app` pointing to blocks, add `/app/thinking` as a sibling — cleaner backward compat but no central hub page; users arriving at `/app` would go straight into blocks with no visibility of the thinking path.
- Separate XP pools per path — adds complexity; shared XP means a kid can unlock thinking worlds by playing blocks and vice versa, which feels natural.
- Redirect `/app` → `/app/blocks` permanently — hides the path selector from users who know the old URL.

**Consequences:** Old deep-links (`/app`, `/app/world/...`) redirect to `/` (catch-all) rather than the specific lesson — acceptable for v1. ThinkingLesson uses inline completion state instead of `RewardModal` because `RewardModal` is tightly coupled to the blocks `Lesson` type. Thinking lesson IDs follow the same `{worldId}-{lessonNum}` format starting at 0, so `isLessonUnlocked` works unchanged.

---

## 2026-08-01 — Upgraded all dependencies to latest majors

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

---

## 2026-08-01 — react-aria-components for accessible Dialog; shadcn deferred

**Context:** User asked about shadcn / React Aria. shadcn now has a React Aria registry, but the codebase is Tailwind-first with hand-styled components.

**Decision:** Install `react-aria-components` directly (the single-package distribution). Use `ModalOverlay + Modal + Dialog` to replace the DIY overlay in `RewardModal.tsx`. No shadcn scaffolding layer — RAC primitives are styled with the existing Tailwind classes.

**Alternatives rejected:**
- Full shadcn init + generated files — we'd own files we don't need to change; direct RAC usage is simpler.
- Tabs in LessonScreen — desktop needs both panels visible simultaneously, but `TabPanel` marks non-selected panels `aria-hidden`, which would hide visible content from screen readers. Deferred until layout is reconsidered.
- RAC Button — existing `<button>` elements are already semantically correct; marginal win not worth the churn.

**Consequences:** `RewardModal` now has proper focus trap, `aria-modal`, and body-scroll lock. CSS custom property brand tokens added to `index.css` as prep for future shadcn token mapping. Bundle grows ~54 kB (RAC focus utilities).

---

## 2026-08-01 — Plus Jakarta Sans for landing page; Nunito retained for game UI

**Context:** User requested a professional redesign that avoids a "newbie vibe." The existing Nunito font is rounded and playful — good for kids game UI, wrong signal for a marketing page targeting parents/teachers.

**Decision:** Load Plus Jakarta Sans (weights 400–800) alongside Nunito in `index.html`. Apply `font-family: 'Plus Jakarta Sans'` via an inline style on the `LandingScreen` root div, leaving `body { font-family: Nunito }` unchanged for the game.

**Alternatives rejected:**
- Replace body font globally — would break the kid-friendly tone of the game UI.
- Use a Tailwind `font-jakarta` class on the root div — this works but inline style is slightly more explicit that the override is intentional and scoped to LandingScreen only.

**Consequences:** Landing page feels professional; game preserves its playful character. Any future standalone marketing pages should also opt in to `Plus Jakarta Sans`.

---

## 2026-08-01 — lucide-react for landing page icons

**Context:** Feature cards and "how it works" steps had emoji icons which look inconsistent with a professional layout; user asked for SVG icons in some places.

**Decision:** Add `lucide-react` (tree-shakeable, zero-config, MIT). Use it on the landing page only — feature cards (MousePointerClick, Trophy, Globe, Smartphone) and step icons (Map, Grip, Zap). Emoji retained for world mascots, reward modal, and any kid-facing content where emoji energy is appropriate.

**Alternatives rejected:**
- Heroicons — also good, but lucide-react is more consistently maintained and has a slightly larger icon set.
- Hand-crafted inline SVGs — adds maintenance burden; lucide-react is negligible bundle cost given tree-shaking.

**Consequences:** Landing page icons are sharp and consistent. New icons must come from lucide-react (not a second icon library) to maintain visual consistency.

---

## 2026-08-01 — SVG </> favicon replacing emoji rocket

**Context:** The old favicon was `🚀` as a Unicode emoji, which renders inconsistently across platforms and doesn't represent the "coding" brand.

**Decision:** Replace with a custom inline SVG data URI: the same `</>` logo used in the nav, encoded as a URL-safe data URI in `index.html`.

**Alternatives rejected:**
- A separate `public/favicon.svg` file — works, but the data URI keeps everything self-contained in the HTML without an extra file.

**Consequences:** Consistent, on-brand favicon across all platforms. The gradient (purple→pink) also serves as a distinctive tab icon.

---

Running record of significant decisions. Add an entry whenever a non-obvious choice is made during planning or review. Most recent first.

Format:
```
## YYYY-MM-DD — {title}
**Context:** {what situation prompted this decision}
**Decision:** {what was decided}
**Alternatives rejected:** {what else was considered and why it lost}
**Consequences:** {what this decision makes easier or harder going forward}
```

---

## 2026-08-01 — Separate .ai/ directory for AI context

**Context:** The single `agents.md` file was growing unwieldy as we added personas, store specs, decisions, and harness prompts.

**Decision:** Split into a structured `.ai/` directory with subdirectories for `agents/`, `decisions/`, `specs/`, `harness/`, and `plans/`. `CLAUDE.md` imports the most essential files; the rest are linked from `agents.md`.

**Alternatives rejected:**
- Keep everything in `agents.md` — too long, hard to navigate, merge conflicts on every change.
- Use separate top-level files (`PERSONAS.md`, `SPECS.md`, etc.) — no hierarchy, harder to reason about ownership.

**Consequences:** Each concern has a clear home. Plans, specs, and decisions are independently versioned. New agents can be defined without touching existing files.

---

## 2026-08-01 — React Router v7 (declarative API)

**Context:** We needed `/` for the landing page and `/app` for the game with SPA fallback on Netlify.

**Decision:** Install React Router v7, use the legacy declarative `BrowserRouter` + `Routes` + `Route` API (v6-style) rather than the new data router API.

**Alternatives rejected:**
- Manual `window.history.pushState` + `popstate` listener — works but fragile; no nested route support if needed later.
- Hash routing (`/#/app`) — works without a server redirect but ugly URLs and bad for SEO/sharing.
- React Router v7 data router API — adds loader/action complexity we don't need for two routes.

**Consequences:** Clean URLs, Netlify SPA redirect handles hard refresh on `/app`. Upgrading to the data router API later is straightforward since the component tree is already route-aware.

---

## 2026-08-01 — localStorage over IndexedDB for progress

**Context:** User progress (XP, stars, completed lessons) needs to survive page refreshes without a backend.

**Decision:** `localStorage` with a `_v1` versioned key.

**Alternatives rejected:**
- IndexedDB — async API adds complexity for data that is < 5 KB; no meaningful benefit at this scale.
- Cookies — server round-trip or CORS config required; size-limited; incompatible with pure static hosting.
- Remote database — violates the static-only constraint and introduces privacy concerns.

**Consequences:** Progress is device-local. Cross-device sync is impossible without a backend. Acceptable for v1.

---

## 2026-08-01 — Bilingual EN/ID via flat-key translations

**Context:** The app targets Indonesian children (primary market) but should also work in English.

**Decision:** Flat-key translation object (`Record<string, string>`) with `{var}` template substitution. Auto-detect Indonesian via `navigator.language.startsWith('id')`. Persist choice to localStorage.

**Alternatives rejected:**
- i18next / react-i18next — adds a dependency and abstractions for a two-language app with simple strings.
- URL-based locale (`/id/app`) — routing complexity for no user benefit; locale is a preference not an identity.

**Consequences:** Adding a third language requires only a new key object in `translations.ts` and a toggle button update. The flat key structure means no namespacing collisions but requires discipline in key naming.

---

## 2026-08-01 — Static-only, no backend

**Context:** Platform design decision made at project start.

**Decision:** The app is a pure static file bundle. No API server, serverless functions, or database.

**Alternatives rejected:**
- Serverless functions (Netlify Functions, Vercel Edge) — would enable leaderboards, cross-device sync, teacher dashboards. Rejected for v1: adds infrastructure, latency, and privacy obligations.
- Full-stack (Next.js, Remix) — unnecessary complexity for a client-side game.

**Consequences:** Zero hosting cost. No privacy risk. No user accounts possible. Cross-device sync and teacher dashboards are blocked until a backend is explicitly introduced (requires revisiting INV-P1, INV-P2, INV-C4).

---

## 2026-08-08 — isBuggy flag for debug challenge lessons (feat-debugging-challenges)

**Context:** Issue #30 — new lesson variant where kids receive pre-broken code and must find and fix the bug.

**Decision:** Added `isBuggy?: true` and `buggyState?: object` as optional fields on the `Lesson` interface, mirroring the existing `isTutorial?: true` pattern. `buggyState` holds a Blockly JSON serialisation object (same format as `Blockly.serialization.workspaces.save()`) which is loaded into the workspace on mount via the existing `BlocklyWorkspaceHandle.loadState()` handle. `optimalBlockCount` is set to the block count of the corrected solution. Stars use the existing block-count mechanism.

**Alternatives rejected:**
- Discriminated type union (`lessonType: 'normal' | 'tutorial' | 'debug'`) — more type-safe but inconsistent with `isTutorial?: true` precedent; adds discriminated-union complexity to all lesson-type checks.
- Blockly XML string instead of JSON — the app already uses Blockly JSON serialisation internally for workspace state persistence; XML would be a second serialisation format with no benefit.
- Track edit count for star rating — requires new `useProgress` store fields and a migration; block count of the final solution is sufficient for v1.

**Consequences:** Debug lessons load the pre-broken workspace on mount, kids fix the bug and hit Run, stars awarded on the corrected block count. Three lessons shipped: caves-6 (wrong direction), factory-6 (wrong direction inside a loop), portal-10 (wrong repeat count).

---

## 2026-08-11 — Incremental roadmap for new blocks and thinking worlds

**Context:** The catalog already contains broad blocks and brain-training coverage, and the request was to plan more world ideas without immediately expanding the shipped lesson set.

**Decision:** Keep the ideas in a prioritized roadmap and implement at most one world per path at a time. Prioritize Code Orchestra for blocks because it creates a fresh nested-loop/function capstone with the existing engine, and Spatial Studio for brain training because spatial reasoning is the clearest gap in the current catalog; require a separate approved plan and complete content audit before either is built.

**Alternatives rejected:**
- Ship several new worlds together — too much lesson content to playtest and audit effectively in one release.
- Extend all existing worlds — makes sequential paths longer and increases duplicate-mechanic risk.
- Build Coordinate Cove first — meaningful coordinates require safe position-sensor blocks and an engine/sandbox design that does not exist yet.
- Start with timed attention games — reaction speed is not the intended learning outcome and can create accessibility barriers.

**Consequences:** This decision changes documentation only. The roadmap is reversible, no new dependency or persistence change is approved, thinking worlds remain always unlocked, and every selected world must receive its own implementation plan, invariant review, bilingual lesson authoring, and content-quality audit.

---

## 2026-08-14 — Code Orchestra as the first roadmap implementation

**Context:** The new-world roadmap prioritized Code Orchestra and required worlds to ship as separate, playtestable releases. Review also found that existing bonus worlds bypassed sequential lesson unlocking after their shared world gate opened.

**Decision:** Add Code Orchestra as a 10-lesson bonus world using only existing movement, loop, and function mechanics. Keep the shared final-main-lesson bonus gate, then apply normal previous-lesson sequencing inside every bonus world.

**Alternatives rejected:**
- Implement Spatial Studio in the same release — its spatial interaction still requires a separate prototype and review.
- Add audio-recognition gameplay — unnecessary for the programming objective and less accessible.
- Preserve all-at-once bonus lesson access — violates INV-L1 and removes the intended learning progression.

**Consequences:** Existing completed bonus progress remains valid, while uncompleted bonus lessons now open sequentially. No localStorage migration is necessary because stored lesson records and keys do not change.

---

## 2026-08-15 — Planning Peaks and Chance Camp as the next roadmap implementation

**Context:** The new-world roadmap had shipped only Code Orchestra. Of the five remaining ideas, three are blocked on design work that does not exist: Spatial Studio needs an interaction prototype reviewed before authoring, Eco City needs 10 simulated blocks grids, and Coordinate Cove needs a position-sensor block and sandbox design. The other two, Planning Peaks and Chance Camp, need nothing beyond lesson data.

**Decision:** Implement both remaining data-only worlds in one release, as 10 bilingual lessons each built exclusively from the nine puzzle types already rendered generically by `ThinkingLesson.tsx`. Planning Peaks teaches constraint planning; Chance Camp teaches uncertainty. Both are `unlockAtXP: 0` per INV-L3.

**Alternatives rejected:**
- Ship Spatial Studio next as strict roadmap priority order suggests — its own roadmap entry makes a reviewed interaction prototype a precondition, so authoring content first risks discarding it.
- Ship only one world to honour the roadmap's "do not batch" guidance literally — that guidance exists to keep engine and interaction risk playtestable one change at a time, and neither world carries any. Both touch disjoint lesson data and are independently revertible.
- Use the `sort` puzzle type for clue-driven ordering — its prompt is hardcoded to "smallest to largest", which would contradict the puzzle on screen. `sequence` is used instead.
- Phrase probability answers as words on `MathPuzzle` — its `options` are `string[]`, not localizable, so word answers there would break INV-C2. Word answers go through `if-then`.

**Consequences:** Two new thinking worlds, 20 lessons, no new dependency, puzzle type, engine change, or persistence change. New lesson IDs are additive, so existing saves need no migration. A drive-by fix registers the three colours (`amber`, `cyan`, `violet`) that `ThinkingHome.getWorldTheme` was missing, which had been silently rendering Math Reasoning, Rule Finder and Logic Detective in the purple fallback; a test now asserts both colour maps stay in sync. Two pre-existing INV-Q3 true-false runs (in `nature` and `deduction`) were found during the audit and are recorded, not fixed, in the plan.

---

## 2026-08-22 — Spatial figures are text rows, and Spatial Studio ships as a 3-lesson prototype

**Context:** Spatial Studio was roadmap priority 2 but blocked: none of the nine existing thinking puzzle types can ask "here is a figure, which of these four is it after a quarter turn?" — they all express answers as emoji, short strings, or ordered taps. The roadmap made a reviewed interaction prototype an explicit precondition for authoring the world's content.

**Decision:** Add a tenth puzzle type, `spatial`, rendering a prompt figure plus four labelled figure options. A figure is authored as one string per grid row (`'#'` filled, `'o'` filled and dotted, `'.'` empty) and drawn into a CSS grid. Ship the world `spatial` (🧭, `fuchsia`, `unlockAtXP: 0`) with 3 lessons — translate, reflect, rotate — rather than the full 10-lesson arc.

**Alternatives rejected:**
- Inline SVG paths per option — path data is unreadable in review, so an authoring error is invisible until the lesson renders.
- Emoji rows, as `pattern` uses — most emoji have no rotated variants, so "the same shape turned" cannot be expressed at all.
- `number[][]` figures — same information, but a nested numeric array shows a reviewer nothing. Text rows *are* the shape in the diff.
- A coloured cell as the orientation anchor — fails colourblind players. A dot is a shape cue and survives greyscale.
- Authoring all 10 lessons now — the roadmap requires the interaction to pass review first, precisely so content is not written against an interaction that may be discarded.

**Consequences:** One new puzzle type, one new world, three lessons, two translation keys, and one `fuchsia` entry in each of the two thinking colour maps. `lessonCount: 3` is temporary and deliberate: the landing-page totals and every progress bar read it, so claiming 10 with 3 authored would render a permanently stuck world. `spatial` is therefore validated by `tests/spatialPuzzle.test.ts` — which recomputes each authored answer from the prompt figure and asserts the transformation is really the one the lesson claims — instead of the 10-lesson shape the shared content suite asserts. Appending the world also moves `ThinkingHome`'s next-world banner from `probability` onto `spatial`. New lesson ids are additive, so no localStorage migration is needed. Known limitation carried to the follow-up issue: the figure grids are `aria-hidden`, so a screen-reader user hears only the option label — the same gap the emoji-based puzzle types already have.
