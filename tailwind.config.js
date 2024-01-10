/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
    },
    fontWeight: {
      semibold: 800, // Adjust if Figtree's semi-bold weight differs
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          yellow: "hsl(47, 88%, 63%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          gray: "hsl(0, 0%, 50%)",
          black: "hsl(0, 0%, 7%)",
        },
      },
    },
  },
  plugins: [],
};
