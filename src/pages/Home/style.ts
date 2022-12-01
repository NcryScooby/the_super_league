import styled from "styled-components";

export const Container = styled.main`
  width: 1440px;
  margin: 0 auto;
  padding: 2rem 4rem;
  position: relative;
  height: 789px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100vh;
    background-color: #363636;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    height: 400px;
    width: 400px;
    left: 0;
    bottom: 0;
    background-color: #47d6d5;
    z-index: -1;
  }
`;
