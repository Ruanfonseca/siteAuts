import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormEtapa3 = ({ valores, etapaAnterior, enviarReserva }) => {
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
      <p>As Reservas serão feitas somente de segunda até quinta 08:00 às 17:00, 
        serão mantidas até 10 minutos após o horário reservado e validadas
        somente em nome do responsável pelo contato,
        necessário levar documento de identificação com foto.
        Em caso se lotação do espaço o cliente será avisado sobre a lista de espera.
        Em caso de aniversário, reservar com antecedência informando o motivo da reserva.</p>
        
      <Form.Group controlId="termosAceitos">
        <Form.Check
          type="checkbox"
          label="Li e aceito os termos e condições"
          checked={termosAceitos}
          onChange={() => {}}
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
