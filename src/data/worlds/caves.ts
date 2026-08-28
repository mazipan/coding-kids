import type { World } from '../../types'

export const cavesWorld: World = {
  id: 'caves',
  name: { en: 'Crystal Caves', id: 'Gua Kristal' },
  emoji: '💎',
  tagline: { en: 'Help Zara find crystals in magic caves!', id: 'Bantu Zara menemukan kristal di gua ajaib!' },
  ageRange: '10–12',
  concept: { en: 'Conditions', id: 'Kondisi' },
  character: '🧝',
  characterName: 'Zara',
  itemEmoji: '💜',
  obstacleEmoji: '🪨',
  goalEmoji: '🔮',
  theme: {
    bgGradient: 'linear-gradient(135deg, #1a0533 0%, #2e1065 50%, #4c1d95 100%)',
    cellBg: 'rgba(167,139,250,0.15)',
    cellBorder: 'rgba(167,139,250,0.3)',
    accentColor: '#c084fc',
    textColor: '#e9d5ff',
  },
  unlockAtXP: 700,
  lessonCount: 6,
}
