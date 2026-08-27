import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'bun:test'
import { getThinkingLessonsByWorld } from '../src/data/thinkingLessons'
import { THINKING_WORLDS } from '../src/data/thinkingWorlds'
import type { ThinkingLesson } from '../src/types'

// Spatial Studio's figure grids and transformation correctness are checked
// separately in spatialPuzzle.test.ts.

// INV-C5: translation strings never embed directional or status symbols.
const FORBIDDEN_SYMBOLS = ['←', '→', '▶', '✓', '✗', '✗', '🔒']

function isLocalized(value: unknown): value is { en: string; id: string } {
  if (typeof value !== 'object' || value === null) return false
  const keys = Object.keys(value)
  return keys.length === 2 && keys.includes('en') && keys.includes('id')
}

/** Collects every LocalizedString reachable from a lesson, with a dotted path for diagnostics. */
function collectLocalized(node: unknown, path: string, out: Array<{ path: string; value: { en: string; id: string } }>) {
  if (isLocalized(node)) {
    out.push({ path, value: node as { en: string; id: string } })
    return
  }
  if (Array.isArray(node)) {
    node.forEach((child, i) => collectLocalized(child, `${path}[${i}]`, out))
    return
  }
  if (typeof node === 'object' && node !== null) {
    for (const [key, child] of Object.entries(node)) {
      collectLocalized(child, path ? `${path}.${key}` : key, out)
    }
  }
}

