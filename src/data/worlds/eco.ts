import type { World } from '../../types'

export const ecoWorld: World = {
  id: 'eco',
  name: { en: 'Eco City', id: 'Kota Hijau' },
  emoji: '🌱',
  tagline: { en: 'Break one big mission into smaller algorithms!', id: 'Pecah satu misi besar menjadi algoritma kecil!' },
  ageRange: '10–14',
  concept: { en: 'Decomposition & Reuse', id: 'Dekomposisi & Penggunaan Ulang' },
  character: '👷',
  characterName: 'Sol',
  itemEmoji: '♻️',
  obstacleEmoji: '🏗️',
  goalEmoji: '🏙️',
  theme: {
    bgGradient: 'linear-gradient(135deg, #0a2410 0%, #14532d 50%, #3f6212 100%)',
    cellBg: 'rgba(132,204,22,0.13)',
    cellBorder: 'rgba(132,204,22,0.32)',
    accentColor: '#a3e635',
    textColor: '#ecfccb',
  },
  lessonCount: 10,
  isBonus: true,
}
