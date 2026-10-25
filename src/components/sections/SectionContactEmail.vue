<script setup lang="ts">
import { onScopeDispose, shallowRef } from 'vue'

const { email } = defineProps<{
  email: string
  copyLabel: string
  copiedLabel: string
}>()

// Tras copiar, el botón dice «Copiado» un momento y vuelve a su texto
const COPIED_MS = 2000
const copied = shallowRef(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copy() {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    // Sin permiso para el portapapeles: la dirección sigue a la vista para copiarla a mano
    return
  }

  copied.value = true
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => (copied.value = false), COPIED_MS)
}

onScopeDispose(() => clearTimeout(resetTimer))
</script>

<template>
  <p class="section-contact-email">
    <span>{{ email }}</span>
    <button
      type="button"
      class="section-contact-email__copy"
      @click="copy"
    >
      {{ copied ? copiedLabel : copyLabel }}
    </button>
    <!-- El cambio de texto del botón no siempre se anuncia: este aviso sí -->
    <span
      class="visually-hidden"
      role="status"
    >
      {{ copied ? copiedLabel : '' }}
    </span>
  </p>
</template>

<style scoped lang="scss">
:where(.section-contact-email) {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: var(--space-3);
}

// Con el aspecto de los enlaces: texto en Papel y subrayado en Salvia
.section-contact-email__copy {
  padding: 0;
  border: 0;
  background: none;
  color: var(--color-text);
  font: inherit;
  text-decoration-line: underline;
  text-decoration-color: var(--color-signal);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.25em;
  cursor: pointer;
  transition: text-decoration-thickness var(--duration-quick) var(--ease-out);

  &:hover {
    text-decoration-thickness: 2px;
  }
}
</style>
