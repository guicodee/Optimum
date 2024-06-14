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
    gap: 1.25rem;
    color: ${({ theme }) => theme.colors.secondary};
    transition: color .2s linear;
    background: ${({ theme }) => theme.colors.main};
    padding: 1rem 2.5rem;
    border-radius: 8px;
    transition: .2s linear;

    & + a {
      margin-left: 2rem;
    };

    &:hover {
      background: ${({ theme }) => theme.colors.light};
    }
  };
`;
