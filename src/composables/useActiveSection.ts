import { onMounted, onScopeDispose, readonly, shallowRef, watch } from 'vue'

export interface UseActiveSectionOptions {
  /** Refleja la sección activa en la URL (#id) sin añadir entradas al historial */
  syncHash?: boolean
}

/** Índice de la sección que cruza el centro de la ventana */
export function useActiveSection(ids: readonly string[], options: UseActiveSectionOptions = {}) {
  const { syncHash = false } = options
  const activeIndex = shallowRef(0)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    // El margen deja como zona de detección una línea en mitad de la ventana
    observer = new IntersectionObserver(
      (entries) => {
        const crossing = entries.find((entry) => entry.isIntersecting)
        if (!crossing) return

        const index = ids.indexOf(crossing.target.id)
        if (index !== -1) activeIndex.value = index
      },
      { rootMargin: '-50% 0px -50% 0px' },
    )

    for (const id of ids) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
  })

  if (syncHash) {
    watch(activeIndex, (index) => {
      const id = ids[index]
      if (id) history.replaceState(null, '', `#${id}`)
    })
  }

  onScopeDispose(() => observer?.disconnect())

  return { activeIndex: readonly(activeIndex) }
}
