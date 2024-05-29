import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { useForm } from '../hooks/useForm';
import ReviewForm from './components/ReviewForm/ReviewForm';
import Thanks from './components/Thanks/thanks';
import UserForm from './components/UserForm';
import Steps from './components/steps/Steps';
import './css/style_avaliation.css';


//objeto de transição entre os forms
const formTemplate={
    name:"",
    email:"",
    review:"",
    comment:"",
};

function Avaliation(){

    const[data,setData] = useState(formTemplate); 
    
    const updateFieldHandler = (key,value)=>{
      setData((prev)=>{
        return{...prev,[key]:value};
      })
    }

    const formComponents = [
        <UserForm data={data} updateFieldHandler={updateFieldHandler}/>
        ,<ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>
        ,<Thanks data={data} updateFieldHandler={updateFieldHandler}/>
    ];

    const{currentStep,currentComponet,changeStep,isLastStep,isFirstStep} = useForm(formComponents);

 return(
    <div className="app">
        <div className="header">
            <h2>Avalie nosso Atendimento</h2>
            <p>Gostaríamos muito de receber seu feedback sobre a qualidade do nosso atendimento e dos nossos produtos. Sua opinião é fundamental para nós, pois nos ajuda a melhorar continuamente 
                e oferecer a melhor experiência possível para você.</p>
        </div>

        <div className="form-container">
            <Steps currentStep = {currentStep}/>

            <form onSubmit={(e)=>changeStep(currentStep + 1,e)}>
                
                <div className="inputs-container">
                    {currentComponet}
                </div>
                 <div className="actions">
                  
                  {!isFirstStep && (<button type="button" onClick={()=>changeStep(currentStep - 1)}>
                     <GrFormPrevious/>
                     <span>Voltar</span>
                  </button>)}
                  
          {//é o ultimo?
            !isLastStep?(
            <button type='submit'>
                   <span>Avançar</span>
             <GrFormNext/></button>
             
             ):(
             <button type='button'>
             <span>Enviar</span>
             <FiSend/>
           </button>
           )}
             </div>      

            </form>
        </div>
    </div>
 )

}

export default Avaliation;