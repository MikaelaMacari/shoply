import { List } from "@mui/material";
import { ListItemText as MuiListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "src/assets/static/theme";
import { roboto } from "src/assets/static/theme";
import Link from "next/link";

export const StyledList = styled(List)(() => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const ListItemText = styled(MuiListItemText)(() => ({
  fontFamily: roboto.variable,
  color: theme.palette.grey.A100,
  borderBottom: `1px solid ${theme.palette.grey.A100}`,

  "& .MuiTypography-root": {
    fontWeight: 700,
    // transition: "fontWeight 10s easeOut",
    // "&:hover": {
    //   fontWeight: 700,
    // },
  },
}));
export const StyledLink = styled(Link)(() => ({
  marginRight: "1.7rem",
}));
export const Divider = styled("div")(() => ({
  width: "1.5rem",
  backgroundColor: theme.palette.grey.A200,
  height: "1px",
  transform: "rotate(-50deg)",
}));
