import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Username
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={userData['username'] || ''}
            placeholder="Username"
            className="p-1 px-2 apperarance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={userData['password'] || ''}
            placeholder="Password"
            className="p-1 px-2 apperarance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;