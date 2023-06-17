<template>
  <div class="flex flex-col h-full overflow-y-hidden">
    <Header></Header>
    <div class="flex flex-row justify-between h-full">
      <Sidenav>Sidenav</Sidenav>
      <section id="content" class="flex flex-row gap-4 mx-right p-4 h-full overflow-y-scroll">
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
