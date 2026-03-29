/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs':'426px',
        'm-phone': '500px',
      }
    },
  },
  plugins: [],
}