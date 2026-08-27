# 2026-08-27 — Plans and decisions get timestamp-prefixed filenames; decision log split one-file-per-entry

**Context:** `.ai/plans/*.md` filenames only ever encoded `{type}-{short-description}`, so a directory
listing sorted alphabetically by slug rather than by when the plan was written — `content-*` and
`feat-abstraction-world` sorted before `fix-header-stars-per-path` even though the latter is three weeks
newer. `.ai/decisions/log.md` had grown to 29 append-only entries in one 500+ line file, making it hard to
review, diff, or link to a single decision in isolation.

**Decision:** Renamed every file in `.ai/plans/` to `{YYYY-MM-DD}-{type}-{short-description}.md`, taking
the date from each plan's own `**Date:**` field (falling back to the file's first-commit date for the two
plans predating that field). Replaced `.ai/decisions/log.md` with `.ai/decisions/log/`, one file per
decision named `{YYYY-MM-DD}-{NN}-{slug}.md` — `NN` is a two-digit per-day sequence, always present, since
several days in the existing log had up to 10 entries on the same date with no other way to order them.
Added `.ai/decisions/log/README.md` documenting the convention (the format block that used to live inline
in `log.md`). Every process doc that named the old path patterns (`agents.md`, `workflow.md`, `planner.md`,
`builder.md`, `worlds.md`, `invariants.md`, the PR template) was updated to the new ones, and cross-plan /
decision-to-plan references were repointed at the renamed files.

**Alternatives rejected:**
- Reorder `log.md` newest-first and leave it as one file — doesn't satisfy the actual ask (split into
  separate files), and a single growing file is still hard to `git blame` or link to one decision.
- Fabricate a full `HH:MM` timestamp per log entry — no entry ever recorded a time; a sequence number sorts
  identically without inventing precision that was never captured.
- Give plan filenames the same `{date}-{NN}-{slug}` sequence-number treatment as log entries — unnecessary,
  since plan slugs (`{type}-{short-description}`) are already unique across the repo and a sequence number
  would be pure noise there.

**Consequences:** `.ai/plans/` and `.ai/decisions/log/` directory listings now sort chronologically by
default. Adding a new plan or decision follows the same pattern going forward (see
`.ai/harness/workflow.md` and `.ai/decisions/log/README.md`). Historical `done` plan files that mention the
old `.ai/decisions/log.md` path in their own body text (describing what they did at the time) were left
untouched — those are closed records, not live pointers. Plan:
`.ai/plans/2026-08-27-refactor-ai-log-plan-timestamps.md`.
