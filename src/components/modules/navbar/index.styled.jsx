import { AppBar, Typography } from "@mui/material";
import { Badge as MuiBadge } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "src/assets/static/theme";
import { roboto } from "src/assets/static/theme";
import { StyledButton } from "src/components/common/button/index.styled";

export const StyledNavbar = styled(AppBar)(() => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.palette.grey[50],
  color: theme.palette.grey.A200,
  [theme.breakpoints.up("xs")]: {
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "1.5rem 2.5rem",
    alignItems: "center",
  },
}));
export const Logo = styled(Typography)(({ theme }) => ({
  fontFamily: roboto.variable,
  fontSize: "30px",
  fontWeight: 700,
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
  },
}));
export const Badge = styled(MuiBadge)(() => ({
  "& .MuiBadge-badge": {
    color: theme.palette.error.contrastText,
    backgroundColor: theme.palette.error.light,
  },
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));

export const Button = styled(StyledButton)(() => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
  },
}));
