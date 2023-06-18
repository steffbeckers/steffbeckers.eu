<template>
  <div class="header-wrapper">
    <header class="flex flex-row mx-auto items-center justify-between py-2 px-4">
      <div class="flex flex-row items-center gap-8">
        <NuxtLink to="/">
          <div class="flex flex-row items-center gap-4">
            <!-- TODO: White logo on dark theme -->
            <img src="~/assets/images/logo.png" alt="Logo" width="40" height="40" />
            <div class="text-2xl whitespace-nowrap">
              <span class="font-bold">STEFF</span> BECKERS
            </div>
          </div>
        </NuxtLink>
        <nav class="flex gap-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </nav>
      </div>
      <div class="flex flex-row items-center gap-8">
        <div class="flex flex-col md:flex-row md:gap-4">
          <div>
            <a class="whitespace-nowrap" href="mailto:steff@steffbeckers.eu"
              >steff@steffbeckers.eu</a
            >
          </div>
          <div><a class="whitespace-nowrap" href="tel:+32499765192">+32 499 765 192</a></div>
        </div>
        <div class="flex flex-row flex-wrap gap-2 md:gap-4">
          <a href="https://linkedin.com/in/steffbeckers" target="_blank" rel="noopener noreferrer">
            <Icon name="uil:linkedin"></Icon>
          </a>
          <a href="https://github.com/steffbeckers" target="_blank" rel="noopener noreferrer">
            <Icon name="uil:github"></Icon>
          </a>
          <a href="https://facebook.com/steffbeckers" target="_blank" rel="noopener noreferrer">
            <Icon name="uil:facebook"></Icon>
          </a>
          <a href="https://twitter.com/steffbeckers" target="_blank" rel="noopener noreferrer">
            <Icon name="uil:twitter"></Icon>
          </a>
          <a href="https://wa.me/32499765192" target="_blank" rel="noopener noreferrer">
            <Icon name="uil:whatsapp"></Icon>
          </a>
        </div>
        <!-- TODO: Color switcher -->
      </div>
    </header>
  </div>
</template>

<style lang="postcss" scoped>
.header-wrapper {
  @apply bg-gray-800;
}

header {
  max-width: 1200px;

  nav {
    .router-link-exact-active {
      @apply text-cyan-500;
    }
  }
}
</style>
