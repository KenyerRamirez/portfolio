import React, { useState } from "react";
import { Box, Avatar, Link } from "@mui/material";
import "../../css/NavBar.css";

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
        </Box>
      </Box>
      <Box className="scroll-container">{children}</Box>
    </>
  );
};

export default NavBar;
