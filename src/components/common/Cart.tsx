import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { theme } from "src/assets/static/theme";
import { Badge } from "../modules/navbar/index.styled";

const ShoppingCart = () => {
  return (
    <Badge badgeContent={"0"}>
      <ShoppingCartOutlinedIcon htmlColor={theme.palette.grey[900]} />
    </Badge>
  );
};

export default ShoppingCart;
