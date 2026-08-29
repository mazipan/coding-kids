import { useState, useEffect, useCallback } from 'react'
import type { PlayerProgress, LessonProgress } from '../types'
import { getLevelInfo } from '../data/xpSystem'
import { WORLDS } from '../data/worlds'

const STORAGE_KEY = 'codekids_progress_v1'

/** Every blocks-path world id (main and bonus). */
const BLOCKS_WORLD_IDS = new Set<string>(WORLDS.map(w => w.id))

const DEFAULT_PROGRESS: PlayerProgress = {
  xp: 0,
  level: 1,
  lessons: {},
  badges: [],
  totalStars: 0,
  lastPlayed: new Date().toISOString(),
}

/** Bonus worlds unlock immediately — the blocks path has no world-level lock (INV-L2). */
export function areBonusWorldsUnlocked(_progress: PlayerProgress): boolean {
  return true
}

/**
 * INV-L1 — lessons unlock sequentially within every world, blocks and thinking alike:
 * lesson N requires lesson N-1 completed. One blocks-path exception: where a world's
 * lesson 0 is a tutorial (`isTutorial: true`), it's optional, not a gate — lesson 1 is
 * always open. Bonus worlds with no lesson 0 (numbering starts at 1) fall into the same
 * "lesson 1 always open" case.
 */
export function isLessonAvailable(progress: PlayerProgress, lessonId: string, worldId: string): boolean {
  const lessonNum = parseInt(lessonId.split('-')[1] ?? '1', 10)
  if (lessonNum === 0) return true

  if (lessonNum === 1) {
    if (BLOCKS_WORLD_IDS.has(worldId)) return true

    // Thinking path — lesson 1 needs lesson 0 completed.
    const hasWorldProgress = Object.keys(progress.lessons).some(
      id => id.startsWith(`${worldId}-`) && id !== `${worldId}-0`
    )
    if (hasWorldProgress) return true
    return progress.lessons[`${worldId}-0`]?.completed ?? false
  }

  return progress.lessons[`${worldId}-${lessonNum - 1}`]?.completed ?? false
}

function loadProgress(): PlayerProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROGRESS
    return { ...DEFAULT_PROGRESS, ...JSON.parse(raw) }
  } catch {
    return DEFAULT_PROGRESS
  }
}

function saveProgress(p: PlayerProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p))
  } catch {
    // localStorage may be unavailable
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<PlayerProgress>(loadProgress)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  const completeLesson = useCallback((
    lessonId: string,
    stars: number,
    xpEarned: number
  ): { leveledUp: boolean; newLevel: number; oldLevel: number } => {
    let leveledUp = false
    let newLevel = 0
    let oldLevel = 0

    setProgress(prev => {
      const existing = prev.lessons[lessonId]
      const isNew = !existing?.completed
      const betterStars = !existing || stars > existing.stars

      if (!betterStars && !isNew) {
        return prev
      }

      const xpGain = isNew ? xpEarned : 0
      const newXP = prev.xp + xpGain
      const prevLevelInfo = getLevelInfo(prev.xp)
      const newLevelInfo = getLevelInfo(newXP)

      oldLevel = prevLevelInfo.level
      newLevel = newLevelInfo.level
      leveledUp = newLevel > oldLevel

      const starDelta = betterStars ? stars - (existing?.stars ?? 0) : 0

      const updatedLesson: LessonProgress = {
        stars: betterStars ? stars : existing?.stars ?? 0,
        completed: true,
        xpEarned: Math.max(xpEarned, existing?.xpEarned ?? 0),
        attempts: (existing?.attempts ?? 0) + 1,
      }

      const newProgress: PlayerProgress = {
        ...prev,
        xp: newXP,
        level: newLevel,
        totalStars: prev.totalStars + starDelta,
        lastPlayed: new Date().toISOString(),
        lessons: {
          ...prev.lessons,
          [lessonId]: updatedLesson,
        },
      }

      // Award badges
      const badges = [...prev.badges]
      if (newXP >= 100 && !badges.includes('first_lesson')) badges.push('first_lesson')
      if (newProgress.totalStars >= 10 && !badges.includes('star_collector')) badges.push('star_collector')
      if (newLevel >= 5 && !badges.includes('level_5')) badges.push('level_5')
      if (newLevel >= 10 && !badges.includes('level_10')) badges.push('level_10')
      newProgress.badges = badges

      return newProgress
    })

    return { leveledUp, newLevel, oldLevel }
  }, [])

  const getLessonProgress = useCallback((lessonId: string): LessonProgress | undefined => {
    return progress.lessons[lessonId]
  }, [progress.lessons])

  const isBonusWorldUnlocked = useCallback((): boolean => {
    return areBonusWorldsUnlocked(progress)
  }, [progress])

  const isLessonUnlocked = useCallback((lessonId: string, worldId: string): boolean => {
    return isLessonAvailable(progress, lessonId, worldId)
  }, [progress.lessons])

  const isWorldUnlocked = useCallback((unlockAtXP: number): boolean => {
    return progress.xp >= unlockAtXP
  }, [progress.xp])

  const resetProgress = useCallback(() => {
    setProgress(DEFAULT_PROGRESS)
  }, [])

  return {
    progress,
    completeLesson,
    getLessonProgress,
    isLessonUnlocked,
    isWorldUnlocked,
    isBonusWorldUnlocked,
    resetProgress,
  }
}
