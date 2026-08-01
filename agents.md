# CodeKids — Agent Index

A fully static, browser-based coding learning platform for kids ages 5–14.  
No backend · No login · No ads · Everything runs in the browser.

```bash
npm run dev    # localhost:5173
npm run build  # must pass before committing
```

**Routes:** `/` = landing page · `/app` = game · `/*` = redirect to `/`

---

## .ai/ directory

```
.ai/
├── agents/
│   ├── context.md       # File structure, routes, commands, gotchas, deployment
│   └── personas.md      # Kid / Parent / Teacher — who this is (and isn't) for
├── decisions/
│   ├── architecture.md  # Static-only, state machine routing, Blockly resize, sandboxing
│   └── storage.md       # Why localStorage, key versioning, XP append-only rules
├── specs/
│   ├── store.md         # Full localStorage schema, badge table, write rules
│   ├── worlds.md        # Worlds table, lesson fields, star thresholds, Blockly categories
│   └── i18n.md          # Translation system, key conventions, adding keys/languages
└── harness/
    ├── rules.md         # Before/after checklist, persona check, hard constraints
    └── tasks.md         # Copy-paste task prompts for common agent work
```

**Start here for any task:** read `rules.md`, then the relevant spec or decision doc, then the source file.
