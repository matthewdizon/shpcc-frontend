/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shpccRed: "#C4141C",
        shpccDarkRed: "#AC0F15",
        shpccYellow: "#FFD700",
      },
    },
  },
  plugins: [],
};
