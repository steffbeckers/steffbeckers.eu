module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
  },
  darkMode: 'class', // false, 'media' or 'class'
  theme: {
    screens: {
      sm: { max: '710px' },
      md: { min: '711px', max: '1023px' },
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
