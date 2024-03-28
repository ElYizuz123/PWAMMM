"use client";
import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setCount(Number.isNaN(value) ? 0 : value);
  };

  return (
    <div class=" ml-4 flex items-center justify-center bg-[#F70073] rounded-full mt-2  px-9 ">
      <button
        class="text-3xl text-white focus:outline-none  focus:ring-opacity-50 "
        onClick={decrement}
      >
        -
      </button>
      <input
        type="text"
        class="w-16 text-lg bg-[#F70073] text-white text-center focus:outline-none"
        value={count}
        onChange={handleInputChange}
      />

      <button
        class=" text-2xl  text-white focus:outline-none  focus:ring-opacity-50"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Contador;
