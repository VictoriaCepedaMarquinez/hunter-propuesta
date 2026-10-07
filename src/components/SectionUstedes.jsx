import { MARCA } from '../constants/marca';
import Logo from './Logo';

// Grilla al estilo de su perfil de Instagram: fotos cálidas a sangre con "HUNTER" abajo al centro.
const FOTOS = [
  { url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=700&auto=format&fit=crop', alt: 'Amigos brindando en una mesa' },
  { url: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=700&auto=format&fit=crop', alt: 'Bartender sirviendo un trago con hielo' },
  { url: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=700&auto=format&fit=crop', alt: 'Gente en la barra con luz roja' },
];

function SectionUstedes() {
  return (
    <section id="ustedes" className="bg-noche textura pt-4 pb-16 md:pt-6 md:pb-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12" data-aos="fade-up">
          <div>
            <span className="inline-block rounded-full bg-rosa text-noche font-etiqueta uppercase tracking-[0.2em] text-xs px-3.5 py-1 mb-4">
              Ustedes
            </span>
            <h2 className="font-display uppercase leading-[0.95] text-5xl md:text-7xl tracking-wide">
              <span className="block text-hueso">Las noches</span>
              <span className="block texto-hunter">en Hunter</span>
            </h2>
          </div>
          <a
            href={MARCA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-auto font-etiqueta uppercase tracking-[0.25em] text-sm text-hueso hover:text-rosa transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            {MARCA.instagramUsuario}
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {FOTOS.map((f, i) => (
            <a
              key={f.url}
              href={MARCA.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-noche-claro"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
            >
              <img
                src={f.url}
                alt={f.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-noche/80 to-transparent" />
              <Logo alto={30} className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-auto h-4 sm:h-6 md:h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionUstedes;
