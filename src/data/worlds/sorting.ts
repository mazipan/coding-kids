import type { World } from '../../types'

export const sortingWorld: World = {
  id: 'sorting',
  name: { en: 'Space Sorting', id: 'Penyortiran Luar Angkasa' },
  emoji: '📦',
  tagline: { en: 'Organize packages in the space warehouse!', id: 'Organisir paket di gudang luar angkasa!' },
  ageRange: '11–14',
  concept: { en: 'Algorithms & Data', id: 'Algoritma & Data' },
  character: '🤖',
  characterName: 'Sorty',
  itemEmoji: '📦',
  obstacleEmoji: '⚠️',
  goalEmoji: '🎯',
  theme: {
    bgGradient: 'linear-gradient(135deg, #030712 0%, #0a1628 50%, #0d2137 100%)',
    cellBg: 'rgba(34,211,238,0.12)',
    cellBorder: 'rgba(34,211,238,0.3)',
    accentColor: '#22d3ee',
    textColor: '#a5f3fc',
  },
  lessonCount: 20,
  isBonus: true,
}
