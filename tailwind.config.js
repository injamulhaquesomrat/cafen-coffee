/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
