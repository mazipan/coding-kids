import { motion } from 'framer-motion'
import { XPBar } from './XPBar'
import type { PlayerProgress } from '../types'

interface HeaderProps {
  progress: PlayerProgress
  onHome: () => void
  showBack?: boolean
}

export function Header({ progress, onHome, showBack = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#0A0618]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Logo / Back */}
        <button
          onClick={onHome}
          className="flex items-center gap-2 group"
        >
          {showBack ? (
            <div className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-bold">
              <span className="text-lg">←</span>
              <span className="text-sm">Back</span>
            </div>
          ) : (
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">🚀</span>
              <div className="leading-tight">
                <div className="font-black text-white text-lg">CodeKids</div>
                <div className="text-xs text-purple-300 font-semibold">Learn to Code!</div>
              </div>
            </motion.div>
          )}
        </button>

        {/* XP Bar */}
        <div className="ml-auto flex items-center">
          <XPBar xp={progress.xp} compact />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-400/30 px-3 py-1.5 rounded-full">
          <span className="text-yellow-300">⭐</span>
          <span className="font-bold text-yellow-200 text-sm">{progress.totalStars}</span>
        </div>
      </div>
    </header>
  )
}
