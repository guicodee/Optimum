import styled from "styled-components";

export const Container = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 8rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  
  img {
    right: 50px;
    position: absolute;
    width: 500px;
    z-index: -1;
  };

  @media screen and (max-width: 72rem) {
    img {
      right: 36px;
      width: 50vw;
    };
  };

  @media screen and (max-width: 64rem) {
    flex-direction: column;
    padding: 6rem 2.5rem 8rem 2.5rem;

    img {
      position: relative;
      margin-top: 2rem;
    };
  };

  @media screen and (max-width: 42rem) {
    flex-direction: column;
    padding: 9rem 2.5rem 4rem 2.5rem;

    img {
      width: 0;
    };
  };
`;

export const Content = styled.section`
  max-width: 42rem;

  @media screen and (max-width: 72rem) {
    max-width: max-content;
  };

  h1 {
    font-size: 3.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary.dark};
  };

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary.light};
    margin-top: 1rem;
    margin-bottom: 4rem;
    max-width: 38rem;
    font-weight: 300;
  };

  a {
    margin-top: 3rem;
    text-decoration: none;
    padding: 1rem 3rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 500;
    transition: background .2s linear;

    &:hover {
      background-color: ${({ theme }) => theme.colors.light};
    }
    
    &:active{
      background-color: ${({ theme }) => theme.colors.lighter};
    }
  };

  @media screen and (max-width: 42rem) {
    h1 {
      font-size: 2.5rem;
    };

    p {
      font-size: 1rem;
    };
    
    a {
      padding: 1rem 2rem;
    };
  };
`;