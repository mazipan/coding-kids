import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MousePointerClick, Trophy, Globe, Smartphone, Map, Grip, Zap, Gift, ShieldCheck, EyeOff } from 'lucide-react'
import { WORLDS } from '../data/worlds'
import { useLanguage } from '../i18n/LanguageProvider'
import { localize } from '../i18n/localize'
import { Logo } from '../components/Logo'

interface LandingScreenProps {
  onStart: () => void
  hasProgress: boolean
}

const WORLD_MASCOTS = [
  { emoji: '🐒', color: '#22C55E', delay: 0 },
  { emoji: '🚀', color: '#8B5CF6', delay: 0.3 },
  { emoji: '🐠', color: '#06B6D4', delay: 0.6 },
  { emoji: '💎', color: '#A855F7', delay: 0.9 },
  { emoji: '🤖', color: '#F97316', delay: 1.2 },
  { emoji: '⏰', color: '#0EA5E9', delay: 1.5 },
]

const AGE_GROUPS = [
  { range: '5–7', concept: 'Sequences', color: '#22C55E', emoji: '🐒' },
  { range: '7–9', concept: 'Loops', color: '#8B5CF6', emoji: '🚀' },
  { range: '9–10', concept: 'Variables', color: '#06B6D4', emoji: '🐠' },
  { range: '10–11', concept: 'Conditions', color: '#A855F7', emoji: '💎' },
  { range: '11–13', concept: 'Functions', color: '#F97316', emoji: '🤖' },
  { range: '12–14', concept: 'Arrays', color: '#0EA5E9', emoji: '⏰' },
]

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
                Learn to code
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
      <section className="relative pt-24 sm:pt-32 pb-16 px-5 sm:px-8 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-32 right-1/4 w-64 h-64 bg-pink-600/8 rounded-full blur-3xl" />
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

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-20"
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
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.button>

            {hasProgress && (
              <motion.button
                onClick={onStart}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-base text-purple-300 border border-purple-600/30 hover:bg-purple-900/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                {t('landing.returning')}
              </motion.button>
            )}
          </motion.div>

          {/* Floating world mascots */}
          <div className="flex justify-center items-end gap-5 sm:gap-7">
            {WORLD_MASCOTS.map(({ emoji, color, delay }) => (
              <motion.div
                key={emoji}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + delay * 0.08, duration: 0.4 }}
              >
                <motion.span
                  className="text-4xl sm:text-5xl block"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2.8 + delay * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay,
                  }}
                >
                  {emoji}
                </motion.span>
                <div
                  className="w-5 h-0.5 rounded-full opacity-30"
                  style={{ background: color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST CARDS ─────────────────────────── */}
      <section className="py-10 sm:py-12 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { Icon: Gift, key: 'trust.free' as const, color: '#22C55E' },
              { Icon: ShieldCheck, key: 'trust.no.signup' as const, color: '#60A5FA' },
              { Icon: EyeOff, key: 'trust.no.ads' as const, color: '#A78BFA' },
              { Icon: Smartphone, key: 'trust.mobile' as const, color: '#F472B6' },
            ].map(({ Icon, key, color }) => (
              <div
                key={key}
                className="rounded-2xl p-4 sm:p-5 flex flex-col items-center gap-3 text-center border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} color={color} />
                </div>
                <span className="font-bold text-sm text-white/75 leading-tight">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────── */}
      <section className="py-28 sm:py-32 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-14">
            <SectionLabel text={t('landing.features.label')} />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t('landing.features.title')}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(
              [
                { Icon: MousePointerClick, key: 'blocks', color: '#8B5CF6' },
                { Icon: Trophy, key: 'xp', color: '#F59E0B' },
                { Icon: Globe, key: 'worlds', color: '#06B6D4' },
                { Icon: Smartphone, key: 'anywhere', color: '#EC4899' },
              ] as const
            ).map(({ Icon, key, color }, i) => (
              <FadeIn key={key} delay={i * 0.08}>
                <div className="group rounded-2xl p-6 border border-white/[0.07] bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/[0.04] transition-all duration-300 h-full flex flex-col">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={20} color={color} />
                  </div>
                  <h3 className="font-bold text-base text-white mb-2">
                    {t(`landing.features.${key}.title`)}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">
                    {t(`landing.features.${key}.desc`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="py-28 sm:py-32 px-5 sm:px-8 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <SectionLabel text={t('landing.how.label')} />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t('landing.how.title')}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-purple-600/30 via-purple-400/50 to-purple-600/30" />

            {(
              [
                { n: 1, key: 'step1', Icon: Map },
                { n: 2, key: 'step2', Icon: Grip },
                { n: 3, key: 'step3', Icon: Zap },
              ] as const
            ).map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.12}>
                <div className="text-center">
                  <div className="relative inline-flex mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'rgba(124,58,237,0.1)',
                        border: '1px solid rgba(124,58,237,0.25)',
                      }}
                    >
                      <step.Icon size={26} color="#A78BFA" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-xs font-black text-white leading-none">
                      {step.n}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">
                    {t(`landing.how.${step.key}.title`)}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {t(`landing.how.${step.key}.desc`)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORLDS ───────────────────────────────── */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORLDS.map((world, i) => (
              <FadeIn key={world.id} delay={i * 0.07}>
                <div
                  className="relative rounded-2xl p-5 border overflow-hidden hover:scale-[1.025] transition-transform duration-300 cursor-default"
                  style={{
                    background: world.theme.bgGradient,
                    borderColor: `${world.theme.accentColor}30`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{world.emoji}</span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${world.theme.accentColor}22`,
                        color: world.theme.accentColor,
                      }}
                    >
                      {t('common.ages')} {world.ageRange}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-white mb-1">{localize(world.name, language)}</h3>
                  <p
                    className="text-xs mb-3 leading-relaxed"
                    style={{ color: `${world.theme.textColor}99` }}
                  >
                    {localize(world.tagline, language)}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="text-xs font-medium opacity-50"
                      style={{ color: world.theme.textColor }}
                    >
                      {t('common.learn')}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: world.theme.accentColor }}
                    >
                      {localize(world.concept, language)}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGE PROGRESSION ──────────────────────── */}
      <section className="py-28 sm:py-32 px-5 sm:px-8 bg-white/[0.015] border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="text-center mb-4">
            <SectionLabel text={t('landing.ages.label')} />
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {t('landing.ages.title')}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} className="text-center mb-14">
            <p className="text-white/45 text-lg">{t('landing.ages.sub')}</p>
          </FadeIn>

          <div className="flex flex-col sm:flex-row gap-3">
            {AGE_GROUPS.map((ag, i) => (
              <FadeIn key={ag.range} delay={i * 0.07} className="flex-1">
                <div
                  className="rounded-2xl p-4 border text-center h-full flex flex-col items-center gap-2.5"
                  style={{
                    borderColor: `${ag.color}28`,
                    background: `${ag.color}08`,
                  }}
                >
                  <span className="text-3xl">{ag.emoji}</span>
                  <div className="font-bold text-white text-sm">{ag.range}</div>
                  <div
                    className="text-xs font-semibold"
                    style={{ color: ag.color }}
                  >
                    {ag.concept}
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
              className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-xl text-white block mx-auto mb-8"
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
          <FadeIn delay={0.22}>
            <div className="flex flex-wrap justify-center gap-2">
              {(
                [
                  'trust.free',
                  'trust.no.signup',
                  'trust.no.ads',
                  'trust.mobile',
                ] as const
              ).map(key => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1 text-xs font-semibold text-white/55"
                >
                  <span className="text-green-400 text-[10px] leading-none">✓</span>
                  {t(key)}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="py-12 px-5 sm:px-8 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo size={30} />
            <div>
              <div className="font-bold text-white/60 text-sm leading-none">CodeKids</div>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-white/40 text-sm font-medium mb-1">{t('landing.footer')}</p>
            <p className="text-white/20 text-xs">{t('landing.footer.free')}</p>
            {import.meta.env.VITE_COMMIT_SHA && (
              <p className="text-white/40 text-xs mt-1 font-mono">
                <a
                  href={`https://github.com/mazipan/coding-kids/commit/${import.meta.env.VITE_COMMIT_SHA}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white/60 transition-colors"
                >
                  {import.meta.env.VITE_COMMIT_SHA}
                </a>
                {import.meta.env.VITE_BUILD_DATE && (
                  <span className="text-white/30">
                    {' · '}
                    {new Date(import.meta.env.VITE_BUILD_DATE).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}
