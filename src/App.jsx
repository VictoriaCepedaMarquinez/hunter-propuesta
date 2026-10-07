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
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
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
