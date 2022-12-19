import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background-color: #eeeeee;
  width: 350px;
  height: 450px;
  border-radius: 4px;
  color: #000000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    img {
      margin-bottom: 2rem;
    }

    .MuiButtonBase-root {
      margin-top: 1rem;
      background-color: #cd3dc8;
      color: #ffffff;

      &:hover {
        background-color: #8f298b;
      }
    }
    p {
      margin-top: 0.5rem;
      font-size: 12px;
      opacity: 0.6;
      span {
        color: #006eff;
        cursor: pointer;
      }
    }
  }
`;
