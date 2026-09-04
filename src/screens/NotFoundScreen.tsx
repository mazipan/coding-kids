import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageProvider'

export function NotFoundScreen() {
  const { t } = useLanguage()

  useEffect(() => {
    const meta = document.querySelector('meta[name="robots"]')
    const previous = meta?.getAttribute('content') ?? null
    meta?.setAttribute('content', 'noindex, follow')
    return () => {
      if (previous !== null) meta?.setAttribute('content', previous)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0618] font-nunito px-6">
      <motion.div
        className="max-w-md text-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="text-6xl mb-4">🧭</div>
        <h1 className="text-3xl font-black text-white mb-3">{t('notFound.title')}</h1>
        <p className="text-white/70 mb-8 leading-relaxed">{t('notFound.message')}</p>
        <Link
          to="/"
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-extrabold hover:brightness-110 transition-all"
        >
          {t('notFound.cta')}
        </Link>
      </motion.div>
    </div>
  )
}
