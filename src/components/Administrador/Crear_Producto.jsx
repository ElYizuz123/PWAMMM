import React from 'react'

const Crear_Producto = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className='w-full h-full bg-[#f3e0e0]'>
        <div>
          <h2>¡Ventana emergente!</h2>
          <p>Contenido de la ventana emergente.</p>
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };

export default Crear_Producto