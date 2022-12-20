import { useState, useContext, FormEvent } from "react";
import { Container, Box, Content } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/logo-login.png";
import toastError from "../../utils/toastError";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import toastSuccess from "../../utils/toastSuccess";
import { Link } from "react-router-dom";

type User = {
  username: string;
  password: string;
};

const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  } as User);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      toastError("Username or password is empty");
      return;
    }

    try {
      const data = await auth.register(user.username, user.password);

      if (data) {
        toastSuccess("User registered successfully!");
        navigate("/");
      } else {
        toastError("Error registering user");
      }
    } catch (error) {
      const { data } = error.response;
      toastError(data.error);
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
                Register
              </Button>
              <p>
                Do you have an account?
                <Link to={"/"}>
                  <span> sign in</span>
                </Link>
              </p>
            </form>
          </Content>
        </Box>
      </Container>
    </>
  );
};

export default Register;
