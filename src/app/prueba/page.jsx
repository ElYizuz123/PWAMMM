"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit } from "react-icons/fi";

const page = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-white p-4 flex items-center space-x-4 shadow rounded-lg">
        <img
          src="/productos/armonia_1.jpg"
          alt="DE LA SIERRA"
          className="h-20 w-20 object-cover rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">DE LA SIERRA 750ml</h3>
          <p className="text-gray-600">Marca: DON MATEO</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-red-500">x1</span>
            <div className="text-right">
              <span className="text-lg font-bold text-black">$1000</span>
              <div className="w-full bg-pink-100 h-1 rounded-full mt-1">
                <div
                  className="bg-pink-500 h-1 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
