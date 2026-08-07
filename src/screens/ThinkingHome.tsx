import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Star, Check, Lock, ChevronRight, Play } from 'lucide-react'
import { THINKING_WORLDS } from '../data/thinkingWorlds'
import { getThinkingLessonsByWorld } from '../data/thinkingLessons'
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
          <p className="text-purple-300 text-sm">{localize(activeWorld.tagline, language)}</p>
          <div className="mt-3 text-xs text-purple-400">
            {t('common.completed').replace('{n}', String(completedCount)).replace('{total}', String(worldLessons.length))}
          </div>
        </motion.div>

        {allDone && (
          <motion.div
            className="bg-yellow-500/20 border border-yellow-400/30 rounded-2xl p-4 text-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-2xl mb-1">🏆</div>
            <p className="text-yellow-200 font-bold text-sm">{t('thinking.world.complete')}</p>
          </motion.div>
        )}

        <div className="space-y-3">
          {worldLessons.map((lesson, idx) => {
            const lp = getLessonProgress(lesson.id)
            const unlocked = isLessonUnlocked(lesson.id, lesson.worldId)
            const done = lp?.completed ?? false

            return (
              <motion.button
                key={lesson.id}
                onClick={() => unlocked && navigate(`/app/thinking/world/${selectedWorldId}/${lesson.number}`)}
                disabled={!unlocked}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                  !unlocked
                    ? 'bg-white/5 border-white/10 opacity-50 cursor-not-allowed'
                    : done
                    ? 'bg-green-900/30 border-green-500/30 hover:bg-green-800/40'
                    : 'bg-white/5 border-white/15 hover:bg-white/10 cursor-pointer'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={unlocked ? { scale: 1.01 } : {}}
                whileTap={unlocked ? { scale: 0.98 } : {}}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 ${
                  done ? 'bg-green-500/30 text-green-300' : unlocked ? 'bg-purple-500/30 text-purple-300' : 'bg-white/10 text-white/30'
                }`}>
                  {done
                    ? <Check className="w-5 h-5" />
                    : unlocked
                    ? String(idx + 1)
                    : <Lock className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm truncate">{localize(lesson.title, language)}</div>
                  <div className="text-xs text-purple-300 mt-0.5 capitalize">{activeWorld.concept[language]}</div>
                </div>
                {done && lp && (
                  <div className="flex items-center gap-0.5 shrink-0">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < lp.stars ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                )}
              </motion.button>
            )
          })}
        </div>

        {nextWorld && (
          <motion.button
            onClick={() => navigate(`/app/thinking/world/${nextWorld.id}`)}
            className={`mt-8 w-full flex items-center gap-4 p-5 rounded-2xl border bg-gradient-to-br ${nextWorld.bgGradient} border-white/20 hover:border-white/40 transition-all text-left`}
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

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {THINKING_WORLDS.map((world, idx) => {
          const unlocked = isWorldUnlocked(world.unlockAtXP)
          const lessons = getThinkingLessonsByWorld(world.id)
          const completedCount = lessons.filter(l => getLessonProgress(l.id)?.completed).length
          const totalStars = lessons.reduce((sum, l) => sum + (getLessonProgress(l.id)?.stars ?? 0), 0)

          return (
            <motion.button
              key={world.id}
              onClick={() => unlocked && navigate(`/app/thinking/world/${world.id}`)}
              disabled={!unlocked}
              className={`relative rounded-3xl p-6 text-center border transition-all ${
                !unlocked
                  ? 'bg-white/5 border-white/10 opacity-60 cursor-not-allowed'
                  : `bg-gradient-to-br ${world.bgGradient} border-white/20 hover:border-white/40 cursor-pointer`
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={unlocked ? { scale: 1.03 } : {}}
              whileTap={unlocked ? { scale: 0.97 } : {}}
            >
              <div className="text-5xl mb-3">{world.emoji}</div>
              <h2 className="font-black text-white text-lg mb-1">{localize(world.name, language)}</h2>
              <p className="text-white/60 text-xs mb-3">{localize(world.concept, language)}</p>
              <div className="text-xs text-white/50 mb-4">{t('common.ages')} {world.ageRange}</div>

              {unlocked ? (
                <div className="space-y-2">
                  <div className="text-xs text-white/60">
                    {t('common.completed').replace('{n}', String(completedCount)).replace('{total}', String(world.lessonCount))}
                  </div>
                  {completedCount > 0 && (
                    <div className="flex items-center justify-center gap-0.5">
                      {Array.from({ length: world.lessonCount * 3 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${i < totalStars ? 'bg-yellow-400' : 'bg-white/20'}`}
                        />
                      ))}
                    </div>
                  )}
                  <div className="mt-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5">
                    <Play className="w-3 h-3 fill-current" />
                    {completedCount > 0 ? t('common.play.again') : t('common.play')}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-white/40">
                  {t('common.to.unlock').replace('{xp}', String(world.unlockAtXP))}
                </div>
              )}
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
