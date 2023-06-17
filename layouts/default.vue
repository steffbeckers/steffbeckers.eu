<template>
  <div class="layout">
    <AppHeader></AppHeader>
    <main class="flex flex-row gap-4">
      <aside>Sidenav</aside>
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style lang="postcss" scoped>
.layout {
  max-width: 1200px;
  height: 100%;
  @apply mx-auto px-4;
}
</style>
