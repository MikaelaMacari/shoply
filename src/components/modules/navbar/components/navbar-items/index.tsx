import React from "react";
import { navItems } from "src/assets/static/data/navbar";
import { ListItem, ListItemButton } from "@mui/material";
import { List as MuiList } from "@mui/material";
import { StyledList, Divider, ListItemText, StyledLink } from "./index.styled";

interface NavItemsInterface {
  extended?: boolean;
}

const NavItems = ({ extended }: NavItemsInterface) => {
  const List = extended ? StyledList : MuiList;
  if (extended) {
    return (
      <List>
        {navItems.map((item, index) => {
          if (item.hasOwnProperty("main")) {
            return (
              <ListItem
                key={item.href}
                secondaryAction={
                  index !== navItems.length - 3 ? <Divider /> : null
                }
              >
                <StyledLink href={item.href}>
                  <ListItemText primary={item.label} />
                </StyledLink>
              </ListItem>
            );
          }
        })}
      </List>
    );
  } else {
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
  }
};

export default NavItems;
