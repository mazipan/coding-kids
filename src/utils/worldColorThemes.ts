export interface WorldColorTheme {
  bgGradient: string
  accentColor: string
  textColor: string
}

/**
 * Shared colour catalog for every puzzle-based path (thinking, safety). Adding a colour here
 * registers it everywhere at once — `ThinkingHome`, `SafetyHome`, and `LandingScreen` all read
 * from this single map, so there is no second copy to drift out of sync.
 */
const WORLD_COLOR_THEMES: Record<string, WorldColorTheme> = {
  purple:  { bgGradient: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #5b21b6 100%)', accentColor: '#c084fc', textColor: '#e9d5ff' },
  blue:    { bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1e3a8a 50%, #1d4ed8 100%)', accentColor: '#60a5fa', textColor: '#bfdbfe' },
  emerald: { bgGradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #047857 100%)', accentColor: '#34d399', textColor: '#a7f3d0' },
  rose:    { bgGradient: 'linear-gradient(135deg, #4c0519 0%, #9f1239 50%, #be123c 100%)', accentColor: '#fb7185', textColor: '#fecdd3' },
  green:   { bgGradient: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)', accentColor: '#4ade80', textColor: '#bbf7d0' },
  indigo:  { bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)', accentColor: '#818cf8', textColor: '#c7d2fe' },
  orange:  { bgGradient: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #c2410c 100%)', accentColor: '#fb923c', textColor: '#fed7aa' },
  teal:    { bgGradient: 'linear-gradient(135deg, #042f2e 0%, #0f766e 50%, #0d9488 100%)', accentColor: '#2dd4bf', textColor: '#99f6e4' },
  amber:   { bgGradient: 'linear-gradient(135deg, #451a03 0%, #92400e 50%, #b45309 100%)', accentColor: '#fbbf24', textColor: '#fde68a' },
  cyan:    { bgGradient: 'linear-gradient(135deg, #083344 0%, #155e75 50%, #0e7490 100%)', accentColor: '#22d3ee', textColor: '#a5f3fc' },
  violet:  { bgGradient: 'linear-gradient(135deg, #2e1065 0%, #5b21b6 50%, #6d28d9 100%)', accentColor: '#a78bfa', textColor: '#ddd6fe' },
  sky:     { bgGradient: 'linear-gradient(135deg, #082f49 0%, #075985 50%, #0369a1 100%)', accentColor: '#38bdf8', textColor: '#bae6fd' },
  lime:    { bgGradient: 'linear-gradient(135deg, #1a2e05 0%, #3f6212 50%, #4d7c0f 100%)', accentColor: '#a3e635', textColor: '#d9f99d' },
  fuchsia: { bgGradient: 'linear-gradient(135deg, #4a044e 0%, #86198f 50%, #a21caf 100%)', accentColor: '#e879f9', textColor: '#f5d0fe' },
  yellow:  { bgGradient: 'linear-gradient(135deg, #422006 0%, #854d0e 50%, #a16207 100%)', accentColor: '#facc15', textColor: '#fef08a' },
  slate:   { bgGradient: 'linear-gradient(135deg, #0f172a 0%, #334155 50%, #475569 100%)', accentColor: '#94a3b8', textColor: '#e2e8f0' },
  pink:    { bgGradient: 'linear-gradient(135deg, #500724 0%, #9d174d 50%, #be185d 100%)', accentColor: '#f472b6', textColor: '#fbcfe8' },
  red:     { bgGradient: 'linear-gradient(135deg, #450a0a 0%, #991b1b 50%, #b91c1c 100%)', accentColor: '#f87171', textColor: '#fecaca' },
}

export function getWorldTheme(color: string): WorldColorTheme {
  return WORLD_COLOR_THEMES[color] ?? WORLD_COLOR_THEMES.purple
}
