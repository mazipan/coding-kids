# Plan: Digital Citizenship & Online Safety — new top-level path

**Slug:** `feat-digital-citizenship-path`
**Date:** 2026-08-31
**Status:** approved

---

## Request

> feat: Digital Citizenship & Online Safety — new top-level path
>
> Add a third top-level path — Digital Citizenship & Online Safety — alongside Blocks and Brain
> Training. Scenario/quiz-style puzzles teaching kids ages 5–14 how to be safe, kind, and smart
> online. Zero game-engine changes — reuses the existing thinking-path puzzle infrastructure
> (multiple-choice, true/false, pattern-match), not the Blockly/game-grid engine.
>
> MVP worlds: Password Planet (5–7), Privacy Cove (8–10), Kindness Kingdom (8–10), Scam
> Detectors (11–14). Reuse the shared XP/star pool. Full EN/ID translation required.
>
> (Full text: GitHub issue mazipan/coding-kids#85)

---

## Decision

Add `/app/safety` as a third path, structurally parallel to `/app/thinking`: its own world/lesson
data files, its own `SafetyHome`/`SafetyLessonScreen` route screens, and its own entry in every
place the codebase currently special-cases exactly two paths (`PathSelector`, `Header`,
`StatsModal`, `progressStats.ts`, `App.tsx` routing). It shares the **same puzzle type system**
already used by the thinking path (`pattern`, `if-then`, `true-false`, `match`, `abstraction`,
`multi-step`, etc.) via a new `SafetyPuzzle` alias equal to `ThinkingPuzzle` — the puzzle shapes
are domain-agnostic, so no new puzzle types are needed. To avoid duplicating ~800 lines of puzzle
rendering, the twelve `*PuzzleView` components and the answer-checking logic are extracted out of
`ThinkingLesson.tsx` into a new shared, domain-agnostic module that both `ThinkingLessonScreen`
and the new `SafetyLessonScreen` import.

MVP ships 4 worlds × 10 lessons (tier one only, numbers 0–9) — no tier-two/advanced lessons yet,
matching how every other domain in this codebase (blocks worlds, thinking worlds) was built out
incrementally across multiple plans rather than shipped complete on day one. A follow-up plan can
add tier two (10–19) and additional worlds once the MVP format is validated, exactly as
`thinkingLessonsAdvanced/` followed `thinkingLessons/` for the existing 14 worlds.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Generalize `ThinkingHome`/`ThinkingLessonScreen` to take a `basePath` prop and drive both `/app/thinking` and `/app/safety` off one set of components/one `ThinkingWorldId` union | Would require the "thinking" domain's types and routes to represent a conceptually different subject (digital safety), and risks regressing the existing, tested thinking path for a codebase-cleanliness gain. The two-path split (blocks vs. thinking) already set the precedent of parallel domains over a single generalized one — see `.ai/decisions/log/2026-08-07-10-two-parallel-learning-paths-app-blocks-and-app-thinking.md`. |
| Fully duplicate `ThinkingLesson.tsx`'s ~800 lines of puzzle-view components into a new `SafetyLesson.tsx` | Real, near-term duplication risk: any future puzzle-rendering bug fix or visual tweak would need to land in two places, and the two would drift the way `THINKING_COLOR_MAP` already drifted before (`.ai/specs/worlds.md`, "three worlds shipped mis-themed"). Extraction is justified reuse, not premature abstraction — twelve non-trivial, already-implemented components are the textbook case for it. |
| Model this as a 5th–8th **thinking world** instead of a new path | Rejected in the originating issue and by the parent/teacher framing: digital safety is a distinct trust/marketing message worth its own hub card and landing-page mention, not one card in an existing 14-world grid. |
| Ship all 4 worlds with the full 20-lesson (tier one + two) depth immediately | Doubles the content-authoring and content-audit surface of this one plan for no MVP benefit; every existing thinking world was built tier-by-tier across separate plans/decisions. Keep this plan scoped to tier one. |
| Reuse the exact `thinking.*` translation keys (`thinking.correct`, `thinking.attempt`, etc.) in the new safety screens rather than adding a parallel `safety.*` set | The rendered English/Indonesian text is already domain-neutral ("Correct!", "Wrong, try again!") — only the *key name* says "thinking". Renaming the prefix to something neutral like `puzzle.*` would touch ~20 keys and every call site in the already-tested `ThinkingLesson.tsx`, for a naming-only gain. Reusing the keys as-is is the lower-risk choice; recorded here so it's a deliberate call, not an oversight. |

---

## Content audit (per `.ai/agents/planner.md` step 5 — required because this plan adds lessons)

This is a brand-new domain, so there is no existing-world content to collide with directly.
Cross-checked against `.ai/specs/worlds.md`'s "Common failure patterns to avoid" and "Overused
scenarios" list (rain→wet, apples in baskets, cats vs. dogs) — none of the content below reuses
those. Within each new world:

- **INV-Q1 (mechanic + scenario uniqueness):** every lesson below pairs a distinct puzzle
  mechanic with a distinct concrete scenario; no two lessons in the same world repeat both.
- **INV-Q2 (cross-world scenario freshness):** no scenario is reused across the four new worlds
  from the same angle (e.g. "a stranger asks for your address" appears only in Privacy Cove;
  Password Planet's stranger scenario is about a secret code, a genuinely different angle).
- **INV-Q3 (true/false balance):** the `true-false` answer sequence in encounter order is checked
  per world below and contains no run of 3+ identical answers.
- **INV-Q4 (plausible distractors):** every option below is something a child of the target age
  could plausibly pick — no nonsense filler.
- **INV-Q5 (real difficulty curve):** lessons 0–4 are single-fact recognition; lessons 5–9 add a
  reason to hesitate (a nice-sounding stranger, "already knows your name", perfect grammar,
  hacked-but-familiar accounts) rather than bigger numbers or longer text.

### World: `passwords` — Password Planet — ages 5–7 — colour `yellow`

Concept: secrets and strong codes; never share real personal info out loud.

| # | Type | Scenario (mechanic) | Correct answer |
|---|------|---------------------|-----------------|
| 0 | if-then | A game "buddy" asks for your birthday to "unlock a prize" | Don't tell — ask a grown-up first |
| 1 | true-false | "`password123` is a strong secret code" | **False** |
| 2 | match | Match 3 info types (real name, favourite colour, home address) to "safe to share" / "keep secret" | — |
| 3 | true-false | "A strong secret code mixes letters, numbers, and is something only you know" | **True** |
| 4 | if-then | Choosing a new device code: pet's name / `1234` / a made-up word+numbers / your full name | Made-up word + numbers |
| 5 | true-false *(harder)* | "Even if a message says 'I'm your friend's mum', you should still ask a grown-up before sharing your address" | **True** |
| 6 | if-then *(harder)* | Someone keeps rephrasing the same personal question three different ways in a game chat | Tell a trusted adult, don't just keep dodging alone |
| 7 | true-false | "Sharing your school's name in your game profile is fine" | **False** |
| 8 | abstraction (odd-one-out) | Username / favourite game / home phone number / favourite colour | Home phone number is the odd one out (unsafe to share) |
| 9 | if-then *(harder, capstone)* | A pop-up says "Enter your parent's password to keep playing!" | Stop, don't type anything, get a grown-up |

True/false sequence (lessons 1,3,5,7): F, T, T, F — no run of 3.

### World: `privacy` — Privacy Cove — ages 8–10 — colour `slate`

Concept: what's safe to share online vs. what to keep private.

| # | Type | Scenario | Correct answer |
|---|------|----------|-----------------|
| 0 | if-then | A new online friend asks what school you go to | "I don't share that, let's just play!" |
| 1 | true-false | "Your gamer username can be different from your real name" | **True** |
| 2 | sort *(custom prompt)* | Order info from safest-to-share → most private: favourite game → nickname → city → full home address | as listed |
| 3 | true-false | "It's fine to post your house number so friends can find your street" | **False** |
| 4 | abstraction (category-match) | 6 info items → select the ones that must stay private | school name, address, phone number |
| 5 | true-false *(harder)* | "Turning off location tags before posting a photo helps, even if the photo looks harmless" | **True** |
| 6 | if-then *(harder)* | An app wants your contacts list "just to let you draw pictures" | Decline / ask a grown-up — permission doesn't match what the app does |
| 7 | true-false | "If a site already has your name, it's fine to also give it your address" | **False** |
| 8 | multi-step (2 steps) | Step 1: what's safe in a public profile? (nickname). Step 2: what stays private? (school name) | as listed |
| 9 | if-then *(harder, capstone)* | A platform default-shares your real name/city with strangers unless you change a setting | Check/change the privacy setting, ask a parent to help |

True/false sequence (1,3,5,7): T, F, T, F — no run of 3.

### World: `kindness` — Kindness Kingdom — ages 8–10 — colour `pink`

Concept: being kind online, recognizing unkindness, being an "upstander" not a bystander.

| # | Type | Scenario | Correct answer |
|---|------|----------|-----------------|
| 0 | if-then | Someone posts a mean comment about a friend's drawing in game chat | Tell them it hurt, or report it — not join in, not ignore silently |
| 1 | true-false | "Typing something online you'd never say to someone's face is still unkind" | **True** |
| 2 | match | Match reactions (mean comment / kind comment / teasing / encouragement) to "helps" / "hurts" | — |
| 3 | true-false | "It's okay to share a screenshot of a private chat to embarrass someone" | **False** |
| 4 | if-then | A classmate is being teased in a group chat | Don't join in; support them / tell a trusted adult |
| 5 | true-false *(harder)* | "Staying silent while someone is bullied, without joining in, still means no one is helped" | **True** |
| 6 | abstraction (odd-one-out) | 4 replies to a friend's sad post, 3 supportive + 1 mean | The mean one |
| 7 | true-false | "Waiting a bit before replying when you're upset can help you avoid saying something you regret" | **True** |
| 8 | multi-step (2 steps) | Step 1: what NOT to do with a friend's mean DM (forward it to laugh). Step 2: what TO do (screenshot + tell a trusted adult) | as listed |
| 9 | if-then *(harder, capstone)* | Everyone in a group chat starts making fun of one kid | Privately support them + tell an adult — not silence, not just leaving unnoticed |

True/false sequence (1,3,5,7): T, F, T, T — last two adjacent but only 2 in a row, no run of 3.

### World: `scams` — Scam Detectors — ages 11–14 — colour `red`

Concept: recognizing phishing/scam red flags, verifying before acting.

| # | Type | Scenario | Correct answer |
|---|------|----------|-----------------|
| 0 | if-then | "You won a free game console! Click here now!" | Don't click — ask an adult |
| 1 | true-false | "A real prize you actually entered to win would never ask for a 'small fee' first" | **True** |
| 2 | abstraction (odd-one-out) | 3 phishing-style messages (urgent / too-good / asks for password) + 1 normal app-update notice | The normal notice is the odd one out |
| 3 | true-false | "Scam messages always have spelling mistakes, so perfect grammar means a message is safe" | **False** |
| 4 | if-then *(harder)* | A message claims to be from school, but the link's address doesn't match the school's real site | Check the actual URL/domain before clicking |
| 5 | multi-step (2 steps) | Step 1: is "your account will be deleted in 1 hour" urgency a red flag? (yes). Step 2: the link goes to a look-alike domain — what do you do? (don't click, report it) | as listed |
| 6 | true-false *(harder)* | "If a friend's account suddenly sends a weird link out of character for them, it could be hacked" | **True** |
| 7 | abstraction (category-match) | Sort message snippets into "red flag" vs. "normal" | urgency language, password request, shortened suspicious link = red flags |
| 8 | if-then *(harder)* | Not sure if a link is safe — what's the smartest move before clicking? | Check the real address / ask an adult / don't click at all |
| 9 | multi-step *(harder, capstone)* | Step 1: spot the scam signal in a sample message (urgency + prize + link). Step 2: pick the right action (don't click, tell an adult, don't reply) | as listed |

True/false sequence (1,3,6): T, F, T — no run of 3.

XP rewards follow the existing thinking-lesson convention: 10–15 XP for lessons 0–4, 15–25 XP for
lessons 5–9 (`.ai/specs/worlds.md` → "Adding a new thinking lesson", step 8).

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | Fully static content, same as thinking path. |
| INV-P2 no data exfiltration | no | Same local-only progress store. |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | Reuses `completeLesson` unchanged. |
| INV-PR2 stars are best-of | no | Reuses existing write rules unchanged. |
| INV-PR3 XP is delta-only | no | Reuses existing write rules unchanged. |
| INV-PR4 badges are permanent | no | No new badge IDs in this MVP. |
| INV-L1 sequential lesson unlock | yes | Safety lesson IDs follow `{worldId}-{number}`, so the existing generic `isLessonAvailable` in `useProgress.ts` already handles them correctly (verify, no code change expected) — falls into the same "lesson 1 needs lesson 0 completed" branch as thinking worlds, since safety world IDs are not in `BLOCKS_WORLD_IDS`. |
| INV-L2 blocks path has no world-level lock | no | Does not touch the blocks path. |
| INV-L3 thinking worlds always unlocked | yes | This invariant needs its wording generalized to cover the new safety worlds too — see Spec changes below. Every new `SafetyWorld` must set `unlockAtXP: 0`. |
| INV-G1–G4 game engine | no | No game-grid/Blockly involvement. |
| INV-C1 TypeScript strict | yes | `tsc -b` must pass with the new types/files — standard build gate, no exception needed. |
| INV-C2 no hardcoded strings | yes | All new UI chrome goes through `t()`; all world/lesson content is `LocalizedString` with both `en`/`id` provided. |
| INV-C3 build passes | yes | Standard gate. |
| INV-C4 localStorage only | no | No new storage key — safety lesson progress lives in the existing `progress.lessons` map, keyed by lesson id, exactly like thinking lessons. |
| INV-I1 all keys have EN value | yes | New `path.safety.*` keys need both `en` and `id`. |
| INV-I2 no language-specific layout | yes | Follow existing thinking-path puzzle components verbatim (already handle this); no new layout patterns introduced. |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/types/index.ts` | edit | Add `SafetyWorldId`, `SafetyWorld` (mirrors `ThinkingWorld` shape), `SafetyLesson` (mirrors `ThinkingLesson` shape), `SafetyPuzzle = ThinkingPuzzle` alias. |
| `src/data/safetyWorlds/passwords.ts`, `privacy.ts`, `kindness.ts`, `scams.ts`, `index.ts` | add | One file per world (mirrors `src/data/thinkingWorlds/`), `SAFETY_WORLDS` array + `getSafetyWorld(id)` helper in `index.ts`. |
| `src/data/safetyLessons/passwords.ts`, `privacy.ts`, `kindness.ts`, `scams.ts`, `index.ts` | add | One file per world, 10 lessons each per the content audit above (mirrors `src/data/thinkingLessons/`). `index.ts` exports `SAFETY_LESSONS`, `getSafetyLessonByNumber`, `getSafetyLessonsByWorld`. |
| `src/data/worldColorThemes.ts` | add | New shared module: extract `getWorldTheme(color)` out of `ThinkingHome.tsx`, add the 4 new colours (`yellow`, `slate`, `pink`, `red`) alongside the existing 14. |
| `src/screens/ThinkingHome.tsx` | edit | Remove the local `getWorldTheme` function; import it from `worldColorThemes.ts` instead. No behavior change. |
| `src/screens/SafetyHome.tsx` | add | Mirrors `ThinkingHome.tsx` structure (world map view + world detail/lesson-list view), reads `SAFETY_WORLDS`/`getSafetyLessonsByWorld`, routes under `/app/safety/...`, imports the shared `getWorldTheme`. Exports `SafetyHomeWithProgress`. |
| `src/components/PuzzlePlayer.tsx` | add | Extract the 12 `*PuzzleView` components and the `isAnswerCorrect` switch out of `ThinkingLesson.tsx` verbatim (domain-agnostic — no `Thinking`-specific types in their props beyond the puzzle union itself, which is what `SafetyPuzzle` aliases). |
| `src/screens/ThinkingLesson.tsx` | edit | Replace the now-extracted view components and `isAnswerCorrect` with imports from `PuzzlePlayer.tsx`. Keep `ThinkingLessonScreen`'s header/tutorial/mascot/completion chrome and `/app/thinking/...` navigation exactly as-is. |
| `src/screens/SafetyLesson.tsx` | add | Mirrors `ThinkingLessonScreen`'s wrapper chrome (header, tutorial card, mascot message, completion card), imports the same views from `PuzzlePlayer.tsx`, navigates under `/app/safety/...`. Reuses the existing `thinking.*` translation keys for puzzle-interaction chrome (see Alternatives considered). Exports `SafetyLessonScreen`. |
| `src/store/useProgress.ts` | no code change expected | Verify `isLessonAvailable`/`BLOCKS_WORLD_IDS` behave correctly for the new safety world IDs (they should, since the function is already generic over any `{worldId}-{number}` id not in `BLOCKS_WORLD_IDS`). |
| `src/utils/progressStats.ts` | edit | Extend `PathId` to `'blocks' \| 'thinking' \| 'safety'`. Add `safetyWorldStats(progress)` (mirrors `thinkingWorldStats`). Add `safety: PathStats` to `AllStats`. Update `getPathStats` and `getAllStats` to include it in totals. |
| `src/screens/PathSelector.tsx` | edit | Add a third card for the safety path (`/app/safety`), a `hasSafetyProgress` check (lesson IDs starting with `passwords-`, `privacy-`, `kindness-`, or `scams-`), and widen the grid to accommodate 3 cards (e.g. `sm:grid-cols-2 lg:grid-cols-3`). |
| `src/App.tsx` | edit | Add `/app/safety` route group mirroring `/app/thinking`'s exactly: index (`SafetyHomeWithProgress`), `world/:worldId` (new `SafetyWorldRoute`), `world/:worldId/:lessonNumber` (new `SafetyLessonRoute`) — same shape as `ThinkingWorldRoute`/`ThinkingLessonRoute`. |
| `src/components/Header.tsx` | edit | Extend the `subPath === 'blocks' \| 'thinking'` checks to include `'safety'`; add the safety path name label; extend `hideLabel` on `XPBar` to also hide for `'safety'` (same reasoning as thinking — the coding-themed level name is irrelevant); generalize the 2-way `defaultStatsPath` comparison to a 3-way pick among blocks/thinking/safety stars. |
| `src/components/StatsModal.tsx` | edit | Extend `PATH_ACCENT`/`PATH_EMOJI` (keyed by `PathId`) with a `safety` entry; extend the tab list from `['blocks','thinking']` to `['blocks','thinking','safety']`; replace the `activePath === 'blocks' ? ... : ...` ternaries with a small `statsForPath(stats, path)` helper now that there are 3 branches. |
| `src/screens/LandingScreen.tsx` | edit | Replace the local `THINKING_COLOR_MAP` with the shared `worldColorThemes.ts` module (removes a second source of the exact drift risk the codebase already flagged once). Add a landing-page mention of the new Digital Citizenship path (a feature card or path blurb, matching how Blocks/Thinking are already introduced) — this is the page parents/teachers actually read. Check and update the hardcoded `landing.worlds.title` count string per the existing gotcha in `.ai/specs/worlds.md`. |
| `src/i18n/translations.ts` | edit | Add `path.safety.name`, `path.safety.desc` (EN + ID). World/lesson content itself is inline `LocalizedString`, not translation keys — no per-lesson keys needed. |
| `scripts/audit-thinking-lessons.mjs` | edit | Generalize to also validate the new `SAFETY_LESSONS`/`SAFETY_WORLDS` dataset (loop the existing check functions over both `{lessons, worlds}` pairs instead of only the thinking one). Make the tier-two XP-rise check conditional/skippable for a world with no advanced tier yet (safety has none in this MVP). Keep the `bun run audit-lessons` script name unchanged in `package.json`. |
| `.ai/specs/invariants.md` | edit | Generalize INV-L3's title/text to cover safety worlds too (see Spec changes below). |
| `.ai/specs/worlds.md` | edit | New "Safety worlds (Digital Citizenship path)" section (catalog table + "Adding a new safety world/lesson" recipes) — see Spec changes below. |
| `.ai/specs/store.md` | edit | Note the third path in the "Derived stats" section. |
| `tests/safetyWorldsContent.test.ts` | add | Mirrors the checks in the existing `tests/thinkingWorldsContent.test.ts` (colour registered in the shared theme map, contiguous lesson numbering, etc.), adapted for the safety domain. Builder: read the existing test first and match its structure/assertions. |
| `README.md` | edit | Update path/world counts if listed, per the existing convention noted in `.ai/specs/worlds.md`. |

---

## Spec changes

### `.ai/specs/invariants.md`

Replace:

```
**INV-L3 — Thinking worlds are always unlocked**
All thinking worlds (`patterns`, `logic`, `counting`, `memory`, `nature`, `numbers`, `decomposition`, and every world added since) have `unlockAtXP: 0` and are accessible from the moment a player enters the thinking path. XP earned in either path contributes to the shared pool, but thinking worlds must never be gated by XP. Any new thinking world added in the future must also have `unlockAtXP: 0`.
```

With:

```
**INV-L3 — Thinking and safety worlds are always unlocked**
All thinking worlds (`patterns`, `logic`, `counting`, `memory`, `nature`, `numbers`, `decomposition`, and every world added since) and all safety worlds (`passwords`, `privacy`, `kindness`, `scams`, and every world added since) have `unlockAtXP: 0` and are accessible from the moment a player enters that path. XP earned in any path contributes to the shared pool, but neither thinking nor safety worlds may ever be gated by XP. Any new thinking or safety world added in the future must also have `unlockAtXP: 0`.
```

### `.ai/specs/worlds.md`

Add a new top-level section after "Thinking worlds (Brain Training path)", following that
section's exact structure:

```markdown
## Safety worlds (Digital Citizenship path)

Source: `src/data/safetyWorlds/` — one file per world, assembled into the `SAFETY_WORLDS` array by
`index.ts`. Lessons: `src/data/safetyLessons/` — one file per world, assembled into `SAFETY_LESSONS`
by its own `index.ts`. Same shapes as the thinking path's `ThinkingWorld`/`ThinkingLesson` — see
`SafetyWorld`/`SafetyLesson` in `src/types/index.ts` — and the same `ThinkingPuzzle` union
(aliased as `SafetyPuzzle`), rendered by the shared `src/components/PuzzlePlayer.tsx` views.

| ID | Emoji | Concept | Ages | Colour | unlockAtXP | Lessons |
|----|-------|---------|------|--------|------------|---------|
| passwords | 🔑 | Secrets & strong codes | 5–7 | yellow | 0 | 10 |
| privacy | 🏝️ | What's safe to share | 8–10 | slate | 0 | 10 |
| kindness | 💛 | Being kind online | 8–10 | pink | 0 | 10 |
| scams | 🕵️ | Spotting scams & phishing | 11–14 | red | 0 | 10 |

All safety worlds are unlocked from the start (INV-L3), same as thinking worlds. This MVP ships
tier one only (lessons 0–9); a tier-two `safetyLessonsAdvanced/` directory (lessons 10–19) can be
added later following the same pattern as `thinkingLessonsAdvanced/`.

### Adding a new safety world / lesson

Follow "Adding a new thinking world" / "Adding a new thinking lesson" above exactly, substituting
`Safety` for `Thinking` and `src/data/safetyWorlds/` / `src/data/safetyLessons/` for the thinking
equivalents. The same colour-registration rule applies — register any new colour once in the
shared `src/utils/worldColorThemes.ts` module (both `ThinkingHome`, `SafetyHome`, and
`LandingScreen` read from it, so there is only one place to update, not two). Run `bun run
audit-lessons` — it now checks both the thinking and safety datasets.
```

(Also update the existing "Adding a new thinking world" step 4's cross-reference — note that colour
registration now lives in the shared module, not two separate maps.)

### `.ai/specs/store.md`

Under "Derived stats — what the player actually sees", append:

```markdown
A third path, `safety` (Digital Citizenship), is scored identically to `thinking` — every safety
lesson is worth up to 3 stars, scored by attempt count, and safety worlds are never XP-gated
(INV-L3). `AllStats` carries `blocks`, `thinking`, and `safety` as separate `PathStats`, summed
for the combined total.
```

---

## Implementation steps

1. Add `SafetyWorldId`, `SafetyWorld`, `SafetyLesson`, and the `SafetyPuzzle = ThinkingPuzzle` alias to `src/types/index.ts`.
2. Extract `getWorldTheme` from `src/screens/ThinkingHome.tsx` into `src/utils/worldColorThemes.ts`, add the 4 new colours (`yellow`, `slate`, `pink`, `red`), and update `ThinkingHome.tsx` to import it. Run `bun run build` — thinking path must render identically (no visible change).
3. Extract the 12 `*PuzzleView` components and `isAnswerCorrect` out of `src/screens/ThinkingLesson.tsx` into `src/components/PuzzlePlayer.tsx`. Update `ThinkingLesson.tsx` to import from it. Run `bun run build` and manually spot-check a couple of thinking lessons still render/play correctly (no visible change expected).
4. Create `src/data/safetyWorlds/{passwords,privacy,kindness,scams}.ts` + `index.ts` (`SAFETY_WORLDS`, `getSafetyWorld`), using the world table in the Spec changes section above (emoji, tagline, concept, ageRange as `LocalizedString`/strings — write real EN/ID copy, not placeholders).
5. Create `src/data/safetyLessons/{passwords,privacy,kindness,scams}.ts` + `index.ts` (`SAFETY_LESSONS`, `getSafetyLessonByNumber`, `getSafetyLessonsByWorld`), authoring the 40 lessons (10 per world) from the content audit tables above — full bilingual `LocalizedString` copy, correct puzzle-type payloads per `.ai/specs/worlds.md`'s puzzle authoring constraints table, XP per the 0–4 / 5–9 convention.
6. Create `src/screens/SafetyHome.tsx` (mirrors `ThinkingHome.tsx`) and `src/screens/SafetyLesson.tsx` (mirrors `ThinkingLessonScreen`, importing views from `PuzzlePlayer.tsx` and reusing the existing `thinking.*` chrome translation keys), routing under `/app/safety/...`.
7. Add the `/app/safety` route group to `src/App.tsx` (`SafetyWorldRoute`, `SafetyLessonRoute`, mirroring the thinking route components exactly).
8. Add `path.safety.name` / `path.safety.desc` to `src/i18n/translations.ts` (EN + ID), and add the third card to `src/screens/PathSelector.tsx`.
9. Extend `src/utils/progressStats.ts`: `PathId`, `safetyWorldStats`, `AllStats.safety`, `getPathStats`/`getAllStats`.
10. Update `src/components/Header.tsx` (subPath checks, label, `hideLabel`, 3-way `defaultStatsPath`) and `src/components/StatsModal.tsx` (`PATH_ACCENT`/`PATH_EMOJI`, tab list, `statsForPath` helper).
11. Update `src/screens/LandingScreen.tsx`: swap `THINKING_COLOR_MAP` for the shared `worldColorThemes.ts` module, add the Digital Citizenship path mention, update the `landing.worlds.title` count.
12. Generalize `scripts/audit-thinking-lessons.mjs` to validate both the thinking and safety datasets; keep the `audit-lessons` `package.json` script name unchanged.
13. Add `tests/safetyWorldsContent.test.ts` mirroring `tests/thinkingWorldsContent.test.ts`.
14. Update `README.md` world/path counts if present.
15. Apply the drafted spec changes to `.ai/specs/invariants.md`, `.ai/specs/worlds.md`, `.ai/specs/store.md`.
16. Run `bunx biome ci`, `bun run type-check`, `bun run build`, `bun run audit-lessons`, and `bun test` — all must pass before committing.
17. Manually play through at least one full lesson in each of the 4 new worlds in the dev server (`bun run dev`) — confirm unlock sequencing (lesson 1 open, lesson 2 locked until lesson 1 completes), star scoring by attempt count, XP/level updates in the header, and that `/app/safety` and the PathSelector card both work end to end.

---

## Rollback

All new code is additive (new files, new route branch, new `PathId` union member, new translation
keys) except for the `ThinkingHome.tsx`/`ThinkingLesson.tsx` extraction refactors and the shared
colour-theme module, which are behavior-preserving refactors of existing, working code. If a
regression appears: revert the commit(s) for this plan. No localStorage migration is needed —
`progress.lessons` already stores arbitrary lesson-id keys, so removing the safety world files
and routes leaves any already-recorded `passwords-0` etc. entries inert (ignored by every other
screen) rather than corrupting the store.

---

## Review notes

**Plan review (reviewer-code, pre-build) — 2026-08-31 — PASS**

Checked against `.ai/harness/workflow.md`'s plan-review criteria:

- **Scope clearly bounded** — yes. MVP is explicitly capped at 4 worlds × 10 lessons (tier one
  only), no new badge IDs, no tier-two content, exact file list enumerated.
- **Invariants preserved** — yes. INV-L3 needs a wording generalization (drafted below); every
  other applicable invariant is either unaffected or covered by the standard build gates
  (INV-C1–C4, INV-I1). INV-L1 unlock sequencing was verified against the actual
  `isLessonAvailable` implementation in `src/store/useProgress.ts` — it is already generic over
  any `{worldId}-{number}` id not in `BLOCKS_WORLD_IDS`, so no code change is needed there, only
  verification during build.
- **Spec changes drafted** — yes, inline in this plan (`invariants.md`, `worlds.md`, `store.md`).
- **Decision log entry included** — yes,
  `.ai/decisions/log/2026-08-31-01-third-parallel-path-digital-citizenship.md`.
- **Content audit** — the 40-lesson MVP content table was checked lesson-by-lesson against
  INV-Q1–Q5 (see "Content audit" section above); true/false answer sequences were traced per world
  and none contain a run of 3+ identical answers.

No changes requested. Status → `approved`, ready for Build.

---

## Implementation notes

{Filled in by builder after implementation.}
