<script setup lang="ts">
import { computed, useTemplateRef } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseFlow from '@/components/base/BaseFlow.vue'
import SocialLinks from '@/components/common/SocialLinks.vue'
import type { SectionLink } from '@/content/navigation'
import type { Person, UiLabels } from '@/content/types'
import SiteFrameLogo from './SiteFrameLogo.vue'

const { sections } = defineProps<{
  person: Person
  ui: UiLabels
  sections: SectionLink[]
  activeIndex: number
}>()

const homeHref = computed(() => `#${sections[0]?.id ?? ''}`)

// <dialog> modal: el navegador mantiene el foco dentro, cierra con Escape y devuelve el foco al botón
const dialog = useTemplateRef<HTMLDialogElement>('dialog')

function open() {
  dialog.value?.showModal()
}

function close() {
  dialog.value?.close()
}
</script>

<template>
  <div class="site-frame-menu">
    <BaseButton
      variant="outline"
      aria-haspopup="dialog"
      @click="open"
    >
      {{ ui.menu }}
    </BaseButton>

    <dialog
      ref="dialog"
      class="site-frame-menu__dialog"
      :aria-label="ui.menu"
    >
      <div class="site-frame-menu__header">
        <SiteFrameLogo
          :name="person.name"
          :href="homeHref"
          @click="close"
        />
        <BaseButton
          variant="outline"
          @click="close"
        >
          {{ ui.closeMenu }}
        </BaseButton>
      </div>

      <nav :aria-label="ui.sectionsNav">
        <BaseFlow
          class="site-frame-menu__flow"
          :items="sections"
          :item-key="(section) => section.id"
          :active-index="activeIndex"
          ordered
        >
          <template #default="{ item, index }">
            <a
              class="site-frame-menu__link"
              :href="`#${item.id}`"
              :aria-current="index === activeIndex ? 'location' : undefined"
              @click="close"
            >
              {{ item.label }}
            </a>
          </template>
        </BaseFlow>
      </nav>

      <div class="site-frame-menu__footer">
        <a
          class="site-frame-menu__language"
          :href="ui.alternateLanguage.href"
          :hreflang="ui.alternateLanguage.lang"
          :lang="ui.alternateLanguage.lang"
        >
          {{ ui.alternateLanguage.label }}
        </a>
        <SocialLinks
          class="site-frame-menu__social"
          :links="person.links"
          :email-label="ui.email"
          :new-tab-label="ui.opensInNewTab"
        />
      </div>
    </dialog>
  </div>
</template>

<style scoped lang="scss">
.site-frame-menu {
  &__dialog {
    width: 100%;
    max-width: none;
    height: 100%;
    max-height: none;
    margin: 0;
    padding: var(--space-3) var(--frame-inset) var(--space-8);
    border: 0;
    background-color: var(--color-bg);
    color: var(--color-text);

    // Solo abierto: un <dialog> cerrado debe seguir oculto
    &[open] {
      display: flex;
      flex-direction: column;
      gap: var(--space-12);
    }

    &::backdrop {
      background-color: var(--color-bg);
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4);
  }

  // El nodo se alinea con los enlaces grandes (24 px con interlineado ajustado)
  &__flow {
    --flow-gap: var(--space-6);
    --node-offset: 0.5rem;
  }

  &__link {
    display: block;
    font-size: var(--text-24);
    font-weight: 600;
    font-stretch: var(--font-stretch-display);
    line-height: var(--leading-tight);
    text-decoration-line: none;
  }

  &__footer {
    display: grid;
    gap: var(--space-4);
    margin-block-start: auto;
  }

  // Igual que LinkedIn, GitHub y Correo: sin subrayado hasta pasar por encima
  &__language {
    justify-self: start;
    color: var(--color-text-soft);
    text-decoration-line: none;

    &:hover {
      color: var(--color-text);
      text-decoration-line: underline;
    }
  }

  &__social {
    font-size: var(--text-16);
  }
}
</style>
