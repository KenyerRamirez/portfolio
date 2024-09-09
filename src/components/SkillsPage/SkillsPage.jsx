import React from "react";
import SkillsCard from "./SkillsCard";
import { Box, Typography } from "@mui/material";
import "../../css/SkillsPage.css";
import globalStyles from "../../css/index.module.css";

const SkillsPage = () => {
  return (
    <>
      <Box sx={{ mt: 8.5 }} id="skills"></Box>
      <Box sx={{ mt: 20, mb: 5 }}>
        <Box className="title-skills-box">
          <Box className={globalStyles.titleProjectsBox}>
            <Typography className={globalStyles.titleProjectsText} variant="h4">
              My Skills
              <Typography
                className={globalStyles.titleProjectsText}
                variant="span"
                sx={{ color: "#4A6FA5" }}
              >
                .
              </Typography>
            </Typography>
            <Typography className={globalStyles.descProjectsText} variant="p">
              Here are some of the technologies and tools I'm proficient in
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
        <SkillsCard />
      </Box>
    </>
  );
};

export default SkillsPage;
