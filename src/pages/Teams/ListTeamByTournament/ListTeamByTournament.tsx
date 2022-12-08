import Header from "../../../components/Header/Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../service/api";
import { Container } from "./style";
import Card from "../../../components/Card/Card";

export type Team = {
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
      });
  };

  return (
    <>
      <Header />
      <Container>
        {team.teams
          ? team.teams.map((team) => (
              <Card
                logo={team.logo}
                name={team.name}
                type={"teams"}
                key={team.id}
              />
            ))
          : null}
      </Container>
    </>
  );
};

export default ListTeamByTournament;
