import { describe, expect, test } from 'bun:test'
import {
  MAX_ACTIONS,
  MAX_LOOP_TICKS,
  applyAction,
  buildInitialState,
  checkWin,
  parseCodeToActions,
  stripLoopGuard,
} from '../src/engine/gameEngine'
import { isLessonAvailable } from '../src/store/useProgress'
import type { Lesson, PlayerProgress } from '../src/types'
import { getLesson, getLessonsByWorld } from '../src/data/lessons'
import { getWorld } from '../src/data/worlds'
import { calculateStars } from '../src/data/xpSystem'

/** The loop guard Blockly injects into every loop body. */
const TICK = '  __tick();\n'

/**
 * The JavaScript each lesson's canonical block solution generates, paired with
 * the number of Blockly blocks that solution uses. Block counts include value
 * blocks (comparisons, numbers, sensors, variable getters) because
 * `workspace.getAllBlocks()` counts them and the star thresholds are authored
 * against that same total.
 */
const SOLUTIONS: Array<{ id: string; blocks: number; code: string }> = [
  { id: 'cove-0', blocks: 2, code: 'moveRight();\nmoveRight();\n' },
  { id: 'cove-1', blocks: 4, code: 'moveRight();\n'.repeat(4) },
  { id: 'cove-2', blocks: 6, code: 'moveUp();\nmoveUp();\n' + 'moveRight();\n'.repeat(4) },
  {
    id: 'cove-3',
    blocks: 5,
    code: `var steps = 5;\nfor (var i = 0; i < steps; i++) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'cove-4',
    blocks: 12,
    code:
      `var gap = 3;\n` +
      `for (var i = 0; i < gap; i++) {\n${TICK}  moveRight();\n}\n` +
      `gap = gap + 2;\n` +
      `for (var j = 0; j < gap; j++) {\n${TICK}  moveRight();\n}\n`,
  },
  { id: 'cove-5', blocks: 5, code: `while (currentRow() < 5) {\n${TICK}  moveDown();\n}\n` },
  { id: 'cove-6', blocks: 5, code: `while (!(currentCol() == 8)) {\n${TICK}  moveRight();\n}\n` },
  {
    id: 'cove-7',
    blocks: 10,
    code:
      `while (currentRow() < 4) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 6) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'cove-8',
    blocks: 15,
    code:
      `while (currentCol() < 4) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 3) {\n${TICK}  moveDown();\n}\n` +
      `while (currentRow() < 6) {\n${TICK}  moveDown();\n}\n`,
  },
  { id: 'cove-9', blocks: 5, code: `while (currentCol() < 6) {\n${TICK}  moveRight();\n}\n` },
  {
    id: 'cove-10',
    blocks: 20,
    code:
      `while (currentCol() < 4) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 5) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 8) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 8) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-11',
    blocks: 10,
    code:
      `while (currentCol() < 7) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 5) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-12',
    blocks: 15,
    code:
      `while (currentRow() < 3) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 7) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 6) {\n${TICK}  moveDown();\n}\n`,
  },
  { id: 'cove-13', blocks: 5, code: `while (currentCol() > 3) {\n${TICK}  moveLeft();\n}\n` },
  {
    id: 'cove-14',
    blocks: 10,
    code:
      `var steps = 4;\nfor (var i = 0; i < steps; i++) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 4) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-15',
    blocks: 20,
    code:
      `while (currentCol() < 5) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 6) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 9) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 9) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-16',
    blocks: 17,
    code:
      `var steps = 3;\nfor (var i = 0; i < steps; i++) {\n${TICK}  moveRight();\n}\n` +
      `steps = steps + 2;\nfor (var j = 0; j < steps; j++) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 5) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-17',
    blocks: 25,
    code:
      `while (currentCol() < 4) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 3) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 8) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 6) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 11) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'cove-18',
    blocks: 20,
    code:
      `while (currentCol() < 6) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 4) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() > 2) {\n${TICK}  moveLeft();\n}\n` +
      `while (currentRow() < 7) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-19',
    blocks: 30,
    code:
      `while (currentCol() < 3) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 3) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 7) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 6) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() < 10) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 9) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'cove-20',
    blocks: 27,
    code:
      `var steps = 3;\nfor (var i = 0; i < steps; i++) {\n${TICK}  moveRight();\n}\n` +
      `steps = steps + 3;\nfor (var j = 0; j < steps; j++) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 4) {\n${TICK}  moveDown();\n}\n` +
      `while (currentCol() > 2) {\n${TICK}  moveLeft();\n}\n` +
      `while (currentRow() < 8) {\n${TICK}  moveDown();\n}\n`,
  },
]

