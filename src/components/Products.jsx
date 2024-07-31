import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import styled from "styled-components";
import product3 from "../assets/cafedamanha.jpg";
import product2 from "../assets/diabetico.jpg";
import product1 from "../assets/intolerante.jpg";
import product4 from "../assets/petiscos.jpg";
import CafeDaManhaModal from '../modals/ProductModal/cafedamanha/cafedamanha';
import DiabeticosModal from '../modals/ProductModal/diabeticos/diabeticos';
import IntoleranciasModal from '../modals/ProductModal/intolerancia/intolerancia';
import PetiscosModal from '../modals/ProductModal/petiscos/petiscos';
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Products() {
  const [showModals, setShowModals] = useState({
    intolerancias: false,
    diabeticos: false,
    cafeDaManha: false,
    petiscos: false,
  });

  const handleShow = (modalName) => {
    setShowModals((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const handleClose = (modalName) => {
    setShowModals((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  const data = [
    {
      image: product1,
      name: "Intolerâncias",
      description: "Opções deliciosas sem glúten e lactose, preparadas para quem tem intolerâncias alimentares.",
      modal: "intolerancias",
      Component: IntoleranciasModal
    },
    {
      image: product2,
      name: "Diabéticos",
      description: "Pratos especialmente desenvolvidos para quem precisa controlar o açúcar no sangue, sem abrir mão do sabor.",
      modal: "diabeticos",
      Component: DiabeticosModal
    },
    {
      image: product3,
      name: "Café da Manhã",
      description: "Comece o dia com nossas opções variadas de café da manhã, de pães a frutas frescas e sucos.",
      modal: "cafeDaManha",
      Component: CafeDaManhaModal
    },
    {
      image: product4,
      name: "Petiscos",
      description: "Petiscos variados para compartilhar, perfeitos para acompanhar uma boa conversa.",
      modal: "petiscos",
      Component: PetiscosModal
    },
  ];

  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Nosso Cardápio</span>
        </h1>
      </div>
      <div className="products">
        {data.map((product, index) => {
          const { Component, modal } = product;
          return (
            <div className="product" key={index}>
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.description}</h3>
              <p>Explore nossas opções deliciosas e adequadas às suas necessidades.</p>
              <Button onClick={() => handleShow(modal)}>Ver Mais</Button>

              <Component
                show={showModals[modal]}
                onHide={() => handleClose(modal)}
                product={product}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
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
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
