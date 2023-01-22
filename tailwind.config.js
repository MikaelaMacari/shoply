/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--roboto-font)"],
        lato: ["var(--lato-font)"],
        josefin: ["var(--josefin-font)"],
      },
    },
  },
  plugins: [],
};
