<template>
  <div class="header flex flex-row items-center justify-between space-x-4">
    <Logo />
    <Navigation class="sm:hidden" />
  </div>
</template>

<script>
import Logo from './Logo'
import Navigation from './Navigation'

export default {
  components: {
    Logo,
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--color-bg-primary);

  min-height: 80px;

  margin-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;

  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
