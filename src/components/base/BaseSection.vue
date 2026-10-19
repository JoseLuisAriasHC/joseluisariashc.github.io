<!--
  Pantalla completa que encaja en el scroll por secciones y limita el ancho del contenido.
  id, class y aria-* llegan a <section> por fallthrough: <BaseSection id="inicio" class="hero">
-->
<template>
  <section class="section">
    <div class="section__inner">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
// :where() deja la especificidad a cero para que el bloque de cada sección pueda ajustarlo
:where(.section) {
  display: grid;
  align-items: center;
  padding-block: var(--space-24) var(--space-16);

  @include snap-layout {
    min-height: 100svh;
    padding-block: var(--space-16);
    scroll-snap-align: start;
  }
}

:where(.section__inner) {
  width: min(100% - 2 * var(--frame-gutter), var(--content-max));
  margin-inline: auto;
}
</style>
