import type { Locale } from './locale'

/** Clave de cada caso, igual en todos los idiomas */
export type CaseKey = 'b2b-platform' | 'automation' | 'news-selection' | 'admin-panel'

export type CaseStepKey = 'context' | 'contribution' | 'solution' | 'result'

export interface Period {
  /** AAAA-MM */
  start: string
  /** AAAA-MM; sin valor es el puesto actual */
  end?: string
}

/** Lo común a toda sección: su ancla en la URL y su nombre en el menú */
export interface SectionMeta {
  id: string
  navLabel: string
}

export interface PersonLinks {
  linkedin: string
  github: string
  email: string
  /** Ruta al PDF dentro de public/. Sin valor, no se muestra el botón */
  cv?: string
}

export interface Person {
  name: string
  role: string
  location: string
  /** Solo se muestra si tiene valor */
  availability?: string
  links: PersonLinks
}

export interface HeroContent extends SectionMeta {
  headline: string
  stack: string[]
  intro: string
  photoAlt: string
}

export interface Job {
  key: string
  role: string
  company: string
  period: Period
  summary: string
}

export interface Education {
  key: string
  title: string
  center: string
  period: Period
  summary: string
  grade?: string
}

export interface CareerContent extends SectionMeta {
  title: string
  experienceTitle: string
  jobs: Job[]
  educationTitle: string
  education: Education[]
}

export interface CaseArticle {
  title: string
  href: string
  /** Idioma del artículo, que puede no ser el de la página */
  lang: Locale
}

/** Imagen de un caso en sus distintos anchos, para que el navegador elija la adecuada */
export interface CaseImageSource {
  src: string
  srcset: string
  /** Versión para la vista ampliada cuando muestra más que la miniatura; si no, se amplía src */
  zoom?: string
}

export interface CaseImage extends CaseImageSource {
  alt: string
}

export interface CaseStudy extends SectionMeta {
  key: CaseKey
  title: string
  company: string
  /** Un párrafo por paso, o una lista si el paso tiene varios */
  steps: Record<CaseStepKey, string | string[]>
  stack: string[]
  /** Servicios externos que conecta el caso; solo se muestra si tiene valor */
  integrations?: string[]
  /** Artículos publicados sobre el tema del caso; solo se muestran si hay alguno */
  articles?: CaseArticle[]
  /** Imagen ilustrativa; mientras no llegue se muestra un hueco */
  image?: CaseImage
}

export interface FaqItem {
  key: string
  question: string
  answer: string
}

export interface ContactContent extends SectionMeta {
  title: string
  intro: string
  faqTitle: string
  faq: FaqItem[]
}

/** Enlace a la versión de la página en otro idioma */
export interface LanguageLink {
  label: string
  href: string
  lang: Locale
}

/** Textos de la interfaz que no pertenecen a una sección concreta */
export interface UiLabels {
  skipToContent: string
  sectionsNav: string
  contact: string
  email: string
  nextSection: string
  backToTop: string
  menu: string
  closeMenu: string
  /** Aviso solo para lectores de pantalla en los enlaces que abren otra pestaña */
  opensInNewTab: string
  seeWork: string
  downloadCv: string
  writeEmail: string
  viewLinkedin: string
  mainStack: string
  present: string
  stack: string
  integrations: string
  articles: string
  caseSteps: Record<CaseStepKey, string>
  imagePending: string
  /** Texto para lectores de pantalla del botón que amplía la imagen de un caso */
  enlargeImage: string
  closeImage: string
  alternateLanguage: LanguageLink
}

export interface SiteContent {
  locale: Locale
  person: Person
  ui: UiLabels
  hero: HeroContent
  career: CareerContent
  cases: CaseStudy[]
  contact: ContactContent
}
