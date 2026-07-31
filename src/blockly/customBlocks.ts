import * as Blockly from 'blockly'
import { javascriptGenerator, Order } from 'blockly/javascript'

const MOTION_COLOR = '#5C6BC0'
const ACTION_COLOR = '#2E7D32'

export function registerCustomBlocks() {
  Blockly.defineBlocksWithJsonArray([
    {
      type: 'move_right',
      message0: 'move right ➡️',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: 'Move one step to the right',
      helpUrl: '',
    },
    {
      type: 'move_left',
      message0: 'move left ⬅️',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: 'Move one step to the left',
      helpUrl: '',
    },
    {
      type: 'move_up',
      message0: 'move up ⬆️',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: 'Move one step up',
      helpUrl: '',
    },
    {
      type: 'move_down',
      message0: 'move down ⬇️',
      previousStatement: null,
      nextStatement: null,
      colour: MOTION_COLOR,
      tooltip: 'Move one step down',
      helpUrl: '',
    },
    {
      type: 'collect_item',
      message0: 'collect item 📦',
      previousStatement: null,
      nextStatement: null,
      colour: ACTION_COLOR,
      tooltip: 'Collect the item at the current position',
      helpUrl: '',
    },
  ])

  javascriptGenerator.forBlock['move_right'] = () => 'moveRight();\n'
  javascriptGenerator.forBlock['move_left'] = () => 'moveLeft();\n'
  javascriptGenerator.forBlock['move_up'] = () => 'moveUp();\n'
  javascriptGenerator.forBlock['move_down'] = () => 'moveDown();\n'
  javascriptGenerator.forBlock['collect_item'] = () => 'collect();\n'

  // Suppress unused Order import warning
  void Order
}
