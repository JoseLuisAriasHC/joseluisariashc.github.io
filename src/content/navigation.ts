import type { SiteContent } from './types'

export interface SectionLink {
  id: string
  label: string
}

/** Secciones en el orden en que aparecen en la página; la última siempre es contacto */
export function sectionLinks(content: SiteContent): SectionLink[] {
  return [content.hero, content.career, ...content.cases, content.contact].map(
    ({ id, navLabel }) => ({ id, label: navLabel }),
  )
}
