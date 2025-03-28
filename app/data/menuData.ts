  // Menus dinamicos para las vistas 

  // Interfaz para los tipos Menus
  export type MenuItem = {
    name: string;
    icon: string;
    path: string;
    badge?: number; 
  };

  export type RoleItem = {
    name: string;
    icon: string;
    path: string;
    hasDot?: boolean; 
  };

  export type PuntoVentaData = {
    color: string;
    items: MenuItem[];
    roles?: RoleItem[]; 
  };

  // Definición del objeto menuData que contiene los menús para distintos puntos de venta
  export const menuData: Record<string, PuntoVentaData> = {
    "Punto venta 01": {
      color: "#F4C17B",
      items: [
        { name: "Verificación", icon: "📋", path: "/#verificacion", badge: 34 },
        { name: "Compras", icon: "🛒", path: "/#compras" },
        { name: "Gastos", icon: "💰", path: "/#gastos" },
        { name: "Historial", icon: "📁", path: "/#historial" },
        { name: "Cierre de caja", icon: "💳", path: "/#cierre" },
      ],
      roles: [
        { name: "Cartera", icon: "📑", path: "/#cartera", hasDot: true },
        { name: "Control de inventario", icon: "📦", path: "/#inventario" },
      ],
    },
    "Punto venta 02": {
      color: "#6297E0",
      items: [
        { name: "Tienda", icon: "👜", path: "/#tienda" },
        { name: "Traslados", icon: "🔄", path: "/#traslados", badge: 34 },
        { name: "Ingreso traslados", icon: "📦", path: "/#ingreso" },
        { name: "Ventas guardadas", icon: "🛍️", path: "/#ventas", badge: 34 },
        { name: "Historial", icon: "📁", path: "/#historial" },
      ],
      roles: [
        { name: "Picking", icon: "📦", path: "/#picking" },
        { name: "Packing", icon: "📦", path: "/#packing" },
        { name: "Despacho", icon: "🚛", path: "/#despacho" },
        { name: "Notificaciones", icon: "🔔", path: "/#notificaciones" },
      ],
    },
    "Punto venta 03": {
      color: "#6ED39D",
      items: [
        { name: "General", icon: "📋", path: "/#general" },
        { name: "Puntos de venta", icon: "🔄", path: "/#puntos" },
        { name: "Productos", icon: "📦", path: "/#productos" },
        { name: "Vendedores", icon: "🛍️", path: "/#vendedores" },
        { name: "Clientes", icon: "📁", path: "/#clientes" },
        { name: "Marcas", icon: "🏷️", path: "/#marcas" },
      ],
    },
  };
