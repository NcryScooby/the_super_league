import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem 4rem;
`;

export const Box = styled.div`
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    padding: 200px;
    border-radius: 8px;
  }
`;
