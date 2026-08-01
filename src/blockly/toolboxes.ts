export type ToolboxCategory = 'move' | 'loops' | 'variables' | 'logic' | 'functions' | 'lists'

interface ToolboxConfig {
  kind: string
  contents: unknown[]
}

const MOVE_CATEGORY = {
  kind: 'category',
  name: '🏃 Move',
  colour: '#5C6BC0',
  contents: [
    { kind: 'block', type: 'move_right' },
    { kind: 'block', type: 'move_left' },
    { kind: 'block', type: 'move_up' },
    { kind: 'block', type: 'move_down' },
    { kind: 'block', type: 'collect_item' },
  ],
}

const LOOPS_CATEGORY = {
  kind: 'category',
  name: '🔄 Loops',
  colour: '#F59E0B',
  contents: [
    {
      kind: 'block',
      type: 'controls_repeat_ext',
      inputs: {
        TIMES: { block: { type: 'math_number', fields: { NUM: 3 } } },
      },
    },
    {
      kind: 'block',
      type: 'controls_whileUntil',
      fields: { MODE: 'WHILE' },
    },
    { kind: 'block', type: 'controls_for' },
  ],
}

const VARIABLES_CATEGORY = {
  kind: 'category',
  name: '📦 Variables',
  colour: '#9C27B0',
  custom: 'VARIABLE',
}

const LOGIC_CATEGORY = {
  kind: 'category',
  name: '❓ Logic',
  colour: '#2196F3',
  contents: [
    {
      kind: 'block',
      type: 'controls_if',
    },
    {
      kind: 'block',
      type: 'controls_ifelse',
    },
    { kind: 'block', type: 'logic_compare' },
    { kind: 'block', type: 'logic_operation' },
    { kind: 'block', type: 'logic_negate' },
    { kind: 'block', type: 'logic_boolean' },
  ],
}

const FUNCTIONS_CATEGORY = {
  kind: 'category',
  name: '🔧 Functions',
  colour: '#FF5722',
  custom: 'PROCEDURE',
}

const LISTS_CATEGORY = {
  kind: 'category',
  name: '📋 Lists',
  colour: '#009688',
  contents: [
    { kind: 'block', type: 'lists_create_with' },
    { kind: 'block', type: 'lists_create_empty' },
    { kind: 'block', type: 'lists_length' },
    { kind: 'block', type: 'lists_isEmpty' },
    { kind: 'block', type: 'lists_indexOf' },
    { kind: 'block', type: 'lists_getIndex' },
    { kind: 'block', type: 'lists_setIndex' },
    { kind: 'block', type: 'lists_repeat' },
  ],
}

const MATH_CATEGORY = {
  kind: 'category',
  name: '🔢 Math',
  colour: '#4CAF50',
  contents: [
    { kind: 'block', type: 'math_number' },
    { kind: 'block', type: 'math_arithmetic' },
    { kind: 'block', type: 'math_single' },
    { kind: 'block', type: 'math_round' },
    { kind: 'block', type: 'math_modulo' },
  ],
}

const CATEGORY_MAP: Record<ToolboxCategory, object> = {
  move: MOVE_CATEGORY,
  loops: LOOPS_CATEGORY,
  variables: VARIABLES_CATEGORY,
  logic: LOGIC_CATEGORY,
  functions: FUNCTIONS_CATEGORY,
  lists: LISTS_CATEGORY,
}

export function buildToolbox(categories: string[]): ToolboxConfig {
  const contents: unknown[] = []

  for (const cat of categories) {
    const categoryDef = CATEGORY_MAP[cat as ToolboxCategory]
    if (categoryDef) {
      contents.push(categoryDef)
    }
  }

  // Always add math if variables or logic are present
  if (categories.includes('variables') || categories.includes('logic') || categories.includes('lists')) {
    contents.push(MATH_CATEGORY)
  }

  return { kind: 'categoryToolbox', contents }
}
