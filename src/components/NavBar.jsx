import React from "react";
import { Box, Avatar, Link } from "@mui/material";
import "../css/NavBar.css";

const NavBar = ({ children }) => {
  return (
    <>
      <Box className="nav-bar" sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box>
          <Avatar
            alt="KR logo"
            src="/images/logo.png"
            style={{ borderRadius: 0, width: "80px", height: "20px" }}
          />
        </Box>
        <Box sx={{ my: "auto", display: "flex" }}>
          <Link className="nav-link home" href="#">
            About
          </Link>
          <Link className="nav-link" href="#projects">
            Projects
          </Link>
          <Link className="nav-link last" href="#contact">
            Contact me
          </Link>
        </Box>
      </Box>
      <Box className="scroll-container" sx={{ textAlign: "center", mx: "300px" }}>{children}</Box>
    </>
  );
};

export default NavBar;
