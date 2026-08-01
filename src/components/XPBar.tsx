import { motion } from 'framer-motion'
import { getLevelInfo, getXPProgress } from '../data/xpSystem'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'

interface XPBarProps {
  xp: number
  compact?: boolean
}

export function XPBar({ xp, compact = false }: XPBarProps) {
  const { language } = useLanguage()
  const level = getLevelInfo(xp)
  const progress = getXPProgress(xp)

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xl">{level.badge}</span>
        <div className="flex flex-col min-w-0">
          <span className="text-xs font-bold text-white/80 truncate">{localize(level.name, language)}</span>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-20 rounded-full bg-white/20 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: level.color }}
                initial={{ width: 0 }}
                animate={{ width: `${progress.percent}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            <span className="text-xs text-white/60">Lv.{level.level}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/10">
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold border-2"
          style={{ borderColor: level.color, background: level.bgColor }}
        >
          {level.badge}
        </div>
        <div>
          <div className="font-bold text-white text-lg leading-tight">{localize(level.name, language)}</div>
          <div className="text-white/60 text-sm">Level {level.level}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-white font-bold text-lg">{xp.toLocaleString()}</div>
          <div className="text-white/50 text-xs">XP</div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="h-4 rounded-full bg-white/10 overflow-hidden border border-white/10">
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{ background: `linear-gradient(90deg, ${level.color}88, ${level.color})` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress.percent}%` }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_linear_infinite]" />
          </motion.div>
        </div>
        <div className="flex justify-between text-xs text-white/50">
          <span>{progress.current} XP earned</span>
          <span>{progress.needed - progress.current} to next level</span>
        </div>
      </div>
    </div>
  )
}
