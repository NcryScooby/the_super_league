import image from "../../assets/image.svg";
import { Container } from "./style";

const Introduction = () => {
  return (
    <>
      <Container>
        <div>
          <img src={image} alt="image" id="image" />
        </div>
        <div className="infos">
          <h1>Get Football Updates</h1>
          <p>
            The Super League is a football media company based in Brazil. The
            Super League app features live scores, statistics and news from 200
            leagues in 12 different languages covered by a newsroom located in
            Canoas.
          </p>
          <div className="buttons">
            <button>Get Started</button>
            <button>Learn More</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Introduction;
