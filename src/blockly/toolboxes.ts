export type ToolboxCategory = 'move' | 'loops' | 'variables' | 'logic' | 'functions' | 'lists'

interface ToolboxConfig {
  kind: string
  contents: unknown[]
}

const CATEGORY_NAMES: Record<ToolboxCategory | 'math', Record<'en' | 'id', string>> = {
  move:      { en: '🏃 Move',      id: '🏃 Gerak' },
  loops:     { en: '🔄 Loops',     id: '🔄 Ulangi' },
  variables: { en: '📦 Variables', id: '📦 Variabel' },
  logic:     { en: '❓ Logic',     id: '❓ Kondisi' },
  functions: { en: '🔧 Functions', id: '🔧 Fungsi' },
  lists:     { en: '📋 Lists',     id: '📋 Daftar' },
  math:      { en: '🔢 Math',      id: '🔢 Matematika' },
}

const MOVE_CONTENTS = [
  { kind: 'block', type: 'move_right' },
  { kind: 'block', type: 'move_left' },
  { kind: 'block', type: 'move_up' },
  { kind: 'block', type: 'move_down' },
  { kind: 'block', type: 'collect_item' },
]

const LOOPS_CONTENTS = [
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
]

const LOGIC_CONTENTS = [
  { kind: 'block', type: 'controls_if' },
  { kind: 'block', type: 'controls_ifelse' },
  { kind: 'block', type: 'logic_compare' },
  { kind: 'block', type: 'logic_operation' },
  { kind: 'block', type: 'logic_negate' },
  { kind: 'block', type: 'logic_boolean' },
]

const LISTS_CONTENTS = [
  { kind: 'block', type: 'lists_create_with' },
  { kind: 'block', type: 'lists_create_empty' },
  { kind: 'block', type: 'lists_length' },
  { kind: 'block', type: 'lists_isEmpty' },
  { kind: 'block', type: 'lists_indexOf' },
  { kind: 'block', type: 'lists_getIndex' },
  { kind: 'block', type: 'lists_setIndex' },
  { kind: 'block', type: 'lists_repeat' },
]

const MATH_CONTENTS = [
  { kind: 'block', type: 'math_number' },
  { kind: 'block', type: 'math_arithmetic' },
  { kind: 'block', type: 'math_single' },
  { kind: 'block', type: 'math_round' },
  { kind: 'block', type: 'math_modulo' },
]

function catName(key: ToolboxCategory | 'math', lang: string): string {
  return CATEGORY_NAMES[key]?.[lang as 'en' | 'id'] ?? CATEGORY_NAMES[key]?.en ?? key
}

export function buildToolbox(categories: string[], language = 'en'): ToolboxConfig {
  const contents: unknown[] = []

  for (const cat of categories) {
    switch (cat as ToolboxCategory) {
      case 'move':
        contents.push({ kind: 'category', name: catName('move', language), colour: '#5C6BC0', contents: MOVE_CONTENTS })
        break
      case 'loops':
        contents.push({ kind: 'category', name: catName('loops', language), colour: '#F59E0B', contents: LOOPS_CONTENTS })
        break
      case 'variables':
        contents.push({ kind: 'category', name: catName('variables', language), colour: '#9C27B0', custom: 'VARIABLE' })
        break
      case 'logic':
        contents.push({ kind: 'category', name: catName('logic', language), colour: '#2196F3', contents: LOGIC_CONTENTS })
        break
      case 'functions':
        contents.push({ kind: 'category', name: catName('functions', language), colour: '#FF5722', custom: 'PROCEDURE' })
        break
      case 'lists':
        contents.push({ kind: 'category', name: catName('lists', language), colour: '#009688', contents: LISTS_CONTENTS })
        break
    }
  }

  // Always add math if variables or logic are present
  if (categories.includes('variables') || categories.includes('logic') || categories.includes('lists')) {
    contents.push({ kind: 'category', name: catName('math', language), colour: '#4CAF50', contents: MATH_CONTENTS })
  }

  return { kind: 'categoryToolbox', contents }
}
