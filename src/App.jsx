import { useSelector } from "react-redux";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import NotesPage from "./components/Notes/NotesPage";
function App() {
  const { token } = useSelector((state) => state.user);
  const isAuth = token !== null;
  return (
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
  );
}

export default App;
