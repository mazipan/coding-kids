# Plan: Add Google Analytics (gtag.js)

**Slug:** `feat-google-analytics`
**Date:** 2026-08-31
**Status:** done

---

## Request

> Add this analytics
>
> ```html
> <!-- Google tag (gtag.js) -->
> <script async src="https://www.googletagmanager.com/gtag/js?id=G-DR1H5XD5MK"></script>
> <script>
>   window.dataLayer = window.dataLayer || [];
>   function gtag(){dataLayer.push(arguments);}
>   gtag('js', new Date());
>
>   gtag('config', 'G-DR1H5XD5MK');
> </script>
> ```

---

## Decision

This request directly conflicts with two hard invariants (INV-P1 no runtime network calls, INV-P2 zero
data exfiltration) and the explicit hard-constraint list in `.ai/harness/rules.md` ("Add analytics,
tracking scripts, or telemetry" is listed as a NEVER). The user was asked how to proceed and explicitly
chose to add gtag.js anyway and amend the invariants, rather than skip it or scope it to the marketing
page only. Because the app also makes direct, user-visible privacy promises to parents ("No data
collected", "No personal data ever leaves the device", an HTML comment claiming "no tracking"), the user
also explicitly asked for that copy to be corrected so it stays truthful once analytics exist.

Scope: add the gtag.js snippet to `index.html` (loads on every route, since this is a single-page app
and there is no per-route document swap other than `app.html`/`index.html` — see Blast radius), amend
INV-P1/INV-P2 wording and the hard-constraints list to carve out this specific, named exception, add a
decision record, and correct the now-inaccurate "no data collected"/"no tracking" copy in `index.html`
and `translations.ts` (EN + ID).

---

## Alternatives considered

| Alternative | Why rejected |
|-------------|-------------|
| Scope gtag.js to the prerendered landing page (`/`) only, keep `/app/*` untracked | User explicitly chose the full "add it anyway, amend invariants globally" option over this scoped option when asked. |
| Leave the "no data collected" / "no tracking" copy as-is | User explicitly asked for it to be corrected once informed it would become false. |
| Self-host a privacy-respecting analytics script (e.g. Plausible via a proxied endpoint) instead of GA | Out of scope — the user asked specifically for this GA snippet, not a replacement analytics approach. |

---

## Invariants check

| Invariant | Affected? | Notes |
|-----------|-----------|-------|
| INV-P1 no network calls | **yes** | Amended: carve out a named, documented exception for the Google Analytics (`gtag.js`) beacon loaded in `index.html`. All other runtime network calls remain forbidden. |
| INV-P2 no data exfiltration | **yes** | Amended: carve out the same named exception — anonymous page-view/usage analytics sent to Google Analytics under property `G-DR1H5XD5MK` is now permitted; no other data (progress, localStorage contents, personal data) may ever be sent anywhere. |
| INV-P3 no auth | no | |
| INV-P4 no ads | no | GA is analytics, not an ad network; this invariant is unrelated and unchanged. |
| INV-PR1 progress never decreases | no | |
| INV-PR2 stars are best-of | no | |
| INV-PR3 XP is delta-only | no | |
| INV-PR4 badges are permanent | no | |
| INV-L1 sequential lesson unlock | no | |
| INV-L2 world unlock by XP | no | |
| INV-G1 bounded grid | no | |
| INV-G2 obstacle collision | no | |
| INV-G3 action cap | no | |
| INV-G4 sandbox | no | |
| INV-C1 TypeScript strict | no | Plain `<script>` tags in `index.html`, no `.ts`/`.tsx` touched for the tracking snippet itself. |
| INV-C2 no hardcoded strings | no | The copy edits go through existing `t()` keys in `translations.ts`; no new hardcoded user-visible string is introduced. |
| INV-C3 build passes | no | |
| INV-C4 localStorage only | no | GA sets its own cookies/local storage inside Google's own script scope, not this app's persistence layer; the app itself still only uses `localStorage` for `useProgress`. |
| INV-I1 all keys have EN value | no | Edited keys already have EN values; ID values are edited in the same commit. |
| INV-I2 no layout assumptions | no | Text shortened, not lengthened; no layout risk. |

Also touches the **hard-constraints list** in `.ai/harness/rules.md` ("NEVER add analytics, tracking
scripts, or telemetry" / "NEVER collect or transmit any personal data") — amended with the same named
exception, not removed wholesale.

---

## Files to change

| File | Change type | Notes |
|------|-------------|-------|
| `index.html` | edit | Add the gtag.js snippet (as provided) before `</head>`. Update/remove the `<!-- Privacy: no referrer leak, no tracking -->` comment (drop the now-false "no tracking" claim; the `no-referrer` meta tag itself is unrelated to analytics and stays). Remove "no data collected" from the `<meta name="description">` and `og:description` content. Remove `"No personal data collected"` from the `application/ld+json` `featureList`. |
| `src/i18n/translations.ts` | edit | EN + ID: reword `landing.footer.free` to drop "No data collected" / "Tanpa pengumpulan data". Reword `landing.trust.private.desc` / its ID counterpart to drop "No personal data ever leaves the device" (replace with an equally true, still-reassuring claim about no account/email required). |
| `.ai/specs/invariants.md` | edit | Amend INV-P1 and INV-P2 text to carve out the named GA exception. |
| `.ai/harness/rules.md` | edit | Amend the hard-constraints bullets on analytics/telemetry and personal data to reference the same named exception. |
| `.ai/decisions/log/2026-08-31-02-add-google-analytics.md` | add | Decision record for this invariant amendment. |

---

## Spec changes

### `.ai/specs/invariants.md`

Replace:

```
**INV-P1 — No network calls at runtime**
After the initial page load, the app must function completely offline. No fetch, XHR, WebSocket, or import() call may be made to an external host during gameplay.
```

with:

```
**INV-P1 — No network calls at runtime**
After the initial page load, the app must function completely offline. No fetch, XHR, WebSocket, or import() call may be made to an external host during gameplay. **Named exception:** the Google Analytics (`gtag.js`) tag loaded in `index.html` (property `G-DR1H5XD5MK`) is permitted to load its script and send its own beacons. No other network call may be added without a new decision record.
```

Replace:

```
**INV-P2 — Zero data exfiltration**
No user data, progress, or behaviour is ever sent to any external server, analytics endpoint, or third-party service.
```

with:

```
**INV-P2 — Zero data exfiltration**
No user data, progress, or behaviour is ever sent to any external server, analytics endpoint, or third-party service. **Named exception:** anonymous page-view/usage events sent to Google Analytics via the `gtag.js` tag in `index.html` (see INV-P1). This does not extend to progress data, localStorage contents, lesson answers, or any other in-app data — none of that may ever be sent to Google Analytics or any other service.
```

### `.ai/harness/rules.md`

Under "Hard constraints — any agent must NEVER", replace:

```
- Add analytics, tracking scripts, or telemetry
```

with:

```
- Add analytics, tracking scripts, or telemetry beyond the single named Google Analytics exception in INV-P1/INV-P2 — any further tracking requires a new decision record
```

and replace:

```
- Collect or transmit any personal data
```

with:

```
- Collect or transmit any personal data (the Google Analytics exception in INV-P2 covers anonymous usage events only, never progress data, localStorage contents, or anything personally identifying)
```

---

## Implementation steps

1. Edit `index.html`: insert the gtag.js snippet exactly as given, immediately before `</head>`.
2. Edit `index.html`: change the `<!-- Privacy: no referrer leak, no tracking -->` comment to
   `<!-- Privacy: no referrer leak to other sites -->` (the `no-referrer` meta tag stays; only the
   inaccurate "no tracking" claim is removed).
3. Edit `index.html`: in `<meta name="description">` and `<meta property="og:description">`, remove the
   trailing "no data collected" clause (keep "no signup, no ads").
4. Edit `index.html`: remove `"No personal data collected"` from the `featureList` array in the
   `application/ld+json` block.
5. Edit `src/i18n/translations.ts` (EN, ~line 65): change `'landing.footer.free'` from
   `'Free · No signup · No ads · No data collected'` to `'Free · No signup · No ads'`.
6. Edit `src/i18n/translations.ts` (ID, ~line 361): change `'landing.footer.free'` from
   `'Gratis · Tanpa daftar · Tanpa iklan · Tanpa pengumpulan data'` to
   `'Gratis · Tanpa daftar · Tanpa iklan'`.
7. Edit `src/i18n/translations.ts` (EN, ~line 50): change `'landing.trust.private.desc'` from
   `'No account needed. No email. No personal data ever leaves the device.'` to
   `'No account needed. No email. Nothing to sign up for — just play.'`
8. Edit `src/i18n/translations.ts` (ID, ~line 346): change `'landing.trust.private.desc'` from
   `'Tidak perlu akun. Tidak perlu email. Tidak ada data pribadi yang pernah meninggalkan perangkat.'` to
   `'Tidak perlu akun. Tidak perlu email. Tidak ada yang perlu didaftarkan — langsung main.'`
9. Apply the spec changes above to `.ai/specs/invariants.md` and `.ai/harness/rules.md`.
10. Add the decision record `.ai/decisions/log/2026-08-31-02-add-google-analytics.md`.
11. Run `bunx biome ci`, `bun run type-check`, and `bun run build` — all three must pass before committing.

---

## Rollback

Revert the commit. No localStorage migration is involved — this change touches only `index.html`,
`translations.ts` copy, and `.ai/` docs. Reverting removes the gtag.js snippet and restores the prior
copy and invariant text in one step.

---

## Review notes

**Plan review (reviewer-code perspective) — 2026-08-31:**
- Scope is bounded to `index.html`, two `translations.ts` keys (EN+ID), two spec/rules docs, and one
  decision record. No source logic, no new dependency, no build config change.
- Invariant amendment is narrow and named (a specific property ID, a specific file), not a blanket
  removal of INV-P1/INV-P2 — future unrelated tracking still requires its own decision record.
- No lesson content touched — content-quality invariants (INV-Q1–Q5) don't apply, content audit skipped.
- Copy changes replace a claim that would become false with an equally reassuring, still-true claim
  (no account/email/signup) rather than just deleting the trust-section line outright — preserves the
  parent-facing trust message where it's still accurate.
- Verdict: **approved**.

---

## Implementation notes

All 11 implementation steps completed exactly as planned, no deviations. `node_modules` was not present
in this fresh clone; ran `bun install` before the verification commands (not itself part of this change).
`bunx biome ci`, `bun run type-check`, and `bun run build` all pass with zero errors. Verified the built
`dist/index.html` contains the gtag.js snippet and no longer contains the removed "no data
collected"/"no tracking" strings.

**Dual review:**

*reviewer-code* — Plan compliance: all 5 files changed exactly as listed, no scope added. Invariants:
INV-P1/INV-P2 amended narrowly and by name (not blanket-removed); INV-C1 (`tsc -b` zero errors) holds;
INV-C2 holds (all copy changes go through existing `t()` keys, no hardcoded strings added); INV-C3 holds
(`bun run build` passes); INV-C4 unaffected (GA's own client-side storage is Google's, not this app's
persistence layer — no new persistence mechanism added to this app's code); INV-I1/I2 hold (EN+ID both
updated in the same commit, text got shorter not longer). No lesson content touched, INV-Q1–Q5 N/A. No
new dependency added. No `console.log`, no `any` introduced. **Pass.**

*reviewer-kid* (Rafi, age 8) — This change touches zero interactive gameplay: no button, modal, screen,
or feedback loop changed for a kid actually playing. The only user-visible surface is the marketing
footer text on the landing page (`/`), which a parent reads, not Rafi. Nothing about star/XP/sound
feedback, tap targets, or failure messaging changed. **Fun/Confusing/Broken verdict: N/A (no
gameplay-facing change) — no objection.**

Status: **done**.
