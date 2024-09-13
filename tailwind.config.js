/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-light": "34.85px 29.63px 48.34px 0px #3366FF0D",
      },
      colors: {
        textcolor: '#2d2d2d',   // Custom blue color
      },
      backgroundImage: {
        'teal-gradient': 'linear-gradient(135deg, #009379 0%, #00c9a7 50%, #f0f4c3 100%)',
      },
      container: {
        center: true,
        padding: "0.125rem",
        screens: {
          sm: "375px",
          md: "780px",
          lg: "1024px",
          xl: "1170px",
        },
      },
    },
  },
  plugins: [],
};
