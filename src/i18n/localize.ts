import type { LocalizedString } from '../types'
import type { Language } from './translations'

export function localize(field: LocalizedString, language: Language): string {
  return field[language] ?? field.en
}
