import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import { Container } from "./style";

type Props = {
  logo: string;
  name: string;
  type: string;
};

const baseURL = import.meta.env.VITE_BASE_URL;

const Card = ({ logo, name, type }: Props) => {
  return (
    <>
      <Container>
        <CardMUI sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${baseURL}uploads/${type}/${logo}`}
              alt={`${name}`}
            />
            <CardContent>
              <h4>{name}</h4>
            </CardContent>
          </CardActionArea>
        </CardMUI>
      </Container>
    </>
  );
};

export default Card;
