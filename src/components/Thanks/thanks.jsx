import React from 'react';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill
} from 'react-icons/bs';
import './Thanks.css';

const emojiData = {
  insatisfeito: <BsFillEmojiFrownFill />,
  Um_pouco_Insatisfeito: <BsFillEmojiNeutralFill />,
  Muito_Satisfeito: <BsFillEmojiHeartEyesFill />,
  satisfeito: <BsFillEmojiSmileFill />
}

const thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo do sua avaliação {data.nome}</h3>
      
      <div className="review-data">
        <p>
          <span>Satisfação com o produto</span>
          {emojiData[data.sentimento]}
        </p>
        <p>
          <span>Comentário:</span>
          {data.comentario}
        </p>
      </div>
    </div>
  )
}

export default thanks;
