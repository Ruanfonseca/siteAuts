import React from 'react';

import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import './Steps.css';

const Steps = ({currentStep}) => {
    return (
      <div className='steps'>
          
          <div className="step active">
              <p>Identificação</p>
              <AiOutlineUser/>
          </div>
          
          <div className={`step ${currentStep>=1 ? "active":''}`}>
             <AiOutlineStar/>
              <p>Avaliação</p>
              
          </div>
  
          <div className={`step ${currentStep>=2 ? "active":''}`}>
             <FiSend/>
              <p>Envio</p>
          </div>
  
      </div>
    )
  }
  
  export default Steps