import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 2rem;
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

  @media screen and (max-width: 48rem) {
    display: flex;
    flex-direction: column;

    & > img {
      width: 100%;
      max-height: 200px;
    }

    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media print {
    display: flex;
    flex-direction: column;

    & > img {
      width: 100%;
      max-height: 200px;
    }

    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
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

  @media screen and (max-width: 48rem) {
    grid-template-columns: 1fr;
    margin-top: 4rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem
    }
  }

  @media print {
    grid-template-columns: 1fr;
  }
`;

export const PrintDocument = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 3rem;

  button {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 300;
    font-size: 1rem;
    border: none;
    padding: 0.875rem 2.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color .2s linear;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lighter};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.dark};
    transition: color .2s linear;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light}
    }
  }

  @media screen and (max-width: 48rem) {
    flex-direction: column;
  }

  @media print {
    display: none;
  }
`;
