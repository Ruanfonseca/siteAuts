import React from "react";
import styled from "styled-components";
import background from "../assets/portfolio.jpg";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="background">
        <img src={background} alt="" />
      </div>
      <div className="content">
        <h1>Seu filho tem seletividade alimentar?</h1>
        <h2>Aqui ele pode escolher o próprio prato ou montar o seu</h2>
        <a href="#products">Ver Cardápio</a>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 80vh;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  &:hover {
    .background img {
      transform: scale(1.2);
    }
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
      transition: transform 0.8s ease-in-out;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    height: 100%;

    h1 {
      font-size: 3rem;
      width: 60%;
    }

    h2 {
      width: 60%;
    }

    a {
      border: none;
      padding: 1rem 4rem;
      font-size: 1.4rem;
      text-decoration: none;
      color: white;
      border-radius: 4rem;
      transition: 0.5s ease-in-out;
      cursor: pointer;
      background: linear-gradient(to right, #fc4958, #e85d04);
      text-transform: uppercase;

      &:hover {
        background: linear-gradient(to right, #e85d04, #fc4958);
      }
    }
  }

  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      h1 {
        width: 90%;
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1.2em;
        width: 90%;
      }

      a {
        padding: 1rem 2rem;
        font-size: 1rem;
      }
    }
  }
`;
