// src/Components/contexts/StepperContext.js
import { createContext } from 'react';

export const StepperContext = createContext({
  userData: {},
  setUserData: () => {},
  finalData: [],
  setFinalData: () => {},
  validationStatus: false,
  setValidationStatus: () => {}
});

