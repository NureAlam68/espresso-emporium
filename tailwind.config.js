import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"]
      },
      backgroundImage: {
        navBg: "url('./assets/navBg.jpg')",
        banner: "url('./assets/banner.png')",
        footerBg: "url('./assets/footerBg.jpg')",
        popularBg: "url('./assets/popularBg.png')",
        addCoffeeBg: "url('./assets/addCoffee.png')"
      },
      colors: {
        primary: "#331A15",
      },
    },
  },
  plugins: [daisyui],
}

