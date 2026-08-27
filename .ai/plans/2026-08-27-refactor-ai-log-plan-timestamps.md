# Plan: Timestamp-prefixed plan/log filenames, one file per decision

**Slug:** `refactor-ai-log-plan-timestamps`
**Date:** 2026-08-27
**Status:** done

---

## Request

> For AI plans and logs, need to have timestamp as prefix in the filename, so it can sorted better.
> for logs, need to split each log for different file.
> maybe create dir for it

---

## Decision

Two changes to the `.ai/` conventions, both purely mechanical (no `src/` change):

1. **Plans** — every file in `.ai/plans/` is renamed from `{type}-{short-description}.md` to
   `{YYYY-MM-DD}-{type}-{short-description}.md`, using each plan's own `**Date:**` field (or, for the two
   older plans predating that field, the date of the commit that first added the file). A directory listing
   now sorts chronologically instead of alphabetically by slug.
2. **Decisions** — `.ai/decisions/log.md` (one 500+ line file, 29 entries appended over time) is replaced
   by `.ai/decisions/log/`, one file per decision named `{YYYY-MM-DD}-{NN}-{slug}.md`. `NN` is a two-digit
   per-day sequence number, always present (even for a lone entry that day) so the pattern stays
   predictable — several days in the existing log have 10 same-day entries with no other way to order them.
   A `log/README.md` documents the convention and replaces the format block that used to live inline in
   `log.md`.

