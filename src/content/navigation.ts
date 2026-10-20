import type { CaseKey, SiteContent } from './types'

export interface SectionLink {
  id: string
  label: string
}

/** Enlace a un caso desde otra sección (la trayectoria) */
export interface CaseLink {
  key: CaseKey
  id: string
  title: string
}

/** Secciones en el orden en que aparecen en la página; la última siempre es contacto */
export function sectionLinks(content: SiteContent): SectionLink[] {
  return [content.hero, content.career, ...content.cases, content.contact].map(
    ({ id, navLabel }) => ({ id, label: navLabel }),
  )
}
