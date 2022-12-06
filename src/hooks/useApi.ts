import api from "../service/api";

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/validateToken", { token });
    if (response.data.error) throw new Error(response.data.error);
    return response.data.decoded;
  },

  login: async (username: string, password: string) => {
    const response = await api.post("/login", { username, password });
    return response.data;
  },

  logout: async () => {
    localStorage.removeItem("@token");
    return { status: true };
  },
});