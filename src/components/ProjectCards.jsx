import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import "../css/ProjectsPage.css";

const ProjectCards = () => {
  return (
    <>
      <Grid
        className="main-cards-box"
        sx={{ flexGrow: 1 }}
        container
        spacing={2}
      >
        <Grid item xs={6}>
          <Card
            sx={{
              position: "relative",
              maxWidth: 345,
              borderRadius: 4,
              borderBottom: "4px solid #676767",
              borderTop: "1px solid #676767",
              borderLeft: "1px solid #676767",
              borderRight: "1px solid #676767",
              cursor: "default",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/multishop-app.jpg"
                alt="Multishop-image"
                sx={{ position: "relative" }}
              />
              <CardContent
                className="content-card-project"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6),rgba(0,0,0,0.9))`,
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  visibility: "visible",
                  transition: "0.3s",
                  opacity: 1,
                }}
              >
                <Typography
                  className="context-project"
                  variant="body2"
                  color="white"
                  sx={{ textAlign: "left", mb: 2, mt: 4, mr: 5 }}
                >
                  This is a{" "}
                  <Typography variant="span" sx={{ fontWeight: "bolder" }}>
                    Barcode Scanner
                  </Typography>{" "}
                  for Android, made for a company who sell his products to
                  different clients like: pharmacies, supermarkets and others
                  kind of shops.
                </Typography>
                <Box sx={{ textAlign: "left", display: "flex" }}>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="25"
                      height="25"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="25"
                      height="25"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      color="white"
                      width="25"
                      height="25"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="cib:mysql"
                      color="white"
                      width="25"
                      height="25"
                    />
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              position: "relative",
              maxWidth: 345,
              borderRadius: 4,
              borderBottom: "4px solid #676767",
              borderTop: "1px solid #676767",
              borderLeft: "1px solid #676767",
              borderRight: "1px solid #676767",
              cursor: "default",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/skynet-app.jpg"
                alt="Multishop-image"
                sx={{ position: "relative" }}
              />
              <CardContent
                className="content-card-project"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6),rgba(0,0,0,0.9))`,
                  color: "#FFFFFF",
                  padding: "10px 20px",
                  visibility: "visible",
                  transition: "0.3s",
                  opacity: 1,
                }}
              >
                <Typography
                  className="context-project"
                  variant="body2"
                  color="white"
                  sx={{ textAlign: "left", mb: 2, mt: 4, mr: 5 }}
                >
                  This is a{" "}
                  <Typography variant="span" sx={{ fontWeight: "bolder" }}>
                    Campaign Manager
                  </Typography>{" "}
                  for a marketing company named Sales Factory, this project
                  isn't mine, actually, I was contributor as a full stack
                  developer (web app).
                </Typography>
                <Box sx={{ textAlign: "left", display: "flex" }}>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="25"
                      height="25"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="25"
                      height="25"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      color="white"
                      width="25"
                      height="25"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      width="25"
                      height="25"
                      icon="akar-icons:postgresql-fill"
                      style={{ color: "white" }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectCards;
