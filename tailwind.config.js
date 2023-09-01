/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-dark": "#18181b",
        "gray-light": "#52525b",
        gray: "#3f3f46",
        "red-light": "#f43f5e",
        red: "#be123c",
        "blue-light": "#22d3ee",
        blue: "#0891b2",
        "green-light": "#6ee7b7",
        green: "#10b981",
      },
    },
  },
  plugins: [],
};
