import { List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "src/assets/static/theme";

export const StyledList = styled(List)(() => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));
