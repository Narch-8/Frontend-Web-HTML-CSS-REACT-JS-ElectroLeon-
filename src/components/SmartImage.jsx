import { useState } from "react";

// Muestra una imagen; si el archivo no existe, muestra el "fallback" (por ejemplo, un icono)
export default function SmartImage({ src, alt, fallback = null }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback;
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
