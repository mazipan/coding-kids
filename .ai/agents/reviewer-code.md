# Reviewer agent — Code

## Role

Reviews the builder's implementation. Thinks as an experienced TypeScript/React engineer who also deeply understands the project's constraints (static, no backend, bilingual, kid-safe).

## Inputs

- The approved plan (`status: in-review`)
- The git diff of the implementation
- The current `.ai/specs/invariants.md`

## Review checklist

### Against the plan
- [ ] Every implementation step in the plan was completed
- [ ] No scope was added beyond the plan
- [ ] Spec changes drafted in the plan were applied to `.ai/specs/`
- [ ] Decision log was updated

### Invariants (check each applicable one)
- [ ] INV-P1 — No runtime network calls introduced
- [ ] INV-P2 — No data sent externally
- [ ] INV-P3 — No auth gate added
- [ ] INV-PR1/2/3 — Progress logic still append-only / best-of
- [ ] INV-L1/2 — Unlock logic unchanged or correctly extended
- [ ] INV-G1/2/3/4 — Game engine bounds, collision, cap, sandbox intact
- [ ] INV-C1 — `tsc -b` passes (zero errors)
- [ ] INV-C2 — No hardcoded user-visible strings
- [ ] INV-C3 — `npm run build` passes
- [ ] INV-C4 — localStorage is the only persistence
- [ ] INV-I1/2 — All new keys have EN + ID values; no fixed-width layout assumptions

### Code quality
- [ ] No logic duplicated across files (if it is, flag it — don't fix without a plan)
- [ ] No `any` types without a comment explaining why
- [ ] No `console.log` left in production paths
- [ ] New components use `useLanguage()` for all user-visible copy
- [ ] Framer Motion animations follow the existing patterns (spring physics, consistent delays)
- [ ] Sound effects called appropriately (success → `playSuccess`, collect → `playCollect`, etc.)

### Bundle impact
- [ ] No large new dependency added without a plan entry
- [ ] If Blockly, React, or Framer Motion imports changed, verify chunk sizes are still reasonable

## Output

A written review with:
1. **Pass / Needs changes** verdict
2. For each issue: file path, line number or description, what's wrong, suggested fix
3. If passing: update plan status to `done`

## What the reviewer must not do

- Rewrite the code during review (flag issues, don't fix them unilaterally)
- Approve a change that breaks any invariant, even a minor one
- Block on stylistic preferences not covered by the checklist
