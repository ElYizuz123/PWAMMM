"use client";
import React, { useState, useEffect, createContext } from 'react';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartCountAnimation, setCartCountAnimation] = useState('');
  const [marcaAsociada, setMarcaAsociada] = useState(0);
  const [isEnvio, setIsEnvio] = useState(1);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosEnAlmacenamiento = localStorage.getItem('productos');
    if (productosEnAlmacenamiento) {
      setProductos(JSON.parse(productosEnAlmacenamiento));
    }
  }, []);

  const triggerCartCountAnimation = () => {
    setCartCountAnimation('animate-bounce bg-green-600');
    setTimeout(() => setCartCountAnimation(''), 3000);
  };

  const triggerCartCountAnimationDelete = () => {
    setCartCountAnimation('animate-bounce bg-red-500');
    setTimeout(() => setCartCountAnimation(''), 3000);
  };

  const addProductos = (newProduct) => {
    // Encuentra el índice del producto existente
    const index = productos.findIndex(
      (producto) => producto.id_producto === newProduct.id_producto && producto.nombre === newProduct.nombre
    );

    let newProducts = [...productos]; // Hace una copia del estado actual de los productos

    if (index !== -1) {
        // Si el producto existe, actualiza su cantidad
        const cantidadActual = newProducts[index].cantidad || 0;
        newProducts[index] = {
            ...newProducts[index],
            cantidad: cantidadActual + (newProduct.count || 1),
        };
    } else {
        // Si el producto no existe, lo agrega
        newProducts.push({
            ...newProduct,
            cantidad: newProduct.count || 1,
        });
    }

    setProductos(newProducts); // Actualiza el estado de productos
    localStorage.setItem("productos", JSON.stringify(newProducts)); // Guarda en localStorage
    triggerCartCountAnimation(); // Activa la animación
};


  const deleteProduct = (name) => {
    const updatedProductos = productos.filter(
      (producto) => producto.nombre !== name
    );

    setProductos(updatedProductos);
    localStorage.setItem("productos", JSON.stringify(updatedProductos));
    triggerCartCountAnimationDelete();
  };

  const updateQuantity = (tipo, newProduct) => {
    const index = productos.findIndex(
      (producto) =>
        producto.id_producto === newProduct.id_producto &&
        producto.nombre === newProduct.nombre
    );

    if (index !== -1) {
        let cantidadActual = productos[index].cantidad || 1; // Aseguramos un mínimo de 1
        // Incrementa o decrementa según el tipo
        cantidadActual = tipo === 1 ? cantidadActual + 1 : Math.max(cantidadActual - 1, 1);
        
        const newProducts = [...productos];
        newProducts[index] = {
            ...newProducts[index],
            cantidad: cantidadActual
        };

        setProductos(newProducts);
        localStorage.setItem("productos", JSON.stringify(newProducts));
        triggerCartCountAnimation();
    }
};

  const total = productos.reduce(
    (sub, producto) => sub + producto.precio * producto.cantidad,
    0
  );

  const envioVenta = (estado) => {
    setIsEnvio(estado);
  }

  const idMarcaAsociada = (idMarcaAsociada) => {
    setMarcaAsociada(idMarcaAsociada);
  };

  return (
    <ProductContext.Provider
      value={{
        productos,
        cartCountAnimation,
        addProductos,
        deleteProduct,
        updateQuantity,
        total,
        envioVenta,
        isEnvio,
        idMarcaAsociada,
        marcaAsociada,
      }}
    >
      <div>{children}</div>
    </ProductContext.Provider>
  );
};
