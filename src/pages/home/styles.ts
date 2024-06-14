import styled from "styled-components";

export const Container = styled.div`
  max-width: 80rem;
  padding: 7rem 1rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  @media screen and (max-width: 72rem){
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    padding: 1rem 4rem;
  };

  @media screen and (max-width: 32rem){
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1rem;
    padding: 1rem 2rem;
  };
`;