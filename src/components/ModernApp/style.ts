import styled from "styled-components";

export const Container = styled.section`
  max-width: 80rem;
  margin: 0 auto;
  padding: 11rem 2.5rem;
  display: flex;
  align-items: center;
  gap: 10rem;

  @media screen and (max-width: 72rem) {
    gap: 4rem;
  }

  @media screen and (max-width: 48rem) {
    flex-direction: column;
    padding: 5rem 2.5rem;
  }
`;

export const ImageApp = styled.img`
  width: 360px;

  @media screen and (max-width: 64rem) {
    width: 260px;
  }

  @media screen and (max-width: 48rem) {
    width: 280px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 4rem;
    font-weight: 600;
    color: #13171B;
  }

  span {
    color: #A6AFBA;
    font-size: 1.25rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 64rem) {
    h2 {
      font-size: 2rem;
    }

    span {
      font-size: 1rem;
    }
  }

  /*
  @media screen and (max-width: 42rem) {
    flex-direction: column;
    padding: 11rem 2.5rem 8rem 2.5rem;

    img {
      width: 0;
    }
  } */
`;

export const ButtonDownload = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  background-color: #0A20E6;
  padding: 1.15rem 1.5rem;
  color: #fff;
  border-radius: 75px;
  width: 206px;
  margin-top: 2rem;

  @media screen and (max-width: 42rem) {
    margin-top: 3rem;
  }
`;