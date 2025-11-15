import React from "react";
import { Box, Typography } from "@mui/material";

const TerminalLoader = ({ message = "> processing request", theme }) => {
  return (
    <Box
      sx={{
        border: `1px solid ${theme.fontColor}`,
        backgroundColor: theme.cardBackground,
        p: 1.5,
        borderRadius: "6px",
        mb: 2,
        display: "flex",
        alignItems: "center",
        gap: 1.2,
        fontFamily: "Roboto Mono",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          bgcolor: "#ffbd2e",
          animation: "blink 1s infinite ease-in-out",
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0.3 },
            "100%": { opacity: 1 },
          },
        }}
      />

      <Typography
        sx={{
          color: theme.fontColor,
          fontSize: "16px",
          opacity: 0.9,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default TerminalLoader;
