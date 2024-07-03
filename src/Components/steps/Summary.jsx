import React, { useState } from 'react';

const Summary = ({ prevStep, handleSubmit, formData = {} }) => {
  // State to manage checkbox
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Handler for checkbox change
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <div>
      <h2>Summary of Your Details</h2>
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
      <div>
      <h2>Please do check your details before confirming !</h2></div>
      {/* Add more fields as needed */}


    </div>
  );
};

export default Summary;


