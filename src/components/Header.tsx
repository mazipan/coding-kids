import { motion } from 'framer-motion'
import { ArrowLeft, Star } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { XPBar } from './XPBar'
import { Logo } from './Logo'
import { StatsModal } from './StatsModal'
import type { PlayerProgress } from '../types'
import { getAllStats, type PathId } from '../utils/progressStats'
import { useLanguage } from '../i18n/LanguageProvider'

interface HeaderProps {
  progress: PlayerProgress
}

export function Header({ progress }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const [statsOpen, setStatsOpen] = useState(false)

  const pathParts = location.pathname.split('/').filter(Boolean)
  // pathParts: ['app', 'blocks'|'thinking'|'safety'] | [..., 'world', worldId] | [..., 'world', worldId, lessonNum]
  const subPath = pathParts.length >= 2 ? pathParts[1] : null
  const isInSubPath = subPath === 'blocks' || subPath === 'thinking' || subPath === 'safety'
  const isSubHome = isInSubPath && pathParts.length === 2
  const isWorldPage = isInSubPath && pathParts.length === 4 && pathParts[2] === 'world'
  const isLessonPage = isInSubPath && pathParts.length >= 5 && pathParts[2] === 'world'
  const showBack = isSubHome || isWorldPage || isLessonPage

  // Each path scores stars its own way, so the pill counts only the path the player is in.
  // On the hub (/app), where no path is active, it falls back to the combined total.
  const currentPath: PathId | null = isInSubPath ? (subPath as PathId) : null
  const stats = getAllStats(progress)
  const pathStats = currentPath === 'blocks' ? stats.blocks : currentPath === 'thinking' ? stats.thinking : currentPath === 'safety' ? stats.safety : null
  const shownStars = pathStats ? pathStats.stars : stats.stars
  // On the hub the modal opens on whichever path the player has invested in most.
  const allPaths: PathId[] = ['blocks', 'thinking', 'safety']
  const defaultStatsPath: PathId = allPaths.reduce((best, path) =>
    stats[path].stars > stats[best].stars ? path : best
  )

  const handleClick = () => {
    if (isLessonPage) {
      navigate(`/app/${subPath}/world/${pathParts[3]}`)
    } else if (isWorldPage) {
      navigate(`/app/${subPath}`)
    } else if (isSubHome) {
      navigate('/app')
    } else {
      navigate('/')
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
              <span className="text-sm hidden sm:inline">
                {subPath === 'thinking' ? t('path.thinking.name') : subPath === 'safety' ? t('path.safety.name') : t('path.blocks.name')}
              </span>
            </div>
          ) : (
            <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Logo size={32} className="shrink-0" />
              <div className="leading-tight hidden sm:block">
                <div className="font-black text-white text-lg">CodeKids</div>
                <div className="text-xs text-purple-300 font-semibold">{t('landing.nav.tagline')}</div>
              </div>
            </motion.div>
          )}
        </button>

        {/* XP Bar */}
        <div className="flex-1 ml-2">
          <XPBar xp={progress.xp} compact hideLabel={subPath === 'thinking' || subPath === 'safety'} />
        </div>

        {/* Stars — opens the achievement summary */}
        <button
          onClick={() => setStatsOpen(true)}
          aria-label={t('stats.open')}
          title={t('stats.open')}
          className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-400/30 hover:bg-yellow-500/30 hover:border-yellow-400/50 transition-colors px-2 sm:px-3 py-1.5 rounded-full shrink-0 cursor-pointer"
        >
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 shrink-0" />
          <span className="font-bold text-yellow-200 text-sm">{shownStars}</span>
        </button>

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

      {statsOpen && (
        <StatsModal
          progress={progress}
          initialPath={currentPath ?? defaultStatsPath}
          currentPath={currentPath}
          onClose={() => setStatsOpen(false)}
        />
      )}
    </header>
  )
}
