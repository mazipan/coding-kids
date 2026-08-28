import type { ThinkingWorld } from '../../types'

export const memoryWorld: ThinkingWorld = {
  id: 'memory',
  name: { en: 'Memory Maze', id: 'Labirin Memori' },
  emoji: '🧩',
  tagline: { en: 'Remember the order — spot what\'s missing!', id: 'Ingat urutannya — temukan yang hilang!' },
  ageRange: '6–10',
  concept: { en: 'Sequence Memory', id: 'Memori Urutan' },
  color: 'rose',
  bgGradient: 'from-rose-900/50 to-pink-900/30',
  unlockAtXP: 0,
  lessonCount: 20,
}
