import { TextField, Typography } from "@mui/material";

const FormInput = ({ label, name, value, onChange, type = "text", theme }) => (
  <>
    <Typography sx={{ color: theme.fontColor, mb: 0.5, fontSize: "14px" }}>
      {label}
    </Typography>

    <TextField
      fullWidth
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      InputProps={{
        sx: {
          fontFamily: "Roboto Mono",
          color: theme.fontColor,
          bgcolor: theme.cardBackground,
          borderRadius: "6px",
        },
      }}
      sx={{ mb: 2 }}
    />
  </>
);

export default FormInput;
