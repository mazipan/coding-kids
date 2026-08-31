import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LANG_PARAM, useLanguage } from './LanguageProvider'

/**
 * Keeps the URL's `?lang=` query param and the active language in sync so any page URL
 * is an exact, shareable snapshot of what the player sees. Only mounted inside the
 * BrowserRouter tree (see App.tsx) — never inside entry-server.tsx's standalone
 * LanguageProvider render, which has no router context to supply useSearchParams().
 *
 * The two effects below are deliberately asymmetric: the URL→state effect keys only off
 * `fromUrl` (fires on navigation — a pasted link, back/forward), and the state→URL effect
 * keys only off `language` (fires on the toggle) and reads `searchParams` fresh via the
 * functional updater. Keying both off both values would race — a toggle click updates
 * `language` first, and a `fromUrl`-vs-`language` check in the URL→state effect would see
 * the still-stale URL and immediately revert the toggle before the write-back effect can
 * catch up.
 */
export function LanguageUrlSync() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { language, setLanguage } = useLanguage()
  const languageRef = useRef(language)
  languageRef.current = language
  const fromUrl = searchParams.get(LANG_PARAM)

  useEffect(() => {
    if ((fromUrl === 'en' || fromUrl === 'id') && fromUrl !== languageRef.current) {
      setLanguage(fromUrl)
    }
  }, [fromUrl, setLanguage])

  useEffect(() => {
    setSearchParams(
      prev => {
        if (prev.get(LANG_PARAM) === language) return prev
        const next = new URLSearchParams(prev)
        next.set(LANG_PARAM, language)
        return next
      },
      { replace: true },
    )
  }, [language, setSearchParams])

  return null
}
