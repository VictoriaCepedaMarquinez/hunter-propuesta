import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

// Importamos los estilos de AOS
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const [pagina, setPagina] = useState('Home');

  // Inicializamos AOS una sola vez al cargar la aplicación
  useEffect(() => {
    // Entradas cortas y suaves; se desactivan si el sistema pide reducir movimiento.
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: 'ease-out-cubic',
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  // Función para renderizar la página seleccionada
  const renderPagina = () => {
    switch (pagina) {
      case 'Home':
        return <Home />;
      case 'nosotros':
        return <AboutUs />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-noche font-sans">
      <Navbar setPagina={setPagina} />

      <main>
        {renderPagina()}
      </main>
    </div>
  );
}

export default App;
