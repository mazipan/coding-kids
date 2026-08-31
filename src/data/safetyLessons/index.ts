import type { SafetyLesson } from '../../types'
import { passwordsLessons } from './passwords'
import { privacyLessons } from './privacy'
import { kindnessLessons } from './kindness'
import { scamsLessons } from './scams'

/** Tier one only (0–9) for this MVP — see `.ai/plans/2026-08-31-feat-digital-citizenship-path.md`. */
export const SAFETY_LESSONS: SafetyLesson[] = [
  ...passwordsLessons,
  ...privacyLessons,
  ...kindnessLessons,
  ...scamsLessons,
]

export function getSafetyLessonsByWorld(worldId: string): SafetyLesson[] {
  return SAFETY_LESSONS.filter(l => l.worldId === worldId).sort((a, b) => a.number - b.number)
}

export function getSafetyLessonByNumber(worldId: string, number: number): SafetyLesson | undefined {
  return SAFETY_LESSONS.find(l => l.worldId === worldId && l.number === number)
}
