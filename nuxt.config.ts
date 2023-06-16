// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    classSuffix: "",
  },
  // https://content.nuxtjs.org/api/configuration
  content: {},
  // https://nuxt.com/modules/cookie-control#module-options
  cookieControl: {
    localeTexts: {
      en: {
        bannerDescription:
          "I use my own and third-party cookies so that I can display this website correctly and better understand how this website is used, with a view to improving the services I offer. A decision on cookie usage permissions can be changed anytime using the cookie button that will appear after a selection has been made on this banner.",
      },
    },
  },
  // https://devtools.nuxtjs.org/guide#module-options
  devtools: {
    enabled: true,
  },
  modules: [
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
});
