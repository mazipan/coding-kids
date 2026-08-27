import { describe, expect, test } from 'bun:test'
import { getThinkingLessonsByWorld } from '../src/data/thinkingLessons'
import { THINKING_WORLDS } from '../src/data/thinkingWorlds'
import type { GridSelectPuzzle, IfThenPuzzle, MultiStepPuzzle, SpatialGrid, SpatialPuzzle, ThinkingLesson } from '../src/types'

// Spatial Studio's world shape — 20 sequential lessons, unlockAtXP 0, the xp curve, the
// lesson-0 tutorial, bilingual copy — is covered by thinkingWorldsContent.test.ts, which
// includes this world. What lives here is everything specific to the `spatial` puzzle type:
// the figure grids, the option structure, and whether each authored answer really is the
// transformation, route, or fold its own question describes.
//
// Tier two (#68) also added 5 lessons of other puzzle types to this world — `grid-select`
// (spatial-11, spatial-17), `multi-step` (spatial-13, spatial-18), `if-then` (spatial-15).
// Their structural shape and bilingual copy are already covered generically, across every
// world, by scripts/audit-thinking-lessons.mjs and thinkingWorldsContent.test.ts — not
// re-checked here. What those two don't check is puzzle-specific geometry/logic correctness,
// so each of the 5 gets its own hand-derived answer check below, in the same style as the
// `spatial`-typed lessons' transformation checks (#70).

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

function lessonById(id: string): ThinkingLesson {
  const lesson = lessons.find(l => l.id === id)
  expect(`${id} exists: ${lesson !== undefined}`).toBe(`${id} exists: true`)
  return lesson as ThinkingLesson
}

// The checks below read puzzle.figure/options/answerId, which only SpatialPuzzle has —
// grid-select/multi-step/if-then are different shapes, not degenerate SpatialPuzzles.
const spatialTypeLessons = lessons.filter(l => l.puzzle.type === 'spatial')

// ── World and lesson shape ────────────────────────────────────

// ── Puzzle data integrity ─────────────────────────────────────

describe.each(spatialTypeLessons.map(l => [l.id, l] as const))('%s', (_id, lesson) => {
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

// ── Route and fold simulators ─────────────────────────────────
// These replay the instructions a lesson gives the child and build the grid that must
// come out, so an authored answer that does not match its own question fails the suite.

const STEP = { up: [-1, 0], down: [1, 0], left: [0, -1], right: [0, 1] } as const
/** Headings in clockwise order, so turning right is +1 and turning left is -1 (mod 4). */
const HEADINGS = ['up', 'right', 'down', 'left'] as const

function blank(rows: number, cols: number): string[][] {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => EMPTY))
}

function paint(cells: string[][], trail: Array<[number, number]>, markAt: 'start' | 'end'): SpatialGrid {
  for (const [r, c] of trail) cells[r][c] = FILLED
  const [mr, mc] = markAt === 'start' ? trail[0] : trail[trail.length - 1]
  cells[mr][mc] = MARKER
  return cells.map(row => row.join(''))
}

/** Walks absolute compass steps, e.g. "2 squares down, then 2 squares to the right". */
function walkRoute(
  size: number,
  start: [number, number],
  steps: Array<[keyof typeof STEP, number]>,
  markAt: 'start' | 'end',
): SpatialGrid {
  const trail: Array<[number, number]> = [start]
  let [r, c] = start
  for (const [direction, count] of steps) {
    const [dr, dc] = STEP[direction]
    for (let i = 0; i < count; i++) {
      r += dr
      c += dc
      expect(`step to ${r},${c} stays on the map: ${r >= 0 && r < size && c >= 0 && c < size}`).toEndWith('true')
      trail.push([r, c])
    }
  }
  return paint(blank(size, size), trail, markAt)
}

/** Drives a robot that turns relative to its own heading: 'R'/'L' turn, a number drives. */
function driveRobot(
  size: number,
  start: [number, number],
  facing: (typeof HEADINGS)[number],
  program: Array<'R' | 'L' | number>,
): SpatialGrid {
  const trail: Array<[number, number]> = [start]
  let [r, c] = start
  let heading = HEADINGS.indexOf(facing)
  for (const instruction of program) {
    if (instruction === 'R') {
      heading = (heading + 1) % 4
    } else if (instruction === 'L') {
      heading = (heading + 3) % 4
    } else {
      const [dr, dc] = STEP[HEADINGS[heading]]
      for (let i = 0; i < instruction; i++) {
        r += dr
        c += dc
        expect(`drive to ${r},${c} stays on the map: ${r >= 0 && r < size && c >= 0 && c < size}`).toEndWith('true')
        trail.push([r, c])
      }
    }
  }
  return paint(blank(size, size), trail, 'end')
}

