import { describe, expect, test } from 'bun:test'
import { getLessonsByWorld, LESSONS } from '../src/data/lessons'
import { getThinkingLessonsByWorld } from '../src/data/thinkingLessons'
import { THINKING_WORLDS } from '../src/data/thinkingWorlds'
import { getSafetyLessonsByWorld } from '../src/data/safetyLessons'
import { SAFETY_WORLDS } from '../src/data/safetyWorlds'
import { WORLDS } from '../src/data/worlds'
import { maxStarsForThresholds } from '../src/data/xpSystem'
import type { PlayerProgress } from '../src/types'
import {
  getAllStats,
  getPathStats,
  THINKING_MAX_STARS_PER_LESSON,
} from '../src/utils/progressStats'

function makeProgress(
  lessons: Record<string, { stars: number; completed?: boolean }>,
  xp = 0
): PlayerProgress {
  return {
    xp,
    level: 1,
    badges: [],
    totalStars: Object.values(lessons).reduce((sum, l) => sum + l.stars, 0),
    lastPlayed: '',
    lessons: Object.fromEntries(
      Object.entries(lessons).map(([id, l]) => [
        id,
        { stars: l.stars, completed: l.completed ?? true, xpEarned: 0, attempts: 1 },
      ])
    ),
  }
}

const EMPTY = makeProgress({})

describe('empty progress', () => {
  test('every path starts at zero stars and zero percent', () => {
    const stats = getAllStats(EMPTY)
    expect(stats.blocks.stars).toBe(0)
    expect(stats.thinking.stars).toBe(0)
    expect(stats.safety.stars).toBe(0)
    expect(stats.stars).toBe(0)
    expect(stats.percent).toBe(0)
    expect(stats.blocks.worldsFinished).toBe(0)
    expect(stats.thinking.worldsFinished).toBe(0)
    expect(stats.safety.worldsFinished).toBe(0)
  })

  test('maximums match the lesson tables', () => {
    const stats = getAllStats(EMPTY)

    const blocksMax = WORLDS.reduce(
      (sum, w) =>
        sum + getLessonsByWorld(w.id).reduce((s, l) => s + maxStarsForThresholds(l.starThresholds), 0),
      0
    )
    const thinkingMax = THINKING_WORLDS.reduce(
      (sum, w) => sum + getThinkingLessonsByWorld(w.id).length * THINKING_MAX_STARS_PER_LESSON,
      0
    )
    const safetyMax = SAFETY_WORLDS.reduce(
      (sum, w) => sum + getSafetyLessonsByWorld(w.id).length * THINKING_MAX_STARS_PER_LESSON,
      0
    )

    expect(stats.blocks.maxStars).toBe(blocksMax)
    expect(stats.thinking.maxStars).toBe(thinkingMax)
    expect(stats.safety.maxStars).toBe(safetyMax)
    expect(stats.maxStars).toBe(blocksMax + thinkingMax + safetyMax)
    expect(stats.blocks.maxStars).toBeGreaterThan(0)
    expect(stats.thinking.maxStars).toBeGreaterThan(0)
    expect(stats.safety.maxStars).toBeGreaterThan(0)
  })

  test('every world is listed once per path', () => {
    const stats = getAllStats(EMPTY)
    expect(stats.blocks.worlds.map(w => w.id)).toEqual(WORLDS.map(w => w.id))
    expect(stats.thinking.worlds.map(w => w.id)).toEqual(THINKING_WORLDS.map(w => w.id))
    expect(stats.safety.worlds.map(w => w.id)).toEqual(SAFETY_WORLDS.map(w => w.id))
  })
})

describe('path isolation', () => {
  test('thinking stars never leak into the blocks total', () => {
    const progress = makeProgress({ 'patterns-0': { stars: 3 }, 'logic-0': { stars: 2 } })
    const stats = getAllStats(progress)

    expect(stats.thinking.stars).toBe(5)
    expect(stats.blocks.stars).toBe(0)
    expect(stats.stars).toBe(5)
  })

  test('blocks stars never leak into the thinking total', () => {
    const progress = makeProgress({ 'jungle-1': { stars: 3 }, 'jungle-2': { stars: 2 } })
    const stats = getAllStats(progress)

    expect(stats.blocks.stars).toBe(5)
    expect(stats.thinking.stars).toBe(0)
    expect(stats.stars).toBe(5)
  })

  test('the two paths sum to the combined total', () => {
    const progress = makeProgress({ 'jungle-1': { stars: 3 }, 'patterns-0': { stars: 3 } })
    const stats = getAllStats(progress)
    expect(stats.stars).toBe(stats.blocks.stars + stats.thinking.stars)
  })
})

