import React from 'react';
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill
} from 'react-icons/bs';


import './ReviewForm.css';

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">

        <label className='radio-container'>
          <input type="radio"
            value="Um_pouco_Insatisfeito" 
            name="sentimento"
            checked={data.sentimento === "Um_pouco_Insatisfeito"}
            onChange={(e) => updateFieldHandler("sentimento", e.target.value)}
            required />
          <BsFillEmojiNeutralFill/>
          <p>Poderia ser Melhor</p>
        </label>
        
        <label className='radio-container'>
          <input type="radio"
            value="satisfeito"
            name="sentimento"
            checked={data.sentimento === "satisfeito"}
            onChange={(e) => updateFieldHandler("sentimento", e.target.value)}
            required />
          <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        
        <label className='radio-container'>
          <input type="radio"
            value="Muito_Satisfeito"
            name="sentimento"
            checked={data.sentimento === "Muito_Satisfeito"}
            onChange={(e) => updateFieldHandler("sentimento", e.target.value)}
            required />
          <BsFillEmojiHeartEyesFill/>
          <p>Muito Satisfeito</p>
        </label>
        
        <label className='radio-container'>
          <input type="radio"
            value="insatisfeito"
            name="sentimento"
            checked={data.sentimento === "insatisfeito"}
            onChange={(e) => updateFieldHandler("sentimento", e.target.value)}
            required />
          <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="comentario">Comentário:</label>
        <textarea 
          name="comentario" 
          id="comentario" 
          placeholder='conte me como foi a sua experiencia em nosso restaurante'
          value={data.comentario || ''}
          onChange={(e) => updateFieldHandler("comentario", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default ReviewForm;;