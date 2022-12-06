import NotFoundAnimation from "../../components/animations/NotFoundAnimation";
import { Container, Box, Content } from "./style";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/AuthContext";

const NotFound = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <Container>
        <Box>
          <Content>
            <NotFoundAnimation />
            <h1>The page you are looking for does not exist.</h1>
            <p>
              You may have typed in the wrong address or the page may have been
              removed.
            </p>

            <Link to={auth.user ? "/home" : "/"} id="link">
              <Button variant="contained" type="submit">
                Back to home page
              </Button>
            </Link>
          </Content>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
