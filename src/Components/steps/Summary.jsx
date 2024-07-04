import React, { useEffect, useState } from 'react';

const Summary = ({ prevStep, handleSubmit, formData = {} }) => {
  // State to manage checkbox
  const [termsAccepted, setTermsAccepted] = useState(false);

  //Log the formData to the console whenever it changes 
  useEffect(() => {
    console.log('Summary Data:', formData);
  }, [formData]);

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div>
      <h2>Summary of Your Details ! </h2>

      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div className="p-1 px-2 w-full text-gray-800">
          First Name: {formData?.firstname || 'N/A'}
        </div>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div className="p-1 px-2 w-full text-gray-800">
          Last Name: {formData?.lastname || 'N/A'}
        </div>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div className="p-1 px-2 w-full text-gray-800">
          Date of Birth: {formData?.date || 'N/A'}
        </div>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div className="p-1 px-2 w-full text-gray-800">
          User Name: {formData?.username || 'N/A'}
        </div>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div className="p-1 px-2 w-full text-gray-800">
          Email ID: {formData?.email || 'N/A'}
        </div>
      </div>
      <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <div className="p-1 px-2 w-full text-gray-800">
          Phone Number: {formData?.phone || 'N/A'}
        </div>
      </div>
      
      {/* Add more fields as needed */}
      <div>
        
        <h2>Successfully Logged the form data to the Console !</h2></div>
      <div className="bg-gray-100 my-2 p-2 border border-gray-300 rounded">
        <h3>JSON Data</h3>
        <pre className="overflow-x-auto bg-white p-2 rounded border">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
      <div>
      <h2>
          <a
            href="https://github.com/Anuradha-Naidu/multistep-registration-form"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Checkout GitHub Repository
          </a>
        </h2>
        <h2 className='text-gray-100'>.</h2>
        
      <h2>Please do check your details before confirming !</h2></div>
      
    </div>

  );
};

export default Summary;


