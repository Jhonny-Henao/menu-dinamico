// Layout components
import { ReactNode } from "react";
import Menu from "@/app/components/Menu";

// Definición del componente Layout, que actúa como una estructura base para las páginas
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: "flex" }}> 
      <Menu /> {/* Renderiza el menú lateral */}
      <main style={{ flex: 1, padding: 20 }}> 
        {children} {/* Renderiza el contenido dinámico de cada página */}
      </main>
    </div>
  );
};

export default Layout;
