import type { World } from '../../types'

export const debuggingWorld: World = {
  id: 'debugging',
  name: { en: 'Bug Lab', id: 'Lab Bug' },
  emoji: '🐛',
  tagline: { en: 'Find the bugs — fix the code!', id: 'Temukan bug-nya — perbaiki kodenya!' },
  ageRange: '11–14',
  concept: { en: 'Debugging', id: 'Debugging' },
  character: '🐛',
  characterName: 'Bugsy',
  itemEmoji: '🔧',
  obstacleEmoji: '⚠️',
  goalEmoji: '✅',
  theme: {
    bgGradient: 'linear-gradient(135deg, #1a0500 0%, #3d0f00 50%, #5c1a00 100%)',
    cellBg: 'rgba(239,68,68,0.12)',
    cellBorder: 'rgba(239,68,68,0.3)',
    accentColor: '#ef4444',
    textColor: '#fca5a5',
  },
  lessonCount: 10,
  isBonus: true,
}
