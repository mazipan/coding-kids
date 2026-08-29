import type { World } from '../../types'

export const spaceWorld: World = {
  id: 'space',
  name: { en: 'Space Station', id: 'Stasiun Luar Angkasa' },
  emoji: '🚀',
  tagline: { en: 'Help Astro collect stars in space!', id: 'Bantu Astro mengumpulkan bintang di luar angkasa!' },
  ageRange: '7–9',
  concept: { en: 'Loops', id: 'Perulangan' },
  character: '🚀',
  characterName: 'Astro',
  itemEmoji: '⭐',
  obstacleEmoji: '☄️',
  goalEmoji: '🛸',
  theme: {
    bgGradient: 'linear-gradient(135deg, #0a0118 0%, #1e1b4b 50%, #312e81 100%)',
    cellBg: 'rgba(99,102,241,0.15)',
    cellBorder: 'rgba(99,102,241,0.3)',
    accentColor: '#818cf8',
    textColor: '#c7d2fe',
  },
  lessonCount: 10,
}
