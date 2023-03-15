/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    colors: {
      ...colors,
      veryDarkGreen: "#00141B",
      darkGreen: "#031E28",
      cyanidGreen: "#0A3A4B",
      lightCyanidGreen: "#145971",
      headerGreen: "#08303F",
      textLightBlue: "#00ADBB",
      yellow: "#F9E319",
      textGray: "#7DAFC0",
    },
    variants: {
      extend: {
        transform: ["hover"],
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
  ],
};
