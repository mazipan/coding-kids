import type { World } from '../../types'
import { cavesWorld } from './caves'
import { coveWorld } from './cove'
import { debuggingWorld } from './debugging'
import { ecoWorld } from './eco'
import { factoryWorld } from './factory'
import { jungleWorld } from './jungle'
import { jurassicWorld } from './jurassic'
import { loopsWorld } from './loops'
import { oceanWorld } from './ocean'
import { orchestraWorld } from './orchestra'
import { parkingWorld } from './parking'
import { portalWorld } from './portal'
import { sortingWorld } from './sorting'
import { spaceWorld } from './space'

export const WORLDS: World[] = [
  jungleWorld,
  spaceWorld,
  loopsWorld,
  oceanWorld,
  cavesWorld,
  factoryWorld,
  portalWorld,
  // ── BONUS WORLDS — unlocked after completing the final lesson ──
  jurassicWorld,
  parkingWorld,
  sortingWorld,
  debuggingWorld,
  orchestraWorld,
  coveWorld,
  ecoWorld,
]

export function getWorld(id: string): World | undefined {
  return WORLDS.find(w => w.id === id)
}
