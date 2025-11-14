import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import NotesPage from "./components/Notes/NotesPage";
import { setTheme } from "./slices/themeSlice";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";

function App() {
  const { token } = useSelector((state) => state.user);
  const [systemTheme, setSystemTheme] = useState(null);
  const dispatch = useDispatch();

  const isAuth = token !== null;

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = isDarkMode ? "dark" : "light";
    setSystemTheme(theme);
    dispatch(setTheme(theme));
  }, []);
  return (
    <Box className={`${systemTheme}-theme root`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/notes" /> : <AuthPage />}
          />
          <Route
            path="/notes"
            element={isAuth ? <NotesPage /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
