<template>
  <div class="layout flex flex-col mx-auto">
    <Header />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.layout {
  max-width: 960px;
  height: 100%;
}

.main {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
