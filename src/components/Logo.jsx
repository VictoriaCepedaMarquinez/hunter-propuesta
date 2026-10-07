import { MARCA } from '../constants/marca';
import { FLAMENCO_TRAZOS } from './flamencoTrazos';

/**
 * Logo de "Hunter" en SVG, basado en su Instagram:
 * "HUNTER" en letra gruesa condensada, blanca con una línea negra interior,
 * y el flamenco ("Hunting Bird") parado sobre la R.
 *
 * Props:
 *  - alto: alto en px (default 40); el ancho se ajusta solo
 *  - className: clases extra para el contenedor (ej. animaciones de hover)
 */
function Logo({ alto = 40, className = '' }) {
  const hueso = '#ece6dc';
  const noche = '#0b0b0a';

  const texto = {
    x: 100,
    y: 84,
    textAnchor: 'middle',
    fontSize: 46,
    letterSpacing: 1.5,
    style: { fontFamily: '"Anton", Impact, sans-serif' },
  };

  return (
    <svg
      viewBox="0 0 200 92"
      height={alto}
      width={(alto * 200) / 92}
      role="img"
      aria-label={MARCA.nombreCompleto}
      className={`select-none overflow-visible ${className}`}
    >
      {/* Flamenco parado sobre la R */}
      <g
        transform="translate(138 6) scale(0.7)"
        fill={hueso}
        stroke={hueso}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {FLAMENCO_TRAZOS}
      </g>

      {/* Borde blanco exterior, línea negra interior y relleno blanco */}
      <text {...texto} fill={hueso} stroke={hueso} strokeWidth="5" strokeLinejoin="round">HUNTER</text>
      <text {...texto} fill={hueso} stroke={noche} strokeWidth="2.2" strokeLinejoin="round">HUNTER</text>
      <text {...texto} fill={hueso}>HUNTER</text>
    </svg>
  );
}

export default Logo;
