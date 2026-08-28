import type { World } from '../../types'

export const factoryWorld: World = {
  id: 'factory',
  name: { en: 'Robot Factory', id: 'Pabrik Robot' },
  emoji: '🤖',
  tagline: { en: 'Help Bolt build robots with functions!', id: 'Bantu Bolt membangun robot dengan fungsi!' },
  ageRange: '11–13',
  concept: { en: 'Functions', id: 'Fungsi' },
  character: '🤖',
  characterName: 'Bolt',
  itemEmoji: '⚙️',
  obstacleEmoji: '🔩',
  goalEmoji: '🏭',
  theme: {
    bgGradient: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)',
    cellBg: 'rgba(156,163,175,0.15)',
    cellBorder: 'rgba(156,163,175,0.3)',
    accentColor: '#9ca3af',
    textColor: '#d1d5db',
  },
  unlockAtXP: 1250,
  lessonCount: 6,
}
