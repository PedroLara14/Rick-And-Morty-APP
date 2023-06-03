/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-color": "#062226",
        "background-color": "#05292e",
        "span-text-color": "#FBFBFB",
        "span-title-color": "#7E7E7E",
        "hr-color": "#084851",
      },
    },
  },
  plugins: [],
};

