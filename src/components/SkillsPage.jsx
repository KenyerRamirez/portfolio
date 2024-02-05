import React from "react";
import SkillsCard from "./SkillsCard";
import { Box, Typography } from "@mui/material";
import "../css/SkillsPage.css";

const SkillsPage = () => {
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Box className="title-skills-box">
          <Typography
            className="title-skills-text"
            variant="h4"
            sx={{ fontWeight: "bolder", textAlign: "left", mt: 20, mb: 8 }}
          >
            SKILLS
            <Typography variant="span" sx={{ color: "#0AA4FB" }}>
              .
            </Typography>
          </Typography>
        </Box>
        <SkillsCard />
      </Box>
    </>
  );
};

export default SkillsPage;
