import type { World } from '../../types'

export const orchestraWorld: World = {
  id: 'orchestra',
  name: { en: 'Code Orchestra', id: 'Orkestra Kode' },
  emoji: '🎵',
  tagline: { en: 'Compose clever code and collect every note!', id: 'Susun kode cerdas dan kumpulkan setiap nada!' },
  ageRange: '8–12',
  concept: { en: 'Loops & Functions', id: 'Perulangan & Fungsi' },
  character: '🧑‍🎤',
  characterName: 'Melody',
  itemEmoji: '🎵',
  obstacleEmoji: '🎹',
  goalEmoji: '🎭',
  theme: {
    bgGradient: 'linear-gradient(135deg, #1f0737 0%, #4c1d95 50%, #831843 100%)',
    cellBg: 'rgba(244,114,182,0.13)',
    cellBorder: 'rgba(244,114,182,0.32)',
    accentColor: '#f472b6',
    textColor: '#fce7f3',
  },
  unlockAtXP: 999999,
  lessonCount: 10,
  isBonus: true,
}
