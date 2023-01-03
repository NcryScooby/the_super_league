import { useState, useContext, FormEvent, useEffect } from "react";
import { Container, Box, Content } from "./style";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assets/logo-login.png";
import toastError from "../../utils/toastError";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import toastSuccess from "../../utils/toastSuccess";
import { Link } from "react-router-dom";
import { phoneMask } from "../../utils/masks/phoneMask";
import { getCountries } from "../../service/countries";
import { FormControl, InputLabel, Select } from "@mui/material";
import { getTeams } from "../../service/teams";

type User = {
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  place_birth: string;
  favorite_team: number;
};

type Team = {
  id: number;
  name: string;
};

const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    place_birth: "United States of America",
    favorite_team: 3,
  } as User);

  const [countries, setCountries] = useState<string[]>([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setUser({ ...user, phone: phoneMask(user.phone) });
  }, [user.phone]);

  useEffect(() => {
    getCountries().then((countries) =>
      setCountries(countries.data.map((country: any) => country.name))
    );
  }, []);

  useEffect(() => {
    getTeams().then((teams) => setTeams(teams.data.teams));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const data = await auth.register(
        user.username,
        user.password,
        user.first_name,
        user.last_name,
        user.email,
        user.phone,
        user.place_birth,
        user.favorite_team
      );

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

  const checkPasswordComplexity = () => {
    if (user.password.length === 0) {
      return null;
    } else if (user.password.length < 8) {
      return (
        <p className="password-complexity">
          Password must contain at least 8 characters
        </p>
      );
    } else if (!user.password.match(/(?=.*[A-Z])/)) {
      return (
        <p className="password-complexity">
          Password must contain at least one uppercase letter
        </p>
      );
    } else if (!user.password.match(/(?=.*[!@#$%^&*()])/)) {
      return (
        <p className="password-complexity">
          Password must contain at least one special character
        </p>
      );
    }
    return null;
  };

  return (
    <>
      <Container>
        <Box>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>
          <Content>
            <form method="post" onSubmit={handleSubmit}>
              <div className="fields">
                <h2>Account Information</h2>
                <TextField
                  label="Username"
                  type={"text"}
                  variant="outlined"
                  autoComplete="off"
                  size="small"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  autoFocus
                />
                <TextField
                  label="Password"
                  type={"password"}
                  variant="outlined"
                  error={
                    !(
                      user.password.match(/(?=.*[A-Z])/) &&
                      user.password.match(/(?=.*[!@#$%^&*()])/) &&
                      user.password.length >= 8
                    ) && user.password.length > 0
                  }
                  autoComplete="off"
                  size="small"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                {checkPasswordComplexity()}
                <h2>Contact Information</h2>
                <TextField
                  label="E-mail"
                  type={"email"}
                  variant="outlined"
                  autoComplete="off"
                  size="small"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <TextField
                  label="Phone"
                  type={"text"}
                  variant="outlined"
                  autoComplete="off"
                  size="small"
                  value={phoneMask(user.phone)}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </div>
              <div className="fields">
                <h2>Personal Information</h2>
                <TextField
                  label="First Name"
                  type={"text"}
                  variant="outlined"
                  autoComplete="off"
                  size="small"
                  value={user.first_name}
                  onChange={(e) =>
                    setUser({ ...user, first_name: e.target.value })
                  }
                />
                <TextField
                  label="Last Name"
                  type={"text"}
                  variant="outlined"
                  autoComplete="off"
                  size="small"
                  value={user.last_name}
                  onChange={(e) =>
                    setUser({ ...user, last_name: e.target.value })
                  }
                />
                <FormControl size="small">
                  <InputLabel>Favorite Team</InputLabel>
                  <Select
                    native
                    label="Favorite Team"
                    value={user.favorite_team}
                    onChange={(e) => {
                      setUser({
                        ...user,
                        favorite_team: parseInt(e.target.value as string),
                      });
                    }}
                  >
                    {teams.map((team: Team) => (
                      <option key={team.id} value={team.id}>
                        {team.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Place of birth</InputLabel>
                  <Select
                    native
                    label="Place of birth"
                    value={user.place_birth}
                    onChange={(e) => {
                      setUser({ ...user, place_birth: e.target.value });
                    }}
                  >
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <div className="final-content">
                  <Button variant="contained" type="submit">
                    Register
                  </Button>
                  <p>
                    Do you have an account?
                    <Link to={"/"}>
                      <span> sign in</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </Content>
        </Box>
      </Container>
    </>
  );
};

export default Register;
