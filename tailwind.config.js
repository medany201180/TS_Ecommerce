/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        "Pacifico":["Pacifico", 'sans-serif']
      },
      container:{
      
        center:true,
        padding:{
          default:"1rem",
          sm:"3rem",
        },

      },
    },
  },
  plugins: [],
}



