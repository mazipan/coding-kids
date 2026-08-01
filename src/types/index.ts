export type WorldId = 'jungle' | 'space' | 'ocean' | 'caves' | 'factory' | 'portal'

export interface WorldTheme {
  bgGradient: string
  cellBg: string
  cellBorder: string
  accentColor: string
  textColor: string
}

export interface World {
  id: WorldId
  name: string
  emoji: string
  tagline: string
  ageRange: string
  concept: string
  character: string
  characterName: string
  itemEmoji: string
  obstacleEmoji: string
  goalEmoji: string
  theme: WorldTheme
  unlockAtXP: number
  lessonCount: number
}

export type CellType = 'empty' | 'obstacle' | 'path'

export interface GridCell {
  type: CellType
  emoji?: string
}

export interface LessonItem {
  id: string
  pos: [number, number]
}

export type GoalType = 'collect_all' | 'reach_goal' | 'collect_any'

export interface Lesson {
  id: string
  worldId: WorldId
  number: number
  title: string
  story: string
  mascotMessage: string
  gridRows: number
  gridCols: number
  cells: CellType[][]
  startPos: [number, number]
  items: LessonItem[]
  goalType: GoalType
  goalPos?: [number, number]
  goalCount?: number
  availableCategories: string[]
  optimalBlockCount: number
  xpReward: number
  hints: string[]
  starThresholds: [number, number]
}

export interface LessonResult {
  lessonId: string
  completed: boolean
  stars: number
  blockCount: number
  xpEarned: number
}

export interface LessonProgress {
  stars: number
  completed: boolean
  xpEarned: number
  attempts: number
}

export interface PlayerProgress {
  xp: number
  level: number
  lessons: Record<string, LessonProgress>
  badges: string[]
  totalStars: number
  lastPlayed: string
}

export type ActionType = 'move_right' | 'move_left' | 'move_up' | 'move_down' | 'collect'

export interface GameAction {
  type: ActionType
}

export type GameStatus = 'idle' | 'running' | 'success' | 'failure' | 'crashed'

export interface GameState {
  charPos: [number, number]
  collectedIds: Set<string>
  status: GameStatus
  blockCount: number
  steps: number
  errorMessage?: string
}
