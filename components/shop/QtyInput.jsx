import React, { useState } from 'react';

const QtyInput = ({ min, max, label }) => {
  const [value, setValue] = useState(1); //eslint-disable-line

  const handledecrement = (e) => {
    e.preventDefault();
    value > min && setValue(value - 1);
  };

  const handleincrement = (e) => {
    e.preventDefault();
    value < max && setValue(value + 1);
  };
  return (
    <div className="custom-number-input h-10 w-32">
      <label
        htmlFor="custom-input-number"
        className="w-full block mb-2 text-gray-700 text-md font-semibold"
      >
        {label}
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={handledecrement}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
          name="custom-input-number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={handleincrement}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default QtyInput;
