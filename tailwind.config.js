/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstColor: "#03224c",
        firstLowOpacity: "#03214cc0",
        white: "#f4f4f4",
        black: "#3e3f40",
      },
      fontFamily: {
        tnrm: ["Times New Roman", "serif"],
      },
      backgroundImage: {
        loginbg: "url('/public/bg.jpg')",
      },
    },
  },
  //plugins: [require("daisyui")],
};
