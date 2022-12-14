import Header from "../../components/Header/Header";
import TournamentList from "../../components/TournamentList/TournamentList";
import { Container } from "./style";

const Tournaments = () => {
  return (
    <>
      <Container>
        <Header />
        <TournamentList />
      </Container>
    </>
  );
};

export default Tournaments;
