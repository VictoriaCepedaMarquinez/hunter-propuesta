import { MARCA } from '../constants/marca';
import Hoja from './Hoja';

const direccion = MARCA.direcciones[0];
const consultaMapa = encodeURIComponent(`${direccion.calle}, ${direccion.ciudad}, Buenos Aires, Argentina`);

function IconoCuadro({ children }) {
  return (
    <div className="w-12 h-12 rounded-full border border-hueso/30 flex items-center justify-center flex-shrink-0 text-hueso">
      {children}
    </div>
  );
}

function DondeEncontrarnos() {
  // Mapa embebido de Google centrado en la dirección del local.
  const mapUrl = `https://www.google.com/maps?q=${consultaMapa}&output=embed`;
  const comoLlegarUrl = `https://www.google.com/maps/search/?api=1&query=${consultaMapa}`;

  return (
    <section id="ubicacion" className="bg-noche-claro textura py-16 md:py-28 px-6 border-t border-pizarra overflow-hidden scroll-mt-20">
      <div className="relative max-w-6xl mx-auto">
        <Hoja className="absolute -left-56 -top-24 w-[30rem] text-hueso opacity-[0.05] rotate-[30deg]" />
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-16">

          {/* COLUMNA TEXTO E INFO */}
          <div className="w-full lg:w-1/2 space-y-10" data-aos="fade-up">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-rosa text-noche font-etiqueta uppercase tracking-[0.2em] text-xs px-3.5 py-1">Ubicación</span>
              <h2 className="font-display uppercase leading-[0.9] text-5xl md:text-6xl tracking-wide">
                <span className="block text-hueso">Nos vemos</span>
                <span className="block texto-hunter">en la esquina</span>
              </h2>
              <p className="text-humo text-sm leading-relaxed max-w-md">
                {direccion.calle}, {direccion.esquina}. Abrimos todas las noches y las mesas son por orden de llegada: venite temprano.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <IconoCuadro>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </IconoCuadro>
                <div>
                  <p className="font-etiqueta text-[11px] uppercase tracking-[0.3em] text-humo">Dirección</p>
                  <a href={comoLlegarUrl} target="_blank" rel="noopener noreferrer" className="text-hueso font-medium hover:text-rosa transition-colors">
                    {direccion.calle} · {direccion.esquina}, {direccion.ciudad}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <IconoCuadro>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </IconoCuadro>
                <div>
                  <p className="font-etiqueta text-[11px] uppercase tracking-[0.3em] text-humo">Horarios</p>
                  {MARCA.horarios.map((h) => (
                    <p key={h.dias} className="text-hueso font-medium">
                      {h.dias} <span className="text-rosa">· {h.horas}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-5">
                <IconoCuadro>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </IconoCuadro>
                <div>
                  <p className="font-etiqueta text-[11px] uppercase tracking-[0.3em] text-humo">Mesas</p>
                  <p className="text-hueso font-medium">
                    {MARCA.politica} <span className="block text-humo text-sm font-normal">{MARCA.politicaDetalle}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA MAPA */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="150">
            <div className="relative w-full max-w-xl pr-3 md:pr-0">
              <div className="absolute -top-3 right-0 md:-top-4 md:-right-4 w-[calc(100%-0.75rem)] md:w-full h-full rounded-3xl border-2 border-rosa" aria-hidden="true" />
              <div className="relative h-[300px] md:h-[360px] rounded-3xl overflow-hidden shadow-2xl shadow-black/60 border border-pizarra">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${MARCA.nombreCompleto} — ${direccion.calle}, ${direccion.ciudad}`}
                ></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default DondeEncontrarnos;
