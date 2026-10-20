<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '@/components/base/BaseSection.vue'
import SiteFrame from '@/components/frame/SiteFrame.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { sectionLinks } from '@/content/navigation'
import type { SiteContent } from '@/content/types'

const { content } = defineProps<{ content: SiteContent }>()

const sections = computed(() => sectionLinks(content))
const { activeIndex } = useActiveSection(
  sections.value.map((section) => section.id),
  { syncHash: true },
)

// Vista previa hasta la fase 5: la portada con su texto y el resto de secciones solo con su nombre
const stackLine = computed(() => content.hero.stack.join(' · '))
const pendingSections = computed(() => sections.value.slice(1))
</script>

<template>
  <SiteFrame
    :person="content.person"
    :ui="content.ui"
    :sections="sections"
    :active-index="activeIndex"
  />

  <main
    id="main"
    class="app-main"
    tabindex="-1"
  >
    <BaseSection
      :id="content.hero.id"
      class="preview"
    >
      <h1 class="preview__title">{{ content.hero.headline }}</h1>
      <p class="preview__stack">{{ stackLine }}</p>
      <p class="preview__text">{{ content.hero.intro }}</p>
    </BaseSection>

    <BaseSection
      v-for="section in pendingSections"
      :id="section.id"
      :key="section.id"
      class="preview"
    >
      <h2 class="preview__heading">{{ section.label }}</h2>
    </BaseSection>
  </main>
</template>

<style scoped lang="scss">
// El salto «Saltar al contenido» enfoca <main>; no necesita contorno
.app-main:focus {
  outline: none;
}

.preview {
  &__title {
    max-width: 14ch;
    margin-block-end: var(--space-6);
    font-size: clamp(var(--text-36), 6vw, var(--text-60));
  }

  &__heading {
    font-size: clamp(var(--text-24), 4vw, var(--text-48));
  }

  &__stack {
    color: var(--color-text-soft);
    font-size: var(--text-21);
  }

  &__text {
    max-width: var(--measure);
    margin-block-start: var(--space-6);
  }
}
</style>
