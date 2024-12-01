const colors = require('tailwindcss/colors')


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan' : colors.cyan,
        'teal' : colors.teal,
        // 'primary':"#5f6FFF",
        'primary':"#db5c1d",
      }
    },
  },
  plugins: [],
}