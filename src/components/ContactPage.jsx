import React from "react";
import { Box, Typography } from "@mui/material";
import ContactForm from "./ContactForm";
import "../css/ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Box id="contact" sx={{ mb: 20 }}></Box>
      <Box sx={{ mb: 10 }}>
        <Box className="title-contact-box">
          <Typography
            className="title-contact-text"
            variant="h4"
            sx={{ fontWeight: "bolder", textAlign: "left", mb: 8 }}
          >
            CONTACT ME
            <Typography variant="span" sx={{ color: "#0AA4FB" }}>
              .
            </Typography>
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </>
  );
};

export default ContactPage;
