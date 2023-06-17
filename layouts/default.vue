<template>
  <div class="flex flex-col h-full overflow-y-hidden">
    <Header></Header>
    <section class="flex flex-grow flex-row overflow-y-scroll">
      <div class="flex flex-grow justify-end">
        <Sidenav></Sidenav>
      </div>
      <section id="content" class="flex-grow px-4 my-8">
        <slot />
      </section>
      <div class="flex-grow"></div>
    </section>
    <Footer></Footer>
  </div>
</template>

<style lang="postcss" scoped>
#content {
  max-width: 1200px;
}
</style>
