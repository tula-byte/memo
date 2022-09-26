/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gambetta: ["gambetta", "serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
