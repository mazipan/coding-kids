import { motion } from 'framer-motion'
import { ArrowLeft, Star } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import { XPBar } from './XPBar'
import type { PlayerProgress } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'

interface HeaderProps {
  progress: PlayerProgress
}

export function Header({ progress }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  const pathParts = location.pathname.split('/').filter(Boolean)
  // world detail: /app/world/:worldId → 3 parts
  const isWorldPage = pathParts.length === 3 && pathParts[1] === 'world'
  // lesson page: /app/world/:worldId/:lessonNumber → 4 parts
  const isLessonPage = pathParts.length >= 4 && pathParts[1] === 'world'
  const showBack = isWorldPage || isLessonPage

  const handleClick = () => {
    if (isLessonPage) {
      navigate(`/app/world/${pathParts[2]}`)
    } else if (isWorldPage) {
      navigate('/app')
    } else {
      navigate('/app')
    }
  }

  return (
    <header className="sticky top-0 z-30 bg-[#0A0618]/80 backdrop-blur-md border-b border-purple-900/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
        {/* Logo / Back */}
        <button onClick={handleClick} className="flex items-center gap-2 group shrink-0">
          {showBack ? (
            <div className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-bold">
              <ArrowLeft className="w-5 h-5 shrink-0" />
              <span className="text-sm hidden sm:inline">{t('nav.back')}</span>
            </div>
          ) : (
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <svg viewBox="0 0 40 40" className="w-8 h-8 shrink-0" aria-hidden="true">
                <defs>
                  <linearGradient id="hg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7C3AED" /><stop offset="1" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="9" fill="url(#hg)" />
                <path d="M14 13L8.5 20L14 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26 13L31.5 20L26 27" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 12L17 28" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" />
              </svg>
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
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 shrink-0" />
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
