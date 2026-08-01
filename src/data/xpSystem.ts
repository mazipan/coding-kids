import type { LocalizedString } from '../types'

export interface XPLevel {
  level: number
  name: LocalizedString
  minXP: number
  maxXP: number
  badge: string
  color: string
  bgColor: string
  description: LocalizedString
}

export const XP_LEVELS: XPLevel[] = [
  { level: 1,  name: { en: 'Code Cub',         id: 'Anak Kode' },           minXP: 0,     maxXP: 149,      badge: '🐾', color: '#34D399', bgColor: '#064E3B', description: { en: 'Just starting your coding adventure!',      id: 'Baru memulai petualangan coding-mu!' } },
  { level: 2,  name: { en: 'Block Builder',    id: 'Pembangun Blok' },      minXP: 150,   maxXP: 349,      badge: '🧱', color: '#60A5FA', bgColor: '#1E3A5F', description: { en: 'You know how to use blocks!',                id: 'Kamu sudah tahu cara menggunakan blok!' } },
  { level: 3,  name: { en: 'Loop Learner',     id: 'Pelajar Perulangan' },  minXP: 350,   maxXP: 599,      badge: '🔄', color: '#A78BFA', bgColor: '#3B0764', description: { en: 'Loops are your new superpower!',             id: 'Perulangan adalah kekuatan barumu!' } },
  { level: 4,  name: { en: 'Pixel Pal',        id: 'Teman Piksel' },        minXP: 600,   maxXP: 899,      badge: '🎮', color: '#F472B6', bgColor: '#500724', description: { en: 'You\'re getting really good!',               id: 'Kamu semakin jago!' } },
  { level: 5,  name: { en: 'Debug Detective',  id: 'Detektif Debug' },      minXP: 900,   maxXP: 1249,     badge: '🔍', color: '#FBBF24', bgColor: '#451A03', description: { en: 'You can solve any problem!',                 id: 'Kamu bisa memecahkan masalah apa pun!' } },
  { level: 6,  name: { en: 'Code Explorer',    id: 'Penjelajah Kode' },     minXP: 1250,  maxXP: 1649,     badge: '🗺️', color: '#F97316', bgColor: '#431407', description: { en: 'Exploring new coding territories!',          id: 'Menjelajahi wilayah coding baru!' } },
  { level: 7,  name: { en: 'Logic Legend',     id: 'Legenda Logika' },      minXP: 1650,  maxXP: 2099,     badge: '🧩', color: '#14B8A6', bgColor: '#042F2E', description: { en: 'Your logic skills are legendary!',          id: 'Kemampuan logikamu sudah legendaris!' } },
  { level: 8,  name: { en: 'Algorithm Ace',    id: 'Jagoan Algoritma' },    minXP: 2100,  maxXP: 2599,     badge: '⚡', color: '#EF4444', bgColor: '#450A0A', description: { en: 'Algorithms are your playground!',           id: 'Algoritma adalah taman bermainmu!' } },
  { level: 9,  name: { en: 'Variable Voyager', id: 'Pengembara Variabel' }, minXP: 2600,  maxXP: 3149,     badge: '🚀', color: '#8B5CF6', bgColor: '#2E1065', description: { en: 'Voyaging through variables!',               id: 'Berpetualang melalui variabel!' } },
  { level: 10, name: { en: 'Code Champion',    id: 'Juara Kode' },          minXP: 3150,  maxXP: 3749,     badge: '🏆', color: '#FBBF24', bgColor: '#78350F', description: { en: 'A true coding champion!',                   id: 'Juara coding sejati!' } },
  { level: 11, name: { en: 'Binary Boss',      id: 'Bos Biner' },           minXP: 3750,  maxXP: 4399,     badge: '💻', color: '#6EE7B7', bgColor: '#022C22', description: { en: 'You speak the language of computers!',      id: 'Kamu berbicara bahasa komputer!' } },
  { level: 12, name: { en: 'Function Finder',  id: 'Pencari Fungsi' },      minXP: 4400,  maxXP: 5099,     badge: '🔧', color: '#7DD3FC', bgColor: '#082F49', description: { en: 'Functions are your best friends!',          id: 'Fungsi adalah sahabat terbaikmu!' } },
  { level: 13, name: { en: 'Loop Lord',        id: 'Tuan Perulangan' },     minXP: 5100,  maxXP: 5849,     badge: '👑', color: '#C4B5FD', bgColor: '#1E1B4B', description: { en: 'Lord of all loops!',                        id: 'Penguasa semua perulangan!' } },
  { level: 14, name: { en: 'Syntax Superhero', id: 'Superhero Sintaksis' }, minXP: 5850,  maxXP: 6649,     badge: '🦸', color: '#FCA5A5', bgColor: '#450A0A', description: { en: 'Your code is always perfect!',              id: 'Kodenya selalu sempurna!' } },
  { level: 15, name: { en: 'Master Coder',     id: 'Master Kode' },         minXP: 6650,  maxXP: Infinity, badge: '🌟', color: '#FBBF24', bgColor: '#451A03', description: { en: 'The ultimate coder!',                       id: 'Coder paling hebat!' } },
]

