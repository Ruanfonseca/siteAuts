import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormEtapa3 = ({ valores, etapaAnterior, enviarReserva, handleChange }) => {
  const { termosAceitos } = valores;

  const handleAnterior = (e) => {
    e.preventDefault();
    etapaAnterior();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarReserva();
  };

  return (
    <>
      <Form>
        <p>As reservas serão feitas somente de segunda a quinta, das 08:00 às 17:00. Serão mantidas até
           10 minutos após o horário reservado e validadas somente em nome do responsável pelo contato. 
           É necessário levar documento de identificação com foto. Em caso de lotação do espaço, o cliente
            será avisado sobre a lista de espera.
           Em caso de aniversário, a reserva deve ser feita com antecedência, informando o motivo da reserva.</p>
          
        <Form.Group controlId="termosAceitos">
          <Form.Check
            type="checkbox"
            label="Li e aceito os termos e condições"
            checked={termosAceitos === 'Aceito'}
            onChange={(e) => handleChange({ target: { id: 'termosAceitos', value: e.target.checked ? 'Aceito' : '' } })}
          />
        </Form.Group>

        <Button variant="secondary" className='buttonReserva' onClick={handleAnterior}>
          Anterior
        </Button>{' '}
        <Button variant="primary" className='buttonReserva' onClick={handleSubmit}>
          Enviar Reserva
        </Button>
      </Form>
    </>
  );
};

export default FormEtapa3;
