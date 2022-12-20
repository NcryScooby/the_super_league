import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/User";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const redirectToLogin = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const validateToken = async () => {
      const storageData = sessionStorage.getItem("@token");

      if (storageData) {
        try {
          const data = await api.validateToken(storageData);
          if (data) {
            setUser(data.user);
          }
        } catch (error) {
          const { status } = await error.response;

          if (status === 401) {
            sessionStorage.removeItem("@token");
            sessionStorage.removeItem("@user");
            redirectToLogin();
          }
        }
      }

      window.addEventListener("storage", validateToken);

      return () => {
        window.removeEventListener("storage", validateToken);
      };
    };
    validateToken();
  }, [api]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === "@token" || event.key === "@user") {
        if (!event.newValue) {
          redirectToLogin();
        }
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const login = async (email: string, password: string) => {
    const data = await api.login(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      sessionStorage.setItem("@user", data.user.id);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  const setToken = (token: string) => {
    sessionStorage.setItem("@token", token);
  };

  const register = async (email: string, password: string) => {
    const data = await api.register(email, password);

    if (data.success) {
      return true;
    }

    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
