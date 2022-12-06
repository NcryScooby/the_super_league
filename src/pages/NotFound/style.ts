import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background-color: #eeeeee;
  width: 350px;
  height: 580px;
  border-radius: 4px;
  color: #000000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  padding: 40px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  h1 {
    color: #2a2a2a;
    font-size: 1.4rem;
  }

  #link {
    width: 100%;
    button {
      width: 100%;
    }
  }
`;
