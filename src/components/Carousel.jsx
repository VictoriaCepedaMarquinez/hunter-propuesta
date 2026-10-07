import { useState, useEffect, useRef } from 'react';
import { abrirCartaPDF } from '../constants/carta';
import { MARCA } from '../constants/marca';

// Cada diapositiva: etiqueta en pastilla rosa + título en letra gruesa, con la segunda línea al estilo del logo de Hunter.
const DIAPOSITIVAS_BAR = [
  {
    url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop',
    titulo: 'Drink & Food',
    acento: 'en Tandil',
    subtitulo: 'Cócteles, birras y comidas para compartir. Todos los días desde las 19 hs, sin reservas.',
  },
  {
    url: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=1600&auto=format&fit=crop',
    titulo: 'Cócteles',
    acento: 'de la casa',
    subtitulo: 'Clásicos bien hechos y tragos de autor. Pedí el tuyo en la barra.',
  },
  {
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop',
    titulo: 'Birras',
    acento: 'con amigos',
    subtitulo: 'Cervezas tiradas, algo para picar y la mesa llena. Así arranca la noche.',
  },
  {
    url: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=1600&auto=format&fit=crop',
    titulo: 'Llegá temprano',
    acento: 'sin reservas',
    subtitulo: 'Las mesas son por orden de llegada. Paz 497, esquina Pinto.',
  },
];

function Carousel() {
  const [indiceActual, setIndiceActual] = useState(0);

  // Estados para calcular el desplazamiento táctil
  const touchStart = useRef(null);

  const siguienteFoto = () => {
    setIndiceActual((prev) => (prev === DIAPOSITIVAS_BAR.length - 1 ? 0 : prev + 1));
  };

  const anteriorFoto = () => {
    setIndiceActual((prev) => (prev === 0 ? DIAPOSITIVAS_BAR.length - 1 : prev - 1));
  };

  // Temporizador para pasar las fotos solo
  useEffect(() => {
    const intervalo = setInterval(siguienteFoto, 6000);
    return () => clearInterval(intervalo);
  }, [indiceActual]);

  // Lógica de deslizamiento táctil (Swipe) para Mobile
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart.current - touchEnd;

    // Umbral de sensibilidad (40px de movimiento mínimo para que sea intencional)
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        siguienteFoto(); // Deslizó hacia la izquierda
      } else {
        anteriorFoto(); // Deslizó hacia la derecha
      }
    }

    touchStart.current = null; // Reiniciar
  };

  return (
    <div
      className="relative w-full h-[600px] md:h-[min(560px,calc(100svh-8rem))] md:min-h-[460px] overflow-hidden group bg-noche select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* IMÁGENES CON FADE */}
      {DIAPOSITIVAS_BAR.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            indiceActual === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt={MARCA.nombreCompleto}
            className={`w-full h-full object-cover brightness-[0.5] transition-transform duration-[7000ms] ease-out ${
              indiceActual === index ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Degradado para dar profundidad y legibilidad al texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/40 to-noche/70" />
        </div>
      ))}

      {/* TEXTO OVERLAY */}
      {DIAPOSITIVAS_BAR.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-8 transition-all duration-1000 z-10
            ${indiceActual === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          <p className="rounded-full bg-rosa text-noche font-etiqueta uppercase tracking-[0.25em] text-[11px] md:text-xs px-4 py-1.5 mb-6 md:mb-5">
            {MARCA.nombreCompleto} · {MARCA.ciudad}
          </p>
          <h1 className="flex flex-col items-center leading-[0.9] uppercase drop-shadow-2xl mb-6 md:mb-5">
            <span className="font-display text-hueso text-[3.5rem] sm:text-7xl md:text-7xl lg:text-8xl tracking-wide">{slide.titulo}</span>
            <span className="font-display texto-hunter text-[3.5rem] sm:text-7xl md:text-7xl lg:text-8xl tracking-wide">{slide.acento}</span>
          </h1>
          <p className="text-sm md:text-base font-light max-w-xl leading-relaxed mb-8 md:mb-7 text-hueso/80 px-2">
            {slide.subtitulo}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-[260px] sm:max-w-none sm:w-auto">
            <button
              onClick={abrirCartaPDF}
              className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-rosa text-noche px-8 py-3.5 md:px-9 font-etiqueta text-sm font-medium uppercase tracking-[0.25em] hover:bg-rosa-oscuro transition-all shadow-xl shadow-black/40 active:scale-95 z-20"
            >
              Ver la Carta
              <span className="transition-transform duration-300 group-hover/cta:translate-x-1">&rarr;</span>
            </button>
          </div>
        </div>
      ))}

      {/* NAVEGACIÓN (Flechas) - Ocultas en móvil para evitar toques accidentales, se usan indicadores */}
      <button onClick={anteriorFoto} aria-label="Foto anterior" className="hidden md:block absolute top-1/2 left-6 -translate-y-1/2 rounded-full border border-hueso/30 p-4 text-hueso opacity-0 group-hover:opacity-100 transition-all hover:bg-rosa hover:border-rosa hover:text-noche z-20">
        &#10094;
      </button>
      <button onClick={siguienteFoto} aria-label="Foto siguiente" className="hidden md:block absolute top-1/2 right-6 -translate-y-1/2 rounded-full border border-hueso/30 p-4 text-hueso opacity-0 group-hover:opacity-100 transition-all hover:bg-rosa hover:border-rosa hover:text-noche z-20">
        &#10095;
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-10 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {DIAPOSITIVAS_BAR.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndiceActual(i)}
            aria-label={`Ir a la foto ${i + 1}`}
            className={`h-1 rounded-full transition-all ${indiceActual === i ? 'w-10 bg-rosa' : 'w-4 bg-hueso/30'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
