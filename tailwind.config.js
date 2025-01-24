/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          castIron: ["Cast Iron", "sans-serif"],
        },
        colors: {
          forgeGray: "#2e2e2e", // Dark gray
          forgeBlack: "#1a1a1a", // Deep black
          forgeAccent: "#444444", // Mid-tone gray
        },
      },
    },
    plugins: [],
  };