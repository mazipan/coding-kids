import { describe, expect, test } from 'bun:test'
import { isLessonAvailable } from '../src/store/useProgress'
import type { PlayerProgress } from '../src/types'

function emptyProgress(): PlayerProgress {
  return { xp: 0, level: 1, lessons: {}, badges: [], totalStars: 0, lastPlayed: '' }
}

describe('INV-L1 — lesson unlock, main blocks worlds', () => {
  test('the tutorial (lesson 0) is optional — lesson 1 is open immediately', () => {
    const progress = emptyProgress()
    expect(isLessonAvailable(progress, 'jungle-0', 'jungle')).toBe(true)
    expect(isLessonAvailable(progress, 'jungle-1', 'jungle')).toBe(true)
  })

  test('lesson 2+ still requires the previous lesson, regardless of the tutorial', () => {
    const progress = emptyProgress()
    expect(isLessonAvailable(progress, 'jungle-2', 'jungle')).toBe(false)

    progress.lessons['jungle-1'] = { completed: true, stars: 1, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'jungle-2', 'jungle')).toBe(true)
    expect(isLessonAvailable(progress, 'jungle-3', 'jungle')).toBe(false)
  })
})

describe('INV-L1 — lesson unlock, thinking path (no tutorial concept)', () => {
  test('lesson 1 needs lesson 0 completed', () => {
    const progress = emptyProgress()
    expect(isLessonAvailable(progress, 'patterns-0', 'patterns')).toBe(true)
    expect(isLessonAvailable(progress, 'patterns-1', 'patterns')).toBe(false)

    progress.lessons['patterns-0'] = { completed: true, stars: 3, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'patterns-1', 'patterns')).toBe(true)
  })
})
