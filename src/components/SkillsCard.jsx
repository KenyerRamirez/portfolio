import { Box, Grid, Tooltip } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import "../css/SkillsPage.css";

const SkillsCard = () => {
  return (
    <>
      <Box
        className="skills-box"
        sx={{
          width: "100%",
          backgroundColor: "#2E2E2E",
          borderBottom: "4px solid #676767",
          borderTop: "1px solid #676767",
          borderLeft: "1px solid #676767",
          borderRight: "1px solid #676767",
          borderRadius: 3,
        }}
      >
        <Grid
          className="skills-logos-box"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: "center", padding: 5 }}
        >
          <Grid className="logo-pack" item xs={2}>
            <Tooltip title="React.js / React Native">
              <Box sx={{ mb: 2 }}>
                <Icon icon="mdi:react" color="white" width="40" height="40" />
              </Box>
            </Tooltip>
            <Tooltip title="MySQL">
              <Box className="logo-right">
                <Icon
                  icon="simple-icons:mysql"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={2}>
            <Tooltip title="Figma">
              <Box sx={{ mb: 2 }}>
                <Icon
                  icon="solar:figma-bold"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Express.js">
              <Box className="logo-right">
                <Icon
                  icon="simple-icons:express"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={2}>
            <Tooltip title="PostgreSQL">
              <Box sx={{ mb: 2 }}>
                <Icon
                  icon="akar-icons:postgresql-fill"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Node.js">
              <Box className="logo-right">
                <Icon
                  icon="akar-icons:node-fill"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={2}>
            <Tooltip title="MongoDB">
              <Box sx={{ mb: 2 }}>
                <Icon
                  icon="devicon-plain:mongodb-wordmark"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Python">
              <Box className="logo-right">
                <Icon
                  icon="akar-icons:python-fill"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={2}>
            <Tooltip title="Lavarel">
              <Box sx={{ mb: 2 }}>
                <Icon
                  icon="simple-icons:laravel"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Git">
              <Box className="logo-right">
                <Icon icon="bi:git" color="white" width="40" height="40" />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={2}>
            <Tooltip title="Cypress">
              <Box>
                <Icon
                  icon="simple-icons:cypress"
                  color="white"
                  width="40"
                  height="40"
                />
              </Box>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SkillsCard;
