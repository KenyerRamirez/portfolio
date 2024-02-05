import { Box, Button, CircularProgress } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/ContactPage.css";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    return email.includes("@");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.info("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.warn("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const result = await emailjs.sendForm(
        "service_6z5fibk",
        "template_458xqv4",
        form.current,
        "CR9_0SSiYWvGN2qa6"
      );
      toast.success("Email sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error(
        "There was an error sending email, go to the footer for more information."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        theme="dark"
        closeOnClick
        stacked
        style={{ textAlign: "left", marginTop: 70 }}
      />
      <Box
        className="main-form-box"
        sx={{
          width: "100%",
          backgroundColor: "#2E2E2E",
          borderBottom: "4px solid #676767",
          borderTop: "1px solid #676767",
          borderLeft: "1px solid #676767",
          borderRight: "1px solid #676767",
          borderRadius: 4,
        }}
      >
        <Box className="form-inputs-box" sx={{ margin: "40px 120px 40px 100px" }}>
          <form ref={form}>
            <input
              type="text"
              name="user_name"
              className="input small"
              id="user_name"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="user_email"
              className="input small"
              id="user_email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!isValidEmail(email)}
              helperText={
                !isValidEmail(email) && "Please enter a valid email address."
              }
            />
            <textarea
              className="input description"
              id="description-input"
              name="message"
              placeholder="Description"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              multiline
            ></textarea>
            <Button
              className="button-download"
              variant="submit"
              sx={{
                bgcolor: "#FFFFFF",
                color: "#171717",
                borderRadius: 20,
                fontWeight: "bolder",
                "&:hover": {
                  bgcolor: "#0AA4FB",
                  color: "white",
                },
              }}
              onClick={sendEmail}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Send email"}
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
