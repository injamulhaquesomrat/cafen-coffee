/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cf-coffee": "#5a0808",
        "cf-yellow": "#fee473",
        "cf-light-white": "#fffff5",
        "cf-light-yellow": "#f8f1cb",
        "cf-foreground": "#fffbed",
      },
      fontFamily: {
        bdogrotesk: ["Bodoni Grotesk", "sans-serif"],
        sober: ["Sober", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
