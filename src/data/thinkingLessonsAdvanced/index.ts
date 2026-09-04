import type { ThinkingLesson } from '../../types'
import { abstractionLessonsAdvanced } from './abstraction'
import { countingLessonsAdvanced } from './counting'
import { decompositionLessonsAdvanced } from './decomposition'
import { deductionLessonsAdvanced } from './deduction'
import { inductionLessonsAdvanced } from './induction'
import { logicLessonsAdvanced } from './logic'
import { mathReasoningLessonsAdvanced } from './mathReasoning'
import { memoryLessonsAdvanced } from './memory'
import { moneyLessonsAdvanced } from './money'
import { natureLessonsAdvanced } from './nature'
import { numbersLessonsAdvanced } from './numbers'
import { patternsLessonsAdvanced } from './patterns'
import { planningLessonsAdvanced } from './planning'
import { probabilityLessonsAdvanced } from './probability'
import { spatialLessonsAdvanced } from './spatial'

/**
 * Tier two of the thinking path — lessons 10–19 of every world.
 *
 * Tier one (lessons 0–9, in `../thinkingLessons/`) teaches each world's core idea. Tier
 * two raises the cognitive load rather than the reading load (INV-Q5): compound
 * conditions, chained reasoning, tracking a list that changes under you, composing two
 * transformations, satisfying several constraints at once.
 *
 * Two selection models exist only here:
 *   `multi-step`   a chain of linked questions — one wrong link fails the whole chain
 *   `grid-select`  tap many squares to build a shape or mark every spot a rule allows
 *
 * The first lesson in a world that uses one of them carries a `tutorial` explaining it.
 *
 * One file per world, mirroring the split done for `worlds/` and `thinkingWorlds/` — see
 * `.ai/decisions/log/` for that rationale. Array order never matters (every lookup filters
 * by `worldId` and sorts by `number`); the order below just mirrors `THINKING_WORLDS`.
 */
export const THINKING_LESSONS_ADVANCED: ThinkingLesson[] = [
  ...patternsLessonsAdvanced,
  ...logicLessonsAdvanced,
  ...countingLessonsAdvanced,
  ...memoryLessonsAdvanced,
  ...natureLessonsAdvanced,
  ...numbersLessonsAdvanced,
  ...decompositionLessonsAdvanced,
  ...abstractionLessonsAdvanced,
  ...mathReasoningLessonsAdvanced,
  ...inductionLessonsAdvanced,
  ...deductionLessonsAdvanced,
  ...planningLessonsAdvanced,
  ...probabilityLessonsAdvanced,
  ...spatialLessonsAdvanced,
  ...moneyLessonsAdvanced,
]
