"use client";
import React, { useState } from "react";

const Contador = ({ cantidad2 }) => {
  const [count, setCount] = useState(1);
  const maxCount =  cantidad2;

  const increment = () => {
    setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };
  console.log({ cantidad2 });
  const handleInputChange = (e) => {
    // Aseguramos que el valor ingresado sea un número y no exceda el máximo
    const newValue = parseInt(e.target.value, 10);

    // Comprobamos si el número es válido y no supera el valor máximo
    if (!isNaN(newValue) && newValue <= maxCount) {
      setCount(newValue);
    } else if (newValue > maxCount) {
      // Si el valor es mayor que el máximo, establecemos el máximo
      setCount(maxCount);
    }
  };
  const handleInputBlur = () => {
    // Si el input está vacío o el valor es menor que el mínimo, restablecemos a 1
    if (!count || count < 1) {
      setCount(1);
    }
  };

  return (
    <div class=" ml-[82px] flex items-center justify-center bg-[#F70073] rounded-full mt-4 py-[2px]  px-9 ">
      <button
        class="text-3xl text-white focus:outline-none  "
        onClick={decrement}
      >
        -
      </button>
      <input
        type="text"
        className="w-16 text-lg bg-[#F70073] text-white text-center focus:outline-none focus:ring-0 border-0"
        value={count}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        min="1"
        max={maxCount}
      />

      <button
        class=" text-2xl  text-white focus:outline-none  "
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Contador;
