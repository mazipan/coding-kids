import type { Lesson, GameAction, GameState } from '../types'

export const MAX_ACTIONS = 200

export function buildInitialState(lesson: Lesson): GameState {
  return {
    charPos: [...lesson.startPos] as [number, number],
    collectedIds: new Set<string>(),
    status: 'idle',
    blockCount: 0,
    steps: 0,
  }
}

export function parseCodeToActions(code: string): { actions: GameAction[]; error?: string } {
  const actions: GameAction[] = []
  let error: string | undefined

  const moveRight = () => { if (actions.length < MAX_ACTIONS) actions.push({ type: 'move_right' }) }
  const moveLeft = () => { if (actions.length < MAX_ACTIONS) actions.push({ type: 'move_left' }) }
  const moveUp = () => { if (actions.length < MAX_ACTIONS) actions.push({ type: 'move_up' }) }
  const moveDown = () => { if (actions.length < MAX_ACTIONS) actions.push({ type: 'move_down' }) }

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function(
      'moveRight', 'moveLeft', 'moveUp', 'moveDown',
      code
    )
    fn(moveRight, moveLeft, moveUp, moveDown)
  } catch (e) {
    error = e instanceof Error ? e.message : 'Code error'
  }

  return { actions, error }
}

export function applyAction(
  state: GameState,
  action: GameAction,
  lesson: Lesson
): GameState {
  const [row, col] = state.charPos
  let newRow = row
  let newCol = col

  switch (action.type) {
    case 'move_right': newCol = col + 1; break
    case 'move_left':  newCol = col - 1; break
    case 'move_up':    newRow = row - 1; break
    case 'move_down':  newRow = row + 1; break
  }

  // Bounds check
  if (newRow < 0 || newRow >= lesson.gridRows || newCol < 0 || newCol >= lesson.gridCols) {
    return { ...state, status: 'crashed', errorMessage: 'Oops! Walked off the edge! 🚧', steps: state.steps + 1 }
  }

  // Obstacle check
  if (lesson.cells[newRow]?.[newCol] === 'obstacle') {
    return { ...state, status: 'crashed', errorMessage: 'Crashed into an obstacle! 💥', steps: state.steps + 1 }
  }

  // Auto-collect items at new position
  const itemsAtNew = lesson.items.filter(
    i => i.pos[0] === newRow && i.pos[1] === newCol && !state.collectedIds.has(i.id)
  )
  const newCollected = new Set(state.collectedIds)
  itemsAtNew.forEach(i => newCollected.add(i.id))

  return {
    ...state,
    charPos: [newRow, newCol],
    collectedIds: newCollected,
    steps: state.steps + 1,
  }
}

export function checkWin(state: GameState, lesson: Lesson): boolean {
  if (lesson.goalType === 'collect_all') {
    return lesson.items.every(i => state.collectedIds.has(i.id))
  }
  if (lesson.goalType === 'reach_goal' && lesson.goalPos) {
    return state.charPos[0] === lesson.goalPos[0] && state.charPos[1] === lesson.goalPos[1]
  }
  if (lesson.goalType === 'collect_any' && lesson.goalCount) {
    return state.collectedIds.size >= lesson.goalCount
  }
  return false
}
