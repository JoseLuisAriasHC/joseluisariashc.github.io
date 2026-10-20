<script setup lang="ts">
import { computed } from 'vue'
import type { PersonLinks } from '@/content/types'

const { links, emailLabel } = defineProps<{
  links: PersonLinks
  emailLabel: string
}>()

const items = computed(() => [
  { key: 'linkedin', label: 'LinkedIn', href: links.linkedin, external: true },
  { key: 'github', label: 'GitHub', href: links.github, external: true },
  { key: 'email', label: emailLabel, href: `mailto:${links.email}`, external: false },
])
</script>

<template>
  <ul
    class="social-links"
    role="list"
  >
    <li
      v-for="item in items"
      :key="item.key"
    >
      <a
        class="social-links__link"
        :href="item.href"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
      >
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
:where(.social-links) {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  padding: 0;
  list-style: none;
}

.social-links__link {
  color: var(--color-text-soft);
  font-size: var(--text-14);
  text-decoration-line: none;

  &:hover {
    color: var(--color-text);
    text-decoration-line: underline;
  }
}
</style>
