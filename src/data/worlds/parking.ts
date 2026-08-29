import type { World } from '../../types'

export const parkingWorld: World = {
  id: 'parking',
  name: { en: 'City Parking', id: 'Parkir Kota' },
  emoji: '🚗',
  tagline: { en: 'Sort and park cars in the busy city!', id: 'Sortir dan parkir mobil di kota yang sibuk!' },
  ageRange: '10–14',
  concept: { en: 'Sorting & Routing', id: 'Pengurutan & Perutean' },
  character: '👮',
  characterName: 'Parker',
  itemEmoji: '🅿️',
  obstacleEmoji: '🚧',
  goalEmoji: '🏁',
  theme: {
    bgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f3460 100%)',
    cellBg: 'rgba(56,189,248,0.12)',
    cellBorder: 'rgba(56,189,248,0.3)',
    accentColor: '#38bdf8',
    textColor: '#bae6fd',
  },
  lessonCount: 20,
  isBonus: true,
}
