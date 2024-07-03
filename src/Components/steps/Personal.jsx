import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StepperContext } from '../contexts/StepperContext';

const Personal = ({ onSubmitForm }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: userData
  });

  const onSubmit = (data) => {
    setUserData({ ...userData, ...data });
    onSubmitForm(data);
  };

  return (
    <form id="personalForm" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          First Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            {...register('firstname', { required: 'First Name is required' })}
            placeholder="First Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.firstname && <p className="text-red-600 text-xs">{errors.firstname.message}</p>}
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Last Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            {...register('lastname', { required: 'Last Name is required' })}
            placeholder="Last Name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.lastname && <p className="text-red-600 text-xs">{errors.lastname.message}</p>}
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Date Of Birth
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="date"
            {...register('date', { required: 'Date of Birth is required' })}
            placeholder="Date Of Birth"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.date && <p className="text-red-600 text-xs">{errors.date.message}</p>}
      </div>
    </form>
  );
};

export default Personal;






