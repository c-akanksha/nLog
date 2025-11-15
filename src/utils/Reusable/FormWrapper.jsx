import { Box, Paper } from "@mui/material";
import WindowDots from "./WindowDots";
import { useSelector } from "react-redux";

const FormWrapper = ({ children, tag, loading }) => {
  const { theme } = useSelector((s) => s.theme);

  return (
    <Box>
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 420,
          minHeight: "520px",
          p: 3,
          bgcolor: theme.cardBackground,
          borderRadius: "10px",
        }}
      >
        <WindowDots theme={theme} tag={tag} loading={loading} />
        {children}
      </Paper>
    </Box>
  );
};

export default FormWrapper;
