<template>
  <div>
    <div v-if="error.statusCode === 404">
      <h1>
        {{ error.statusCode }}; Page not found<span class="underscore">_</span>
      </h1>
      <h3>We can't seem to find the page you're looking for.</h3>
    </div>
    <div v-else>
      <h1>
        {{ error.statusCode }}; An error occurred<span class="underscore"
          >_</span
        >
      </h1>
      <h3>We try to fix the issue as soon as possible.</h3>
    </div>
    <p class="mt-4">
      <NuxtLink to="/">Take me back to the homepage</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: ['error'],
}
</script>
