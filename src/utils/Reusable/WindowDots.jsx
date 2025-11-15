import { Box, Typography } from "@mui/material";

const WindowDots = ({ theme, tag }) => (
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
    {["#ff5f56", "#ffbd2e", "#27c93f"].map((color) => (
      <Box
        key={color}
        sx={{ width: 12, height: 12, bgcolor: color, borderRadius: "50%" }}
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
