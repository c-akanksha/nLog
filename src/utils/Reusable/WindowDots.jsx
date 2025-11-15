import { Box, Typography } from "@mui/material";

const WindowDots = ({ loading, theme, tag }) => (
  <Box
    sx={{
      borderBottom: `1px solid ${theme.fontColor}`,
      p: 1.5,
      mb: 2,
      display: "flex",
      alignItems: "baseline",
      gap: 1,
    }}
  >
    {["#ff5f56", "#ffbd2e", "#27c93f"].map((color, i) => (
      <Box
        key={i}
        sx={{
          width: 12,
          height: 12,
          bgcolor: color,
          borderRadius: "50%",
          animation: loading ? "blink 1s infinite ease-in-out" : "none",
          animationDelay: loading ? `${i * 0.2}s` : "0s",
          "@keyframes blink": {
            "0%": { opacity: 1 },
            "50%": { opacity: 0.3 },
            "100%": { opacity: 1 },
          },
        }}
      />
    ))}
    <Typography
      sx={{
        fontFamily: "Roboto Mono",
        color: theme.fontColor,
        fontSize: "20px",
      }}
    >
      {tag}
    </Typography>
  </Box>
);

export default WindowDots;
