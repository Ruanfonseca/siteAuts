import React from "react";
import styled from "styled-components";
import { TitleStyles } from "./ReusableStyles";


export default function Testimonials() {
  const handleClickReserva = () =>{
    window.open('/reservas', '_blank');
  }

  return (
    <Section id="reserva">
      <div className="title">
        <h1>
          <span>Política de Reservas</span>
        </h1>
        <p>
        As Reservas serão feitas somente de segunda até quinta 08:00 às 17:00, 
        serão mantidas até 10 minutos após o horário reservado e validadas
        somente em nome do responsável pelo contato,
        necessário levar documento de identificação com foto.
        Em caso se lotação do espaço o cliente será avisado sobre a lista de espera.
        Em caso de aniversário, reservar com antecedência informando o motivo da reserva.
        </p>
      </div>
      <div className="container">
        <button onClick={handleClickReserva}>Faça Aqui sua Reserva !</button>
      </div>
    </Section>
  );
}

const Section = styled.section`
  border: 0.01rem solid black;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  ${TitleStyles};
  .container {
    background: linear-gradient(to right, #fc4958, #e85d04, #fc4958);
    padding: 0.3vw;
    input {
      border: none;
      padding: 1.5rem 8rem 1.5rem 1rem;
      font-size: 1.3rem;
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 1rem 5rem;
      background-color: transparent;
      border: none;
      font-size: 1.3rem;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        letter-spacing: 0.6rem;
        padding: 1rem 4.7rem;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      padding: 0.8rem;
      border-radius: 0.5rem;
      input {
        width: 75vw;
        padding: 0.5rem;
        border-radius: 0.5rem;
      }
      button {
        margin-top: 0.5rem;
        width: 100%;
        padding: 0.5rem;
        &:hover {
          padding: 0.5rem 1rem;
        }
      }
    }
  }
`;

