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
import PublicRoute from "./components/route/PublicRoute";
import PrivateRoute from "./components/route/PrivateRoute";

function App() {
  const { token } = useSelector((state) => state.user);
  const [systemTheme, setSystemTheme] = useState(null);
  const dispatch = useDispatch();

  const isAuth = Boolean(token);

  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const theme = isDarkMode ? "dark" : "light";
    setSystemTheme(theme);
    dispatch(setTheme(theme));
  }, [dispatch]);

  return (
    <Box className={`${systemTheme}-theme root`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute isAuth={isAuth}>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/notes"
            element={
              <PrivateRoute isAuth={isAuth}>
                <NotesPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
