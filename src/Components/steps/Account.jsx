import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StepperContext } from '../contexts/StepperContext';

const Account = ({ onSubmitForm }) => {
  const { userData, setUserData } = useContext(StepperContext);
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: userData
  });

  const password = watch('password'); // Watch the password field

  const onSubmit = (data) => {
    setUserData({ ...userData, ...data });
    onSubmitForm(data);
  };

  return (
    <form id="accountForm" onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Username
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            {...register('username', { 
              required: 'Username is required', 
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters'
              }
            })}
            placeholder="Username"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.username && <p className="text-red-600 text-xs">{errors.username.message}</p>}
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="password"
            {...register('password', { 
              required: 'Password is required', 
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
              }
            })}
            placeholder="Password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Confirm Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="password"
            {...register('confirmPassword', { 
              required: 'Confirm Password is required', 
              validate: value => value === password || 'The passwords do not match'
            })}
            placeholder="Confirm Password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        {errors.confirmPassword && <p className="text-red-600 text-xs">{errors.confirmPassword.message}</p>}
      </div>
    </form>
  );
};

export default Account;
