"use client"
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import list from "@/components/maps/list.json";
import { useState, useEffect } from "react";
import UbicacionMezcalArmonia from "./ubicaciones/UbicacionMezcalArmonia";
import UbicacionMezcalQveela from "./ubicaciones/UbicacionQveela";
import UbicacionDonMateo from "./ubicaciones/UbicacionDonMateo";

function ListaUbicaciones () {
  const [isOpen, setIsOpen] = useState(false);
  const [currentBrand, setCurrentBrand] = useState("Mezcal Armonía");
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    setSelectedComponent("Mezcal Armonía");
  }, []);

  const handleBrandClick = (marca) => {
    setCurrentBrand(marca);
    setIsOpen(false);
    setSelectedComponent(marca);
  };
  
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "Mezcal Armonía":
        return <UbicacionMezcalArmonia />;
      case "Qveela":
        return <UbicacionMezcalQveela />;
      case "Don Mateo":
        return <UbicacionDonMateo />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:ml-20 w-full rounded-lg mb-10">
        <button className="mb-2 bg-white border-2 border-[#D60064] active:border-black w-[300px] h-full shadow-lg duration-0 active:text-[#D60064] p-2 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider"
        onClick={() => setIsOpen((prev) => !prev)}
        >
            {currentBrand}
            {!isOpen ? (
                <AiOutlineCaretDown className="h-8"/>
            ): (
                <AiOutlineCaretUp className="h-8"/>
            )}
        </button>
        
        {isOpen && (
            <div className="bg-white border-2 border-[#D60064] absolute flex flex-col items-start rounded-lg p-2 w-[300px] shadow-2xl">
                {list.map((item, i) => (
                    <div className="flex w-full p-2 justify-between hover:bg-[#D60064] hover:text-white cursor-pointer rounded-md border-l-transparent" 
                    key={i} onClick={() => handleBrandClick(item.marca)}>
                        <h3>{item.marca}</h3>
                    </div>
                ))}
            </div>
        )}
        {renderSelectedComponent()}

    </div>
  );
}

export default ListaUbicaciones