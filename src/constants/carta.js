// Link a la carta de Hunter (PDF en Google Drive, el mismo que comparten en Instagram).
// Para servirla desde el sitio, subí el PDF a `public/carta.pdf` y cambiá esto por '/carta.pdf'.
export const RUTA_CARTA_PDF = 'https://drive.google.com/file/d/1NfvrohXV2r_EUp1mX3RLSzp5cF1USX0H/view';

// Abre la carta en una pestaña nueva.
export const abrirCartaPDF = () => {
  window.open(RUTA_CARTA_PDF, '_blank', 'noopener,noreferrer');
};
