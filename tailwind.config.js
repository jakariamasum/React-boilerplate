/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3490dc",
          dark: "#2779bd",
        },
        secondary: {
          DEFAULT: "#ffed4a",
          dark: "#f2d024",
        },
      },
    },
  },
  plugins: [],
};
