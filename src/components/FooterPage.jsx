import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../css/FooterPage.css";

const FooterPage = () => {
  return (
    <>
      <Box className="container" sx={{ mb: 8 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
            Are you interested
            <Typography variant="span" sx={{ color: "#0AA4FB" }}>
              ?
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontStyle: "italic", fontWeight: 200 }}
          >
            Let
            <Typography variant="span" sx={{ color: "#0AA4FB" }}>
              '
            </Typography>
            s work together, hit me up
            <Typography variant="span" sx={{ color: "#0AA4FB" }}>
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
        <Box>
          <Avatar
            alt="KR logo"
            src="/images/logo.png"
            sx={{ borderRadius: 0, width: "80px", height: "20px", mx: "auto" }}
          />    
        </Box>
      </Box>
    </>
  );
};

export default FooterPage;
