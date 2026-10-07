# public/

Archivos estáticos servidos tal cual desde la raíz del sitio por Vite.

## carta.pdf

PDF de la carta (2 páginas). Los botones "Ver la Carta" (carrusel) y "MENU"
(navbar) lo abren en una pestaña nueva vía `src/constants/carta.js`.

Se generó con Python/Pillow a partir de las dos fotos de la carta en
`src/imagenes/` (página 1 = portada "MENÚ" / CALIENTES-FRÍOS-FILTRADOS;
página 2 = ACOMPAÑANTES / DESAYUNOS / CAFÉ 250grs / BEBIDAS). El procesado:

- realce suave (brillo +3%, contraste +5%, color +7%, nitidez +15%)
- ambas páginas reescaladas al mismo ancho y montadas sobre un lienzo del
  mismo tamaño, con fondo crema tomado de la propia imagen (sin costura) y
  un margen de aire
- marco fino marrón (#5a3c28) y salida a 180 dpi

Para actualizar la carta: reemplazá las fotos en `src/imagenes/` (mismo orden)
y volvé a correr el bloque Python de conversión, o pisá `public/carta.pdf`
directamente con el PDF nuevo. Para otro nombre o una URL externa, editá
`RUTA_CARTA_PDF` en `src/constants/carta.js`.
