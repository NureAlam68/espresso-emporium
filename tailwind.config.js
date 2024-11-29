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
        navBg: "url('./assets/navBg.jpg')"
      }
    },
  },
  plugins: [daisyui],
}

