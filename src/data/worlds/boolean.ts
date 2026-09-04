import type { World } from '../../types'

export const booleanWorld: World = {
  id: 'boolean',
  name: { en: 'Logic Lighthouse', id: 'Mercusuar Logika' },
  emoji: '💡',
  tagline: { en: 'Flip the right switches with AND, OR, and NOT!', id: 'Nyalakan saklar yang tepat dengan DAN, ATAU, dan TIDAK!' },
  ageRange: '8–14',
  concept: { en: 'Boolean Logic (AND / OR / NOT)', id: 'Logika Boolean (DAN / ATAU / TIDAK)' },
  character: '🦉',
  characterName: 'Ollie',
  itemEmoji: '🔋',
  obstacleEmoji: '🔒',
  goalEmoji: '🚦',
  theme: {
    bgGradient: 'linear-gradient(135deg, #061224 0%, #0b2447 50%, #123a6b 100%)',
    cellBg: 'rgba(96,165,250,0.12)',
    cellBorder: 'rgba(96,165,250,0.3)',
    accentColor: '#60a5fa',
    textColor: '#dbeafe',
  },
  lessonCount: 20,
  isBonus: true,
}
