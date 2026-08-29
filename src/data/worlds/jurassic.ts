import type { World } from '../../types'

export const jurassicWorld: World = {
  id: 'jurassic',
  name: { en: 'Jurassic Park', id: 'Taman Jurassic' },
  emoji: '🦕',
  tagline: { en: 'Rescue dino eggs before they hatch!', id: 'Selamatkan telur dino sebelum menetas!' },
  ageRange: '10–14',
  concept: { en: 'Real-World Pathfinding', id: 'Pencarian Jalur Nyata' },
  character: '🧑‍🔬',
  characterName: 'Dr. Rex',
  itemEmoji: '🥚',
  obstacleEmoji: '🌿',
  goalEmoji: '🏕️',
  theme: {
    bgGradient: 'linear-gradient(135deg, #1a0a00 0%, #3d1f00 50%, #5c3300 100%)',
    cellBg: 'rgba(234,179,8,0.12)',
    cellBorder: 'rgba(234,179,8,0.3)',
    accentColor: '#eab308',
    textColor: '#fef08a',
  },
  lessonCount: 20,
  isBonus: true,
}
