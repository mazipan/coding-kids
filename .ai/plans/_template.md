# Plan: {title}

**Slug:** `{type}-{short-description}`  
**Date:** YYYY-MM-DD  
**Status:** draft | needs-clarification | approved | in-progress | in-review | done

---

## Request

> {paste the original request verbatim}

---

## Decision

{What we decided to do and why. 2–4 sentences. Written for someone who hasn't read the request.}

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| {option A} | {reason} |
| {option B} | {reason} |

---

## Invariants check

For each invariant in `.ai/specs/invariants.md`, mark whether this change affects it:

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | no / yes | |
| INV-P2 no data exfiltration | no / yes | |
| INV-P3 no auth | no / yes | |
| INV-P4 no ads | no / yes | |
| INV-PR1 progress never decreases | no / yes | |
| INV-PR2 stars are best-of | no / yes | |
| INV-PR3 XP is delta-only | no / yes | |
| INV-PR4 badges are permanent | no / yes | |
| INV-L1 sequential lesson unlock | no / yes | |
| INV-L2 world unlock by XP | no / yes | |
| INV-G1 bounded grid | no / yes | |
| INV-G2 obstacle collision | no / yes | |
| INV-G3 action cap | no / yes | |
| INV-G4 sandbox | no / yes | |
| INV-C1 TypeScript strict | no / yes | |
| INV-C2 no hardcoded strings | no / yes | |
| INV-C3 build passes | no / yes | |
| INV-C4 localStorage only | no / yes | |
| INV-I1 all keys have EN value | no / yes | |
| INV-I2 no layout assumptions | no / yes | |

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `src/...` | add / edit / delete | |

---

## Spec changes

{List any `.ai/specs/` files that need updating. Draft the new content inline here — the builder will apply it.}

### `.ai/specs/{file}.md`

{drafted changes}

---

## Implementation steps

1. {Step — specific enough that the builder makes no design decisions}
2. 
3. 
4. Run `npm run build` — must pass before committing

---

## Rollback

{How to undo this change if it causes a regression. E.g. "Revert commit {hash}. No localStorage migration needed."}

---

## Review notes

{Filled in by reviewer-code during plan review stage. Leave blank initially.}

---

## Implementation notes

{Filled in by builder after implementation. Note any deviations from the plan and why.}
