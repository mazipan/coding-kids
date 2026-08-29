import { describe, expect, test } from 'bun:test'
import { applyAction, buildInitialState, checkWin } from '../src/engine/gameEngine'
import { isLessonAvailable } from '../src/store/useProgress'
import type { ActionType, PlayerProgress } from '../src/types'
import { getLessonsByWorld } from '../src/data/lessons'

const solutions: ActionType[][] = [
  [...Array(4).fill('move_right')],
  [...Array(4).fill('move_right'), ...Array(2).fill('move_down')],
  [...Array(3).fill(['move_right', 'move_down']).flat()],
  [...Array(2).fill(['move_right', 'move_down', 'move_right', 'move_down']).flat()],
  [...Array(3).fill(['move_right', 'move_right', 'move_down']).flat()],
  [...Array(6).fill('move_right')],
  [...Array(2).fill(['move_right', 'move_right', 'move_down', 'move_down']).flat()],
  [...Array(6).fill(['move_right', 'move_down']).flat()],
  [...Array(2).fill(['move_right', 'move_right', 'move_down', 'move_down', 'move_right', 'move_right', 'move_up', 'move_up']).flat(), 'move_right'],
  ['move_right','move_right','move_down','move_down','move_left','move_left','move_down','move_down',...Array(7).fill('move_right'),...Array(2).fill('move_down')],
] as ActionType[][]

describe('Code Orchestra', () => {
  test('all canonical routes remain bounded and solve their lesson', () => {
    const lessons = getLessonsByWorld('orchestra')
    expect(lessons).toHaveLength(10)
    lessons.forEach((lesson, index) => {
      const finalState = solutions[index].reduce(
        (state, type) => applyAction(state, { type }, lesson),
        buildInitialState(lesson),
      )
      expect(finalState.status).not.toBe('crashed')
      expect(checkWin(finalState, lesson)).toBe(true)
    })
  })

  test('INV-L1: bonus lessons need no finale, but still unlock sequentially behind their own tutorial', () => {
    const progress: PlayerProgress = { xp: 0, level: 1, lessons: {}, badges: [], totalStars: 0, lastPlayed: '' }
    expect(isLessonAvailable(progress, 'orchestra-0', 'orchestra')).toBe(true)
    expect(isLessonAvailable(progress, 'orchestra-1', 'orchestra')).toBe(false)
    progress.lessons['orchestra-0'] = { completed: true, stars: 1, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'orchestra-1', 'orchestra')).toBe(true)
    expect(isLessonAvailable(progress, 'orchestra-2', 'orchestra')).toBe(false)
    progress.lessons['orchestra-1'] = { completed: true, stars: 1, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'orchestra-2', 'orchestra')).toBe(true)
    expect(isLessonAvailable(progress, 'jurassic-2', 'jurassic')).toBe(false)
  })

  test('the finale cannot be won by walking directly to the stage', () => {
    const finale = getLessonsByWorld('orchestra')[9]
    const shortcut = [...Array(6).fill('move_down'), ...Array(7).fill('move_right')] as ActionType[]
    const finalState = shortcut.reduce(
      (state, type) => applyAction(state, { type }, finale),
      buildInitialState(finale),
    )
    expect(checkWin(finalState, finale)).toBe(false)

    const beforeFinale = solutions[9].slice(0, -2).reduce(
      (state, type) => applyAction(state, { type }, finale),
      buildInitialState(finale),
    )
    expect(checkWin(beforeFinale, finale)).toBe(false)
  })
})
