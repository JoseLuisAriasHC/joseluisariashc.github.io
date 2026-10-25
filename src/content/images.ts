import b2bPlatform800 from '@/assets/img/cases/plataforma-b2b-800.webp'
import b2bPlatform1448 from '@/assets/img/cases/plataforma-b2b-1448.webp'
import type { CaseImageSource, CaseKey } from './types'

// Las imágenes son las mismas en todos los idiomas; cada idioma añade su texto alternativo
export const caseImages = {
  'b2b-platform': {
    src: b2bPlatform1448,
    srcset: `${b2bPlatform800} 800w, ${b2bPlatform1448} 1448w`,
  },
} satisfies Partial<Record<CaseKey, CaseImageSource>>
