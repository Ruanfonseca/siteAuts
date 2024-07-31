import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import petiscosImage from '../../../assets/petiscos.jpg'; // Certifique-se de ter a imagem no caminho correto
import '../Product.css';
function PetiscosModal({ show, onHide, product }) {
  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="title-container">
            <img src={petiscosImage} alt="Petiscos" className="title-image" />
            <span>{product.name}</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Dadinho de tapioca TEA (6 unidades) - R$ 35,00</li>
          <li>Couve Terapêutica crocante - R$ 25,00</li>
          <li>Camarão Inclusão ao Alho e Óleo - R$ 55,00</li>
          <li>Batata auts média - R$ 35,00 / grande - R$ 45,00 (cheddar, bacon, maionese da casa e maionese zero lactose)</li>
          <li>Tulipa crocante atípica - R$ 55,00</li>
          <li>Tábua da diversidade (sardinha, trilha, camarão e batata frita) - R$ 70,00</li>
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

export default PetiscosModal;
