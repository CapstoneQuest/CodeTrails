/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
        mono: ["Geist Mono"]
      },
      colors: {
        dark: {
          gunmetal: "#22272E",
          charcoal: "#444C56",
          frenchgray: "#CED6DE",
          ferngreen: "#347D39",
          pigmentgreen: "#46954A",
        },
        light: {
          white: "#FFFFFF",
          platinum: "#E1E4E8",
          spacegray: "#2F363D",
          cornflowerblue: "#539BF5",
          azureblue: "#4184E4",
        },
      },
    },
  },
  plugins: [],
};
