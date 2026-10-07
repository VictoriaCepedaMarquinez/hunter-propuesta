import { MARCA } from '../constants/marca';
import Flamenco from './Flamenco';
import Hoja from './Hoja';

const VALORES = [
  { titulo: 'Todas las noches', texto: 'Abrimos todos los días desde las 19 hs.' },
  { titulo: 'Barra de verdad', texto: 'Cócteles preparados al momento y birra tirada.' },
  { titulo: 'Cocina abierta', texto: 'Comidas para picar y compartir en la mesa.' },
  { titulo: 'Sin reservas', texto: 'Las mesas son por orden de llegada.' },
];

function AboutUs() {
  return (
    <section className="bg-noche textura py-20 md:py-28 px-6 md:px-12 overflow-hidden">
      <div className="relative container mx-auto max-w-7xl">
        <Hoja className="absolute -right-48 -top-16 w-[30rem] text-hueso opacity-[0.05] rotate-[200deg]" />
        <Hoja className="absolute -left-56 top-1/2 w-[26rem] text-hueso opacity-[0.04] rotate-12" />

        {/* CABECERA DE SECCIÓN */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-20 text-center">
          <span className="inline-block rounded-full bg-rosa text-noche font-etiqueta uppercase tracking-[0.2em] text-xs px-3.5 py-1 mb-6">
            Nosotros
          </span>
          <h2 className="font-display uppercase leading-[0.9] text-6xl md:text-8xl tracking-wide">
            <span className="block text-hueso">Salí a</span>
            <span className="block texto-hunter">cazar la noche</span>
          </h2>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative grid md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* COLUMNA IMÁGENES: fotos y marco rosa entran juntos, como un solo bloque */}
          <div className="md:col-span-6 relative" data-aos="fade-up">
            {/* Marco rosa decorativo, detrás de la foto grande */}
            <div className="absolute -top-3 -left-3 w-20 h-20 md:-top-6 md:-left-6 md:w-36 md:h-36 rounded-2xl md:rounded-3xl border-2 border-rosa/60" aria-hidden="true"></div>

            <div className="relative grid grid-cols-5 gap-4 lg:gap-6">
              <div className="col-span-3 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-pizarra">
                <img
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop"
                  alt="Salón con plantas tropicales y lámparas"
                  className="w-full h-full object-cover brightness-[0.85]"
                />
              </div>

              <div className="col-span-2 aspect-square rounded-3xl overflow-hidden shadow-xl mt-16 md:mt-24 border border-pizarra">
                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop"
                  alt="Amigos brindando en una mesa"
                  className="w-full h-full object-cover brightness-[0.85]"
                />
              </div>
            </div>
          </div>

          {/* COLUMNA TEXTO */}
          <div className="md:col-span-6 flex flex-col gap-10 md:pl-6 lg:pl-12 relative">

            <div className="text-hueso/80 text-base md:text-lg leading-relaxed space-y-5">
              <p>
                <span className="font-display uppercase text-hueso text-2xl tracking-wide">{MARCA.nombreCompleto}</span> es la esquina de {MARCA.ciudad} donde arranca la noche: tragos bien hechos, birra fría, algo rico para picar y la mesa llena de amigos.
              </p>
              <p className="text-humo">
                Sin vueltas y sin reservas. Llegás, te sentás y que empiece la cacería.
              </p>
            </div>

            {/* Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {VALORES.map((v, i) => (
                <div key={v.titulo} className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex-shrink-0 rounded-full border border-hueso/30 flex items-center justify-center text-hueso font-display text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-display uppercase text-hueso text-xl tracking-wide leading-none mb-1">{v.titulo}</h4>
                    <p className="text-sm text-humo">{v.texto}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Cartel "Sin reservas", como la bio de Instagram */}
            <div className="rounded-3xl border-2 border-hueso/80 p-8 md:p-10 relative text-center">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-rosa text-noche px-3.5 py-1 font-etiqueta text-[11px] uppercase tracking-[0.3em]">
                Aviso
              </span>
              <Flamenco tamano={44} className="mx-auto mb-4 text-hueso" />
              <p className="font-display uppercase text-hueso text-4xl md:text-5xl tracking-wide leading-none">
                {MARCA.politica}
              </p>
              <p className="font-etiqueta text-humo uppercase tracking-[0.3em] text-xs mt-3">
                {MARCA.politicaDetalle} · {MARCA.horarios[0].horas}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
