import React from 'react';

const Summary = ({ prevStep, handleSubmit, formData = {} }) => {
  return (
    <div>
      <h2>Summary</h2>
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
          Date Of Birth: {formData?.date || 'N/A'}
        </div>
      </div>
      {/* Add more fields as needed */}
      </div>
  );
};

export default Summary;

