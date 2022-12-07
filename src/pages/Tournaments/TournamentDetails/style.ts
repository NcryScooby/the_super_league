import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  .tournament {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    background-color: #ffffff;
    margin: 2rem 20rem;
    color: #2a2a2a;
    padding: 2rem 8rem;
    border-radius: 8px;
    text-align: center;

    img {
      height: 200px;
      background: none;
      object-fit: cover;
      object-position: center;
      object-fit: contain;
    }

    button {
      background-color: #2a2a2a;
      width: 50%;
      margin-bottom: 1rem;
      &:hover {
        background-color: #000000;
      }
    }
  }
`;
