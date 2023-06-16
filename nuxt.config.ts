// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxtjs.org/api/configuration
  content: {},
  // https://devtools.nuxtjs.org/guide#module-options
  devtools: {
    enabled: true,
  },
  modules: [
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
  ],
});
