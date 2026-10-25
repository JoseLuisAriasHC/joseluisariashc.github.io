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
    <div
      class="section-hero__layout"
      :style="{ '--tech-count': hero.stack.length }"
    >
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
          v-for="(tech, index) in hero.stack"
          :key="tech"
          class="section-hero__tech"
          :style="{ '--i': index }"
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

      // Tramo que entra desde el borde izquierdo de la ventana: mide lo que separa el contenido
      // centrado del borde (más un margen por la barra de scroll), para que se dibuje entero a la vista
      &::before {
        content: '';
        position: absolute;
        inset-block-start: 50%;
        inset-inline-end: 100%;
        width: calc(
          (100vw - min(100vw - 2 * var(--frame-gutter), var(--content-max))) / 2 + var(--space-4)
        );
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

// El único movimiento que no provoca el visitante, una vez al cargar: el titular aparece, la línea
// entra por la izquierda, recorre las tecnologías y, al llegar a la foto, enciende su anillo.
// La foto se ve desde el principio (no retrasa la carga); solo cambia el color del anillo.
// Con «reducir movimiento» activado no se anima nada y se ve directamente el estado final.
@media (prefers-reduced-motion: no-preference) {
  .section-hero {
    &__layout {
      --t-entry: 150ms;
      --t-entry-length: 500ms;
      --t-step: 220ms;
      --t-arrival: calc(var(--t-entry) + var(--t-entry-length) + var(--tech-count) * var(--t-step));
    }

    &__headline {
      animation: hero-appear 400ms var(--ease-out) both;
    }

    &__stack::before {
      transform-origin: left center;
      animation: hero-draw var(--t-entry-length) var(--ease-out) var(--t-entry) both;
    }

    &__tech {
      --t-tech: calc(var(--t-entry) + var(--t-entry-length) + var(--i) * var(--t-step));

      animation: hero-appear 200ms var(--ease-out) var(--t-tech) both;

      &::before {
        animation: hero-pop 200ms var(--ease-out) var(--t-tech) both;
      }

      &::after {
        transform-origin: left center;
        animation: hero-draw calc(var(--t-step) - 40ms) linear calc(var(--t-tech) + 40ms) both;
      }
    }

    // En móvil la foto va encima del titular y la línea no llega a ella
    @include mq(md) {
      &__photo::before {
        transform-origin: left center;
        animation: hero-draw 180ms linear var(--t-arrival) both;
      }

      &__frame {
        animation: hero-light 500ms var(--ease-out) calc(var(--t-arrival) + 180ms) both;
      }
    }
  }
}

// Respuesta al ratón: al pasar por una tecnología, la línea se ilumina tramo a tramo desde ella
// hasta la foto; al pasar por la foto, se ilumina entera. En pantallas táctiles no hay hover.
// El nodo crece con «scale» y no con «transform», que ya usa la animación de carga
@media (hover: hover) {
  .section-hero__tech {
    transition: color var(--duration-quick) var(--ease-out);

    &::before {
      transition:
        scale var(--duration-quick) var(--ease-out),
        box-shadow var(--duration-quick) var(--ease-out);
    }

    &::after {
      transition:
        background-color 160ms linear,
        box-shadow 160ms linear;
    }

    &:hover {
      color: var(--color-text);

      &::before {
        scale: 1.6;
        box-shadow: 0 0 0 0.25rem color-mix(in srgb, var(--color-signal) 25%, transparent);
      }
    }
  }

  .section-hero__stack::before,
  .section-hero__photo::before {
    transition:
      background-color 160ms linear,
      box-shadow 160ms linear;
  }

  .section-hero__frame {
    transition: box-shadow var(--duration-base) var(--ease-out);
  }

  // Una línea de 1 px apenas cambia de color: el resplandor hace visible que está encendida
  .section-hero__layout {
    --line-glow: 0 0 0.5rem color-mix(in srgb, var(--color-signal) 70%, transparent);
  }

  // Posición desde la que se enciende la línea: la tecnología señalada o, con la foto, -1,
  // el tramo que entra por la izquierda
  @for $n from 1 through 8 {
    .section-hero__layout:has(.section-hero__tech:nth-child(#{$n}):hover) {
      --lit-from: #{$n - 1};
    }
  }

  .section-hero__layout:has(.section-hero__frame:hover) {
    --lit-from: -1;

    .section-hero__stack::before {
      background-color: var(--color-signal);
      box-shadow: var(--line-glow);
    }
  }

  // Cada tramo espera a que se encienda el anterior, así la luz viaja hacia la foto
  .section-hero__tech:hover::after,
  .section-hero__tech:hover ~ .section-hero__tech::after,
  .section-hero__layout:has(.section-hero__frame:hover) .section-hero__tech::after {
    background-color: var(--color-signal);
    box-shadow: var(--line-glow);
    transition-delay: calc((var(--i) - var(--lit-from)) * 80ms);
  }

  .section-hero__layout:has(.section-hero__tech:hover, .section-hero__frame:hover) {
    .section-hero__photo::before {
      background-color: var(--color-signal);
      box-shadow: var(--line-glow);
      transition-delay: calc((var(--tech-count) - var(--lit-from)) * 80ms);
    }

    .section-hero__frame {
      box-shadow: 0 0 0 0.375rem color-mix(in srgb, var(--color-signal) 18%, transparent);
      transition-delay: calc((var(--tech-count) - var(--lit-from) + 1) * 80ms);
    }
  }
}

@keyframes hero-appear {
  from {
    opacity: 0;
  }
}

@keyframes hero-draw {
  from {
    transform: scaleX(0);
  }
}

@keyframes hero-pop {
  from {
    transform: scale(0);
  }
}

@keyframes hero-light {
  from {
    border-color: var(--color-line);
  }
}
</style>
