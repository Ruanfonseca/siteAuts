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
            <span>{product.name}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>bolo Fatia - R$ 6,50</li>
          <li>bolo sem lactose - R$ 8,00</li>
          <li>bolo sem gluten - R$ 8,00</li>
          <li>bolo diet - R$ 8,00</li>
          <li>pão na chapa - R$ 4,50</li>
          <li>pão com ovo - R$ 6,00</li>
          <li>pão com ovo e queijo - R$ 9,00</li>
          <li>pão com ovo e queijo e presunto - R$ 10,00</li>
          <li>ovos mexido - R$ 3,50</li>
          <li>misto quente - R$ 7,00</li>
          <li>queijo quente - R$ 7,00</li>
          <li>tapioca - R$ 9,00</li>
          <li>crepioca - R$ 9,00</li>
          <li>omelete - R$ 9,00</li>
          <li>salada de fruta - R$ 10,00</li>
          <li>Café - R$ 3,00</li>
          <li>Café pingado - R$ 3,50</li>
          <li>suco de laranja - R$ 8,00 / jarra R$ 15,00</li>
          <li>suco de melancia - R$ 8,00 / jarra R$ 15,00</li>
          <li>melão com hortelã - R$ 8,00 / jarra R$ 15,00</li>
          <li>morango ao leite - R$9,00 / jarra R$ 18,00</li>
          <li>banana com aveia - R$ 9,00 / jarra R$ 18,00</li>
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
