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
  };

  @media screen and (max-width: 48rem){
    width: 18rem;
  };

  @media screen and (max-width: 42rem){
    width: 13rem;
  };

  @media screen and (max-width: 32rem){
    width: 20rem;
    max-width: 100rem;
  };
`;

export const ImageCar = styled.img`
  margin: 2rem 0;
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  p {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1rem;
    font-weight: 500;
  };

  small {
    margin-top: 0.375rem;
    color: ${({ theme }) => theme.colors.primary.light};
  };
`;

export const Informations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;

  @media screen and (max-width: 42rem) and (min-width: 32rem) {
    gap: 1rem;
    flex-direction: column;
    align-items: baseline;
  };
`;

export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 42rem){
    gap: 1rem;
  };

  span {
    display: flex;
    align-items: center;
    gap: 0.375rem;

    p {
      color: ${({ theme }) => theme.colors.primary.light};
      font-weight: 400;
      font-size: 0.875rem;
    };
  };
`;

export const CarPrice = styled.div`
  margin-right: 0;
  
  p {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 600;
    font-size: 1.15rem;

    @media screen and (max-width: 42rem){
      font-size: 1rem;
    };
  };

  small {
    color: ${({ theme }) => theme.colors.primary.light};
  };
`;

export const DetailsCar = styled.div`
  margin-top: 2rem;

  a {
    text-decoration: none;
    padding: 1rem 1rem;
    background: ${({ theme }) => theme.colors.main};
    color: white;
    width: ${({ theme }) => theme.colors.primary.light};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    transition: background .2s linear;
    font-weight: 300;
    opacity: 0.9;

    &:hover {
      background: ${({ theme }) => theme.colors.lighter};
    };

    &:active {
      background: ${({ theme }) => theme.colors.light};
    };
  };
`;