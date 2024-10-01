import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

// Importa tus componentes de página aquí
import Inventario from './pages/Inventario';
import Reporte from './pages/Reporte';
import Login from './pages/Login';
import Register from './pages/Register';
import Caja from './pages/Caja';

function App() {
  return (
    // Envolvemos toda la aplicación con el componente Router
    <Router>
      <div className="App">
        {/* Incluimos el componente Navbar */}
        <Navbar />
        <div id="content">
          {/* Definimos las rutas de la aplicación */}
          <Routes>
            {/* Ruta para la página de inicio (Login) */}
            <Route path="/" element={<Login />} />
            {/* Ruta para la página de inicio (Login) */}
            <Route path="/login" element={<Login />} />
            {/* Ruta para la página de Registro */}
            <Route path="/register" element={<Register />} />
            {/* Ruta para la página de Inventario */}
            <Route path="/inventario" element={<Inventario />} />
            {/* Ruta para la página de Reporte */}
            <Route path="/reporte" element={<Reporte />} />
            {/* Ruta para la página de Caja */}
            <Route path="/caja" element={<Caja />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
