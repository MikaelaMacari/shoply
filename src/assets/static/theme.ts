import { createTheme } from "@mui/material/styles";
import { Roboto, Lato, Josefin_Sans } from "@next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  variable: "--roboto-font",
});
export const lato = Lato({
  weight: ["400", "300", "700"],
  variable: "--lato-font",
});
export const josefin = Josefin_Sans({
  weight: "400",
  variable: "--josefin-font",
});

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#211f1c",
      light: "#484543",
      dark: "#393d45",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#616467",
      light: "#ffffff",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#334756",
      disabled: "#616467",
    },
    divider: "#c4c4c4",
    background: {
      default: "#ffffff",
      paper: "#f8f8f8",
    },
    grey: {
      50: "#f8f8f8",
      100: "#f1f1f1",
      200: "#f5f7fb",
      300: "#efefef",
      400: "#c5c5c5",
      500: "#acacac",
      600: "#a3a3a3",
      700: "#9a9292",
      800: "#878484",
      900: "#616467",
      A100: "#5e5e5e",
      A200: "#393d45",
    },
    error: {
      main: "#f13131",
      light: "#FF6565",
      dark: "#ad1a1a",
      contrastText: "#F5F7FB",
    },
  },
});
