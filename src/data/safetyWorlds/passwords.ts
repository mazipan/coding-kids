import type { SafetyWorld } from '../../types'

export const passwordsWorld: SafetyWorld = {
  id: 'passwords',
  name: { en: 'Password Planet', id: 'Planet Kata Sandi' },
  emoji: '🔑',
  tagline: { en: 'Keep your secrets super safe!', id: 'Jaga rahasiamu tetap aman!' },
  ageRange: '5–7',
  concept: { en: 'Secrets & Strong Codes', id: 'Rahasia & Kode Kuat' },
  color: 'yellow',
  bgGradient: 'from-yellow-900/50 to-orange-900/30',
  unlockAtXP: 0,
  lessonCount: 10,
}
