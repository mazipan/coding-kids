import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Check, Play, Lock } from 'lucide-react'
import { WORLDS } from '../data/worlds'
import { getLessonsByWorld, getWorldTutorial } from '../data/lessons'
import { StarRating } from '../components/StarRating'
import type { WorldId } from '../types'
import { maxStarsForThresholds } from '../data/xpSystem'
import { useProgress } from '../store/useProgress'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'

interface HomeScreenProps {
  progress: ReturnType<typeof useProgress>['progress']
  isWorldUnlocked: (xp: number) => boolean
  isBonusWorldUnlocked: () => boolean
  getLessonProgress: ReturnType<typeof useProgress>['getLessonProgress']
  isLessonUnlocked: ReturnType<typeof useProgress>['isLessonUnlocked']
  selectedWorldId?: WorldId
}

export function HomeScreen({ progress, isWorldUnlocked, isBonusWorldUnlocked, getLessonProgress, isLessonUnlocked, selectedWorldId }: HomeScreenProps) {
  const { t, language } = useLanguage()
  const navigate = useNavigate()

  const activeWorld = selectedWorldId ? WORLDS.find(w => w.id === selectedWorldId) : null
  const worldLessons = selectedWorldId ? getLessonsByWorld(selectedWorldId) : []
  const worldTutorial = selectedWorldId ? getWorldTutorial(selectedWorldId) : undefined
  const tutorialDone = worldTutorial ? (getLessonProgress(worldTutorial.id)?.completed ?? false) : true
  const mainWorlds = WORLDS.filter(w => !w.isBonus)
  const allLessonsComplete = worldLessons.length > 0 && worldLessons.every(l => getLessonProgress(l.id)?.completed)
  const currentWorldIdx = activeWorld && !activeWorld.isBonus ? mainWorlds.findIndex(w => w.id === activeWorld.id) : -1
  const nextMainWorld = currentWorldIdx >= 0 ? (mainWorlds[currentWorldIdx + 1] ?? null) : null
  const bonusWorlds = WORLDS.filter(w => w.isBonus)
  const bonusUnlocked = isBonusWorldUnlocked()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {!selectedWorldId && (
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-7xl sm:text-8xl mb-4 block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🚀
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight">
            {t('home.welcome').split('CodeKids').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    CodeKids
                  </span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 font-semibold">
            {t('home.subtitle')}
          </p>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {!selectedWorldId ? (
          <motion.div
            key="world-map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {mainWorlds.map((world, index) => {
                const unlocked = isWorldUnlocked(world.unlockAtXP)
                const lessons = getLessonsByWorld(world.id)
                const completedCount = lessons.filter(l => getLessonProgress(l.id)?.completed).length
                const worldStars = lessons.reduce((sum, l) => sum + (getLessonProgress(l.id)?.stars ?? 0), 0)
                const maxStars = lessons.reduce((sum, l) => sum + maxStarsForThresholds(l.starThresholds), 0)

                return (
                  <motion.button
                    key={world.id}
                    onClick={() => unlocked && navigate(`/app/blocks/world/${world.id}`)}
                    className={`relative rounded-3xl overflow-hidden text-left transition-all ${
                      unlocked ? 'cursor-pointer hover:scale-105' : 'cursor-not-allowed opacity-60'
                    }`}
                    style={{
                      background: world.theme.bgGradient,
                      boxShadow: unlocked ? `0 8px 32px ${world.theme.accentColor}40` : 'none',
                      border: `1px solid ${world.theme.cellBorder}`,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={unlocked ? { y: -4 } : {}}
                  >
                    {!unlocked && (
                      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-2">
                        <span className="text-4xl">🔒</span>
                        <span className="text-white/80 font-bold text-sm">
                          {t('common.need.xp', { xp: world.unlockAtXP })}
                        </span>
                        <div className="text-white/50 text-xs">
                          {t('common.to.unlock', { xp: world.unlockAtXP - progress.xp })}
                        </div>
                      </div>
                    )}

                    {unlocked && (
                      <div
                        className="absolute -inset-1 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${world.theme.accentColor}20, transparent 70%)` }}
                      />
                    )}

                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between mb-3">
                        <motion.span
                          className="text-4xl sm:text-5xl"
                          animate={{ rotate: unlocked ? [0, 5, -5, 0] : 0 }}
                          transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {world.emoji}
                        </motion.span>
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-full"
                          style={{ background: `${world.theme.accentColor}30`, color: world.theme.accentColor }}
                        >
                          {t('common.ages')} {world.ageRange}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-white mb-1">{localize(world.name, language)}</h3>
                      <p className="text-sm font-semibold mb-1" style={{ color: world.theme.textColor }}>
                        {localize(world.tagline, language)}
                      </p>
                      <p className="text-xs mb-4 opacity-60" style={{ color: world.theme.textColor }}>
                        {t('common.learn')} <strong>{localize(world.concept, language)}</strong>
                      </p>

                      {unlocked && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs" style={{ color: world.theme.textColor }}>
                            <span>
                              {t('common.completed', { n: completedCount, total: lessons.length })}
                            </span>
                            <span>⭐ {worldStars}/{maxStars}</span>
                          </div>
                          <div className="h-2 rounded-full bg-black/30 overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: world.theme.accentColor }}
                              initial={{ width: 0 }}
                              animate={{ width: `${lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0}%` }}
                              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* ── Bonus Worlds Section ── */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10">
                  <motion.span
                    className="text-xl"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    🌟
                  </motion.span>
                  <span className="text-yellow-300 font-black text-sm tracking-wider uppercase">
                    {t('bonus.section.title')}
                  </span>
                  <motion.span
                    className="text-xl"
                    animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  >
                    🌟
                  </motion.span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
              </div>

              <p className="text-center text-yellow-200/60 text-sm font-semibold mb-2">
                {t('bonus.section.subtitle')}
              </p>
              {!bonusUnlocked && (
                <p className="text-center text-white/40 text-xs mb-6">
                  {t('bonus.locked.hint')}
                </p>
              )}
              {bonusUnlocked && (
                <p className="text-center text-yellow-300/80 text-xs font-bold mb-6">
                  ✨ {t('bonus.unlocked.all')} ✨
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {bonusWorlds.map((world, index) => {
                  const lessons = getLessonsByWorld(world.id)
                  const completedCount = lessons.filter(l => getLessonProgress(l.id)?.completed).length
                  const worldStars = lessons.reduce((sum, l) => sum + (getLessonProgress(l.id)?.stars ?? 0), 0)
                  const maxStars = lessons.reduce((sum, l) => sum + maxStarsForThresholds(l.starThresholds), 0)

                  return (
                    <motion.button
                      key={world.id}
                      onClick={() => bonusUnlocked && navigate(`/app/blocks/world/${world.id}`)}
                      className={`relative rounded-3xl overflow-hidden text-left transition-all ${
                        bonusUnlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                      }`}
                      style={{
                        background: world.theme.bgGradient,
                        boxShadow: bonusUnlocked
                          ? `0 8px 32px ${world.theme.accentColor}40, 0 0 0 1px rgba(234,179,8,0.3)`
                          : 'none',
                        border: `1px solid ${bonusUnlocked ? 'rgba(234,179,8,0.4)' : world.theme.cellBorder}`,
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.12 }}
                      whileHover={bonusUnlocked ? { y: -4, scale: 1.02 } : {}}
                    >
                      {/* Golden BONUS badge */}
                      <div
                        className="absolute top-3 right-3 z-20 px-2 py-0.5 rounded-full text-xs font-black"
                        style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)', color: '#1a0a00' }}
                      >
                        BONUS
                      </div>

                      {!bonusUnlocked && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10 flex flex-col items-center justify-center gap-2 px-4 text-center">
                          <span className="text-4xl">🔒</span>
                          <span className="text-white/70 font-bold text-xs leading-relaxed">
                            {t('bonus.locked.hint')}
                          </span>
                        </div>
                      )}

                      {bonusUnlocked && (
                        <div
                          className="absolute -inset-1 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          style={{ background: `radial-gradient(circle, ${world.theme.accentColor}25, transparent 70%)` }}
                        />
                      )}

                      <div className="p-5 sm:p-6">
                        <div className="flex items-start justify-between mb-3">
                          <motion.span
                            className="text-4xl sm:text-5xl"
                            animate={{ rotate: bonusUnlocked ? [0, 8, -8, 0] : 0 }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }}
                          >
                            {world.emoji}
                          </motion.span>
                          <span
                            className="text-xs font-bold px-2 py-1 rounded-full mt-6"
                            style={{ background: `${world.theme.accentColor}30`, color: world.theme.accentColor }}
                          >
                            {t('common.ages')} {world.ageRange}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-white mb-1">{localize(world.name, language)}</h3>
                        <p className="text-sm font-semibold mb-1" style={{ color: world.theme.textColor }}>
                          {localize(world.tagline, language)}
                        </p>
                        <p className="text-xs mb-4 opacity-60" style={{ color: world.theme.textColor }}>
                          {t('common.learn')} <strong>{localize(world.concept, language)}</strong>
                        </p>

                        {bonusUnlocked && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs" style={{ color: world.theme.textColor }}>
                              <span>
                                {t('common.completed', { n: completedCount, total: lessons.length })}
                              </span>
                              <span>⭐ {worldStars}/{maxStars}</span>
                            </div>
                            <div className="h-2 rounded-full bg-black/30 overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{ background: `linear-gradient(90deg, ${world.theme.accentColor}, #f59e0b)` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${lessons.length > 0 ? (completedCount / lessons.length) * 100 : 0}%` }}
                                transition={{ duration: 0.8, delay: 0.8 + index * 0.12 + 0.3 }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="lesson-list"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            {activeWorld && (
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl sm:text-4xl">{activeWorld.emoji}</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl font-black text-white truncate">{localize(activeWorld.name, language)}</h2>
                  <p className="text-purple-300 text-sm font-semibold truncate">
                    {t('common.learn')} {localize(activeWorld.concept, language)}
                  </p>
                </div>
                {activeWorld.isBonus && (
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-black"
                      style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)', color: '#1a0a00' }}
                    >
                      BONUS
                    </span>
                    <span className="text-yellow-400/80 text-xs font-semibold">
                      {t('bonus.all.open')}
                    </span>
                  </div>
                )}
              </div>
            )}

            {allLessonsComplete && nextMainWorld && (
              <motion.div
                className="mb-6 rounded-2xl p-5 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(20,184,166,0.15))',
                  border: '1px solid rgba(52,211,153,0.4)',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-2xl mb-1">🎉</div>
                <p className="text-emerald-200 font-black text-base mb-3">{t('reward.world.complete')}</p>
                <motion.button
                  onClick={() => navigate(`/app/blocks/world/${nextMainWorld.id}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-white text-sm bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-900/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {nextMainWorld.emoji} {t('reward.next.world')}: {localize(nextMainWorld.name, language)}
                </motion.button>
              </motion.div>
            )}

            {/* Tutorial card — always accessible, checkmark when done */}
            {worldTutorial && (
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                  <motion.button
                    onClick={() => navigate(`/app/blocks/world/${selectedWorldId}/0`)}
                    className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 text-left relative overflow-hidden"
                    style={{
                      background: tutorialDone
                        ? `${activeWorld?.theme.accentColor}12`
                        : `linear-gradient(135deg, ${activeWorld?.theme.accentColor}25, ${activeWorld?.theme.accentColor}10)`,
                      border: `2px solid ${tutorialDone ? (activeWorld?.theme.accentColor + '40') : (activeWorld?.theme.accentColor + '80')}`,
                      boxShadow: tutorialDone ? 'none' : `0 0 24px ${activeWorld?.theme.accentColor}30`,
                    }}
                    whileHover={{ scale: 1.01, y: -2 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Animated glow ring — only when not done */}
                    {!tutorialDone && (
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{ border: `2px solid ${activeWorld?.theme.accentColor}` }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    <motion.span
                      className="text-4xl shrink-0"
                      animate={tutorialDone ? {} : { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {activeWorld?.character}
                    </motion.span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {tutorialDone ? (
                          <span className="inline-flex items-center gap-1 text-xs font-black" style={{ color: activeWorld?.theme.accentColor }}>
                            <Check className="w-3.5 h-3.5" />
                            {t('tutorial.card.done')}
                          </span>
                        ) : (
                          <span
                            className="text-xs font-black px-2 py-0.5 rounded-full"
                            style={{ background: activeWorld?.theme.accentColor, color: '#0a0618' }}
                          >
                            {t('tutorial.badge')}
                          </span>
                        )}
                        <span className={`font-black text-sm ${tutorialDone ? 'text-white/50' : 'text-white'}`}>
                          {t('tutorial.card.label')}
                        </span>
                      </div>
                      <p className="text-white/60 text-xs leading-snug">
                        {t('tutorial.card.desc', { concept: activeWorld ? (language === 'id' ? activeWorld.concept.id : activeWorld.concept.en) : '' })}
                      </p>
                    </div>
                    <span
                      className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-black text-sm"
                      style={{
                        background: tutorialDone ? `${activeWorld?.theme.accentColor}30` : activeWorld?.theme.accentColor,
                        color: tutorialDone ? activeWorld?.theme.accentColor : '#0a0618',
                      }}
                    >
                      <Play className="w-3 h-3 fill-current" />
                      {tutorialDone ? (language === 'id' ? 'Tinjau' : 'Review') : t('tutorial.card.cta')}
                    </span>
                  </motion.button>
              </motion.div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {worldLessons.map((lesson, index) => {
                const lp = getLessonProgress(lesson.id)
                const unlocked = isLessonUnlocked(lesson.id, selectedWorldId!)
                const completed = lp?.completed ?? false
                const stars = lp?.stars ?? 0

                return (
                  <motion.button
                    key={lesson.id}
                    onClick={() => unlocked && navigate(`/app/blocks/world/${selectedWorldId}/${lesson.number}`)}
                    className={`relative text-left rounded-2xl p-4 sm:p-5 border transition-all ${
                      unlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                    }`}
                    style={{
                      background: completed
                        ? `linear-gradient(135deg, ${activeWorld?.theme.accentColor}20, ${activeWorld?.theme.accentColor}10)`
                        : '#1C1440',
                      border: `1px solid ${completed ? (activeWorld?.theme.accentColor ?? '') + '60' : 'rgba(139,92,246,0.2)'}`,
                      boxShadow: completed ? `0 4px 20px ${activeWorld?.theme.accentColor}20` : 'none',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
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
                          background: completed ? `${activeWorld?.theme.accentColor}40` : 'rgba(255,255,255,0.08)',
                          color: completed ? activeWorld?.theme.accentColor : 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {completed ? <Check className="w-5 h-5" /> : index + 1}
                      </div>

                      {unlocked && (
                        <span
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-black"
                          style={{
                            background: completed
                              ? `${activeWorld?.theme.accentColor}40`
                              : 'linear-gradient(135deg, #7C3AED, #EC4899)',
                            color: completed ? activeWorld?.theme.accentColor : 'white',
                          }}
                        >
                          {completed ? t('common.play.again') : t('common.play')}
                        </span>
                      )}
                    </div>

                    <h3 className="font-black text-white text-sm sm:text-base mb-1">{localize(lesson.title, language)}</h3>
                    <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{localize(lesson.story, language)}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-bold" style={{ color: activeWorld?.theme.accentColor }}>
                        {t('common.xp.reward', { xp: lesson.xpReward })}
                      </span>
                      <div className="flex items-center gap-2">
                        {stars > 0 && <StarRating stars={stars} maxStars={maxStarsForThresholds(lesson.starThresholds)} size="sm" />}
                        {lp?.attempts && (
                          <span className="text-xs text-white/30">
                            {lp.attempts} {t('common.tries')}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