export function getLevelInfo(xp: number): XPLevel {
  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (xp >= XP_LEVELS[i].minXP) return XP_LEVELS[i]
  }
  return XP_LEVELS[0]
}

export function getXPProgress(xp: number) {
  const level = getLevelInfo(xp)
  if (level.level === 15) {
    return { current: xp - level.minXP, needed: 1000, percent: Math.min(100, Math.round(((xp - level.minXP) / 1000) * 100)) }
  }
  const current = xp - level.minXP
  const needed = level.maxXP - level.minXP + 1
  return { current, needed, percent: Math.round((current / needed) * 100) }
}

export function getNextLevelInfo(xp: number): XPLevel | null {
  const current = getLevelInfo(xp)
  if (current.level >= 15) return null
  return XP_LEVELS[current.level] ?? null
}

const CATEGORY_BLOCK_TYPES: Record<string, string[]> = {
  loops: ['controls_repeat_ext', 'controls_whileUntil', 'controls_for'],
  variables: ['variables_get', 'variables_set', 'math_change'],
  logic: ['controls_if', 'controls_ifelse'],
  functions: ['procedures_defnoreturn', 'procedures_defreturn', 'procedures_callnoreturn', 'procedures_callreturn'],
  lists: ['lists_create_with', 'lists_getIndex', 'lists_setIndex', 'lists_repeat', 'lists_length'],
}

export function getMissingCategories(usedBlockTypes: string[], requiredCategories: string[]): string[] {
  return requiredCategories.filter(cat => {
    const catBlocks = CATEGORY_BLOCK_TYPES[cat] ?? []
    return !catBlocks.some(bt => usedBlockTypes.includes(bt))
  })
}

export function calculateStars(
  blockCount: number,
  thresholds: [number, number] | [number, number, number, number],
  usedBlockTypes?: string[],
  requiredCategories?: string[]
): number {
  if (usedBlockTypes && requiredCategories && requiredCategories.length > 0) {
    if (getMissingCategories(usedBlockTypes, requiredCategories).length > 0) return 1
  }
  if (thresholds.length === 4) {
    const [t1, t2, t3, t4] = thresholds
    if (blockCount <= t4) return 5
    if (blockCount <= t3) return 4
    if (blockCount <= t2) return 3
    if (blockCount <= t1) return 2
    return 1
  }
  if (blockCount <= thresholds[1]) return 3
  if (blockCount <= thresholds[0]) return 2
  return 1
}

export function maxStarsForThresholds(thresholds: [number, number] | [number, number, number, number]): number {
  return thresholds.length === 4 ? 5 : 3
}

export function calculateXPReward(baseXP: number, stars: number): number {
  const bonus = stars === 5 ? 150 : stars === 4 ? 100 : stars === 3 ? 50 : stars === 2 ? 25 : 0
  return baseXP + bonus
}
