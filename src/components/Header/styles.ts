import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  display: flex;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    gap: 1.25rem;
    transition: color .2s linear;

    & + a {
      margin-left: 2rem;
    };

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
    
    &:active{
      color: ${({ theme }) => theme.colors.primary.main};
    }
  };
`;
