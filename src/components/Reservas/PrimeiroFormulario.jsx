import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../components/css/reservas.css';

const FormEtapa1 = ({ valores, handleChange, proximaEtapa }) => {
  const { nomeResponsavel, email, telefone } = valores;

  const handleProximo = (e) => {
    e.preventDefault();
    proximaEtapa();
  };

  return (
    <Form>
      <Form.Group controlId="nomeResponsavel">
        <Form.Label>Nome do Responsável</Form.Label>
        <Form.Control
          type="text"
          value={nomeResponsavel}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="telefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="tel" value={telefone} onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" className='buttonReserva' onClick={handleProximo}>
        Próximo
      </Button>
    </Form>
  );
};

export default FormEtapa1;
