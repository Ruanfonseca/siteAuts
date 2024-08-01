import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import intolerancia from '../../../assets/intolerante.jpg';
import '../Product.css';

function IntoleranciasModal({ show, onHide, product }) {
  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="title-container">
            <img src={intolerancia} alt="Cardapio Zero lactose e Glúten" className="title-image" />
            <span>Cardapio Zero lactose e Glúten</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Strogonoff de frango Zero lactose(Arroz e batata palha)<br/>
             Porção<br/>
             P - R$28,00<br/>
             M - R$48,00 <br/>
             G - R$80,00 <br/>

          </li>
           <li>Pene ao molho branco, camarão e brócolis Zero lactose<br/>
             Porção<br/>
             P - R$42,00<br/> 
             M - R$60,00 <br/>
             G - R$90,00<br/> 
          </li>
       <li>Nhoque à bolonhesa,Sem gluten(Farinha de arroz integral)<br/>
           Porção<br/>
           P - R$30,00<br/>
           M - R$55,00<br/>
           G - R$85,00<br/>
       </li>
        <li>
          Panqueca à bolonhesa,Sem gluten(Farinha de arroz integral)<br/>
          Porção<br/>
          P - R$30,00<br/> 
          M - R$55,00<br/>
          G - R$85,00<br/>
        </li>
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
export default IntoleranciasModal;
