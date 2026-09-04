export type WorldId = 'jungle' | 'space' | 'loops' | 'ocean' | 'caves' | 'factory' | 'portal' | 'jurassic' | 'parking' | 'sorting' | 'debugging' | 'orchestra' | 'cove' | 'eco' | 'boolean'

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
  /** Set when the character's standard emoji glyph has a real inherent left/right facing
   * (a vehicle, boat, or human pictograph drawn facing one way) — GameGrid mirrors it
   * horizontally so it visually faces the direction it's currently travelling. Omit for
   * any character drawn front-on or pose-neutral. */
  facingDefault?: 'left'
  characterName: string
  itemEmoji: string
  obstacleEmoji: string
  goalEmoji: string
  theme: WorldTheme
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
  isBuggy?: true
  buggyState?: object
  /** Render 1-based row/column labels and a live position readout on the grid. */
  showCoords?: true
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

export type ThinkingWorldId = 'patterns' | 'logic' | 'counting' | 'memory' | 'nature' | 'numbers' | 'decomposition' | 'abstraction' | 'math_reasoning' | 'induction' | 'deduction' | 'planning' | 'probability' | 'spatial'

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
  /** Overrides the default "smallest to largest" prompt when the items are not numbers. */
  prompt?: LocalizedString
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

/**
 * A spatial figure, drawn as one string per grid row so lesson data stays local and
 * reviewable in a diff (INV-P1 — no remote images).
 *
 * Each character is one cell:
 *   '#' filled
 *   'o' filled, and marked with a dot
 *   '.' empty
 *
 * The dot is an orientation anchor made of shape, not colour: a rotation and its mirror
 * put the dot in different places, so the two stay distinguishable in greyscale.
 * Every row in one figure must be the same length, and all option grids in a puzzle must
 * share the prompt figure's dimensions.
 */
export type SpatialGrid = string[]

export interface SpatialPuzzle {
  type: 'spatial'
  question: LocalizedString
  figure: SpatialGrid
  /**
   * Replaces the default dot explanation under the prompt figure. Supply it whenever the
   * dot means something other than a corner of a shape — the start of a route, a mark on
   * folded paper, a door — so the on-screen hint never contradicts the puzzle.
   */
  note?: LocalizedString
  /** Labels name the frame ("Shape A"), never its transformation — that would answer the puzzle. */
  options: Array<{ id: string; grid: SpatialGrid; label: LocalizedString }>
  answerId: string
}

/**
 * A chain of linked questions answered one after another. Every step must be right:
 * the picks are submitted together as one answer, so a child has to carry the result of
 * step N into step N+1 instead of guessing each part in isolation.
 *
 * This is the main way tier-two lessons (numbers 10-19) raise cognitive load without
 * raising reading load — see `.ai/specs/worlds.md`.
 */
export interface MultiStepPuzzle {
  type: 'multi-step'
  /** The shared situation every step refers back to. Shown above the chain throughout. */
  intro: LocalizedString
  /** Optional emoji strip illustrating the intro, e.g. a list to remember. */
  visual?: string
  steps: Array<{
    id: string
    prompt: LocalizedString
    options: Array<{ id: string; emoji?: string; label: LocalizedString }>
    answerId: string
  }>
}

/**
 * A grid of cells the player taps to build an answer, rather than picking one of four.
 * Used where the answer is a shape or a set of places — completing a pattern, mirroring
 * a drawing, marking every spot that satisfies a constraint.
 */
export interface GridSelectPuzzle {
  type: 'grid-select'
  question: LocalizedString
  /** Extra guidance under the question, e.g. where the mirror line runs. */
  note?: LocalizedString
  /**
   * One entry per row, each entry one cell. A cell holds emoji (already-placed content)
   * or `''` for a blank the player may tap. Every row must be the same length.
   */
  cells: string[][]
  /** Every cell that must end up selected, as `row-col`, 0-based. */
  answer: string[]
}

export type ThinkingPuzzle = PatternPuzzle | IfThenPuzzle | MathPuzzle | SequencePuzzle | TrueFalsePuzzle | SortPuzzle | FillInPuzzle | MatchPuzzle | AbstractionPuzzle | SpatialPuzzle | MultiStepPuzzle | GridSelectPuzzle

export interface ThinkingLessonTutorial {
  title: LocalizedString
  body: LocalizedString
  example?: LocalizedString
}

export interface ThinkingLesson {
  id: string
  worldId: ThinkingWorldId
  number: number
  title: LocalizedString
  mascotMessage: LocalizedString
  xpReward: number
  puzzle: ThinkingPuzzle
  tutorial?: ThinkingLessonTutorial
}

// ── Blocks path ───────────────────────────────────────────────

// ── Safety path (Digital Citizenship) ────────────────────────

export type SafetyWorldId = 'passwords' | 'privacy' | 'kindness' | 'scams'

export interface SafetyWorld {
  id: SafetyWorldId
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

/** Puzzle shapes are domain-agnostic — the safety path reuses the thinking path's puzzle system. */
export type SafetyPuzzle = ThinkingPuzzle

export interface SafetyLesson {
  id: string
  worldId: SafetyWorldId
  number: number
  title: LocalizedString
  mascotMessage: LocalizedString
  xpReward: number
  puzzle: SafetyPuzzle
  tutorial?: ThinkingLessonTutorial
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

/** Why a run stopped generating actions before the code finished. */
export type StopReason = 'action-cap' | 'loop-cap' | 'crashed'

export interface ParseResult {
  actions: GameAction[]
  /** A genuine JavaScript exception thrown by the generated code. */
  error?: string
  /** Set when a guard halted generation. Not an error — see gameEngine. */
  stopped?: StopReason
}
