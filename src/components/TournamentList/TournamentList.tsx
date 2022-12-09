import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Container, Grid } from "./style";
import api from "../../service/api";
import socketIo from "socket.io-client";
import { Link } from "react-router-dom";

type Tournament = {
  tournaments: [
    {
      id: number;
      continent: string;
      country: string;
      description: string;
      logo: string;
      name: string;
    }
  ];
};

const TournamentList = () => {
  const [tournaments, setTournaments] = useState<Tournament>({} as Tournament);

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const io = socketIo(baseURL, {
      transports: ["websocket"],
    });

    io.on("tournaments@new", () => {
      getTournaments();
    });
  }, []);

  const getTournaments = () => {
    api
      .get("/tournaments")
      .then((response) => {
        setTournaments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTournaments();
  }, []);

  return (
    <>
      <Container>
        <Grid>
          {tournaments.tournaments?.map((tournament) => (
            <Link to={`/tournaments/${tournament.id}`} key={tournament.id}>
              <Card
                logo={tournament.logo}
                type={"tournaments"}
                name={tournament.name}
              />
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TournamentList;
