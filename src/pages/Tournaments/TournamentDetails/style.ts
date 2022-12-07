import styled from "styled-components";

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    background-color: #ffffff;
    margin: 2rem 20rem;
    color: #2a2a2a;
    padding: 2rem 0;
    border-radius: 8px;

    img {
      height: 200px;
      background: none;
      object-fit: cover;
      object-position: center;
      object-fit: contain;
    }

    p {
      text-align: center;
      max-width: 50ch;
      margin-bottom: 1rem;
    }
  }
`;
