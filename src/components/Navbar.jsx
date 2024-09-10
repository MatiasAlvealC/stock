// Importamos useState de React para manejar el estado del menú
import { useState } from 'react';
// Importamos Link de react-router-dom para la navegación
import { Link } from 'react-router-dom';

function Navbar() {
  // Estado para controlar si el menú está abierto o cerrado (para móviles)
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // La clase 'open' se añade cuando isOpen es true
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-brand">
        {/* Logo de la aplicación */}
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#4CAF50"/>
          </svg>
        </div>
        {/* Botón para abrir/cerrar el menú en dispositivos móviles */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? '×' : '☰'}
        </button>
      </div>
      {/* Lista de enlaces de navegación */}
      <ul className="navbar-menu">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/inventario">Inventario</Link></li>
        <li><Link to="/reporte">Reporte</Link></li>
        <li><Link to="/estadistica">Estadística</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;