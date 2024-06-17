import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const ContainerForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const ContentForm = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  form {
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    }

    label {
      font-weight: 500;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    input {
      font-size: 0.875rem;
      margin-bottom: 1rem;
      padding: 0.5rem 0.75rem;
      background: transparent;
      border-color: ${({ theme }) => theme.colors.lighter};
      border-width: 1px;
      border-radius: 4px;
      width: 100%;
    }

    button {
      font-weight: 400;
      font-size: 0.875rem;
      padding: 0.75rem 1rem;
      background-color: ${({ theme }) => theme.colors.primary.dark};
      color: ${({ theme }) => theme.colors.secondary};
      border-radius: 8px;
      width: 100%;
      cursor: pointer;
      border: none;
      transition: background .2s linear;

      &:hover {
        background: #343c45;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`;