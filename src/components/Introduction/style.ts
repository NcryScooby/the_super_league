import styled from "styled-components";

export const Container = styled.section`
  @keyframes scaleButton {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;

  .infos {
    margin-right: 200px;
    display: flex;
    flex-direction: column;
    max-width: 55ch;
    align-items: center;
    gap: 2rem;
    h1 {
      letter-spacing: 0.1rem;
      font-size: 48px;
    }
    p {
      text-align: center;
      font-size: 18px;
    }

    .buttons {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;

      button {
        &:hover {
          background-color: #bebebe;
          animation: 0.5s ease-in-out 0s 1 normal none running scaleButton;
        }
      }
    }
  }

  #image {
    width: 400px;
  }
`;
