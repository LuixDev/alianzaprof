/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burbank: ['burbank', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}