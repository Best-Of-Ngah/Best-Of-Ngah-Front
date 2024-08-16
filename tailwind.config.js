/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#95C732",
        second: "#EBCC20",
        firstLowOpacity: "#03214cc0",
        white: "#ffff",
        black: "#3e3f40",
      },
      fontFamily: {
        tnrm: ["Times New Roman", "serif"],
      },
      backgroundImage: {
        loginbg: "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
