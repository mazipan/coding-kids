# 2026-08-08 — isBuggy flag for debug challenge lessons (feat-debugging-challenges)

**Context:** Issue #30 — new lesson variant where kids receive pre-broken code and must find and fix the bug.

**Decision:** Added `isBuggy?: true` and `buggyState?: object` as optional fields on the `Lesson` interface, mirroring the existing `isTutorial?: true` pattern. `buggyState` holds a Blockly JSON serialisation object (same format as `Blockly.serialization.workspaces.save()`) which is loaded into the workspace on mount via the existing `BlocklyWorkspaceHandle.loadState()` handle. `optimalBlockCount` is set to the block count of the corrected solution. Stars use the existing block-count mechanism.

**Alternatives rejected:**
- Discriminated type union (`lessonType: 'normal' | 'tutorial' | 'debug'`) — more type-safe but inconsistent with `isTutorial?: true` precedent; adds discriminated-union complexity to all lesson-type checks.
- Blockly XML string instead of JSON — the app already uses Blockly JSON serialisation internally for workspace state persistence; XML would be a second serialisation format with no benefit.
- Track edit count for star rating — requires new `useProgress` store fields and a migration; block count of the final solution is sufficient for v1.

**Consequences:** Debug lessons load the pre-broken workspace on mount, kids fix the bug and hit Run, stars awarded on the corrected block count. Three lessons shipped: caves-6 (wrong direction), factory-6 (wrong direction inside a loop), portal-10 (wrong repeat count).
