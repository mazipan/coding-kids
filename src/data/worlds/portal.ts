import type { World } from '../../types'

export const portalWorld: World = {
  id: 'portal',
  name: { en: 'Time Portal', id: 'Portal Waktu' },
  emoji: '⏰',
  tagline: { en: 'Help Nova travel through time with arrays!', id: 'Bantu Nova menjelajahi waktu dengan array!' },
  ageRange: '12–14',
  concept: { en: 'Arrays & Lists', id: 'Array & Daftar' },
  character: '🧑‍🚀',
  characterName: 'Nova',
  itemEmoji: '🕐',
  obstacleEmoji: '⚡',
  goalEmoji: '🌀',
  theme: {
    bgGradient: 'linear-gradient(135deg, #0c0a00 0%, #422006 50%, #78350f 100%)',
    cellBg: 'rgba(251,191,36,0.15)',
    cellBorder: 'rgba(251,191,36,0.3)',
    accentColor: '#fbbf24',
    textColor: '#fef3c7',
  },
  unlockAtXP: 1650,
  lessonCount: 10,
}
