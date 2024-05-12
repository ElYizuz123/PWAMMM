"use client";
import React, { useState, useEffect, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartCountAnimation, setCartCountAnimation] = useState("");
  const [marcaAsociada, setMarcaAsociada] = useState(0);
  const [marcaNombreAsociada, setMarcaNombreAsociada] = useState("Todos");
  const [isEnvio, setIsEnvio] = useState(1);
  const [productos, setProductos] = useState([]);
  const [dataFormulario, setDataFormulario] = useState({});
  const [metodoPago, setMetodoPago] = useState(0);

  useEffect(() => {
    const productosEnAlmacenamiento = localStorage.getItem("productos");
    if (productosEnAlmacenamiento) {
      setProductos(JSON.parse(productosEnAlmacenamiento));
    }
  }, []);

  const triggerCartCountAnimation = () => {
    setCartCountAnimation("animate-bounce bg-green-600");
    setTimeout(() => setCartCountAnimation(""), 3000);
  };

  const triggerCartCountAnimationDelete = () => {
    setCartCountAnimation("animate-bounce bg-red-500");
    setTimeout(() => setCartCountAnimation(""), 3000);
  };

  const addProductos = (newProduct) => {
    // Encuentra el índice del producto existente
    const index = productos.findIndex(
      (producto) => producto.id_producto === newProduct.id_producto
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

  //FUNCIÓN PARA ELIMINAR PRODUCTO DEL CARRITO
  //GUARDA LOS PRODUCTOS DIFERENTES A ID_PRODUCTO
  const deleteProduct = (id_producto) => {
    const updatedProductos = productos.filter(
      (producto) => producto.id_producto !== id_producto
    );

    setProductos(updatedProductos);
    localStorage.setItem("productos", JSON.stringify(updatedProductos));
    triggerCartCountAnimationDelete();
  };

  //FUNCION PARA EDITAR LA CANTIDAD DEL PRODUCTO QUE ESTA EN CARRITO
  //BUSCA EL INDICE POR MEDIO DEL ID_PRODUCTO Y EDITAR SU CANTIDAD
  const updateQuantity = (operacion, newProduct) => {
    const index = productos.findIndex(
      (producto) => producto.id_producto === newProduct.id_producto
    );

    let cantidadActual = productos[index].cantidad || 1; // Aseguramos un mínimo de 1
    // Incrementa o decrementa según el tipo
    cantidadActual =
      operacion === "SUMA"
        ? cantidadActual + 1
        : Math.max(cantidadActual - 1, 1);

    const newProducts = [...productos];
    newProducts[index] = {
      //REDUCIR CODIGO AL IGUALAR
      ...newProducts[index],
      cantidad: cantidadActual,
    };

    setProductos(newProducts);
    localStorage.setItem("productos", JSON.stringify(newProducts));
    triggerCartCountAnimation();
  };

  const enviarDataApi = async () => {
    try {
      console.log(dataFormulario)
      const response = await fetch("/api/ventas/create_venta", {
        method: "POST",
        body: JSON.stringify({ data: dataFormulario, productos: productos }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // MANDA LOS DATOS NECESARIOS PARA EL CORREO
      const responseData = await fetch("/api/send_emailVenta", {
        method: "POST",
        body: JSON.stringify({
          nombreCliente: dataFormulario.nombre,
          apellidoCliente: dataFormulario.apellidos,
          telefono: dataFormulario.telefono,
          correo: dataFormulario.email,
          nombreEmpresa: dataFormulario.empresa,
          pais: "México",
          ciudad: dataFormulario.ciudad,
          colonia: dataFormulario.colonia,
          calle: dataFormulario.calle,
          numExterior: dataFormulario.num_ext,
          numInterior: dataFormulario.num_int,
          cp: dataFormulario.cp,
          productos: productos,
          metodoEnvio: isEnvio === 0 ? "Envío" : "Recoger en tienda",
          total: dataFormulario.total,
          metodoPago: metodoPago === 1 ? "Paypal" : "Tranferencia bancaria",
        }),
      });

      if (!responseData.ok) {
        throw new Error(`HTTP error! status: ${responseData.status}`);
      }
      const result = await response.json();
      const responseEmail = await responseData.json();

      console.log(result, responseEmail);

      limpiarProductos();
      
    } catch (error) {
      console.error("Error en el proceso:", error); // Maneja cualquier error que ocurra durante el fetch
    }
  };

  const total = productos.reduce(
    (sub, producto) => sub + producto.precio * producto.cantidad,
    0
  );

  const envioVenta = (estado) => {
    setIsEnvio(estado);
  };

  const limpiarProductos = () => {
    setProductos([]);
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
        marcaAsociada,
        setMarcaAsociada,
        marcaNombreAsociada,
        setMarcaNombreAsociada,
        metodoPago,
        setMetodoPago,
        setDataFormulario,
        enviarDataApi
      }}
    >
      <div>{children}</div>
    </ProductContext.Provider>
  );
};
