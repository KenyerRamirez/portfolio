import React from "react";
import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import "../../css/ContactPage.css";
import globalStyles from "../../css/index.module.css";

const ContactPage = () => {
  return (
    <>
      <Box id="contact" sx={{ mt: 8.5, mb: 20 }}></Box>
      <Box sx={{ mb: 10 }}>
        <Box className="title-contact-box">
          <Box className={globalStyles.titleProjectsBox}>
            <Typography className={globalStyles.titleProjectsText} variant="h4">
              Contact me
              <Typography
                className={globalStyles.titleProjectsText}
                variant="span"
                sx={{ color: "#4A6FA5" }}
              >
                .
              </Typography>
            </Typography>
            <Typography className={globalStyles.descProjectsText} variant="p">
              Do you want to work with me? Here is a form, please fill it
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
        <ContactForm />
      </Box>
    </>
  );
};

export default ContactPage;
