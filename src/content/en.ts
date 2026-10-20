import { es } from './es'
import type { SiteContent } from './types'

// Provisional hasta la fase 8: mismo contenido que es.ts, salvo el enlace de vuelta al español.
// Al traducirlo se escribe el objeto completo, sin copiar es, para que TypeScript avise si falta algo.
export const en: SiteContent = {
  ...es,
  locale: 'en',
  ui: { ...es.ui, alternateLanguage: { label: 'Español', href: '/', lang: 'es' } },
}
