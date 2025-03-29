"use client";

import React, { useState } from 'react';
import Menu from '@/app/components/Menu';

// Define el componente Home, que representa la página de inicio
export default function Home() {
  // Estado para almacenar el punto de venta seleccionado
  const [selectedPoint, setSelectedPoint] = useState("Punto venta 01");
  // Estado para controlar si el menú está abierto o no
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para manejar el cambio de punto de venta
  const handlePointChange = (point: string) => {
    setSelectedPoint(point);
  };

  // Función para manejar el cambio de estado del menú
  const handleMenuStateChange = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col"> 
      {/* Contenedor principal */}

      <div className="container mx-auto px-4 py-8 flex-grow">         
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-center text-gray-800 mb-6">
          {isMenuOpen ? selectedPoint : "Menú Dinámico"}
        </h1>

        <div className="flex justify-center">
          <Menu 
            onPointChange={handlePointChange} 
            onMenuStateChange={handleMenuStateChange}
          /> 
          {/* Pasamos las funciones de callback al componente Menu */}
        </div>
      </div>
    </div>
  );
}