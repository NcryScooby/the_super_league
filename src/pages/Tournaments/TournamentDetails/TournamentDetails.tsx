import Header from "../../../components/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../service/api";
import { Container } from "./style";

type Tournament = {
  tournament: [
    {
      country_id: number;
      id: number;
      tournament_logo: string;
      tournament_name: string;
      tournament_description: string;
    }
  ];
};

const TournamentDetails = () => {
  const { id } = useParams();

  const [tournament, setTournament] = useState<Tournament>({} as Tournament);

  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    getTournamentById();
  }, []);

  const getTournamentById = async () => {
    api
      .get(`/tournaments/${id}`)
      .then((response) => {
        setTournament(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <Container>
        {tournament.tournament
          ? tournament.tournament.map((tournament) => (
              <div key={tournament.id}>
                <img
                  src={`${baseURL}uploads/tournaments/${tournament.tournament_logo}`}
                  alt="logo"
                />
                <h1>{tournament.tournament_name}</h1>
                <p>{tournament.tournament_description}</p>
              </div>
            ))
          : null}
      </Container>
    </>
  );
};

export default TournamentDetails;
