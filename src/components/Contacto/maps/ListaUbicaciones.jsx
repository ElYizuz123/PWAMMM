"use client"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useState, useEffect } from "react";
import DatosUbicacion from "./DatosUbicacion";


function ListaUbicaciones() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBrand, setCurrentBrand] = useState("");

  const [selectedComponent, setSelectedComponent] = useState(null);
  const [mapaUrl, setMapaUrl] = useState(null);
  const [ubi, setUbi] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [qrImagen, setQRImagen] = useState(null);

  const [ubicacion, setUbicacion] = useState(null);
  const readData = async () => {
    try {
      const res = await fetch('/api/contacto/read_ubicaciones');
      const resJSON = await res.json();
      setUbicacion(resJSON);
      console.log(resJSON);

    } catch (error) {
      console.error("error al leer los datos", error);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    if (ubicacion) {
      setCurrentBrand(JSON.parse(ubicacion[0].json_marca).marca);
      setMapaUrl(JSON.parse(ubicacion[0].json_marca).mapa);
      setUbi(JSON.parse(ubicacion[0].json_marca).ubicacion);
      setTelefono(JSON.parse(ubicacion[0].json_marca).telefono);
      setQRImagen(JSON.parse(ubicacion[0].json_marca).pagina);
    }
  }, [ubicacion]);


  const handleBrandClick = (marca, mapaUrl, ubi, telefono, qrImagen) => {
    setCurrentBrand(marca);
    setIsOpen(false);
    setSelectedComponent(marca);
    setMapaUrl(mapaUrl);
    setUbi(ubi);
    setTelefono(telefono);
    setQRImagen(qrImagen);
  };

  const renderSelectedComponent = () => {

    if (mapaUrl && ubi && telefono && qrImagen) {
      return <DatosUbicacion
        mapaUrl={mapaUrl}
        ubi={ubi}
        telefono={telefono}
        qrImagen={qrImagen}
      />
    }

  };

  return (
    <div className="lg:ml-20 w-full rounded-lg mb-10">
      <p className="lg:mb-4 mb-2 lg:text-6xl md:text-4xl text-3xl">
        Nuestras Tiendas
      </p>
      <button className="mb-2 bg-white border-2 border-[#D60064] active:border-black h-full shadow-lg duration-0 active:text-[#D60064] p-2 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider
        lg:w-[300px] sm:w-[250px] md:w-[250px] w-[250px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {currentBrand}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>


      {isOpen && (
        <div className="bg-white border-2 border-[#D60064] absolute flex flex-col items-start rounded-lg p-2 shadow-2xl
            lg:w-[300px] sm:w-[250px] md:w-[250px] w-[250px]">
          {ubicacion &&
            ubicacion.map((ubicacion) => (
              <div className="flex w-full p-2 justify-between hover:bg-[#D60064] hover:text-white cursor-pointer rounded-md border-l-transparent"
                key={ubicacion.id_ubicacion} onClick={() => handleBrandClick(
                  JSON.parse(ubicacion.json_marca).marca,
                  JSON.parse(ubicacion.json_marca).mapa,
                  JSON.parse(ubicacion.json_marca).ubicacion,
                  JSON.parse(ubicacion.json_marca).telefono,
                  JSON.parse(ubicacion.json_marca).pagina
                )}>
                <p>{JSON.parse(ubicacion.json_marca).marca}</p>
              </div>
            ))}
        </div>
      )}
      {renderSelectedComponent()}

    </div>
  );
}

export default ListaUbicaciones