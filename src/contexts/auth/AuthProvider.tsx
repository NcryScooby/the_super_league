import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storageData = sessionStorage.getItem("@token");
      if (storageData) {
        const data = await api.validateToken(storageData);
        if (data) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signIn = async (email: string, password: string) => {
    const data = await api.login(email, password);

    if (data.user && data.token) {
      console.log(data);
      setUser(data.user);
      setToken(data.token);
      sessionStorage.setItem("@user", data.user.id);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    await api.logout();
    setUser(null);
  };

  const setToken = (token: string) => {
    sessionStorage.setItem("@token", token);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
