import React from 'react';
import {
    BsFillEmojiFrownFill,
    BsFillEmojiHeartEyesFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill
} from 'react-icons/bs';


import './ReviewForm.css';

const ReviewForm = ({data,updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">

          <label className='radio-container'>
            
            <input type="radio"
             value="neutral" 
             name="review"
             checked={data.review==="neutral"}
             onChange={(e)=>updateFieldHandler("review",e.target.value)}
             required />
            
            <BsFillEmojiNeutralFill/>
            <p>Poderia ser Melhor</p>
          </label>
        
            <label className='radio-container'>
            <input type="radio"
             value="satisfied"
              name="review"
               required
               checked={data.review==="satisfied"}
             onChange={(e)=>updateFieldHandler("review",e.target.value)}
               />

            <BsFillEmojiSmileFill/>
            <p>Satisfeito</p>
          </label>
          
          <label className='radio-container'>
            <input type="radio" value="very_satisfied" name="review" required
            checked={data.review==="very_satisfied"}
            onChange={(e)=>updateFieldHandler("review",e.target.value)}
            />
            <BsFillEmojiHeartEyesFill/>
            <p>Muito Satisfeito</p>
          </label>
        
            <label className='radio-container'>
            <input type="radio" value="unsatisfied" name="review" required 
            checked={data.review==="unsatisfied"}
            onChange={(e)=>updateFieldHandler("review",e.target.value)}
            />
            <BsFillEmojiFrownFill/>
            <p>Insatisfeito</p>
          </label>
      </div>


      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='conte me como foi a sua experiencia com o produto' required

            checked={data.comment || ''}

            onChange={(e)=>updateFieldHandler("comment",e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm