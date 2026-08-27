# CodeKids — Agent Index

A fully static, browser-based coding learning platform for kids ages 5–14.  
No backend · No login · No ads · Everything runs in the browser.

```bash
bun run dev    # localhost:5173
bun run build  # must pass before committing
```

**Routes:** `/` = landing page · `/app` = game · `/*` = redirect to `/`

---

## Workflow

Every change: **Plan → Plan review → Build → Dual review → Done**  
See `.ai/harness/workflow.md` for the full lifecycle.  
See `.ai/plans/_template.md` to start a new plan.

---

## .ai/ directory

```
.ai/
├── agents/
│   ├── context.md          File structure, routes, commands, gotchas, deployment
│   ├── personas.md         Kid / Parent / Teacher — who this is (and isn't) for
│   ├── planner.md          Planner agent — creates plans, drafts spec changes
│   ├── builder.md          Builder agent — implements approved plans
│   ├── reviewer-code.md    Code reviewer — TypeScript, invariants, plan compliance
│   └── reviewer-kid.md     Kid reviewer — Rafi (age 8) playtest simulation
├── decisions/
│   ├── architecture.md     One-off ADRs: static-only, routing, Blockly, sandboxing
│   ├── storage.md          Why localStorage, versioning, XP append-only
│   └── log/                One file per decision — {date}-{NN}-{slug}.md, add an entry for every non-obvious choice
├── specs/
│   ├── invariants.md       Non-negotiable truths — every change must preserve all of these
│   ├── store.md            localStorage schema, badge table, write rules
│   ├── worlds.md           Worlds table, lesson fields, star thresholds, Blockly categories
│   └── i18n.md             Translation system, key conventions, adding keys/languages
├── harness/
│   ├── workflow.md         Plan → Build → Review lifecycle with stage details
│   ├── rules.md            Before/after checklist, invariant gate, hard constraints
│   └── tasks.md            Copy-paste task prompts for common agent work
└── plans/
    ├── _template.md        Template for a new plan file
    └── {date}-{slug}.md    One file per change (created by planner, closed by reviewer)
```

---

## Start here for any task

1. `.ai/harness/rules.md` — constraints and checklist
2. `.ai/harness/workflow.md` — which stage you're in
3. `.ai/specs/invariants.md` — what must never break
4. The relevant spec or agent file for your role
