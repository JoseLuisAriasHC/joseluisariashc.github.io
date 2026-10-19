<script setup lang="ts">
import { computed } from 'vue'
import type { Locale } from '@/content/locale'

const { locale } = defineProps<{ locale: Locale }>()

// Marcador de la fase 1: comprueba que cada entrada HTML llega con su idioma
const alternate = computed(() =>
  locale === 'es'
    ? { href: '/en/', lang: 'en', label: 'English' }
    : { href: '/', lang: 'es', label: 'Español' },
)
</script>

<template>
  <main class="app">
    <h1 class="app__title">Jose Luis Arias</h1>
    <a
      class="app__lang"
      :href="alternate.href"
      :hreflang="alternate.lang"
    >
      {{ alternate.label }}
    </a>
  </main>
</template>

<style scoped lang="scss">
.app {
  display: grid;
  place-content: center;
  gap: 1rem;
  min-height: 100svh;
  padding-inline: 1rem;
  text-align: center;

  @include mq(lg) {
    gap: 1.5rem;
  }

  &__title {
    margin: 0;
    font-size: clamp(2rem, 6vw, 4rem);
  }

  &__lang {
    color: var(--color-accent);
  }
}
</style>
