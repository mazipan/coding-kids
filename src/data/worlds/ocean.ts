import type { World } from '../../types'

export const oceanWorld: World = {
  id: 'ocean',
  name: { en: 'Ocean Deep', id: 'Kedalaman Samudra' },
  emoji: '🌊',
  tagline: { en: 'Help Finn the Diver explore the ocean!', id: 'Bantu Finn si Penyelam menjelajahi samudra!' },
  ageRange: '9–11',
  concept: { en: 'Variables', id: 'Variabel' },
  character: '🏊',
  facingDefault: 'left',
  characterName: 'Finn',
  itemEmoji: '💎',
  obstacleEmoji: '🪸',
  goalEmoji: '🐚',
  theme: {
    bgGradient: 'linear-gradient(135deg, #082f49 0%, #0c4a6e 50%, #075985 100%)',
    cellBg: 'rgba(14,165,233,0.15)',
    cellBorder: 'rgba(14,165,233,0.3)',
    accentColor: '#38bdf8',
    textColor: '#bae6fd',
  },
  unlockAtXP: 350,
  lessonCount: 5,
}
