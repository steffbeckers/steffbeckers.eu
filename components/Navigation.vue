<template>
  <div class="navigation flex flex-row space-x-4 items-center">
    <NuxtLink class="root-link" to="/">Hi!</NuxtLink>
    <NuxtLink to="/experience">Experience</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <ColorModeSwitcher />
  </div>
</template>

<script>
import ColorModeSwitcher from './ColorModeSwitcher'

export default {
  components: {
    ColorModeSwitcher,
  },
}
</script>

<style lang="scss" scoped>
.navigation {
  a {
    font-size: 1.1rem;
    font-weight: bold;

    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  a::after {
    content: '_';
    opacity: 0;
  }
  a:hover::after {
    opacity: 1;
  }
}
</style>
