/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./career-outcomes.html",
    "./application.html",
    "./partials/**/*.html",
    "./public/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "icpc-orange": "#F97316",
        "icpc-orange-dark": "#EA580C",
        "icpc-cream": "#FFF7EA",
        "icpc-peach": "#FFE3C4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

