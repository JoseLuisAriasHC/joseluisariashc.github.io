import type { CaseKey, LanguageLink, SectionMeta, SiteContent } from './types'

/** Identifica una sección igual en todos los idiomas, aunque su ancla cambie */
export type SectionKey = 'hero' | 'career' | CaseKey | 'contact'

export interface SectionLink {
  key: SectionKey
  id: string
  label: string
}

function sectionLink(key: SectionKey, { id, navLabel }: SectionMeta): SectionLink {
  return { key, id, label: navLabel }
}

/** Secciones en el orden en que aparecen en la página; la última siempre es contacto */
export function sectionLinks(content: SiteContent): SectionLink[] {
  return [
    sectionLink('hero', content.hero),
    sectionLink('career', content.career),
    ...content.cases.map((study) => sectionLink(study.key, study)),
    sectionLink('contact', content.contact),
  ]
}

/** Enlace al otro idioma que abre la misma sección, con el ancla que tiene en ese idioma */
export function languageLinkTo(
  language: LanguageLink,
  alternateSections: SectionLink[],
  key: SectionKey | undefined,
): LanguageLink {
  const target = alternateSections.find((section) => section.key === key)

  return target ? { ...language, href: `${language.href}#${target.id}` } : language
}
