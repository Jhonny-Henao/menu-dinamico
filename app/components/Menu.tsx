"use client";

import { useState } from "react";
import { menuData, PuntoVentaData } from "@/app/data/menuData";
import Link from "next/link";
import { Menu as MenuIcon, X, ChevronRight } from "lucide-react";

type PuntoVenta = keyof typeof menuData;

const getUserName = (point: PuntoVenta): string => {
  const userNames: Record<PuntoVenta, string> = {
    "Punto venta 01": "Usuario 1",
    "Punto venta 02": "Usuario 2",
    "Punto venta 03": "Usuario 3"
  };
  return userNames[point];
};

const Menu = () => {
  const [selectedPoint, setSelectedPoint] = useState<PuntoVenta>("Punto venta 01");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPuntosOpen, setIsPuntosOpen] = useState(false);

  const menu: PuntoVentaData = menuData[selectedPoint];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isPuntosOpen) setIsPuntosOpen(false);
  };

  const togglePuntosMenu = () => {
    setIsPuntosOpen(!isPuntosOpen);
  };

  const selectPuntoVenta = (punto: PuntoVenta) => {
    setSelectedPoint(punto);
    setIsPuntosOpen(false);
  };

  return (
    <>
      {/* Boton Menu Hamburguesa */}
      {!isMenuOpen && (
        <button 
          onClick={toggleMenu} 
          className="fixed top-4 left-4 z-50 flex items-center cursor-pointer justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
          <MenuIcon size={24} />
        </button>
      )}

      {/* Menú Movil */}
      <div className={`
        md:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-all duration-300 flex flex-col
        ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* Encabezado con Selector de Punto de Venta y Botón Cerrar  */}
        <div 
          className="p-4 border-b border-gray-200 flex-shrink-0 flex items-center justify-between"
          style={{ backgroundColor: menu.color }}
        >
          {/* Reemplazamos el select por un botón que activa el menú de puntos de venta */}
          <button 
            onClick={togglePuntosMenu}
            className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[85%] text-left flex items-center justify-between"
          >
            <span>{selectedPoint}</span>
            <ChevronRight size={16} className={`transition-transform ${isPuntosOpen ? 'rotate-90' : ''}`} />
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="ml-3 p-2 rounded-full bg-white/20 hover:bg-white/40 text-gray-800 transition-colors cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menú desplegable de Puntos de Venta (Mobile) */}
        {isPuntosOpen && (
          <div className="absolute top-[72px] left-4 right-4 bg-white rounded-md shadow-lg border border-gray-200 z-50">
            <ul className="py-2">
              {Object.keys(menuData).map((punto) => (
                <li key={punto}>
                  <button
                    onClick={() => selectPuntoVenta(punto as PuntoVenta)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${punto === selectedPoint ? 'bg-gray-50 font-medium' : ''}`}
                  >
                    {punto}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Scroll */}
        <div className="flex-grow overflow-y-auto">
          {/* Elementos del menú (Móvil - Ancho completo) */}
          <nav className="py-4">
            <ul className="space-y-2 px-4">
              {menu.items.map((item) => (
                <li key={item.path} className="w-full">
                  <Link 
                    href={item.path} 
                    className="flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors group w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="mr-3 text-xl opacity-70 group-hover:opacity-100">{item.icon}</span>
                    <span className="flex-grow text-sm font-medium">{item.name}</span>
                    {item.badge !== undefined && (
                      <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Seccion de Roles (Movil) */}
            {menu.roles && (
              <div className="px-4 mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Otros Roles</h4>
                <ul className="space-y-2">
                  {menu.roles.map((role) => (
                    <li key={role.path} className="w-full">
                      <Link 
                        href={role.path} 
                        className="flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors group w-full"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mr-3 text-xl opacity-70 group-hover:opacity-100">{role.icon}</span>
                        <span className="flex-grow text-sm font-medium">{role.name}</span>
                        {role.hasDot && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>
        </div>

        {/* Perfil de usuario (Movil) */}
        <div className="p-4 border-t border-gray-200 flex items-center space-x-3 flex-shrink-0">
          <img 
            src={`/users/${selectedPoint}.jpg`} 
            alt="User avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{getUserName(selectedPoint)}</p>
            <p className="text-xs text-gray-500">ID: 01</p>
          </div>
        </div>
      </div>

      {/* Menú del escritorio (vertical) */}
      <aside 
        className={`
          hidden md:flex fixed left-0 top-0 h-full w-64 bg-white shadow-lg transition-all duration-300 ease-in-out 
          border-r border-gray-200 flex-col
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Encabezado con Selector de Punto de Venta y Botón Cerrar */}
        <div 
          className="p-4 border-b border-gray-200 flex items-center justify-between relative"
          style={{ backgroundColor: menu.color }}
        >
          {/* Reemplazamos el select por un botón que activa el menú de puntos de venta */}
          <button 
            onClick={togglePuntosMenu}
            className="flex-grow px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-[80%] text-left flex items-center justify-between"
          >
            <span>{selectedPoint}</span>
            <ChevronRight size={16} className={`transition-transform ${isPuntosOpen ? 'rotate-90' : ''}`} />
          </button>
          
          <button 
            onClick={toggleMenu} 
            className="ml-2 p-1 rounded-full bg-white/20 hover:bg-white/40 text-gray-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>

          {/* Menú desplegable de Puntos de Venta (Desktop) */}
          {isPuntosOpen && (
            <div className="absolute top-[56px] left-4 right-4 bg-white rounded-md shadow-lg border border-gray-200 z-50">
              <ul className="py-2">
                {Object.keys(menuData).map((punto) => (
                  <li key={punto}>
                    <button
                      onClick={() => selectPuntoVenta(punto as PuntoVenta)}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${punto === selectedPoint ? 'bg-gray-50 font-medium' : ''}`}
                    >
                      {punto}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Elementos del Menú */}
        <nav className="flex-grow overflow-y-auto py-4">
          <ul className="space-y-2 px-4">
            {menu.items.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path} 
                  className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                >
                  <span className="mr-3 text-xl opacity-70 group-hover:opacity-100">{item.icon}</span>
                  <span className="flex-grow text-sm font-medium">{item.name}</span>
                  {item.badge !== undefined && (
                    <span className="ml-2 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Seccion de Roles */}
          {menu.roles && (
            <div className="px-4 mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Otros Roles</h4>
              <ul className="space-y-2">
                {menu.roles.map((role) => (
                  <li key={role.path}>
                    <Link 
                      href={role.path} 
                      className="flex items-center p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                      <span className="mr-3 text-xl opacity-70 group-hover:opacity-100">{role.icon}</span>
                      <span className="flex-grow text-sm font-medium">{role.name}</span>
                      {role.hasDot && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full ml-auto"></span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* Perfil de Usuario */}
        <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
          <img 
            src={`/users/${selectedPoint}.jpg`} 
            alt="User avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{getUserName(selectedPoint)}</p>
            <p className="text-xs text-gray-500">ID: 01</p>
          </div>
        </div>
      </aside>

      <div className="md:pl-16">
      </div>
    </>
  );
};

export default Menu;