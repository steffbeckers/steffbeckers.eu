export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Generate options
  generate: {
    fallback: true,
  },
  env: {
    lastUpdatedOn: new Date(),
  },
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
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/guide/setup
    // Notice: If you use other modules (eg. nuxt-i18n), always declare the sitemap module at end of array
    '@nuxtjs/sitemap',
    // https://github.com/nuxt-community/feed-module
    // https://dev.to/lindakatcodes/building-an-rss-feed-in-nuxt-with-nuxt-content-2eh9
    '@nuxtjs/feed',
    '@nuxtjs/markdownit',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    apiPrefix: 'api',
    // https://content.nuxtjs.org/configuration#fulltextsearchfields
    fullTextSearchFields: [
      'slug',
      'title',
      'subtitle',
      'description',
      'keywords',
      'text',
    ],
    // https://content.nuxtjs.org/configuration#markdown
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
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'color-mode',
  },
  // PWA
  pwa: {
    meta: {
      theme_color: '#53bceb',
    },
    manifest: {
      name: 'Steff Beckers',
      short_name: 'Steff Beckers',
    },
  },
  // sitemap.xml
  // https://sitemap.nuxtjs.org/usage/sitemap
  sitemap: {
    hostname: 'https://steffbeckers.eu',
    // https://www.sitemaps.org/protocol.html
    routes: [
      // Projects
      {
        url: '/projects',
        lastmod: '2021-01-27T20:04:00.000Z',
      },
      {
        url: '/projects/code-generator',
        lastmod: '2021-02-06T19:44:00.000Z',
      },
      {
        url: '/projects/steffbeckers',
        lastmod: '2021-01-31T11:20:00.000Z',
      },
      // Blog
      {
        url: '/blog',
        lastmod: '2021-01-27T20:03:00.000Z',
      },
      {
        url: '/blog/certbot',
        lastmod: '2021-01-27T20:03:00.000Z',
      },
      {
        url: '/blog/chocolatey',
        lastmod: '2021-01-27T20:01:00.000Z',
      },
      {
        url: '/blog/win-acme',
        lastmod: '2021-01-27T20:00:00.000Z',
      },
    ],
  },
  // Loading bar on top
  loading: {
    color: '#7dc363',
    failedColor: 'red',
    height: '2px',
    throttle: 200,
    duration: 5000,
    continuous: false,
    css: true,
    rtl: false,
  },
  feed: [
    {
      path: '/blog.xml',
      async create(feed) {
        feed.options = {
          title: 'Steff Beckers Blog',
          description:
            "Steff's blog posts, DEV-scripts and other useful notes.",
          link: 'https://steffbeckers.eu/blog.xml',
        }

        // eslint-disable-next-line global-require
        const { $content } = require('@nuxt/content')
        const posts = await $content('blog').fetch()
        posts.forEach((post) => {
          const url = `https://steffbeckers.eu/blog/${post.slug}`
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            description: post.description,
            content: post.bodyText,
          })
        })

        feed.addCategory('Development')
        feed.addCategory('DevOps')

        feed.addContributor({
          name: 'Steff Beckers',
          email: 'steff@steffbeckers.eu',
          link: 'https://steffbeckers.eu',
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ],
  hooks: {
    'content:file:beforeInsert': (document) => {
      // eslint-disable-next-line
      const md = require('markdown-it')()
      if (document.extension === '.md') {
        // eslint-disable-next-line global-require
        const { text } = require('reading-time')(document.text)
        document.readingTime = text

        const mdToHtml = md.render(document.text)
        document.bodyText = mdToHtml
      }
    },
  },
}
