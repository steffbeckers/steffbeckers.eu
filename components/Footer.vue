<template>
  <footer class="flex flex-row justify-between py-1 px-2">
    <div>&copy; {{ year }}</div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply bg-gray-800;
}
</style>

<script setup>
const year = new Date().getFullYear();
</script>
