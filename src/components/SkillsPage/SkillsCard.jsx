import { Box, Grid, Tooltip } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import "../../css/SkillsPage.css";

const SkillsCard = () => {
  return (
    <>
      <Box className="skills-box">
        <Grid
          className="skills-logos-box"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ justifyContent: "center", padding: 5 }}
        >
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="React.js / React Native">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="mdi:react"
                  color="#17202A"
                  width="70"
                  className="icon-react"
                />
              </Box>
            </Tooltip>
            <Tooltip title="MySQL">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="simple-icons:mysql"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="Figma">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="solar:figma-bold"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Express.js">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="simple-icons:express"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="PostgreSQL">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="akar-icons:postgresql-fill"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Node.js">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="akar-icons:node-fill"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="MongoDB">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="devicon-plain:mongodb-wordmark"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Python">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="akar-icons:python-fill"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="Lavarel">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="simple-icons:laravel"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Git">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="bi:git"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="Cypress">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="simple-icons:cypress"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Docker">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="simple-icons:docker"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
          </Grid>
          <Grid className="logo-pack" item xs={1.4}>
            <Tooltip title="Next.js">
              <Box className="logo-shadow"></Box>
              <Box className="logo-container" sx={{ mb: 2 }}>
                <Icon
                  icon="teenyicons:nextjs-solid"
                  color="#17202A"
                  width="60"
                  className="icon"
                />
              </Box>
            </Tooltip>
            <Tooltip title="Tailwind">
              <Box className="logo-shadow logo-right"></Box>
              <Box className="logo-container logo-right">
                <Icon
                  icon="mdi:tailwind"
                  color="#17202A"
                  width="60"
                  className="icon"
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
