import React from "react";
import { navItems } from "src/assets/static/data/navbar";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { List as MuiList } from "@mui/material";
import { StyledList } from "./index.styled";

interface NavItemsInterface {
  extended?: boolean;
}

const NavItems = ({ extended }: NavItemsInterface) => {
  const List = extended ? StyledList : MuiList;
  if (extended) {
  }
  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={item.href} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
