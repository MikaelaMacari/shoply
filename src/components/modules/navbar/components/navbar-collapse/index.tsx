"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { ToggleButton } from "./index.styled";
import useOpen from "src/hooks/useOpen";
import Sidebar from "../sidebar";

const NavbarCollapse = () => {
  const { open, handleOpen, handleToggle, handleClose } = useOpen();

  return (
    <>
      <Sidebar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <ToggleButton onClick={handleToggle}>
        <MenuIcon />
      </ToggleButton>
    </>
  );
};
export default NavbarCollapse;
