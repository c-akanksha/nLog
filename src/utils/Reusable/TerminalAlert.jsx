import { Box } from "@mui/material";

const TerminalAlert = ({ message, theme }) => {
  if (!message) return null;

  return (
    <Box
      sx={{
        mt: 2,
        p: 1.5,
        borderRadius: "8px",
        fontFamily: "Roboto Mono",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        gap: 1.2,
        bgcolor: theme.background,
        color: theme.fontColor,
        border: `1px solid ${theme.fontColor}55`,
      }}
    >
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: "#ff5f56", // same red window dot
        }}
      ></Box>

      {`${message}`}
    </Box>
  );
};

export default TerminalAlert;
