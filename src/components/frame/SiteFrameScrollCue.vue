<script setup lang="ts">
defineProps<{
  href: string
  /** Texto visible: el nombre de la siguiente sección o «Volver arriba» */
  label: string
  /** Nombre accesible completo; incluye el texto visible */
  description: string
  direction: 'down' | 'up'
}>()
</script>

<template>
  <a
    :class="['site-frame-scroll-cue', `site-frame-scroll-cue--${direction}`]"
    :href="href"
    :aria-label="description"
  >
    {{ label }}
    <svg
      class="site-frame-scroll-cue__icon"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path
        d="M3 6l5 5 5-5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<style scoped lang="scss">
:where(.site-frame-scroll-cue) {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text-soft);
  font-size: var(--text-14);
  text-decoration-line: none;
}

.site-frame-scroll-cue {
  &__icon {
    width: 1rem;
    height: 1rem;
    transition: transform var(--duration-quick) var(--ease-out);
  }

  &:hover {
    color: var(--color-text);
  }

  &--down:hover &__icon {
    transform: translateY(2px);
  }

  &--up &__icon {
    rotate: 180deg;
  }

  &--up:hover &__icon {
    transform: translateY(-2px);
  }
}
</style>
