import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  min-height: 4rem;
  width: 100%;
  padding: 1rem 2rem;
  margin-top: 3rem;

  fieldset {
    display: flex;
    justify-content: space-between;
    flex: 1;
    height: 100%;
    border-radius: 8px;
    border: none;
    gap: 2rem;
    align-items: center;
  }

  button {
    padding: 0.625rem 1.5rem;
    background-color: ${({ theme }) => theme.colors.light};
    border: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 400;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color .2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main};
    }
  }
`;

export const Selector = styled.div`
  display: flex;
  flex-direction: column;
  height: 4rem;
  /* flex: 1; */
  min-width: 215px;
  position: relative;

  label {
    color: ${({ theme }) => theme.colors.lighter};
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    position: absolute;
    top: 1rem;
    left: 1.5rem;
  }

  select {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.25rem 1.3rem 0;
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;

    option {
      padding: 0 1rem;
      font-weight: 300;
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.colors.main};
      border-radius: 4px;
    }
  }
`;

export const LocaleForm = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.lighter};
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  input {
    padding: 0.425rem 0.825rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 0.875rem;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.lighter};

    &:focus {
      outline-color: ${({ theme }) => theme.colors.main};
    }
  }
`;