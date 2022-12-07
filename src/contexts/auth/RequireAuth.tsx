import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import Login from "../../pages/Login/Login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user && !sessionStorage.getItem("@user")) {
    return <Login />;
  }

  if (!sessionStorage.getItem("@token")) {
    return <Login />;
  }

  return children;
};
