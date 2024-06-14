import styled from "styled-components";

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 11rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 10rem;

  @media screen and (max-width: 64rem) {
    flex-direction: column;
    gap: 6rem;
  };
`;

export const ContainerTestemonie = styled.article`
  width: 50%;
  padding: 48px 32px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.secondary};

  p {
    font-size: 1.15rem;
    font-weight: 300;
  }

  @media screen and (max-width: 64rem) {
    width: 100%;
  };
`;

export const Testemonie = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2.5rem;

  img {
    width: 3.875rem;
    height: 3.875rem;
    display: block;
    border-radius: 100%;
    width: 56px;
    object-fit: cover;
    
  }

  span {
    font-size: 1rem;
    font-weight: 4  00;
  }
`;