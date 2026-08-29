import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import { TRANSLATIONS, type Language } from './translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const LANG_KEY = 'codekids_language'

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(LANG_KEY)
  if (stored === 'en' || stored === 'id') return stored
  return navigator.language.startsWith('id') ? 'id' : 'en'
}

interface LanguageProviderProps {
  children: ReactNode
  /**
   * Pins the first render's language instead of reading localStorage/navigator.language.
   * Only for hydrating prerendered markup (the landing page): server and client must
   * agree on the very first render or React logs a hydration mismatch. When set, the
   * real stored/browser language is detected and applied right after mount instead.
   * Leave unset for every normal (non-hydrating) mount — it keeps today's exact,
   * flash-free behavior.
   */
  forcedInitialLanguage?: Language
}

export function LanguageProvider({ children, forcedInitialLanguage }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(
    () => forcedInitialLanguage ?? getInitialLanguage(),
  )

  useEffect(() => {
    if (forcedInitialLanguage === undefined) return
    const detected = getInitialLanguage()
    setLanguageState(prev => (detected !== prev ? detected : prev))
  }, [forcedInitialLanguage])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem(LANG_KEY, lang)
  }, [])

  const t = useCallback((key: string, vars?: Record<string, string | number>): string => {
    const dict = TRANSLATIONS[language]
    let text = dict[key] ?? TRANSLATIONS.en[key] ?? key
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v))
      })
    }
    return text
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be within LanguageProvider')
  return ctx
}
