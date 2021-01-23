export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Steff Beckers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Developer with a passion for web development and DevOps. Motivated to expand knowledge and skills with the latest technologies and frameworks. Loves working on projects as a teamplayer in an agile environment. Focused on getting it right, and aware that small details can have a big impact.',
      },
      {
        name: 'keywords',
        content:
          'Steff, Beckers, CV, Website, Portfolio, Projects, Skills, Work, Experience, IT, Development, Developer, Web, .NET, Angular, Vue',
      },
      {
        name: 'author',
        content: 'Steff Beckers',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css',
      },
    ],
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.scss'],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~plugins/filters.js', '~plugins/gtag.js', '~/plugins/disqus'],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://tailwindcss.com/docs/guides/nuxtjs
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org
    '@nuxtjs/google-analytics',
    // https://color-mode.nuxtjs.org/#setup
    '@nuxtjs/color-mode',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    //'@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css',
      },
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // Google Analytics
  googleAnalytics: {
    id: 'UA-101766005-2',
  },
  // Color mode
  colorMode: {
    classSuffix: '',
  },
}
