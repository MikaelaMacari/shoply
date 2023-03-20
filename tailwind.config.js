/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryMain: "#211f1c",
      primaryLight: "#484543",
      primaryDark: "#393d45",
      secondaryMain: "#616467",
      secondaryLight: "#ffffff",
      secondaryDark: "#000000",
      textPrimary: "#000000",
      textSecondary: "#334756",
      textDisabled: "#616467",
      divider: "#c4c4c4",
      backgroundDefault: "#ffffff",
      backgroundPaper: "#f8f8f8",
      "grey-50": "#f8f8f8",
      "grey-100": "#f1f1f1",
      "grey-200": "#f5f7fb",
      "grey-300": "#efefef",
      "grey-400": "#c5c5c5",
      "grey-500": "#acacac",
      "grey-600": "#a3a3a3",
      "grey-700": "#9a9292",
      "grey-800": "#878484",
      "grey-900": "#616467",
      "grey-A100": "#5e5e5e",
      "grey-A200": "#393d45",
      errorMain: "#f13131",
      errorLight: "#FF6565",
      errorDark: "#ad1a1a",
      errorContrastText: "#F5F7FB",
    },
    fontFamily: {
      roboto: ["var(--roboto-font)"],
      lato: ["var(--lato-font)"],
      josefin: ["var(--josefin-font)"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        "2xl": "1500px",
      },
      height: {
        600: "37rem",
      },
      width: {
        600: "40rem",
      },
    },
  },
};
