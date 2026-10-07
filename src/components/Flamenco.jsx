import { FLAMENCO_TRAZOS } from './flamencoTrazos';

/**
 * El flamenco de Hunter ("Hunting Bird"): parado en una pata, mirando a la izquierda,
 * en línea blanca. Se usa en el logo, en los íconos de destacadas y como decoración.
 *
 * Props:
 *  - tamano: alto en px (default 32)
 *  - color: color del trazo (default currentColor)
 *  - grosor: grosor del trazo en unidades del viewBox (default 1.6)
 */
function Flamenco({ tamano = 32, color = 'currentColor', grosor = 1.6, className = '' }) {
  return (
    <svg
      viewBox="0 0 36 58"
      height={tamano}
      width={(tamano * 36) / 58}
      aria-hidden="true"
      className={className}
      fill={color}
      stroke={color}
      strokeWidth={grosor}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {FLAMENCO_TRAZOS}
    </svg>
  );
}

export default Flamenco;
