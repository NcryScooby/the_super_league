import Header from "../../components/Header/Header";
import Teams from "../../components/TournamentList/TournamentList";
import { Container } from "./style";

const Tournaments = () => {
  return (
    <>
      <Container>
        <Header />
        <Teams />
      </Container>
    </>
  );
};

export default Tournaments;
