"use client";
import { Logo, StyledNavbar } from "./index.styled";
import NavbarCollapse from "./components/navbar-collapse";
import { MobileLogo } from "./components/navbar-collapse/index.styled";
import NavItems from "./components/navbar-items";
import ShoppingCart from "../../common/Cart";
import Button from "../../common/button/index.";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <StyledNavbar position="static" elevation={0}>
      <Logo noWrap>Shoply.</Logo>
      <MobileLogo>Shoply.</MobileLogo>
      <NavbarCollapse />
      <NavItems extended={true} />
      <Stack direction="row" spacing={4} alignItems={"center"}>
        <ShoppingCart />
        <Button variant={"contained"} color="primary" title={"Login"} />
      </Stack>
    </StyledNavbar>
  );
};
export default Navbar;
