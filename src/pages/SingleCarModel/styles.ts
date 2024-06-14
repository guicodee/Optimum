import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 80rem;
  margin: 0 auto;
  padding: 6rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: 80vh;

  @media screen and (max-width: 64rem) {
    flex-direction: column;
    margin: 125px auto;
  }
`;

export const ModelCarContainer = styled.div`
  img {
    width: 30vw;

    @media screen and (max-width: 64rem) {
      width: 80vw;
    }
  }
`;

export const ContentContainer = styled.div`
  h1 {
    font-size: 2.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 0.875rem;

    @media screen and (max-width: 64rem) {
      font-size: 2rem;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.main};
    font-size: 0.875rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-top: 1rem;
  }
`;

export const VehicleInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  };
`;

export const VehiclePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.dark};

    span {
      font-weight: 300;
      font-size: 1.25rem;
    }

    @media screen and (max-width: 64rem) {
      font-size: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) =>  theme.colors.secondary};
    padding: 1rem 2rem;
    border-radius: 4px;
    transition: .2s linear;

    &:hover {
      background: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) =>  theme.colors.primary.light};
    }
  }

  @media screen and (max-width: 64rem) {
    margin-top: 6rem;
  }

  @media screen and (max-width: 32rem) {
    flex-direction: column;
    gap: 2rem;
    align-items: baseline;
  }
`;