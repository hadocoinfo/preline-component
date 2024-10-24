/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/wwElement.vue",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'), 
  ],
}

