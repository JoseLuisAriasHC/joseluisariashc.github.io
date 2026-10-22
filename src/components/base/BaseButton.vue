<script setup lang="ts">
// Con href es un enlace; sin href, un <button> que avisa de sus clics por fallthrough (@click)
const { href = undefined, variant = 'solid' } = defineProps<{
  href?: string
  variant?: 'solid' | 'outline'
}>()
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :type="href ? undefined : 'button'"
    :class="['base-button', `base-button--${variant}`]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
:where(.base-button) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding-inline: var(--space-6);
  border: var(--line-width) solid var(--color-signal);
  border-radius: 999px;
  // Un <button> trae fondo gris del navegador; un enlace no
  background-color: transparent;
  font-size: var(--text-16);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color var(--duration-quick) var(--ease-out),
    color var(--duration-quick) var(--ease-out);
}

// Sobre Salvia el texto va en Noche: la Salvia nunca es color de texto
.base-button {
  &--solid {
    background-color: var(--color-signal);
    color: var(--color-bg);

    &:hover {
      background-color: var(--color-text-soft);
    }
  }

  &--outline {
    color: var(--color-text);

    &:hover {
      background-color: var(--color-signal);
      color: var(--color-bg);
    }
  }
}
</style>
