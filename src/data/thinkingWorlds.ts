import type { ThinkingWorld } from '../types'

export const THINKING_WORLDS: ThinkingWorld[] = [
  {
    id: 'patterns',
    name: { en: 'Pattern World', id: 'Dunia Pola' },
    emoji: '🔮',
    tagline: { en: 'Spot the pattern, find what\'s next!', id: 'Temukan polanya, apa yang berikutnya!' },
    ageRange: '5–8',
    concept: { en: 'Pattern Recognition', id: 'Pengenalan Pola' },
    color: 'purple',
    bgGradient: 'from-purple-900/50 to-violet-900/30',
    unlockAtXP: 0,
    lessonCount: 10,
  },
  {
    id: 'logic',
    name: { en: 'Logic Land', id: 'Tanah Logika' },
    emoji: '🧠',
    tagline: { en: 'Think through conditions and choices!', id: 'Pikirkan kondisi dan pilihan!' },
    ageRange: '7–10',
    concept: { en: 'If/Then Thinking', id: 'Berpikir Jika/Maka' },
    color: 'blue',
    bgGradient: 'from-blue-900/50 to-cyan-900/30',
    unlockAtXP: 30,
    lessonCount: 10,
  },
  {
    id: 'counting',
    name: { en: 'Math Magic', id: 'Sihir Matematika' },
    emoji: '✨',
    tagline: { en: 'Numbers, counting, and clever tricks!', id: 'Angka, berhitung, dan trik pintar!' },
    ageRange: '8–12',
    concept: { en: 'Number Patterns', id: 'Pola Angka' },
    color: 'emerald',
    bgGradient: 'from-emerald-900/50 to-teal-900/30',
    unlockAtXP: 80,
    lessonCount: 10,
  },
]

export function getThinkingWorld(id: string): ThinkingWorld | undefined {
  return THINKING_WORLDS.find(w => w.id === id)
}
