import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Container, Grid } from "./style";
import api from "../../service/api";
import socketIo from "socket.io-client";

type Team = {
  teams: [
    {
      id: number;
      continent: string;
      country: string;
      logo: string;
      name: string;
      tournament: string;
    }
  ];
};

const TeamList = () => {
  const [teams, setTeams] = useState<Team>({} as Team);

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const io = socketIo(baseURL, {
      transports: ["websocket"],
    });

    io.on("teams@new", () => {
      getTeams();
    });
  }, []);

  const getTeams = () => {
    api
      .get("/teams")
      .then((response) => {
        setTeams(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <Container>
        <Grid>
          {teams.teams?.map((team) => (
            <Card
              logo={team.logo}
              type={"teams"}
              name={team.name}
              key={team.id}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TeamList;
