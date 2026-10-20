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
    {{ name }}
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
}
</style>
