<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { Locale } from '@/content/locale'

const { locale } = defineProps<{ locale: Locale }>()

// Vista previa de la fase 2 (tipografía, fondo y scroll); se sustituye por las secciones reales
const alternate = computed(() =>
  locale === 'es'
    ? { href: '/en/', lang: 'en', label: 'English' }
    : { href: '/', lang: 'es', label: 'Español' },
)
</script>

<template>
  <BaseSection
    id="inicio"
    class="preview"
  >
    <p class="preview__name">Jose Luis Arias</p>
    <h1 class="preview__title">Desarrollo backend y automatización</h1>
    <p class="preview__stack">C# · .NET · SQL Server · n8n</p>
    <p class="preview__text">
      Me gusta entender cómo funciona un proceso, detectar dónde se complica y convertirlo en una
      solución que resulte más sencilla de utilizar y mantener.
    </p>
    <a
      class="preview__link"
      :href="alternate.href"
      :hreflang="alternate.lang"
    >
      {{ alternate.label }}
    </a>
  </BaseSection>

  <BaseSection
    id="trayectoria"
    class="preview"
  >
    <h2 class="preview__heading">Trayectoria y formación</h2>
    <p class="preview__text">
      Desarrollo aplicaciones web con C#, .NET y SQL Server, modernizo sistemas existentes y
      automatizo procesos empresariales con n8n.
    </p>
  </BaseSection>
</template>

<style scoped lang="scss">
.preview {
  &__name {
    color: var(--color-text-soft);
    font-size: var(--text-21);
  }

  &__title {
    max-width: 14ch;
    margin-block: var(--space-4) var(--space-6);
    font-size: clamp(var(--text-36), 6vw, var(--text-60));
  }

  &__heading {
    margin-block-end: var(--space-6);
    font-size: clamp(var(--text-24), 4vw, var(--text-48));
  }

  &__stack {
    color: var(--color-text-soft);
    font-size: var(--text-21);
  }

  &__text {
    max-width: var(--measure);
    margin-block: var(--space-6) var(--space-8);
  }
}
</style>
