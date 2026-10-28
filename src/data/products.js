
export const CATEGORIES = [
  "Tarjetas gráficas",
  "Procesadores",
  "Placas madres",
  "Memoria RAM",
  "Accesorios",
];

export const PRODUCTS = [
  { id: 1,  categoria: "Tarjetas gráficas", marca: "NVIDIA",   nombre: "GeForce RTX 4070 12GB",              precio: 599 },
  { id: 2,  categoria: "Tarjetas gráficas", marca: "AMD",      nombre: "Radeon RX 7800 XT 16GB",             precio: 499 },
  { id: 3,  categoria: "Tarjetas gráficas", marca: "NVIDIA",   nombre: "GeForce RTX 4060 8GB",               precio: 299 },
  { id: 4,  categoria: "Procesadores",      marca: "AMD",      nombre: "Ryzen 7 7800X3D",                    precio: 399 },
  { id: 5,  categoria: "Procesadores",      marca: "INTEL",    nombre: "Core i7-13700K",                     precio: 369 },
  { id: 6,  categoria: "Procesadores",      marca: "AMD",      nombre: "Ryzen 5 5600",                       precio: 129 },
  { id: 7,  categoria: "Placas madres",     marca: "ASUS",     nombre: "TUF Gaming B650-PLUS",               precio: 199 },
  { id: 8,  categoria: "Placas madres",     marca: "MSI",      nombre: "MAG Z790 Tomahawk",                  precio: 259 },
  { id: 9,  categoria: "Placas madres",     marca: "GIGABYTE", nombre: "B550 Aorus Elite",                   precio: 149 },
  { id: 10, categoria: "Memoria RAM",       marca: "CORSAIR",  nombre: "Vengeance DDR5 32GB 6000MHz",        precio: 119 },
  { id: 11, categoria: "Memoria RAM",       marca: "KINGSTON", nombre: "Fury DDR4 16GB 3200MHz",             precio: 49 },
  { id: 12, categoria: "Memoria RAM",       marca: "G.SKILL",  nombre: "Trident Z5 RGB 32GB",                precio: 139 },
  { id: 13, categoria: "Accesorios",        marca: "LOGITECH", nombre: "Mouse G502 Hero",                    precio: 49,  icono: "mouse" },
  { id: 14, categoria: "Accesorios",        marca: "REDRAGON", nombre: "Teclado mecánico Kumara",            precio: 45,  icono: "teclado" },
  { id: 15, categoria: "Accesorios",        marca: "HYPERX",   nombre: "Audífonos Cloud II",                 precio: 79,  icono: "audifonos" },
  { id: 16, categoria: "Accesorios",        marca: "ACER",     nombre: "Adaptador USB-C a HDMI 4K",          precio: 19,  icono: "adaptador" },
  { id: 17, categoria: "Accesorios",        marca: "LOGITECH", nombre: "Mouse inalámbrico MX Master 3S",     precio: 99,  icono: "mouse" },
  { id: 18, categoria: "Accesorios",        marca: "ACER",     nombre: "Hub USB 3.0 de 4 puertos",           precio: 15,  icono: "adaptador" },
];

// IDs de los productos que salen en "Sugerencias para ti" en el inicio
export const SUGGESTED_IDS = [1, 4, 10, 13, 15, 7, 3, 14];

// Marcas de una categoría (o de todas si no se pasa categoría), sin repetir y ordenadas
export const brandsOf = (categoria) =>
  [...new Set(PRODUCTS.filter((p) => !categoria || p.categoria === categoria).map((p) => p.marca))].sort();
