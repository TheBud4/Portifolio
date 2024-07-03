/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#fbf4ff",
          100: "#f4e6ff",
          200: "#ebd2ff",
          300: "#dcaeff",
          400: "#c67aff",
          500: "#b148ff",
          600: "#9e24f9",
          700: "#8814dc",
          800: "#7316b3",
          900: "#67159c",
          950: "#41006c",
        },
        malachite: {
          50: "#eefff4",
          100: "#d7ffe8",
          200: "#b1ffd2",
          300: "#75ffb0",
          400: "#32f686",
          500: "#07d962",
          600: "#00ba50",
          700: "#039242",
          800: "#097238",
          900: "#0a5d30",
          950: "#003518",
        },
      },
  },
},
  plugins: [],
};