`.ai/plans/_template.md` keeps its bare filename (it isn't a dated instance of anything). All 29 existing
decisions were mechanically split via a one-off script (`/tmp/.../split_log.py`, not committed) that parsed
`## {date} — {title}` headers and `---` separators out of the original file — content is preserved verbatim
per entry, only the heading level changed from `##` to `#` since each entry is now its own document.

Every doc that names the old path pattern (`agents.md`, `.ai/harness/workflow.md`, `.ai/agents/planner.md`,
`.ai/agents/builder.md`, `.ai/specs/worlds.md`, `.ai/specs/invariants.md`,
`.github/pull_request_template.md`) is updated to the new one. Cross-references from one plan file to
another (e.g. `content-more-world-ideas.md` cited by four later plans as "roadmap priority N") were updated
to the new filenames so the links keep resolving. References to `.ai/decisions/log.md` *inside already-`done`
historical plan files* were left untouched — those are records of what that plan instructed at the time,
not live pointers, and rewriting finished history is out of scope.

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Keep `log.md` as one file, just reorder entries newest-first consistently | Doesn't satisfy "split each log for different file" — the request is explicit, and a single growing file is exactly what makes it hard to review one decision (or `git blame` one) in isolation. |
| Encode a full timestamp (`YYYY-MM-DDTHHMM`) instead of date + sequence | No entry has ever recorded a time, and inventing one at split-time would be fabricated precision. A `NN` sequence sorts identically and is honest about what's actually known. |
| Rename plans to `{date}-{NN}-{slug}.md` (sequence number) like the log entries | Plan slugs are already unique (`{type}-{short-description}` never collides in this repo), so a sequence number would be redundant noise. The log entries needed it because titles alone don't appear in the filename convention until this change. |
| Drop `.ai/decisions/log.md` entirely with no replacement pointer | Several docs (`invariants.md`, `worlds.md`, historical plans) link to it by name; a `log/README.md` gives new readers the same "start here" entry point the old file's intro served. |

---

## Invariants check

Pure `.ai/` documentation and file-organization change — no `src/` file was touched, so every product,
progress, engine, and i18n invariant is unaffected.

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no | |
| INV-P2 no data exfiltration | no | |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | |
| INV-PR1 progress never decreases | no | |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | no | |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | no | no `src/` or `.ts`/`.tsx` file touched |
| INV-C2 no hardcoded strings | no | |
| INV-C3 build passes | no | `bun run build` re-verified anyway, see below |
| INV-C4 localStorage only | no | this is about `.ai/` docs, not runtime storage |
| INV-I1 all keys have EN value | no | |
| INV-I2 no layout assumptions | no | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `.ai/plans/*.md` (21 files) | rename | prefix each with its `**Date:**` (or first-commit date for the 2 undated ones) |
| `.ai/decisions/log.md` | delete | content migrated below |
| `.ai/decisions/log/{date}-{NN}-{slug}.md` (29 files) | add | one per decision, split from `log.md` |
| `.ai/decisions/log/README.md` | add | filename convention + entry format + "how to add one" |
| `agents.md` | edit | directory tree: `log.md` → `log/`, `{slug}.md` → `{date}-{slug}.md` |
| `.ai/harness/workflow.md` | edit | plan artifact paths, plan-naming section, decision-record rule, PR table |
| `.ai/agents/planner.md` | edit | plan/decision-log output paths |
| `.ai/agents/builder.md` | edit | plan input path |
| `.ai/specs/worlds.md` | edit | "add a decision log entry" instructions now point at `log/` |
| `.ai/specs/invariants.md` | edit | INV-C4 decision-record pointer |
| `.github/pull_request_template.md` | edit | plan-file-link example path |
| plan files that cite another plan by filename (`2026-08-15-content-planning-peaks-chance-camp.md`, `2026-08-22-feat-coordinate-cove-world.md`, `2026-08-22-feat-spatial-puzzle-prototype.md`, `2026-08-11-content-more-world-ideas.md`, `2026-08-14-feat-code-orchestra-world.md`, `2026-08-09-fix-pattern-emoji-overlap.md`, `2026-08-22-feat-eco-city-world.md`, `2026-08-14-fix-biome-deprecated-preset.md`) | edit | update cross-referenced filenames to the new dated names |
| `.ai/decisions/log/2026-08-26-01-character-emoji-fix-backwards-facing-glyphs-swap-a-non.md` | edit | its "Plan:" pointer updated to the renamed plan file |

---

## Spec changes

None. This only touches `.ai/agents/`, `.ai/harness/`, `.ai/plans/`, `.ai/decisions/`, and root `agents.md` —
no `.ai/specs/store.md`, `worlds.md` table content, or `i18n.md` change (the two `worlds.md` edits are
process-instruction wording, not the spec's actual table data).

---

## Implementation steps

1. For each plan file, read its `**Date:**` field (or, for the two files without one,
   `git log --diff-filter=A --follow --format=%ad --date=short -- <file>`) and `git mv` it to
   `{date}-{original-filename}`.
2. Split `.ai/decisions/log.md` into `.ai/decisions/log/{date}-{NN}-{slug}.md` per entry, preserving body
   text verbatim and converting the `## ` heading to `# `. Write `.ai/decisions/log/README.md` from the
   format block that used to live inline in `log.md`. `git rm` the old `log.md`.
3. Update every doc that references the old `.ai/plans/{slug}.md` / `.ai/decisions/log.md` patterns to the
   new ones (see Files to change).
4. Update the handful of plan-to-plan cross-references and the one decision-log-to-plan cross-reference so
   they still resolve after the renames.
5. Run `bunx biome ci`, `bun run type-check`, `bun run build` — none should be affected since no `src/` file
   changed, but the harness rule requires all three green before any commit.

---

## Rollback

`git revert` the commit. Every plan and log file move was a `git mv`/`git rm`+`git add` (not a delete +
recreate under a different history), so `git log --follow` on any individual plan or decision file still
walks back through the rename.

---

## Review notes

Single-pass session: plan, build, and self-review against `.ai/specs/invariants.md` and the plan itself
were done in one sitting rather than as separate reviewer-code / reviewer-kid agent invocations, since the
change carries zero product or gameplay surface for reviewer-kid to evaluate and reviewer-code's checklist
(TypeScript, i18n, bundle, invariants) has nothing to check with no `src/` diff. The invariant table above
and the verification commands below cover what reviewer-code would have.

---

## Implementation notes

- Two plans predate the `**Date:**` field: `feat-world-onboarding-intro.md` (dated `2026-08-02` from its
  first commit) and `feat-penalaran-matematika-thinking-paths.md` (dated `2026-08-09`).
- The decision-log split found 29 real entries (one `## YYYY-MM-DD — {title}` block in the middle of the
  old file was the format documentation's own example heading, not a real entry — it was excluded and its
  surrounding text became `log/README.md` instead).
- `bunx biome ci`, `bun run type-check`, and `bun run build` all pass — expected, since this change touches
  no `src/` file.
