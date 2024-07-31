import React from 'react';
import { Button, Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import '../../components/css/reservas.css';

const FormEtapa1 = ({ valores, handleChange, proximaEtapa }) => {
  const { nomeResponsavel, email, telefone } = valores;

  const handleProximo = (e) => {
    e.preventDefault();
    proximaEtapa();
  };

  return (
    <Form className="form-reserva">
      <Form.Group controlId="nomeResponsavel" className="mb-3">
        <Form.Label>Nome do Responsável</Form.Label>
        <Form.Control
          type="text"
          value={nomeResponsavel}
          onChange={handleChange}
          placeholder="Nome"
        />
      </Form.Group>

      <Form.Group controlId="email" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group controlId="telefone" className="mb-3">
        <Form.Label>Telefone</Form.Label>
        <InputMask
          mask="(99) 99999-9999"
          value={telefone}
          onChange={handleChange}
        >
          {(inputProps) => <Form.Control {...inputProps} type="tel" placeholder="Telefone" />}
        </InputMask>
      </Form.Group>

      <Button variant="primary" className="button-reserva" onClick={handleProximo}>
        Próximo
      </Button>
    </Form>
  );
};

export default FormEtapa1;
