import React, { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import "../../css/ProjectsPage.css";

const ProjectCards = () => {
  const [isOptionSelected, setIsOptionSelected] = useState(1);
  const [isOptionAndroid, setisOptionAndroid] = useState(1);
  const onPressPreviousProject = () => {
    setisOptionAndroid(isOptionAndroid - 1);
  };
  const onPressNextProject = () => {
    setisOptionAndroid(isOptionAndroid + 1);
  };
  return (
    <>
      <Box className="desktop-view">
        {isOptionSelected === 1 && (
          <Grid
            className="main-cards-box"
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={4} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/multishop-app.jpg"
                  alt="Multishop-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Barcode Scanner
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    An Android App, made for a company who sell his products to
                    different clients like: pharmacies, supermarkets and others
                    kind of shops (Project is mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="cib:mysql"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link
                      className="link-box-active"
                      href="https://github.com/KenyerRamirez/codebar-scanner-front"
                      target="_blank"
                    >
                      Source Code
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/skynet-app.jpg"
                  alt="Skynet-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Campaigns Manager
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    A Web App, made for a marketing company named Sales factory
                    located in US. I was contributor as a Full Stack Developer
                    (Project isn't mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:postgresql-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="fontisto:aws"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link className="link-box-desactive">
                      No source available
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/quickorder.jpg"
                  alt="Quickorder-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Take Orders App
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    An Android App for taking restaurant orders named
                    QuickOrder, it is developing by me as on front-end as on
                    back-end (Project is mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:postgresql-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link
                      className="link-box-active"
                      href="https://github.com/KenyerRamirez/front-app-quickorder"
                      target="_blank"
                    >
                      Source Code
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        {isOptionSelected === 2 && (
          <Grid
            className="main-cards-box"
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={4} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/clew.jpg"
                  alt="Multishop-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Marketing Bot AI
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    A Web App, made for Sales Factory, is a Chat Bot AI for
                    conversations about Marketing and more, I was contributor as
                    a Front-End Developer (Project isn't mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:python"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="teenyicons:azure-outline"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="devicon-plain:cosmosdb"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link className="link-box-desactive">
                      No source available
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/fedecamaras.jpg"
                  alt="Skynet-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Fedecamaras App
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    A Mobile App, using Strapi as database, is an app for events
                    and assemblies of the Fedecamaras company, I was contributor
                    as a Full Stack dev (Project isn't mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link className="link-box-desactive">
                      No source available
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/loserball.jpg"
                  alt="Quickorder-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Loserball App
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    A Mobile App named Loserball, a betting app for an american
                    company, I was contributor as a Full-Stack Developer
                    (Project isn't mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:postgresql-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link className="link-box-desactive">
                      No source available
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        {isOptionSelected === 3 && (
          <Grid
            className="main-cards-box"
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/pelota-perdida.jpg"
                  alt="Multishop-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Champsraise
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    A Web App, for a company from the United States about
                    campaigns and donations, I was contributor as a Front-End
                    developer (Project isn't mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="teenyicons:nextjs-solid"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="mdi:tailwind"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link className="link-box-desactive">
                      No source available
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
              <Box className="card-shadow"></Box>
              <Card className="card-container">
                <CardMedia
                  className="image-card-box"
                  component="img"
                  image="/images/evaluations.jpg"
                  alt="Skynet-image"
                />
                <CardContent className="content-card-project">
                  <Typography className="title-project" variant="p">
                    Evaluations Web
                  </Typography>
                  <Typography className="context-project" variant="body2">
                    A Web App, was a technical test for a software company.
                    Developed by me as on Back-End as on Front-End (Project is
                    mine).
                  </Typography>
                  <Box
                    sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                  >
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="teenyicons:mongodb-outline"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:material-ui"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                  </Box>
                  <Box className="button-link-container">
                    <Link
                      className="link-box-active"
                      href="https://github.com/KenyerRamirez/front-app-test"
                      target="_blank"
                    >
                      Source Code
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
        <Box className="buttons-container">
          <Box
            className={isOptionSelected === 1 ? "option-selected" : "option"}
            onClick={() => setIsOptionSelected(1)}
          ></Box>
          <Box
            className={isOptionSelected === 2 ? "option-selected" : "option"}
            onClick={() => setIsOptionSelected(2)}
          ></Box>
          <Box
            className={isOptionSelected === 3 ? "option-selected" : "option"}
            onClick={() => setIsOptionSelected(3)}
          ></Box>
        </Box>
      </Box>
      <Box className="mobile-view">
        {isOptionAndroid === 1 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/multishop-app.jpg"
                alt="Multishop-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Barcode Scanner
                </Typography>
                <Typography className="context-project" variant="body2">
                  An Android App, made for a company who sell his products to
                  different clients like: pharmacies, supermarkets and others
                  kind of shops (Project is mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="cib:mysql"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link
                    className="link-box-active"
                    href="https://github.com/KenyerRamirez/codebar-scanner-front"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 2 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/skynet-app.jpg"
                alt="Skynet-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Campaigns Manager
                </Typography>
                <Typography className="context-project" variant="body2">
                  A Web App, made for a marketing company named Sales factory
                  located in US. I was contributor as a Full Stack Developer
                  (Project isn't mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:postgresql-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="fontisto:aws"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link className="link-box-desactive">
                    No source available
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 3 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/quickorder.jpg"
                alt="Quickorder-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Take Orders App
                </Typography>
                <Typography className="context-project" variant="body2">
                  An Android App for taking restaurant orders named QuickOrder,
                  it is developing by me as on front-end as on back-end (Project
                  is mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:postgresql-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link
                    className="link-box-active"
                    href="https://github.com/KenyerRamirez/front-app-quickorder"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 4 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/clew.jpg"
                alt="Multishop-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Marketing Bot AI
                </Typography>
                <Typography className="context-project" variant="body2">
                  A Web App, made for Sales Factory, is a Chat Bot AI for
                  conversations about Marketing and more, I was contributor as a
                  Front-End Developer (Project isn't mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:python"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="teenyicons:azure-outline"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="devicon-plain:cosmosdb"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link className="link-box-desactive">
                    No source available
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 5 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/fedecamaras.jpg"
                alt="Skynet-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Fedecamaras App
                </Typography>
                <Typography className="context-project" variant="body2">
                  A Mobile App, using Strapi as database, is an app for events
                  and assemblies of the Fedecamaras company, I was contributor
                  as a Full Stack dev (Project isn't mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link className="link-box-desactive">
                    No source available
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 6 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/loserball.jpg"
                alt="Quickorder-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Loserball App
                </Typography>
                <Typography className="context-project" variant="body2">
                  A Mobile App named Loserball, a betting app for an american
                  company, I was contributor as a Full-Stack Developer (Project
                  isn't mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="mdi:react"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:node-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <Icon
                      className="icon-project"
                      icon="simple-icons:express"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="akar-icons:postgresql-fill"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link className="link-box-desactive">
                    No source available
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 7 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/pelota-perdida.jpg"
                alt="Multishop-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Champsraise
                </Typography>
                <Typography className="context-project" variant="body2">
                  A Web App, for a company from the United States about
                  campaigns and donations, I was contributor as a Front-End
                  developer (Project isn't mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box>
                    <Icon
                      className="icon-project"
                      icon="teenyicons:nextjs-solid"
                      width="24"
                      height="24"
                      color="#8F8F8F"
                    />
                  </Box>
                </Box>
                <Box className="button-link-container">
                  <Link className="link-box-desactive">
                    No source available
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        {isOptionAndroid === 8 && (
          <Box className="mobile-card">
            <Box className="card-shadow"></Box>
            <Card className="card-container">
              <CardMedia
                className="image-card-box"
                component="img"
                image="/images/evaluations.jpg"
                alt="Skynet-image"
              />
              <CardContent className="content-card-project">
                <Typography className="title-project" variant="p">
                  Evaluations Web
                </Typography>
                <Typography className="context-project" variant="body2">
                  A Web App, was a technical test for a software company.
                  Developed by me as on Back-End as on Front-End (Project is
                  mine).
                </Typography>
                <Box
                  sx={{ textAlign: "left", display: "flex", marginY: "12px" }}
                >
                  <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="mdi:react"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="akar-icons:node-fill"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="simple-icons:express"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box sx={{ mr: 2 }}>
                      <Icon
                        className="icon-project"
                        icon="teenyicons:mongodb-outline"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                    <Box>
                      <Icon
                        className="icon-project"
                        icon="mdi:material-ui"
                        width="24"
                        height="24"
                        color="#8F8F8F"
                      />
                    </Box>
                </Box>
                <Box className="button-link-container">
                <Link
                      className="link-box-active"
                      href="https://github.com/KenyerRamirez/front-app-test"
                      target="_blank"
                    >
                      Source Code
                    </Link>
                </Box>
              </CardContent>
            </Card>
          </Box>
        )}
        <Box className="buttons-container">
          <Icon
            className="button-previous"
            icon="fluent:previous-frame-24-filled"
            width="30px"
            height="30px"
            onClick={isOptionAndroid === 1 ? null : onPressPreviousProject}
            style={
              isOptionAndroid === 1
                ? {
                    color: "#adadad",
                    backgroundColor: "#d8d8d8",
                    padding: 5,
                    borderRadius: 50,
                    mr: 10,
                    transition: ".3s",
                  }
                : {
                    color: "#17202a",
                    backgroundColor: "#d8d8d8",
                    padding: 5,
                    borderRadius: 50,
                    mr: 10,
                    transition: ".3s",
                  }
            }
          />
          <Typography className="number-item">{isOptionAndroid} / 8</Typography>
          <Icon
            className="button-next"
            icon="fluent:next-frame-24-filled"
            width="30px"
            height="30px"
            onClick={isOptionAndroid === 8 ? null : onPressNextProject}
            style={
              isOptionAndroid === 8
                ? {
                    color: "#adadad",
                    backgroundColor: "#d8d8d8",
                    padding: 5,
                    borderRadius: 50,
                    mr: 10,
                    transition: ".3s",
                  }
                : {
                    color: "#17202a",
                    backgroundColor: "#d8d8d8",
                    padding: 5,
                    borderRadius: 50,
                    mr: 10,
                    transition: ".3s",
                  }
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default ProjectCards;
