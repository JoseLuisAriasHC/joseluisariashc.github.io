export type Locale = 'es' | 'en'

// Cada HTML de entrada declara su idioma en <html lang>; español por defecto
export function resolveLocale(lang: string): Locale {
  return lang === 'en' ? 'en' : 'es'
}
