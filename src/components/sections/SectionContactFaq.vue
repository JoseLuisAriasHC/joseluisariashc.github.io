<script setup lang="ts">
import type { FaqItem } from '@/content/types'

defineProps<{
  title: string
  items: FaqItem[]
}>()
</script>

<template>
  <div class="section-contact-faq">
    <h3 class="section-contact-faq__title">{{ title }}</h3>
    <details
      v-for="item in items"
      :key="item.key"
      class="section-contact-faq__item"
    >
      <summary class="section-contact-faq__question">{{ item.question }}</summary>
      <p class="section-contact-faq__answer">{{ item.answer }}</p>
    </details>
  </div>
</template>

<style scoped lang="scss">
.section-contact-faq {
  &__title {
    margin-block-end: var(--space-4);
    color: var(--color-text-soft);
    font-size: var(--text-16);
  }

  &__item {
    border-block-start: var(--line-width) solid var(--color-line);

    &:last-child {
      border-block-end: var(--line-width) solid var(--color-line);
    }
  }

  // El nodo se rellena al abrir la respuesta
  &__question {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding-block: var(--space-4);
    font-weight: 500;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    &::before {
      content: '';
      flex: none;
      width: var(--node-size);
      height: var(--node-size);
      border: var(--line-width) solid var(--color-signal);
      border-radius: 50%;
      transition: background-color var(--duration-quick) var(--ease-out);
    }
  }

  &__item[open] &__question::before {
    background-color: var(--color-signal);
  }

  &__answer {
    max-width: var(--measure);
    padding-block-end: var(--space-4);
    padding-inline-start: calc(var(--node-size) + var(--space-3));
    color: var(--color-text-soft);
    font-size: var(--text-16);
  }
}
</style>