function lessonById(id: string): Lesson {
  const lesson = getLesson(id)
  if (!lesson) throw new Error(`missing lesson ${id}`)
  return lesson
}

/** Replay generated actions through the animation reducer, exactly as the UI does. */
function replay(lesson: Lesson, code: string) {
  const { actions, error, stopped } = parseCodeToActions(code, lesson)
  const state = actions.reduce((acc, action) => applyAction(acc, action, lesson), buildInitialState(lesson))
  return { actions, error, stopped, state }
}

describe('Coordinate Cove — world shape', () => {
  test('the world is a bonus world with a tutorial plus 20 lessons', () => {
    const world = getWorld('cove')
    expect(world?.isBonus).toBe(true)
    expect(getLessonsByWorld('cove')).toHaveLength(world?.lessonCount)
    expect(lessonById('cove-0').isTutorial).toBe(true)
  })

  test('every lesson renders coordinate labels', () => {
    for (const { id } of SOLUTIONS) {
      expect(lessonById(id).showCoords).toBe(true)
    }
  })

  test('every sensor lesson requires the sensors category for full stars', () => {
    for (const id of [
      'cove-5', 'cove-6', 'cove-7', 'cove-8', 'cove-9', 'cove-10',
      'cove-11', 'cove-12', 'cove-13', 'cove-14', 'cove-15',
      'cove-16', 'cove-17', 'cove-18', 'cove-19', 'cove-20',
    ]) {
      expect(lessonById(id).requiredCategories).toContain('sensors')
    }
  })
})

describe('Coordinate Cove — canonical solutions', () => {
  test('every canonical solution stays bounded and wins its lesson', () => {
    for (const { id, code } of SOLUTIONS) {
      const lesson = lessonById(id)
      const { error, stopped, state, actions } = replay(lesson, code)
      expect(error).toBeUndefined()
      expect(stopped).toBeUndefined()
      expect(state.status).not.toBe('crashed')
      expect(actions.length).toBeLessThanOrEqual(MAX_ACTIONS)
      expect(checkWin(state, lesson)).toBe(true)
    }
  })

  test('every canonical block count earns the top star rating', () => {
    for (const { id, blocks } of SOLUTIONS) {
      const lesson = lessonById(id)
      if (lesson.isTutorial) continue
      const used = lesson.requiredCategories?.includes('sensors')
        ? ['sensor_row', 'sensor_col', 'controls_whileUntil', 'variables_set']
        : ['controls_repeat_ext', 'variables_set']
      const stars = calculateStars(blocks, lesson.starThresholds, used, lesson.requiredCategories)
      expect(stars).toBe(lesson.starThresholds.length === 4 ? 5 : 3)
      expect(blocks).toBe(lesson.optimalBlockCount)
    }
  })

  test('hardcoding the route without sensors is capped at 1 star', () => {
    const lesson = lessonById('cove-5')
    const stars = calculateStars(4, lesson.starThresholds, ['move_down'], lesson.requiredCategories)
    expect(stars).toBe(1)
  })
})

describe('Coordinate Cove — position sensors', () => {
  test('sensors report 1-based coordinates that track the character', () => {
    const lesson = lessonById('cove-1')
    // startPos [1, 0] → Row 2, Column 1.
    const probe = `
      if (currentRow() !== 2 || currentCol() !== 1) { throw new Error('start') }
      moveRight();
      if (currentRow() !== 2 || currentCol() !== 2) { throw new Error('after move') }
      moveRight(); moveRight(); moveRight();
      if (currentCol() !== 5) { throw new Error('final') }
    `
    const { error, state } = replay(lesson, probe)
    expect(error).toBeUndefined()
    expect(state.charPos).toEqual([1, 4])
  })

  test('a sensor loop adapts to a start position it was not written for', () => {
    const base = lessonById('cove-5')
    const code = `while (currentRow() < 5) {\n${TICK}  moveDown();\n}\n`
    for (const startRow of [0, 1, 3]) {
      const shifted: Lesson = { ...base, startPos: [startRow, 2] }
      const { state } = replay(shifted, code)
      expect(state.charPos[0]).toBe(4)
    }
  })

  test('the sandbox exposes no globals to generated code', () => {
    const lesson = lessonById('cove-1')
    for (const name of ['window', 'document', 'fetch', 'localStorage']) {
      const { error } = replay(lesson, `${name}.toString();`)
      expect(error).toBeTruthy()
    }
  })
})

