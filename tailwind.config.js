/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
    divideColor: ['group-hover'],
    backgroundColor: ['group-focus'],},
  },
  plugins: [],
}

