import React from 'react'
import { useState } from 'react';
import Stepper from './Components/Stepper';
import { StepperContext } from './Components/contexts/StepperContext';
import StepperControl from './Components/StepperControl';
import Personal from './Components/steps/Personal';
import Contact from './Components/steps/Contact';
import Account from './Components/steps/Account';
import Final from './Components/steps/Final'; 
import Summary from './Components/steps/Summary';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);  
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);


  const steps = [
    "Personal Information",
    "Contact Information",
    "Sign Up",
    "Summary",
    "Account Setup"
  ];

const displayStep = (step) => {
  switch(step){
    case 1:
      return <Personal/>
    case 2:
      return <Contact/>
    case 3:
      return <Account/>
    case 4:
        return <Summary formData={userData}/> //pass userData as formData 
    case 5:
        return <Final/>
    default:
      return null;
      
  }

}

const handleClick = (direction) => {
  let newStep = currentStep;

  direction === 'next' ? newStep++ : newStep--;
  //check if steps are within bounds\
  newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
};

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/*Stepper */}
      <div className='container horizontal mt-5'>
       <Stepper
       steps = {steps}
       currentStep = {currentStep} 
       /></div>

       {/* Display Components*/}

       <div className="my-10 p-10">
        <StepperContext.Provider value={{ 
          userData, 
          setUserData, 
          finalData, 
          setFinalData 
          }}>

            {displayStep(currentStep)}
        </StepperContext.Provider>
       </div>
       
      
     
      {currentStep !== steps.length && (
        <StepperControl  
        handleClick={handleClick}
        currentStep= {currentStep}
        steps={steps}
        />
      )}
             
    </div>
  );
}

export default App
