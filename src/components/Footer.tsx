import { useLanguage } from '../i18n/LanguageProvider'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="py-12 px-5 sm:px-8 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Logo size={30} />
          <div className="font-bold text-white/60 text-sm leading-none">CodeKids</div>
        </div>
        <div className="text-center sm:text-right">
          <p className="text-white/40 text-sm font-medium mb-1">{t('landing.footer')}</p>
          <p className="text-white/20 text-xs">{t('landing.footer.free')}</p>
          {__COMMIT_SHA__ && (
            <p className="text-white/40 text-xs mt-1 font-mono">
              <a
                href={`https://github.com/mazipan/coding-kids/commit/${__COMMIT_SHA__}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                {__COMMIT_SHA__}
              </a>
              <span className="text-white/30">
                {' · '}
                {new Date(__BUILD_DATE__).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
