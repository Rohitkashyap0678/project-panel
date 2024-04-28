/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "3xl": "1300px",
      "4xl": "1440px",
      "5xl": "1500px",
      "6xl": "1600px",
      "7xl": "1700px",
    },
    extend: {},
  },
  plugins: [],
};
