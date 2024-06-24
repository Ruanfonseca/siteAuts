import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormEtapa2 = ({ valores, handleChange, etapaAnterior, proximaEtapa }) => {
  const { dataReserva, horaReserva, motivoReserva } = valores;

  const handleAnterior = (e) => {
    e.preventDefault();
    etapaAnterior();
  };

  const handleProximo = (e) => {
    e.preventDefault();
    proximaEtapa();
  };

  return (
    
    <Form>
      <Form.Group controlId="dataReserva">
        <Form.Label>Data da Reserva</Form.Label>
        <Form.Control
          type="date"
          value={dataReserva}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="horaReserva">
        <Form.Label>Hora da Reserva</Form.Label>
        <Form.Control
          type="time"
          value={horaReserva}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="motivoReserva">
        <Form.Label>Motivo da Reserva</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={motivoReserva}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="secondary" className='buttonReserva' onClick={handleAnterior}>
        Anterior
      </Button>{' '}
      <Button variant="primary" className='buttonReserva' onClick={handleProximo}>
        Próximo
      </Button>
    </Form>
  );
};

export default FormEtapa2;
