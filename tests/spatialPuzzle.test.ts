import { describe, expect, test } from 'bun:test'
import { getThinkingLessonsByWorld } from '../src/data/thinkingLessons'
import { THINKING_WORLDS } from '../src/data/thinkingWorlds'
import type { SpatialGrid, SpatialPuzzle, ThinkingLesson } from '../src/types'

// Spatial Studio ships as a 3-lesson interaction prototype
// (.ai/plans/feat-spatial-puzzle-prototype.md), so it is validated here rather than by
// the 10-lesson shape asserted in thinkingWorldsContent.test.ts. When the full arc lands,
// this world moves into that suite and only the transformation checks below stay here.

const WORLD_ID = 'spatial'
const EMPTY = '.'
const FILLED = '#'
const MARKER = 'o'
const LEGAL_CELLS = new Set([EMPTY, FILLED, MARKER])

// INV-C5: copy never embeds directional or status symbols; icons live in JSX.
const FORBIDDEN_SYMBOLS = ['←', '→', '▶', '✓', '✗', '🔒']

// A label that names its own transformation answers the puzzle for the child.
const TRANSFORMATION_WORDS = [
  'turn', 'turned', 'rotate', 'rotated', 'flip', 'flipped', 'mirror', 'mirrored', 'slide', 'slid',
  'putar', 'diputar', 'balik', 'dibalik', 'cermin', 'geser', 'digeser',
]

const lessons = getThinkingLessonsByWorld(WORLD_ID)

function spatialPuzzle(lesson: ThinkingLesson): SpatialPuzzle {
  expect(`${lesson.id}: ${lesson.puzzle.type}`).toBe(`${lesson.id}: spatial`)
  return lesson.puzzle as SpatialPuzzle
}

function every(puzzle: SpatialPuzzle): SpatialGrid[] {
  return [puzzle.figure, ...puzzle.options.map(o => o.grid)]
}

// ── Transformation helpers ────────────────────────────────────
// Each returns a new grid. Rotations assume a square grid, which the shape tests assert.

function mirrorLeftRight(grid: SpatialGrid): SpatialGrid {
  return grid.map(row => [...row].reverse().join(''))
}

function mirrorTopBottom(grid: SpatialGrid): SpatialGrid {
  return [...grid].reverse()
}

function rotateClockwise(grid: SpatialGrid): SpatialGrid {
  const size = grid.length
  return Array.from({ length: size }, (_, r) =>
    Array.from({ length: size }, (_, c) => grid[size - 1 - c][r]).join(''),
  )
}

function rotateAnticlockwise(grid: SpatialGrid): SpatialGrid {
  return rotateClockwise(rotateClockwise(rotateClockwise(grid)))
}

function rotateHalfTurn(grid: SpatialGrid): SpatialGrid {
  return rotateClockwise(rotateClockwise(grid))
}

/** Crops a grid to the bounding box of its non-empty cells, so position stops mattering. */
function crop(grid: SpatialGrid): SpatialGrid {
  const filled: Array<[number, number]> = []
  grid.forEach((row, r) => {
    ;[...row].forEach((cell, c) => {
      if (cell !== EMPTY) filled.push([r, c])
    })
  })
  if (filled.length === 0) return []
  const rows = filled.map(([r]) => r)
  const cols = filled.map(([, c]) => c)
  const top = Math.min(...rows)
  const bottom = Math.max(...rows)
  const left = Math.min(...cols)
  const right = Math.max(...cols)
  return grid.slice(top, bottom + 1).map(row => row.slice(left, right + 1))
}

function show(grid: SpatialGrid): string {
  return grid.join('/')
}

function optionGrid(puzzle: SpatialPuzzle, id: string): SpatialGrid {
  const option = puzzle.options.find(o => o.id === id)
  expect(`option ${id} exists: ${option !== undefined}`).toBe(`option ${id} exists: true`)
  return (option as SpatialPuzzle['options'][number]).grid
}

