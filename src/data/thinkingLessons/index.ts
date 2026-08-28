import type { ThinkingLesson } from '../../types'
import { THINKING_LESSONS_ADVANCED } from '../thinkingLessonsAdvanced'
import { abstractionLessons } from './abstraction'
import { countingLessons } from './counting'
import { decompositionLessons } from './decomposition'
import { deductionLessons } from './deduction'
import { inductionLessons } from './induction'
import { logicLessons } from './logic'
import { mathReasoningLessons } from './mathReasoning'
import { memoryLessons } from './memory'
import { natureLessons } from './nature'
import { numbersLessons } from './numbers'
import { patternsLessons } from './patterns'
import { planningLessons } from './planning'
import { probabilityLessons } from './probability'
import { spatialLessons } from './spatial'

/** Both tiers. Order here does not matter — every lookup sorts or filters by number. */
export const THINKING_LESSONS: ThinkingLesson[] = [
  ...patternsLessons,
  ...logicLessons,
  ...countingLessons,
  ...memoryLessons,
  ...natureLessons,
  ...numbersLessons,
  ...decompositionLessons,
  ...abstractionLessons,
  ...mathReasoningLessons,
  ...inductionLessons,
  ...deductionLessons,
  ...planningLessons,
  ...probabilityLessons,
  ...spatialLessons,
  ...THINKING_LESSONS_ADVANCED,
]

export function getThinkingLessonsByWorld(worldId: string): ThinkingLesson[] {
  return THINKING_LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getThinkingLessonByNumber(worldId: string, number: number): ThinkingLesson | undefined {
  return THINKING_LESSONS.find(l => l.worldId === worldId && l.number === number)
}
