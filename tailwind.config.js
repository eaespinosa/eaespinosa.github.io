/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(../img/circle.svg), default',
        'fancyDarkHover': 'url(../img/circle_dark.svg), pointer',
        'fancyHover': 'url(../img/circle_hover.svg), pointer',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'navy': '#8C5B97',
        'midnight': '#443C68',
      },
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [],
}
