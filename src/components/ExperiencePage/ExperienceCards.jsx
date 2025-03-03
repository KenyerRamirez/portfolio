import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import "../../css/ExperiencePage.css";

const ExperienceCards = () => {
  return (
    <>
      <Grid
        className="main-cards-box-experience"
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ pb: 12 }}
      >
        <Grid item xs={4} sm={4} md={4} className="first-box-experience">
          <Box className="card-shadow-experience"></Box>
          <Card className="card-container-experience">
            <CardMedia
              className="image-card-box-multishop"
              component="img"
              image="/images/multishop.png"
              alt="Multishop-image"
            />
            <CardContent className="content-card-project">
              <Typography className="title-project" variant="p">
                Mobile Developer
              </Typography>
              <Typography className="context-experience" variant="body2">
                As a mobile developer, my responsibility was working with the
                Javascript stack, using React Native, Node, Express and MySQL.
              </Typography>
              <Box className="date-container">
                <Typography className="context-experience" variant="body2">
                  June 2023 - Sept. 2023
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} className="first-box-experience">
          <Box className="card-shadow-experience"></Box>
          <Card className="card-container-experience">
            <CardMedia
              className="image-card-box-hamal"
              component="img"
              image="/images/hamal.png"
              alt="Skynet-image"
            />
            <CardContent className="content-card-project">
              <Typography className="title-project" variant="p">
                Full Stack Developer
              </Typography>
              <Typography className="context-experience" variant="body2">
                As a Full Stack Developer, I’ve working on JS technologies, like
                React, Next and Remix in front, and Node with Nest and Express
                in back. Using Cypress and AWS as well.
              </Typography>
              <Box className="date-container">
                <Typography className="context-experience" variant="body2">
                  Sept. 2023 - March 2025
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box className="card-shadow-experience"></Box>
          <Card className="card-container-experience">
            <CardMedia
              className="image-card-box-sofitasa"
              component="img"
              image="/images/sofitasa.png"
              alt="Skynet-image"
            />
            <CardContent className="content-card-project">
              <Typography className="title-project" variant="p">
                Full Stack Developer
              </Typography>
              <Typography className="context-experience" variant="body2">
                As a Full Stack Developer, I’ve working with Next.js, and I start to learn and work with ASP.NET for building MVC applications for differents departments of the bank.
              </Typography>
              <Box className="date-container">
                <Typography className="context-experience" variant="body2">
                  Dec. 2024 - Currently
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ExperienceCards;
