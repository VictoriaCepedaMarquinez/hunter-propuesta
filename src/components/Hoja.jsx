/**
 * Hoja de palmera en SVG, para el motivo tropical en blanco y negro de Hunter
 * (el fondo de sus historias destacadas y los vidrios grabados del local).
 * Se genera por código: una nervadura curva con folíolos a cada lado.
 *
 * Props:
 *  - className: tamaño, posición, rotación y opacidad (ej. "absolute w-64 opacity-10 rotate-12")
 *  - color: relleno (default currentColor)
 */
const FOLIOLOS = 22;

// Punto sobre la nervadura (curva cuadrática de abajo a la izquierda hacia arriba a la derecha)
const nervadura = (t) => {
  const [x0, y0, cx, cy, x1, y1] = [10, 190, 60, 60, 190, 12];
  const x = (1 - t) ** 2 * x0 + 2 * (1 - t) * t * cx + t ** 2 * x1;
  const y = (1 - t) ** 2 * y0 + 2 * (1 - t) * t * cy + t ** 2 * y1;
  const dx = 2 * (1 - t) * (cx - x0) + 2 * t * (x1 - cx);
  const dy = 2 * (1 - t) * (cy - y0) + 2 * t * (y1 - cy);
  const largo = Math.hypot(dx, dy);
  return { x, y, tx: dx / largo, ty: dy / largo };
};

const foliolo = (t, lado) => {
  const { x, y, tx, ty } = nervadura(t);
  const largo = 22 + 70 * Math.sin(Math.PI * Math.min(1, t * 1.15));
  // Normal hacia el lado, inclinada hacia la punta de la hoja
  const nx = -ty * lado;
  const ny = tx * lado;
  const px = x + (nx * 0.8 + tx * 0.6) * largo;
  const py = y + (ny * 0.8 + ty * 0.6) * largo;
  const ancho = 5 + 4 * Math.sin(Math.PI * t);
  const mx = (x + px) / 2;
  const my = (y + py) / 2;
  return `M ${x.toFixed(1)},${y.toFixed(1)} Q ${(mx + tx * ancho).toFixed(1)},${(my + ty * ancho).toFixed(1)} ${px.toFixed(1)},${py.toFixed(1)} Q ${(mx - tx * ancho).toFixed(1)},${(my - ty * ancho).toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)} Z`;
};

const TRAZO_HOJA = Array.from({ length: FOLIOLOS }, (_, i) => {
  const t = 0.08 + (i / (FOLIOLOS - 1)) * 0.88;
  return `${foliolo(t, 1)} ${foliolo(t, -1)}`;
}).join(' ');

function Hoja({ className = '', color = 'currentColor' }) {
  return (
    <svg viewBox="-60 -60 320 320" aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
      <path d="M 10,190 Q 60,60 190,12" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d={TRAZO_HOJA} fill={color} />
    </svg>
  );
}

export default Hoja;
