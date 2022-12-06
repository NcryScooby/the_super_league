import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { AuthProvider } from "../contexts/auth/AuthProvider";
import Tournaments from "../pages/Tournaments/Tournaments";
import { RequireAuth } from "../contexts/auth/RequireAuth";

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
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Router;
