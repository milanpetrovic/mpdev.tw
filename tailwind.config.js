/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans' : ['ScandiaWeb', 'sans-serif']
    }
  },
  darkMode: 'class',
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
