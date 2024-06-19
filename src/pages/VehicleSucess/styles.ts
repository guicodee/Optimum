import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 2rem;
`;

export const VehicleRented = styled.main`
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    h1 {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    p {
      margin-top: 0.5rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const DetailedInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  h2 {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.10rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;