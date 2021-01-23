module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    screens: {
      sm: { max: '667px' },
      md: { min: '668px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px' },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
