import { motion } from 'framer-motion'
import { Lock, Star, Trophy, X } from 'lucide-react'
import { useState } from 'react'
import { Dialog, Modal, ModalOverlay } from 'react-aria-components'
import { getLevelInfo, getNextLevelInfo, getXPProgress } from '../data/xpSystem'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'
import type { PlayerProgress } from '../types'
import { getAllStats, type AllStats, type PathId, type PathStats, type WorldStats } from '../utils/progressStats'

interface StatsModalProps {
  onClose: () => void
  progress: PlayerProgress
  /** Tab shown first — the path the player is currently in. */
  initialPath: PathId
  /** Null on the hub, where neither path is "the one you're in". */
  currentPath: PathId | null
}

const PATH_ACCENT: Record<PathId, string> = {
  blocks: '#a855f7',
  thinking: '#38bdf8',
  safety: '#fb7185',
}

const PATH_EMOJI: Record<PathId, string> = {
  blocks: '🧩',
  thinking: '🧠',
  safety: '🛡️',
}

function statsForPath(stats: AllStats, path: PathId): PathStats {
  if (path === 'blocks') return stats.blocks
  if (path === 'thinking') return stats.thinking
  return stats.safety
}

function ProgressBar({ percent, color }: { percent: number; color: string }) {
  return (
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </div>
  )
}

