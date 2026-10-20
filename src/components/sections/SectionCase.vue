<script setup lang="ts">
import { computed, useId } from 'vue'
import BaseFlow from '@/components/base/BaseFlow.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { CaseStepKey, CaseStudy, UiLabels } from '@/content/types'

const { study, ui } = defineProps<{
  study: CaseStudy
  ui: UiLabels
}>()

const STEP_ORDER: CaseStepKey[] = ['context', 'contribution', 'solution', 'result']

const headingId = useId()

const steps = computed(() =>
  STEP_ORDER.map((key) => ({ key, label: ui.caseSteps[key], text: study.steps[key] })),
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
      >
        <template #default="{ item }">
          <h3 class="section-case__step-label">{{ item.label }}</h3>
          <p class="section-case__step-text">{{ item.text }}</p>
        </template>
      </BaseFlow>

      <div class="section-case__aside">
        <img
          v-if="study.image"
          class="section-case__media"
          :src="study.image.src"
          :alt="study.image.alt"
          loading="lazy"
          decoding="async"
        />
        <div
          v-else
          class="section-case__media section-case__media--pending"
        >
          {{ ui.imagePending }}
        </div>

        <ul
          class="section-case__stack"
          role="list"
          :aria-label="ui.stack"
        >
          <li
            v-for="tech in study.stack"
            :key="tech"
          >
            {{ tech }}
          </li>
        </ul>
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
  }

  &__aside {
    @include mq(lg) {
      grid-area: aside;
      align-self: center;
    }
  }

  &__media {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: var(--space-3);
    object-fit: cover;

    // Hueco hasta que llegue la foto representativa
    &--pending {
      display: grid;
      place-items: center;
      border: var(--line-width) dashed var(--color-line);
      color: var(--color-text-soft);
      font-size: var(--text-14);
    }
  }

  &__stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1) var(--space-4);
    margin-block-start: var(--space-4);
    padding: 0;
    list-style: none;
    color: var(--color-text-soft);
    font-size: var(--text-14);
  }
}
</style>
