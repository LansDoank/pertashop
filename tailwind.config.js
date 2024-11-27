/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('./img/background.png')",
      }
    },
  },
  plugins: [],
}
