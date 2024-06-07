import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 20rem;
  color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 24px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 72rem){
    width: 21rem;
  }

  @media screen and (max-width: 48rem){
    width: 18rem;
  }

  @media screen and (max-width: 42rem){
    width: 13rem;
  }

  @media screen and (max-width: 32rem){
    width: 20rem;
    max-width: 100rem;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  p {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1rem;
    font-weight: 500;
  }

  small {
    margin-top: 0.375rem;
    color: ${({ theme }) => theme.colors.primary.light};
    font-size: 0.875rem;
  }
`;

export const Informations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  @media screen and (max-width: 42rem){
    gap: 0rem;
  }
`;

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 42rem){
    gap: 1rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    p {
      color: ${({ theme }) => theme.colors.primary.light};
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`;

export const CarPrice = styled.div`
  margin-right: 0;
  
  p {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 600;
    font-size: 1.25rem;

    @media screen and (max-width: 42rem){
      font-size: 1rem;
    }
  }

  small {
    color: ${({ theme }) => theme.colors.primary.light};
  }
`;
