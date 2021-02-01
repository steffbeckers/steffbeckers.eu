<template>
  <div class="navigation flex flex-row space-x-2">
    <NuxtLink class="root-link" to="/">Hi!</NuxtLink>
    <NuxtLink to="/experience">Experience</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
    <ColorModeSwitcher />
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
