import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 80rem;
  margin: 0 auto;
  padding: 9rem 2.5rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 56rem){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 70px;
  };  

  @media screen and (max-width: 42rem) {
    display: flex;
    flex-direction: column;
  };
`;

export const Company = styled.div`
  display: flex;
  flex-direction: column; 

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 1.75rem;
  };

  a {
    font-size: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main};
    opacity: 0.9;
    transition: color .2s linear;

    & + a {
      margin-top: 1.25rem;
    };

    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    };

    &:active {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  };
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column; 

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary.dark};
    margin-bottom: 1.75rem;
  };

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary.main};
    opacity: 0.9;

    & + span {
      margin-top: 1.25rem;
    };
  };
`;


export const FormSupport = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 42rem) {
    align-items: normal;
  };

  input {
    width: 320px;
    height: 45px;
    border: none;
    padding: 0 1rem;

    &::placeholder {
      font-size: 0.875rem;
      font-weight: 300;
      text-transform: capitalize;
    };
  };

  button {
    margin-top: 0.875rem;
    width: 100%;
    height: 2.25rem;
    background-color: ${({ theme }) => theme.colors.light};
    border: none;
    color: ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    cursor: pointer;
    transition: background-color .1s linear;

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors.main};
    };

    &:active {
      background-color: ${({ theme }) => theme.colors.light};
    };

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    };

    @media screen and (max-width: 42rem) {
      width: 300px;
    };
  };
`;