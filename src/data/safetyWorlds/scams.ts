import type { SafetyWorld } from '../../types'

export const scamsWorld: SafetyWorld = {
  id: 'scams',
  name: { en: 'Scam Detectors', id: 'Detektif Penipuan' },
  emoji: '🕵️',
  tagline: { en: 'Spot the tricks before they get you.', id: 'Kenali triknya sebelum kena tipu.' },
  ageRange: '11–14',
  concept: { en: 'Spotting Scams & Phishing', id: 'Mengenali Penipuan & Phishing' },
  color: 'red',
  bgGradient: 'from-red-900/50 to-rose-900/30',
  unlockAtXP: 0,
  lessonCount: 10,
}
