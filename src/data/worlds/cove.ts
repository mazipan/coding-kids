import type { World } from '../../types'

export const coveWorld: World = {
  id: 'cove',
  name: { en: 'Coordinate Cove', id: 'Teluk Koordinat' },
  emoji: '🧭',
  tagline: { en: 'Read the chart — sail to every marker!', id: 'Baca petanya — berlayarlah ke setiap penanda!' },
  ageRange: '10–13',
  concept: { en: 'Coordinates & Position', id: 'Koordinat & Posisi' },
  character: '⛵',
  facingDefault: 'left',
  characterName: 'Coral',
  itemEmoji: '📍',
  obstacleEmoji: '🏝️',
  goalEmoji: '🗺️',
  theme: {
    bgGradient: 'linear-gradient(135deg, #021a1a 0%, #04343a 50%, #0f5257 100%)',
    cellBg: 'rgba(45,212,191,0.12)',
    cellBorder: 'rgba(45,212,191,0.3)',
    accentColor: '#2dd4bf',
    textColor: '#99f6e4',
  },
  lessonCount: 10,
  isBonus: true,
}
