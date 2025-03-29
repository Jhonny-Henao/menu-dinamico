# Menú Dinámico

Un componente de menú lateral dinámico desarrollado con Next.js y TypeScript que permite visualizar diferentes opciones según el punto de venta seleccionado.

## Características

- Menú lateral responsive con diseño adaptado para móvil y escritorio
- Cambio dinámico de opciones según el punto de venta seleccionado
- Soporte para múltiples puntos de venta con configuración personalizada
- Indicadores visuales (badges y dots) para elementos del menú
- Interfaz de usuario intuitiva con animaciones de transición
- Diseño basado en componentes con TypeScript para type safety

## Tecnologías utilizadas

- **Next.js**: Framework de React para renderizado del lado del servidor
- **TypeScript**: Para tipado estático y mejor autocompletado
- **Tailwind CSS**: Framework de CSS utilizado para los estilos
- **Lucide Icons**: Biblioteca de iconos para la interfaz
- **React Hooks**: useState y useEffect para manejar el estado del componente

## Estructura del proyecto

```
├── app/
│   ├── components/
│   │   └── Menu.tsx                # Componente principal del menú
│   │   └── Layout.tsx              # Componente de layout que estructura las páginas
│   ├── data/
│   │   └── menuData.ts             # Configuración del menú para cada punto de venta
│   ├── globals.css                 # Estilos globales de la aplicación
│   ├── layout.tsx                  # Layout principal que incluye el menú
│   └── page.tsx                    # Página principal
```

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/menu-dinamico.git
cd menu-dinamico
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en [http://localhost:3000](http://localhost:3000)

## Uso

### Configuración del Menú

Los menús para cada punto de venta se configuran en el archivo `menuData.ts`:


## Props del componente Menu

| Prop | Tipo | Descripción |
|------|------|-------------|
| `onPointChange` | `(point: string) => void` | Función que se llama cuando cambia el punto de venta seleccionado |
| `onMenuStateChange` | `(isOpen: boolean) => void` | Función que se llama cuando cambia el estado de apertura del menú |

## Licencia

MIT