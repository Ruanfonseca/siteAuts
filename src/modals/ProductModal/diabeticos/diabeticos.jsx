import React from 'react';
import { Modal } from 'react-bootstrap';
import '../Product.css';
function DiabeticosModal({ show, onHide, product }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Detalhes sobre {product.name}</p>
      </Modal.Body>
    </Modal>
  );
}

export default DiabeticosModal;
