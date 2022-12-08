import Header from "../../components/Header/Header";
import TeamList from "../../components/TeamList/TeamList";
import { Container } from "./style";

const Teams = () => {
  return (
    <>
      <Container>
        <Header />
        <TeamList />
      </Container>
    </>
  );
};

export default Teams;
