import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (
    username: string,
    password: string,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
    place_birth: string,
    favorite_team: number
  ) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType>(null!);
