import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import FormWrapper from "../../../utils/Reusable/FormWrapper";
import FormInput from "../../../utils/Reusable/FormInput";

const RegisterPage = () => {
  const { theme } = useSelector((s) => s.theme);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <FormWrapper tag={"Welcome, future note logger"}>
      <FormInput
        label="Name:"
        name="name"
        value={form.name}
        onChange={handleChange}
        theme={theme}
      />
      <FormInput
        label="Email:"
        name="email"
        value={form.email}
        onChange={handleChange}
        theme={theme}
      />
      <FormInput
        label="> Password:"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        theme={theme}
      />
      <Button
        fullWidth
        variant="contained"
        sx={{
          color: theme.fontColor,
          bgcolor: theme.background,
          textTransform: "none",
          fontFamily: "Roboto Mono",
          "&:hover": { bgcolor: theme.cardBackground },
          fontSize: "16px",
          mt: 1,
        }}
      >
        Let’s Begin the Log Journey
      </Button>
      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          color: theme.fontColor,
          fontFamily: "Roboto Mono",
          fontSize: "13px",
          cursor: "pointer",
        }}
      >
        {"> Already have an account? Login"}
      </Typography>
    </FormWrapper>
  );
};

export default RegisterPage;
