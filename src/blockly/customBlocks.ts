import * as Blockly from 'blockly'
import { javascriptGenerator, Order } from 'blockly/javascript'

const MOTION_COLOR = '#5C6BC0'

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
  ])

  javascriptGenerator.forBlock['move_right'] = () => 'moveRight();\n'
  javascriptGenerator.forBlock['move_left'] = () => 'moveLeft();\n'
  javascriptGenerator.forBlock['move_up'] = () => 'moveUp();\n'
  javascriptGenerator.forBlock['move_down'] = () => 'moveDown();\n'

  // Suppress unused Order import warning
  void Order
}
