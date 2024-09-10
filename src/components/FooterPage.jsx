import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../css/FooterPage.css";

const FooterPage = () => {
  return (
    <>
      <Box className="container">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" className="footer-title">
            Let
            <Typography variant="span" sx={{ color: "#4A6FA5" }}>
              '
            </Typography>
            s work together, hit me up
            <Typography variant="span" sx={{ color: "#4A6FA5" }}>
              !
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ mb: 3 }}>
          <Link
            className="email"
            to="mailto:kenyer_2002@hotmail.com?subject=Hey!%20I'm%20interested%20to%20work%20with%20you!"
          >
            If you can't send an email through the form, click here.
          </Link>
        </Box>
        <Box sx={{ mb: -3 }}>
          <p className="footer-font">
            <span className="footer-span">{"< >"}</span>RAMUSSDEV
          </p>
        </Box>
      </Box>
    </>
  );
};

export default FooterPage;