/** Folds the top half of a grid straight down onto the bottom half. */
function foldTopOntoBottom(grid: SpatialGrid): SpatialGrid {
  const rows = grid.length
  const half = rows / 2
  expect(`${rows} rows fold evenly: ${Number.isInteger(half)}`).toEndWith('true')
  const out = grid.slice(half).map(row => [...row])
  for (let r = 0; r < half; r++) {
    const landing = rows - 1 - r - half
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] !== EMPTY) out[landing][c] = grid[r][c]
    }
  }
  return [...Array.from({ length: half }, () => EMPTY.repeat(grid[0].length)), ...out.map(row => row.join(''))]
}

/** Erases the orientation marker, leaving the cell empty. */
function withoutMarker(grid: SpatialGrid): SpatialGrid {
  return grid.map(row => row.replaceAll(MARKER, EMPTY))
}

function findMarker(grid: SpatialGrid): [number, number] {
  for (let r = 0; r < grid.length; r++) {
    const c = grid[r].indexOf(MARKER)
    if (c !== -1) return [r, c]
  }
  throw new Error(`no marker in ${show(grid)}`)
}

// ── The authored answers really are what each lesson claims ───

function puzzleFor(number: number): SpatialPuzzle {
  return spatialPuzzle(spatialTypeLessons[number])
}

function answerGrid(puzzle: SpatialPuzzle): SpatialGrid {
  return optionGrid(puzzle, puzzle.answerId)
}

