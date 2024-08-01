import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import cafeDaManhaImage from '../../../assets/cafedamanha.jpg';
import '../Product.css';
function CafeDaManhaModal({ show, onHide, product }) {
  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="title-container">
            <img src={cafeDaManhaImage} alt="Café da Manhã" className="title-image" />
            <span>Cardápio de Café da Manhã</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Bolo Fatia - R$ 6,50</li>
          <li>Bolo sem lactose - R$ 8,00</li>
          <li>Bolo sem gluten - R$ 8,00</li>
          <li>Bolo diet - R$ 8,00</li>
          <li>Pão na chapa - R$ 4,50</li>
          <li>Pão com ovo - R$ 6,00</li>
          <li>Pão com ovo e queijo - R$ 9,00</li>
          <li>Pão com ovo e queijo e presunto - R$ 10,00</li>
          <li>Ovos mexido - R$ 3,50</li>
          <li>Misto quente - R$ 7,00</li>
          <li>Queijo quente - R$ 7,00</li>
          <li>Tapioca - R$ 9,00</li>
          <li>Crepioca - R$ 9,00</li>
          <li>Omelete - R$ 9,00</li>
          <li>Salada de fruta - R$ 10,00</li>
          <li>Café - R$ 3,00</li>
          <li>Café pingado - R$ 3,50</li>
          <li>Suco de laranja - R$ 8,00 / Jarra R$ 15,00</li>
          <li>Suco de melancia - R$ 8,00 / Jarra R$ 15,00</li>
          <li>Melão com hortelã - R$ 8,00 / Jarra R$ 15,00</li>
          <li>Morango ao leite - R$9,00 / Jarra R$ 18,00</li>
          <li>Banana com aveia - R$ 9,00 / Jarra R$ 18,00</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </StyledModal>
  );
}

const StyledModal = styled(Modal)`
  .modal-title {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .title-image {
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
    border-radius: 50%;
  }

  .modal-body {
    ul {
      list-style-type: none;
      padding: 0;
      li {
        margin: 10px 0;
        font-size: 1.1rem;
      }
    }
  }
`;

export default CafeDaManhaModal;
