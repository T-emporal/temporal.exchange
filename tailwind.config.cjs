/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans"],
      },
      colors: { temporal: "#00A9A4", temporal50: "#00A9A488" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
