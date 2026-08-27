# Decision log

One file per decision, most recent decisions have the highest date prefix — sort the
directory listing to read in chronological order.

## Filename convention

```
{YYYY-MM-DD}-{NN}-{slug}.md
```

- `YYYY-MM-DD` — the date the decision was made
- `NN` — a two-digit sequence number, disambiguating multiple decisions made on the
  same day (`01`, `02`, ...). Always present, even when there's only one entry for
  that date, so the pattern stays predictable.
- `slug` — a short kebab-case summary of the title

## Entry format

Each file is a single decision record:

```
# YYYY-MM-DD — {title}

**Context:** {what situation prompted this decision}
**Decision:** {what was decided}
**Alternatives rejected:** {what else was considered and why it lost}
**Consequences:** {what this decision makes easier or harder going forward}
```

## Adding an entry

Add a new file named `{today's date}-01-{slug}.md` (bump the sequence number if
another decision was already recorded today). Do not append to or edit past entries —
each file is a permanent record of the decision as made at that time.
