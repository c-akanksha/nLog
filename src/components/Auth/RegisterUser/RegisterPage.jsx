import React, { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormWrapper from "../../../utils/Reusable/FormWrapper";
import FormInput from "../../../utils/Reusable/FormInput";
import { signUpUser } from "../../../slices/userSlice";

const RegisterPage = ({ onHelpClick }) => {
  const { theme } = useSelector((s) => s.theme);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUserRegister = () => dispatch(signUpUser(form));

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
        onClick={handleUserRegister}
      >
        Let’s Begin the Log Journey
      </Button>
      <Button
        sx={{
          mt: 2,
          color: theme.fontColor,
          fontFamily: "Roboto Mono",
          fontSize: "14px",
          textTransform: "none",
        }}
        onClick={onHelpClick}
      >
        {"> Already have an account? Login"}
      </Button>
    </FormWrapper>
  );
};

export default RegisterPage;
