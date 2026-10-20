<script setup lang="ts">
import { computed } from 'vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { SiteContent } from '@/content/types'

const { content } = defineProps<{ content: SiteContent }>()

// Vista previa de las fases 2 y 3; se sustituye por las secciones reales en la fase 5
const stackLine = computed(() => content.hero.stack.join(' · '))
const currentJob = computed(() => content.career.jobs[0])
</script>

<template>
  <BaseSection
    :id="content.hero.id"
    class="preview"
  >
    <p class="preview__name">{{ content.person.name }}</p>
    <h1 class="preview__title">{{ content.hero.headline }}</h1>
    <p class="preview__stack">{{ stackLine }}</p>
    <p class="preview__text">{{ content.hero.intro }}</p>
    <a
      :href="content.ui.alternateLanguage.href"
      :hreflang="content.ui.alternateLanguage.lang"
    >
      {{ content.ui.alternateLanguage.label }}
    </a>
  </BaseSection>

  <BaseSection
    :id="content.career.id"
    class="preview"
  >
    <h2 class="preview__heading">{{ content.career.title }}</h2>
    <p
      v-if="currentJob"
      class="preview__text"
    >
      {{ currentJob.summary }}
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
