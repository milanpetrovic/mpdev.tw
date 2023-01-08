/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
