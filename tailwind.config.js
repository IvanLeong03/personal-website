/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFDF2',
        'darkgrey': '#323232',
        'beige': '#FFEFCC',
        'bgwhite': '#FCFCFC'
      },
      fontFamily: {
        'sans': ['Helvetica', 'Montserrat', 'Roboto', 'Arial', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Helvetica': ['Helvetica', 'Arial', 'sans-serif'], 
        'Roboto': ['Roboto', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}