<template>
  <NuxtLayout>
    <div class="flex flex-col gap-3">
      <div class="text-6xl">
        {{ error.statusCode }}
      </div>
      <div>
        {{ error.message }}
      </div>
      <NuxtLink to="/">
        <Button>Back to home page</Button>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
