/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.jsx"  
  ],
  theme: {
    extend: {
      maxWidth: {
        '95': '95%'
      }
    },
  },
  plugins: [],
}
