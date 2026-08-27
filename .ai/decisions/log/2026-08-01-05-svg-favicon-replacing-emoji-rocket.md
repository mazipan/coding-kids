# 2026-08-01 — SVG </> favicon replacing emoji rocket

**Context:** The old favicon was `🚀` as a Unicode emoji, which renders inconsistently across platforms and doesn't represent the "coding" brand.

**Decision:** Replace with a custom inline SVG data URI: the same `</>` logo used in the nav, encoded as a URL-safe data URI in `index.html`.

**Alternatives rejected:**
- A separate `public/favicon.svg` file — works, but the data URI keeps everything self-contained in the HTML without an extra file.

**Consequences:** Consistent, on-brand favicon across all platforms. The gradient (purple→pink) also serves as a distinctive tab icon.
