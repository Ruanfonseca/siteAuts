import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import sobremesas from '../../../assets/sobremesas.jpg';
import '../Product.css';


function SobremesasModal({ show, onHide, product }) {
  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="title-container">
            <img src={sobremesas} alt="Sobremesas" className="title-image" />
            <span>Cardapio Sobremesas zero glúten e lactose</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Quindim, sem gluten e sem lactose(leite de coco) - R$10,00</li><br/>
          <li>Pudim zero lactose - R$20,00 </li><br/>
          <li>Surpresa de banana,(creme feito com leite vegetal e Amido) - R$20,00</li><br/>
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

export default SobremesasModal;
