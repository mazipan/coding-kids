## Issues

<!-- List issues this PR closes. Use "Closes #N" so GitHub auto-closes them on merge. -->

## Summary

<!-- One sentence: what does this PR do and why? -->

## Changes to be aware of

<!-- Anything non-obvious a reviewer should know: edge cases, deliberate trade-offs, removed behaviour, gotchas. -->

## Blast radius

<!-- What could break or be affected? Who / what screens / paths are impacted? -->

## Invariants

<!-- Check every invariant touched by this change. See .ai/specs/invariants.md -->

- [ ] `bun run build` passes with zero TypeScript errors (INV-C3)
- [ ] No hardcoded user-visible strings — all copy goes through `t()` (INV-C2)
- [ ] No network calls added at runtime (INV-P1)
- [ ] No data sent to external servers (INV-P2)
- [ ] Progress can only increase — XP, stars, level (INV-PR1 / PR2 / PR3)

## Screenshots

<!-- For UI changes: before/after or a quick description of what to look for. N/A if no visual change. -->

## Additional references

<!-- Links to related issues, ADRs, specs, external docs, or design files. -->

## Agent attributes

<!--
AI model, harness version, plan file used (link to .ai/plans/{slug}.md), or "no plan — doc/config change only".
-->
