import { abrirCartaPDF } from '../constants/carta';
import { MARCA } from '../constants/marca';
import Hoja from './Hoja';
import Logo from './Logo';

const FRANJA = ['Drink & Food', 'Cócteles', 'Cervezas', 'Comidas', 'Promos', 'Sin reservas', 'Todos los días desde las 19 hs'];

// Las mismas categorías que Hunter usa en sus historias destacadas de Instagram.
const MOMENTOS = [
  {
    url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop',
    titulo: 'Cócteles',
    texto: 'Clásicos de barra y tragos de autor, preparados al momento.',
  },
  {
    url: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=800&auto=format&fit=crop',
    titulo: 'Cervezas',
    texto: 'Tiradas, bien frías y en la medida justa para la ronda.',
  },
  {
    url: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop',
    titulo: 'Comidas',
    texto: 'Platos para picar y compartir mientras dura la ronda.',
  },
  {
    url: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=800&auto=format&fit=crop',
    titulo: 'Promos',
    texto: 'Las promos de la semana las subimos a nuestro Instagram.',
  },
];

function SectionPropuesta() {
  return (
    <section id="carta" className="bg-noche textura overflow-hidden scroll-mt-20">
      {/* FRANJA ROSA EN MOVIMIENTO */}
      <div className="bg-rosa py-3 md:py-2.5 overflow-hidden">
        <div className="flex w-max animate-marquesina">
          {[...FRANJA, ...FRANJA, ...FRANJA, ...FRANJA].map((item, i) => (
            <span key={i} className="font-display uppercase text-noche text-xl md:text-lg tracking-wider px-6 md:px-5 flex items-center gap-6 md:gap-5 whitespace-nowrap">
              {item}
              <span className="text-noche/50 text-xs" aria-hidden="true">&#10022;</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-28">
        {/* Hojas tropicales de fondo */}
        <Hoja className="absolute -right-40 -top-10 w-[28rem] text-hueso opacity-[0.05] rotate-[200deg]" />
        <Hoja className="absolute -left-48 bottom-0 w-[24rem] text-hueso opacity-[0.04] rotate-12" />

        {/* CABECERA */}
        <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16" data-aos="fade-up">
          <div>
            <span className="inline-block rounded-full bg-rosa text-noche font-etiqueta uppercase tracking-[0.2em] text-xs px-3.5 py-1 mb-4">
              Nuestra carta
            </span>
            <h2 className="font-display uppercase leading-[0.95] text-5xl md:text-7xl tracking-wide">
              <span className="block text-hueso">Drink</span>
              <span className="block texto-hunter ml-10 md:ml-24">& Food</span>
            </h2>
          </div>
          <p className="text-humo text-sm leading-relaxed max-w-sm">
            Barra, cocina y buena música todas las noches. En {MARCA.nombreCompleto} no se reserva: llegás, te sentás y arranca la noche.
          </p>
        </div>

        {/* TARJETAS como sus posteos: foto a sangre y "HUNTER" abajo al centro */}
        <div className="relative -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
          {MOMENTOS.map((m, i) => (
            <article
              key={m.titulo}
              className="group relative shrink-0 w-[78%] snap-start aspect-[4/5] sm:w-auto rounded-3xl overflow-hidden bg-noche-claro"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={m.url}
                alt={m.titulo}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.75] group-hover:scale-110 group-hover:brightness-[0.5] transition-all duration-[1200ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noche via-noche/20 to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-rosa text-noche font-etiqueta uppercase tracking-[0.2em] text-[11px] px-2.5 py-1">
                {m.titulo}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-center text-center">
                <p className="text-hueso/85 text-sm leading-relaxed mb-4 max-w-[16rem] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-sm:opacity-100 max-sm:translate-y-0">
                  {m.texto}
                </p>
                <Logo alto={30} />
              </div>
            </article>
          ))}
        </div>

        <p className="sm:hidden font-etiqueta text-humo text-[11px] uppercase tracking-[0.3em] text-center mt-4">Deslizá &rarr;</p>

        <div className="relative text-center mt-10 md:mt-14" data-aos="fade-up">
          <button
            onClick={abrirCartaPDF}
            className="group/cta inline-flex items-center gap-2 rounded-full bg-rosa text-noche px-10 py-4 font-etiqueta text-sm uppercase tracking-[0.25em] hover:bg-rosa-oscuro transition-all active:scale-95"
          >
            Mirá la carta completa
            <span className="transition-transform duration-300 group-hover/cta:translate-x-1">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionPropuesta;
