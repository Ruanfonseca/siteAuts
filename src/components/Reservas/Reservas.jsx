import React, { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import '../css/reservas.css';
import FormEtapa1 from './PrimeiroFormulario';
import FormEtapa2 from './SegundoFormulario';
import FormEtapa3 from './TerceiroFormulario';

function Reservas() {
  const [etapa, setEtapa] = useState(1);
  const [valores, setValores] = useState({
    nomeResponsavel: '',
    email: '',
    telefone: '',
    dataReserva: '',
    horaReserva: '',
    motivoReserva: '',
    termosAceitos: false,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValores({ ...valores, [id]: value });
  };

  const proximaEtapa = () => {
    setEtapa(etapa + 1);
  };

  const etapaAnterior = () => {
    setEtapa(etapa - 1);
  };

  const enviarReserva = async () => {
    const mensagem = `Olá ,
      Sou: ${valores.nomeResponsavel},
      Meu Email: ${valores.email},
      Meu Telefone: ${valores.telefone},
      Data da Reserva: ${valores.dataReserva},
      Hora da Reserva: ${valores.horaReserva},
      Motivo da Reserva: ${valores.motivoReserva},
      Termos Aceitos: ${valores.termosAceitos ? 'Aceito' : 'Não Aceito'}
    `;
    
    const phoneNumber = '21970657441';
    const messageText = encodeURIComponent(mensagem);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`;

    // Abrir o link no navegador
    window.open(whatsappLink, '_blank');

    // Reiniciar os valores do formulário e a etapa
    setValores({
      nomeResponsavel: '',
      email: '',
      telefone: '',
      dataReserva: '',
      horaReserva: '',
      motivoReserva: '',
      termosAceitos: false,
    });

    setEtapa(1);
  };

  let formComponent;
  switch (etapa) {
    case 1:
      formComponent = (
        <FormEtapa1
          valores={valores}
          handleChange={handleChange}
          proximaEtapa={proximaEtapa}
        />
      );
      break;
    case 2:
      formComponent = (
        <FormEtapa2
          valores={valores}
          handleChange={handleChange}
          etapaAnterior={etapaAnterior}
          proximaEtapa={proximaEtapa}
        />
      );
      break;
    case 3:
      formComponent = (
        <FormEtapa3
          valores={valores}
          etapaAnterior={etapaAnterior}
          enviarReserva={enviarReserva}
          handleChange={handleChange}
        />
      );
      break;
    default:
      formComponent = (
        <FormEtapa1
          valores={valores}
          handleChange={handleChange}
          proximaEtapa={proximaEtapa}
        />
      );
  }

  return (
    <>
    <Container fluid className="p-0">
      <div className="min-vh-100 background-image" >
        <Col xs={12} className="d-flex align-items-center justify-content-center">
          <div className="p-4 bg-white rounded shadow-sm">
            <h1 className="mb-4">Formulário de Reserva</h1>
            {formComponent}
          </div>
        </Col>
      </div>
    </Container>
    </> 
   );
}

export default Reservas;
