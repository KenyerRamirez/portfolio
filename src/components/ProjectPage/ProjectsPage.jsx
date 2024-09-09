import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCards from "./ProjectCards";
import "../../css/ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <>
      <Box className="main-projects-box" id="projects"></Box>
      <Box className="projects-box">
        <Box className="title-projects-box">
          <Typography className="title-projects-text" variant="h4">
            My Projects
            <Typography
              className="title-projects-text"
              variant="span"
              sx={{ color: "#4A6FA5" }}
            >
              .
            </Typography>
          </Typography>
          <Typography className="desc-projects-text" variant="p">
            Check out some of the projects I've worked on
            <Typography
              className="desc-projects-text"
              variant="span"
              sx={{ color: "#4A6FA5" }}
            >
              .
            </Typography>
          </Typography>
        </Box>
        <ProjectCards />
      </Box>
    </>
  );
};

export default ProjectsPage;
