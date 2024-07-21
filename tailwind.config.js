/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#021F33",
        green_first: "#AEFB2A",
        green_second: "#8BCB1B",
        biru_tosca: "#57EBDE",
      },
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
