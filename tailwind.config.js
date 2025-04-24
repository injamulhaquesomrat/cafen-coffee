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
        primary: "#5a0808",
        "primary-foreground": "#7b3a38",
        secondary: "#fee473",
        "secondary-foreground": "#f8f1cb",
        "secondary-three": "#fff7eb",
        background: "#fffbed",
        foreground: "#fffff5",
      },
      fontFamily: {
        bdogrotesk: ["BD Grotesk", "sans-serif"],
        sober: ["Sober", "sans-serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
