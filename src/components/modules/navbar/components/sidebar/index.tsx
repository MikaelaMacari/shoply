import React from "react";
import { Box, StyledSidebar } from "../navbar-collapse/index.styled";
import SidebarContent from "./components/Content";

const Sidebar = ({ open, handleOpen, handleClose, window }: any) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box component="nav">
      <StyledSidebar
        anchor={"right"}
        container={container}
        variant="temporary"
        open={open}
        onClose={handleClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <SidebarContent handleOpen={handleOpen} />
      </StyledSidebar>
    </Box>
  );
};

export default Sidebar;
