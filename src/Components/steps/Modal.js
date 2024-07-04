import React from 'react';



const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out animate-fadeIn">
      <div className="bg-violet-100 p-6 rounded-lg shadow-2xl max-w-md mx-auto text-center transform transition-transform duration-300 ease-in-out animate-slideUp">
        <h2 className="text-3xl font-bold mb-6 text-violet-900">Welcome User!</h2>
        <p className="mb-6 font-semibold text-gray-400">Click the button below to proceed to the main page.</p>
        <button
          className="bg-violet-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-500 focus:ring focus:ring-indigo-300 transition duration-200 ease-in-out"
          onClick={onClose}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Modal;
