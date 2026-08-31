import type { SafetyWorld } from '../../types'
import { passwordsWorld } from './passwords'
import { privacyWorld } from './privacy'
import { kindnessWorld } from './kindness'
import { scamsWorld } from './scams'

export const SAFETY_WORLDS: SafetyWorld[] = [
  passwordsWorld,
  privacyWorld,
  kindnessWorld,
  scamsWorld,
]

export function getSafetyWorld(id: string): SafetyWorld | undefined {
  return SAFETY_WORLDS.find(w => w.id === id)
}
