import { Box, Typography } from "@mui/material";
import React from "react";
import ProjectCards from "./ProjectCards";
import "../css/ProjectsPage.css";

const ProjectsPage = () => {
  return (
    <>
      <Box className="main-projects-box" id="projects"></Box>
      <Box className="projects-box" sx={{ mt: 10, mb: 5, display: 'inline-block' }}>
        <Box className="title-projects-box">
          <Typography
            className="title-projects-text"
            variant="h4"
            sx={{ fontWeight: "bolder", textAlign: "left", mt: 5, mb: 8 }}
          >
            PROJECTS
            <Typography
              className="title-projects-text"
              variant="span"
              sx={{ color: "#0AA4FB" }}
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
