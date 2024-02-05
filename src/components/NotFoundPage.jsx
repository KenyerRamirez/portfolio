import { Typography, Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bolder",
          mt: "120px",
          mb: 3,
        }}
      >
        Page not found 😥
      </Typography>
      <Link
        href="/"
        sx={{
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          fontSize: 20,
          textDecoration: "none",
          color: "white",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Press here to go back Home
      </Link>
    </>
  );
};

export default NotFoundPage;
