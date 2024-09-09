import React from "react";
import { Box, Typography } from "@mui/material";
import "../../css/ExperiencePage.css";
import globalStyles from "../../css/index.module.css";
import ExperienceCards from "./ExperienceCards";

const ExperiencePage = () => {
  return (
    <>
      <Box sx={{ mt: 12 }} id="experience"></Box>
      <Box className="experience-box">
        <Box className="title-skills-box">
          <Box className={globalStyles.titleProjectsBox}>
            <Typography className={globalStyles.titleProjectsText} variant="h4">
              My Experience
              <Typography
                className={globalStyles.titleProjectsText}
                variant="span"
                sx={{ color: "#4A6FA5" }}
              >
                .
              </Typography>
            </Typography>
            <Typography className={globalStyles.descProjectsText} variant="p">
            Check out my work experience on the companies I've worked with
              <Typography
                className={globalStyles.descProjectsText}
                variant="span"
                sx={{ color: "#4A6FA5" }}
              >
                .
              </Typography>
            </Typography>
          </Box>
        </Box>
        <ExperienceCards />
      </Box>
    </>
  );
};

export default ExperiencePage;
