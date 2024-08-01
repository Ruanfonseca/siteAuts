import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';
import cafeDaManhaImage from '../../../assets/cafedamanha.jpg';
import '../Product.css';


function AlmocoJanta({ show, onHide, product }) {
  return (
    <StyledModal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="title-container">
            <img src={cafeDaManhaImage} alt="AlmocoJanta" className="title-image" />
            <span>Cardápio de Almoco & Janta</span>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>Frango com quiabo(arroz,feijão e farofa)<br/>
             Porção<br/>
             P - R$17,00<br/>
             M - R$30,00<br/>
             G - R$60,00<br/>
             </li>
          <li>
            Frango empanado(arroz, feijão,  farofa e salada da casa)<br/>
            Porção<br/>
            P - R$17,00<br/>
            M - R$30,00<br/>
            G - R$60,OO<br/>
          </li>
          <li>
            Carne de porco a mineira(arroz, tutu de feijão, couve, farofa)<br/>
            Porção<br/>
            P - R$18,00<br/> 
            M - R$32,00<br/>
            G - R$65,00<br/>
          </li>
          <li>
            Carne seca com abobora(arroz, feijão e farofa)<br/>
            Porção<br/>
            P - R$20,00<br/> 
            M - R$37,00<br/>
            G - R$75,00<br/>
          </li>
          <li>
            Rabada com batata e agrião(arroz,  feijão e farofa)<br/>
            Porção<br/>
            P - R$25,00<br/> 
            M - R$45,00<br/>
            G - R$90,00<br/>
          </li>
          <li>
            Bobo de camarão(Arroz e salada do dia)<br/>
            Porção<br/>
            P - R$30,00<br/> 
            M - R$55,00<br/>
            G - R$100,00<br/>
          </li>
          <li>
            Mocoto(Arroz e farofa)<br/>
            Porção<br/>
            P - R$28,00<br/> 
            M - R$45,00<br/>
            G - R$90,00<br/>
          </li>
          <li>
            Feijoada(arroz, farofa e couve)<br/>
            Porção<br/>
            P - R$30,00<br/> 
            M - R$50,00<br/>
            G - R$95,00<br/>
          </li>
          <li>
           Peixe frito(arroz, feijão, farofa e salada do dia)<br/>
            Porção<br/>
            P - R$22,00<br/> 
            M - R$40,00<br/>
            G - R$75,00<br/>
          </li>
          <li>
            Bife Acebolado(arroz,feijão,farofa e fritas) <br/>
            Porção<br/>
            P - R$25,00<br/> 
            M - R$45,00<br/>
            G - R$90,00<br/>
          </li>
          <li>
            Linguiça Calabresa Acebolada(arroz, feijão, farofa e fritas) <br/>
            Porção<br/>
            P - R$15,00<br/> 
            M - R$28,00<br/>
            G - R$52,00<br/>
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

export default AlmocoJanta;
