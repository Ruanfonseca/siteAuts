import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import styled from "styled-components";
import logo from "../assets/logo.png";


export default function Footer() {

  return (
    <div id="footer" className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="" />
          <p>
            Respeito , acolhimento e inclusão.
            <br/>
            Visite nossas Redes Sociais
          </p>
          <ul>
            <li>
              <a href="https://www.instagram.com/autsrestaurantee/" target="_blank"><AiFillInstagram /></a>

            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="about container">
          <div className="title">
            <h3>Horário de Funcionamento</h3>
          </div>
          <p>
          Segunda a Quinta  06:00 às 20:00 
          <br/>
          Sexta,Sábado e Domingo 06:00 às 01:00
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contato</h3>
          </div>
          <p>Telefone +55 21 964990334</p>
          <p>Email Autsrestaurante@gmail.com</p>
          <p>Endereço: Rua Passagem Franca N2 - Guaratiba</p>
        </div>
      </Section>
      <LowerFooter className="lower__footer">
        <h2>
          Copyright &copy; 2024 <span>AUTS Restaurante & Lanchonete</span>
        </h2>
      </LowerFooter>
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d04);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 5rem;
      }
    }
  }
`;

const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
