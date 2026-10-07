import { useState } from 'react';
import { abrirCartaPDF } from '../constants/carta';
import { MARCA } from '../constants/marca';
import Logo from './Logo';

function Navbar({ setPagina }) {
  const [isOpen, setIsOpen] = useState(false);

  const navegar = (pagina) => {
    setPagina(pagina);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const verLaCarta = () => {
    abrirCartaPDF();
    setIsOpen(false);
  };

  const claseLink = 'group/link relative font-etiqueta text-hueso text-2xl md:text-sm uppercase tracking-[0.2em] hover:text-rosa transition-colors';

  return (
    <>
      <nav className="sticky top-0 z-50 h-20 px-6 flex items-center bg-noche/95 backdrop-blur-md border-b border-pizarra">
        <div className="container mx-auto flex justify-between items-center md:grid md:grid-cols-3 w-full">

          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer group z-[60] relative w-fit"
            onClick={() => navegar('Home')}
            aria-label={`${MARCA.nombreCompleto} — inicio`}
          >
            <Logo alto={46} className="flex-shrink-0 transition-transform duration-500 group-hover:-rotate-2" />
            <span className="hidden lg:block font-etiqueta text-humo text-[10px] uppercase tracking-[0.3em] leading-tight text-left border-l border-pizarra pl-3">
              Bar<br />{MARCA.bajada}
            </span>
          </button>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <div className="md:hidden z-[60]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            >
              <span className={`block w-7 h-0.5 bg-hueso transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-hueso transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-hueso transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* MENÚ DESPLEGABLE */}
          <div className={`
            fixed inset-0 w-full h-screen bg-noche
            flex flex-col items-center justify-center gap-10
            transition-transform duration-300 ease-in-out z-50
            md:static md:h-auto md:bg-transparent md:translate-x-0 md:flex-row md:justify-center
            ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}>
              <button onClick={() => navegar('Home')} className={claseLink}>
                INICIO
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-rosa transition-all duration-300 group-hover/link:w-full"></span>
              </button>
              <button onClick={verLaCarta} className={claseLink}>
                MENU
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-rosa transition-all duration-300 group-hover/link:w-full"></span>
              </button>
              <button onClick={() => navegar('nosotros')} className={claseLink}>
                NOSOTROS
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-rosa transition-all duration-300 group-hover/link:w-full"></span>
              </button>

              <p className="md:hidden font-etiqueta text-humo text-xs uppercase tracking-[0.3em] text-center mt-4">
                {MARCA.politica} · {MARCA.horarios[0].horas}
              </p>
          </div>

          {/* INSTAGRAM DESKTOP */}
          <div className="hidden md:flex justify-end items-center">
              <a
                href={MARCA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram ${MARCA.instagramUsuario}`}
                className="text-hueso hover:text-rosa transition-colors p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
