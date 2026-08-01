import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WORLDS } from '../data/worlds'
import { useLanguage } from '../i18n/LanguageProvider'

interface LandingScreenProps {
  onStart: () => void
  hasProgress: boolean
}

const AGE_GROUPS = [
  { range: '5–7', emoji: '🐒', world: 'Jungle', concept: 'Sequences', color: '#16A34A' },
  { range: '7–9', emoji: '🚀', world: 'Space', concept: 'Loops', color: '#7C3AED' },
  { range: '9–10', emoji: '🐠', world: 'Ocean', concept: 'Variables', color: '#0284C7' },
  { range: '10–11', emoji: '💎', world: 'Caves', concept: 'Conditions', color: '#9333EA' },
  { range: '11–13', emoji: '🤖', world: 'Factory', concept: 'Functions', color: '#EA580C' },
  { range: '12–14', emoji: '⏰', world: 'Portal', concept: 'Arrays', color: '#0891B2' },
]

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function LandingScreen({ onStart, hasProgress }: LandingScreenProps) {
  const { t, language, setLanguage } = useLanguage()

  const features = [
    { icon: t('landing.features.blocks.icon'), title: t('landing.features.blocks.title'), desc: t('landing.features.blocks.desc') },
    { icon: t('landing.features.xp.icon'), title: t('landing.features.xp.title'), desc: t('landing.features.xp.desc') },
    { icon: t('landing.features.worlds.icon'), title: t('landing.features.worlds.title'), desc: t('landing.features.worlds.desc') },
    { icon: t('landing.features.anywhere.icon'), title: t('landing.features.anywhere.title'), desc: t('landing.features.anywhere.desc') },
  ]

  const steps = [
    { n: '1', title: t('landing.how.step1.title'), desc: t('landing.how.step1.desc') },
    { n: '2', title: t('landing.how.step2.title'), desc: t('landing.how.step2.desc') },
    { n: '3', title: t('landing.how.step3.title'), desc: t('landing.how.step3.desc') },
  ]

  const badges = [
    t('landing.final.badge1'),
    t('landing.final.badge2'),
    t('landing.final.badge3'),
    t('landing.final.badge4'),
  ]

  return (
    <div className="min-h-screen bg-[#0A0618] font-nunito text-white overflow-x-hidden">
      {/* ── Top nav ────────────────────────────────── */}
      <nav className="sticky top-0 z-30 bg-[#0A0618]/80 backdrop-blur-md border-b border-purple-900/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.04 }}>
            <span className="text-3xl">🚀</span>
            <div className="leading-tight">
              <div className="font-black text-white text-lg">CodeKids</div>
              <div className="text-xs text-purple-300 font-semibold hidden sm:block">Learn to Code!</div>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex rounded-xl overflow-hidden border border-purple-800/40">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-bold transition-colors ${language === 'en' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-900/40'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1.5 text-sm font-bold transition-colors ${language === 'id' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:text-white hover:bg-purple-900/40'}`}
              >
                ID
              </button>
            </div>

            <motion.button
              onClick={onStart}
              className="hidden sm:block px-4 py-2 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {hasProgress ? t('landing.returning') : t('landing.cta')}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4">
        {/* ambient blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/12 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('landing.badge')}
          </motion.div>

          {/* Floating mascots */}
          <div className="flex justify-center gap-4 mb-6 text-5xl sm:text-6xl">
            {['🐒', '🚀', '🐠', '💎', '🤖', '⏰'].map((e, i) => (
              <motion.span
                key={e}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                className="inline-block"
              >
                {e}
              </motion.span>
            ))}
          </div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t('landing.headline').split(' ').map((word, i, arr) =>
              i >= arr.length - 2 ? (
                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {word}{i < arr.length - 1 ? ' ' : ''}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-lg sm:text-xl text-purple-200/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            {t('landing.sub')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={onStart}
              className="px-8 py-4 rounded-2xl font-black text-xl text-white shadow-2xl shadow-purple-900/60 w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 40px rgba(124,58,237,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              {t('landing.cta')}
            </motion.button>

            {hasProgress && (
              <motion.button
                onClick={onStart}
                className="px-8 py-4 rounded-2xl font-bold text-lg text-purple-300 border border-purple-600/50 hover:bg-purple-900/30 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
              >
                {t('landing.returning')}
              </motion.button>
            )}
          </motion.div>

          {/* Scroll hint */}
          <motion.p
            className="mt-10 text-purple-400/60 text-sm"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('landing.cta.secondary')}
          </motion.p>
        </div>
      </section>

      {/* ── Features ───────────────────────────────── */}
      <section className="py-20 px-4 bg-[#0D0A22]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">{t('landing.features.title')}</h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="bg-[#130D2E] rounded-2xl p-6 border border-purple-900/40 h-full flex flex-col items-center text-center hover:border-purple-600/40 transition-colors">
                  <div className="text-5xl mb-4">{f.icon}</div>
                  <h3 className="font-black text-lg mb-2 text-white">{f.title}</h3>
                  <p className="text-purple-300/80 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ───────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black">{t('landing.how.title')}</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.15} className="relative">
                {/* connector line */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%-0px)] w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-transparent z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-black text-white mx-auto mb-5 shadow-lg shadow-purple-900/50">
                    {step.n}
                  </div>
                  <h3 className="font-black text-xl mb-3 text-white">{step.title}</h3>
                  <p className="text-purple-300/80 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Worlds showcase ────────────────────────── */}
      <section className="py-20 px-4 bg-[#0D0A22]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-black">{t('landing.worlds.title')}</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="text-center mb-12">
            <p className="text-purple-300/70 text-lg max-w-2xl mx-auto">{t('landing.worlds.sub')}</p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WORLDS.map((world, i) => (
              <FadeIn key={world.id} delay={i * 0.08}>
                <div
                  className="rounded-2xl p-5 border relative overflow-hidden cursor-default"
                  style={{
                    background: world.theme.bgGradient,
                    borderColor: `${world.theme.accentColor}40`,
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">{world.emoji}</span>
                    <span
                      className="text-xs font-bold px-2 py-1 rounded-full"
                      style={{ background: `${world.theme.accentColor}30`, color: world.theme.accentColor }}
                    >
                      Ages {world.ageRange}
                    </span>
                  </div>
                  <h3 className="font-black text-lg text-white mb-1">{world.name}</h3>
                  <p className="text-xs font-semibold mb-1" style={{ color: world.theme.textColor }}>
                    {world.tagline}
                  </p>
                  <p className="text-xs opacity-60 font-medium" style={{ color: world.theme.textColor }}>
                    Learn: <strong>{world.concept}</strong>
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ages ───────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-4">
            <h2 className="text-3xl sm:text-4xl font-black">{t('landing.ages.title')}</h2>
          </FadeIn>
          <FadeIn delay={0.1} className="text-center mb-12">
            <p className="text-purple-300/70 text-lg">{t('landing.ages.sub')}</p>
          </FadeIn>

          {/* Age progression track */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch justify-center">
            {AGE_GROUPS.map((ag, i) => (
              <FadeIn key={ag.range} delay={i * 0.08} className="flex-1">
                <div
                  className="rounded-2xl p-4 border text-center h-full flex flex-col items-center gap-2"
                  style={{ borderColor: `${ag.color}40`, background: `${ag.color}10` }}
                >
                  <span className="text-3xl">{ag.emoji}</span>
                  <div className="font-black text-white text-sm">{ag.range}</div>
                  <div className="text-xs font-bold" style={{ color: ag.color }}>{ag.concept}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────── */}
      <section className="py-24 px-4 bg-[#0D0A22]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl sm:text-5xl font-black mb-4">{t('landing.final.title')}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-purple-200/70 text-lg mb-10">{t('landing.final.sub')}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.button
              onClick={onStart}
              className="px-10 py-5 rounded-2xl font-black text-2xl text-white shadow-2xl shadow-purple-900/60 mb-8 w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('landing.final.cta')}
            </motion.button>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {badges.map(b => (
                <span key={b} className="text-sm font-bold text-green-300 bg-green-900/20 border border-green-700/30 px-3 py-1.5 rounded-full">
                  {b}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="py-10 px-4 border-t border-purple-900/30 text-center text-purple-400/60 text-sm">
        <p className="font-semibold mb-1">{t('landing.footer')}</p>
        <p>{t('landing.footer.free')}</p>
      </footer>
    </div>
  )
}
