/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        googleBg: "#202124",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
