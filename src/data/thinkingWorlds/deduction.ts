import type { ThinkingWorld } from '../../types'

export const deductionWorld: ThinkingWorld = {
  id: 'deduction',
  name: { en: 'Logic Detective', id: 'Detektif Logika' },
  emoji: '🕵️',
  tagline: { en: 'Use the rules to reach the only right conclusion!', id: 'Gunakan aturan untuk mencapai kesimpulan yang tepat!' },
  ageRange: '9–13',
  concept: { en: 'Deductive Reasoning', id: 'Penalaran Deduktif' },
  color: 'violet',
  bgGradient: 'from-violet-900/50 to-purple-900/30',
  unlockAtXP: 0,
  lessonCount: 20,
}