describe('authored answers match their declared transformation', () => {
  test('0 — the answer is the figure translated, and no distractor is', () => {
    const puzzle = puzzleFor(0)
    const shape = show(crop(puzzle.figure))

    expect(show(crop(answerGrid(puzzle)))).toBe(shape)
    expect(show(answerGrid(puzzle))).not.toBe(show(puzzle.figure))

    // Distractors are the named spatial errors, not unrelated shapes (INV-Q4).
    expect(show(crop(optionGrid(puzzle, 'b')))).toBe(show(crop(mirrorLeftRight(puzzle.figure))))
    expect(show(crop(optionGrid(puzzle, 'c')))).toBe(show(crop(rotateClockwise(crop(puzzle.figure)))))
    expect(show(crop(optionGrid(puzzle, 'd')))).not.toBe(shape)

    for (const option of puzzle.options) {
      if (option.id === puzzle.answerId) continue
      expect(`${option.id} is a translation: ${show(crop(option.grid)) === shape}`).toEndWith('false')
    }
  })

  test('1 — the answer is the left-to-right mirror', () => {
    const puzzle = puzzleFor(1)
    expect(show(answerGrid(puzzle))).toBe(show(mirrorLeftRight(puzzle.figure)))
    // The wrong-axis distractor is the top-to-bottom mirror.
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(mirrorTopBottom(puzzle.figure)))
  })

  test('2 — the answer is the top-to-bottom mirror', () => {
    const puzzle = puzzleFor(2)
    expect(show(answerGrid(puzzle))).toBe(show(mirrorTopBottom(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(mirrorLeftRight(puzzle.figure)))
    // A half turn looks close to a fold but reverses left and right as well.
    expect(show(optionGrid(puzzle, 'b'))).toBe(show(rotateHalfTurn(puzzle.figure)))
  })

  test('3 — the answer is the quarter turn clockwise, and each distractor is a different turn', () => {
    const puzzle = puzzleFor(3)
    expect(puzzle.figure.length).toBe(puzzle.figure[0].length)
    expect(show(answerGrid(puzzle))).toBe(show(rotateClockwise(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(mirrorLeftRight(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'b'))).toBe(show(rotateHalfTurn(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'd'))).toBe(show(rotateAnticlockwise(puzzle.figure)))
  })

  test('4 — the answer is the route the question actually describes', () => {
    const puzzle = puzzleFor(4)
    const start: [number, number] = [0, 0]
    expect(show(puzzle.figure)).toBe(show(paint(blank(4, 4), [start], 'start')))

    expect(show(answerGrid(puzzle))).toBe(show(walkRoute(4, start, [['down', 2], ['right', 2]], 'start')))
    // Order swapped, one step short, one step too far.
    expect(show(optionGrid(puzzle, 'b'))).toBe(show(walkRoute(4, start, [['right', 2], ['down', 2]], 'start')))
    expect(show(optionGrid(puzzle, 'c'))).toBe(show(walkRoute(4, start, [['down', 1], ['right', 2]], 'start')))
    expect(show(optionGrid(puzzle, 'd'))).toBe(show(walkRoute(4, start, [['down', 3], ['right', 2]], 'start')))
  })

  test('5 — the answer is a turn then a flip, and the wrong order is a separate option', () => {
    const puzzle = puzzleFor(5)
    const turnThenFlip = mirrorLeftRight(rotateClockwise(puzzle.figure))
    const flipThenTurn = rotateClockwise(mirrorLeftRight(puzzle.figure))

    expect(show(answerGrid(puzzle))).toBe(show(turnThenFlip))
    // The two orders must genuinely differ, or the lesson teaches nothing.
    expect(show(flipThenTurn)).not.toBe(show(turnThenFlip))
    expect(show(optionGrid(puzzle, 'd'))).toBe(show(flipThenTurn))
    // Half-finished attempts: the turn alone, and the flip alone.
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(rotateClockwise(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'c'))).toBe(show(mirrorLeftRight(puzzle.figure)))
  })

  test('6 — every door sits on the same map, and only one has the wall on the walker\'s left', () => {
    const puzzle = puzzleFor(6)
    // The room never changes between options; only the door moves.
    for (const option of puzzle.options) {
      expect(`${option.id}: ${show(withoutMarker(option.grid))}`).toBe(`${option.id}: ${show(puzzle.figure)}`)
    }

    // Walk in from each door and work out which side the wall falls on.
    const size = puzzle.figure.length
    const wallColumns = new Set<number>()
    puzzle.figure.forEach(row => {
      ;[...row].forEach((cell, c) => {
        if (cell !== EMPTY) wallColumns.add(c)
      })
    })
    expect(wallColumns.size).toBe(1)
    const wallColumn = [...wallColumns][0]

    const wallOnLeft = puzzle.options.filter(option => {
      const [doorRow, doorCol] = findMarker(option.grid)
      // Facing straight into the room from the edge the door sits on.
      const facing =
        doorRow === 0 ? 'down' : doorRow === size - 1 ? 'up' : doorCol === 0 ? 'right' : 'left'
      // Turning left from each heading, which map direction does the walker's left point at?
      const leftIs = { down: 'right', up: 'left', right: 'up', left: 'down' }[facing]
      if (leftIs === 'left') return wallColumn < doorCol
      if (leftIs === 'right') return wallColumn > doorCol
      return false // a vertical wall is never above or below the walker
    })

    expect(wallOnLeft.map(o => o.id)).toEqual([puzzle.answerId])
  })

  test('7 — the answer is where the fold actually puts the mark', () => {
    const puzzle = puzzleFor(7)
    expect(show(answerGrid(puzzle))).toBe(show(foldTopOntoBottom(puzzle.figure)))
    // Slid straight down instead of turning over: the mark keeps its distance from the top.
    const [markRow, markCol] = findMarker(puzzle.figure)
    const half = puzzle.figure.length / 2
    const slid = foldTopOntoBottom(puzzle.figure).map((row, r) =>
      [...row].map((cell, c) => (cell === MARKER ? FILLED : cell)).join(''),
    )
    slid[markRow + half] = `${slid[markRow + half].slice(0, markCol)}${MARKER}${slid[markRow + half].slice(markCol + 1)}`
    expect(show(optionGrid(puzzle, 'b'))).toBe(show(slid))
    // Folded, but mirrored sideways as well.
    expect(show(optionGrid(puzzle, 'c'))).toBe(show(mirrorLeftRight(foldTopOntoBottom(puzzle.figure))))
  })

  test('8 — the answer undoes the turn the question says was already made', () => {
    const puzzle = puzzleFor(8)
    // The question says a quarter turn to the left was applied, so undo it with a right turn.
    expect(show(answerGrid(puzzle))).toBe(show(rotateClockwise(puzzle.figure)))
    expect(show(rotateAnticlockwise(answerGrid(puzzle)))).toBe(show(puzzle.figure))
    // Turned the same way again, turned twice, mirrored instead of turned back.
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(rotateAnticlockwise(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'b'))).toBe(show(rotateHalfTurn(puzzle.figure)))
    expect(show(optionGrid(puzzle, 'c'))).toBe(show(mirrorLeftRight(puzzle.figure)))
  })

  test('9 — the answer is the trail the robot program actually drives', () => {
    const puzzle = puzzleFor(9)
    const start = findMarker(puzzle.figure)

    expect(show(answerGrid(puzzle))).toBe(show(driveRobot(4, start, 'up', [2, 'R', 1, 'R', 1])))
    // Took the second turn the wrong way; never re-oriented; took the first turn the wrong way.
    expect(show(optionGrid(puzzle, 'a'))).toBe(show(driveRobot(4, start, 'up', [2, 'R', 1, 'L', 1])))
    expect(show(optionGrid(puzzle, 'c'))).toBe(show(driveRobot(4, start, 'up', [2, 'R', 2])))
    expect(show(optionGrid(puzzle, 'd'))).toBe(show(driveRobot(4, start, 'up', [2, 'L', 1, 'R', 1])))
  })

  test('11 — the tapped cells are exactly the ones that complete the mirror image', () => {
    const puzzle = lessonById('spatial-11').puzzle as GridSelectPuzzle
    const { cells } = puzzle
    const width = cells[0].length
    // The lesson's own note: the mirror line runs between the 2nd and 3rd column (1-indexed),
    // i.e. between 0-indexed columns 1 and 2 — so column c mirrors column (width - 1 - c).
    const expected: string[] = []
    cells.forEach((row, r) => {
      row.forEach((cell, c) => {
        const mirrorCol = width - 1 - c
        if (mirrorCol === c) return // on the mirror line itself, nothing to tap
        if (cell === '' && cells[r][mirrorCol] !== '') expected.push(`${r}-${c}`)
      })
    })
    expect([...puzzle.answer].sort()).toEqual(expected.sort())
  })

  test('13 — each turn is applied to the facing the previous step actually left you with', () => {
    const puzzle = lessonById('spatial-13').puzzle as MultiStepPuzzle
    // Same clockwise ordering as HEADINGS above, spelled out as the compass words this lesson uses.
    const COMPASS = ['north', 'east', 'south', 'west'] as const
    const turn = (heading: (typeof COMPASS)[number], steps: number) =>
      COMPASS[(COMPASS.indexOf(heading) + steps + COMPASS.length) % COMPASS.length]

    let heading: (typeof COMPASS)[number] = 'north'
    heading = turn(heading, 1) // "turn once to the right"
    expect(puzzle.steps[0].answerId).toBe(heading)
    heading = turn(heading, 2) // "turn right twice more"
    expect(puzzle.steps[1].answerId).toBe(heading)
    heading = turn(heading, -1) // walking forward doesn't change facing, then "turn LEFT"
    expect(puzzle.steps[2].answerId).toBe(heading)
  })

  test('15 — the raised hand is on the mirror side, not the same side', () => {
    const puzzle = lessonById('spatial-15').puzzle as IfThenPuzzle
    // Facing someone: what's on YOUR left is on THEIR right, and vice versa.
    expect(puzzle.answerId).toBe('right')
  })

  test('17 — the marked cell is where the described directions actually land', () => {
    const puzzle = lessonById('spatial-17').puzzle as GridSelectPuzzle
    let palmRow = -1
    let palmCol = -1
    puzzle.cells.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === '🌴') {
          palmRow = r
          palmCol = c
        }
      })
    })
    expect(palmRow).toBeGreaterThanOrEqual(0)
    expect(puzzle.answer).toEqual([`${palmRow + 1}-${palmCol + 2}`])
  })

  test('18 — the hole count matches the number of layers the folds actually produce', () => {
    const puzzle = lessonById('spatial-18').puzzle as MultiStepPuzzle
    const NUMBER_WORD: Record<number, string> = { 1: 'one', 2: 'two', 4: 'four', 8: 'eight' }
    let layers = 1
    layers *= 2 // fold in half once
    expect(puzzle.steps[0].answerId).toBe(NUMBER_WORD[layers])
    layers *= 2 // fold in half again
    expect(puzzle.steps[1].answerId).toBe(NUMBER_WORD[layers])
    // One punch through every layer, unfolded, leaves one hole per layer.
    expect(puzzle.steps[2].answerId).toBe(NUMBER_WORD[layers])
  })

  test('the answer never sits in the same slot three lessons running, or in over half of them', () => {
    // "Running" means as actually experienced in play order (all 20 lessons, by number) — a
    // non-spatial-type lesson (grid-select/multi-step/if-then) breaks any run, since its UI
    // isn't a lettered A/B/C/D pick at all, so tapping the same letter through it does nothing.
    let run = 0
    let lastAnswerId: string | null = null
    for (const lesson of lessons) {
      if (lesson.puzzle.type !== 'spatial') {
        run = 0
        lastAnswerId = null
        continue
      }
      const answerId = (lesson.puzzle as SpatialPuzzle).answerId
      run = answerId === lastAnswerId ? run + 1 : 1
      lastAnswerId = answerId
      expect(`${lesson.id}: run of "${answerId}" reaches 3: ${run >= 3}`).toEndWith('false')
    }

    // Scoped to spatial-typed lessons: their options use comparable slot letters (a/b/c/d).
    // The 5 tier-two lessons of other types use semantic ids (east/right/...) or a cell-set
    // answer, which are not comparable slot positions.
    const answerIds = spatialTypeLessons.map(l => spatialPuzzle(l).answerId)
    for (const id of new Set(answerIds)) {
      const uses = answerIds.filter(a => a === id).length
      expect(`slot "${id}" used ${uses}/${answerIds.length}`).toEndWith(
        `${uses <= answerIds.length / 2 ? uses : 'TOO MANY'}/${answerIds.length}`,
      )
    }
  })
})