// ── World and lesson shape ────────────────────────────────────

describe('Spatial Studio world', () => {
  const world = THINKING_WORLDS.find(w => w.id === WORLD_ID)

  test('is registered and always unlocked (INV-L3)', () => {
    expect(world).toBeDefined()
    expect(world?.unlockAtXP).toBe(0)
  })

  test('lessonCount matches the authored prototype lessons', () => {
    expect(lessons).toHaveLength(3)
    expect(world?.lessonCount).toBe(lessons.length)
  })

  test('lessons are contiguous from 0 (INV-L1)', () => {
    lessons.forEach((lesson, i) => {
      expect(lesson.number).toBe(i)
      expect(lesson.id).toBe(`${WORLD_ID}-${i}`)
      expect(lesson.worldId).toBe(WORLD_ID)
    })
  })

  test('lesson 0 opens the world with a tutorial card', () => {
    expect(lessons[0].tutorial).toBeDefined()
  })

  test('xp rewards follow the difficulty curve (INV-Q5)', () => {
    const rewards = lessons.map(l => l.xpReward)
    for (const lesson of lessons) {
      expect(lesson.xpReward).toBeGreaterThanOrEqual(10)
      expect(lesson.xpReward).toBeLessThanOrEqual(lesson.number <= 4 ? 15 : 25)
    }
    expect([...rewards].sort((a, b) => a - b)).toEqual(rewards)
  })
})

// ── Puzzle data integrity ─────────────────────────────────────

describe.each(lessons.map(l => [l.id, l] as const))('%s', (_id, lesson) => {
  const puzzle = spatialPuzzle(lesson)

  test('grids are rectangular and use only the documented cell alphabet', () => {
    for (const grid of every(puzzle)) {
      expect(grid.length).toBeGreaterThan(0)
      const width = grid[0].length
      expect(width).toBeGreaterThan(0)
      for (const row of grid) {
        expect(`${lesson.id} row "${row}" is ${row.length} wide`).toBe(`${lesson.id} row "${row}" is ${width} wide`)
        for (const cell of row) {
          expect(`${lesson.id} cell "${cell}" legal: ${LEGAL_CELLS.has(cell)}`).toEndWith('legal: true')
        }
      }
    }
  })

  test('every option grid matches the prompt figure dimensions', () => {
    const rows = puzzle.figure.length
    const cols = puzzle.figure[0].length
    for (const option of puzzle.options) {
      expect(`${option.id}: ${option.grid.length}x${option.grid[0].length}`).toBe(`${option.id}: ${rows}x${cols}`)
    }
  })

  test('each grid carries at most one orientation marker', () => {
    for (const grid of every(puzzle)) {
      const markers = [...grid.join('')].filter(cell => cell === MARKER).length
      expect(`${lesson.id} "${show(grid)}" markers: ${markers}`).toEndWith(`markers: ${Math.min(markers, 1)}`)
    }
  })

  test('offers exactly 4 options with unique ids and one reachable answer', () => {
    expect(puzzle.options).toHaveLength(4)
    const ids = puzzle.options.map(o => o.id)
    expect(new Set(ids).size).toBe(ids.length)
    expect(ids).toContain(puzzle.answerId)
  })

  test('no two options draw the same figure', () => {
    const drawings = puzzle.options.map(o => show(o.grid))
    expect(new Set(drawings).size).toBe(drawings.length)
  })

  test('every distractor is a real shape, never an empty frame (INV-Q4)', () => {
    for (const option of puzzle.options) {
      expect(`${option.id}: ${crop(option.grid).length > 0 ? 'has shape' : 'EMPTY'}`).toEndWith('has shape')
    }
  })

  test('localized copy has non-empty en and id and no symbols (INV-C2, INV-C5, INV-I1)', () => {
    const strings: Array<{ path: string; value: { en: string; id: string } }> = [
      { path: 'title', value: lesson.title },
      { path: 'mascotMessage', value: lesson.mascotMessage },
      { path: 'puzzle.question', value: puzzle.question },
      ...puzzle.options.map(o => ({ path: `option.${o.id}.label`, value: o.label })),
    ]
    if (lesson.tutorial) {
      strings.push({ path: 'tutorial.title', value: lesson.tutorial.title })
      strings.push({ path: 'tutorial.body', value: lesson.tutorial.body })
      if (lesson.tutorial.example) {
        strings.push({ path: 'tutorial.example', value: lesson.tutorial.example })
      }
    }
    for (const { path, value } of strings) {
      expect(`${path}.en${value.en.trim() ? ' ok' : ' EMPTY'}`).toEndWith(' ok')
      expect(`${path}.id${value.id.trim() ? ' ok' : ' EMPTY'}`).toEndWith(' ok')
      for (const symbol of FORBIDDEN_SYMBOLS) {
        const has = value.en.includes(symbol) || value.id.includes(symbol)
        expect(`${path}${has ? ' HAS-SYMBOL' : ' clean'}`).toEndWith(' clean')
      }
    }
  })

  test('option labels never name their own transformation', () => {
    for (const option of puzzle.options) {
      const text = `${option.label.en} ${option.label.id}`.toLowerCase()
      for (const word of TRANSFORMATION_WORDS) {
        const leaks = new RegExp(`\\b${word}\\b`).test(text)
        expect(`${option.id} "${text}"${leaks ? ' LEAKS' : ' neutral'}`).toEndWith(' neutral')
      }
    }
  })
})

