"use client";
import { Button, Logo, StyledNavbar } from "./index.styled";
import NavbarCollapse from "./components/navbar-collapse";
import { MobileLogo } from "./components/navbar-collapse/index.styled";
import NavItems from "./components/navbar-items";
import ShoppingCart from "src/components/common/Cart";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <StyledNavbar position="static" elevation={0}>
      <Logo noWrap>Shoply.</Logo>
      <MobileLogo>Shoply.</MobileLogo>
      <NavItems extended={true} />
      <Stack direction="row" spacing={4} alignItems={"center"}>
        <ShoppingCart />
        <Button variant={"contained"} color="primary">
          Login
        </Button>
      </Stack>
      <NavbarCollapse />
    </StyledNavbar>
  );
};
export default Navbar;
