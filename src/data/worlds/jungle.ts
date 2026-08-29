import type { World } from '../../types'

export const jungleWorld: World = {
  id: 'jungle',
  name: { en: 'Jungle Adventure', id: 'Petualangan Hutan' },
  emoji: '🌴',
  tagline: { en: 'Help Bingo the Monkey find bananas!', id: 'Bantu Bingo si Monyet menemukan pisang!' },
  ageRange: '5–7',
  concept: { en: 'Sequences', id: 'Urutan' },
  character: '🐒',
  characterName: 'Bingo',
  itemEmoji: '🍌',
  obstacleEmoji: '🌴',
  goalEmoji: '🏆',
  theme: {
    bgGradient: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)',
    cellBg: 'rgba(34,197,94,0.15)',
    cellBorder: 'rgba(34,197,94,0.3)',
    accentColor: '#4ade80',
    textColor: '#bbf7d0',
  },
  lessonCount: 20,
}
