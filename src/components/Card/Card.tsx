import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import { Container } from "./style";

type Props = {
  logo: string;
  name: string;
};

const baseURL = "http://localhost:3001/";

const Card = ({ logo, name }: Props) => {
  return (
    <>
      <Container>
        <CardMUI sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`${baseURL}uploads/tournaments/${logo}`}
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
