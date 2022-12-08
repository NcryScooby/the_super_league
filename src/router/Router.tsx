import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { AuthProvider } from "../contexts/auth/AuthProvider";
import Tournaments from "../pages/Tournaments/Tournaments";
import { RequireAuth } from "../contexts/auth/RequireAuth";
import NotFound from "../pages/NotFound/NotFound";
import ListTournamentById from "../pages/Tournaments/ListTournamentById/ListTournamentById";
import ListTeamByTournament from "../pages/Teams/ListTeamByTournament/ListTeamByTournament";
import Teams from "../pages/Teams/Teams";

const Router = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/tournaments"
            element={
              <RequireAuth>
                <Tournaments />
              </RequireAuth>
            }
          />
          <Route
            path="/tournaments/:id"
            element={
              <RequireAuth>
                <ListTournamentById />
              </RequireAuth>
            }
          />
          <Route
            path="/teams"
            element={
              <RequireAuth>
                <Teams />
              </RequireAuth>
            }
          />
          <Route
            path="/teams/tournament/:id"
            element={
              <RequireAuth>
                <ListTeamByTournament />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
