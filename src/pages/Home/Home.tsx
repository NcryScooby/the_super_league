import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import { Container } from "./style";

const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Introduction />
      </Container>
    </>
  );
};

export default Home;
