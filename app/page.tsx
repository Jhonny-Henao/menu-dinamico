import React from 'react';
import Menu from '@/app/components/Menu';

// Define el componente Home, que representa la página de inicio
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col"> 
      {/* Contenedor principal */}

      <div className="container mx-auto px-4 py-8 flex-grow">         
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 md:text-5xl lg:text-6xl">
          Menú Dinámico
        </h1>

        <div className="flex justify-center">
          <Menu /> 
          {/* Renderizo el componente de menú y lo centro horizontalmente */}
        </div>
      </div>
    </div>
  );
}
