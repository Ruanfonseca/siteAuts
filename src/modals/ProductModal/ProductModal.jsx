
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Product.css'; // Importe o arquivo CSS personalizado

function ProductModal({ show, onHide, product }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title className="modal-title">{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <img src={product.image} alt={product.name} className="modal-image" />
        <p className="modal-text">He Printing and Typesetting the industry. Lorem Ipsum has</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
