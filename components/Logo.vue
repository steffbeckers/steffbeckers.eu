<template>
  <NuxtLink class="root-link" to="/">
    <div class="flex flex-col">
      <div class="name"><span class="font-bold">Steff</span> Beckers</div>
      <div class="job-title text-gradient">Developer</div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
* {
  font-size: 26px;
  text-transform: uppercase;
  line-height: 1;
}

.name {
  color: var(--color-text-primary);
}

.job-title {
  letter-spacing: 5.5px;
}
</style>
