import { MARCA } from '../constants/marca';
import Hoja from './Hoja';
import Logo from './Logo';

function Footer() {
  const direccion = MARCA.direcciones[0];

  return (
    <footer className="bg-noche textura text-hueso pt-16 pb-6 px-6 border-t-2 md:border-t-4 border-rosa overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <Hoja className="absolute -right-40 -top-24 w-[26rem] text-hueso opacity-[0.04] -rotate-[150deg]" />
      </div>
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

        {/* BRANDING */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <Logo alto={56} className="flex-shrink-0" />
          <p className="font-etiqueta text-rosa text-xs uppercase tracking-[0.4em]">Bar · {MARCA.bajada}</p>
          <p className="text-[13px] text-humo max-w-[260px] leading-relaxed">
            {MARCA.tagline}, en {MARCA.ciudad}.
          </p>
        </div>

        {/* VISITANOS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-display uppercase text-hueso text-2xl tracking-wider mb-5">Visitanos</h3>
          <div className="space-y-3 text-[13px] text-hueso/80 leading-relaxed">
            <p>{direccion.calle} · {direccion.esquina}<span className="block text-humo">{direccion.ciudad}</span></p>
            {MARCA.horarios.map((h) => (
              <p key={h.dias}>
                <span className="text-hueso font-medium">{h.dias}</span>
                <span className="block text-humo">{h.horas}</span>
              </p>
            ))}
            <p className="text-hueso font-medium">{MARCA.politica}<span className="block text-humo font-normal">{MARCA.politicaDetalle}</span></p>
          </div>
        </div>

        {/* SEGUINOS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="font-display uppercase text-hueso text-2xl tracking-wider mb-5">Seguinos</h3>
          <p className="text-[13px] text-hueso/80 leading-relaxed max-w-[260px]">
            Carta, promos y lo que pasa cada noche, en nuestro Instagram.
          </p>
          <a
            href={MARCA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-rosa text-noche px-6 py-3 font-etiqueta text-xs uppercase tracking-[0.25em] hover:bg-rosa-oscuro transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            {MARCA.instagramUsuario}
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="relative max-w-6xl mx-auto pt-6 border-t border-pizarra flex flex-col md:flex-row justify-between items-center gap-4 font-etiqueta text-[11px] text-humo uppercase tracking-[0.25em]">
        <p>© 2026 {MARCA.nombreCompleto} · {MARCA.ciudad}</p>
        <p className="text-hueso/70">Nos vemos en la barra</p>
      </div>
    </footer>
  );
}
export default Footer;
