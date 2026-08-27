# Plan: Fix deprecated Biome recommended configuration

**Slug:** `fix-biome-deprecated-preset`
**Date:** 2026-08-14
**Status:** approved

## Request

> Can you fix problem with Biome as well?

## Decision

Apply Biome 2.5.6's own configuration migration, replacing the deprecated boolean `recommended` rule switch with `preset: "recommended"`. Keep the existing file scope unchanged so this focused warning fix does not introduce a repository-wide formatting and lint migration.

## Alternatives considered

| Alternative | Why rejected |
|---|---|
| Suppress informational diagnostics | Hides the warning instead of fixing its cause. |
| Expand Biome to every TypeScript file | Exposes a large pre-existing formatting/lint backlog and is unrelated to the deprecation fix. |

## Invariants check

No runtime, content, progress, persistence, i18n, or gameplay invariant is affected. INV-C1 and INV-C3 are verified through the standard type-check and build gates.

## Files to change

| File | Change |
|---|---|
| `biome.json` | Use the supported `rules.preset` setting. |
| `.ai/plans/2026-08-14-fix-biome-deprecated-preset.md` | Record scope and verification. |

## Spec changes

None.

## Implementation steps

1. Run `bunx biome migrate --write`.
2. Confirm `bunx biome ci` no longer emits the deprecation notice.
3. Run `bun test`, `bun run type-check`, and `bun run build`.

## Rollback

Revert the commit; no data migration is involved.

## Review notes

The change exactly matches Biome's built-in 2.5.6 migration and is limited to configuration syntax.

## Implementation notes

Biome now uses `preset: "recommended"`; its existing include scope is intentionally unchanged.
