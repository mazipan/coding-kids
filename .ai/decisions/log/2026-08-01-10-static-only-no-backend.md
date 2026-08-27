# 2026-08-01 — Static-only, no backend

**Context:** Platform design decision made at project start.

**Decision:** The app is a pure static file bundle. No API server, serverless functions, or database.

**Alternatives rejected:**
- Serverless functions (Netlify Functions, Vercel Edge) — would enable leaderboards, cross-device sync, teacher dashboards. Rejected for v1: adds infrastructure, latency, and privacy obligations.
- Full-stack (Next.js, Remix) — unnecessary complexity for a client-side game.

**Consequences:** Zero hosting cost. No privacy risk. No user accounts possible. Cross-device sync and teacher dashboards are blocked until a backend is explicitly introduced (requires revisiting INV-P1, INV-P2, INV-C4).
