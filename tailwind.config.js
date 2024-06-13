/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-yellow": "#e79f0d",
      },
      fontFamily: {
        sans: [
          "europa",
          "Avenir Next Condensed",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        regular: [
          "europa",
          "Avenir Next",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