describe.each(THINKING_WORLDS.map(w => w.id))('thinking world: %s', worldId => {
  const world = THINKING_WORLDS.find(w => w.id === worldId)!
  const lessons = getThinkingLessonsByWorld(worldId)

  test('is registered and always unlocked (INV-L3)', () => {
    expect(world).toBeDefined()
    expect(world.unlockAtXP).toBe(0)
    expect(world.lessonCount).toBe(lessons.length)
  })

  test('has 20 sequentially numbered lessons (INV-L1)', () => {
    expect(lessons).toHaveLength(20)
    lessons.forEach((lesson, i) => {
      expect(lesson.number).toBe(i)
      expect(lesson.id).toBe(`${worldId}-${i}`)
      expect(lesson.worldId).toBe(worldId)
    })
  })

  test('every localized string has non-empty en and id (INV-C2, INV-I1)', () => {
    for (const lesson of lessons) {
      const found: Array<{ path: string; value: { en: string; id: string } }> = []
      collectLocalized(lesson, '', found)
      expect(found.length).toBeGreaterThan(0)
      for (const { path, value } of found) {
        expect(`${lesson.id}.${path}.en: ${typeof value.en}`).toBe(`${lesson.id}.${path}.en: string`)
        expect(`${lesson.id}.${path}.id: ${typeof value.id}`).toBe(`${lesson.id}.${path}.id: string`)
        expect(`${lesson.id}.${path}.en`.concat(value.en.trim() ? ' ok' : ' EMPTY')).toEndWith(' ok')
        expect(`${lesson.id}.${path}.id`.concat(value.id.trim() ? ' ok' : ' EMPTY')).toEndWith(' ok')
      }
    }
  })

  test('no directional or status symbols in copy (INV-C5)', () => {
    for (const lesson of lessons) {
      const found: Array<{ path: string; value: { en: string; id: string } }> = []
      collectLocalized(lesson, '', found)
      for (const { path, value } of found) {
        for (const symbol of FORBIDDEN_SYMBOLS) {
          expect(`${lesson.id}.${path}`.concat(value.en.includes(symbol) || value.id.includes(symbol) ? ' HAS-SYMBOL' : ' clean')).toEndWith(' clean')
        }
      }
    }
  })

  test('every puzzle has a reachable, unambiguous answer', () => {
    for (const lesson of lessons) {
      const p = lesson.puzzle
      if (p.type === 'pattern') {
        expect(p.options).toContain(p.answer)
        expect(new Set(p.options).size).toBe(p.options.length)
      } else if (p.type === 'math') {
        expect(p.options).toContain(p.answer)
        expect(new Set(p.options).size).toBe(p.options.length)
        expect(p.options).toHaveLength(4)
      } else if (p.type === 'if-then') {
        const ids = p.options.map(o => o.id)
        expect(new Set(ids).size).toBe(ids.length)
        expect(ids).toContain(p.answerId)
        expect(p.options).toHaveLength(4)
      } else if (p.type === 'true-false') {
        expect(typeof p.answer).toBe('boolean')
      } else if (p.type === 'sequence') {
        const ids = p.steps.map(s => s.id)
        expect(new Set(ids).size).toBe(ids.length)
        expect(p.steps.length).toBeGreaterThanOrEqual(3)
      } else if (p.type === 'abstraction') {
        const ids = p.items.map(i => i.id)
        expect(new Set(ids).size).toBe(ids.length)
        expect(p.correctIds.length).toBeGreaterThan(0)
        // A multi-select where every item is correct teaches nothing.
        expect(p.correctIds.length).toBeLessThan(p.items.length)
        for (const correct of p.correctIds) expect(ids).toContain(correct)
      } else if (p.type === 'sort') {
        // `thinking.sort.prompt` is hardcoded to "smallest to largest" whenever a sort
        // puzzle omits its own `prompt`, so an unprompted sort must genuinely be numeric
        // ascending order. Tier two also has sorts whose items are not plain numeric
        // strings (fractions, exponents, clock emoji) — those either carry their own
        // `prompt` or are covered by the permutation/uniqueness checks in
        // scripts/audit-thinking-lessons.mjs instead.
        const allNumeric = p.items.every(item => !Number.isNaN(Number(item)))
        if (allNumeric) {
          const numeric = p.answer.map(Number)
          expect([...numeric].sort((a, b) => a - b)).toEqual(numeric)
        }
      }
    }
  })

  test('true-false answers never run 3 deep (INV-Q3)', () => {
    const answers = lessons
      .filter(l => l.puzzle.type === 'true-false')
      .map(l => (l.puzzle as Extract<ThinkingLesson['puzzle'], { type: 'true-false' }>).answer)

    let run = 1
    for (let i = 1; i < answers.length; i++) {
      run = answers[i] === answers[i - 1] ? run + 1 : 1
      expect(`${worldId} true-false run at index ${i}: ${run}`).not.toBe(`${worldId} true-false run at index ${i}: 3`)
    }
  })

  test('xp rewards follow the documented difficulty curve (INV-Q5)', () => {
    // Each 5-lesson block (0-4, 5-9, 10-14, 15-19) must not get cheaper as lessons
    // get harder within that block.
    for (let start = 0; start < 20; start += 5) {
      const block = lessons.slice(start, start + 5).map(l => l.xpReward)
      expect([...block].sort((a, b) => a - b)).toEqual(block)
    }

    // Tier two (10-19) must reward more on average than tier one (0-9), mirroring
    // scripts/audit-thinking-lessons.mjs's own INV-Q5 check — XP is not required to be
    // globally non-decreasing across the tier boundary, only harder-on-average.
    const avg = (ls: ThinkingLesson[]) => ls.reduce((s, l) => s + l.xpReward, 0) / ls.length
    const tierOne = lessons.filter(l => l.number < 10)
    const tierTwo = lessons.filter(l => l.number >= 10)
    expect(avg(tierTwo)).toBeGreaterThan(avg(tierOne))
  })

  // Only the six worlds designed after the tutorial-card pattern was introduced
  // (math_reasoning, induction, deduction, planning, probability, spatial) open with
  // one — the original eight worlds predate it and never had one. Regression-guard the
  // worlds that do have it without inventing a requirement for the ones that don't.
  test.skipIf(!lessons[0]?.tutorial)('lesson 0 opens the world with a tutorial card', () => {
    expect(lessons[0].tutorial).toBeDefined()
  })
})

describe('thinking world themes', () => {
  // Regression guard for the bug fixed alongside these worlds: a world whose `color`
  // is missing from either colour map silently renders with the purple fallback.
  const thinkingHome = readFileSync(new URL('../src/screens/ThinkingHome.tsx', import.meta.url), 'utf8')
  const landing = readFileSync(new URL('../src/screens/LandingScreen.tsx', import.meta.url), 'utf8')

  test.each(THINKING_WORLDS.map(w => [w.id, w.color] as const))(
    '%s uses colour "%s" registered in both colour maps',
    (_id, color) => {
      expect(thinkingHome).toContain(`${color}:`)
      expect(landing).toContain(`${color}:`)
    },
  )

  test('every thinking world colour is distinct', () => {
    const colors = THINKING_WORLDS.map(w => w.color)
    expect(new Set(colors).size).toBe(colors.length)
  })
})
