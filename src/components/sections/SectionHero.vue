<script setup lang="ts">
import { useId } from 'vue'
import portrait480 from '@/assets/img/portrait-480.webp'
import portrait960 from '@/assets/img/portrait-960.webp'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import type { HeroContent, Person, UiLabels } from '@/content/types'

defineProps<{
  hero: HeroContent
  person: Person
  ui: UiLabels
  /** Ancla del primer caso */
  workHref: string
}>()

const headingId = useId()
const portraitSrcset = `${portrait480} 480w, ${portrait960} 960w`
</script>

<template>
  <BaseSection
    :id="hero.id"
    class="section-hero"
    :aria-labelledby="headingId"
  >
    <div class="section-hero__layout">
      <div class="section-hero__photo">
        <div class="section-hero__frame">
          <img
            class="section-hero__image"
            :src="portrait960"
            :srcset="portraitSrcset"
            sizes="(min-width: 48rem) 26rem, 10rem"
            :alt="hero.photoAlt"
            width="960"
            height="960"
            fetchpriority="high"
          />
        </div>
      </div>

      <h1
        :id="headingId"
        class="section-hero__headline"
      >
        {{ hero.headline }}
      </h1>

      <ul
        class="section-hero__stack"
        role="list"
        :aria-label="ui.mainStack"
      >
        <li
          v-for="tech in hero.stack"
          :key="tech"
          class="section-hero__tech"
        >
          {{ tech }}
        </li>
      </ul>

      <div class="section-hero__body">
        <p class="section-hero__intro">{{ hero.intro }}</p>
        <div class="section-hero__actions">
          <BaseButton :href="workHref">{{ ui.seeWork }}</BaseButton>
          <BaseButton
            v-if="person.links.cv"
            :href="person.links.cv"
            variant="outline"
            download
          >
            {{ ui.downloadCv }}
          </BaseButton>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
// El tramo de línea que entra por la izquierda no debe crear scroll horizontal
.section-hero {
  overflow-x: clip;

  &__layout {
    --hero-gap: var(--space-16);

    display: grid;
    row-gap: var(--space-6);

    @include mq(md) {
      grid-template-columns: minmax(0, 1fr) auto;
      column-gap: var(--hero-gap);
    }
  }

  // En escritorio la foto ocupa solo la fila de las tecnologías (altura cero) y se centra
  // sobre ella, así la línea llega siempre al centro del círculo
  &__photo {
    --photo-size: 10rem;

    position: relative;
    width: var(--photo-size);

    @include mq(md) {
      --photo-size: clamp(14rem, 26vw, 26rem);

      grid-column: 2;
      grid-row: 2;
      align-self: center;
      height: 0;

      &::before {
        content: '';
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 100%;
        width: var(--hero-gap);
        height: var(--line-width);
        background-color: var(--color-line);
      }
    }
  }

  // El círculo de la foto es el nodo final de la línea
  &__frame {
    aspect-ratio: 1;
    padding: var(--space-2);
    border: var(--line-width) solid var(--color-signal);
    border-radius: 50%;

    @include mq(md) {
      position: absolute;
      inset-inline: 0;
      inset-block-start: 50%;
      transform: translateY(-50%);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  &__headline {
    max-width: 14ch;

    @include mq(md) {
      grid-column: 1;
      grid-row: 1;
    }
  }

  // Las tecnologías son nodos sobre la línea que acaba en la foto
  &__stack {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    row-gap: var(--space-2);
    padding: 0;
    list-style: none;
    color: var(--color-text-soft);
    font-size: var(--text-21);

    @include mq(md) {
      grid-column: 1;
      grid-row: 2;
      flex-wrap: nowrap;

      // Tramo que entra desde el borde izquierdo de la ventana
      &::before {
        content: '';
        position: absolute;
        inset-block-start: 50%;
        inset-inline-end: 100%;
        width: 100vw;
        height: var(--line-width);
        background-color: var(--color-line);
      }
    }
  }

  &__tech {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    white-space: nowrap;

    &::before {
      content: '';
      flex: none;
      width: var(--node-size);
      height: var(--node-size);
      margin-inline-end: var(--space-3);
      border-radius: 50%;
      background-color: var(--color-signal);
    }

    // Tramo hasta la siguiente tecnología; el último continúa hasta la foto
    &::after {
      content: '';
      flex: 1 0 var(--space-6);
      height: var(--line-width);
      margin-inline: var(--space-3);
      background-color: var(--color-line);
    }

    &:last-child::after {
      margin-inline-end: 0;
    }
  }

  &__body {
    @include mq(md) {
      grid-column: 1;
      grid-row: 3;
    }
  }

  &__intro {
    max-width: var(--measure);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-4);
    margin-block-start: var(--space-8);
  }
}
</style>
