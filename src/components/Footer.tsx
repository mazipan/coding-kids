import { useLanguage } from '../i18n/LanguageProvider'

const REPO_URL = 'https://github.com/mazipan/coding-kids'
const START_YEAR = 2026

function formatBuildDate(iso: string): string {
  const d = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`
}

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="py-8 px-5 border-t border-white/[0.06] text-center">
      <div className="max-w-2xl mx-auto space-y-1 text-white/40 text-xs">
        <p>{t('footer.copyright', { year: START_YEAR })}</p>
        <p>
          {t('footer.updated_at')} {formatBuildDate(__BUILD_DATE__)}
        </p>
        {__COMMIT_SHA__ && (
          <p className="font-mono">
            <a
              href={`${REPO_URL}/commit/${__COMMIT_SHA__}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              {__COMMIT_SHA__}
            </a>
            {' · '}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              {t('footer.source')}
            </a>
          </p>
        )}
        <div className="pt-3 text-white/30 flex items-center justify-center gap-2">
          <a
            href="https://baca-quran.id"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Baca Quran
          </a>
          <span>•</span>
          <a
            href="https://tools.mazipan.space"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Tools
          </a>
          <span>•</span>
          <a
            href="https://games.mazipan.space"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60 transition-colors"
          >
            Games
          </a>
        </div>
      </div>
    </footer>
  )
}
