/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'raleway': 'Raleway, sans-serif'
    },
    extend: {},
  },
  daisyui: {
    themes: [{
      mytheme: {

        "secondary": "#F3F3F3",

        "accent": "#13c78e",

        "white": "#ffffff",

        "neutral": "#1d1820",  

        // "base-100": "#2d3d49",
                 
        // "info": "#85aaef",
                 
        // "warning": "#e6b71e",
                 
        // "error": "#f50f49",
                 },
    },],
  },
  plugins: [require("daisyui")],
}

