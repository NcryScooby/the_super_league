import styled from "styled-components";

export const Container = styled.section`
  .MuiCardMedia-root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: none;
    object-fit: cover;
    object-position: center;
    object-fit: contain;
    padding: 1rem 0;
  }

  .MuiCardContent-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    text-align: center;
    gap: 1rem;
    h4 {
      font-size: 1.1rem;
      color: #ffffff;
      font-weight: 300;
      font-family: "Poppins", sans-serif;
    }
  }

  .MuiCardContent-root {
    background-color: #101010;
  }
`;
