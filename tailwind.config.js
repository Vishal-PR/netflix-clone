/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nameLogo: ['Bebas Neue']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
