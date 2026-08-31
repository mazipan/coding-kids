/**
 * Content audit for the thinking and safety paths. Run with `bun scripts/audit-thinking-lessons.mjs`
 * (kept as `bun run audit-lessons` in package.json).
 *
 * Checks the mechanical half of the content invariants in `.ai/specs/invariants.md` —
 * the half a human reviewer is bad at and a script is good at. INV-Q1, INV-Q2 and
 * INV-Q5 still need a person to read the lessons.
 */

import { SAFETY_LESSONS } from '../src/data/safetyLessons/index.ts';
import { SAFETY_WORLDS } from '../src/data/safetyWorlds/index.ts';
import { THINKING_LESSONS } from '../src/data/thinkingLessons/index.ts';
import { THINKING_WORLDS } from '../src/data/thinkingWorlds/index.ts';

const problems = [];
const fail = (msg) => problems.push(msg);

function auditDataset(label, lessons, worlds) {
  // ── ids, numbering, and lessonCount ──────────────────────────
  const seen = new Set();
  for (const l of lessons) {
    if (seen.has(l.id)) fail(`[${label}] duplicate lesson id: ${l.id}`);
    seen.add(l.id);
    if (l.id !== `${l.worldId}-${l.number}`)
      fail(`[${label}] id does not match worldId-number: ${l.id}`);
    if (!(l.xpReward > 0)) fail(`[${label}] ${l.id}: xpReward must be positive`);
  }

  for (const world of worlds) {
    const worldLessons = lessons
      .filter((l) => l.worldId === world.id)
      .sort((a, b) => a.number - b.number);
    if (worldLessons.length !== world.lessonCount) {
      fail(
        `[${label}] ${world.id}: lessonCount is ${world.lessonCount} but ${worldLessons.length} lessons exist`,
      );
    }
    worldLessons.forEach((l, i) => {
      // INV-L1 — sequential unlock only works on a contiguous run starting at 0.
      if (l.number !== i)
        fail(`[${label}] ${world.id}: lesson numbers are not contiguous at ${l.id}`);
    });

    // INV-Q3 — no run of 3+ same-answer true/false puzzles in one world.
    let run = 0;
    let last = null;
    for (const l of worldLessons) {
      if (l.puzzle.type !== 'true-false') continue;
      run = l.puzzle.answer === last ? run + 1 : 1;
      last = l.puzzle.answer;
      if (run >= 3)
        fail(
          `[${label}] ${world.id}: ${run} consecutive true-false puzzles answer ${last} (ends at ${l.id})`,
        );
    }

    // INV-Q5 — tier two should pay more than tier one, since it is harder.
    // A dataset with no tier-two lessons yet (e.g. the safety path's MVP) skips this cleanly.
    const tierOne = worldLessons.filter((l) => l.number < 10);
    const tierTwo = worldLessons.filter((l) => l.number >= 10);
    if (tierTwo.length > 0) {
      const avg = (ls) => ls.reduce((s, l) => s + l.xpReward, 0) / ls.length;
      if (avg(tierTwo) <= avg(tierOne))
        fail(`[${label}] ${world.id}: tier two does not reward more XP than tier one`);
    }
  }

  // ── per-puzzle structural checks ─────────────────────────────
  const bothLangs = (id, field, value) => {
    if (!value || typeof value.en !== 'string' || !value.en.trim())
      fail(`[${label}] ${id}: ${field} has no English text (INV-I1)`);
    if (!value || typeof value.id !== 'string' || !value.id.trim())
      fail(`[${label}] ${id}: ${field} has no Indonesian text (INV-I1)`);
  };

  for (const l of lessons) {
    bothLangs(l.id, 'title', l.title);
    bothLangs(l.id, 'mascotMessage', l.mascotMessage);
    if (l.tutorial) {
      bothLangs(l.id, 'tutorial.title', l.tutorial.title);
      bothLangs(l.id, 'tutorial.body', l.tutorial.body);
      if (l.tutorial.example) bothLangs(l.id, 'tutorial.example', l.tutorial.example);
    }

    const p = l.puzzle;
    const uniqueOptions = (opts) => {
      if (new Set(opts).size !== opts.length)
        fail(`[${label}] ${l.id}: options contain a duplicate`);
      if (opts.length < 2) fail(`[${label}] ${l.id}: needs at least 2 options (INV-Q4)`);
    };

    switch (p.type) {
      case 'pattern':
        uniqueOptions(p.options);
        if (!p.options.includes(p.answer))
          fail(`[${label}] ${l.id}: answer is not one of the options`);
        if (p.items[p.blankIndex] !== '?')
          fail(`[${label}] ${l.id}: blankIndex does not point at the '?'`);
        break;
      case 'math':
        bothLangs(l.id, 'question', p.question);
        uniqueOptions(p.options);
        if (!p.options.includes(p.answer))
          fail(`[${label}] ${l.id}: answer is not one of the options`);
        break;
      case 'if-then': {
        bothLangs(l.id, 'condition', p.condition);
        const ids = p.options.map((o) => o.id);
        uniqueOptions(ids);
        if (!ids.includes(p.answerId))
          fail(`[${label}] ${l.id}: answerId is not one of the options`);
        p.options.forEach((o) => {
          bothLangs(l.id, `option ${o.id}`, o.label);
        });
        break;
      }
      case 'true-false':
        bothLangs(l.id, 'statement', p.statement);
        break;
      case 'sequence':
        p.steps.forEach((s) => {
          bothLangs(l.id, `step ${s.id}`, s.label);
        });
        uniqueOptions(p.steps.map((s) => s.id));
        break;
      case 'sort':
        if (p.items.length !== p.answer.length)
          fail(`[${label}] ${l.id}: sort answer length does not match items`);
        if ([...p.items].sort().join() !== [...p.answer].sort().join())
          fail(`[${label}] ${l.id}: sort answer is not a permutation of items`);
        uniqueOptions(p.items);
        if (p.items.join() === p.answer.join())
          fail(`[${label}] ${l.id}: sort items are already in the answer order`);
        if (p.prompt) bothLangs(l.id, 'sort prompt', p.prompt);
        break;
      case 'fill-in':
        bothLangs(l.id, 'question', p.question);
        // A free-text answer cannot be translated, so it must be language-neutral.
        if (!/^-?[\d.,/]+$/.test(p.answer))
          fail(`[${label}] ${l.id}: fill-in answer "${p.answer}" is not language-neutral (INV-C2)`);
        break;
      case 'match':
        p.pairs.forEach((pair) => {
          bothLangs(l.id, `pair ${pair.leftId}`, pair.leftLabel);
          bothLangs(l.id, `pair ${pair.rightId}`, pair.rightLabel);
        });
        uniqueOptions(p.pairs.map((pair) => pair.leftId));
        uniqueOptions(p.pairs.map((pair) => pair.rightId));
        break;
      case 'abstraction': {
        bothLangs(l.id, 'question', p.question);
        const ids = p.items.map((i) => i.id);
        uniqueOptions(ids);
        p.items.forEach((i) => {
          bothLangs(l.id, `item ${i.id}`, i.label);
        });
        if (p.correctIds.length === 0) fail(`[${label}] ${l.id}: no correct items`);
        if (p.correctIds.some((c) => !ids.includes(c)))
          fail(`[${label}] ${l.id}: a correctId is not among the items`);
        if (p.subtype === 'odd-one-out' && p.correctIds.length !== 1)
          fail(`[${label}] ${l.id}: odd-one-out must have exactly 1 answer`);
        if (p.correctIds.length === ids.length)
          fail(`[${label}] ${l.id}: every item is correct, so there is nothing to decide`);
        break;
      }
      case 'spatial': {
        bothLangs(l.id, 'question', p.question);
        if (p.note) bothLangs(l.id, 'note', p.note);
        const rows = p.figure.length;
        const cols = p.figure[0].length;
        const checkGrid = (g, what) => {
          if (g.length !== rows)
            fail(`[${label}] ${l.id}: ${what} has ${g.length} rows, figure has ${rows}`);
          g.forEach((row) => {
            if (row.length !== cols)
              fail(`[${label}] ${l.id}: ${what} row "${row}" is not ${cols} wide`);
            if (/[^#o.]/.test(row))
              fail(`[${label}] ${l.id}: ${what} row "${row}" has a character outside #o.`);
          });
        };
        checkGrid(p.figure, 'figure');
        const ids = p.options.map((o) => o.id);
        uniqueOptions(ids);
        p.options.forEach((o) => {
          checkGrid(o.grid, `option ${o.id}`);
          bothLangs(l.id, `option ${o.id}`, o.label);
        });
        if (!ids.includes(p.answerId))
          fail(`[${label}] ${l.id}: answerId is not one of the options`);
        // Two options that draw the same picture make the puzzle unanswerable.
        const drawings = p.options.map((o) => o.grid.join('|'));
        if (new Set(drawings).size !== drawings.length)
          fail(`[${label}] ${l.id}: two options draw the same grid`);
        break;
      }
      case 'multi-step': {
        bothLangs(l.id, 'intro', p.intro);
        if (p.steps.length < 2) fail(`[${label}] ${l.id}: a chain needs at least 2 steps`);
        uniqueOptions(p.steps.map((s) => s.id));
        p.steps.forEach((s) => {
          bothLangs(l.id, `step ${s.id} prompt`, s.prompt);
          const ids = s.options.map((o) => o.id);
          uniqueOptions(ids);
          s.options.forEach((o) => {
            bothLangs(l.id, `step ${s.id} option ${o.id}`, o.label);
          });
          if (!ids.includes(s.answerId))
            fail(`[${label}] ${l.id}: step ${s.id} answerId is not one of its options`);
        });
        break;
      }
      case 'grid-select': {
        bothLangs(l.id, 'question', p.question);
        if (p.note) bothLangs(l.id, 'note', p.note);
        const cols = p.cells[0].length;
        p.cells.forEach((row, r) => {
          if (row.length !== cols)
            fail(`[${label}] ${l.id}: row ${r} has ${row.length} cells, row 0 has ${cols}`);
        });
        if (p.answer.length === 0) fail(`[${label}] ${l.id}: grid-select has no answer cells`);
        if (new Set(p.answer).size !== p.answer.length)
          fail(`[${label}] ${l.id}: grid-select answer repeats a cell`);
        p.answer.forEach((key) => {
          const [r, c] = key.split('-').map(Number);
          if (!(r >= 0 && r < p.cells.length && c >= 0 && c < cols))
            fail(`[${label}] ${l.id}: answer cell ${key} is outside the grid`);
        });
        break;
      }
      default:
        fail(`[${label}] ${l.id}: unknown puzzle type ${p.type}`);
    }
  }

  const byType = {};
  for (const l of lessons) byType[l.puzzle.type] = (byType[l.puzzle.type] ?? 0) + 1;

  console.log(`[${label}] ${lessons.length} lessons across ${worlds.length} worlds`);
  console.log(
    Object.entries(byType)
      .sort((a, b) => b[1] - a[1])
      .map(([t, n]) => `  ${t}: ${n}`)
      .join('\n'),
  );
}

auditDataset('thinking', THINKING_LESSONS, THINKING_WORLDS);
auditDataset('safety', SAFETY_LESSONS, SAFETY_WORLDS);

if (problems.length > 0) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('\nAll content checks passed.');
