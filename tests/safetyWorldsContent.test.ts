import { readFileSync } from 'node:fs'
import { describe, expect, test } from 'bun:test'
import { getSafetyLessonsByWorld } from '../src/data/safetyLessons'
import { SAFETY_WORLDS } from '../src/data/safetyWorlds'

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

describe.each(SAFETY_WORLDS.map(w => w.id))('safety world: %s', worldId => {
  const world = SAFETY_WORLDS.find(w => w.id === worldId)!
  const lessons = getSafetyLessonsByWorld(worldId)

  test('is registered and always unlocked (INV-L3)', () => {
    expect(world).toBeDefined()
    expect(world.unlockAtXP).toBe(0)
    expect(world.lessonCount).toBe(lessons.length)
  })

  // MVP ships tier one only (0-9) — see .ai/plans/2026-08-31-feat-digital-citizenship-path.md.
  test('has 10 sequentially numbered lessons (INV-L1)', () => {
    expect(lessons).toHaveLength(10)
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
      if (p.type === 'if-then') {
        const ids = p.options.map(o => o.id)
        expect(new Set(ids).size).toBe(ids.length)
        expect(ids).toContain(p.answerId)
        expect(p.options).toHaveLength(4)
      } else if (p.type === 'true-false') {
        expect(typeof p.answer).toBe('boolean')
      } else if (p.type === 'abstraction') {
        const ids = p.items.map(i => i.id)
        expect(new Set(ids).size).toBe(ids.length)
        expect(p.correctIds.length).toBeGreaterThan(0)
        // A multi-select where every item is correct teaches nothing.
        expect(p.correctIds.length).toBeLessThan(p.items.length)
        for (const correct of p.correctIds) expect(ids).toContain(correct)
      } else if (p.type === 'match') {
        const leftIds = p.pairs.map(pair => pair.leftId)
        const rightIds = p.pairs.map(pair => pair.rightId)
        expect(new Set(leftIds).size).toBe(leftIds.length)
        expect(new Set(rightIds).size).toBe(rightIds.length)
      } else if (p.type === 'sort') {
        expect([...p.items].sort().join()).toBe([...p.answer].sort().join())
        expect(p.items.join()).not.toBe(p.answer.join())
      } else if (p.type === 'multi-step') {
        expect(p.steps.length).toBeGreaterThanOrEqual(2)
        for (const step of p.steps) {
          const ids = step.options.map(o => o.id)
          expect(new Set(ids).size).toBe(ids.length)
          expect(ids).toContain(step.answerId)
        }
      }
    }
  })

  test('true-false answers never run 3 deep (INV-Q3)', () => {
    const answers = lessons
      .filter(l => l.puzzle.type === 'true-false')
      .map(l => (l.puzzle as { type: 'true-false'; answer: boolean }).answer)

    let run = 1
    for (let i = 1; i < answers.length; i++) {
      run = answers[i] === answers[i - 1] ? run + 1 : 1
      expect(`${worldId} true-false run at index ${i}: ${run}`).not.toBe(`${worldId} true-false run at index ${i}: 3`)
    }
  })

  test('the harder half (5-9) rewards more XP on average than the easier half (0-4) (INV-Q5)', () => {
    const avg = (ls: typeof lessons) => ls.reduce((s, l) => s + l.xpReward, 0) / ls.length
    const easier = lessons.slice(0, 5)
    const harder = lessons.slice(5, 10)
    expect(avg(harder)).toBeGreaterThan(avg(easier))
  })
})

describe('safety world themes', () => {
  // Regression guard mirroring the thinking-path check: a world whose `color` is
  // missing from either colour map silently renders with the purple fallback.
  const worldColorThemes = readFileSync(new URL('../src/utils/worldColorThemes.ts', import.meta.url), 'utf8')
  const landing = readFileSync(new URL('../src/screens/LandingScreen.tsx', import.meta.url), 'utf8')

  test.each(SAFETY_WORLDS.map(w => [w.id, w.color] as const))(
    '%s uses colour "%s" registered in both colour maps',
    (_id, color) => {
      expect(worldColorThemes).toContain(`${color}:`)
      expect(landing).toContain(`${color}:`)
    },
  )

  test('every safety world colour is distinct', () => {
    const colors = SAFETY_WORLDS.map(w => w.color)
    expect(new Set(colors).size).toBe(colors.length)
  })
})
