/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "card-color": "#062226",
        "background-color": "#05292e",
        "span-text-color": "#FBFBFB",
        "span-title-color": "#7E7E7E",
        "hr-color": "#084851",
        "Unknown": "#938686",
        "Alive": "#4AB648",
        "Dead": "#B94343",
      },
    },
  },
  plugins: [],
};

