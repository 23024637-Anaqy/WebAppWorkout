module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all source files
  ],
  theme: {
    extend: {
      colors: {
        forgeBlack: "#1c1c1e", // Custom black for forge theme
      },
      fontFamily: {
        castIron: ["Cast Iron", "sans-serif"], // Custom font
      },
    },
  },
  plugins: [],
};