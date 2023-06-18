<template>
  <footer>
    <div class="container mx-auto flex flex-row justify-between py-1 px-2">
      <div>&copy; {{ year }} - Steff Beckers</div>
      <div>Last updated on {{ config.public.lastUpdatedOn }}</div>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply bg-gray-800 text-gray-500;
}
</style>

<script setup>
const config = useRuntimeConfig();
const year = new Date().getFullYear();
</script>
