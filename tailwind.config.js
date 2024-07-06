/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#263138",
        lightGray: "#445964",
        background: "#FBFBFB",
      },
    },
  },
  plugins: [],
};

