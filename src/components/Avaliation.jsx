import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useForm } from '../hooks/useForm';
import ReviewForm from './ReviewForm/ReviewForm';
import Thanks from './Thanks/thanks';
import UserForm from './UserForm';
import './css/style_avaliation.css';
import Steps from './steps/Steps';


const formTemplate={
  nome:"",
  email:"",
  sentimento:"",
  comentario:"",
 };
 
 function Avaliation() {
 
   const[data,setData] = useState(formTemplate);
   
   const updateFieldHandler = (key,value)=>{
     setData((prev)=>{
       return{...prev,[key]:value};
     })
   }
   
  const formComponents = [
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>
  ,<ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>
  ,<Thanks data={data} updateFieldHandler={updateFieldHandler}/>];
 
  const{currentStep,currentComponent,changeStep,isLastStep,isFirstStep} = useForm(formComponents);
  
  const handleEnvio =() =>{
    const mensagem = 
    `Olá , meu nome é ${data.nome} ,meu email ${data.email} ,
     estive no seu restaurante e me senti ${data.sentimento} ,
     meu comentário sobre a experiência é ${data.comentario}.
    `;
    const phoneNumber = '21969232991';
    const messageText = encodeURIComponent(mensagem);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${messageText}`;
    // Abrir o link no navegador
    window.open(whatsappLink, '_blank');
  }
 
  return (
   
       <div className='app'>
         <div className="header">
           <h2>Deixe sua avaliação</h2>
           <p>Ficamos felizes com a sua presença,utilize o formulario abaixo para avaliar o nosso atendimento</p>
         </div>
 
         <div className="form-container">
           
           <Steps currentStep={currentStep}/>
           
           <form onSubmit={(e)=>changeStep(currentStep + 1,e)}>
             <div className="inputs-container">
                {currentComponent}
             </div>
             <div className="actions">
               
              {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>
                 <GrFormPrevious/>
                 <span>Voltar</span>
               </button>)}
               
             
             {//é o ultimo?
             !isLastStep?(<button type='submit'>
                          <span>Avançar</span>
                           <GrFormNext/></button>
                           
                           ):(
                           <button onClick={handleEnvio} type='button'>
                           <span>Enviar</span>
                           <FiSend/>
                         </button>
                         ) 
              }
             </div>
           </form>
 
         </div>
       </div>
     
   )
 }
 
 export default Avaliation;
 