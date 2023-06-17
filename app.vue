<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <CookieControl></CookieControl>
</template>

<style lang="postcss">
html,
body,
#__nuxt {
  @apply h-full;
}

body {
  @apply bg-white dark:bg-gray-700 dark:text-gray-200;
}
</style>
