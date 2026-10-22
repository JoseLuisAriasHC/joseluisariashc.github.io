<!--
  «La línea»: una lista en la que cada elemento cuelga de un nodo y los nodos se unen con un tramo.
  --flow-gap separa los elementos y --node-offset alinea el nodo con la primera línea del contenido.
-->
<script setup lang="ts" generic="T">
const { ordered = false, activeIndex = -1 } = defineProps<{
  items: T[]
  itemKey: (item: T) => string
  ordered?: boolean
  /** Rellena el nodo de este elemento (el menú móvil marca la sección actual) */
  activeIndex?: number
}>()

defineSlots<{
  default(props: { item: T; index: number }): unknown
}>()
</script>

<template>
  <component
    :is="ordered ? 'ol' : 'ul'"
    class="base-flow"
    role="list"
  >
    <li
      v-for="(item, index) in items"
      :key="itemKey(item)"
      class="base-flow__item"
    >
      <span
        :class="['base-flow__node', { 'base-flow__node--active': index === activeIndex }]"
        aria-hidden="true"
      />
      <div class="base-flow__content">
        <slot
          :item="item"
          :index="index"
        />
      </div>
    </li>
  </component>
</template>

<style scoped lang="scss">
:where(.base-flow) {
  --flow-gap: var(--space-8);
  --node-offset: 0.35rem;

  display: grid;
  gap: var(--flow-gap);
  padding: 0;
  list-style: none;
}

.base-flow {
  &__item {
    position: relative;
    display: grid;
    grid-template-columns: var(--node-size) minmax(0, 1fr);
    column-gap: var(--space-4);

    // Tramo desde este nodo hasta el siguiente
    &:not(:last-child)::before {
      content: '';
      position: absolute;
      inset-block-start: calc(var(--node-offset) + var(--node-size));
      inset-block-end: calc(-1 * (var(--flow-gap) + var(--node-offset)));
      inset-inline-start: calc((var(--node-size) - var(--line-width)) / 2);
      width: var(--line-width);
      background-color: var(--color-line);
    }
  }

  &__node {
    width: var(--node-size);
    height: var(--node-size);
    margin-block-start: var(--node-offset);
    border: var(--line-width) solid var(--color-signal);
    border-radius: 50%;

    &--active {
      background-color: var(--color-signal);
    }
  }
}
</style>
