import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  display: flex;

  a {
    
    text-decoration: none;
    color: #4C5C6B;
    gap: 1.25rem;

    & + a {
      margin-left: 2rem;
    }
  }
`;
