/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
         'bebasneue': ['Bebas Neue'],
         'oswald': ['Oswald'],
         'anton': ['Anton'],
         'poppins':['Poppins'],
      },
    },
  },
  plugins: [],
}

