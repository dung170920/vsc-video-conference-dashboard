/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#f8f8fa",
          900: "#323232",
        },
        red: {
          DEFAULT: "#de6962",
        },
      },
    },
  },
  plugins: [],
};
