<script setup lang="ts">
import type { SectionLink } from '@/content/navigation'

defineProps<{
  items: SectionLink[]
  activeIndex: number
  label: string
}>()
</script>

<template>
  <nav
    class="site-frame-nav"
    :aria-label="label"
    :style="{ '--active-index': activeIndex }"
  >
    <ol
      class="site-frame-nav__list"
      role="list"
    >
      <li
        v-for="(item, index) in items"
        :key="item.id"
      >
        <a
          class="site-frame-nav__link"
          :href="`#${item.id}`"
          :aria-current="index === activeIndex ? 'location' : undefined"
        >
          <span class="site-frame-nav__label">{{ item.label }}</span>
          <span
            class="site-frame-nav__node"
            aria-hidden="true"
          />
        </a>
      </li>
    </ol>
    <span
      class="site-frame-nav__indicator"
      aria-hidden="true"
    />
  </nav>
</template>

<style scoped lang="scss">
:where(.site-frame-nav) {
  --nav-step: 2.5rem;

  position: relative;
}

.site-frame-nav {
  &__list {
    position: relative;
    padding: 0;
    list-style: none;

    // La línea que une los nodos
    &::before {
      content: '';
      position: absolute;
      inset-block: calc(var(--nav-step) / 2);
      inset-inline-end: calc((var(--node-size) - var(--line-width)) / 2);
      width: var(--line-width);
      background-color: var(--color-line);
    }
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--space-3);
    height: var(--nav-step);
    color: var(--color-text-soft);
    font-size: var(--text-14);
    text-decoration-line: none;

    &[aria-current] {
      color: var(--color-text);
    }
  }

  // El nombre solo se ve en la sección activa, al pasar el ratón o con el foco del teclado
  &__label {
    opacity: 0;
    transform: translateX(var(--space-2));
    transition:
      opacity var(--duration-quick) var(--ease-out),
      transform var(--duration-quick) var(--ease-out);
  }

  &__link:hover &__label,
  &__link:focus-visible &__label,
  &__link[aria-current] &__label {
    opacity: 1;
    transform: none;
  }

  // Relleno en Pino para tapar la línea: el menú queda sobre la zona verde del degradado
  &__node {
    position: relative;
    flex: none;
    width: var(--node-size);
    height: var(--node-size);
    border: var(--line-width) solid var(--color-signal);
    border-radius: 50%;
    background-color: var(--color-bg-deep);
  }

  // El nodo relleno recorre la línea hasta la sección activa
  &__indicator {
    position: absolute;
    inset-block-start: calc((var(--nav-step) - var(--node-size)) / 2);
    inset-inline-end: 0;
    width: var(--node-size);
    height: var(--node-size);
    border-radius: 50%;
    background-color: var(--color-signal);
    transform: translateY(calc(var(--active-index) * var(--nav-step)));
    transition: transform var(--duration-base) var(--ease-out);
    pointer-events: none;
  }
}
</style>
