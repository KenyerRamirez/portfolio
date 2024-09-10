import { Box, Button, CircularProgress, Link } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../css/ContactPage.css";

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
        theme="light"
        closeOnClick
        stacked
        style={{ textAlign: "left", marginTop: 70 }}
      />
      <Box className="form-container">
        <Box className="container-shadow"></Box>
        <Box
          className="form-inputs-box"
          sx={{ margin: "40px 120px 40px 100px" }}
        >
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
            <Box
              className="button-send-email-container"
              onClick={sendEmail}
              disabled={loading}
            >
              <Link className="button-send-email">
                {loading ? <CircularProgress size={20} sx={{ mt: .5, color: "#171717" }} /> : "Send email"}
              </Link>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
