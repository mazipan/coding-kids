# 2026-08-31 — Add Google Analytics (gtag.js) as a named exception to INV-P1/INV-P2

**Context:** The user asked to add a Google Analytics `gtag.js` snippet (property `G-DR1H5XD5MK`) to the
app. This directly conflicts with `INV-P1` (no runtime network calls), `INV-P2` (zero data exfiltration),
and the "NEVER add analytics/tracking/telemetry" and "NEVER collect or transmit personal data" hard
constraints in `.ai/harness/rules.md` — all written specifically because this app markets itself to
parents on the promise of collecting no data. The user was asked to choose between skipping it, adding it
with a globally-amended invariant, or scoping it to the marketing page only, and chose to add it globally
and amend the invariants. Adding GA also makes several existing user-facing claims false: the landing
page footer ("No data collected"), the "Completely private" trust section ("No personal data ever leaves
the device"), the `<meta name="description">`/`og:description` ("no data collected"), the structured-data
`featureList` ("No personal data collected"), and an HTML comment ("no referrer leak, no tracking"). The
user was asked separately and explicitly confirmed this copy should be corrected rather than left
inaccurate.

**Decision:** Add the gtag.js snippet verbatim to `index.html`. Amend `INV-P1` and `INV-P2` in
`.ai/specs/invariants.md` with a narrow, named exception scoped specifically to this one script tag and
property ID — not a blanket removal of either invariant. Mirror the same named exception into the
hard-constraints list in `.ai/harness/rules.md`. Correct the now-false "no data collected" / "no
tracking" copy in `index.html` (meta description, og:description, structured-data featureList, HTML
comment) and in `src/i18n/translations.ts` (`landing.footer.free`, `landing.trust.private.desc`, EN + ID),
replacing each with an equally reassuring but still-true claim (no account/email/signup required) rather
than deleting the trust messaging outright.

**Alternatives rejected:**
- Scope gtag.js to the prerendered landing page (`/`) only, leaving `/app/*` (actual kid gameplay)
  untracked — rejected: the user was offered this as an explicit option and chose the global exception
  instead.
- Leave the "no data collected"/"no tracking" copy unchanged — rejected: the user was asked directly and
  chose to have it corrected, since shipping a known-false privacy claim to parents is worse than
  reflecting the actual behavior.
- Refuse the request outright and keep INV-P1/INV-P2 absolute — rejected: the user has final say over
  this product's own privacy stance; the agent's role here was to surface the conflict clearly and get an
  explicit, informed decision, which is what happened.

**Consequences:** The app is no longer 100% offline/zero-analytics after initial load — this is a real,
deliberate change to the product's privacy posture, not just a code change. Any future addition of further
tracking, telemetry, or third-party network calls still requires its own decision record and cannot piggy-back
on this exception. `INV-P1`/`INV-P2` and the hard-constraints list now carry the exception text verbatim, so
future planners/reviewers checking those invariants will see the GA exception is intentional and scoped,
not an oversight. If the analytics property is ever removed, the exception text and this decision record
should be left as a historical record; a new decision record should note the removal rather than editing
this one.
