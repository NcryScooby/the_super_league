import Header from "../../../components/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../service/api";
import { Container, Box } from "./style";
import Card from "../../../components/Card/Card";
import { HttpStatusCode } from "axios";

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

const ListTeamByTournament = () => {
  const { id } = useParams();

  const [team, setTeam] = useState<Team>({} as Team);

  const [httpStatus, setHttpStatus] = useState<HttpStatusCode>();

  useEffect(() => {
    getTeamById();
  }, []);

  const getTeamById = () => {
    api
      .get(`/teams/tournament/${id}`)
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.log(error);
        const { status } = error.response;
        if (status === 404) return setHttpStatus(404);
      });
  };

  return (
    <>
      <Header />
      {team.teams ? (
        <Container>
          {team.teams.map((team) => (
            <Card
              logo={team.logo}
              name={team.name}
              type={"teams"}
              key={team.id}
            />
          ))}
        </Container>
      ) : (
        <Box>{httpStatus === 404 ? <h1>No Team found</h1> : null}</Box>
      )}
    </>
  );
};

export default ListTeamByTournament;
