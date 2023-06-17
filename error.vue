<template>
  <NuxtLayout>
    <div class="flex flex-col gap-3">
      <div class="text-6xl">
        {{ error.statusCode }}
      </div>
      <div>
        {{ error.message }}
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