// ── The authored answers really are the transformations they claim ──

describe('authored answers match their declared transformation', () => {
  test('spatial-0 — the answer is the figure translated, and nothing else is', () => {
    const puzzle = spatialPuzzle(lessons[0])
    const shape = show(crop(puzzle.figure))

    expect(show(crop(optionGrid(puzzle, puzzle.answerId)))).toBe(shape)
    // ...but moved, so it must not sit in the original cells.
    expect(show(optionGrid(puzzle, puzzle.answerId))).not.toBe(show(puzzle.figure))

    // Distractors are the named spatial errors, not unrelated shapes (INV-Q4).
    expect(show(crop(optionGrid(puzzle, 'b')))).toBe(show(crop(mirrorLeftRight(puzzle.figure))))
    expect(show(crop(optionGrid(puzzle, 'c')))).toBe(show(crop(rotateClockwise(crop(puzzle.figure)))))
    expect(show(crop(optionGrid(puzzle, 'd')))).not.toBe(shape)

    for (const option of puzzle.options) {
      if (option.id === puzzle.answerId) continue
      expect(`${option.id} is a translation: ${show(crop(option.grid)) === shape}`).toEndWith('false')
    }
  })

  test('spatial-1 — the answer is the left-to-right mirror', () => {
    const puzzle = spatialPuzzle(lessons[1])
    expect(show(optionGrid(puzzle, puzzle.answerId))).toBe(show(mirrorLeftRight(puzzle.figure)))
    // The wrong-axis distractor is the top-to-bottom mirror.
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(mirrorTopBottom(puzzle.figure)))
  })

  test('spatial-2 — the answer is the quarter turn clockwise, and each distractor is a different turn', () => {
    const puzzle = spatialPuzzle(lessons[2])
    expect(puzzle.figure.length).toBe(puzzle.figure[0].length)

    expect(show(optionGrid(puzzle, puzzle.answerId))).toBe(show(rotateClockwise(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(mirrorLeftRight(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'b'))).toBe(show(rotateHalfTurn(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'd'))).toBe(show(rotateAnticlockwise(puzzle.figure)))
  })

  test('the answer is not always in the same slot', () => {
    const answerIds = lessons.map(l => spatialPuzzle(l).answerId)
    expect(new Set(answerIds).size).toBe(answerIds.length)
  })
})
