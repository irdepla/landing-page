/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",     
    "./src/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,  
        padding: '0.125rem', 
        screens: {
          sm: '100%',  
          md: '100%',
          lg: '1024px',
          xl: '1170px', 
        },
      },
    },  
    
  },
  plugins: [],
}
