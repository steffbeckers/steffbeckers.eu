<template>
  <div class="layout flex flex-col mx-auto">
    <Header />
    <div class="main">
      <Nuxt />
    </div>
    <Footer />
    <MobileNavigation class="hidden sm:flex" />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileNavigation from '../components/MobileNavigation'

export default {
  components: {
    Header,
    Footer,
    MobileNavigation,
  },
}
</script>

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
