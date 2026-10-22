import type { Locale } from './locale'

/** Clave de cada caso, igual en todos los idiomas (los enlaces de la trayectoria la usan) */
export type CaseKey = 'admin-panel' | 'automation' | 'migration'

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
  /** Casos que se enlazan desde este puesto */
  cases?: CaseKey[]
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

export interface CaseStudy extends SectionMeta {
  key: CaseKey
  title: string
  company: string
  steps: Record<CaseStepKey, string>
  stack: string[]
  /** Foto representativa; mientras no llegue se muestra un hueco */
  image?: { src: string; alt: string }
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
  featuredWork: string
  stack: string
  caseSteps: Record<CaseStepKey, string>
  imagePending: string
  alternateLanguage: { label: string; href: string; lang: Locale }
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
