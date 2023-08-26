/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif':['Noto Serif SC','serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

