/** @type {import('tailwindcss').Config} */
const config = {
  
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sansation: ['var(--font-sansation)']
      },
      colors: { temporal: "#00A9A4", temporal50: "#00A9A488" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
