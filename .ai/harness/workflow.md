# Workflow — Plan → Build → Review

Every change to this codebase follows this lifecycle. No code ships without a plan. No plan ships without a review.

---

## Lifecycle stages

```
Request
  │
  ▼
[Planner] ──creates──► .ai/plans/{slug}.md  (status: draft)
                            │
                            ▼
                    [reviewer-code reviews plan]
                            │
                   pass     │     needs changes
                   ─────────┤─────────────────►  back to Planner
                            │
                            ▼
                    plan status: approved
                            │
                            ▼
                       [Builder]
                            │
                    implements + commits
                            │
                            ▼
                    plan status: in-review
                            │
                  ┌─────────┴─────────┐
                  ▼                   ▼
          [reviewer-code]      [reviewer-kid]
          code + invariants    UX + fun check
                  │                   │
          pass    │           pass    │
                  └─────────┬─────────┘
                            │
                   both pass │  any fails
                   ──────────┤──────────►  back to Builder
                            │
                            ▼
                    plan status: done
                     PR ready to merge
```

---

## Stage details

### 1. Plan (Planner agent)

See `.ai/agents/planner.md` for full instructions.

Minimum plan contains:
- What changed and why
- Files to be touched
- Invariants checked
- Implementation steps (ordered)
- Spec changes (drafted)
- Rollback approach

Artifact: `.ai/plans/{slug}.md` with `status: draft`

---

### 2. Plan review (reviewer-code)

The code reviewer reads the plan **before any code is written**. Checks:
- Is the scope clearly bounded?
- Does the plan preserve all applicable invariants?
- Are spec changes drafted?
- Is a decision log entry included?

If approved: plan status → `approved`  
If not: plan status → `needs-clarification`, specific questions listed in the plan's `## Review notes` section

---

### 3. Build (Builder agent)

See `.ai/agents/builder.md` for full instructions.

Builder follows the plan step by step. After implementation:
- `npm run build` passes
- Spec files updated
- Plan status → `in-review` with implementation notes
- Committed and pushed

---

### 4. Dual review

Both reviewers run in parallel against the pushed implementation.

**reviewer-code** — see `.ai/agents/reviewer-code.md`  
Checks: plan compliance, all invariants, TypeScript, i18n, bundle

**reviewer-kid** — see `.ai/agents/reviewer-kid.md`  
Checks: Rafi's playtest simulation, feedback immediacy, fun factor

Both must pass. If either fails, the builder addresses the issues and re-pushes. Re-review is scoped to the changed items only.

---

### 5. Done

Plan status → `done`  
PR is ready to merge.

---

## Decision record rule

Any decision made during planning or review that isn't already in `.ai/decisions/` must be recorded in `.ai/decisions/log.md` before the plan is marked `approved`. This includes:
- Why a particular approach was chosen over an alternative
- Why an invariant exception was granted (rare)
- Why an existing spec was changed

---

## Plan file location and naming

```
.ai/plans/{slug}.md
```

Slug format: `{type}-{short-description}` where type is one of:
- `feat` — new feature
- `fix` — bug fix
- `refactor` — internal restructure with no user-visible change
- `content` — lesson, translation, or copy change only

Examples: `feat-streak-system.md`, `fix-blockly-resize-ios.md`, `content-jungle-lesson-7.md`

---

## Skipping stages

Skipping the plan stage is only allowed for:
- Typo fixes in `.ai/` docs (not source code)
- Dependency patch version bumps with no API changes

Everything else requires a plan. "It's a small change" is not a reason to skip — small unplanned changes are where invariants get broken.
