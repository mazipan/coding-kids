export interface XPLevel {
  level: number
  name: string
  minXP: number
  maxXP: number
  badge: string
  color: string
  bgColor: string
  description: string
}

export const XP_LEVELS: XPLevel[] = [
  { level: 1,  name: 'Code Cub',        minXP: 0,     maxXP: 149,   badge: '🐾', color: '#34D399', bgColor: '#064E3B', description: 'Just starting your coding adventure!' },
  { level: 2,  name: 'Block Builder',   minXP: 150,   maxXP: 349,   badge: '🧱', color: '#60A5FA', bgColor: '#1E3A5F', description: 'You know how to use blocks!' },
  { level: 3,  name: 'Loop Learner',    minXP: 350,   maxXP: 599,   badge: '🔄', color: '#A78BFA', bgColor: '#3B0764', description: 'Loops are your new superpower!' },
  { level: 4,  name: 'Pixel Pal',       minXP: 600,   maxXP: 899,   badge: '🎮', color: '#F472B6', bgColor: '#500724', description: 'You\'re getting really good!' },
  { level: 5,  name: 'Debug Detective', minXP: 900,   maxXP: 1249,  badge: '🔍', color: '#FBBF24', bgColor: '#451A03', description: 'You can solve any problem!' },
  { level: 6,  name: 'Code Explorer',   minXP: 1250,  maxXP: 1649,  badge: '🗺️', color: '#F97316', bgColor: '#431407', description: 'Exploring new coding territories!' },
  { level: 7,  name: 'Logic Legend',    minXP: 1650,  maxXP: 2099,  badge: '🧩', color: '#14B8A6', bgColor: '#042F2E', description: 'Your logic skills are legendary!' },
  { level: 8,  name: 'Algorithm Ace',   minXP: 2100,  maxXP: 2599,  badge: '⚡', color: '#EF4444', bgColor: '#450A0A', description: 'Algorithms are your playground!' },
  { level: 9,  name: 'Variable Voyager',minXP: 2600,  maxXP: 3149,  badge: '🚀', color: '#8B5CF6', bgColor: '#2E1065', description: 'Voyaging through variables!' },
  { level: 10, name: 'Code Champion',   minXP: 3150,  maxXP: 3749,  badge: '🏆', color: '#FBBF24', bgColor: '#78350F', description: 'A true coding champion!' },
  { level: 11, name: 'Binary Boss',     minXP: 3750,  maxXP: 4399,  badge: '💻', color: '#6EE7B7', bgColor: '#022C22', description: 'You speak the language of computers!' },
  { level: 12, name: 'Function Finder', minXP: 4400,  maxXP: 5099,  badge: '🔧', color: '#7DD3FC', bgColor: '#082F49', description: 'Functions are your best friends!' },
  { level: 13, name: 'Loop Lord',       minXP: 5100,  maxXP: 5849,  badge: '👑', color: '#C4B5FD', bgColor: '#1E1B4B', description: 'Lord of all loops!' },
  { level: 14, name: 'Syntax Superhero',minXP: 5850,  maxXP: 6649,  badge: '🦸', color: '#FCA5A5', bgColor: '#450A0A', description: 'Your code is always perfect!' },
  { level: 15, name: 'Master Coder',    minXP: 6650,  maxXP: Infinity, badge: '🌟', color: '#FBBF24', bgColor: '#451A03', description: 'The ultimate coder!' },
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

export function calculateStars(blockCount: number, thresholds: [number, number]): number {
  if (blockCount <= thresholds[1]) return 3
  if (blockCount <= thresholds[0]) return 2
  return 1
}

export function calculateXPReward(baseXP: number, stars: number): number {
  const bonus = stars === 3 ? 50 : stars === 2 ? 25 : 0
  return baseXP + bonus
}
