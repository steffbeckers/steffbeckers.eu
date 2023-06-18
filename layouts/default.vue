<template>
  <div class="flex flex-col h-full overflow-y-hidden">
    <Header></Header>
    <div id="content-wrapper" class="flex flex-grow overflow-y-scroll">
      <section id="content" class="flex-grow px-4 mx-auto">
        <slot />
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="postcss" scoped>
#content {
  max-width: 1200px;
}
</style>
