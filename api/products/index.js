import { getSql } from '../_lib/db.js';

export default {
  async fetch(request) {
    if (request.method !== 'GET') {
      return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET' } });
    }

    const sql = getSql();
    const productos = await sql`
      SELECT id, nombre, descripcion, precio, imagen, categoria, destacado
      FROM products
      ORDER BY id ASC
    `;
    return Response.json({ productos });
  },
};
