// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Developer with a passion for web development and DevOps. Motivated to expand knowledge and skills with the latest technologies and frameworks. Loves working on projects as a teamplayer in an agile environment. Focused on getting it right, and aware that small details can have a big impact.",
        },
        {
          name: "keywords",
          content:
            "Steff, Beckers, CV, Website, Portfolio, Projects, Work, Experience, IT, Development, Developer, Web, .NET, Angular, Vue",
        },
        {
          name: "author",
          content: "Steff Beckers",
        },
      ],
      title: "Steff Beckers",
    },
  },
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
    "nuxt-gtag",
    "nuxt-icon",
  ],
});
