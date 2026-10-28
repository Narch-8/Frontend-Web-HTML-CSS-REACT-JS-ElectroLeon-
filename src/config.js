// Rutas de las imágenes principales (carpeta /public)
export const LOGO = "logo.svg";          // logo de electroleon
export const HERO = "images/hero.jpg";   // esto es para la imagen de bienvenida del inicio

// Convierte una ruta de la ubicacion de la carpeta /public en una URL válida
export const asset = (ruta) => import.meta.env.BASE_URL + ruta;
