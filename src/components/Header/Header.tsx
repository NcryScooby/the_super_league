import { Container } from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";
import toastSuccess from "../../utils/toastSuccess";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="the-super-league" id="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/tournaments">Tournaments</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/home">Teams</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/home">Players</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                onClick={() => {
                  auth.signOut();
                  toastSuccess("Logged out successfully");
                }}
                to="/"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
