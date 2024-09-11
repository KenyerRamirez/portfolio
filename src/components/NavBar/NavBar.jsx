import React, { useState } from "react";
import { Box, Avatar, Link } from "@mui/material";
import "../../css/NavBar.css";
import { Icon } from "@iconify/react";

const NavBar = ({ children }) => {
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
          />
        </Box>
      </Box>
      <Box className="scroll-container">{children}</Box>
    </>
  );
};

export default NavBar;
