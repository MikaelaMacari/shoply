import { Stack, Drawer } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "src/assets/static/theme";
import { Logo } from "../../index.styled";

export const ToggleButton = styled(Stack)(() => ({
  backgroundColor: theme.palette.grey.A200,
  width: "50px",
  height: "50px",
  color: "#f4f4f4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const MobileLogo = styled(Logo)(() => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "1rem",
    color: theme.palette.grey[900],
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledSidebar = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
  [theme.breakpoints.up("xs")]: {
    display: "block",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
