<script setup lang="ts">
defineProps<{
  name: string
  href: string
}>()
</script>

<template>
  <a
    class="site-frame-logo"
    :href="href"
  >
    <span
      class="site-frame-logo__node"
      aria-hidden="true"
    />
    <span class="site-frame-logo__name">{{ name }}</span>
  </a>
</template>

<style scoped lang="scss">
:where(.site-frame-logo) {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-text);
  font-size: var(--text-18);
  font-weight: 600;
  font-stretch: var(--font-stretch-display);
  text-decoration: none;
}

.site-frame-logo__node {
  width: var(--node-size);
  height: var(--node-size);
  border-radius: 50%;
  background-color: var(--color-signal);
  transition: box-shadow var(--duration-quick) var(--ease-out);
}

// Subrayado que se dibuja desde el principio del nombre: el de los enlaces, hecho con la línea
.site-frame-logo__name {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset-inline: 0;
    inset-block-end: -0.2em;
    height: var(--line-width);
    background-color: var(--color-signal);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform var(--duration-base) var(--ease-out);
  }
}

// Con ratón al pasar por encima y con teclado al llegar con el foco
@mixin logo-active {
  .site-frame-logo__node {
    box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--color-signal) 25%, transparent);
  }

  .site-frame-logo__name::after {
    transform: none;
  }
}

@media (hover: hover) {
  .site-frame-logo:hover {
    @include logo-active;
  }
}

.site-frame-logo:focus-visible {
  @include logo-active;
}
</style>
