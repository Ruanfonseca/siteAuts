import React, { useState } from "react";
import { Button, Carousel } from 'react-bootstrap';
import styled from "styled-components";
import product5 from "../assets/almocojanta.jpg";
import product3 from "../assets/cafedamanha.jpg";
import product1 from "../assets/intolerante.jpg";
import product4 from "../assets/petiscos.jpg";
import product2 from "../assets/sobremesas.jpg";
import AlmocoJanta from "../modals/ProductModal/AlmocoJanta/almocojanta";
import CafeDaManhaModal from '../modals/ProductModal/cafedamanha/cafedamanha';
import IntoleranciasModal from '../modals/ProductModal/intolerancia/intolerancia';
import PetiscosModal from '../modals/ProductModal/petiscos/petiscos';
import SobremesasModal from '../modals/ProductModal/sobremesas/sobremesas';
import { TitleStyles } from "./ReusableStyles";

export default function Products() {
  const [showModals, setShowModals] = useState({
    intolerancias: false,
    sobremesas: false,
    cafeDaManha: false,
    petiscos: false,
    almocoJanta: false,
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
      description: "Saboreie nossas opções especialmente preparadas sem glúten e lactose, ideais para quem possui intolerâncias alimentares.",
      modal: "intolerancias",
      Component: IntoleranciasModal
    },
    {
      image: product2,
      name: "Sobremesas",
      description: "Doces irresistíveis que vão adoçar o seu dia. Experimente nossas deliciosas sobremesas.",
      modal: "sobremesas",
      Component: SobremesasModal
    },
    {
      image: product3,
      name: "Café da Manhã",
      description: "Comece o dia com nossas variadas opções de café da manhã.",
      modal: "cafeDaManha",
      Component: CafeDaManhaModal
    },
    {
      image: product4,
      name: "Petiscos",
      description: "Petiscos variados, perfeitos para compartilhar e aproveitar com amigos e família.",
      modal: "petiscos",
      Component: PetiscosModal
    },
    {
      image: product5,
      name: "Almoço & Janta",
      description: "Refeições completas e saborosas para o seu almoço e jantar, preparadas com ingredientes frescos.",
      modal: "almocoJanta",
      Component: AlmocoJanta
    }
  ];

  // Dividir os produtos em grupos de 3
  const chunkedData = [];
  for (let i = 0; i < data.length; i += 3) {
    chunkedData.push(data.slice(i, i + 3));
  }

  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Nosso Cardápio</span>
        </h1>
        <p>Explore nossas opções deliciosas e adequadas às suas necessidades.</p>
      </div>
      <Carousel indicators={false} controls={true} interval={null}>
        {chunkedData.map((chunk, index) => (
          <Carousel.Item key={index}>
            <div className="products">
              {chunk.map((product, idx) => {
                const { Component, modal } = product;
                return (
                  <div className="product card" key={idx}>
                    <div className="image card-img-top">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{product.name}</h2>
                      <h3 className="card-text">{product.description}</h3>
                      <Button onClick={() => handleShow(modal)}>Ver Mais</Button>

                      <Component
                        show={showModals[modal]}
                        onHide={() => handleClose(modal)}
                        product={product}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 300px;
      .image {
        max-height: 200px;
        overflow: hidden;
        border-radius: 1rem 1rem 0 0;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
      .card-body {
        padding: 1rem;
        text-align: center;
        h2 {
          color: #fc4958;
          margin-bottom: 0.5rem;
        }
        h3 {
          color: #fc4958;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 0.9rem;
          line-height: 1.5rem;
          letter-spacing: 0.1rem;
        }
        button {
          border: none;
          padding: 0.5rem 2rem;
          font-size: 1rem;
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
  }

  @media screen and (max-width: 480px) {
    .products {
      flex-direction: column;
      align-items: center;
      .product {
        max-width: 100%;
        .image {
          max-height: 150px;
          img {
            height: 150px;
          }
        }
        .card-body {
          padding: 0.5rem;
          h2, h3 {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
          }
          button {
            padding: 0.4rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .products {
      .product {
        max-width: 48%;
        .image {
          max-height: 180px;
          img {
            height: 180px;
          }
        }
        .card-body {
          padding: 0.7rem;
          h2, h3 {
            font-size: 1.1rem;
          }
          p {
            font-size: 0.85rem;
          }
          button {
            padding: 0.5rem 2rem;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    .products {
      .product {
        max-width: 32%;
        .image {
          max-height: 200px;
          img {
            height: 200px;
          }
        }
        .card-body {
          padding: 1rem;
          h2, h3 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.9rem;
          }
          button {
            padding: 0.5rem 2.5rem;
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1201px) {
    .products {
      .product {
        max-width: 30%;
        .image {
          max-height: 220px;
          img {
            height: 220px;
          }
        }
        .card-body {
          padding: 1.2rem;
          h2, h3 {
            font-size: 1.3rem;
          }
          p {
            font-size: 1rem;
          }
          button {
            padding: 0.6rem 3rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
