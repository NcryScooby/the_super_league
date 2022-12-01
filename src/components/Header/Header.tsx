import { Container } from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="the-super-league" id="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Leagues</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Teams</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Players</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
