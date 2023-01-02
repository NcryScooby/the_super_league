import axios from "axios";

export const getTeams = async () =>
  await axios.get("http://localhost:3001/teams/register");
