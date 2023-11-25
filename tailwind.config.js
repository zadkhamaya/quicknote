/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        red: "#FF3477",
        lightred: "#ff6997",
        blue: "#2B0BCB",
        lightblue: "#5945ff",
        grey: "#D9DEDC",
      },
    },
  },
  plugins: [],
};
