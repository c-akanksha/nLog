import { Box, Typography, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState, useMemo } from "react";
import stickyNote from "../../assets/sticky-note.png";
import { useSelector } from "react-redux";
import RegisterPage from "./RegisterUser/RegisterPage";
import LoginPage from "./LoginUser/LoginPage";

const AuthPage = () => {
  const { theme } = useSelector((state) => state.theme);
  const [tabValue, setTabValue] = useState("1");

  const styles = useMemo(
    () => ({
      root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexWrap: "wrap",
        fontFamily: "Roboto Mono",
      },

      leftSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexBasis: { xs: "100%", sm: "40%", md: "40%", lg: "30%" },
        textAlign: "center",
      },

      rightSection: {
        flexBasis: { xs: "100%", sm: "50%", md: "50%", lg: "60%" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      },

      tabBase: {
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

      tabPanel: {
        backgroundColor: theme.background,
        color: theme.fontColor,
        fontFamily: "Roboto Mono",
      },

      tabListContainer: {
        backgroundColor: "transparent",
        "& .MuiTabs-indicator": {
          backgroundColor: theme.fontColor,
        },
      },
    }),
    [theme],
  );

  const handleChange = (_, newValue) => setTabValue(newValue);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.leftSection}>
        <img width="50%" height="50%" src={stickyNote} alt="note" />
        <Typography variant="h2">nLog</Typography>
        <img
          src={`https://readme-typing-svg.herokuapp.com?font=Roboto&size=15&duration=6000&pause=700&color=${theme.fontColor.replace(
            "#",
            "",
          )}&center=true&vCenter=true&width=550&lines=YOUR+NOTES,+LOGGED+AND+ORGANISED`}
          alt="Typing Animation"
        />
      </Box>
      <Box sx={styles.rightSection}>
        <TabContext value={tabValue}>
          <TabList
            onChange={handleChange}
            aria-label="User authentication panel"
            sx={styles.tabListContainer}
          >
            <Tab label="> Signup" value="1" sx={styles.tabBase} />
            <Tab label="> Login" value="2" sx={styles.tabBase} />
          </TabList>
          <TabPanel value="1" sx={styles.tabPanel}>
            <RegisterPage onHelpClick={() => setTabValue("2")} />
          </TabPanel>
          <TabPanel value="2" sx={styles.tabPanel}>
            <LoginPage onHelpClick={() => setTabValue("1")} />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default AuthPage;
