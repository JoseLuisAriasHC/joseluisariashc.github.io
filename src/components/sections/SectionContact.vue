<script setup lang="ts">
import { useId } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { ContactContent, Person, UiLabels } from '@/content/types'
import SectionContactEmail from './SectionContactEmail.vue'
import SectionContactFaq from './SectionContactFaq.vue'

defineProps<{
  contact: ContactContent
  person: Person
  ui: UiLabels
}>()

const headingId = useId()
</script>

<template>
  <BaseSection
    :id="contact.id"
    class="section-contact"
    :aria-labelledby="headingId"
  >
    <div class="section-contact__layout">
      <div>
        <h2
          :id="headingId"
          class="section-contact__title"
        >
          {{ contact.title }}
        </h2>
        <p class="section-contact__intro">{{ contact.intro }}</p>
        <div class="section-contact__actions">
          <BaseButton :href="`mailto:${person.links.email}`">{{ ui.writeEmail }}</BaseButton>
          <BaseButton
            :href="person.links.linkedin"
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ ui.viewLinkedin }}
            <span class="visually-hidden">({{ ui.opensInNewTab }})</span>
          </BaseButton>
        </div>
        <SectionContactEmail
          class="section-contact__email"
          :email="person.links.email"
          :copy-label="ui.copyEmail"
          :copied-label="ui.emailCopied"
        />
      </div>

      <SectionContactFaq
        :title="contact.faqTitle"
        :items="contact.faq"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.section-contact {
  &__layout {
    display: grid;
    gap: var(--space-16);

    @include mq(lg) {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      align-items: start;
    }
  }

  &__intro {
    max-width: var(--measure);
    margin-block-start: var(--space-6);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-block-start: var(--space-8);
  }

  &__email {
    margin-block-start: var(--space-4);
    color: var(--color-text-soft);
    font-size: var(--text-14);
  }
}
</style>
