import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Play } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageProvider'
import type { PlayerProgress } from '../types'

interface PathSelectorProps {
  progress: PlayerProgress
}

export function PathSelector({ progress }: PathSelectorProps) {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const hasBlocksProgress = progress.xp > 0 || progress.totalStars > 0
  const hasThinkingProgress = Object.keys(progress.lessons).some(id =>
    id.startsWith('patterns-') || id.startsWith('logic-') || id.startsWith('counting-')
  )

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-5xl mb-4">🌟</div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
          {t('path.choose')}
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Thinking path — first */}
        <motion.button
          onClick={() => navigate('/app/thinking')}
          className="group relative bg-gradient-to-br from-blue-900/60 to-cyan-900/40 border border-blue-500/30 rounded-3xl p-8 text-left hover:border-blue-400/60 hover:from-blue-800/60 transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {hasThinkingProgress && (
            <div className="absolute top-4 right-4 bg-blue-500/80 text-white text-xs font-bold px-2 py-1 rounded-full">
              {t('path.continue')}
            </div>
          )}
          <div className="text-5xl mb-4">🧠</div>
          <h2 className="text-2xl font-black text-white mb-2">{t('path.thinking.name')}</h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-6">{t('path.thinking.desc')}</p>
          <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
            {hasThinkingProgress
              ? <><Play className="w-3.5 h-3.5 fill-current" /><span>{t('path.continue')}</span></>
              : <><span>{t('path.start')}</span><ArrowRight className="w-3.5 h-3.5" /></>}
          </div>
        </motion.button>

        {/* Blocks path — second */}
        <motion.button
          onClick={() => navigate('/app/blocks')}
          className="group relative bg-gradient-to-br from-purple-900/60 to-indigo-900/40 border border-purple-500/30 rounded-3xl p-8 text-left hover:border-purple-400/60 hover:from-purple-800/60 transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {hasBlocksProgress && (
            <div className="absolute top-4 right-4 bg-purple-500/80 text-white text-xs font-bold px-2 py-1 rounded-full">
              {t('path.continue')}
            </div>
          )}
          <div className="text-5xl mb-4">🧩</div>
          <h2 className="text-2xl font-black text-white mb-2">{t('path.blocks.name')}</h2>
          <p className="text-purple-200 text-sm leading-relaxed mb-6">{t('path.blocks.desc')}</p>
          <div className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-5 py-2.5 rounded-xl transition-colors text-sm">
            {hasBlocksProgress
              ? <><Play className="w-3.5 h-3.5 fill-current" /><span>{t('path.continue')}</span></>
              : <><span>{t('path.start')}</span><ArrowRight className="w-3.5 h-3.5" /></>}
          </div>
        </motion.button>
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-200 text-sm transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          {t('path.back')}
        </button>
      </motion.div>
    </div>
  )
}
