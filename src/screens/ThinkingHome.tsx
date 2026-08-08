import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Check, Lock, ChevronRight, Play } from 'lucide-react'
import { THINKING_WORLDS } from '../data/thinkingWorlds'
import { getThinkingLessonsByWorld } from '../data/thinkingLessons'
import { StarRating } from '../components/StarRating'
import type { ThinkingWorldId, LessonProgress, PlayerProgress } from '../types'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'
import { useProgress } from '../store/useProgress'

interface ThinkingHomeProps {
  progress: PlayerProgress
  getLessonProgress: (id: string) => LessonProgress | undefined
  isWorldUnlocked: (xp: number) => boolean
  isLessonUnlocked: (lessonId: string, worldId: string) => boolean
  selectedWorldId?: ThinkingWorldId
}

function getWorldTheme(color: string) {
  const themes: Record<string, { bgGradient: string; accentColor: string; textColor: string }> = {
    purple:  { bgGradient: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 50%, #5b21b6 100%)', accentColor: '#c084fc', textColor: '#e9d5ff' },
    blue:    { bgGradient: 'linear-gradient(135deg, #0c1445 0%, #1e3a8a 50%, #1d4ed8 100%)', accentColor: '#60a5fa', textColor: '#bfdbfe' },
    emerald: { bgGradient: 'linear-gradient(135deg, #052e16 0%, #065f46 50%, #047857 100%)', accentColor: '#34d399', textColor: '#a7f3d0' },
    rose:    { bgGradient: 'linear-gradient(135deg, #4c0519 0%, #9f1239 50%, #be123c 100%)', accentColor: '#fb7185', textColor: '#fecdd3' },
    green:   { bgGradient: 'linear-gradient(135deg, #052e16 0%, #14532d 50%, #166534 100%)', accentColor: '#4ade80', textColor: '#bbf7d0' },
    indigo:  { bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #3730a3 100%)', accentColor: '#818cf8', textColor: '#c7d2fe' },
    orange:  { bgGradient: 'linear-gradient(135deg, #431407 0%, #9a3412 50%, #c2410c 100%)', accentColor: '#fb923c', textColor: '#fed7aa' },
    teal:    { bgGradient: 'linear-gradient(135deg, #042f2e 0%, #0f766e 50%, #0d9488 100%)', accentColor: '#2dd4bf', textColor: '#99f6e4' },
  }
  return themes[color] ?? themes.purple
}

export function ThinkingHome({
  progress,
  getLessonProgress,
  isWorldUnlocked,
  isLessonUnlocked,
  selectedWorldId,
}: ThinkingHomeProps) {
  const { t, language } = useLanguage()
  const navigate = useNavigate()

  const activeWorld = selectedWorldId ? THINKING_WORLDS.find(w => w.id === selectedWorldId) : null
  const worldLessons = selectedWorldId ? getThinkingLessonsByWorld(selectedWorldId) : []

  if (activeWorld && selectedWorldId) {
    const theme = getWorldTheme(activeWorld.color)
    const completedCount = worldLessons.filter(l => getLessonProgress(l.id)?.completed).length
    const allDone = completedCount === worldLessons.length
    const currentWorldIdx = THINKING_WORLDS.findIndex(w => w.id === selectedWorldId)
    const nextWorld = THINKING_WORLDS[currentWorldIdx + 1] ?? null

    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="text-6xl mb-3">{activeWorld.emoji}</div>
          <h1 className="text-2xl font-black text-white mb-1">
            {localize(activeWorld.name, language)}
          </h1>
          <p className="text-sm mb-2" style={{ color: theme.textColor }}>{localize(activeWorld.tagline, language)}</p>
          <div className="mt-3 text-xs" style={{ color: theme.accentColor }}>
            {t('common.completed').replace('{n}', String(completedCount)).replace('{total}', String(worldLessons.length))}
          </div>
        </motion.div>

        {allDone && (
          <motion.div
            className="rounded-2xl p-4 text-center mb-6"
            style={{
              background: `${theme.accentColor}20`,
              border: `1px solid ${theme.accentColor}50`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-2xl mb-1">🏆</div>
            <p className="font-bold text-sm" style={{ color: theme.textColor }}>{t('thinking.world.complete')}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {worldLessons.map((lesson, idx) => {
            const lp = getLessonProgress(lesson.id)
            const unlocked = isLessonUnlocked(lesson.id, lesson.worldId)
            const done = lp?.completed ?? false
            const stars = lp?.stars ?? 0

            return (
              <motion.button
                key={lesson.id}
                onClick={() => unlocked && navigate(`/app/thinking/world/${selectedWorldId}/${lesson.number}`)}
                disabled={!unlocked}
                className={`relative text-left rounded-2xl p-4 border transition-all ${
                  unlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                }`}
                style={{
                  background: done
                    ? `linear-gradient(135deg, ${theme.accentColor}20, ${theme.accentColor}10)`
                    : '#1C1440',
                  border: `1px solid ${done ? theme.accentColor + '60' : 'rgba(139,92,246,0.2)'}`,
                  boxShadow: done ? `0 4px 20px ${theme.accentColor}20` : 'none',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={unlocked ? { scale: 1.02, y: -2 } : {}}
                whileTap={unlocked ? { scale: 0.98 } : {}}
              >
                {!unlocked && (
                  <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center z-10">
                    <Lock className="w-7 h-7 text-white/50" />
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg"
                    style={{
                      background: done ? `${theme.accentColor}40` : 'rgba(255,255,255,0.08)',
                      color: done ? theme.accentColor : 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {done ? <Check className="w-5 h-5" /> : idx + 1}
                  </div>

                  {unlocked && (
                    <span
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-black"
                      style={{
                        background: done
                          ? `${theme.accentColor}40`
                          : 'linear-gradient(135deg, #7C3AED, #EC4899)',
                        color: done ? theme.accentColor : 'white',
                      }}
                    >
                      <Play className="w-3 h-3 fill-current mr-1" />
                      {done ? t('common.play.again') : t('common.play')}
                    </span>
                  )}
                </div>

                <h3 className="font-black text-white text-sm mb-1">{localize(lesson.title, language)}</h3>
                <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{localize(lesson.mascotMessage, language)}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-bold" style={{ color: theme.accentColor }}>
                    {t('common.xp.reward', { xp: lesson.xpReward })}
                  </span>
                  {stars > 0 && <StarRating stars={stars} maxStars={3} size="sm" />}
                </div>
              </motion.button>
            )
          })}
        </div>

        {nextWorld && (
          <motion.button
            onClick={() => navigate(`/app/thinking/world/${nextWorld.id}`)}
            className="mt-8 w-full flex items-center gap-4 p-5 rounded-2xl border hover:border-white/40 transition-all text-left"
            style={{
              background: getWorldTheme(nextWorld.color).bgGradient,
              border: '1px solid rgba(255,255,255,0.2)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-4xl shrink-0">{nextWorld.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-white/50 mb-0.5">{t('thinking.next.world')}</div>
              <div className="font-black text-white text-lg leading-tight">{localize(nextWorld.name, language)}</div>
              <div className="text-white/60 text-xs mt-0.5">{localize(nextWorld.concept, language)}</div>
            </div>
            <ChevronRight className="w-6 h-6 text-white/40 shrink-0" />
          </motion.button>
        )}
      </div>
    )
  }

  // World map view
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="text-7xl sm:text-8xl mb-4 block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          🧠
        </motion.div>
        <h1 className="text-3xl font-black text-white mb-2">{t('thinking.title')}</h1>
        <p className="text-purple-300">{t('thinking.sub')}</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {THINKING_WORLDS.map((world, idx) => {
          const unlocked = isWorldUnlocked(world.unlockAtXP)
          const theme = getWorldTheme(world.color)
          const lessons = getThinkingLessonsByWorld(world.id)
          const completedCount = lessons.filter(l => getLessonProgress(l.id)?.completed).length

          return (
            <motion.button
              key={world.id}
              onClick={() => unlocked && navigate(`/app/thinking/world/${world.id}`)}
              disabled={!unlocked}
              className={`relative rounded-3xl overflow-hidden text-left transition-all ${
                unlocked ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-60'
              }`}
              style={{
                background: theme.bgGradient,
                boxShadow: unlocked ? `0 8px 32px ${theme.accentColor}40` : 'none',
                border: `1px solid ${theme.accentColor}50`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={unlocked ? { y: -4 } : {}}
            >
              {!unlocked && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-2">
                  <span className="text-4xl">🔒</span>
                  <span className="text-white/80 font-bold text-sm">
                    {t('common.need.xp', { xp: world.unlockAtXP })}
                  </span>
                </div>
              )}

              {unlocked && (
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${theme.accentColor}20, transparent 70%)` }}
                />
              )}

              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <motion.span
                    className="text-4xl sm:text-5xl"
                    animate={{ rotate: unlocked ? [0, 5, -5, 0] : 0 }}
                    transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    {world.emoji}
                  </motion.span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: `${theme.accentColor}30`, color: theme.accentColor }}
                  >
                    {t('common.ages')} {world.ageRange}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-1">{localize(world.name, language)}</h3>
                <p className="text-sm font-semibold mb-1" style={{ color: theme.textColor }}>
                  {localize(world.tagline, language)}
                </p>
                <p className="text-xs mb-4 opacity-60" style={{ color: theme.textColor }}>
                  {t('common.learn')} <strong>{localize(world.concept, language)}</strong>
                </p>

                {unlocked && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs" style={{ color: theme.textColor }}>
                      <span>
                        {t('common.completed', { n: completedCount, total: world.lessonCount })}
                      </span>
                      <span style={{ color: theme.accentColor }}>{completedCount}/{world.lessonCount}</span>
                    </div>
                    <div className="h-2 rounded-full bg-black/30 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: theme.accentColor }}
                        initial={{ width: 0 }}
                        animate={{ width: `${world.lessonCount > 0 ? (completedCount / world.lessonCount) * 100 : 0}%` }}
                        transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

// Route wrapper that pulls progress from store
export function ThinkingHomeWithProgress({ selectedWorldId }: { selectedWorldId?: ThinkingWorldId }) {
  const { progress, getLessonProgress, isWorldUnlocked, isLessonUnlocked } = useProgress()
  return (
    <ThinkingHome
      progress={progress}
      getLessonProgress={getLessonProgress}
      isWorldUnlocked={isWorldUnlocked}
      isLessonUnlocked={isLessonUnlocked}
      selectedWorldId={selectedWorldId}
    />
  )
}
