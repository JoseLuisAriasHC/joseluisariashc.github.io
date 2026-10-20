<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'
import type { SectionLink } from '@/content/navigation'
import type { Person, UiLabels } from '@/content/types'
import SiteFrameLogo from './SiteFrameLogo.vue'
import SiteFrameNav from './SiteFrameNav.vue'
import SiteFrameScrollCue from './SiteFrameScrollCue.vue'

const { ui, sections, activeIndex } = defineProps<{
  person: Person
  ui: UiLabels
  sections: SectionLink[]
  activeIndex: number
}>()

const homeHref = computed(() => `#${sections[0]?.id ?? ''}`)
const contactHref = computed(() => `#${sections.at(-1)?.id ?? ''}`)

// En la última sección el indicador lleva de vuelta al inicio
const scrollCue = computed(() => {
  const next = sections[activeIndex + 1]

  return next
    ? {
        href: `#${next.id}`,
        label: next.label,
        description: `${ui.nextSection}: ${next.label}`,
        direction: 'down' as const,
      }
    : {
        href: homeHref.value,
        label: ui.backToTop,
        description: ui.backToTop,
        direction: 'up' as const,
      }
})
</script>

<template>
  <div class="site-frame">
    <a
      class="site-frame__skip"
      href="#main"
    >
      {{ ui.skipToContent }}
    </a>

    <header class="site-frame__start">
      <SiteFrameLogo
        :name="person.name"
        :href="homeHref"
      />
      <SocialLinks
        class="site-frame__social"
        :links="person.links"
        :email-label="ui.email"
      />
    </header>

    <div class="site-frame__end">
      <div class="site-frame__actions">
        <a
          class="site-frame__language"
          :href="ui.alternateLanguage.href"
          :hreflang="ui.alternateLanguage.lang"
          :lang="ui.alternateLanguage.lang"
        >
          {{ ui.alternateLanguage.label }}
        </a>
        <BaseButton
          :href="contactHref"
          variant="outline"
        >
          {{ ui.contact }}
        </BaseButton>
      </div>
      <SiteFrameNav
        class="site-frame__nav"
        :items="sections"
        :active-index="activeIndex"
        :label="ui.sectionsNav"
      />
      <SiteFrameScrollCue
        class="site-frame__scroll-cue"
        v-bind="scrollCue"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
// Móvil: barra superior con el logo y las acciones. Escritorio: columnas fijas a los lados
.site-frame {
  position: fixed;
  inset: 0 0 auto;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--frame-inset);
  border-block-end: var(--line-width) solid var(--color-line);
  background-color: var(--color-bg);

  @include snap-layout {
    inset: 0;
    align-items: stretch;
    padding: var(--frame-inset);
    border-block-end: 0;
    background-color: transparent;
    // El marco cubre toda la ventana: solo sus elementos reciben clics, no el hueco central
    pointer-events: none;
  }

  &__skip {
    position: absolute;
    inset-block-start: var(--space-2);
    inset-inline-start: var(--space-2);
    padding: var(--space-2) var(--space-4);
    background-color: var(--color-text);
    color: var(--color-bg);
    transform: translateY(-200%);
    pointer-events: auto;

    &:focus-visible {
      transform: none;
    }
  }

  &__start,
  &__end {
    display: flex;
    align-items: center;
    gap: var(--space-4);

    @include snap-layout {
      flex-direction: column;
      justify-content: space-between;

      > * {
        pointer-events: auto;
      }
    }
  }

  &__start {
    @include snap-layout {
      align-items: flex-start;
    }
  }

  &__end {
    @include snap-layout {
      align-items: flex-end;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  &__language {
    color: var(--color-text-soft);
    font-size: var(--text-14);
    text-decoration-line: none;

    &:hover {
      color: var(--color-text);
      text-decoration-line: underline;
    }
  }

  // La navegación lateral y el pie de enlaces solo existen en escritorio; en móvil llegará un menú (fase 7)
  &__social,
  &__nav,
  &__scroll-cue {
    display: none;

    @include snap-layout {
      display: flex;
    }
  }

  &__social {
    @include snap-layout {
      flex-direction: column;
    }
  }
}
</style>