describe('Coordinate Cove — termination guards', () => {
  test('INV-G3: a runaway sensor loop stops at the action cap', () => {
    // Column 1 can never reach 999, so this loop can only end at the cap.
    const lesson = lessonById('cove-1')
    const code = `while (currentCol() < 999) {\n${TICK}  moveRight();\n  moveLeft();\n}\n`
    const { actions, stopped, error } = parseCodeToActions(code, lesson)
    expect(error).toBeUndefined()
    expect(stopped).toBe('action-cap')
    expect(actions).toHaveLength(MAX_ACTIONS)
  })

  test('INV-G3: a loop that never moves stops at the loop-tick cap', () => {
    const lesson = lessonById('cove-1')
    const { actions, stopped, error } = parseCodeToActions(`while (true) {\n${TICK}}\n`, lesson)
    expect(error).toBeUndefined()
    expect(stopped).toBe('loop-cap')
    expect(actions).toHaveLength(0)
  })

  test('a loop just under the tick cap still completes normally', () => {
    const lesson = lessonById('cove-1')
    const code = `var n = 0;\nwhile (n < ${MAX_LOOP_TICKS - 1}) {\n${TICK}  n = n + 1;\n}\nmoveRight();\n`
    const { actions, stopped } = parseCodeToActions(code, lesson)
    expect(stopped).toBeUndefined()
    expect(actions).toHaveLength(1)
  })

  test('INV-G1: sailing off the chart halts generation and crashes the replay', () => {
    const lesson = lessonById('cove-1')
    const { actions, stopped, state } = replay(lesson, 'moveUp();\nmoveUp();\nmoveRight();\n')
    expect(stopped).toBe('crashed')
    expect(actions).toHaveLength(2)
    expect(state.status).toBe('crashed')
  })

  test('INV-G2: hitting an island halts generation and crashes the replay', () => {
    // cove-7 puts a reef at Row 1, Columns 3–6; sailing east from the start hits it.
    const lesson = lessonById('cove-7')
    const { stopped, state } = replay(lesson, 'moveRight();\nmoveRight();\nmoveRight();\n')
    expect(stopped).toBe('crashed')
    expect(state.status).toBe('crashed')
  })

  test('the loop guard is hidden from the code view but kept in what runs', () => {
    const code = `while (currentCol() < 3) {\n${TICK}  moveRight();\n}\n`
    expect(stripLoopGuard(code)).toBe('while (currentCol() < 3) {\n  moveRight();\n}\n')
    expect(code).toContain('__tick();')
  })
})

describe('Coordinate Cove — off-by-one debug lesson', () => {
  test('the supplied buggy loop stops one square short', () => {
    const lesson = lessonById('cove-9')
    expect(lesson.isBuggy).toBe(true)
    expect(lesson.buggyState).toBeDefined()
    const buggy = `while (currentCol() < 5) {\n${TICK}  moveRight();\n}\n`
    const { state } = replay(lesson, buggy)
    expect(state.charPos).toEqual([1, 4])
    expect(checkWin(state, lesson)).toBe(false)
  })
})

describe('Coordinate Cove — unlock order', () => {
  test('INV-L1: the tutorial is optional — lesson 1 is open immediately, then lessons unlock one at a time', () => {
    const progress: PlayerProgress = { xp: 0, level: 1, lessons: {}, badges: [], totalStars: 0, lastPlayed: '' }
    expect(isLessonAvailable(progress, 'cove-0', 'cove')).toBe(true)
    expect(isLessonAvailable(progress, 'cove-1', 'cove')).toBe(true)
    expect(isLessonAvailable(progress, 'cove-2', 'cove')).toBe(false)

    progress.lessons['cove-1'] = { completed: true, stars: 1, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'cove-2', 'cove')).toBe(true)
  })

  test('untutorialed bonus worlds keep their existing lesson-1 behaviour', () => {
    const progress: PlayerProgress = { xp: 0, level: 1, lessons: {}, badges: [], totalStars: 0, lastPlayed: '' }
    expect(isLessonAvailable(progress, 'jurassic-1', 'jurassic')).toBe(true)
  })
})
