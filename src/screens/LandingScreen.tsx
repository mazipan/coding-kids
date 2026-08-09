import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Code2, Lightbulb, Gift, ShieldCheck, GraduationCap } from 'lucide-react'
import { WORLDS } from '../data/worlds'
import { THINKING_WORLDS } from '../data/thinkingWorlds'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'

interface LandingScreenProps {
  onStart: () => void
  hasProgress: boolean
}

const THINKING_COLOR_MAP: Record<string, { accent: string; bg: string }> = {
  purple: { accent: '#a855f7', bg: 'rgba(168,85,247,0.08)' },
  blue:   { accent: '#3b82f6', bg: 'rgba(59,130,246,0.08)' },
  emerald:{ accent: '#10b981', bg: 'rgba(16,185,129,0.08)' },
  rose:   { accent: '#f43f5e', bg: 'rgba(244,63,94,0.08)' },
  green:  { accent: '#22c55e', bg: 'rgba(34,197,94,0.08)' },
  indigo: { accent: '#6366f1', bg: 'rgba(99,102,241,0.08)' },
  orange: { accent: '#f97316', bg: 'rgba(249,115,22,0.08)' },
  teal:   { accent: '#14b8a6', bg: 'rgba(20,184,166,0.08)' },
  amber:  { accent: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  cyan:   { accent: '#06b6d4', bg: 'rgba(6,182,212,0.08)' },
  violet: { accent: '#8b5cf6', bg: 'rgba(139,92,246,0.08)' },
}

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="text-purple-400 text-xs font-semibold uppercase tracking-[0.15em] mb-3">
      {text}
    </p>
  )
}

