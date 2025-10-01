/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      container: { center: true, padding: { DEFAULT: "1rem", lg: "2rem" } },
    },
  },
  plugins: [],
};