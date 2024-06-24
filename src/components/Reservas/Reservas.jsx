
import React, { useState } from 'react';
import '../css/reservas.css';
import FormEtapa1 from './PrimeiroFormulario';
import FormEtapa2 from './SegundoFormulario';
import FormEtapa3 from './TerceiroFormulario';

function Reservas (){
  const [etapa, setEtapa] = useState(1);

  // Estado para armazenar os valores dos campos do formulário
  const [valores, setValores] = useState({
    nomeResponsavel: '',
    email: '',
    telefone: '',
    dataReserva: '',
    horaReserva: '',
    motivoReserva: '',
    termosAceitos: false,
  });

  // Função para atualizar os valores dos campos do formulário
  const handleChange = (e) => {
    const { id, value } = e.target;
    setValores({ ...valores, [id]: value });
  };

  // Função para avançar para a próxima etapa
  const proximaEtapa = () => {
    setEtapa(etapa + 1);
  };

  // Função para voltar para a etapa anterior
  const etapaAnterior = () => {
    setEtapa(etapa - 1);
  };

  const enviarReserva = () => {
    alert('Reserva enviada com sucesso!');
    setValores({
      nomeResponsavel: '',
      email: '',
      telefone: '',
      dataReserva: '',
      horaReserva: '',
      motivoReserva: '',
      termosAceitos: false,
    });

    const data = 
    `
    Meu nome: ${valores.nomeResponsavel},
    Meu Email: ${valores.email},
    Meu Telefone: ${valores.telefone},
    Data da Reserva: ${valores.dataReserva},
    Hora da Reserva : ${valores.horaReserva},
    Motivo da Reserva : ${valores.motivoReserva}
    `
    console.log(data)
    setEtapa(1); // Reinicia para a primeira etapa após o envio
  };

  // Renderização da etapa do formulário com base no estado 'etapa'
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
       <div className="background-image">
            <div className="overlay"></div>
            <div className="containerReserva">
                <h1 className="tituloReserva">Formulário de Reserva</h1>
                <div className="form-container-reserva">
                    {formComponent}
                </div>
            </div>
        </div>
    </>
  );
};

export default Reservas;