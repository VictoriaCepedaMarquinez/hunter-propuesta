// Script de una sola vez: crea la tabla `products` en Neon y la carga con
// los productos que hoy están hardcodeados en SectionsMenu.jsx.
// Uso: npx dotenv -e .env.local -- node scripts/seed-products.mjs
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

const PRODUCTOS = [
  { nombre: "Flat White Doble", descripcion: "Doble shot de espresso de especialidad con leche texturizada sedosa. Origen Colombia.", precio: 3500, imagen: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=500", categoria: "Cafetería", destacado: true },
  { nombre: "Latte de Vainilla", descripcion: "Espresso suave con leche cremosa y un toque artesanal de vainilla natural.", precio: 3800, imagen: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500", categoria: "Cafetería", destacado: false },
  { nombre: "Cold Brew", descripcion: "Extracción en frío de 18 horas. Notas a chocolate y frutos secos. Refrescante e intenso.", precio: 3200, imagen: "https://i.blogs.es/36f397/cafe-hielo/840_560.jpeg", categoria: "Cafetería", destacado: false },
  { nombre: "Croissant de Manteca", descripcion: "Hojaldre artesanal con manteca de primera calidad. Crujiente por fuera y tierno por dentro.", precio: 2200, imagen: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500", categoria: "Pastelería", destacado: false },
  { nombre: "Alfajor de Almendras", descripcion: "Dos tapas de almendras rellenas de dulce de leche repostero y bañadas en chocolate semi-amargo.", precio: 2500, imagen: "https://recipesblob.azureedge.net/assets/0aa685bf74fd443b863749e438ec758a/750x910/alfajores-de-dulce-de-leche.jpg", categoria: "Pastelería", destacado: true },
  { nombre: "Tostado de Jamón y Queso", descripcion: "Pan de masa madre tostado, jamón natural y queso danbo fundido.", precio: 4500, imagen: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500", categoria: "Salado", destacado: false },
  { nombre: "Avocado Toast", descripcion: "Pan integral de semillas, palta, huevo poché y un toque de semillas de sésamo.", precio: 5800, imagen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500", categoria: "Salado", destacado: true },
  { nombre: "Limonada con Menta", descripcion: "Limonada natural hecha en el momento con hojas de menta fresca y jengibre.", precio: 3000, imagen: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=500", categoria: "Bebidas", destacado: false },
];

async function main() {
  await sql`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      nombre TEXT NOT NULL,
      descripcion TEXT NOT NULL DEFAULT '',
      precio NUMERIC NOT NULL,
      imagen TEXT NOT NULL,
      categoria TEXT NOT NULL,
      destacado BOOLEAN NOT NULL DEFAULT FALSE,
      creado_en TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;

  const [{ count }] = await sql`SELECT count(*)::int AS count FROM products`;
  if (count > 0) {
    console.log(`La tabla products ya tiene ${count} filas, no se vuelve a sembrar.`);
    return;
  }

  for (const p of PRODUCTOS) {
    await sql`
      INSERT INTO products (nombre, descripcion, precio, imagen, categoria, destacado)
      VALUES (${p.nombre}, ${p.descripcion}, ${p.precio}, ${p.imagen}, ${p.categoria}, ${p.destacado})
    `;
  }
  console.log(`Sembrados ${PRODUCTOS.length} productos.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
