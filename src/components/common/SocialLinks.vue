<script setup lang="ts">
import { computed } from 'vue'
import type { PersonLinks } from '@/content/types'

const { links, emailLabel } = defineProps<{
  links: PersonLinks
  emailLabel: string
  /** Aviso para lectores de pantalla en LinkedIn y GitHub, que se abren en otra pestaña */
  newTabLabel: string
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
        <span
          v-if="item.external"
          class="visually-hidden"
        >
          ({{ newTabLabel }})
        </span>
      </a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
// El tamaño va en el bloque para que quien lo use pueda cambiarlo con su propia clase
:where(.social-links) {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-4);
  padding: 0;
  font-size: var(--text-14);
  list-style: none;
}

.social-links__link {
  color: var(--color-text-soft);
  text-decoration-line: none;

  &:hover {
    color: var(--color-text);
    text-decoration-line: underline;
  }
}
</style>
