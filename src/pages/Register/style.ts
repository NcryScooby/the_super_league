import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  background-color: #eeeeee;
  width: 850px;
  height: 550px;
  border-radius: 4px;
  color: #000000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 210px;
      height: 68.94px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    gap: 4rem;
    width: 100%;

    .fields {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      width: 30%;

      .final-content {
        button {
          width: 100%;
          margin-top: 2rem;
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

      h2 {
        font-size: 1rem;
        opacity: 0.7;
        margin-top: 1rem;
      }
    }

    .MuiButtonBase-root {
      margin-top: 1rem;
      background-color: #cd3dc8;
      color: #ffffff;

      &:hover {
        background-color: #8f298b;
      }
    }
  }
`;
