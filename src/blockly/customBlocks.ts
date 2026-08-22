import * as Blockly from 'blockly'
import { javascriptGenerator, Order } from 'blockly/javascript'
import { LOOP_GUARD_STATEMENT } from '../engine/gameEngine'

const MOTION_COLOR = '#5C6BC0'
const SENSOR_COLOR = '#0D9488'

export function registerCustomBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'move_right',
      message0: '%{BKY_MOVE_RIGHT}',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: '',
      helpUrl: '',
    },
    {
      type: 'move_left',
      message0: '%{BKY_MOVE_LEFT}',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: '',
      helpUrl: '',
    },
    {
      type: 'move_up',
      message0: '%{BKY_MOVE_UP}',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: '',
      helpUrl: '',
    },
    {
      type: 'move_down',
      message0: '%{BKY_MOVE_DOWN}',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: '',
      helpUrl: '',
    },
    // ── Position sensors (Coordinate Cove) ──────────────────────────────
    // Read-only value blocks. They have `output` but no previous/next
    // statement, so they can only be plugged into a comparison, an
    // arithmetic block, or a variable setter — never dropped into a stack
    // on their own. Both report 1-based coordinates so the number matches
    // the row/column labels drawn on the grid (COORD_ORIGIN in gameEngine).
    {
      type: 'sensor_row',
      message0: '%{BKY_SENSOR_ROW}',
      output: 'Number',
      colour: SENSOR_COLOR,
      tooltip: '',
      helpUrl: '',
    },
    {
      type: 'sensor_col',
      message0: '%{BKY_SENSOR_COL}',
      output: 'Number',
      colour: SENSOR_COLOR,
      tooltip: '',
      helpUrl: '',
    },
  ])

  javascriptGenerator.forBlock['move_right'] = () => 'moveRight();\n'
  javascriptGenerator.forBlock['move_left'] = () => 'moveLeft();\n'
  javascriptGenerator.forBlock['move_up'] = () => 'moveUp();\n'
  javascriptGenerator.forBlock['move_down'] = () => 'moveDown();\n'
  javascriptGenerator.forBlock['sensor_row'] = () => ['currentRow()', Order.FUNCTION_CALL] as [string, number]
  javascriptGenerator.forBlock['sensor_col'] = () => ['currentCol()', Order.FUNCTION_CALL] as [string, number]

  // INV-G3 — Blockly injects this statement at the top of every loop body.
  // `__tick` is bounded by MAX_LOOP_TICKS in the engine, so a loop that never
  // moves the character still terminates instead of freezing the tab.
  javascriptGenerator.INFINITE_LOOP_TRAP = LOOP_GUARD_STATEMENT
}
