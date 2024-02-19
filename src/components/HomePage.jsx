import React from "react";
import { Avatar, Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

const HomePage = () => {
  const handleClickDownload = () => {
    window.location.href =
      "https://drive.usercontent.google.com/u/0/uc?id=1oXko9TUHtw50fBa8SdMgnDo0fznUuDPd&export=download";
  };
  return (
    <>
      <Box
        className="main-box"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          mt: 25,
          mb: 10,
        }}
      >
        <Box>
          <Avatar
            className="avatar"
            alt="KR profile"
            src="/images/profile_picture.jpg"
            sx={{
              width: "285px",
              height: "285px",
              border: "1px solid #FFFFFF",
              boxShadow: "0 4px 10px 3px rgba(0, 0, 0, 0.37)",
            }}
          />
        </Box>
        <Box className="about-box" sx={{ textAlign: "left", width: "400px" }}>
          <Typography className="title-name" variant="h4" sx={{ fontWeight: "bolder", mb: 2 }}>
            Hi, I'm Kenyer Ramírez
            <Typography className="title-name" variant="span" sx={{ color: "#0AA4FB" }}>
              .
            </Typography>
          </Typography>
          <Typography className="title-profession" variant="h6" sx={{ fontWeight: "bolder", mb: 2 }}>
            Software Engineer
            <Typography className="title-profession" variant="span" sx={{ color: "#0AA4FB" }}>
              .
            </Typography>
          </Typography>
          <Typography className="text-about" sx={{ mb: 2 }}>
            Humble, professional and a discipline person. I'm a mobile and web
            developer, experienced in Full-Stack JS development.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Link
              className="icon"
              to="https://github.com/KenyerRamirez"
              target="_blank"
            >
              <GitHubIcon fontSize="large" sx={{ mr: 1 }} />
            </Link>
            <Link
              className="icon"
              to="https://www.linkedin.com/in/kenyer-ram%C3%ADrez-825216198/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" sx={{ mr: 1 }} />
            </Link>
            <Link
              className="icon"
              to="https://www.instagram.com/kenyerramirez_?igsh=aXU3dmZodHdocHZm"
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </Link>
          </Box>
          <Button
            className="button-download"
            variant="contained"
            sx={{
              bgcolor: "#FFFFFF",
              color: "#171717",
              borderRadius: 20,
              fontWeight: "bolder",
              "&:hover": {
                bgcolor: "#0AA4FB",
                color: "white",
              },
            }}
            onClick={handleClickDownload}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
