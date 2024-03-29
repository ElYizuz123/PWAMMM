import Ficha from "@/components/tienda/Ficha";
import LayoutPrincipal from "@/components/Layouts/LayoutPrincipal";
import React from "react";
import Image from "next/image";


const abrir_producto = () => {
   const [productos, setProductos] = useState([]);

   useEffect(() => {
     const fetchProductos = async () => {
       const response = await fetch("/api/read_productos");
       const data = await response.json();
       setProductos(data);
     };

     fetchProductos();
   }, []);
  return (
    <LayoutPrincipal>
    
      <div className="w-full ">
        <Ficha
        
        
        ></Ficha>
      </div>
    </LayoutPrincipal>
  );
};

export default abrir_producto;
