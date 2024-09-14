import React, { useState } from "react";
import {
  Box,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import "../../css/NavBar.css";
import { Icon } from "@iconify/react";

const NavBar = ({ children }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const DrawerList = (
    <Box
      sx={{ width: 250, backgroundColor: "#17202a", height: "100vh" }}
      role="presentation"
    >
      <Icon
        onClick={() => setIsMenuOpened(false)}
        icon="ooui:arrow-previous-ltr"
        width="28px"
        height="28px"
        style={{
          color: "white",
          margin: "30px 16px -1px",
          backgroundColor: "#ffffff1f",
          borderRadius: 50,
          padding: 5,
        }}
      />
      <List>
        <ListItem className="list-item-container" disablePadding>
          <ListItemButton>
            <Link
              className="nav-link-drawer"
              href="#"
              onClick={() => setIsMenuOpened(false)}
            >
              <Icon
                icon="material-symbols:id-card"
                width="24px"
                height="24px"
                style={{ color: "white", marginRight: 8 }}
              />
              About
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item-container" disablePadding>
          <ListItemButton>
            <Link
              className="nav-link-drawer"
              href="#projects"
              onClick={() => setIsMenuOpened(false)}
            >
              <Icon
                icon="material-symbols:cards"
                width="24px"
                height="24px"
                style={{ color: "white", marginRight: 8 }}
              />
              Projects
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item-container" disablePadding>
          <ListItemButton>
            <Link
              className="nav-link-drawer"
              href="#skills"
              onClick={() => setIsMenuOpened(false)}
            >
              <Icon
                icon="icon-park-twotone:muscle"
                width="24px"
                height="24px"
                style={{ color: "white", marginRight: 8 }}
              />
              Skills
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item-container" disablePadding>
          <ListItemButton>
            <Link
              className="nav-link-drawer"
              href="#experience"
              onClick={() => setIsMenuOpened(false)}
            >
              <Icon
                icon="ant-design:project-twotone"
                width="24px"
                height="24px"
                style={{ color: "white", marginRight: 8 }}
              />
              Experience
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem className="list-item-container" disablePadding>
          <ListItemButton>
            <Link
              className="nav-link-drawer"
              href="#contact"
              onClick={() => setIsMenuOpened(false)}
            >
              <Icon
                icon="fluent:form-48-filled"
                width="24px"
                height="24px"
                style={{ color: "white", marginRight: 8 }}
              />
              Contact me
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Box className="nav-bar">
        <Box>
          <p className="navBarFont">
            <span className="navBarTextCode">{"< >"}</span>RAMUSSDEV
          </p>
        </Box>
        <Box className="nav-box">
          <Link className="nav-link" href="#">
            About
          </Link>
          <Link className="nav-link" href="#projects">
            Projects
          </Link>
          <Link className="nav-link" href="#skills">
            Skills
          </Link>
          <Link className="nav-link" href="#experience">
            Experience
          </Link>
          <Link className="nav-link" href="#contact">
            Contact me
          </Link>
          <Icon
            className="burger-menu"
            icon="iconamoon:menu-burger-horizontal"
            width={24}
            height={24}
            onClick={() => setIsMenuOpened(true)}
          />
          <Drawer
            anchor="right"
            open={isMenuOpened}
            onClose={() => setIsMenuOpened(false)}
          >
            {DrawerList}
          </Drawer>
        </Box>
      </Box>
      <Box className="scroll-container">{children}</Box>
    </>
  );
};

export default NavBar;
