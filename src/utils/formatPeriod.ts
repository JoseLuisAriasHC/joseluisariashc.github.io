import type { Locale } from '@/content/locale'
import type { Period } from '@/content/types'

/** «oct 2025 – actualidad», «ene 2025 – oct 2025» o «Jan 2025 – Oct 2025», según el idioma */
export function formatPeriod(period: Period, locale: Locale, presentLabel: string): string {
  const format = new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
  const toDate = (yearMonth: string) => new Date(`${yearMonth}-01T00:00:00Z`)

  const start = format.format(toDate(period.start))
  const end = period.end ? format.format(toDate(period.end)) : presentLabel

  return `${start} – ${end}`
}
