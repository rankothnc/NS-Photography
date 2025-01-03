/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      second_font: ["Agbalumo"],
    },
  },
plugins: [
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"), 
  ],
};

