import React, { useState, ChangeEvent, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Typography } from "@mui/material";
import AlertComponent from "../alert/AlertComponent";

function ContactForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const { username, email, message } = formData;

  const [formError, setFormError] = useState<boolean | undefined>(false);

  const [successMessage, setSuccessMessage] = useState<boolean | undefined>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormError(undefined);
    }, 5000);

    return () => clearTimeout(timer);
  }, [formError]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccessMessage(undefined);
    }, 5000);

    return () => clearTimeout(timer);
  }, [successMessage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Do something with the form data, like sending it to an API
    console.log(username, email, message);
    if (!username || !email || !message) {
      setFormError(true);
      setFormData({
        username: "",
        email: "",
        message: "",
      });
      return;
    }

    setSuccessMessage(true);

    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <TextField
        error={formError}
        label="NAME"
        variant="standard"
        name="username"
        size="small"
        value={username}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          style: { color: "#d9d9d9" },
        }}
        sx={{ paddingY: "1rem" }}
      />
      <TextField
        error={formError}
        type="email"
        label="EMAIL"
        variant="standard"
        size="small"
        name="email"
        value={email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{ paddingY: "1rem" }}
        InputLabelProps={{
          style: { color: "#d9d9d9" },
        }}
      />
      <TextField
        error={formError}
        type="text"
        label="MESSAGE"
        variant="standard"
        size="small"
        name="message"
        value={message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
        margin="normal"
        sx={{ paddingY: "1rem" }}
        InputLabelProps={{
          style: { color: "#d9d9d9" },
        }}
      />
      {formError && (
        <Typography color="red" variant="subtitle1">
          Please fill in all form fields
        </Typography>
      )}

      {successMessage && <AlertComponent />}
      <Button
        sx={{
          color: "#fff",
          "&:hover": {
            color: "#4ee1a0",
          },
          borderBottom: "1px solid #4ee1a0",
          alignSelf: "flex-end",
          paddingRight: "2rem",
        }}
        type="submit"
        variant="text"
        size="large"
      >
        SEND MESSAGE
      </Button>
    </Box>
  );
}

export default ContactForm;
