import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import stickyNote from "../../assets/sticky-note.png";
import { useSelector } from "react-redux";
import RegisterPage from "./RegisterUser/RegisterPage";
import LoginPage from "./LoginUser/LoginPage";

const AuthPage = () => {
  const { theme } = useSelector((state) => state.theme);
  const [tabValue, setTabValue] = useState("1");

  const classes = {
    tabBaseStyles: {
      fontFamily: "Roboto Mono",
      fontSize: "18px",
      textTransform: "none",
      color: theme.fontColor,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: theme.cardBackground,
      },
      "&.Mui-selected": {
        fontWeight: "bold",
        color: theme.fontColor,
        borderBottom: `2px solid ${theme.fontColor}`,
      },
    },
    tabPanelStyles: {
      backgroundColor: theme.cardBackground,
      color: theme.fontColor,
      fontFamily: "Roboto Mono",
    },
    leftSideFlex: {
      xs: "100%",
      sm: "30%",
      md: "30%",
      lg: "20%",
    },
    rightSideFlex: {
      xs: "100%",
      sm: "50%",
      md: "50%",
      lg: "60%",
    },
  };

  const handleChange = (_, newValue) => setTabValue(newValue);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontFamily: "Roboto Mono",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexBasis: classes.leftSideFlex,
        }}
      >
        <img width="50%" height="50%" src={stickyNote} alt="note" />
        <Typography variant="h2" sx={{ fontFamily: "Roboto Mono" }}>
          nLog
        </Typography>

        <img
          src={`https://readme-typing-svg.herokuapp.com?font=Roboto&size=15&duration=6000&pause=700&color=${
            theme.fontColor.split("#")[1]
          }&center=true&vCenter=true&width=550&lines=YOUR+NOTES,+LOGGED+AND+ORGANISED`}
          alt="Typing Animation"
        />
      </Box>

      <Box sx={{ flexBasis: classes.rightSideFlex }}>
        <TabContext value={tabValue}>
          <Box sx={{ backgroundColor: theme.cardBackground }}>
            <TabList
              onChange={handleChange}
              aria-label="User authentication panel"
              sx={{
                backgroundColor: "transparent",
                "& .MuiTabs-indicator": {
                  backgroundColor: theme.fontColor,
                },
              }}
            >
              <Tab label="> Signup" value="1" sx={classes.tabBaseStyles} />
              <Tab label="> Login" value="2" sx={classes.tabBaseStyles} />
            </TabList>
          </Box>

          <TabPanel value="1" sx={classes.tabPanelStyles}>
            <RegisterPage />
          </TabPanel>

          <TabPanel value="2" sx={classes.tabPanelStyles}>
            <LoginPage />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default AuthPage;
