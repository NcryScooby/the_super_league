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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id fames
            faucibus odio imperdiet nisl pharetra. Facilisi in tincidunt orci
            tellus id. Enim a eleifend.
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
