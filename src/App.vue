<script setup lang="ts">
import { computed } from 'vue'
import SiteFrame from '@/components/frame/SiteFrame.vue'
import SectionCareer from '@/components/sections/SectionCareer.vue'
import SectionCase from '@/components/sections/SectionCase.vue'
import SectionContact from '@/components/sections/SectionContact.vue'
import SectionHero from '@/components/sections/SectionHero.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { sectionLinks } from '@/content/navigation'
import type { SiteContent } from '@/content/types'

const { content } = defineProps<{ content: SiteContent }>()

const sections = computed(() => sectionLinks(content))
const workHref = computed(() => `#${content.cases[0]?.id ?? ''}`)

const { activeIndex } = useActiveSection(
  sections.value.map((section) => section.id),
  { syncHash: true },
)
</script>

<template>
  <SiteFrame
    :person="content.person"
    :ui="content.ui"
    :sections="sections"
    :active-index="activeIndex"
  />

  <main
    id="main"
    class="app-main"
    tabindex="-1"
  >
    <SectionHero
      :hero="content.hero"
      :person="content.person"
      :ui="content.ui"
      :work-href="workHref"
    />
    <SectionCareer
      :career="content.career"
      :ui="content.ui"
      :locale="content.locale"
    />
    <SectionCase
      v-for="study in content.cases"
      :key="study.key"
      :study="study"
      :ui="content.ui"
    />
    <SectionContact
      :contact="content.contact"
      :person="content.person"
      :ui="content.ui"
    />
  </main>
</template>

<style scoped lang="scss">
// El salto «Saltar al contenido» enfoca <main>; no necesita contorno
.app-main:focus {
  outline: none;
}
</style>
