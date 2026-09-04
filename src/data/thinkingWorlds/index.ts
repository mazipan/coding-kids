import type { ThinkingWorld } from '../../types'
import { abstractionWorld } from './abstraction'
import { countingWorld } from './counting'
import { decompositionWorld } from './decomposition'
import { deductionWorld } from './deduction'
import { inductionWorld } from './induction'
import { logicWorld } from './logic'
import { mathReasoningWorld } from './mathReasoning'
import { memoryWorld } from './memory'
import { moneyWorld } from './money'
import { natureWorld } from './nature'
import { numbersWorld } from './numbers'
import { patternsWorld } from './patterns'
import { planningWorld } from './planning'
import { probabilityWorld } from './probability'
import { spatialWorld } from './spatial'

export const THINKING_WORLDS: ThinkingWorld[] = [
  patternsWorld,
  logicWorld,
  countingWorld,
  memoryWorld,
  natureWorld,
  numbersWorld,
  decompositionWorld,
  abstractionWorld,
  mathReasoningWorld,
  inductionWorld,
  deductionWorld,
  planningWorld,
  probabilityWorld,
  spatialWorld,
  moneyWorld,
]

export function getThinkingWorld(id: string): ThinkingWorld | undefined {
  return THINKING_WORLDS.find(w => w.id === id)
}
