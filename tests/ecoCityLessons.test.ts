import { describe, expect, test } from 'bun:test'
import { applyAction, buildInitialState, checkWin, MAX_ACTIONS } from '../src/engine/gameEngine'
import { isLessonAvailable } from '../src/store/useProgress'
import type { ActionType, Lesson, PlayerProgress } from '../src/types'
import { getLessonsByWorld, getWorldTutorial } from '../src/data/lessons'

const R: ActionType = 'move_right'
const L: ActionType = 'move_left'
const U: ActionType = 'move_up'
const D: ActionType = 'move_down'

const times = (n: number, ...pattern: ActionType[]): ActionType[] =>
  Array.from({ length: n }, () => pattern).flat()

/** Canonical solution for eco-1 … eco-10, in lesson order. */
const solutions: ActionType[][] = [
  // 1 — two straight legs
  [...times(3, R), ...times(2, D)],
  // 2 — one loop along the solar street
  times(6, R),
  // 3 — three straight runs around the neighbourhood edge
  [...times(5, R), ...times(4, D), ...times(3, L)],
  // 4 — the same length variable driving three loops
  [...times(3, R), ...times(3, D), ...times(3, R)],
  // 5 — drop to the open lane, then east and south
  [...times(2, D), ...times(6, R), ...times(2, D)],
  // 6 — the named block shape, called three times
  times(3, R, D, R),
  // 7 — district function plus the link road, three times
  times(3, R, D, R, D, R),
  // 8 — the three stops from the list, in order
  [...times(2, R), ...times(2, U), ...times(3, R), ...times(4, D), ...times(3, R)],
  // 9 — the cheaper plan, through the north gate
  [...times(2, U), ...times(6, R), ...times(2, D)],
  // 10 — function, loop over it, then the run home around the river
  [...times(3, R, R, D), ...times(2, R), ...times(3, D)],
]

function run(lesson: Lesson, actions: ActionType[]) {
  return actions.reduce((state, type) => applyAction(state, { type }, lesson), buildInitialState(lesson))
}

describe('Eco City', () => {
  const lessons = getLessonsByWorld('eco')

  test('ships a tutorial plus ten lessons', () => {
    expect(getWorldTutorial('eco')).toBeDefined()
    expect(lessons).toHaveLength(10)
    expect(lessons.map(l => l.id)).toEqual(Array.from({ length: 10 }, (_, i) => `eco-${i + 1}`))
  })

  test('the tutorial route is solvable', () => {
    const tutorial = getWorldTutorial('eco')!
    const finalState = run(tutorial, times(4, R))
    expect(finalState.status).not.toBe('crashed')
    expect(checkWin(finalState, tutorial)).toBe(true)
  })

  test('every canonical route stays bounded, avoids obstacles and wins', () => {
    lessons.forEach((lesson, index) => {
      const actions = solutions[index]!
      expect(actions.length).toBeLessThanOrEqual(MAX_ACTIONS)
      const finalState = run(lesson, actions)
      expect(finalState.status).not.toBe('crashed')
      expect(checkWin(finalState, lesson)).toBe(true)
    })
  })

  test('no route wins before its last token pickup', () => {
    lessons.forEach((lesson, index) => {
      const actions = solutions[index]!
      // Walk the route and find the action that picks up the final token.
      let state = buildInitialState(lesson)
      let lastPickup = -1
      actions.forEach((type, step) => {
        const before = state.collectedIds.size
        state = applyAction(state, { type }, lesson)
        if (state.collectedIds.size > before) lastPickup = step
      })
      expect(lastPickup).toBeGreaterThan(-1)
      expect(checkWin(run(lesson, actions.slice(0, lastPickup)), lesson)).toBe(false)
    })
  })

  test('no token sits on a start cell or an obstacle', () => {
    const all = [getWorldTutorial('eco')!, ...lessons]
    all.forEach(lesson => {
      lesson.items.forEach(item => {
        const [row, col] = item.pos
        expect(row).toBeGreaterThanOrEqual(0)
        expect(col).toBeGreaterThanOrEqual(0)
        expect(row).toBeLessThan(lesson.gridRows)
        expect(col).toBeLessThan(lesson.gridCols)
        expect(lesson.cells[row]![col]).not.toBe('obstacle')
        expect(item.pos).not.toEqual(lesson.startPos)
      })
      const [startRow, startCol] = lesson.startPos
      expect(lesson.cells[startRow]![startCol]).not.toBe('obstacle')
    })
  })

  test('the obstacle lessons really do block the naive route', () => {
    const [, , , , gateClosed, , , , twoGates, finale] = lessons
    // eco-5: driving straight east along row 0 hits the closed north gate.
    expect(run(gateClosed!, times(4, R)).status).toBe('crashed')
    // eco-9: driving straight east from the start hits the tram line.
    expect(run(twoGates!, times(4, R)).status).toBe('crashed')
    // eco-10: dropping south early hits the river.
    expect(run(finale!, times(5, D)).status).toBe('crashed')
  })

  test('INV-L1: bonus lessons need no finale; the tutorial is optional, lessons after it unlock in order', () => {
    const progress: PlayerProgress = { xp: 0, level: 1, lessons: {}, badges: [], totalStars: 0, lastPlayed: '' }
    expect(isLessonAvailable(progress, 'eco-0', 'eco')).toBe(true)
    expect(isLessonAvailable(progress, 'eco-1', 'eco')).toBe(true)
    expect(isLessonAvailable(progress, 'eco-2', 'eco')).toBe(false)
    progress.lessons['eco-1'] = { completed: true, stars: 1, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'eco-2', 'eco')).toBe(true)
  })
})
