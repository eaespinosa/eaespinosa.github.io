/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'navy': '#393053',
        'midnight': '#443C68',
      },
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [],
}
