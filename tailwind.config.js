/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#FEFBFC",
        red: "#FF3477",
        lightred: "#ff6997",
        blue: "#2B0BCB",
        lightblue: "#5945ff",
        grey: "#D9DEDC",
      },
      darkblue: {
        50: "#f1f1ff",
        100: "#e6e7ff",
        200: "#d0d1ff",
        300: "#abaaff",
        400: "#827bff",
        500: "#5945ff",
        600: "#4320ff",
        700: "#340ef3",
        800: "#2b0bcb",
        900: "#250ba7",
        950: "#110372",
      },
    },
  },
  plugins: [],
};
