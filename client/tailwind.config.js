/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans"], // Replace with your font names
      },
    },
  },
  plugins: [require("daisyui")],
};
