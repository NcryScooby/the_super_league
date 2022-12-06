import Lottie from "lottie-react";
import notfound from "../../assets/lottie/404.json";

const NotFoundAnimation = () => (
  <Lottie
    animationData={notfound}
    loop={true}
    style={{
      width: "200px",
    }}
  />
);

export default NotFoundAnimation;
