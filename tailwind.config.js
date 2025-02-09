/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'birutua': '#2D3250',
        'birumuda': '#3E8BFF',
        'oren': '#F6B17A',
        'biruraple': '#5790AB',
        'bluebg': '#D0D7E1',
      },
    },
  },
  plugins: [],
}