function WorldRow({ world, color }: { world: WorldStats; color: string }) {
  const { t, language } = useLanguage()

  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 bg-white/5 border border-white/5 ${
        world.unlocked ? '' : 'opacity-50'
      }`}
    >
      <span className="text-2xl shrink-0">{world.emoji}</span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-white text-sm truncate">{localize(world.name, language)}</span>
          {!world.unlocked && <Lock className="w-3 h-3 text-white/50 shrink-0" />}
          {world.finished && <Trophy className="w-3.5 h-3.5 text-yellow-300 shrink-0" />}
        </div>
        <div className="mt-1.5">
          <ProgressBar percent={world.percent} color={color} />
        </div>
        <div className="text-[11px] text-white/50 mt-1">
          {t('stats.lessons.done', { n: world.lessonsCompleted, total: world.lessonsTotal })}
        </div>
      </div>

      <div className="text-right shrink-0">
        <div className="flex items-center gap-1 justify-end">
          <Star className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300 shrink-0" />
          <span className="font-black text-yellow-200 text-sm">{world.stars}</span>
        </div>
        <div className="text-[11px] text-white/40">/ {world.maxStars}</div>
      </div>
    </div>
  )
}

function PathSummary({ stats }: { stats: PathStats }) {
  const { t } = useLanguage()
  const color = PATH_ACCENT[stats.path]
  const mainWorlds = stats.worlds.filter(w => !w.isBonus)
  const bonusWorlds = stats.worlds.filter(w => w.isBonus)

  return (
    <div>
      <div className="rounded-2xl p-4 border" style={{ background: `${color}18`, borderColor: `${color}44` }}>
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-2xl font-black" style={{ color }}>
            {stats.percent}%
          </span>
          <span className="text-sm text-white/60">
            {t('stats.stars', { stars: stats.stars, max: stats.maxStars })}
          </span>
        </div>

        <div className="mt-3">
          <ProgressBar percent={stats.percent} color={color} />
        </div>

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60">
          <span>{t('stats.worlds.done', { n: stats.worldsFinished, total: stats.worldsTotal })}</span>
          <span>{t('stats.lessons.done', { n: stats.lessonsCompleted, total: stats.lessonsTotal })}</span>
        </div>
      </div>

      <h3 className="text-xs font-bold uppercase tracking-wide text-white/50 mt-5 mb-2">
        {t('stats.worlds.title')}
      </h3>

      <div className="space-y-2">
        {mainWorlds.map(world => (
          <WorldRow key={world.id} world={world} color={color} />
        ))}

        {bonusWorlds.length > 0 && (
          <>
            <h4 className="text-xs font-bold uppercase tracking-wide text-white/40 pt-3 pb-1">
              {t('stats.bonus')}
            </h4>
            {bonusWorlds.map(world => (
              <WorldRow key={world.id} world={world} color={color} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export function StatsModal({ onClose, progress, initialPath, currentPath }: StatsModalProps) {
  const { t, language } = useLanguage()
  const [activePath, setActivePath] = useState<PathId>(initialPath)

  const stats = getAllStats(progress)
  const level = getLevelInfo(progress.xp)
  const nextLevel = getNextLevelInfo(progress.xp)
  const xpProgress = getXPProgress(progress.xp)
  const activeStats = statsForPath(stats, activePath)

  return (
    <ModalOverlay
      isOpen
      isDismissable
      onOpenChange={isOpen => {
        if (!isOpen) onClose()
      }}
      className="ck-overlay fixed inset-0 z-40 flex items-start sm:items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
    >
      <Modal className="w-full sm:max-w-lg my-auto">
        <Dialog aria-label={t('stats.title')} className="outline-none">
          <motion.div
            className="relative bg-gradient-to-b from-[#1C1440] to-[#130D2E] rounded-3xl border border-purple-500/30 shadow-2xl max-h-[88vh] overflow-y-auto"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            {/* Title bar */}
            <div className="sticky top-0 z-10 flex items-center gap-2 px-5 py-4 bg-[#1C1440]/95 backdrop-blur border-b border-purple-500/20">
              <Trophy className="w-5 h-5 text-yellow-300 shrink-0" />
              <h2 className="font-black text-white text-lg flex-1 truncate">{t('stats.title')}</h2>
              <button
                onClick={onClose}
                aria-label={t('stats.close')}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 pb-6 pt-4">
              {/* Level card */}
              <div className="rounded-2xl p-4 border border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 shrink-0"
                    style={{ borderColor: level.color, background: level.bgColor }}
                  >
                    {level.badge}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-black text-white text-lg leading-tight truncate">
                      {localize(level.name, language)}
                    </div>
                    <div className="text-white/60 text-xs">
                      {t('common.level')} {level.level}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-white font-black text-lg leading-tight">
                      {progress.xp.toLocaleString()}
                    </div>
                    <div className="text-white/50 text-xs">{t('common.xp')}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <ProgressBar percent={xpProgress.percent} color={level.color} />
                </div>

                <div className="mt-2 text-xs text-white/60">
                  {nextLevel
                    ? t('stats.level.next', {
                        xp: nextLevel.minXP - progress.xp,
                        name: localize(nextLevel.name, language),
                      })
                    : t('stats.level.max')}
                </div>
              </div>

              {/* Combined total across both paths */}
              <div className="mt-4 rounded-2xl p-4 border border-yellow-400/25 bg-yellow-500/10">
                <div className="flex items-center gap-2 flex-wrap">
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 shrink-0" />
                  <span className="text-2xl font-black text-yellow-100">{stats.stars}</span>
                  <span className="text-sm text-yellow-200/70">
                    {t('stats.stars', { stars: stats.stars, max: stats.maxStars })}
                  </span>
                </div>
                <div className="mt-3">
                  <ProgressBar percent={stats.percent} color="#facc15" />
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-yellow-200/70">
                  <span className="font-bold">{t('stats.percent', { percent: stats.percent })}</span>
                  <span>{t('stats.total.label')}</span>
                </div>
                {stats.stars === 0 && (
                  <div className="mt-2 text-xs text-white/60">{t('stats.empty')}</div>
                )}
              </div>

              {/* Path tabs */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(['blocks', 'thinking', 'safety'] as PathId[]).map(path => {
                  const pathStats = statsForPath(stats, path)
                  const isActive = activePath === path

                  return (
                    <button
                      key={path}
                      onClick={() => setActivePath(path)}
                      className="rounded-2xl px-3 py-2.5 text-left border transition-colors"
                      style={{
                        background: isActive ? `${PATH_ACCENT[path]}22` : 'rgba(255,255,255,0.04)',
                        borderColor: isActive ? `${PATH_ACCENT[path]}66` : 'rgba(255,255,255,0.08)',
                      }}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="text-base shrink-0">{PATH_EMOJI[path]}</span>
                        <span
                          className="font-bold text-sm leading-tight"
                          style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)' }}
                        >
                          {t(`path.${path}.name`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 text-yellow-300 fill-yellow-300 shrink-0" />
                        <span className="text-yellow-200 font-bold text-xs">
                          {pathStats.stars}
                          <span className="text-white/40 font-normal"> / {pathStats.maxStars}</span>
                        </span>
                      </div>
                      {currentPath === path && (
                        <div className="text-[10px] font-bold mt-1" style={{ color: PATH_ACCENT[path] }}>
                          {t('stats.here')}
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4">
                <PathSummary stats={activeStats} />
              </div>
            </div>
          </motion.div>
        </Dialog>
      </Modal>
    </ModalOverlay>
  )
}
