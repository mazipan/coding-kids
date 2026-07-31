import { motion } from 'framer-motion'
import { XPBar } from './XPBar'
import type { PlayerProgress } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'

interface HeaderProps {
  progress: PlayerProgress
  onHome: () => void
  showBack?: boolean
}

export function Header({ progress, onHome, showBack = false }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-30 bg-[#0A0618]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo / Back */}
        <button onClick={onHome} className="flex items-center gap-2 group shrink-0">
          {showBack ? (
            <div className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-bold">
              <span className="text-lg">←</span>
              <span className="text-sm hidden sm:inline">{t('nav.back')}</span>
            </div>
          ) : (
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <span className="text-3xl">🚀</span>
              <div className="leading-tight hidden sm:block">
                <div className="font-black text-white text-lg">CodeKids</div>
                <div className="text-xs text-purple-300 font-semibold">Learn to Code!</div>
              </div>
            </motion.div>
          )}
        </button>

        {/* XP Bar */}
        <div className="flex-1 ml-2">
          <XPBar xp={progress.xp} compact />
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-400/30 px-2 sm:px-3 py-1.5 rounded-full shrink-0">
          <span className="text-yellow-300">⭐</span>
          <span className="font-bold text-yellow-200 text-sm">{progress.totalStars}</span>
        </div>

        {/* Language toggle */}
        <div className="flex rounded-xl overflow-hidden border border-purple-800/40 shrink-0">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1.5 text-xs font-bold transition-colors ${language === 'en' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-900/40'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('id')}
            className={`px-2.5 py-1.5 text-xs font-bold transition-colors ${language === 'id' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-900/40'}`}
          >
            ID
          </button>
        </div>
      </div>
    </header>
  )
}