export function LandingScreen({ onStart, hasProgress }: LandingScreenProps) {
  const { t, language, setLanguage } = useLanguage()

  const totalCodingLessons = WORLDS.filter(w => !w.isBonus).reduce((sum, w) => sum + w.lessonCount, 0)
  const totalThinkingLessons = THINKING_WORLDS.reduce((sum, w) => sum + w.lessonCount, 0)

  const gradientHeadline = (text: string) => {
    const words = text.split(' ')
    const pivot = Math.max(1, words.length - 2)
    return (
      <>
        {words.slice(0, pivot).join(' ')}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400">
          {words.slice(pivot).join(' ')}
        </span>
      </>
    )
  }

  return (
    <div
      className="min-h-screen bg-[#07050F] text-white overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* ── NAV ──────────────────────────────────── */}
      <nav className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#07050F]/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3 select-none"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <Logo size={36} />
            <div className="leading-none">
              <div className="font-extrabold text-white text-lg tracking-tight">CodeKids</div>
              <div className="text-[11px] text-purple-400 font-semibold hidden sm:block mt-0.5">
                {t('landing.nav.tagline')}
              </div>
            </div>
          </motion.div>

          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
              {(['en', 'id'] as const).map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${
                    language === lang
                      ? 'bg-purple-600 text-white'
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <motion.button
              onClick={onStart}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #7C3AED, #EC4899)' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {hasProgress ? t('landing.returning') : t('landing.cta')}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="relative pt-24 sm:pt-32 pb-20 px-5 sm:px-8 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-40 right-1/4 w-72 h-72 bg-pink-600/[0.06] rounded-full blur-3xl" />
          <div className="absolute top-24 left-1/4 w-56 h-56 bg-violet-600/[0.06] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse flex-shrink-0" />
              {t('landing.badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-[80px] font-extrabold mb-6 leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {gradientHeadline(t('landing.headline'))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg sm:text-xl text-white/55 max-w-xl mx-auto mb-10 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('landing.sub')}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={onStart}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg text-white"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                boxShadow: '0 8px 32px rgba(124,58,237,0.4)',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 12px 48px rgba(124,58,237,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              {t('landing.cta')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {hasProgress && (
              <motion.button
                onClick={onStart}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-purple-300 border border-purple-600/30 hover:bg-purple-900/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <ArrowRight className="w-4 h-4" />
                {t('landing.returning')}
              </motion.button>
            )}
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {[
              { value: '2', label: t('landing.stats.paths') },
              { value: String(WORLDS.length + THINKING_WORLDS.length), label: t('landing.stats.worlds') },
              { value: `${totalThinkingLessons}+`, label: t('landing.stats.puzzles') },
              { value: '5–14', label: t('landing.stats.ages') },
            ].map(({ value, label }) => (
              <div
                key={value}
                className="rounded-2xl p-4 text-center border border-white/[0.07] bg-white/[0.03]"
              >
                <div className="text-2xl font-extrabold text-white mb-0.5">{value}</div>
                <div className="text-xs text-white/40 font-medium leading-tight">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TWO PATHS ─────────────────────────────── */}
      <section className="py-28 sm:py-32 px-5 sm:px-8 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel text={t('landing.paths.label')} />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              {gradientHeadline(t('landing.paths.title'))}
            </h2>
            <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('landing.paths.sub')}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Block Coding */}
            <FadeIn delay={0.05}>
              <div
                className="relative rounded-3xl p-7 sm:p-8 border border-violet-500/20 overflow-hidden h-full flex flex-col"
                style={{ background: 'linear-gradient(135deg, #0f0a1f 0%, #1a0f35 50%, #220f40 100%)' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    <Code2 size={24} color="#A78BFA" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    {t('landing.paths.blocks.title')}
                  </h3>
                  <p className="text-violet-200/60 text-base leading-relaxed mb-5">
                    {t('landing.paths.blocks.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t('landing.paths.blocks.concepts').split(' · ').map(concept => (
                      <span
                        key={concept}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: 'rgba(124,58,237,0.15)', color: '#c4b5fd' }}
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto grid grid-cols-3 gap-3 pt-5 border-t border-violet-500/15">
                    <div className="text-center">
                      <div className="text-xl font-extrabold text-white">{WORLDS.length}</div>
                      <div className="text-xs text-violet-300/50 mt-0.5">{t('landing.paths.stat.worlds')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-extrabold text-white">{totalCodingLessons}</div>
                      <div className="text-xs text-violet-300/50 mt-0.5">{t('landing.paths.stat.lessons')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-extrabold text-white">5–14</div>
                      <div className="text-xs text-violet-300/50 mt-0.5">{t('landing.paths.stat.ages')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Brain Training */}
            <FadeIn delay={0.1}>
              <div
                className="relative rounded-3xl p-7 sm:p-8 border border-emerald-500/20 overflow-hidden h-full flex flex-col"
                style={{ background: 'linear-gradient(135deg, #021a0e 0%, #041f12 50%, #062416 100%)' }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[60px] pointer-events-none" />
                <div className="relative z-10 flex flex-col flex-1">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.3)' }}
                  >
                    <Lightbulb size={24} color="#34d399" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">
                    {t('landing.paths.thinking.title')}
                  </h3>
                  <p className="text-emerald-200/60 text-base leading-relaxed mb-5">
                    {t('landing.paths.thinking.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {t('landing.paths.thinking.topics').split(' · ').map(topic => (
                      <span
                        key={topic}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: 'rgba(16,185,129,0.15)', color: '#6ee7b7' }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto grid grid-cols-3 gap-3 pt-5 border-t border-emerald-500/15">
                    <div className="text-center">
                      <div className="text-xl font-extrabold text-white">{THINKING_WORLDS.length}</div>
                      <div className="text-xs text-emerald-300/50 mt-0.5">{t('landing.paths.stat.worlds')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-extrabold text-white">{totalThinkingLessons}</div>
                      <div className="text-xs text-emerald-300/50 mt-0.5">{t('landing.paths.stat.puzzles')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-extrabold text-white">5–13</div>
                      <div className="text-xs text-emerald-300/50 mt-0.5">{t('landing.paths.stat.ages')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── ALL WORLDS ───────────────────────────── */}
      <section className="py-28 sm:py-32 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-4">
            <SectionLabel text={t('landing.worlds.label')} />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t('landing.worlds.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} className="text-center mb-14">
            <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('landing.worlds.sub')}
            </p>
          </FadeIn>

          {/* Block Coding worlds */}
          <FadeIn className="mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 px-3 py-1.5 rounded-full">
                <span className="text-sm">🎮</span>
                <span className="text-violet-300 text-sm font-bold">{t('landing.worlds.blocks.label')}</span>
              </div>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {WORLDS.filter(w => !w.isBonus).map((world, i) => (
              <FadeIn key={world.id} delay={i * 0.04}>
                <div
                  className="rounded-2xl p-4 border hover:scale-[1.03] transition-transform duration-200 cursor-default"
                  style={{
                    background: `${world.theme.accentColor}0d`,
                    borderColor: `${world.theme.accentColor}25`,
                  }}
                >
                  <div className="text-2xl mb-2">{world.emoji}</div>
                  <h3 className="font-bold text-sm text-white mb-1 leading-snug">
                    {localize(world.name, language)}
                  </h3>
                  <div className="text-xs font-semibold mb-2" style={{ color: world.theme.accentColor }}>
                    {localize(world.concept, language)}
                  </div>
                  <div className="text-xs text-white/30">
                    {world.lessonCount} {t('landing.worlds.lessons')}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Brain Training worlds */}
          <FadeIn className="mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <span className="text-sm">🧠</span>
                <span className="text-emerald-300 text-sm font-bold">{t('landing.worlds.thinking.label')}</span>
              </div>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {THINKING_WORLDS.map((world, i) => {
              const c = THINKING_COLOR_MAP[world.color] ?? { accent: '#a855f7', bg: 'rgba(168,85,247,0.08)' }
              return (
                <FadeIn key={world.id} delay={i * 0.04}>
                  <div
                    className="rounded-2xl p-4 border hover:scale-[1.03] transition-transform duration-200 cursor-default"
                    style={{
                      background: c.bg,
                      borderColor: `${c.accent}25`,
                    }}
                  >
                    <div className="text-2xl mb-2">{world.emoji}</div>
                    <h3 className="font-bold text-sm text-white mb-1 leading-snug">
                      {localize(world.name, language)}
                    </h3>
                    <div className="text-xs font-semibold mb-2" style={{ color: c.accent }}>
                      {localize(world.concept, language)}
                    </div>
                    <div className="text-xs text-white/30">
                      {world.lessonCount} {t('landing.worlds.lessons')}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FOR PARENTS ──────────────────────────── */}
      <section className="py-28 sm:py-32 px-5 sm:px-8 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel text={t('landing.trust.label')} />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {gradientHeadline(t('landing.trust.title'))}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: Gift,          color: '#22C55E', titleKey: 'landing.trust.free.title',    descKey: 'landing.trust.free.desc' },
              { Icon: ShieldCheck,   color: '#60A5FA', titleKey: 'landing.trust.private.title', descKey: 'landing.trust.private.desc' },
              { Icon: GraduationCap, color: '#A78BFA', titleKey: 'landing.trust.edu.title',     descKey: 'landing.trust.edu.desc' },
            ].map(({ Icon, color, titleKey, descKey }, i) => (
              <FadeIn key={titleKey} delay={i * 0.08}>
                <div className="rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-200 h-full flex flex-col gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={22} color={color} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-2">{t(titleKey)}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section className="py-32 sm:py-40 px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-5 leading-[1.05]">
              {gradientHeadline(t('landing.final.title'))}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              {t('landing.final.sub')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <motion.button
              onClick={onStart}
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-xl text-white block mx-auto"
              style={{
                background: 'linear-gradient(135deg, #7C3AED, #EC4899)',
                boxShadow: '0 8px 48px rgba(124,58,237,0.5)',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 16px 64px rgba(124,58,237,0.7)' }}
              whileTap={{ scale: 0.97 }}
            >
              {t('landing.final.cta')}
            </motion.button>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}
