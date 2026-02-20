/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./data/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#000000",
      },
    },
  },

  plugins: [],
};

export default config;
