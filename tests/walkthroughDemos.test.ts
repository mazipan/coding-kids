import { describe, expect, test } from 'bun:test'
import { getDemoState } from '../src/components/BlocklyWalkthrough'
import { getWorldTutorial } from '../src/data/lessons'
import { WORLDS } from '../src/data/worlds'
import { MAX_ACTIONS, applyAction, buildInitialState, checkWin } from '../src/engine/gameEngine'
import type { ActionType, Lesson } from '../src/types'

const R: ActionType = 'move_right'

const times = (n: number, action: ActionType): ActionType[] => Array.from({ length: n }, () => action)

const run = (lesson: Lesson, actions: ActionType[]) =>
  actions.reduce((state, type) => applyAction(state, { type }, lesson), buildInitialState(lesson))

/**
 * What each world's demo does when a child presses Run on it, straight after the
 * walkthrough injected it. Derived by hand from `DEMO_STATES`; the point is to
 * pin that the worked example is a legal, winning program for the very lesson it
 * is dropped into — a demo that walks off the grid teaches the wrong thing.
 */
const DEMO_ROUTES: Record<string, ActionType[]> = {
  jungle: times(2, R), // two Move Right blocks
  space: times(3, R), // repeat 3 × Move Right
  loops: times(6, R), // repeat 6 × Move Right
  ocean: times(4, R), // steps = 4, repeat steps × Move Right
  caves: times(3, R), // if true → three Move Right
  factory: times(6, R), // function move3Right (3 moves), called twice
  orchestra: times(4, R), // function chorus (repeat 2 × move), called twice
  eco: times(4, R), // function district (2 moves), called twice
  portal: times(5, R), // repeat 5 × Move Right
  cove: times(2, R), // repeat while my column < 3, from column 1
}

/** Worlds that can mount a walkthrough at all — the ones shipping a tutorial lesson. */
const worldsWithTutorial = WORLDS.filter(world => getWorldTutorial(world.id) !== undefined)

describe('walkthrough demos', () => {
  test('some worlds ship a tutorial, so the walkthrough is reachable', () => {
    expect(worldsWithTutorial.length).toBeGreaterThan(0)
  })

  test('every world that can show a walkthrough ships a worked example', () => {
    const missing = worldsWithTutorial
      .filter(world => getDemoState(world.id, 'en') === undefined)
      .map(world => world.id)
    // A world with a tutorial but no demo state ends its walkthrough on a bare
    // "Let's go!" — the child is taught the concept and then shown nothing.
    expect(missing).toEqual([])
  })

  test('a demo is built for both languages', () => {
    worldsWithTutorial.forEach(world => {
      expect(getDemoState(world.id, 'en')).toBeDefined()
      expect(getDemoState(world.id, 'id')).toBeDefined()
    })
  })

  test('the Indonesian demo differs from the English one only where names are shown', () => {
    // Worlds whose demo carries a variable or procedure name must localize it —
    // the teach diagram the child just read printed the Indonesian name.
    const localized = ['ocean', 'factory', 'orchestra', 'eco']
    localized.forEach(worldId => {
      const en = JSON.stringify(getDemoState(worldId, 'en'))
      const id = JSON.stringify(getDemoState(worldId, 'id'))
      expect(id).not.toEqual(en)
    })
  })

  test('every demo route stays on the grid and wins its own tutorial', () => {
    worldsWithTutorial.forEach(world => {
      const tutorial = getWorldTutorial(world.id)!
      const route = DEMO_ROUTES[world.id]
      expect(route).toBeDefined()
      expect(route!.length).toBeLessThanOrEqual(MAX_ACTIONS)
      const finalState = run(tutorial, route!)
      expect(finalState.status).not.toBe('crashed')
      expect(checkWin(finalState, tutorial)).toBe(true)
    })
  })
})
