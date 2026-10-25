<script setup lang="ts">
import { computed, useId } from 'vue'
import BaseFlow from '@/components/base/BaseFlow.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { CaseStepKey, CaseStudy, UiLabels } from '@/content/types'
import SectionCaseImage from './SectionCaseImage.vue'

const { study, ui } = defineProps<{
  study: CaseStudy
  ui: UiLabels
}>()

const STEP_ORDER: CaseStepKey[] = ['context', 'contribution', 'solution', 'result']

// Ancho con el que se muestra la imagen: la columna lateral en escritorio y, en una sola
// columna, el ancho del contenido hasta 36rem (el límite de __aside)
const IMAGE_SIZES = '(min-width: 62rem) 27rem, (min-width: 39rem) 36rem, calc(100vw - 3rem)'

const headingId = useId()

const steps = computed(() =>
  STEP_ORDER.map((key) => ({
    key,
    label: ui.caseSteps[key],
    paragraphs: [study.steps[key]].flat(),
  })),
)

const techGroups = computed(() =>
  [
    { key: 'stack', label: ui.stack, items: study.stack },
    { key: 'integrations', label: ui.integrations, items: study.integrations ?? [] },
  ].filter((group) => group.items.length),
)
</script>

<template>
  <BaseSection
    :id="study.id"
    class="section-case"
    :aria-labelledby="headingId"
  >
    <div class="section-case__layout">
      <header class="section-case__header">
        <h2
          :id="headingId"
          class="section-case__title"
        >
          {{ study.title }}
        </h2>
        <p class="section-case__company">{{ study.company }}</p>
      </header>

      <BaseFlow
        class="section-case__steps"
        :items="steps"
        :item-key="(step) => step.key"
        ordered
        mark-hover
      >
        <template #default="{ item }">
          <h3 class="section-case__step-label">{{ item.label }}</h3>
          <p
            v-for="(paragraph, index) in item.paragraphs"
            :key="index"
            class="section-case__step-text"
          >
            {{ paragraph }}
          </p>
        </template>
      </BaseFlow>

      <div class="section-case__aside">
        <SectionCaseImage
          v-if="study.image"
          :image="study.image"
          :sizes="IMAGE_SIZES"
          :enlarge-label="ui.enlargeImage"
          :close-label="ui.closeImage"
        />
        <div
          v-else
          class="section-case__pending"
        >
          {{ ui.imagePending }}
        </div>

        <dl class="section-case__meta">
          <div
            v-for="group in techGroups"
            :key="group.key"
            class="section-case__meta-group"
          >
            <dt class="section-case__meta-label">{{ group.label }}</dt>
            <dd>
              <ul
                class="section-case__tech-list"
                role="list"
              >
                <li
                  v-for="item in group.items"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </dd>
          </div>

          <div
            v-if="study.articles?.length"
            class="section-case__meta-group"
          >
            <dt class="section-case__meta-label">{{ ui.articles }}</dt>
            <dd>
              <ul
                class="section-case__articles"
                role="list"
              >
                <li
                  v-for="article in study.articles"
                  :key="article.href"
                >
                  <a
                    :href="article.href"
                    :hreflang="article.lang"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ article.title }}
                    <span class="visually-hidden">({{ ui.opensInNewTab }})</span>
                  </a>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.section-case {
  &__layout {
    display: grid;
    gap: var(--space-8);

    @include mq(lg) {
      grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
      grid-template-areas:
        'header aside'
        'steps aside';
      column-gap: var(--space-16);
    }
  }

  &__header {
    @include mq(lg) {
      grid-area: header;
    }
  }

  &__company {
    margin-block-start: var(--space-2);
    color: var(--color-text-soft);
    font-size: var(--text-16);
  }

  // El nodo se alinea con la etiqueta de cada paso (h3 a 18 px)
  &__steps {
    --flow-gap: var(--space-6);
    --node-offset: 0.25rem;

    @include mq(lg) {
      grid-area: steps;
    }
  }

  &__step-text {
    max-width: var(--measure);
    margin-block-start: var(--space-1);
    color: var(--color-text-soft);
    font-size: var(--text-16);

    & + & {
      margin-block-start: var(--space-3);
    }
  }

  // En una sola columna (móvil y tablet) la imagen no ocupa todo el ancho
  &__aside {
    max-width: 36rem;

    @include mq(lg) {
      grid-area: aside;
      align-self: center;
    }
  }

  // El borde separa la imagen del fondo aunque comparta sus colores
  // Hueco hasta que llegue la imagen
  &__pending {
    display: grid;
    place-items: center;
    aspect-ratio: 4 / 3;
    border: var(--line-width) dashed var(--color-line);
    border-radius: var(--space-3);
    color: var(--color-text-soft);
    font-size: var(--text-14);
  }

  // Tabla de dos columnas: la etiqueta a la izquierda y sus elementos alineados a la derecha
  &__meta {
    display: grid;
    grid-template-columns: max-content minmax(0, 1fr);
    gap: var(--space-2) var(--space-4);
    margin-block-start: var(--space-4);
    font-size: var(--text-14);
  }

  &__meta-group {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;
  }

  &__meta-label {
    font-weight: 600;
  }

  &__tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1) var(--space-4);
    padding: 0;
    list-style: none;
    color: var(--color-text-soft);
  }

  // Un artículo por línea: los títulos son largos
  &__articles {
    display: grid;
    gap: var(--space-2);
    padding: 0;
    list-style: none;
  }
}
</style>
