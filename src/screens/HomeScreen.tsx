import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WORLDS } from '../data/worlds'
import { getLessonsByWorld } from '../data/lessons'
import { StarRating } from '../components/StarRating'
import type { WorldId, AppState } from '../types'
import { useProgress } from '../store/useProgress'
import { useLanguage } from '../i18n/LanguageProvider'

interface HomeScreenProps {
  progress: ReturnType<typeof useProgress>['progress']
  onNavigate: (state: Partial<AppState>) => void
  isWorldUnlocked: (xp: number) => boolean
  getLessonProgress: ReturnType<typeof useProgress>['getLessonProgress']
  isLessonUnlocked: ReturnType<typeof useProgress>['isLessonUnlocked']
}

export function HomeScreen({ progress, onNavigate, isWorldUnlocked, getLessonProgress, isLessonUnlocked }: HomeScreenProps) {
  const { t } = useLanguage()
  const [selectedWorld, setSelectedWorld] = useState<WorldId | null>(null)

  const activeWorld = selectedWorld ? WORLDS.find(w => w.id === selectedWorld) : null
  const worldLessons = selectedWorld ? getLessonsByWorld(selectedWorld) : []

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {!selectedWorld && (
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
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              CodeKids!
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-purple-200 font-semibold">
            Pick a world and start your coding adventure! 🌟
          </p>
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {!selectedWorld ? (
          <motion.div
            key="world-map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {WORLDS.map((world, index) => {
                const unlocked = isWorldUnlocked(world.unlockAtXP)
                const lessons = getLessonsByWorld(world.id)
                const completedCount = lessons.filter(l => getLessonProgress(l.id)?.completed).length
                const worldStars = lessons.reduce((sum, l) => sum + (getLessonProgress(l.id)?.stars ?? 0), 0)
                const maxStars = lessons.length * 3

                return (
                  <motion.button
                    key={world.id}
                    onClick={() => unlocked && setSelectedWorld(world.id as WorldId)}
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

                      <h3 className="text-lg sm:text-xl font-black text-white mb-1">{world.name}</h3>
                      <p className="text-sm font-semibold mb-1" style={{ color: world.theme.textColor }}>
                        {world.tagline}
                      </p>
                      <p className="text-xs mb-4 opacity-60" style={{ color: world.theme.textColor }}>
                        {t('common.learn')} <strong>{world.concept}</strong>
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
          </motion.div>
        ) : (
          <motion.div
            key="lesson-list"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setSelectedWorld(null)}
                className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors font-bold text-base sm:text-lg"
              >
                {t('nav.back')}
              </button>
              {activeWorld && (
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-3xl sm:text-4xl">{activeWorld.emoji}</span>
                  <div className="min-w-0">
                    <h2 className="text-xl sm:text-2xl font-black text-white truncate">{activeWorld.name}</h2>
                    <p className="text-purple-300 text-sm font-semibold truncate">
                      {t('common.learn')} {activeWorld.concept}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {worldLessons.map((lesson, index) => {
                const lp = getLessonProgress(lesson.id)
                const unlocked = isLessonUnlocked(lesson.id, selectedWorld!)
                const completed = lp?.completed ?? false
                const stars = lp?.stars ?? 0

                return (
                  <motion.button
                    key={lesson.id}
                    onClick={() => unlocked && onNavigate({ screen: 'lesson', currentLessonId: lesson.id, currentWorldId: selectedWorld! })}
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
                        <span className="text-3xl">🔒</span>
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
                        {completed ? '✓' : index + 1}
                      </div>
                      <StarRating stars={stars} size="sm" />
                    </div>

                    <h3 className="font-black text-white text-sm sm:text-base mb-1">{lesson.title}</h3>
                    <p className="text-white/50 text-xs leading-relaxed line-clamp-2">{lesson.story}</p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-bold" style={{ color: activeWorld?.theme.accentColor }}>
                        {t('common.xp.reward', { xp: lesson.xpReward })}
                      </span>
                      {lp?.attempts && (
                        <span className="text-xs text-white/30">
                          {lp.attempts} {t('common.tries')}
                        </span>
                      )}
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
