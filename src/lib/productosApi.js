// Cliente para la API de productos (GET /api/products), respaldada por Neon.

async function manejarRespuesta(res) {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
  return data;
}

export async function obtenerProductos() {
  const res = await fetch('/api/products');
  const { productos } = await manejarRespuesta(res);
  return productos;
}
