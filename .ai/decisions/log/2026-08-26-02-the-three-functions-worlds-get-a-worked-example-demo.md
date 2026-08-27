# 2026-08-26 — The three functions worlds get a worked example; demo states become language-aware

**Context:** `BlocklyWalkthrough` picks its final button from one lookup — `world.id in DEMO_STATES`.
A world with an entry ends the teach phase with "👀 Show me an example!", injects a prebuilt workspace
and shows the demo card; a world without one ends with a bare "Let's go!" and closes. `DEMO_STATES`
covered `jungle, space, loops, ocean, caves, portal, cove`, while `getTeachSteps` covered those plus
`factory`, `orchestra` and `eco` — so exactly those three showed the degraded intro. (Time Portal was
never affected; it has had a demo since 937c965.) The three are precisely the worlds that teach
functions, and that is the reason for the gap: every existing demo is built from blocks that
serialize as plain JSON with shadow inputs, whereas a functions demo needs a
`procedures_defnoreturn` / `procedures_callnoreturn` pair where the call carries an `extraState` that
has to resolve against a definition already on the workspace. Nobody hand-wrote one. A second defect
sat in the same table: the ocean demo hardcoded the variable name `steps` while the diagram the child
had just read called it `langkah` in Indonesian.

**Decision:** Add the three missing demos and change `DEMO_STATES` from
`Partial<Record<string, object>>` to `Partial<Record<string, (lang) => object>>`, so the identifiers
inside an injected workspace are the names the teach diagram printed. Each new demo mirrors its own
world's diagram and, when run, wins that world's tutorial — the relationship the jungle, space and
portal demos already had with theirs. `factory` defines `move3Right`/`gerak3Kanan` (three moves)
and calls it twice: 6 moves on an 8-column grid, collecting the gears at columns 2 and 5.
`orchestra` puts a `repeat 2 × Move Right` *inside* `chorus`/`refrain` because that world teaches
"Loops & Functions", and calls it twice. `eco` keeps `district`/`distrik` a flat pair of moves
because it teaches decomposition and reuse, not looping — which also keeps the two capstone demos
structurally distinct. Both are 4 moves on a 5-column grid.

**Alternatives rejected:**
- Delete the demo branch and leave all three on "Let's go!" — functions are the hardest concept in
  the blocks path; dropping the worked example exactly there is backwards.
- Keep the table static and ship English procedure names — an Indonesian child reads
  "🔧 Fungsi: gerak3Kanan" in the diagram and then finds a block called `move3Right`. That
  contradiction is the bug, not a shortcut past it.
- Build the demo imperatively against the live `WorkspaceSvg` — needs Blockly calls inside a
  presentational component; the serialized-JSON table is the established shape.
- Make each demo the tutorial's minimal solution — `factory-0`'s optimum is 4 blocks (`moveTwo`
  twice), which never reaches the gear at column 5. Matching the diagram matters more than matching
  the optimum on a lesson whose thresholds are `[999, 999]`.
- Hoist the private teach-step table to module scope so the test could enumerate it — a ~390-line
  whitespace diff for a list. The test asserts the stronger, user-visible condition instead: every
  world shipping an `isTutorial` lesson must have a demo, since that is what makes a walkthrough
  mount at all.

**Consequences:** A procedure definition always occupies its own top-level stack, so a functions
demo is two stacks rather than one. `BlocklyWorkspace.loadState` now anchors the viewport with
`scroll(20, 20)` after loading, and each call stack sits close under its definition — verified at
393×852 that both stacks clear the walkthrough card, which sits along the bottom edge on a phone.
`tests/walkthroughDemos.test.ts` pins the coverage rule, that both languages build, that the four
name-carrying demos actually differ between them, and that all ten demo routes stay on their grid
and win their tutorial (INV-G1, INV-G2, INV-G3). No dependency, route, translation key or
persistence change. Still open, and out of scope here: `jurassic`, `parking`, `sorting` and
`debugging` ship no tutorial lesson, so they never show a walkthrough — and `getTeachSteps` would
silently serve them the jungle "sequences" slides if one were added.
