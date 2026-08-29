import { getLessonsByWorld } from '../data/lessons'
import { getThinkingLessonsByWorld } from '../data/thinkingLessons'
import { THINKING_WORLDS } from '../data/thinkingWorlds'
import { WORLDS } from '../data/worlds'
import { maxStarsForThresholds } from '../data/xpSystem'
import type { LocalizedString, PlayerProgress } from '../types'

/**
 * Star and completion figures shown to the player, derived from `progress.lessons`
 * rather than read from `progress.totalStars`.
 *
 * `totalStars` is a single running counter across both paths that also counts tutorial
 * lessons — those award a flat 1 star, are hidden from every world card, and can never
 * be improved. Deriving instead keeps the header, the world cards and the stats modal
 * showing the same numbers, and lets each path be counted on its own terms: a blocks
 * lesson is worth 3 or 5 stars depending on its thresholds, a thinking lesson always 3.
 */

export type PathId = 'blocks' | 'thinking'

/** Every thinking puzzle is scored on attempts: 1st try 3 stars, 2nd 2, then 1. */
export const THINKING_MAX_STARS_PER_LESSON = 3

export interface WorldStats {
  id: string
  name: LocalizedString
  emoji: string
  /** Always true for blocks worlds (INV-L2 — no lock). Thinking worlds are never gated either (INV-L3). */
  unlocked: boolean
  isBonus: boolean
  stars: number
  maxStars: number
  lessonsCompleted: number
  lessonsTotal: number
  /** Every lesson in the world is completed (any star count). */
  finished: boolean
  /** 0–100, stars out of maxStars. */
  percent: number
}

export interface PathStats {
  path: PathId
  stars: number
  maxStars: number
  /** 0–100, stars out of every star the path can ever award. */
  percent: number
  lessonsCompleted: number
  lessonsTotal: number
  worldsFinished: number
  worldsTotal: number
  worldsUnlocked: number
  worlds: WorldStats[]
}

export interface AllStats {
  blocks: PathStats
  thinking: PathStats
  stars: number
  maxStars: number
  percent: number
}

function percentOf(stars: number, maxStars: number): number {
  if (maxStars <= 0) return 0
  return Math.round((stars / maxStars) * 100)
}

function summarise(path: PathId, worlds: WorldStats[]): PathStats {
  const stars = worlds.reduce((sum, w) => sum + w.stars, 0)
  const maxStars = worlds.reduce((sum, w) => sum + w.maxStars, 0)

  return {
    path,
    stars,
    maxStars,
    percent: percentOf(stars, maxStars),
    lessonsCompleted: worlds.reduce((sum, w) => sum + w.lessonsCompleted, 0),
    lessonsTotal: worlds.reduce((sum, w) => sum + w.lessonsTotal, 0),
    worldsFinished: worlds.filter(w => w.finished).length,
    worldsTotal: worlds.length,
    worldsUnlocked: worlds.filter(w => w.unlocked).length,
    worlds,
  }
}

function blocksWorldStats(progress: PlayerProgress): WorldStats[] {
  return WORLDS.map(world => {
    // getLessonsByWorld drops the world tutorial, the same way every world card does.
    const lessons = getLessonsByWorld(world.id)
    const stars = lessons.reduce((sum, l) => sum + (progress.lessons[l.id]?.stars ?? 0), 0)
    const maxStars = lessons.reduce((sum, l) => sum + maxStarsForThresholds(l.starThresholds), 0)
    const lessonsCompleted = lessons.filter(l => progress.lessons[l.id]?.completed).length

    return {
      id: world.id,
      name: world.name,
      emoji: world.emoji,
      // INV-L2 — the blocks path has no lock; every world is unlocked from the start.
      unlocked: true,
      isBonus: world.isBonus ?? false,
      stars,
      maxStars,
      lessonsCompleted,
      lessonsTotal: lessons.length,
      finished: lessons.length > 0 && lessonsCompleted === lessons.length,
      percent: percentOf(stars, maxStars),
    }
  })
}

function thinkingWorldStats(progress: PlayerProgress): WorldStats[] {
  return THINKING_WORLDS.map(world => {
    const lessons = getThinkingLessonsByWorld(world.id)
    const stars = lessons.reduce((sum, l) => sum + (progress.lessons[l.id]?.stars ?? 0), 0)
    const maxStars = lessons.length * THINKING_MAX_STARS_PER_LESSON
    const lessonsCompleted = lessons.filter(l => progress.lessons[l.id]?.completed).length

    return {
      id: world.id,
      name: world.name,
      emoji: world.emoji,
      // INV-L3 — thinking worlds are never gated.
      unlocked: progress.xp >= world.unlockAtXP,
      isBonus: false,
      stars,
      maxStars,
      lessonsCompleted,
      lessonsTotal: lessons.length,
      finished: lessons.length > 0 && lessonsCompleted === lessons.length,
      percent: percentOf(stars, maxStars),
    }
  })
}

export function getPathStats(progress: PlayerProgress, path: PathId): PathStats {
  return summarise(
    path,
    path === 'blocks' ? blocksWorldStats(progress) : thinkingWorldStats(progress)
  )
}

export function getAllStats(progress: PlayerProgress): AllStats {
  const blocks = getPathStats(progress, 'blocks')
  const thinking = getPathStats(progress, 'thinking')
  const stars = blocks.stars + thinking.stars
  const maxStars = blocks.maxStars + thinking.maxStars

  return { blocks, thinking, stars, maxStars, percent: percentOf(stars, maxStars) }
}
