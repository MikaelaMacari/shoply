import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { roboto } from "src/assets/static/theme";

export const StyledButton = styled(Button)(() => ({
  fontFamily: roboto.variable,
  fontSize: "18px",
  textTransform: "capitalize",
}));
