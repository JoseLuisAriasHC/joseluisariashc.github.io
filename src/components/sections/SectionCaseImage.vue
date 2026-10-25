<script setup lang="ts">
import { useTemplateRef } from 'vue'
import BaseButton from '@/components/base/BaseButton.vue'
import type { CaseImage } from '@/content/types'

defineProps<{
  image: CaseImage
  /** Ancho con el que se muestra la miniatura, para que el navegador elija la versión */
  sizes: string
  enlargeLabel: string
  closeLabel: string
}>()

// <dialog> modal: el navegador mantiene el foco dentro, cierra con Escape y devuelve el foco
const dialog = useTemplateRef<HTMLDialogElement>('dialog')

function open() {
  dialog.value?.showModal()
}

function close() {
  dialog.value?.close()
}

// El diálogo ocupa toda la ventana: cualquier clic que no sea sobre la imagen lo cierra
function closeFromBackdrop(event: MouseEvent) {
  if (!(event.target instanceof HTMLImageElement)) close()
}
</script>

<template>
  <div class="section-case-image">
    <button
      type="button"
      class="section-case-image__trigger"
      aria-haspopup="dialog"
      @click="open"
    >
      <span class="visually-hidden">{{ enlargeLabel }}:</span>
      <img
        class="section-case-image__thumb"
        :src="image.src"
        :srcset="image.srcset"
        :sizes="sizes"
        :alt="image.alt"
        loading="lazy"
        decoding="async"
      />
    </button>

    <!-- La descripción ya nombra el diálogo; la imagen ampliada no la repite -->
    <dialog
      ref="dialog"
      class="section-case-image__dialog"
      :aria-label="image.alt"
      @click="closeFromBackdrop"
    >
      <BaseButton
        class="section-case-image__close"
        variant="outline"
        @click="close"
      >
        {{ closeLabel }}
      </BaseButton>
      <div class="section-case-image__viewport">
        <img
          class="section-case-image__full"
          :src="image.zoom ?? image.src"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </dialog>
  </div>
</template>

<style scoped lang="scss">
.section-case-image {
  &__trigger {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    border-radius: var(--space-3);
    background: none;
    cursor: zoom-in;
  }

  // El borde separa la imagen del fondo aunque comparta sus colores; al pasar el ratón se ilumina
  &__thumb {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    border: var(--line-width) solid var(--color-line);
    border-radius: var(--space-3);
    object-fit: cover;
    transition: border-color var(--duration-quick) var(--ease-out);
  }

  &__trigger:hover &__thumb {
    border-color: var(--color-signal);
  }

  // El diálogo no se desplaza: así el botón de cerrar se queda en su sitio mientras la imagen
  // se recorre dentro de __viewport
  &__dialog {
    width: 100%;
    max-width: none;
    height: 100%;
    max-height: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    background-color: color-mix(in srgb, var(--color-bg) 94%, transparent);
    // La página se intuye detrás, pero desenfocada para que no compita con la imagen
    backdrop-filter: blur(0.5rem);
    cursor: zoom-out;

    // Solo abierto: un <dialog> cerrado debe seguir oculto
    &[open] {
      display: block;
      transition: opacity var(--duration-base) var(--ease-out);

      @starting-style {
        opacity: 0;
      }
    }

    &::backdrop {
      background-color: transparent;
    }
  }

  &__close {
    position: absolute;
    z-index: 1;
    inset-block-start: var(--space-4);
    inset-inline-end: var(--frame-inset);
  }

  // En móvil la imagen empieza a la izquierda para poder desplazarla; centrada, su parte
  // izquierda quedaría fuera de alcance
  &__viewport {
    display: grid;
    place-items: center start;
    height: 100%;
    overflow: auto;
    padding: var(--space-16) var(--frame-inset) var(--space-8);

    @include mq(md) {
      place-items: center;
    }
  }

  // En móvil, ajustada al ancho se vería igual que la miniatura: mantiene una altura legible y se
  // recorre deslizando en horizontal. En pantallas mayores cabe entera
  &__full {
    width: auto;
    max-width: none;
    height: min(100svh - 8rem, 36rem);
    border: var(--line-width) solid var(--color-line);
    border-radius: var(--space-3);
    cursor: default;

    @include mq(md) {
      max-width: 100%;
      height: auto;
      max-height: calc(100svh - var(--space-16) - var(--space-8));
    }
  }
}
</style>
