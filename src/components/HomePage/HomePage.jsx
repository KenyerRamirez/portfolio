import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import "../../css/HomePage.css";

const HomePage = () => {
  const handleClickDownload = () => {
    window.location.href =
      "https://drive.usercontent.google.com/download?id=1d2bpR0AdahkPZDjrrmY9rSwUu6Os9Oyj&export=download&authuser=0&confirm=t&uuid=a63d838e-1cdd-46a8-a151-f4720c5eecba&at=AEz70l7Zda6wtM7qpzp4QKbghmiF:1741011144701";
  };
  return (
    <>
      <Box className="main-box">
        <img
          className="node-icon floating-icon"
          alt="node-icon"
          src="/icons/akar-icons_node-fill.png"
        />
        <img
          className="git-icon floating-icon"
          alt="git-icon"
          src="/icons/bi_git.png"
        />
        <img
          className="typescript-icon floating-icon"
          alt="typescript-icon"
          src="/icons/devicon_typescript.png"
        />
        <img
          className="react-icon floating-icon"
          alt="react-icon"
          src="/icons/fontisto_react.png"
        />
        <img
          className="next-icon floating-icon"
          alt="next-icon"
          src="/icons/Vector.png"
        />
        <img
          className="github-icon floating-icon"
          alt="github-icon"
          src="/icons/Vector-1.png"
        />
        <img
          className="vsc-icon floating-icon"
          alt="vsc-icon"
          src="/icons/vsc-icon.png"
        />
        <img
          className="jira-icon floating-icon"
          alt="jira-icon"
          src="/icons/jira-icon.png"
        />
        <img
          className="laravel-icon floating-icon"
          alt="laravel-icon"
          src="/icons/file-icons_laravel.png"
        />
        <Grid container spacing={2} className="main-home-box-container">
          <Grid item xs={6}>
            <Box className="avatar-box">
              <img
                className="avatar"
                alt="KR profile"
                src="/images/profile_picture.jpg"
              />
              <Box className="avatar-shadow"></Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className="about-box">
              <Typography className="title-name" variant="h4">
                Hi, I'm Kenyer Ramírez
                <Typography variant="span" sx={{ color: "#4A6FA5" }}>
                  .
                </Typography>
              </Typography>
              <Typography className="title-profession" variant="h6">
                Software Engineer
                <Typography variant="span" sx={{ color: "#4A6FA5" }}>
                  .
                </Typography>
              </Typography>
              <Typography className="text-about">
                Humble, professional and a discipline person. I'm a mobile and
                web developer, experienced in Full-Stack JS development.
              </Typography>
              <Box
                className="social-media-icons"
                sx={{ mb: 2, display: "flex", alignItems: "center", mt: 2 }}
              >
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
                  <LinkedInIcon fontSize="large" sx={{ mr: 1, fontSize: 40 }} />
                </Link>
                <Link
                  className="icon"
                  to="https://www.instagram.com/ramussdev?igsh=MTlrZDhjMGY2dnhyNw=="
                  target="_blank"
                >
                  <InstagramIcon fontSize="large" />
                </Link>
              </Box>
              <Box className="button-download-container">
                <Button
                  className="button-download"
                  variant="contained"
                  onClick={handleClickDownload}
                >
                  <Box className="button-download-shadow"></Box>
                  <DownloadIcon />
                  <Typography className="button-download-text">
                    Download CV
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
