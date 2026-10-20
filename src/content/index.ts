import type { Locale } from './locale'
import type { SiteContent } from './types'
import { en } from './en'
import { es } from './es'

export const contentByLocale: Record<Locale, SiteContent> = { es, en }
