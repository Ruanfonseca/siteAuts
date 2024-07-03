import React from 'react';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill
} from 'react-icons/bs';
import './Thanks.css';


const emojiData ={
  unsatisfied:<BsFillEmojiFrownFill/>,
  neutral:<BsFillEmojiNeutralFill/>,
  very_satisfied:<BsFillEmojiHeartEyesFill/>,
  satisfied:<BsFillEmojiSmileFill/>
}

const thanks = ({data}) => {
    return (
      <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
        <br/>
        <h3>Aqui está o resumo do sua avaliação  {data.nome}<br/></h3>
        
        <p className="review-data">
        <br/>
          <span>Satisfação com o produto</span>
          <br/>
          {emojiData[data.sentimento]}
        </p>
  
        <p className="review-data">
        <br/>
          <span>Comentário:</span>
          <br/>
          {data.comentario}
        </p>
  
      </div>
    )
  }
  
  export default thanks