describe('tutorial lessons', () => {
  test('tutorial stars are excluded from the blocks total', () => {
    const tutorial = LESSONS.find(l => l.isTutorial)
    expect(tutorial).toBeDefined()

    const progress = makeProgress({ [tutorial!.id]: { stars: 1 } })
    expect(getPathStats(progress, 'blocks').stars).toBe(0)
  })

  test('a world is finished without its tutorial being counted', () => {
    const lessons = getLessonsByWorld('jungle')
    const progress = makeProgress(
      Object.fromEntries(lessons.map(l => [l.id, { stars: 1 }])),
      0
    )
    const jungle = getPathStats(progress, 'blocks').worlds.find(w => w.id === 'jungle')

    expect(jungle?.lessonsTotal).toBe(lessons.length)
    expect(jungle?.lessonsCompleted).toBe(lessons.length)
    expect(jungle?.finished).toBe(true)
  })
})

describe('per-world figures', () => {
  test('stars, max, and percent are scoped to the world', () => {
    const lessons = getLessonsByWorld('jungle')
    const first = lessons[0]
    const progress = makeProgress({ [first.id]: { stars: 2 } })
    const jungle = getPathStats(progress, 'blocks').worlds.find(w => w.id === 'jungle')

    const worldMax = lessons.reduce((s, l) => s + maxStarsForThresholds(l.starThresholds), 0)
    expect(jungle?.stars).toBe(2)
    expect(jungle?.maxStars).toBe(worldMax)
    expect(jungle?.percent).toBe(Math.round((2 / worldMax) * 100))
    expect(jungle?.finished).toBe(false)
  })

  test('an incomplete lesson still counts its best stars but not as completed', () => {
    const lessons = getThinkingLessonsByWorld('patterns')
    const progress = makeProgress({ [lessons[0].id]: { stars: 3, completed: false } })
    const world = getPathStats(progress, 'thinking').worlds.find(w => w.id === 'patterns')

    expect(world?.stars).toBe(3)
    expect(world?.lessonsCompleted).toBe(0)
    expect(world?.finished).toBe(false)
  })

  test('a full sweep of a thinking world reaches 100%', () => {
    const lessons = getThinkingLessonsByWorld('patterns')
    const progress = makeProgress(
      Object.fromEntries(lessons.map(l => [l.id, { stars: THINKING_MAX_STARS_PER_LESSON }]))
    )
    const world = getPathStats(progress, 'thinking').worlds.find(w => w.id === 'patterns')

    expect(world?.percent).toBe(100)
    expect(world?.finished).toBe(true)
    expect(getPathStats(progress, 'thinking').worldsFinished).toBe(1)
  })
})

describe('unlock state', () => {
  test('INV-L2 — every blocks world, main and bonus, is unlocked from the start', () => {
    const locked = getPathStats(EMPTY, 'blocks').worlds
    expect(locked.every(w => w.unlocked)).toBe(true)
    expect(locked.find(w => w.id === 'space')?.unlocked).toBe(true)
    expect(locked.find(w => w.id === 'jurassic')?.unlocked).toBe(true)

    const cleared = getPathStats(makeProgress({ 'portal-4': { stars: 3 } }), 'blocks').worlds
    expect(cleared.every(w => w.unlocked)).toBe(true)
  })

  test('INV-L3 — every thinking world is unlocked from the start', () => {
    const stats = getPathStats(EMPTY, 'thinking')
    expect(stats.worlds.every(w => w.unlocked)).toBe(true)
    expect(stats.worldsUnlocked).toBe(stats.worldsTotal)
  })

  test('INV-L3 — every safety world is unlocked from the start', () => {
    const stats = getPathStats(EMPTY, 'safety')
    expect(stats.worlds.every(w => w.unlocked)).toBe(true)
    expect(stats.worldsUnlocked).toBe(stats.worldsTotal)
  })
})
