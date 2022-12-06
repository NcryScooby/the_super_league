import { useState, useContext } from "react";
import { Container, Box, Content } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/logo-login.png";
import toastError from "../../utils/toastError";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import toastSuccess from "../../utils/toastSuccess";

type User = {
  username: string;
  password: string;
};

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  } as User);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      toastError("Username or password is empty");
      return;
    }

    try {
      if (user.username && user.password) {
        const isLogged = await auth.signIn(user.username, user.password);
        if (isLogged) {
          toastSuccess("Login successful");
          navigate("/home");
        }
      }
    } catch (error: any) {
      toastError(error.response.data.error);
    }
  };

  return (
    <>
      <Container>
        <Box>
          <Content>
            <form method="post" onSubmit={handleSubmit}>
              <img src={logo} alt="logo" />
              <TextField
                label="Username"
                type={"text"}
                variant="outlined"
                autoComplete="off"
                size="small"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                autoFocus
              />
              <TextField
                label="Password"
                type={"password"}
                variant="outlined"
                autoComplete="off"
                size="small"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <Button variant="contained" type="submit">
                Login
              </Button>
            </form>
          </Content>
        </Box>
      </Container>
    </>
  );
};

export default Login;
