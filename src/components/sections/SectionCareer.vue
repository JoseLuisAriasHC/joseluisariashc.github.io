<script setup lang="ts">
import { computed, useId } from 'vue'
import BaseFlow from '@/components/base/BaseFlow.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { Locale } from '@/content/locale'
import type { CareerContent, UiLabels } from '@/content/types'
import { formatPeriod } from '@/utils/formatPeriod'
import SectionCareerItem from './SectionCareerItem.vue'

const { career, ui, locale } = defineProps<{
  career: CareerContent
  ui: UiLabels
  locale: Locale
}>()

const headingId = useId()

const jobs = computed(() =>
  career.jobs.map((job) => ({
    key: job.key,
    heading: job.role,
    meta: `${job.company}, ${formatPeriod(job.period, locale, ui.present)}`,
    summary: job.summary,
  })),
)

const education = computed(() =>
  career.education.map((item) => ({
    key: item.key,
    heading: item.title,
    meta: `${item.center}, ${formatPeriod(item.period, locale, ui.present)}`,
    summary: item.summary,
    grade: item.grade,
  })),
)
</script>

<template>
  <BaseSection
    :id="career.id"
    class="section-career"
    :aria-labelledby="headingId"
  >
    <h2
      :id="headingId"
      class="section-career__title"
    >
      {{ career.title }}
    </h2>

    <div class="section-career__columns">
      <div>
        <h3 class="section-career__subtitle">{{ career.experienceTitle }}</h3>
        <BaseFlow
          class="section-career__flow"
          :items="jobs"
          :item-key="(job) => job.key"
        >
          <template #default="{ item }">
            <SectionCareerItem
              :heading="item.heading"
              :meta="item.meta"
              :summary="item.summary"
            />
          </template>
        </BaseFlow>
      </div>

      <div>
        <h3 class="section-career__subtitle">{{ career.educationTitle }}</h3>
        <BaseFlow
          class="section-career__flow"
          :items="education"
          :item-key="(item) => item.key"
        >
          <template #default="{ item }">
            <SectionCareerItem
              :heading="item.heading"
              :meta="item.meta"
              :summary="item.summary"
            >
              <p
                v-if="item.grade"
                class="section-career__grade"
              >
                {{ item.grade }}
              </p>
            </SectionCareerItem>
          </template>
        </BaseFlow>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.section-career {
  &__title {
    margin-block-end: var(--space-12);
  }

  &__columns {
    display: grid;
    gap: var(--space-12);

    @include mq(lg) {
      grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
      column-gap: var(--space-16);
    }
  }

  &__subtitle {
    margin-block-end: var(--space-6);
    color: var(--color-text-soft);
    font-size: var(--text-16);
  }

  // El nodo se alinea con la primera línea del puesto (h4 a 18 px)
  &__flow {
    --flow-gap: var(--space-8);
    --node-offset: 0.25rem;
  }

  &__grade {
    margin-block-start: var(--space-2);
    color: var(--color-text-soft);
    font-size: var(--text-14);
  }
}
</style>
