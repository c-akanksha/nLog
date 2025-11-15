import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import FormWrapper from "../../../utils/Reusable/FormWrapper";
import FormInput from "../../../utils/Reusable/FormInput";

const LoginPage = () => {
  const { theme } = useSelector((s) => s.theme);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <FormWrapper tag={"Welcome back, note logger"}>
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
        }}
      >
        Let's get you logged in!
      </Button>

      <Typography
        sx={{
          textAlign: "center",
          mt: 2,
          color: theme.fontColor,
          fontFamily: "Roboto Mono",
          fontSize: "13px",
        }}
      >
        {"> New user? Register"}
      </Typography>
    </FormWrapper>
  );
};

export default LoginPage;
