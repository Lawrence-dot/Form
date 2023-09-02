/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darks: 'rgb(1, 1, 54, 0.4)',
        dark: 'rgb(1, 1, 54, 0.9)',
        lights: 'rgba(40, 40, 133, 0.4)',
        light: 'rgba(40, 40, 133, 0.98);',
        drk: 'rgba(0, 0, 0, 0.623)'
      }
    },
  },
  plugins: [],
}
