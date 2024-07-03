import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StepperContext } from '../contexts/StepperContext';

const Contact = ({ onSubmitForm }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: userData
  });

  const onSubmit = (data) => {
    setUserData({ ...userData, ...data });
    onSubmitForm(data);
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Email ID
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            {...register('email', { 
              required: 'Email ID is required', 
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="Email ID"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Phone Number
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            {...register('phone', { 
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be 10 digits'
              }
            })}
            placeholder="Phone Number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.phone && <p className="text-red-600 text-xs">{errors.phone.message}</p>}
      </div>
    </form>
  );
};

export default Contact;
