<template>
  <div class="header flex flex-row justify-between">
    <Logo />
    <Navigation />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMobileNav: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--color-bg-primary);

  height: 80px;

  padding-left: 20px;
  padding-right: 20px;

  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
