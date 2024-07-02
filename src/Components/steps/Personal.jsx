import React, { useContext } from 'react';
import { StepperContext } from '../contexts/StepperContext';


const Personal = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          First Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            name="firstname"
            value={userData['firstname'] || ''}
            placeholder="First Name"
            className="p-1 px-2 apperarance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Last Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            onChange={handleChange}
            name="lastname"
            value={userData['lastname'] || ''}
            placeholder="Last Name"
            className="p-1 px-2 apperarance-none outline-none w-full text-gray-800"
          />
        </div>   
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Date Of Birth
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="date"
            onChange={handleChange}
            name="date"
            value={userData['date'] || ''}
            placeholder="Date Of Birth"
            className="p-1 px-2 apperarance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

    </div>
  );
};

export default Personal;
