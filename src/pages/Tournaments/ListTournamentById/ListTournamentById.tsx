import Header from "../../../components/Header/Header";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../service/api";
import { Container } from "./style";
import Button from "@mui/material/Button";

type Tournament = {
  tournament: [
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

const ListTournamentById = () => {
  const { id } = useParams();

  const [tournament, setTournament] = useState<Tournament>({} as Tournament);

  const baseURL = import.meta.env.VITE_BASE_URL;

  const getTournamentById = () => {
    api
      .get(`/tournaments/${id}`)
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTournamentById();
  }, []);

  return (
    <>
      <Container>
        <Header />
        {tournament.tournament
          ? tournament.tournament.map((tournament) => (
              <div key={tournament.id} className="tournament">
                <img
                  src={`${baseURL}uploads/tournaments/${tournament.logo}`}
                  alt="logo"
                />
                <h1>{tournament.name}</h1>
                <p>{tournament.description}</p>
                <Link to={`/teams/tournament/${tournament.id}`}>
                  <Button variant="contained">Teams</Button>
                </Link>
              </div>
            ))
          : null}
      </Container>
    </>
  );
};

export default ListTournamentById;
