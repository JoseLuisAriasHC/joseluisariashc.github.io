import automation840 from '@/assets/img/cases/automatizacion-840.webp'
import automationFlow from '@/assets/img/cases/automatizacion-flujo.webp'
import newsSelection1000 from '@/assets/img/cases/noticias-ia-1000.webp'
import newsSelectionFlow from '@/assets/img/cases/noticias-ia-flujo.webp'
import adminPanel800 from '@/assets/img/cases/panel-administracion-800.webp'
import adminPanel1448 from '@/assets/img/cases/panel-administracion-1448.webp'
import b2bPlatform800 from '@/assets/img/cases/plataforma-b2b-800.webp'
import b2bPlatform1448 from '@/assets/img/cases/plataforma-b2b-1448.webp'
import type { CaseImageSource, CaseKey } from './types'

// Las imágenes son las mismas en todos los idiomas; cada idioma añade su texto alternativo
export const caseImages = {
  'b2b-platform': {
    src: b2bPlatform1448,
    srcset: `${b2bPlatform800} 800w, ${b2bPlatform1448} 1448w`,
  },
  // Capturas reales de n8n: la miniatura es un recorte y la vista ampliada, el flujo completo
  automation: {
    src: automation840,
    srcset: `${automation840} 840w`,
    zoom: automationFlow,
  },
  // Recorte de la franja de los dos agentes, con el fondo del lienzo prolongado hasta 4:3
  'news-selection': {
    src: newsSelection1000,
    srcset: `${newsSelection1000} 1000w`,
    zoom: newsSelectionFlow,
  },
  'admin-panel': {
    src: adminPanel1448,
    srcset: `${adminPanel800} 800w, ${adminPanel1448} 1448w`,
  },
} satisfies Partial<Record<CaseKey, CaseImageSource>>
