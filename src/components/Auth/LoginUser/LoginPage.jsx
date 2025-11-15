import React, { useState, useMemo } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormWrapper from "../../../utils/Reusable/FormWrapper";
import FormInput from "../../../utils/Reusable/FormInput";
import { loginUser } from "../../../slices/userSlice";
import TerminalAlert from "../../../utils/Reusable/TerminalAlert";
import TerminalLoader from "../../../utils/Reusable/TerminaLoader";

const LoginPage = ({ onHelpClick }) => {
  const dispatch = useDispatch();

  const { theme } = useSelector((s) => s.theme);
  const { loading, error } = useSelector((s) => s.user);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    dispatch(loginUser(form));
  };

  const styles = useMemo(
    () => ({
      primaryBtn: {
        color: theme.fontColor,
        bgcolor: theme.background,
        textTransform: "none",
        fontFamily: "Roboto Mono",
        fontSize: "16px",
        "&:hover": { bgcolor: theme.cardBackground },
        mt: 1,
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
    <FormWrapper tag="Welcome back, note logger" loading={loading}>
      {loading && (
        <TerminalLoader message="> Processing request..." theme={theme} />
      )}

      {error && <TerminalAlert theme={theme} message={error} />}
      <FormInput
        label="Email:"
        name="username"
        value={form.username}
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
        onClick={handleLogin}
      >
        Let's get you logged in!
      </Button>
      <Button sx={styles.linkBtn} onClick={onHelpClick}>
        {"> New user? Register"}
      </Button>
    </FormWrapper>
  );
};

export default LoginPage;
