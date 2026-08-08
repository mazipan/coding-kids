export type WorldId = 'jungle' | 'space' | 'loops' | 'ocean' | 'caves' | 'factory' | 'portal' | 'jurassic' | 'parking' | 'sorting'

export type LocalizedString = { en: string; id: string }

export interface WorldTheme {
  bgGradient: string
  cellBg: string
  cellBorder: string
  accentColor: string
  textColor: string
}

export interface World {
  id: WorldId
  name: LocalizedString
  emoji: string
  tagline: LocalizedString
  ageRange: string
  concept: LocalizedString
  character: string
  characterName: string
  itemEmoji: string
  obstacleEmoji: string
  goalEmoji: string
  theme: WorldTheme
  unlockAtXP: number
  lessonCount: number
  isBonus?: boolean
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
  title: LocalizedString
  story: LocalizedString
  mascotMessage: LocalizedString
  gridRows: number
  gridCols: number
  cells: CellType[][]
  startPos: [number, number]
  items: LessonItem[]
  goalType: GoalType
  goalPos?: [number, number]
  goalCount?: number
  availableCategories: string[]
  requiredCategories?: string[]
  optimalBlockCount: number
  xpReward: number
  hints: LocalizedString[]
  starThresholds: [number, number] | [number, number, number, number]
  isTutorial?: true
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

// ── Thinking path ─────────────────────────────────────────────

export type ThinkingWorldId = 'patterns' | 'logic' | 'counting' | 'memory' | 'nature' | 'numbers' | 'decomposition' | 'abstraction'

export interface ThinkingWorld {
  id: ThinkingWorldId
  name: LocalizedString
  emoji: string
  tagline: LocalizedString
  ageRange: string
  concept: LocalizedString
  color: string
  bgGradient: string
  unlockAtXP: number
  lessonCount: number
}

export interface PatternPuzzle {
  type: 'pattern'
  items: string[]
  blankIndex: number
  options: string[]
  answer: string
}

export interface IfThenPuzzle {
  type: 'if-then'
  condition: LocalizedString
  options: Array<{ id: string; emoji: string; label: LocalizedString }>
  answerId: string
}

export interface MathPuzzle {
  type: 'math'
  question: LocalizedString
  visual?: string
  options: string[]
  answer: string
}

export interface SequencePuzzle {
  type: 'sequence'
  steps: Array<{ id: string; emoji: string; label: LocalizedString }>
}

export interface TrueFalsePuzzle {
  type: 'true-false'
  statement: LocalizedString
  answer: boolean
}

export interface SortPuzzle {
  type: 'sort'
  items: string[]
  answer: string[]
}

export interface FillInPuzzle {
  type: 'fill-in'
  question: LocalizedString
  visual?: string
  answer: string
  inputType?: 'text' | 'numeric'
}

export interface MatchPuzzle {
  type: 'match'
  pairs: Array<{
    leftId: string
    leftEmoji: string
    leftLabel: LocalizedString
    rightId: string
    rightEmoji: string
    rightLabel: LocalizedString
  }>
}

export interface AbstractionPuzzle {
  type: 'abstraction'
  subtype: 'odd-one-out' | 'category-match'
  items: Array<{ id: string; emoji: string; label: LocalizedString }>
  question: LocalizedString
  correctIds: string[]
}

export type ThinkingPuzzle = PatternPuzzle | IfThenPuzzle | MathPuzzle | SequencePuzzle | TrueFalsePuzzle | SortPuzzle | FillInPuzzle | MatchPuzzle | AbstractionPuzzle

export interface ThinkingLesson {
  id: string
  worldId: ThinkingWorldId
  number: number
  title: LocalizedString
  mascotMessage: LocalizedString
  xpReward: number
  puzzle: ThinkingPuzzle
}

// ── Blocks path ───────────────────────────────────────────────

export type ActionType = 'move_right' | 'move_left' | 'move_up' | 'move_down'

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
