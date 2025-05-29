/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    screens: { // Custom small screen breakpoint
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        headerPurple: '#1A0B2E',
        background: '#11071F',
        richBlack: '#1E1E1E',
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        preahvihear: ["Preahvihear", "sans-serif"],

      },
    },
  },
  plugins: [],
}

