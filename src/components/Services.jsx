import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";

export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">Sobre o AUTS</h1>
        <p>
        Localizado em Guaratiba/RJ, o AUTS Restaurante & Lanchonete traz um conceito diferente de atendimento ao público infantojuvenil. De forma inclusiva, atendemos crianças e jovens com necessidades especiais, proporcionando um ambiente acolhedor e adaptado para garantir a melhor experiência possível. Nosso espaço é cuidadosamente projetado para ser acessível, com um menu diversificado que atende a diversas restrições alimentares e preferências. Além disso, nossa equipe é treinada para oferecer um atendimento personalizado, respeitando e valorizando as individualidades de cada cliente. No AUTS, acreditamos que todos merecem um espaço onde possam 
        desfrutar de momentos felizes e saborosos com suas famílias e amigos.
        </p>
      </div>
      {/* <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={Services3} alt="" />
          <p>
            He Printing and Typesetting the industry. <span>Lorem Ipsum</span>{" "}
            has been the Industry's
          </p>
          <button>Read More</button>
        </div>
      </div> */}
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
