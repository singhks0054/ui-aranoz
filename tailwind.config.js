/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'myblue': '#ECFDFF',
        'mypink': '#ff3368'
      },
      backgroundImage: {
        'area': "url('/subscribe_area.webp')",
      }
    },
  },
  plugins: [],
}
