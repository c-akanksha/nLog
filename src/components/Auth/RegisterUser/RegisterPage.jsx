import React, { useState, useMemo } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormWrapper from "../../../utils/Reusable/FormWrapper";
import FormInput from "../../../utils/Reusable/FormInput";
import { signUpUser } from "../../../slices/userSlice";
import TerminalAlert from "../../../utils/Reusable/TerminalAlert";
import TerminalLoader from "../../../utils/Reusable/TerminaLoader";

const RegisterPage = ({ onHelpClick }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);
  const { loading, error } = useSelector((state) => state.user);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserRegister = async () => {
    const result = await dispatch(signUpUser(form));
    if (signUpUser.fulfilled.match(result)) {
      onHelpClick();
    }
  };

  const styles = useMemo(
    () => ({
      primaryBtn: {
        color: theme.fontColor,
        bgcolor: theme.background,
        textTransform: "none",
        fontFamily: "Roboto Mono",
        fontSize: "16px",
        mt: 1,
        "&:hover": { bgcolor: theme.cardBackground },
      },

      linkBtn: {
        mt: 2,
        color: theme.fontColor,
        fontFamily: "Roboto Mono",
        fontSize: "14px",
        textTransform: "none",
      },
    }),
    [theme],
  );

  return (
    <FormWrapper tag="Welcome, future note logger" loading={loading}>
      {loading && (
        <TerminalLoader message="> processing request" theme={theme} />
      )}

      {error && <TerminalAlert theme={theme} message={error} />}
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
        label="Password:"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        theme={theme}
      />
      <Button
        fullWidth
        variant="contained"
        disabled={loading}
        sx={styles.primaryBtn}
        onClick={handleUserRegister}
      >
        Let’s Begin the Log Journey
      </Button>
      <Button sx={styles.linkBtn} onClick={onHelpClick}>
        {"> Already have an account? Login"}
      </Button>
    </FormWrapper>
  );
};

export default RegisterPage;
