import type { World } from '../../types'

export const loopsWorld: World = {
  id: 'loops',
  name: { en: 'Loop Land', id: 'Negeri Perulangan' },
  emoji: '🔄',
  tagline: { en: 'Help Dash race through the track efficiently!', id: 'Bantu Dash berlomba di lintasan dengan efisien!' },
  ageRange: '8–10',
  concept: { en: 'Loop Efficiency', id: 'Efisiensi Perulangan' },
  character: '🏎️',
  facingDefault: 'left',
  characterName: 'Dash',
  itemEmoji: '⭐',
  obstacleEmoji: '🛑',
  goalEmoji: '🏁',
  theme: {
    bgGradient: 'linear-gradient(135deg, #1c0500 0%, #431407 50%, #7c2d12 100%)',
    cellBg: 'rgba(249,115,22,0.15)',
    cellBorder: 'rgba(249,115,22,0.3)',
    accentColor: '#f97316',
    textColor: '#fed7aa',
  },
  lessonCount: 10,
}
