import { describe, expect, test } from 'bun:test'
import {
  MAX_ACTIONS,
  applyAction,
  buildInitialState,
  checkWin,
  parseCodeToActions,
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
 * the declared Blockly block count. Mirrors tests/coordinateCoveLessons.test.ts.
 */
const SOLUTIONS: Array<{ id: string; blocks: number; code: string }> = [
  { id: 'boolean-1', blocks: 7, code: 'if (true && true) {\n' + '  moveRight();\n'.repeat(3) + '}\n' },
  { id: 'boolean-2', blocks: 7, code: 'if (true || false) {\n' + '  moveRight();\n'.repeat(3) + '}\n' },
  { id: 'boolean-3', blocks: 6, code: 'if (!(false)) {\n' + '  moveRight();\n'.repeat(3) + '}\n' },
  {
    id: 'boolean-4',
    blocks: 9,
    code: `while (currentCol() < 9 && currentCol() < 7) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'boolean-5',
    blocks: 9,
    code: `while (!(currentCol() === 7 || currentCol() === 4)) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'boolean-6',
    blocks: 6,
    code: `while (!(currentCol() === 5)) {\n${TICK}  moveRight();\n}\n`,
  },
  { id: 'boolean-7', blocks: 10, code: 'if ((true && true) || false) {\n' + '  moveRight();\n'.repeat(4) + '}\n' },
  { id: 'boolean-8', blocks: 10, code: 'if (true && (true || false)) {\n' + '  moveRight();\n'.repeat(4) + '}\n' },
  {
    id: 'boolean-9',
    blocks: 13,
    code: 'if (!(currentRow() === 3 && currentCol() === 1)) {\n' + '  moveRight();\n'.repeat(4) + '}\n',
  },
  {
    id: 'boolean-10',
    blocks: 9,
    code: `while (currentCol() < 9 && currentCol() < 7) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'boolean-11',
    blocks: 16,
    code:
      'if (currentRow() === 1 && currentCol() === 1) {\n' +
      '  moveDown();\n'.repeat(3) +
      '  moveRight();\n'.repeat(5) +
      '}\n',
  },
  {
    id: 'boolean-12',
    blocks: 17,
    code:
      'if (currentRow() === 1 || currentCol() === 50) {\n' +
      '  moveRight();\n'.repeat(6) +
      '  moveDown();\n'.repeat(3) +
      '}\n',
  },
  {
    id: 'boolean-13',
    blocks: 14,
    code:
      'if (!(currentRow() === 9)) {\n' +
      '  moveRight();\n'.repeat(7) +
      '  moveDown();\n'.repeat(2) +
      '}\n',
  },
  {
    id: 'boolean-14',
    blocks: 18,
    code:
      `while (currentCol() < 10 && currentCol() < 7) {\n${TICK}  moveRight();\n}\n` +
      `while (currentRow() < 10 && currentRow() < 4) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'boolean-15',
    blocks: 18,
    code:
      `while (!(currentCol() === 9 || currentCol() === 6)) {\n${TICK}  moveRight();\n}\n` +
      `while (!(currentRow() === 9 || currentRow() === 5)) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'boolean-16',
    blocks: 10,
    code:
      `while (!(currentCol() === 6)) {\n${TICK}  moveRight();\n}\n` +
      `while (!(currentRow() === 5)) {\n${TICK}  moveDown();\n}\n`,
  },
  {
    id: 'boolean-17',
    blocks: 25,
    code:
      'if ((currentRow() === 1 && currentCol() === 1) || (currentRow() === 99 && currentCol() === 99)) {\n' +
      '  moveRight();\n'.repeat(6) +
      '  moveDown();\n'.repeat(3) +
      '}\n',
  },
  {
    id: 'boolean-18',
    blocks: 21,
    code:
      'if (currentRow() === 1 && (currentCol() === 1 || currentCol() === 99)) {\n' +
      '  moveRight();\n'.repeat(5) +
      '  moveDown();\n'.repeat(4) +
      '}\n',
  },
  {
    id: 'boolean-19',
    blocks: 9,
    code: `while (!(currentCol() === 8 || currentCol() === 5)) {\n${TICK}  moveRight();\n}\n`,
  },
  {
    id: 'boolean-20',
    blocks: 30,
    code:
      'if (!(currentRow() === 9 && currentCol() === 9) && !(currentRow() === 1 && currentCol() === 2)) {\n' +
      '  moveRight();\n'.repeat(7) +
      '  moveDown();\n'.repeat(5) +
      '}\n',
  },
]

/** The buggy workspaces shipped for boolean-10 and boolean-19, expressed as the JS they generate. */
const BUGGY: Array<{ id: string; code: string; expectedEnd: [number, number] }> = [
  { id: 'boolean-10', code: `while (currentCol() < 9 && currentCol() < 5) {\n${TICK}  moveRight();\n}\n`, expectedEnd: [1, 4] },
  { id: 'boolean-19', code: `while (!(currentCol() === 8 || currentCol() === 3)) {\n${TICK}  moveRight();\n}\n`, expectedEnd: [1, 2] },
]

function lessonById(id: string): Lesson {
  const lesson = getLesson(id)
  if (!lesson) throw new Error(`missing lesson ${id}`)
  return lesson
}

function replay(lesson: Lesson, code: string) {
  const { actions, error, stopped } = parseCodeToActions(code, lesson)
  const state = actions.reduce((acc, action) => applyAction(acc, action, lesson), buildInitialState(lesson))
  return { actions, error, stopped, state }
}

describe('Boolean Logic Booster — world shape', () => {
  test('the world is a bonus world with no tutorial and 20 lessons', () => {
    const world = getWorld('boolean')
    expect(world?.isBonus).toBe(true)
    expect(getLessonsByWorld('boolean')).toHaveLength(world?.lessonCount ?? 0)
    expect(getLessonByNumberIsAbsent()).toBe(true)
  })

  function getLessonByNumberIsAbsent() {
    return getLesson('boolean-0') === undefined
  }

  test('every sensor-using lesson renders coordinate labels and requires the sensors category', () => {
    for (const id of [
      'boolean-4', 'boolean-5', 'boolean-6', 'boolean-9', 'boolean-10',
      'boolean-11', 'boolean-12', 'boolean-13', 'boolean-14', 'boolean-15',
      'boolean-16', 'boolean-17', 'boolean-18', 'boolean-19', 'boolean-20',
    ]) {
      const lesson = lessonById(id)
      expect(lesson.showCoords).toBe(true)
      expect(lesson.requiredCategories).toContain('sensors')
    }
  })

  test('every if-mechanic lesson requires the logic category; every loop-mechanic lesson requires loops', () => {
    for (const { id, code } of SOLUTIONS) {
      const lesson = lessonById(id)
      if (code.includes('while')) {
        expect(lesson.requiredCategories).toContain('loops')
      } else {
        expect(lesson.requiredCategories).toContain('logic')
      }
    }
  })
})

describe('Boolean Logic Booster — canonical solutions', () => {
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
    for (const { id, blocks, code } of SOLUTIONS) {
      const lesson = lessonById(id)
      const mechanicBlock = code.includes('while') ? 'controls_whileUntil' : 'controls_if'
      const used = lesson.requiredCategories?.includes('sensors')
        ? [mechanicBlock, 'sensor_row', 'sensor_col']
        : [mechanicBlock]
      const stars = calculateStars(blocks, lesson.starThresholds, used, lesson.requiredCategories)
      expect(stars).toBe(5)
      expect(blocks).toBe(lesson.optimalBlockCount)
    }
  })

  test('hardcoding the route without an if block is capped at 1 star', () => {
    const lesson = lessonById('boolean-1')
    const stars = calculateStars(3, lesson.starThresholds, ['move_right'], lesson.requiredCategories)
    expect(stars).toBe(1)
  })
})

describe('Boolean Logic Booster — buggy lessons', () => {
  test('boolean-10 and boolean-19 are marked buggy with a shipped workspace', () => {
    for (const { id } of BUGGY) {
      const lesson = lessonById(id)
      expect(lesson.isBuggy).toBe(true)
      expect(lesson.buggyState).toBeDefined()
    }
  })

  test('the buggy code falls short of the goal at the expected spot', () => {
    for (const { id, code, expectedEnd } of BUGGY) {
      const lesson = lessonById(id)
      const { state } = replay(lesson, code)
      expect(state.charPos).toEqual(expectedEnd)
      expect(checkWin(state, lesson)).toBe(false)
    }
  })
})

describe('Boolean Logic Booster — unlock order (INV-L1 bonus-world exception)', () => {
  test('lesson 1 is open immediately with no lesson 0 to gate it, then lessons unlock one at a time', () => {
    const progress: PlayerProgress = { xp: 0, level: 1, lessons: {}, badges: [], totalStars: 0, lastPlayed: '' }
    expect(isLessonAvailable(progress, 'boolean-1', 'boolean')).toBe(true)
    expect(isLessonAvailable(progress, 'boolean-2', 'boolean')).toBe(false)

    progress.lessons['boolean-1'] = { completed: true, stars: 1, xpEarned: 0, attempts: 1 }
    expect(isLessonAvailable(progress, 'boolean-2', 'boolean')).toBe(true)
  })
})
