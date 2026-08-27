# 2026-08-01 — Separate .ai/ directory for AI context

**Context:** The single `agents.md` file was growing unwieldy as we added personas, store specs, decisions, and harness prompts.

**Decision:** Split into a structured `.ai/` directory with subdirectories for `agents/`, `decisions/`, `specs/`, `harness/`, and `plans/`. `CLAUDE.md` imports the most essential files; the rest are linked from `agents.md`.

**Alternatives rejected:**
- Keep everything in `agents.md` — too long, hard to navigate, merge conflicts on every change.
- Use separate top-level files (`PERSONAS.md`, `SPECS.md`, etc.) — no hierarchy, harder to reason about ownership.

**Consequences:** Each concern has a clear home. Plans, specs, and decisions are independently versioned. New agents can be defined without touching existing files.
