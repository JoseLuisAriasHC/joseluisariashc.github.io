<script setup lang="ts">
defineProps<{
  heading: string
  /** Empresa o centro y periodo: «Dreams, oct 2025 – actualidad» */
  meta: string
  summary: string
}>()
</script>

<template>
  <article class="section-career-item">
    <h4 class="section-career-item__heading">{{ heading }}</h4>
    <p class="section-career-item__meta">{{ meta }}</p>
    <p class="section-career-item__summary">{{ summary }}</p>
    <slot />
  </article>
</template>

<style scoped lang="scss">
.section-career-item {
  &__meta {
    margin-block-start: var(--space-1);
    color: var(--color-text-soft);
    font-size: var(--text-14);
  }

  &__summary {
    max-width: var(--measure);
    margin-block-start: var(--space-2);
    font-size: var(--text-16);
  }
}
</style>
