import React from 'react'


function Contador() {
  return (
    <div className="flex items-center">
      <button className="bg-gray-300 text-white font-bold object-cover py-1 px-4 rounded-full mt-2 flex items-center ml-3">
        +
      </button>
      <p className="font-bold ml-2">0</p>
      <button className="bg-gray-300 text-white font-bold object-cover py-1 px-4 rounded-full mt-2 flex items-center ml-2">
        -
      </button>
    </div>
  );
}

export default Contador
