/** @type {import('tailwindcss').Config} */
const config = {
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      fontFamily: {
        sans: ['Sansation', 'sans-serif'], 
      },
      colors: { temporal: "#00A9A4", temporal50: "#00A9A488" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
