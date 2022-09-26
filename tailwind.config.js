/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./404.html"],
  theme: {
    extend: {
      fontFamily: {
        gambetta: ["gambetta", "serif"],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
