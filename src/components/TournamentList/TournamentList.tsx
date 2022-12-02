import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Container, Grid } from "./style";
import api from "../../service/api";

const TournamentList = () => {
  const [tournaments, setTournaments] = useState<any>([]);

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
          {tournaments.tournaments?.map((tournament: any) => (
            <Card
              key={tournament.id}
              logo={tournament.logo}
              name={tournament.name}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TournamentList;
