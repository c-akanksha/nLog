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
      fontSize: "20px",
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
      backgroundColor: theme.background,
      color: theme.fontColor,
      fontFamily: "Roboto Mono",
    },
    leftSideFlex: {
      xs: "100%",
      sm: "40%",
      md: "40%",
      lg: "30%",
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

      <Box
        sx={{
          flexBasis: classes.rightSideFlex,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <TabContext value={tabValue}>
          <Box sx={{ backgroundColor: theme.background }}>
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
            <RegisterPage onHelpClick={() => setTabValue("2")} />
          </TabPanel>

          <TabPanel value="2" sx={classes.tabPanelStyles}>
            <LoginPage onHelpClick={() => setTabValue("1")} />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default AuthPage;
